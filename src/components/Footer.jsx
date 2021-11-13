import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.div`
  height: 100px;
  position: absolute;
  bottom: 0px;
  width: 100vw;
`
const FooterBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  font-size: 11pt
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