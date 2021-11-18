import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.div`
  & {
    height: 100px;
    bottom: 0px;
    width: 98vw;
    margin: auto;
  }

  @media (max-width: 550px) {
    display: none;
  }
`
const FooterBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  font-size: 11pt;
`

const Subtitle = styled.div`
  font-size: 9pt;
  font-style: italic;
`

const FooterWrapper = styled.div`
  padding: 0px 100px;
`

const Footer = () => {
  return (
    <FooterSection>
      <FooterWrapper>
        <hr />
        <FooterBody>
          <div>
            <div>Alexander Lau</div>
            <Subtitle>Composer</Subtitle>
          </div>
          <div>Sydney, NSW, Australia</div>
        </FooterBody>
      </FooterWrapper>
    </FooterSection>
  );
}

export default Footer;