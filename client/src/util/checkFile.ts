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

export function checkFileValidity(file: File) {
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
