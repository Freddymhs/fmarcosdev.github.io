"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { WELCOME_MESSAGES } from "../../../constants/constants";
import packageJson from "../../../../package.json";
import ProgressBar from "../../atoms/progressbar";
import MessageArea from "../../atoms/messageArea";
import LandingLayout from "../../templates/landing-layout/Landing-layout";

export default function Landing() {
  const versionApp = useMemo(() => `V.${packageJson.version}`, []);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getRandomMessage = useCallback(
    () => WELCOME_MESSAGES[Math.floor(Math.random() * WELCOME_MESSAGES.length)],
    []
  );
  useEffect(() => {
    if (progress === 100 && isLoading === false) {
      // aqui redirecionar a la pagina de inicio
    }
  }, [progress, isLoading]);

  useEffect(() => {
    // Establecer el mensaje inicial
    setMessage(getRandomMessage());

    // Configurar el intervalo para el progreso
    const progressInterval = setInterval(() => {
      setProgress((currentProgress) => {
        if (currentProgress >= 100) {
          setIsLoading(false);
          clearInterval(progressInterval);
          return 100;
        }
        return currentProgress + 2;
      });
    }, 70);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(progressInterval);
  }, [getRandomMessage]);

  return (
    <LandingLayout version={versionApp}>
      <MessageArea message={message} />
      <ProgressBar progress={progress} />
    </LandingLayout>
  );
}
