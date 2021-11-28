import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import PrimaryButton from './PrimaryButton';

const DownloadGroup = styled.div`
  & {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  & label {
    color: white;
    font-style: italic;
    margin-bottom: 10px;
  }
`

const DownloadCompositionGroup = (props) => {
  const openPDF = () => {
    window.open(props.PDF)
  }

  return (
    <DownloadGroup>
      <label>{props.title}</label>
      <PrimaryButton outline
        onClick={() => openPDF()}
      >
        View
      </PrimaryButton>
    </DownloadGroup>
  );
}

DownloadCompositionGroup.propTypes = {
  PDF: PropTypes.node,
  title: PropTypes.string,
} 

export default DownloadCompositionGroup;