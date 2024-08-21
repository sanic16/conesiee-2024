"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";

interface InfoTextProps {
  className: string;
}

const BannerText: React.FC<InfoTextProps> = ({ className }) => {
  const { 0: text } = useTypewriter({
    words: ["del 23 al 28 de septiembre", "Hotel Holiday Inn"],
    loop: 0,
    deleteSpeed: 50,
    typeSpeed: 100,
  });
  const headingText = (
    <>
      {text} <Cursor />
    </>
  );
  return <p className={className}>{headingText}</p>;
};

export default BannerText;
