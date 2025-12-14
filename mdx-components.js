import { HeroSection } from './components/HeroSection';
import { TwoColumns } from './components/TwoColumns';
import { SectionTransition } from './components/SectionTransition';
import { ArticleCard } from './components/ArticleCard';
import BigTitle from './components/BigTitle';
import OurEcoSystem from "./components/OurEcoSystem";
import WeAreHero from "./components/WeAreHero";
import WeAreSecondSection from "./components/WeAreSecondSection";
import CoFounders from "./components/CoFounders";
import EcosystemLogos from "./components/EcosystemLogos";
import CoreElements from './components/CoreElements';
import OurCoreElements from './components/OurCoreElements';

export function useMDXComponents(components) {
  return {
    HeroSection,
    TwoColumns,
    SectionTransition,
    ArticleCard,
    BigTitle,
    OurEcoSystem,
    WeAreHero,
    WeAreSecondSection,
    CoFounders,
    EcosystemLogos,
    CoreElements,
    OurCoreElements,

    p: ({ children }) => <>{children}</>,


    h2: ({ children }) => (
      <h2 className="font-dela font-black uppercase">
        {children}
      </h2>
    ),

    ...components,
  };
}
