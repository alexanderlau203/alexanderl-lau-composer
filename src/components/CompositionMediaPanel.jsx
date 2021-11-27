import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { H1 } from './PageTitles';
import MediaPlayer from './MediaPlayer';
import Prelude from '../downloads/Prelude Pensive.mp3'

const MediaPanel = styled.div`
  & {
    padding: 30px 50px;
  }

  & h2 {
    margin-bottom: 30px;
  }
`

const CompositionMediaPanel = (props) => {
  return (
    <MediaPanel>
      <H1 invert>Media</H1>
      <MediaPlayer type="audio"
        src={Prelude}
        name="Prelude"
      />
    </MediaPanel>
  );
}

CompositionMediaPanel.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  instrumentation: PropTypes.string,
  premiere: PropTypes.string,
  description: PropTypes.string
} 

export default CompositionMediaPanel;