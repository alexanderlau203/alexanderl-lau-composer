import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const Button = styled.button`
  & {
    color: ${props => props.outline ? 'black' : 'white'};
    background-color: ${props => props.outline ? 'white' : 'black'};
    border-radius: 0px;
    padding: 12px 18px;
    font-size: 12pt;
    font-family: 'Open Sans', sans-serif;
    border: 0px;
    font-weight: bold;
    width: fit-content;
    ${props => props.disabled ? 'opacity: 0.5' : ''}
  }

  &:hover {
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    ${props => props.disabled ? 'opacity: 0.5;' : ''}
    ${props => props.outline ? 'background-color: #BBBBBB;' : ''}
    transition: 0.3s
  }
`

const PrimaryButton = (props) => {
  return (
    <Button onClick={() => props.onClick()}
      className={props.className}
      disabled={props.disabled}
      outline={props.outline}
    >
      {props.children}
    </Button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
} 

export default PrimaryButton;