import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const Button = styled.button`
  & {
    color: white;
    background-color: black;
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
    opacity: ${props => props.disabled ? '0.5' : '0.7'};
    transition: ${props => props.disabled ? '0.3s' : 'none'};
  }
`

const PrimaryButton = (props) => {
  return (
    <Button onClick={() => props.onClick()}
      className={props.className}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.node,
  disabled: PropTypes.bool
} 

export default PrimaryButton;