"use client";

import { useEffect, useState } from "react";
import { WELCOME_MESSAGES } from "../../../constants/constants";
import packageJson from "../../../../package.json";

const HOME_PAGE = "Redirecting to ABOUT_ME";

export default function Landing() {
  const versionApp = `V.${packageJson.version}`;
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [glitchActive, setGlitchActive] = useState(false);
  const [welcomeMessage] = useState(
    WELCOME_MESSAGES[Math.floor(Math.random() * WELCOME_MESSAGES.length)]
  );

  useEffect(() => {
    let charIndex = 0;

    const typeMessage = () => {
      if (charIndex < welcomeMessage.length) {
        setMessage(welcomeMessage.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeMessage, Math.random() * 50 + 30);
      }
    };

    const progressInterval = setInterval(() => {
      setProgress((current) =>
        current < 100 ? current + 1 : (clearInterval(progressInterval), 100)
      );
    }, 70);

    setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 150);
      }
    }, 2000);

    typeMessage();
  }, [welcomeMessage]);

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen w-full bg-black text-yellow-300 font-mono overflow-hidden ${
        glitchActive ? "animate-glitch-subtle" : ""
      }`}
    >
      {/* Contenedor principal responsivo */}
      <div className="z-10 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl px-4 space-y-6">
        {/* Indicador de versión */}
        <div className="flex items-center justify-center mb-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2 animate-pulse"></div>
          <div className="text-xs sm:text-sm text-yellow-400 uppercase tracking-widest relative">
            <span
              className={`absolute -inset-0.5 text-cyan-400 opacity-0 ${
                glitchActive ? "opacity-50 translate-x-[1px]" : ""
              }`}
            >
              {versionApp}
            </span>
            {versionApp}
          </div>
        </div>

        {/* Terminal con efecto de tipeo */}
        <div className="bg-black/60 p-4 border border-yellow-500/30 min-h-[100px] rounded-sm">
          <div className="flex items-center mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
            <span className="text-xs text-yellow-400/70 ml-2">
              fmarcosdev@:~
            </span>
          </div>
          <div className="flex">
            <span className="text-green-400 mr-2">$</span>
            <div>
              {message}
              {showCursor && (
                <span className="inline-block w-2 h-4 bg-yellow-400 ml-1"></span>
              )}
            </div>
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="w-full">
          <div className="flex justify-between text-xs mb-1 text-yellow-400/80">
            <span>{progress}%</span>
            <span
              className={`${
                glitchActive ? "text-cyan-400" : "text-yellow-400"
              } animate-pulse text-green-400`}
            >
              {progress >= 100 ? HOME_PAGE + "..." : "Loading"}
            </span>
          </div>
          <div className="relative w-full h-4 bg-black/80 border border-yellow-500/50 rounded-sm overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-600 to-yellow-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
            <div
              className={`absolute top-0 left-0 h-full bg-cyan-500/20 transition-all duration-300 ${
                glitchActive ? "translate-x-1" : ""
              }`}
              style={{ width: `${progress}%` }}
            ></div>
            <div className="absolute top-0 left-0 h-full w-4 bg-white/40 blur-sm animate-scanner"></div>
          </div>
        </div>
      </div>

      {/* Elementos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black/90"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,0,255,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(255,0,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
      <div className="absolute inset-8 border border-yellow-500/30 pointer-events-none"></div>
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-yellow-500"></div>
      <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-yellow-500"></div>
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-yellow-500"></div>
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-yellow-500"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent bg-[length:100%_3px] pointer-events-none"></div>
    </div>
  );
}
