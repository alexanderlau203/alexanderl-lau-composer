import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header'
import CompositionTextPanel from '../components/CompositionTextPanel';

const CompositionDetails = (props) => {
  const Body = styled.div`
    display: flex;
  `

  const TextPanelWrapper = styled.div`
    height: 100vh;
    width: 50%;
    background-color: #41414D;
    padding-top: 150px;
  `

  return (
    <section id="compositionDetails">
      <Header />
        <Body>
          <TextPanelWrapper> 
            <CompositionTextPanel title="Prelude"
              year="2021"
              instrumentation="Piano solo"
              premiere="None"
            />
          </TextPanelWrapper>
        </Body>
    </section>
  );
}

export default CompositionDetails;