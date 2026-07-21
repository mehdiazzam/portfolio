import { IntroBoard } from "../sections/IntroBoard";
import { Contact } from "../sections/Contact";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";

export function HomePage() {
  return (
    <main id="main-content">
      <IntroBoard />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
