import { checkFileValidity } from "../util/checkFile";
import { ChangeEvent } from "react";
import React from "react";
import imageCompression from "browser-image-compression";

export const handleUpdateImage = async (
  e: ChangeEvent<HTMLInputElement>,
  dispatch: React.Dispatch<React.SetStateAction<any>>
) => {
  try {
    const file = e.target.files?.[0];
    if (file) {
      //이미지 확장자 및 이미지 용량 체크
      if (!checkFileValidity(file)) {
        return;
      }

      const compressedFile = await compressImage(file); // 이미지 압축
      if (compressedFile) {
        await handleFileUpload(compressedFile, dispatch);
      }
    }
  } catch (error) {
    console.error("Failed to compress image file.");
  }
};

export const handleFileUpload = async (
  file: File,
  dispatch: React.Dispatch<React.SetStateAction<any>>
) => {
  try {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result as string;

        // 리듀서 저장
        dispatch({ type: "UPDATE_URL", payload: url });
        dispatch({ type: "UPDATE_IMAGE", payload: file });
      };
      reader.readAsDataURL(file); // 리사이징된 파일을 읽어옴
    }
  } catch (error) {
    console.log(error);
  }
};

const compressImage = async (file: File) => {
  const options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 1024,
  };

  try {
    // 이미지 압축
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.log(error);
  }
};
