"use client";

import { useEffect, useState, useCallback } from "react";
import { WELCOME_MESSAGES } from "../../../constants/constants";
import ProgressBar from "../../atoms/progressbar";
import MessageArea from "../../atoms/messageArea";
import { useNavigate } from "react-router";

export default function Landing() {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getRandomMessage = useCallback(
    () => WELCOME_MESSAGES[Math.floor(Math.random() * WELCOME_MESSAGES.length)],
    []
  );

  useEffect(() => {
    if (progress === 100 && isLoading === false) {
      navigate("/about_me");
    }
  }, [progress, isLoading]);

  useEffect(() => {
    setMessage(getRandomMessage());

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

    return () => clearInterval(progressInterval);
  }, [getRandomMessage]);

  return (
    <>
      <MessageArea message={message} />
      <ProgressBar progress={progress} />
    </>
  );
}
//
