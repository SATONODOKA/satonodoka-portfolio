import GlowBackground from "@/components/ui/GlowBackground";

export default function Hero() {
  return (
    <section className="snap-start snap-always min-h-screen flex items-center pt-[72px] py-12 md:py-0 relative">
      {/* Heroセクションだけ強く表示するためのGlowBackground */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <GlowBackground intensity="hero" />
      </div>
      <div className="container-custom w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Primary: HeroのH1（最も強い） */}
            <h1 className="mb-6">
              欲しいサービスを<br />
              最速で形にする
            </h1>
            {/* サブコピー：読みやすく */}
            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              AI駆動開発により、要件定義〜実装、テストまでを最速で完結
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Primary CTA: 黒ベタを許される唯一の場所 */}
              <a
                href="#work"
                className="inline-block font-bold text-base bg-slate-900 text-white px-8 py-3 hover:bg-slate-800 transition-colors"
              >
                プロジェクトを見る
              </a>
              {/* Secondary CTA */}
              <a
                href="#contact"
                className="inline-block font-bold text-base border-2 border-slate-900 text-slate-900 bg-transparent px-8 py-3 hover:bg-slate-900 hover:text-white transition-colors"
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
