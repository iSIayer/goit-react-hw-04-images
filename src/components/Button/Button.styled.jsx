import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 8px 16px;
  border-radius: 7px;
  background-color: ${props => props.theme.colors.blue};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: ${props => props.theme.colors.primary};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  justify-self: center;
  box-shadow: ${props => props.theme.shadows.bar_shade};

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.green};
  }
`;
