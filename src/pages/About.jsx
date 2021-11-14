import React from 'react';
import Header from '../components/Header'
import styled from 'styled-components';
import AboutImage from '../assets/About.JPG';
import { Link } from 'react-router-dom';

const Body = styled.div`
  display: flex;
`

const CoverPhoto = styled.img`
  width: 50%;
  height: 100vh;
  object-fit: cover;
`

const AboutSection = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 100px;
`

const AboutWrapper = styled.div`
  padding: 50px 110px
`

const Title = styled.h1`
  font-size: 30pt;
`

const ExtLink = styled.a`

`

const About = () => {
  return (
    <section id="about">
      <Header />
      
      <Body>
        <CoverPhoto src={AboutImage} 
          alt="Composer Alexander Lau holding a violin"
        />
        <AboutSection>
          <AboutWrapper>
            <Title>About</Title>
            <p>Hello! I’m Alex.</p>
            <p>
              I’m a  contemporary, classical composer. I was born in Sydney, Australia and attended 
              Sydney Grammar School in Darlinghurst. When I was studying there, I had the privilege 
              of writing music under the guidance of Dr Nicholas Vines. I am currently studying at 
              the University of New South Wales.
            </p>
            <p>
              I’ve been playing violin for over 15 years now, and I am a partner in 
              the <a href="https://seraphimstringtrio.com/#/" 
                  target="_blank" 
                  rel="noreferrer"
                > 
                  Seraphim String Trio
                </a>, 
              established in 2015. My group enjoys playing at events and running our 
              own concerts to explore new and interesting chamber works.
            </p>
            <p>
              My compositional styles are diverse and ever-changing. In one of my recent orchestral works 
              Breaking the Asymptote, I explore aesthetics of American minimalism and Afro-Cuban Jazz. 
            </p>
            <p>
              Jacaranda Snow is a piano quartet written for the children’s picture book Jacaranda Snow, 
              by Catherine Greer and Helene Magisson. It’s an extramusical work that follows the narrative 
              of the book, written in a semi-pastiche style.
            </p>
          </AboutWrapper>
        </AboutSection>
      </Body>
    </section>
  );
}

export default About;