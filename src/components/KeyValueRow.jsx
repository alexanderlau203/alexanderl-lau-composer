import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const DetailRow = styled.div`
  display: flex;
  margin-top: 0px !important;
  ${props => props.invert ? 'color: white;' : ''}
`

const LabelWrapper = styled.div`
  min-width: 100px;
`

const Label = styled.span`
  font-weight: bold;
  text-decoration: underline;
`

const KeyValueRow = (props) => {
  return (
    <DetailRow invert={props.invert}>
      <LabelWrapper>
        <Label>{props.label}</Label>:
      </LabelWrapper>
      <div>
        {props.value}
      </div>
    </DetailRow>
  );
}

KeyValueRow.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  invert: PropTypes.bool
} 

export default KeyValueRow;