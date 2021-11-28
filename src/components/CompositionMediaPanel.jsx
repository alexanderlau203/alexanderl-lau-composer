import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { H1 } from './PageTitles';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import DownloadCompositionGroup from './DownloadCompositionGroup';

const MediaPanel = styled.div`
  & {
    padding: 30px 50px;
  }

  & h2 {
    margin-bottom: 30px;
  }

  & p {
    color: white;
  }
`

const AudioPlayerObj = styled(AudioPlayer)`
  margin-bottom: 30px;
`

const CompositionMediaPanel = (props) => {
  return (
    <MediaPanel>
      {/* Audio components */}
      <H1 invert>Media</H1>
      {
        props.audio !== undefined &&
        props.audio.map((val, idx) => {
          return (
            <AudioPlayerObj src={val}
              autoPlay={false}
              header={props.data.audioTitles[idx]}
              key={idx}
            />
          )
        })
      }

      {/* Sheet music component */}
      <H1 invert>Scores</H1>
      {
        !props.hidePurchaseTip &&
        <p>Get in contact to purchase parts.</p>
      }
      {
        props.scores !== undefined &&
        props.scores.map((val, idx) => {
          return (
            <DownloadCompositionGroup title={props.data.scoreTitles[idx]} 
              PDF={val}
            />
          )
        })
      }
    </MediaPanel>
  );
}

CompositionMediaPanel.propTypes = {
  audio: PropTypes.array,
  data: PropTypes.object,
  PDF: PropTypes.node,
  hidePurchaseTip: PropTypes.bool
} 

export default CompositionMediaPanel;