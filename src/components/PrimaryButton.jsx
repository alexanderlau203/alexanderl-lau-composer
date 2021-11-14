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
  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;
  }
`

const PrimaryButton = (props) => {
  return (
    <Button onClick={() => props.onClick()}
      className={props.className}
    >
      {props.children}
    </Button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.node
} 

export default PrimaryButton;