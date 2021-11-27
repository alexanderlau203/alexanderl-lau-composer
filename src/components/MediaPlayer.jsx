import React from 'react';
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MediaPlayer = (props) => {
  // Audio (MP3) player
  if (props.type === 'audio') {
    return (
      <AudioPlayer src={props.src} 
        header={props.name}
      />
    )

  // Video media player
  } else if (props.type === 'video') {
    return (
      <ReactPlayer url={props.src} 
        controls={true} 
      />
    );
  }
}

MediaPlayer.propTypes = {
  type: PropTypes.string,
  src: PropTypes.string,
  img: PropTypes.node
} 

export default MediaPlayer;