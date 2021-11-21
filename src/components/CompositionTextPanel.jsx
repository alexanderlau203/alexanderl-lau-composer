import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { MainTitle } from './PageTitles';
import KeyValueRow from './KeyValueRow';

const TextPanel = styled.div`
  color: white;
  padding: 20px 60px;

  & hr {
    margin: 40px 0px;
  }
`

const CompositionDetails = styled.div`
  & div {
    margin-top: 6px;
  }
`

const CompositionTextPanel = (props) => {

  return (
    <TextPanel>
      <CompositionDetails>
        <MainTitle>{props.title}</MainTitle>
        <KeyValueRow label="Year" value={props.year}/>
        <KeyValueRow label="Premiere" value={props.premiere}/>
        <KeyValueRow label="Instrumentation" value={props.instrumentation}/>
        <hr />
      </CompositionDetails>
    </TextPanel>
  );
}

CompositionTextPanel.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  instrumentation: PropTypes.string,
  premiere: PropTypes.string
} 

export default CompositionTextPanel;