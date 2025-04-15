'use client';
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
    

        {/* Custom Input and Button */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <input
            type="text"
            placeholder="Enter something..."
            className="border border-gray-300 rounded px-4 py-2 w-64"
          />
          <button
            onClick={handleClick}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
          {showMessage && (
            <p className="text-green-600 font-semibold text-lg">
              Anue Interview Task
            </p>
          )}
        </div>

      </main>
    </div>
  );
}
