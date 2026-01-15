import Button from "@/components/ui/Button";
import ProjectImage from "@/components/ui/ProjectImage";

export default function Hero() {
  return (
    <section className="snap-start min-h-screen flex items-center pt-[72px] py-12 md:py-0">
      <div className="container-custom w-full">
        <div className="max-w-4xl mx-auto">
          {/* タイトル */}
          <div className="text-center mb-12">
            <h1 className="mb-6 text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text text-transparent tracking-tight">
              欲しいサービスを<br className="hidden md:block" />
              最速で形にする
            </h1>
            <p className="text-lg text-gray-800 mb-8 leading-loose">
              AI駆動開発により、要件定義〜実装、テストまでを最速で完結
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#work" 
                className="inline-block font-extrabold text-lg tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-accent text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                プロジェクトを見る
              </a>
              <a 
                href="#contact" 
                className="inline-block font-extrabold text-lg tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text text-transparent border-2 border-gray-800 px-8 py-4 rounded-xl hover:border-accent transition-colors whitespace-nowrap"
              >
                連絡先
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
