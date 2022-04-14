import React from 'react';
import Header from '../components/Header'
import HomeImage from '../assets/Home.JPG'
import styled, { keyframes } from 'styled-components';
import Footer from '../components/Footer';
import PrimaryButton from '../components/PrimaryButton';
import { Navigate } from 'react-router';
import { fadeIn } from 'react-animations';

const CoverPhoto = styled.img`
  width: 100%;
  height: 550px;
  object-fit: cover;
  animation: 0.5s ${keyframes(fadeIn)} linear;
`

const CoverPhotoText = styled.div`
  position: absolute;
  width: 300px;
  color: white;
  top: 300px;
  left: 10%;
  animation: 1.5s ${keyframes(fadeIn)} linear;

  @media (max-width: 750px) {
    width: 200px;
  }
`

const CoverPhotoTitle = styled.div`
  font-size: 20pt;
  animation: 1.8s ${keyframes(fadeIn)} linear;
`

const BodyWrapper = styled.div`
  & {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;
    margin-top: 100px;
    animation: 1.5s ${keyframes(fadeIn)} linear;
  }

  @media (max-width: 500px) {
    & {
      width: 90%;
      align-items: center;
      margin: 100px auto;
    }
  }
`

const BodyText = styled.p`
  margin: auto;
  text-align: justify;
  line-height: 27px;
`

const MoreInfoButton = styled(PrimaryButton)`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 50px;
`

const Home = () => {
  const [toAbout, setToAbout] = React.useState(false)

  if (toAbout) {
    return <Navigate to="/about" />
  }

  return (
    <section id="home">
      <Header />

      {/* Cover photo */}
      <div>
        <CoverPhotoText>
          <CoverPhotoTitle>Alexander Lau</CoverPhotoTitle>
          <div>Australian-born, contemporary, classical composer and violinist.</div>
        </CoverPhotoText>
        <CoverPhoto src={HomeImage}/>
      </div>

      {/* Home page text */}
      <BodyWrapper>
        <BodyText>
          Alexander Lau is an emerging contemporary classical composer. He studied composition for six 
          years under Dr Nicholas Vines. Having played violin for 15 years, Alex often writes chamber 
          music for strings. He is also a member of the Seraphim String Trio, established in 2015. 
          Alex's compositional style is diverse and often changes. Most recently, his works have been 
          influenced by Jazz and American minimalism. Alex is also the composer of ‘Jacaranda Snow’, 
          a piano quartet for the growth mindset picture book, <i>Jacaranda Snow</i>. Alex lives with his 
          family in Sydney and currently studies at the University of New South Wales.
        </BodyText>
        <MoreInfoButton onClick={() => setToAbout(true)}>
          Find out more
        </MoreInfoButton>
      </BodyWrapper>
      <Footer />
    </section>
  );
}

export default Home;