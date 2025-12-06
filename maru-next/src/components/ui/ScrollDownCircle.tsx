import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export function ScrollDownCircle() {
  return (
    <a href="#about" className="group relative flex h-[200px] w-[200px] cursor-pointer items-center justify-center">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 300 300"
        enableBackground="new 0 0 300 300"
        xmlSpace="preserve"
        className="absolute h-full w-full animate-[rotate-2d-reverse_20s_linear_infinite] transition-transform duration-500 group-hover:scale-110"
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -85, 0 a 85,85 0 0,1 170,0 a 85,85 0 0,1 -170,0 "
          />
        </defs>
        <circle cx="150" cy="100" r="75" fill="none" />
        <g>
          <use xlinkHref="#circlePath" fill="none" />
          <text className="fill-white font-bold uppercase text-[14px] opacity-100">
            <textPath xlinkHref="#circlePath" textLength="534" lengthAdjust="spacing">Scroll Down{'\u00A0'}{'\u00A0'}-{'\u00A0'}{'\u00A0'}Scroll Down{'\u00A0'}{'\u00A0'}-{'\u00A0'}{'\u00A0'}</textPath>
          </text>
        </g>
      </svg>
      <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-light">
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black transition-colors group-hover:bg-black/80">
          <ArrowRight className="h-4 w-4 rotate-90 text-accent" />
        </div>
      </div>
    </a>
  );
}
