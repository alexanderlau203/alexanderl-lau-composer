import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import CompositionPreview from '../components/CompositionPreview';
import BreakingTheAsymptote from '../assets/BreakingTheAsymptote.png'

const Body = styled.div`
  width: 100%;
  height: fit-contents;
  padding: 150px 10% 100px 10%;
`

const Compositions = () => {
  return (
    <>
      <Header />
      <Body>
        <CompositionPreview title="Breaking the Asymptote (2021)"
          img={BreakingTheAsymptote}
          alt="Breaking the Asymptote 2021 concert coverpage."
          description="blah blah"
        />
      </Body>
      

      <Footer />
    </>
  );
}

export default Compositions;