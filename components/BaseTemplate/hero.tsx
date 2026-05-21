import Link from "next/link";
import Image from "next/image";
import { MapPin, Sparkles } from "lucide-react";
import { BaseTemplate } from "../../config/app-data/templates/base";
import { UserSocialsData } from "../../config/user-data/socials";
import { AppSettingData } from "../../config/app-data/appSetting";

const socialLabels: Record<string, string> = {
  github: "GitHub",
  email: "邮箱",
};

export const HeroSection = () => {
  return (
    <header className="mb-20 md:mb-28">
      <nav className="mb-12 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-wide text-amber-400/90 transition hover:text-amber-300"
        >
          {AppSettingData.appName}
        </Link>
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <Link
            href="/"
            className="transition hover:text-zinc-100"
          >
            首页
          </Link>
          <Link
            href="#projects"
            className="transition hover:text-zinc-100"
          >
            项目
          </Link>
        </div>
      </nav>

      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="order-2 min-w-0 flex-1 md:order-1">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80">
            Portfolio
          </p>
          <h1 className="mb-5 bg-gradient-to-r from-zinc-50 via-zinc-100 to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            {BaseTemplate.fullName}
          </h1>

          <div className="mb-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1 text-sm text-zinc-300">
              <MapPin className="h-3.5 w-3.5 text-amber-400/80" />
              {BaseTemplate.location}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1 text-sm text-zinc-300">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400/80" />
              {BaseTemplate.tagline}
            </span>
          </div>

          <p className="mb-8 max-w-2xl text-base leading-relaxed text-zinc-400 whitespace-pre-line md:text-lg">
            {BaseTemplate.miniBio}
          </p>

          {BaseTemplate.features.SOCIALS_SECTION && (
            <div className="flex flex-wrap gap-3">
              {Object.entries(UserSocialsData).map(
                ([name, { icon: Icon, url }]) => {
                  const href = url.startsWith("mailto:")
                    ? url
                    : url.includes("@")
                      ? `mailto:${url.replace(/^mailto:/, "")}`
                      : url;

                  return (
                    <Link
                      key={name}
                      href={href}
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300 transition hover:border-amber-500/40 hover:bg-zinc-800 hover:text-zinc-100"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-4 w-4 text-amber-400/90" />
                      {socialLabels[name] ?? name}
                    </Link>
                  );
                }
              )}
            </div>
          )}
        </div>

        <div className="order-1 flex shrink-0 justify-center md:order-2 md:justify-end">
          <div className="relative">
            <div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-500/40 to-cyan-500/20 blur-md"
              aria-hidden
            />
            <Image
              src={
                BaseTemplate.heroImage.type === "url"
                  ? BaseTemplate.heroImage.url
                  : `/images/${BaseTemplate.heroImage.url}`
              }
              width={160}
              height={160}
              alt="头像"
              className="relative h-36 w-36 rounded-2xl border-2 border-zinc-700/80 object-cover shadow-2xl transition duration-300 hover:scale-[1.02] sm:h-40 sm:w-40"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
};
