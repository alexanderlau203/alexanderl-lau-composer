import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-size: 30pt;
  font-weight: bold;
  ${props => props.invert ? 'color: white;' : ''}
`

export const Subtitle = styled.div`
  font-style: italic;
  font-size: 14pt;
  margin-bottom: 10px;
  ${props => props.invert ? 'color: white' : '#888888'};
`

export const H1 = styled.h2`
  font-size: 22pt;
  font-weight: bold;
  ${props => props.invert ? 'color: white;' : ''}
`