import Link from "next/link";
import { AppSettingData } from "../../config/app-data/appSetting";

export function BaseFooter() {
  const year = AppSettingData.copyrightDate;

  return (
    <footer className="mt-24 border-t border-zinc-800/80 pt-10">
      <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 sm:flex-row sm:text-left">
        <p>
          © {year}{" "}
          <span className="text-zinc-400">{AppSettingData.appName}</span>
        </p>
        <Link
          href={AppSettingData.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-zinc-500 transition hover:text-amber-400/90"
        >
          GitHub
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </footer>
  );
}
