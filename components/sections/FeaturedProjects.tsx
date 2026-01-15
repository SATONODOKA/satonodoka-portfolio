import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import ProjectImage from "@/components/ui/ProjectImage";

import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  return (
      <section id="work" className="section-spacing bg-gray-100">
      <div className="container-custom">
        <h2 className="mb-12 text-center text-gray-900">Projects</h2>
        <div className="flex flex-col gap-10 max-w-3xl mx-auto">
          {projects.map((project) => (
            <Link key={project.id} href={`/work/${project.id}`}>
              <Card>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    {project.id === "1" && (
                      <ProjectImage
                        src="/images/project1-thumbnail.png"
                        alt={project.name}
                        className="rounded-xl aspect-video mb-4 object-cover w-full"
                      />
                    )}
                    {project.id === "2" && (
                      <img 
                        src="/images/rpa-concept.svg" 
                        alt={project.name}
                        className="rounded-xl aspect-video mb-4 object-cover w-full bg-white p-4"
                      />
                    )}
                    {project.id === "3" && (
                      <ProjectImage
                        src="/images/project3-thumbnail.png"
                        alt={project.name}
                        className="rounded-xl aspect-video mb-4 object-cover w-full"
                      />
                    )}
                    {!["1", "2", "3"].includes(project.id) && (
                      <div className="bg-gray-200 rounded-xl aspect-video mb-4 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">サムネイル</span>
                      </div>
                    )}
                  </div>
                  <div className="md:w-2/3 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 leading-tight text-gray-900 tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-gray-800 mb-4 leading-loose flex-grow">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
