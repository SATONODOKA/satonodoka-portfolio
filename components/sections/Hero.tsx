import Button from "@/components/ui/Button";
import ProjectImage from "@/components/ui/ProjectImage";

export default function Hero() {
  return (
    <section className="section-spacing border-b border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* 左側: テキストコンテンツ */}
          <div className="md:col-span-6">
            <h1 className="mb-6 text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text text-transparent tracking-tight">
              欲しいものを<br className="hidden md:block" />
              最速で手元に
            </h1>
            <p className="text-lg text-gray-800 mb-8 leading-loose">
              AI駆動開発により、要件定義〜実装、テストまでを最速で完結
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#work" variant="primary" size="lg" className="whitespace-nowrap">
                プロジェクトを見る
              </Button>
              <Button href="#contact" variant="secondary" size="lg" className="whitespace-nowrap">
                連絡先
              </Button>
            </div>
          </div>

          {/* 右側: 画像コラージュ */}
          <div className="md:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                  <ProjectImage
                    src="/images/hero-project1.png"
                    alt="工務店×職人マッチングアプリ"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gray-100 rounded-xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                  <ProjectImage
                    src="/images/hero-project2.png"
                    alt="RPAツール"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="bg-gray-100 rounded-xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                  <ProjectImage
                    src="/images/hero-project3.png"
                    alt="求人保存Chrome拡張"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
