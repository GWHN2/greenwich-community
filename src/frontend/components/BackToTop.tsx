import { ChevronDoubleUpIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import Scroll from "react-scroll";
import useScroll from "../hooks/useScroll";

const BackToTop = () => {
  const scroll = useScroll();

  const width = 64;
  const strokeWidth = 4;
  const radius = width / 2 - strokeWidth * 2;

  useEffect(() => {
    var circle = document.querySelector("circle");
    if (circle) {
      var circumference = radius * 2 * Math.PI;
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;
      const offset = circumference - (scroll.progress / 100) * circumference;
      circle.style.strokeDashoffset = offset.toString();
    }

    return () => {
      if (circle) {
        circle.style.strokeDashoffset = "0";
      }
    };
  }, [scroll.progress, radius]);
  return (
    <div
      className={`z-50 fixed bottom-0 right-0
   duration-500 cursor-pointer hover:scale-110 -translate-x-1/2 -translate-y-1/2 
   ${scroll.isScrolling ? "scale-100" : "scale-0 translate-y-full"} 
 `}
    >
      <button
        className="flex items-center justify-center"
        onClick={() => {
          const scroll = Scroll.animateScroll;
          scroll.scrollToTop({
            duration: 500,
            delay: 100,
            smooth: true,
          });
        }}
      >
        <svg className="opacity-100 progress-ring" width={width} height={width}>
          <circle
            className="progress-ring__circle"
            stroke="#886cc0"
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
          />
        </svg>
        <div
          className={`absolute p-2 rounded-full bg-primary-400/20 text-primary-400`}
        >
          <ChevronDoubleUpIcon width={(width * 3) / 5} />
        </div>
      </button>
    </div>
  );
};

export default BackToTop;
