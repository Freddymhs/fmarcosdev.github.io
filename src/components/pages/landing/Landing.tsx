import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { HOME_PAGE, WELCOME_MESSAGES } from "../../../constants/constants";

const LandingPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  useEffect(() => {
    setMessage(
      WELCOME_MESSAGES[Math.floor(Math.random() * WELCOME_MESSAGES.length)]
    );
    const timer = setTimeout(() => navigate(HOME_PAGE), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="
          flex flex-col justify-center items-center
          h-screen w-full bg-yellow-300 text-gray-900
          font-mono overflow-hidden
        "
    >
      <div
        className="
            w-24 h-24 border-8 border-teal-700 border-t-gray-900
            rounded-full animate-spin
          "
      ></div>

      <div className="mt-5 text-center text-xl">{message}</div>
    </div>
  );
};
export default LandingPage;
