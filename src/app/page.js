"use client"

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [isWobbling, setIsWobbling] = useState(false);

  const handleWobble = () => {
    setIsWobbling(true);
    setTimeout(() => setIsWobbling(false), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient animate-gradient">
      <header className="w-full p-8 flex flex-col items-center">
        {/* Clickable Wobble Name */}
        <h1
          className={`text-7xl font-bold text-olive cursor-pointer transition-transform ${
            isWobbling ? "animate-trippyWobble" : ""
          }`}
          onClick={handleWobble}
        >
          GABRIEL KUZAVA
        </h1>
        <p className="text-lg text-olive mt-2">
          COMPOSITION • PRODUCTION • EDITING • MIX
        </p>
        <nav className="mt-6 flex space-x-8">
          {["About", "Services", "Work", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-lg text-olive hover:underline"
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}