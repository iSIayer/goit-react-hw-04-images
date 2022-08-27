import styled from 'styled-components';

export const ImageGalleryItemStyled = styled.li`
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.bar_shade};
`;

export const Image = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
