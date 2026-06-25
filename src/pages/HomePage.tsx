import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Experience } from "../sections/Experience";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";
import type { Locale } from "../lib/content";

export interface HomePageProps {
  locale: Locale;
}

export function HomePage({ locale }: HomePageProps) {
  return (
    <div className="rail-offset">
      <main>
        <Hero locale={locale} />
        <About locale={locale} />
        <Experience locale={locale} />
        <Skills />
        <Projects />
        <Contact locale={locale} />
      </main>
    </div>
  );
}
