import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const DetailRow = styled.div`
  display: flex;
`

const LabelWrapper = styled.div`
  min-width: 150px;
`

const Label = styled.span`
  font-weight: bold;
  text-decoration: underline;
`

const KeyValueRow = (props) => {
  return (
    <DetailRow>
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
} 

export default KeyValueRow;