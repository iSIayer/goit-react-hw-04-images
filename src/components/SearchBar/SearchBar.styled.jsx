import styled from 'styled-components';
import searchIcon from 'svg/search.svg';

export const SearchBarStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.blue};
  box-shadow: ${props => props.theme.shadows.bar_shade};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 7px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  line-height: 1em;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('${searchIcon}');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
