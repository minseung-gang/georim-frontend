import { ChangeEvent } from "react";
import React from "react";
import imageCompression from "browser-image-compression";

export const ALLOW_FILE_EXTENSION = "jpg,jpeg,png,svg";
export const MAX_FILE_SIZE_IN_MB = 1.5 * 1024 * 1024;

/**
 * 파일 확장자를 검사해주는 함수입니다.
 * @param param
 * @returns true: 가능 확장자, false : 불가능 확장자
 *
 */
const fileExtensionValid = ({ name }: { name: string }): boolean => {
  const extension = removeFileName(name);

  if (!(ALLOW_FILE_EXTENSION.indexOf(extension) > -1) || extension === "") {
    return false;
  }
  return true;
};

/**
 * 해당 함수의 기능은 .을 제거한 순수 파일 확장자를 return해줍니다.
 * @param originalFileName 업로드할 파일명
 * @returns .을 제거한 순수 파일 확장자(png, jpg 등)
 */
const removeFileName = (originalFileName: string): string => {
  const lastIndex = originalFileName.lastIndexOf(".");

  if (lastIndex < 0) {
    return "";
  }

  return originalFileName.substring(lastIndex + 1).toLowerCase();
};

export function checkImageValidity(file: File) {
  // 파일 확장자 유효성 검사
  if (!fileExtensionValid(file)) {
    alert(
      `업로드 가능한 확장자가 아닙니다. [가능한 확장자 : ${ALLOW_FILE_EXTENSION}]`
    );
    return false;
  }

  // 파일 용량 체크
  if (file.size > MAX_FILE_SIZE_IN_MB) {
    alert(
      `업로드 가능한 최대 용량은 ${MAX_FILE_SIZE_IN_MB / 1024 / 1024}MB입니다.`
    );
    return false;
  }
  return true;
}

export const compressImage = async (file: File): Promise<File | null> => {
  const options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 1024,
  };

  try {
    return await imageCompression(file, options);
  } catch (error) {
    console.error("Failed to compress image:", error);
    return null;
  }
};

export const handleUpdateImage = async (
  e: ChangeEvent<HTMLInputElement>,
  dispatche: React.Dispatch<React.SetStateAction<any>>,
  urlType: string,
  imgType: string
) => {
  try {
    const file = e.target.files?.[0];
    if (file && checkImageValidity(file)) {
      const compressedFile = await compressImage(file);
      if (compressedFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const url = reader.result as string;

          dispatche({ type: urlType, payload: url });
          dispatche({ type: imgType, payload: file });
        };
        reader.readAsDataURL(file);
      }
    }
  } catch (error) {
    console.error("Failed to compress image file.");
  }
};
