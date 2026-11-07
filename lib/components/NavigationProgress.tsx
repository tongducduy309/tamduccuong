"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type ProgressState = "idle" | "loading" | "complete";

export function NavigationProgress() {
  const pathname = usePathname();
  const [state, setState] = useState<ProgressState>("idle");
  const navigatingRef = useRef(false);
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (
        !link ||
        link.target === "_blank" ||
        link.hasAttribute("download") ||
        link.getAttribute("aria-disabled") === "true"
      ) {
        return;
      }

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        destination.pathname === window.location.pathname
      ) {
        return;
      }

      navigatingRef.current = true;
      if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
      setState("loading");

      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = setTimeout(() => {
        navigatingRef.current = false;
        setState("idle");
      }, 12000);
    };

    document.addEventListener("click", handleDocumentClick, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
      if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!navigatingRef.current) return;

    navigatingRef.current = false;
    if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);

    const frame = window.requestAnimationFrame(() => {
      setState("complete");
      finishTimerRef.current = setTimeout(() => {
        setState("idle");
      }, 260);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  if (state === "idle") return null;

  return (
    <div
      className="navigation-progress"
      data-state={state}
      role="progressbar"
      aria-label="Đang tải trang"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={state === "complete" ? 100 : undefined}
    >
      <span />
      <span className="sr-only" role="status" aria-live="polite">
        Đang chuyển trang, vui lòng chờ
      </span>
    </div>
  );
}
