import { notFound } from "next/navigation";
import { getProject } from "@/lib/data";
import Card from "@/components/ui/Card";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  // RPA（id=2）のみscreensを表示
  const showScreens = project.id === "2" && project.screens && project.screens.length > 0;

  return (
    <main>
      <ScrollToTop />
      {/* 固定の戻るリンク */}
      <div className="fixed top-[72px] left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container-custom">
          <Link href="/#work" className="text-gray-900 hover:text-accent transition-colors inline-flex items-center gap-2 text-sm font-medium py-3">
            <span>←</span>
            <span>プロジェクト一覧に戻る</span>
          </Link>
        </div>
      </div>
      {/* Hero */}
      <section className="snap-start snap-always min-h-screen flex items-center border-b border-gray-200 py-12 md:py-0">
        <div className="container-custom w-full pt-[120px]">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900">
            {project.name}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {project.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>制作期間: {project.period}</span>
            <span>役割: 企画・設計・開発</span>
          </div>
        </div>
      </section>

      {/* プロジェクト概要 */}
      <section className="snap-start snap-always min-h-screen flex items-center py-16 md:py-0">
        <div className="container-custom w-full">
          <h2 className="mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text text-transparent">プロジェクト概要</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-base font-semibold mb-3 text-gray-900">Problem</h3>
              <p className="text-gray-600 text-sm">
                {project.problem}
              </p>
            </Card>
            <Card>
              <h3 className="text-base font-semibold mb-3 text-gray-900">Solution</h3>
              <p className="text-gray-600 text-sm">
                {project.solution}
              </p>
            </Card>
            <Card>
              <h3 className="text-base font-semibold mb-3 text-gray-900">Impact</h3>
              <p className="text-gray-600 text-sm">
                {project.impact}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="snap-start snap-always min-h-screen flex items-center py-16 md:py-0">
        <div className="container-custom w-full">
          <h2 className="mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text text-transparent">Context</h2>
          <div className="border border-gray-400 rounded-lg p-6 mb-8">
            <p className="text-gray-600 text-sm">
              {project.context}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-400 rounded-lg p-6">
              <h3 className="text-base font-semibold mb-4 text-gray-900">制約条件</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {project.constraints.map((constraint, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-400">—</span>
                    <span>{constraint}</span>
                  </li>
                ))}
              </ul>
            </div>
            {project.techStack && (
              <div className="border border-gray-400 rounded-lg p-6">
                <h3 className="text-base font-semibold mb-4 text-gray-900">技術スタック</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  {project.techStack.frontend && (
                    <p><span className="font-medium text-gray-900">フロントエンド：</span>{project.techStack.frontend}</p>
                  )}
                  {project.techStack.language && (
                    <p><span className="font-medium text-gray-900">言語：</span>{project.techStack.language}</p>
                  )}
                  {project.techStack.build && (
                    <p><span className="font-medium text-gray-900">ビルド／開発：</span>{project.techStack.build}</p>
                  )}
                  {project.techStack.styling && (
                    <p><span className="font-medium text-gray-900">スタイリング：</span>{project.techStack.styling}</p>
                  )}
                  {project.techStack.automation && (
                    <p><span className="font-medium text-gray-900">自動化：</span>{project.techStack.automation}</p>
                  )}
                  {project.techStack.other && (
                    <p><span className="font-medium text-gray-900">その他：</span>{project.techStack.other}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="snap-start snap-always min-h-screen flex items-center py-16 md:py-0">
        <div className="container-custom w-full">
          <h2 className="mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text text-transparent">Process</h2>
          <div className="space-y-8">
            <div className="border border-gray-400 rounded-lg p-6">
              <h3 className="text-base font-semibold mb-3 text-gray-900">Research</h3>
              <p className="text-gray-600 text-sm">
                {project.process.research}
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-4 text-gray-900">Options</h3>
              <div className="space-y-3">
                {project.process.options.map((option, index) => (
                  <div key={index} className="border border-gray-400 rounded-lg p-4">
                    <h4 className="font-medium text-sm text-gray-900 mb-1">
                      {option.option}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {option.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-gray-400 rounded-lg p-6">
              <h3 className="text-base font-semibold mb-3 text-gray-900">Build</h3>
              <p className="text-gray-600 text-sm">
                {project.process.build}
              </p>
            </div>
            <div className="border border-gray-400 rounded-lg p-6">
              <h3 className="text-base font-semibold mb-3 text-gray-900">Validate</h3>
              <p className="text-gray-600 text-sm">
                {project.process.validate}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screens - RPAのみ表示 */}
      {showScreens && (
        <section className="snap-start snap-always min-h-screen flex items-center py-16 md:py-0">
          <div className="container-custom w-full">
            <h2 className="mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text text-transparent">Screens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screens.map((screen, index) => (
                <div key={index}>
                  {screen.image.endsWith('.svg') ? (
                    <div className="border border-gray-400 rounded-lg p-4 mb-3 flex items-center justify-center">
                      <img src={screen.image} alt={screen.caption} className="w-full h-auto" />
                    </div>
                  ) : (
                    <div className="border border-gray-400 rounded-lg aspect-video mb-3 flex items-center justify-center overflow-hidden">
                      <img
                        src={screen.image}
                        alt={screen.caption}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <p className="text-sm text-gray-600 text-center">{screen.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
