"use client";

import React, { useState } from "react";
import { Camera, Heart, Sparkles, Gift, Cake, PartyPopper } from "lucide-react";

type ImageSlot = "img1" | "img2" | "img3" | "img4";
type Images = Record<ImageSlot, string | null>;

import img1 from "./asset/1.jpeg";
import img2 from "./asset/2.jpeg";
import img3 from "./asset/3.jpeg";
import img4 from "./asset/4.jpeg";

export default function MintBirthday() {
  const [images, setImages] = useState<Images>({
    img1: img1.src,
    img2: img2.src,
    img3: img3.src,
    img4: img4.src,
  });

  const [showCelebration, setShowCelebration] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    slot: ImageSlot
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setImages((prev) => ({ ...prev, [slot]: result }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const blowCandles = () => {
    setCandlesBlown(true);
    setTimeout(() => {
      setShowCelebration(true);
    }, 800);
  };

  if (showCelebration) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center overflow-hidden relative">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-10%",
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div
              className={`w-2 h-2 md:w-3 md:h-3 ${
                [
                  "bg-red-500",
                  "bg-yellow-500",
                  "bg-green-500",
                  "bg-blue-500",
                  "bg-pink-500",
                  "bg-purple-500",
                ][Math.floor(Math.random() * 6)]
              }`}
              style={{ transform: `rotate(${Math.random() * 360}deg)` }}
            />
          </div>
        ))}

        <div className="text-center z-10 px-4 animate-zoom-in">
          <div className="mb-6 md:mb-8">
            <PartyPopper className="w-16 h-16 md:w-24 md:h-24 text-yellow-300 mx-auto animate-bounce" />
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl leading-tight">
            🎉 HAPPY 🎉
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl leading-tight">
            BIRTHDAY
          </h1>
          <h2 className="text-6xl sm:text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 mb-6 md:mb-8 drop-shadow-lg">
            MINT! 🎊
          </h2>

          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-6 md:mb-8 max-w-md md:max-w-2xl mx-auto border-2 border-white/30">
            <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-3 md:mb-4">
              ✨ Make your wish come true! ✨
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              May all your dreams blossom like flowers this year! 🌸
            </p>
          </div>

          <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-red-300 fill-current animate-pulse" />
            <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-yellow-300 fill-current animate-pulse" />
            <Gift className="w-10 h-10 md:w-12 md:h-12 text-green-300 fill-current animate-pulse" />
          </div>

          <button
            onClick={() => {
              setShowCelebration(false);
              setCandlesBlown(false);
            }}
            className="mt-8 md:mt-12 bg-white text-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-purple-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            Back to Celebration 🎈
          </button>
        </div>

        <style jsx>{`
          @keyframes confetti {
            0% {
              transform: translateY(-10vh) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0;
            }
          }
          @keyframes zoom-in {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          .animate-confetti {
            animation: confetti linear infinite;
          }
          .animate-zoom-in {
            animation: zoom-in 0.8s ease-out;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-emerald-50 to-cyan-100">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 animate-bounce">
          <Sparkles className="text-emerald-400 w-6 h-6 md:w-8 md:h-8 opacity-60" />
        </div>
        <div className="absolute top-32 md:top-40 right-10 md:right-20 animate-pulse">
          <Heart className="text-sky-400 w-8 h-8 md:w-10 md:h-10 opacity-50" />
        </div>
        <div className="absolute bottom-20 md:bottom-32 left-10 md:left-20 animate-bounce delay-100">
          <Gift className="text-green-400 w-8 h-8 md:w-12 md:h-12 opacity-40" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block mb-4 md:mb-6">
            <Cake className="w-16 h-16 md:w-20 md:h-20 text-emerald-500 mx-auto animate-bounce" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-emerald-500 to-cyan-500 mb-3 md:mb-4 tracking-tight leading-tight">
            Happy Birthday
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-emerald-600 mb-4 md:mb-6">
            Mint! 🎉
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-sky-700 font-light px-4">
            Wishing you a day as fresh and wonderful as you are!
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12 md:mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 border-4 border-sky-200">
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4 md:mb-6 text-center">
              🎂 Make a Wish!
            </h3>
            <div className="flex justify-center mb-4 md:mb-6">
              <button
                onClick={blowCandles}
                disabled={candlesBlown}
                className={`relative transition-all duration-300 ${
                  candlesBlown
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-110 cursor-pointer"
                }`}
              >
                <div className="text-6xl md:text-8xl">🕯️</div>
                {!candlesBlown && (
                  <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 animate-flicker">
                    <div className="text-3xl md:text-4xl">🔥</div>
                  </div>
                )}
              </button>
            </div>
            <p className="text-center text-sky-700 text-base md:text-lg font-medium">
              {candlesBlown
                ? "✨ Wish granted! ✨"
                : "Tap the candle to blow it out!"}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-12 border-4 border-sky-200">
            <div className="text-center mb-6 md:mb-8">
              <Sparkles className="inline-block text-emerald-500 w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-3 md:mb-4">
                A Special Day for Someone Special
              </h3>
            </div>
            <div className="space-y-3 md:space-y-4 text-sky-900 text-base md:text-lg leading-relaxed">
              <p>
                Today we celebrate you, Mint! May your birthday be filled with
                laughter, love, and all the things that make you smile.
              </p>
              <p>
                Here's to another year of amazing adventures, precious memories,
                and dreams coming true. You deserve all the happiness in the
                world!
              </p>
              <p className="text-center text-xl md:text-2xl font-semibold text-emerald-600 mt-4 md:mt-6">
                Make a wish and blow out the candles! 🕯️✨
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-emerald-700 mb-6 md:mb-8">
            📸 Memory Lane
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {(["img1", "img2", "img3", "img4"] as ImageSlot[]).map(
              (slot, idx) => (
                <div key={slot} className="group relative">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-sky-200 hover:border-emerald-400 transition-all duration-300 transform hover:scale-105">
                    {images[slot] ? (
                      <div className="relative aspect-square">
                        <img
                          src={images[slot] as string}
                          alt={`Memory ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <label className="aspect-square flex flex-col items-center justify-center cursor-pointer hover:bg-sky-50 transition-colors p-4">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, slot)}
                          className="hidden"
                        />
                        <Camera className="w-12 h-12 md:w-16 md:h-16 text-emerald-400 mb-3 md:mb-4" />
                        <span className="text-sky-600 font-medium text-base md:text-lg text-center">
                          Upload Photo {idx + 1}
                        </span>
                        <span className="text-sky-400 text-sm md:text-base mt-2 text-center">
                          Click to add a memory
                        </span>
                      </label>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="text-center px-4">
          <div className="inline-block bg-gradient-to-r from-sky-400 to-emerald-400 text-white px-6 md:px-12 py-4 md:py-6 rounded-full shadow-2xl transform hover:scale-105 transition-transform">
            <Heart className="inline-block w-5 h-5 md:w-6 md:h-6 mr-2 fill-current" />
            <span className="text-lg md:text-2xl font-bold">
              Have the most amazing birthday, Mint!
            </span>
            <Heart className="inline-block w-5 h-5 md:w-6 md:h-6 ml-2 fill-current" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes flicker {
          0%,
          100% {
            opacity: 1;
            transform: translateY(0);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-2px);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-flicker {
          animation: flicker 1.5s ease-in-out infinite;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
      `}</style>
    </div>
  );
}
