import styled from 'styled-components';

import theme, { colors } from 'styles/theme';
const { shadow, innerShadow } = theme;

export default styled.div`
  width: 18rem;
  height: 4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: ${shadow};
  color: ${colors.greyDark};
  &:hover { 
    color: ${colors.primary}; 
  }
  &:active {
    box-shadow: ${innerShadow};
    }
  }
`;
