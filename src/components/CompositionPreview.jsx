import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import PrimaryButton from './PrimaryButton';
import { Subtitle } from './PageTitles';

const PreviewContainer = styled.div`
  width: 375px;
  margin: 40px;

  @media (max-width: 400px) {
    width: 90%
  }
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
        <Title>{props.data.name}</Title>
        <Subtitle>{`${props.data.instrumentation} (${props.data.year})`}</Subtitle>
        <Description>{props.data.description}</Description>
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
  onClick: PropTypes.func,
  data: PropTypes.object
} 

export default CompositionPreview;