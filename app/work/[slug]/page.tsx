import { notFound } from "next/navigation";
import { getProject } from "@/lib/data";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
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

  return (
    <main>
      <ScrollToTop />
      {/* Hero */}
      <section className="section-spacing border-b border-gray-200">
        <div className="container-custom">
          <div className="mb-6">
            <Link href="/#work" className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-2">
              <span>←</span>
              <span>作品一覧に戻る</span>
            </Link>
          </div>
          <h1 className="mb-4 leading-tight text-gray-900 tracking-tight" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
            {project.name}
          </h1>
          <p className="text-xl text-gray-800 mb-4 leading-relaxed" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
            {project.description}
          </p>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-gray-600">制作期間: {project.period}</span>
            <span className="text-sm text-gray-600">役割: 企画・設計・開発</span>
          </div>
          {project.url && (
            <Button href={project.url} variant="primary" size="md" target="_blank" rel="noopener noreferrer">
              デモを見る
            </Button>
          )}
        </div>
      </section>

      {/* TL;DR */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8 text-gray-900">TL;DR</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Problem</h3>
              <p className="text-gray-700" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                {project.problem}
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Solution</h3>
              <p className="text-gray-700" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                {project.solution}
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Impact</h3>
              <p className="text-gray-700" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                {project.impact}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="section-spacing">
        <div className="container-custom">
          <h2 className="mb-6 text-gray-900">Context</h2>
          <p className="text-gray-800 mb-6 leading-relaxed" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
            {project.context}
          </p>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">制約条件</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {project.constraints.map((constraint, index) => (
                <li key={index}>{constraint}</li>
              ))}
            </ul>
          </div>
          {project.techStack && (
            <div>
              <h3 className="text-lg font-semibold mb-3">技術スタック</h3>
              <div className="space-y-2 text-gray-600">
                {project.techStack.frontend && (
                  <p><span className="font-medium">フロントエンド：</span>{project.techStack.frontend}</p>
                )}
                {project.techStack.language && (
                  <p><span className="font-medium">言語：</span>{project.techStack.language}</p>
                )}
                {project.techStack.build && (
                  <p><span className="font-medium">ビルド／開発：</span>{project.techStack.build}</p>
                )}
                {project.techStack.styling && (
                  <p><span className="font-medium">スタイリング：</span>{project.techStack.styling}</p>
                )}
                {project.techStack.automation && (
                  <p><span className="font-medium">自動化：</span>{project.techStack.automation}</p>
                )}
                {project.techStack.other && (
                  <p><span className="font-medium">その他：</span>{project.techStack.other}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8 text-gray-900">Process</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Research</h3>
              <p className="text-gray-700" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                {project.process.research}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Options</h3>
              <div className="space-y-4">
                {project.process.options.map((option, index) => (
                  <Card key={index}>
                    <h4 className="font-semibold mb-2" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                      {option.option}
                    </h4>
                    <p className="text-gray-700 text-sm" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                      {option.reason}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Build</h3>
              <p className="text-gray-700" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                {project.process.build}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Validate</h3>
              <p className="text-gray-700" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                {project.process.validate}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screens */}
      {project.screens && project.screens.length > 0 && (
        <section className="section-spacing">
          <div className="container-custom">
            <h2 className="mb-8 text-gray-900">Screens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screens.map((screen, index) => (
                <div key={index}>
                  {screen.image.endsWith('.svg') ? (
                    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-3 flex items-center justify-center">
                      <img src={screen.image} alt={screen.caption} className="w-full h-auto" />
                    </div>
                  ) : (
                    <div className="bg-gray-200 rounded-lg aspect-video mb-3 flex items-center justify-center overflow-hidden">
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
