import { HeroSection } from './Flowershow/components/HeroSection';
import { TwoColumns } from './Flowershow/components/TwoColumns';
import { SectionTransition } from './Flowershow/components/SectionTransition';
import { ArticleCard } from './Flowershow/components/ArticleCard';
import BigTitle from './Flowershow/components/BigTitle';
import OurEcoSystem from "./Flowershow/components/OurEcoSystem";
import WeAreHero from "./Flowershow/components/WeAreHero";
import WeAreSecondSection from "./Flowershow/components/WeAreSecondSection";
import CoFounders from "./Flowershow/components/CoFounders";
import EcosystemLogos from "./Flowershow/components/EcosystemLogos";
import CoreElements from './Flowershow/components/CoreElements';
import OurCoreElements from './Flowershow/components/OurCoreElements';

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
