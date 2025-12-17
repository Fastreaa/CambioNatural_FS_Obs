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
import { ToolsHero } from './components/ToolsHero';
import ToolsSection from './components/ToolsSection';
import { ToolsCardsSection } from "./components/ToolsCardsSection";
import { ToolsCard } from "./components/ToolsCard";
import { ToolsClosingSection } from "./components/ToolsClosingSection"; 
import GatheringsHero from './components/GatheringsHero'
import GatheringsIntro from './components/GatheringsIntro';
import SingleSectorSection from './components/SingleSectorSection';  
import GatheringsListSection from "./components/GatheringsListSection";
import GatheringsListItem from "./components/GatheringsListItem";
import UpcomingEventsSection from "./components/UpcomingEventsSection";
import UpcomingEventItem from "./components/UpcomingEventItem";


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
    ToolsHero,
    ToolsSection,
    ToolsCardsSection,
    ToolsCard,
    ToolsClosingSection,
    GatheringsHero,
    GatheringsIntro,
    SingleSectorSection,
    GatheringsListSection,
    GatheringsListItem,
    UpcomingEventsSection,
    UpcomingEventItem,




    p: ({ children }) => <>{children}</>,


    h2: ({ children }) => (
      <h2 className="font-dela font-black uppercase">
        {children}
      </h2>
    ),

    ...components,
  };
}
