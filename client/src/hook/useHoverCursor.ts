import { useRef, useCallback } from "react";

export default function useHoverCursor() {
  const cursor = useCallback((e: MouseEvent) => {
    const cursorTarget = document.getElementById("cursor");
    if (cursorTarget) {
      cursorTarget.style.left = e.pageX + "px";
      cursorTarget.style.top = e.pageY - window.scrollY + "px";
    }
  }, []);

  const handleHover = useCallback(() => {
    const cursorTaget = document.getElementById("cursor");
    window.addEventListener("mousemove", cursor);
    if (cursorTaget) {
      cursorTaget.classList.add("cursor-grow");
    }
  }, [cursor]);

  const handleLeave = useCallback(() => {
    const cursorTaget = document.getElementById("cursor");
    window.removeEventListener("mousemove", cursor);
    if (cursorTaget) {
      cursorTaget.classList.remove("cursor-grow");
    }
  }, [cursor]);

  return { cursor, handleHover, handleLeave };
}
