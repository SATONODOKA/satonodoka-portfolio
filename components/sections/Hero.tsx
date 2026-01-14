import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* 左側: テキストコンテンツ */}
          <div className="md:col-span-6">
            <h1 className="mb-6">欲しいものを最速で手元に</h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              AI駆動開発により、要件定義〜実装、テストまでを最速で完結
            </p>
            <div className="flex gap-4">
              <Button href="#work" variant="primary" size="lg">
                プロジェクトを見る
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                連絡先
              </Button>
            </div>
          </div>

          {/* 右側: 画像コラージュ */}
          <div className="md:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg aspect-[4/3] flex items-center justify-center relative">
                  <span className="text-gray-400 text-sm">プロダクト1</span>
                  <div className="absolute top-2 right-2">
                    <span className="bg-white px-2 py-1 text-xs rounded shadow-sm">Shipped in 7 days</span>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-[4/3] flex items-center justify-center relative">
                  <span className="text-gray-400 text-sm">プロダクト2</span>
                  <div className="absolute top-2 right-2">
                    <span className="bg-white px-2 py-1 text-xs rounded shadow-sm">Iteration x5</span>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <div className="bg-gray-100 rounded-lg aspect-[4/3] flex items-center justify-center relative">
                  <span className="text-gray-400 text-sm">プロダクト3</span>
                  <div className="absolute top-2 right-2">
                    <span className="bg-white px-2 py-1 text-xs rounded shadow-sm">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
