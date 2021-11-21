import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import PrimaryButton from './PrimaryButton';

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

const Instrumentation = styled.label`
  font-style: italic;
  font-size: 14pt;
  margin-bottom: 10px;
  color: #888888
`

const Description = styled.div`
  text-align: justify;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`

const CompositionPreview = (props) => {
  return (
    <PreviewContainer>
      <CoverPhoto src={props.img}
        alt={props.alt}
      />
      <TextWrapper>
        <Title>{props.title}</Title>
        <Instrumentation>{props.instrumentation}</Instrumentation>
        <Description>{props.description}</Description>
      </TextWrapper>
      <ButtonWrapper>
        <PrimaryButton onClick={() => props.onClick()}>
          Learn more
        </PrimaryButton>
      </ButtonWrapper>
    </PreviewContainer>
  );
}

CompositionPreview.propTypes = {
  img: PropTypes.node,
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func
} 

export default CompositionPreview;