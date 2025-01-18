import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router";
import CompositionPreview from "../components/CompositionPreview";
import BreakingTheAsymptote from "../assets/BreakingTheAsymptote.png";
import JacarandaSnow from "../assets/JacarandaSnow.jpeg";
import PreludePensive from "../assets/PreludePensive.jpeg";
import DisintegratingCello from "../assets/DisintegratingCello.jpg";
import SouthernCross from "../assets/SouthernCross.jpeg";
import Lynx from "../assets/Lynx.jpg";
import Concerto from "../assets/Concerto.jpeg";
import Fanfare from "../assets/Fanfare.jpg";
import NarcissistTrap from "../assets/NarcissistTrap.png";
import ViolinAndCello from "../assets/ViolinAndCello.jpeg";
import { MainTitle } from "../components/PageTitles";
import Comp from "../assets/Compositions";
import { fadeIn } from "react-animations";
import DontMakeTooMuchNoise from "../assets/DontMakeTooMuchNoise.png";

const Body = styled.div`
  & {
    width: 100%;
    height: fit-contents;
    padding: 150px 10% 100px 10%;
    animation: 1s ${keyframes(fadeIn)};
  }

  & h1 {
    text-align: center;
    margin: 20px 0px;
  }

  @media (max-width: 450px) {
    padding: 150px 5% 100px 5%;
  }
`;

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1000px;
  margin: auto;
  width: 100%;
`;

const Row = styled.div`
  & {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 1000px) {
    & {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
`;

const compositionData = [
  {
    data: Comp.dontMakeTooMuchNoise,
    img: DontMakeTooMuchNoise,
    alt: "A chinese teapot being smashed with a dark blue background.",
    path: "dontMakeTooMuchNoise",
  },
  {
    data: Comp.narcissistTrap,
    img: NarcissistTrap,
    alt: "The Narcissist Trap album cover.",
    path: "narcissistTrap",
  },
  {
    data: Comp.mysteryFriends,
    img: ViolinAndCello,
    alt: "Violin and Cello book cover.",
    path: "mysteryFriends",
  },
  {
    data: Comp.prelude,
    img: PreludePensive,
    alt: "Lit candle and Christmas pinecones.",
    path: "prelude",
  },
  {
    data: Comp.asymptote,
    img: BreakingTheAsymptote,
    alt: "Breaking the Asymptote 2021 concert coverpage.",
    path: "asymptote",
  },
  {
    data: Comp.jacaranda,
    img: JacarandaSnow,
    alt: "Jacaranda Snow book cover illustration.",
    path: "jacaranda",
  },
  {
    data: Comp.disintegrating,
    img: DisintegratingCello,
    alt: "Grayscale close up on cellist playing the cello.",
    path: "disintegrating",
  },
  {
    data: Comp.southernCross,
    img: SouthernCross,
    alt: "ACSMF 2017 logo.",
    path: "southernCross",
  },
  {
    data: Comp.lynx,
    img: Lynx,
    alt: "Close-up of a lynx's eye.",
    path: "lynx",
  },
  {
    data: Comp.concerto,
    img: Concerto,
    alt: "Violin scroll on top of manuscript paper.",
    path: "concerto",
  },
  {
    data: Comp.clouds,
    img: Fanfare,
    alt: "Artology fanfare competition logo.",
    path: "clouds",
  },
];

const Compositions = () => {
  let navigate = useNavigate();
  const [toCompositionPage, setToCompositionPage] = React.useState(undefined);

  if (toCompositionPage !== undefined) {
    navigate(`${toCompositionPage}`);
  }

  return (
    <>
      <Header />
      <Body>
        <MainTitle>Compositions</MainTitle>
        <Gallery>
          {compositionData.map((_, idx) => {
            return idx % 2 === 0 ? (
              <Row>
                {compositionData[idx] && (
                  <CompositionPreview
                    data={compositionData[idx].data}
                    img={compositionData[idx].img}
                    alt={compositionData[idx].alt}
                    onClick={() =>
                      setToCompositionPage(compositionData[idx].path)
                    }
                  />
                )}
                {compositionData[idx + 1] && (
                  <CompositionPreview
                    data={compositionData[idx + 1].data}
                    img={compositionData[idx + 1].img}
                    alt={compositionData[idx + 1].alt}
                    onClick={() =>
                      setToCompositionPage(compositionData[idx + 1].path)
                    }
                  />
                )}
              </Row>
            ) : (
              <></>
            );
          })}
        </Gallery>
      </Body>
      <Footer />
    </>
  );
};

export default Compositions;
