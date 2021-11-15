import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const InputGroup = styled.div`
  & {
    display: flex;
    flex-direction: column;
  }

  & label {
    font-size: 10pt;
    font-weight: bold;
    color: #222222;
  }
`

const TextBox = styled.input`
  padding: 8px 10px;
  font-family: inherit;
  outline: none;
  border: 1px solid #C0C0C0;
  background-color: #FBFBFB;
  color: #444444;
  margin-top: 2px;
`

const TextArea = styled.textarea`
  height: 150px;
  padding: 8px 10px;
  font-family: inherit;
  outline: none;
  border: 1px solid #C0C0C0;
  background-color: #FBFBFB;
  color: #444444;
  margin-top: 2px;
`

export const TextInputGroup = (props) => {
  return (
    <InputGroup className={props.className}>
      <label>{props.label}</label>
      <TextBox />
    </InputGroup>
  );
}

TextInputGroup.propTypes = {
  label: PropTypes.string
} 

export const TextAreaGroup = (props) => {
  return (
    <InputGroup className={props.className}>
      <label>{props.label}</label>
      <TextArea cols="40" rows="5" name="description" wrap="physical"></TextArea>
    </InputGroup>
  );
}

TextAreaGroup.propTypes = {
  label: PropTypes.string
} 