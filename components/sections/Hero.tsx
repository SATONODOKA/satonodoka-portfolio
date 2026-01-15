export default function Hero() {
  return (
    <section className="snap-start snap-always min-h-screen flex items-center pt-[72px] py-12 md:py-0">
      <div className="container-custom w-full">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="mb-6 text-5xl md:text-6xl font-extrabold leading-none bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text text-transparent tracking-tight">
              欲しいサービスを<br />
              最速で形にする
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              AI駆動開発により、要件定義〜実装、テストまでを最速で完結
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#work"
                className="inline-block font-bold text-base bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                プロジェクトを見る
              </a>
              <a
                href="#contact"
                className="inline-block font-bold text-base text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
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
