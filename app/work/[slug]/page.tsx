import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/data";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 静的生成用のパラメータを生成
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

// YouTube URLから動画IDを抽出する関数
function getYouTubeVideoId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : null;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  // RPA（id=2）のみscreensを表示
  const showScreens = project.id === "2" && project.screens && project.screens.length > 0;
  
  // YouTube動画IDを取得
  const youtubeVideoId = project.youtubeUrl ? getYouTubeVideoId(project.youtubeUrl) : null;

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
      <section 
        className="snap-section min-h-screen flex items-center border-b border-gray-200 py-12 md:py-0"
      >
        <div className="container-custom w-full max-w-5xl pt-[120px]">
          <div className="space-y-8">
            {/* プロジェクト情報 */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl mb-4">
                {project.name}
              </h1>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center gap-4 text-sm md:text-base text-slate-600">
                <span>制作期間: {project.period}</span>
                <span>役割: 企画・設計・開発</span>
              </div>
            </div>
            
            {/* YouTube動画埋め込み */}
            {youtubeVideoId && (
              <div className="mt-10">
                <div className="max-w-4xl mx-auto">
                  <div 
                    className="aspect-video w-full overflow-hidden"
                    style={{
                      border: '1px solid rgba(255,255,255,0.5)',
                      background: 'transparent',
                      boxShadow: '0 0 10px rgba(96,165,250,0.35)',
                    }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* プロジェクト概要 */}
      <section 
        className="snap-section min-h-screen flex items-center py-20 md:py-28"
      >
        <div className="container-custom w-full max-w-5xl">
          <h2 className="mb-8">プロジェクト概要</h2>
          {/* 3項目を枠線付きブロックに */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="border p-6"
              style={{
                borderColor: 'rgba(255,255,255,0.85)',
                background: 'transparent',
                boxShadow: '0 0 12px rgba(96,165,250,0.5)',
              }}
            >
              <h3 className="text-lg font-bold mb-3">Problem</h3>
              <p className="text-slate-700">
                {project.problem}
              </p>
            </div>
            <div 
              className="border p-6"
              style={{
                borderColor: 'rgba(255,255,255,0.85)',
                background: 'transparent',
                boxShadow: '0 0 12px rgba(96,165,250,0.5)',
              }}
            >
              <h3 className="text-lg font-bold mb-3">Solution</h3>
              <p className="text-slate-700">
                {project.solution}
              </p>
            </div>
            <div 
              className="border p-6"
              style={{
                borderColor: 'rgba(255,255,255,0.85)',
                background: 'transparent',
                boxShadow: '0 0 12px rgba(96,165,250,0.5)',
              }}
            >
              <h3 className="text-lg font-bold mb-3">Impact</h3>
              <p className="text-slate-700">
                {project.impact}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section 
        className="snap-section min-h-screen flex items-center py-20 md:py-28"
      >
        <div className="container-custom w-full max-w-5xl">
          <h2 className="mb-6">Context</h2>
          <div className="space-y-8">
            {/* Context説明：枠線付きブロック */}
            <div 
              className="border p-6"
              style={{
                borderColor: 'rgba(255,255,255,0.85)',
                background: 'transparent',
                boxShadow: '0 0 12px rgba(96,165,250,0.5)',
              }}
            >
              <p className="text-slate-700">
                {project.context}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">制約条件</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  {project.constraints.map((constraint, index) => (
                    <li key={index}>{constraint}</li>
                  ))}
                </ul>
              </div>
              {project.techStack && (
                <div>
                  <h3 className="text-lg font-bold mb-4">技術スタック</h3>
                  <div className="space-y-2 text-slate-700">
                    {project.techStack.frontend && (
                      <p><span className="font-medium text-slate-900">フロントエンド：</span>{project.techStack.frontend}</p>
                    )}
                    {project.techStack.language && (
                      <p><span className="font-medium text-slate-900">言語：</span>{project.techStack.language}</p>
                    )}
                    {project.techStack.build && (
                      <p><span className="font-medium text-slate-900">ビルド／開発：</span>{project.techStack.build}</p>
                    )}
                    {project.techStack.styling && (
                      <p><span className="font-medium text-slate-900">スタイリング：</span>{project.techStack.styling}</p>
                    )}
                    {project.techStack.automation && (
                      <p><span className="font-medium text-slate-900">自動化：</span>{project.techStack.automation}</p>
                    )}
                    {project.techStack.other && (
                      <p><span className="font-medium text-slate-900">その他：</span>{project.techStack.other}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section 
        className="snap-section min-h-screen flex items-center py-20 md:py-28"
      >
        <div className="container-custom w-full max-w-5xl">
          <h2 className="mb-8">Process</h2>
          <div className="space-y-8">
            {/* Process各項目：枠線付きブロック */}
            <div 
              className="border p-6"
              style={{
                borderColor: 'rgba(255,255,255,0.85)',
                background: 'transparent',
                boxShadow: '0 0 12px rgba(96,165,250,0.5)',
              }}
            >
              <h3 className="text-lg font-bold mb-3">Research</h3>
              <p className="text-slate-700">
                {project.process.research}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Options</h3>
              <div className="space-y-4">
                {project.process.options.map((option, index) => (
                  <div 
                    key={index}
                    className="border p-4"
                    style={{
                      borderColor: 'rgba(255,255,255,0.75)',
                      background: 'transparent',
                      boxShadow: '0 0 10px rgba(96,165,250,0.45)',
                    }}
                  >
                    <h4 className="font-bold text-slate-900 mb-1">
                      {option.option}
                    </h4>
                    <p className="text-slate-700">
                      {option.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div 
              className="border p-6"
              style={{
                borderColor: 'rgba(255,255,255,0.85)',
                background: 'transparent',
                boxShadow: '0 0 12px rgba(96,165,250,0.5)',
              }}
            >
              <h3 className="text-lg font-bold mb-3">Build</h3>
              <p className="text-slate-700">
                {project.process.build}
              </p>
            </div>
            <div 
              className="border p-6"
              style={{
                borderColor: 'rgba(255,255,255,0.85)',
                background: 'transparent',
                boxShadow: '0 0 12px rgba(96,165,250,0.5)',
              }}
            >
              <h3 className="text-lg font-bold mb-3">Validate</h3>
              <p className="text-slate-700">
                {project.process.validate}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screens - RPAのみ表示 */}
      {showScreens && (
        <section 
        className="snap-section min-h-screen flex items-center py-20 md:py-28"
      >
          <div className="container-custom w-full max-w-5xl">
            <h2 className="mb-8">Screens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screens.map((screen, index) => (
                <div key={index}>
                  {screen.image.endsWith('.svg') ? (
                    <div 
                      className="p-4 mb-3 flex items-center justify-center"
                      style={{
                        border: '1px solid rgba(255,255,255,0.5)',
                        background: 'transparent',
                        boxShadow: '0 0 10px rgba(96,165,250,0.35)',
                      }}
                    >
                      <img src={screen.image} alt={screen.caption} className="w-full h-auto" />
                    </div>
                  ) : (
                    <div 
                      className="aspect-video mb-3 flex items-center justify-center overflow-hidden"
                      style={{
                        border: '1px solid rgba(255,255,255,0.5)',
                        background: 'transparent',
                        boxShadow: '0 0 10px rgba(96,165,250,0.35)',
                      }}
                    >
                      <img
                        src={screen.image}
                        alt={screen.caption}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <p className="text-sm text-slate-600 text-center">{screen.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
