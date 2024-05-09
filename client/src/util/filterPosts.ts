export function sortData<T>(
  user: T[],
  columnName: string,
  order: "asc" | "desc"
) {
  if (!columnName || !order) {
    return user.slice();
  }

  // 새로운 배열을 만들어 정렬 작업 수행
  return (user as any[]).slice().sort((a, b) => {
    const aValue = (a as any)[columnName];
    const bValue = (b as any)[columnName];

    //숫자일때
    if (typeof aValue === "number" && typeof bValue === "number") {
      return order === "asc" ? aValue - bValue : bValue - aValue;
    }

    if (aValue < bValue) {
      return order === "asc" ? -1 : 1;
    } else if (aValue > bValue) {
      return order === "asc" ? 1 : -1;
    } else {
      return 0;
    }
  });
}
