import { Contact } from "../../components/Contact/Contact";
import { About } from "./components/AboutContainer/AboutContainer";
import { ExploringPlatform } from "./components/ExploringPlatformContainer/ExploringPlatformContainer";
import { FlatContract } from "./components/FlatContractContainer/FlatContractContainer";
import { InitialHome } from "./components/InitialContainerHome/InitialContainerHome";
import { QuoteHome } from "./components/QuoteContainer/QuoteContainer";

import { ContainerHome } from "./style";

export default function Home() {
  return (
    <ContainerHome>
      <InitialHome />
      <About />
      <ExploringPlatform />
      <FlatContract />
      <QuoteHome />
      <Contact />
    </ContainerHome>
  );
}
