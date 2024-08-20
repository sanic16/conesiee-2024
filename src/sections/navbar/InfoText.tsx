"use client";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

interface InfoTextProps {
  className: string;
}

const InfoText: React.FC<InfoTextProps> = ({ className }) => {
  const { 0: text } = useTypewriter({
    words: ["Chixoy", "31 de agosto"],
    loop: 0,
    deleteSpeed: 50,
    typeSpeed: 100,
  });
  return (
    <div className={className}>
      <Link href={`/visitas`}>
        Visita Técnica - {text} <Cursor />
      </Link>
    </div>
  );
};

export default InfoText;
