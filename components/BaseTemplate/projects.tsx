import { UserProjectsData } from "../../config/user-data/projects";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FolderKanban } from "lucide-react";
import { BaseTemplate } from "../../config/app-data/templates/base";

export const ProjectsSection = () => {
  if (!BaseTemplate.features.PROJECTS_SECTION) return;

  return (
    <section id="projects" className="scroll-mt-8">
      <div className="mb-10 flex items-end gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
          项目
        </h2>
        <div className="mb-1.5 h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
        <span className="mb-1 text-sm tabular-nums text-zinc-500">
          {UserProjectsData.length} 个
        </span>
      </div>

      <div className="flex flex-col gap-8">
        {UserProjectsData.map((project, index) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/40 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:border-amber-500/25 hover:shadow-lg hover:shadow-amber-500/5 sm:p-8"
          >
            <div
              className={`flex flex-col gap-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="relative mx-auto w-full max-w-md shrink-0 lg:mx-0 lg:max-w-[320px]">
                <div className="overflow-hidden rounded-xl border border-zinc-700/60 bg-zinc-950/50">
                  <Image
                    src={project.previewImage}
                    width={400}
                    height={240}
                    alt={`${project.title} 预览`}
                    className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="min-w-0 flex-1 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                    <FolderKanban className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-50 sm:text-2xl">
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-amber-400"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-amber-200/70 whitespace-pre-line">
                      {project.role}
                    </p>
                  </div>
                </div>

                <p className="text-[15px] leading-relaxed text-zinc-400 whitespace-pre-line">
                  {project.description}
                </p>

                <Link
                  href={project.url}
                  className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400 transition hover:bg-amber-500/20 hover:text-amber-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  查看仓库
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
