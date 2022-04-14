import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { Subtitle, MainTitle } from './PageTitles';
import KeyValueRow from './KeyValueRow';
import ReactHTMLParser from 'react-html-parser'

const TextPanel = styled.div`
  padding: 30px;
`

const CompositionDetails = styled.div`
  & div {
    margin-top: 6px;
  }
`

const Description = styled.p`
  margin-top: 30px;
  color: white;
`

const CompositionTextPanel = (props) => {
  return (
    <TextPanel>
      <CompositionDetails>
        <MainTitle invert>{props.data.name}</MainTitle>
        <Subtitle invert>{props.data.instrumentation}</Subtitle>
        <KeyValueRow invert label="Year" value={props.data.year}/>
        <KeyValueRow invert label="Premiere" value={props.data.premiere}/>
        <Description>{ReactHTMLParser(props.data.description)}</Description>
      </CompositionDetails>
    </TextPanel>
  );
}

CompositionTextPanel.propTypes = {
  data: PropTypes.object
} 

export default CompositionTextPanel;