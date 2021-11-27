import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header'
import CompositionTextPanel from '../components/CompositionTextPanel';
import CompositionMediaPanel from '../components/CompositionMediaPanel';
import Prelude from '../assets/PreludePensive.jpeg'
import BreakingTheAsymptote from '../assets/BreakingTheAsymptote.png'
import JacarandaSnow from '../assets/JacarandaSnow.jpeg'
import DisintegratingCello from '../assets/DisintegratingCello.jpg'
import SouthernCross from '../assets/SouthernCross.jpeg'
import Lynx from '../assets/Lynx.jpg'
import Concerto from '../assets/Concerto.jpeg'
import Fanfare from '../assets/Fanfare.png'
import { useParams } from 'react-router';
import Comp from '../assets/Compositions'

const Body = styled.div`
  display: flex;
  padding: 150px 10% 0px 10%;
  height: 100vh;
  background: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
`

const PanelWrapper = styled.div`
  height: 100%;
  width: 50%;
`

const VerticleLine = styled.div`
  border-left: 1px solid #BBBBBB;
  height: 65vh;
  margin-bottom: 30px;
`

const CompositionDetails = (props) => {
  const { piece } = useParams()
  const [img, setImg] = React.useState(undefined)

  React.useEffect(() => {
    /**
     * Set the background image for the page
     */
    const setBackground = () => {
      console.log(piece)
      switch(piece) {
        case 'prelude':
          setImg(Prelude); break;
        case 'asymptote':
          setImg(BreakingTheAsymptote); break;
        case 'jacaranda':
          setImg(JacarandaSnow); break; 
        case 'disintegrating':
          setImg(DisintegratingCello); break; 
        case 'lynx':
          setImg(Lynx); break; 
        case 'concerto':
          setImg(Concerto); break; 
        case 'clouds':
          setImg(Fanfare); break;
        case 'southernCross':
          setImg(SouthernCross); break;
        default:
          setImg(undefined)
      }
    }

    let mounted = true
    if (mounted) {
      setBackground()
    }
    return (() => { mounted = false })
  }, [piece])

  return (
    <section id="compositionDetails">
      <Header />
      <Body img={img}>
        <PanelWrapper> 
          <CompositionTextPanel data={Comp[piece]} 
            img={img}
          />
        </PanelWrapper>
        <VerticleLine />
        <PanelWrapper>
          <CompositionMediaPanel />
        </PanelWrapper>
      </Body>
    </section>
  );
}

export default CompositionDetails;