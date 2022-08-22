import React, { useEffect, useRef, useState } from "react";

interface IScrollStopListenerProps {
  element?: any;
  callback: { (): void; (): void };
  timeout?: number;
}

const createScrollStopListener = (props: IScrollStopListenerProps) => {
  const { element, callback, timeout } = props;
  let removed = false;
  let handle: any;
  const onScroll = () => {
    if (handle) {
      clearTimeout(handle);
    }
    handle = setTimeout(callback, timeout || 200); // default 200 ms
  };
  element.addEventListener("scroll", onScroll);
  return () => {
    if (removed) {
      return;
    }
    removed = true;
    if (handle) {
      clearTimeout(handle);
    }
    element.removeEventListener("scroll", onScroll);
  };
};

export const useScrollStopListener = (props: IScrollStopListenerProps) => {
  const { callback, timeout } = props;
  const callbackRef = useRef<any>();
  callbackRef.current = callback;
  React.useEffect(() => {
    const destroyListener = createScrollStopListener({
      element: window,
      callback: () => {
        if (callbackRef.current) {
          callbackRef.current();
        }
      },
      timeout: timeout,
    });

    return () => destroyListener();
  }, [timeout]);
};

const useScroll = () => {
  const [progress, setProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useScrollStopListener({
    callback: () => {
      setIsScrolling(false);
    },
    timeout: 1000,
  });

  useEffect(() => {
    const updateScrollCompletion = () => {
      setIsScrolling(true);
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(Number(currentProgress / scrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);

    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);

  return { isScrolling, progress };
};

export default useScroll;
