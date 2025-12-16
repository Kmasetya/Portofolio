import React from "react";
import Figma from "../assets/animasi/figma.png";
import Vscode from "../assets/animasi/vscode.png";
import Css from "../assets/animasi/css.png";
import Js from "../assets/animasi/js.png";
import Github from "../assets/animasi/github.png";
import Html from "../assets/animasi/html.png";
import React1 from "../assets/animasi/react.png";

const items = [
  { img: Figma, name: "Figma" },
  { img: Vscode, name: "VS Code" },
  { img: Css, name: "CSS" },
  { img: Js, name: "JavaScript" },
  { img: Github, name: "Github" },
  { img: Html, name: "HTML" },
  { img: React1, name: "React" },
];

export default function Content() {
  return (
    <div className="relative bg-[#1E1E1E] py-10 overflow-hidden">
      {/* CSS LANGSUNG DI COMPONENT */}
      <style>
        {`
          @keyframes scrollLeft {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .scroll-track {
            display: flex;
            width: max-content;
            animation: scrollLeft 20s linear infinite;
          }
        `}
      </style>

      <div className="w-full overflow-hidden">
        <div className="scroll-track">
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 shrink-0 text-white font-bold text-[25px]"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 grayscale"
              />
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
