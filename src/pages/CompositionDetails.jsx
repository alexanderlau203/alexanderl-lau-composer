import React from 'react';
import styled, { keyframes } from 'styled-components'
import Header from '../components/Header'
import CompositionTextPanel from '../components/CompositionTextPanel';
import CompositionMediaPanel from '../components/CompositionMediaPanel';
import { useNavigate, useParams } from 'react-router';
import Comp from '../assets/Compositions'
import PrimaryButton from '../components/PrimaryButton';

// Background images
import Prelude from '../assets/PreludePensive.jpeg'
import BreakingTheAsymptote from '../assets/AsymptoteBackground.jpg'
import JacarandaSnow from '../assets/JacarandaBackground.jpeg'
import DisintegratingCello from '../assets/DisintegratingCello.jpg'
import SouthernCross from '../assets/SouthernCrossBackground.jpeg'
import Lynx from '../assets/LynxBackground.jpeg'
import Concerto from '../assets/Concerto.jpeg'
import Fanfare from '../assets/CloudsBackground.JPG'
import ViolinAndCello from '../assets/ViolinAndCelloBackground.png'

// Audio recordings
import PreludeAudio from '../downloads/Christmas Prelude.mp3'
import JacarandaAudio from '../downloads/Jacaranda Snow.mp3'
import SouthernCrossAudio from '../downloads/Radiant Southern Cross.mp3'
import DisintegratingAudio from '../downloads/Concertino for Disintegrating Cello.mp3'
import LynxAudio from '../downloads/Hunter and the Lynx.mp3'
import ConcertoAudio from '../downloads/Violin Concerto in A Major.mp3'
import ConcertoAudioReduc from '../downloads/Violin Concerto No 1 in A Major Piano Reduction.mp3'
import AsymptoteAudio from '../downloads/Breaking the Asymptote.mp3'
import AsymptoteFullAudio from '../downloads/Breaking the Asymptote Full.mp3'
import CloudsAudio from '../downloads/Beyond-the-Clouds2Long.mp3'
import Allegro from '../downloads/Allegro.wav'
import Adagio from '../downloads/Adagio.wav'

// Scores
import PreludeScore from '../downloads/Christmas Prelude - Full Score.pdf'
import AsymptoteQuartetScore from '../downloads/Breaking the Asymptote (Quartet).pdf'
import AsymptoteScore from '../downloads/Breaking the Asymptote - Full Score.pdf'
import JacarandaScore from '../downloads/Jacaranda Snow - Full Score.pdf'
import DisintegratingScore from '../downloads/Concertino for Disintegrating Cello.pdf'
import LynxScore from '../downloads/Hunter and the Lynx - Full Score.pdf'
import ConcertoReducScore from '../downloads/Violin Concerto No 1 in A Major Piano Reduction.pdf'
import ConcertoScore from '../downloads/Violin Concerto in A Major - Full Score.pdf'
import CloudsScore from '../downloads/Beyond the Clouds Full Orchestration - Full Score.pdf'
import SouthernCrossScore from '../downloads/Radiant Southern Cross - Full Score.pdf'
import AdagioScore from '../downloads/Mystery Friend Duet - Adagio.pdf'
import AllegroScore from '../downloads/Mystery Friend Duet - Allegro - Full Score.pdf'
import { fadeIn } from 'react-animations';

const Section = styled.section`
  background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ), url(${props => props.img});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
`

const Body = styled.div`
  & {
    display: flex;
    flex-direction: column;
    padding: 150px 10% 0px 10%;
    height: fit-content;
    min-height: 100vh;
    animation: 1.5s ${keyframes(fadeIn)};
  }

  @media (max-width: 1100px) {
    & {
      padding: 180px 20px 10px 20px;
    }
  }

  @media (max-width: 450px) {
    & {
      padding: 180px 0px 10px 0px;
    }
  }
`

const Content = styled.div`
  & {
    display: flex;
  }

  @media (max-width: 1100px) {
    & {
      flex-direction: column;
      align-items: center;
    }
  }
`

const PanelWrapper = styled.div`
  & {
    height: 100%;
    width: 50%;
  }

  @media (max-width: 1100px) {
    & {
      width: 100%;
    }
  }
`

const BackButton = styled(PrimaryButton)`
  margin-left: 30px;
`

const CompositionDetails = (props) => {
  const { piece } = useParams()
  const navigate = useNavigate()
  const [img, setImg] = React.useState(undefined)
  const [audio, setAudio] = React.useState([])
  const [scores, setScores] = React.useState([])
  const [toBack, setToBack] = React.useState(false)

  React.useEffect(() => {
    /**
     * Set the background image, audio and sheet music download 
     * for the page.
     */
    const setAssets = () => {
      switch(piece) {
        case 'prelude':
          setImg(Prelude)
          setAudio([PreludeAudio])
          setScores([PreludeScore])
          break
        case 'asymptote':
          setImg(BreakingTheAsymptote)
          setAudio([AsymptoteAudio, AsymptoteFullAudio])
          setScores([AsymptoteQuartetScore, AsymptoteScore])
          break
        case 'jacaranda':
          setImg(JacarandaSnow)
          setAudio([JacarandaAudio])
          setScores([JacarandaScore])
          break
        case 'disintegrating':
          setImg(DisintegratingCello)
          setAudio([DisintegratingAudio])
          setScores([DisintegratingScore])
          break
        case 'lynx':
          setImg(Lynx) 
          setAudio([LynxAudio])
          setScores([LynxScore])
          break
        case 'concerto':
          setImg(Concerto)
          setAudio([ConcertoAudio, ConcertoAudioReduc])
          setScores([ConcertoScore, ConcertoReducScore])
          break
        case 'clouds':
          setImg(Fanfare)
          setAudio([CloudsAudio])
          setScores([CloudsScore])
          break
        case 'southernCross':
          setImg(SouthernCross)
          setAudio([SouthernCrossAudio])
          setScores([SouthernCrossScore])
          break
        case 'mysteryFriends':
          setImg(ViolinAndCello)
          setAudio([Allegro, Adagio])
          setScores([AllegroScore, AdagioScore])
          break
        default: 
      }
    }

    let mounted = true
    if (mounted) {
      setAssets()
    }
    return (() => { mounted = false })
  }, [piece])

  if (toBack) {
    navigate('../compositions')
  }

  return (
    <Section img={img}>
      <Header />
      <Body>
        <BackButton outline
          onClick={() => setToBack(true)}
        >
          Back
        </BackButton>
        <Content>
          <PanelWrapper> 
            <CompositionTextPanel data={Comp[piece]} 
              img={img}
            />
          </PanelWrapper>
          <PanelWrapper>
            <CompositionMediaPanel audio={audio}
              data={Comp[piece]}
              scores={scores}
              hidePurchaseTip={piece === 'prelude' || piece === 'mysteryFriends'}
            />
          </PanelWrapper>
        </Content>
      </Body>
    </Section>
  );
}

export default CompositionDetails;