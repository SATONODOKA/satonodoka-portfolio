import Link from "next/link";
import ProjectImage from "@/components/ui/ProjectImage";

import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  return (
    <section id="work" className="snap-start snap-always min-h-screen flex items-center py-20 md:py-28">
      <div className="container-custom w-full">
        <h2 className="mb-8 md:mb-12 text-center">Projects</h2>
        <div className="flex flex-col space-y-10 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Link key={project.id} href={`/work/${project.id}`} className="block">
              {/* プロジェクトブロック：枠線で区切る */}
              <div 
                className="border p-6 md:p-8"
                style={{
                  borderColor: 'rgba(255,255,255,0.85)',
                  background: 'transparent',
                  boxShadow: '0 0 12px rgba(96,165,250,0.5)',
                }}
              >
                <div className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-10 items-start">
                  {/* 画像は「素材」なので角丸は画像だけに限定 */}
                  <div>
                    {project.id === "1" && (
                      <ProjectImage
                        src="/images/project1-thumbnail.png"
                        alt={project.name}
                        className="aspect-video object-cover w-full"
                      />
                    )}
                    {project.id === "2" && (
                      <img
                        src="/images/rpa-concept.svg"
                        alt={project.name}
                        className="aspect-video object-cover w-full p-4"
                      />
                    )}
                    {project.id === "3" && (
                      <ProjectImage
                        src="/images/project3-thumbnail.png"
                        alt={project.name}
                        className="aspect-video object-cover w-full"
                      />
                    )}
                    {!["1", "2", "3"].includes(project.id) && (
                      <div className="aspect-video flex items-center justify-center bg-slate-50">
                        <span className="text-slate-400 text-sm">No Image</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col space-y-3">
                    <h3 className="text-lg font-bold">
                      {project.name}
                    </h3>
                    <p className="text-slate-700 flex-grow">
                      {project.description}
                    </p>
                    {/* タグ：サブ構造として弱く */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1.5"
                          style={{
                            border: '1px solid rgba(255,255,255,0.5)',
                            background: 'transparent',
                            fontSize: '12px',
                            color: 'rgb(51, 65, 85)',
                            lineHeight: '1.5',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
