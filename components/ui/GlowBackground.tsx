"use client";

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* 右上のグロー */}
      <div
        className="absolute w-[900px] h-[900px] rounded-full blur-[150px] opacity-[0.25] bg-[#2563eb]"
        style={{
          top: '-20%',
          right: '-15%',
          animation: 'float1 80s ease-in-out infinite',
        }}
      />
      {/* 左下のグロー */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-[140px] opacity-[0.22] bg-[#2563eb]"
        style={{
          bottom: '-15%',
          left: '-20%',
          animation: 'float2 90s ease-in-out infinite',
        }}
      />
      {/* 中央右寄りの小さめグロー */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-[130px] opacity-[0.20] bg-[#2563eb]"
        style={{
          top: '30%',
          right: '0%',
          animation: 'float3 70s ease-in-out infinite',
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
