import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const PreviewContainer = styled.div`
  width: 375px;
  margin: 40px;
`

const CoverPhoto = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

const TextWrapper = styled.div`
  margin-top: 10px;
`

const Title = styled.div`
  font-size: 20pt;
  font-weight: bold;
  width: 100%;
`

const CompositionPreview = (props) => {
  return (
    <PreviewContainer>
      <CoverPhoto src={props.img}
        alt={props.alt}
      />
      <TextWrapper>
        <Title>{props.title}</Title>
        <div>{props.description}</div>
      </TextWrapper>
    </PreviewContainer>
  );
}

CompositionPreview.propTypes = {
  img: PropTypes.node,
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
} 

export default CompositionPreview;