"use client";

interface GlowBackgroundProps {
  intensity?: "hero" | "default";
}

export default function GlowBackground({ intensity = "default" }: GlowBackgroundProps) {
  const isHero = intensity === "hero";
  
  // 修正前の濃さに戻す（全て同じ設定）
  const glow1 = { size: 900, blur: 150, opacity: 0.25, top: '-20%', right: '-15%', animation: 'float1 80s ease-in-out infinite' };
  const glow2 = { size: 800, blur: 140, opacity: 0.22, bottom: '-15%', left: '-20%', animation: 'float2 90s ease-in-out infinite' };
  const glow3 = { size: 700, blur: 130, opacity: 0.20, top: '30%', right: '0%', left: undefined, animation: 'float3 70s ease-in-out infinite' };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* 右上のグロー */}
      <div
        className="absolute rounded-full bg-[#2563eb]"
        style={{
          width: `${glow1.size}px`,
          height: `${glow1.size}px`,
          filter: `blur(${glow1.blur}px)`,
          opacity: glow1.opacity,
          top: glow1.top,
          right: glow1.right,
          animation: glow1.animation,
        }}
      />
      {/* 左下のグロー */}
      <div
        className="absolute rounded-full bg-[#2563eb]"
        style={{
          width: `${glow2.size}px`,
          height: `${glow2.size}px`,
          filter: `blur(${glow2.blur}px)`,
          opacity: glow2.opacity,
          bottom: glow2.bottom,
          left: glow2.left,
          animation: glow2.animation,
        }}
      />
      {/* 3つ目のグロー */}
      <div
        className="absolute rounded-full bg-[#2563eb]"
        style={{
          width: `${glow3.size}px`,
          height: `${glow3.size}px`,
          filter: `blur(${glow3.blur}px)`,
          opacity: glow3.opacity,
          top: glow3.top,
          right: glow3.right,
          animation: glow3.animation,
        }}
      />

      <style jsx>{`
        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-30px, 40px);
          }
          50% {
            transform: translate(20px, 60px);
          }
          75% {
            transform: translate(40px, -20px);
          }
        }
        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(40px, -30px);
          }
          50% {
            transform: translate(-20px, -50px);
          }
          75% {
            transform: translate(-30px, 20px);
          }
        }
        @keyframes float3 {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(-50px, 30px);
          }
          66% {
            transform: translate(30px, -40px);
          }
        }
      `}</style>
    </div>
  );
}
