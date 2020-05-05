import React from 'react';
import styled from 'styled-components';

import { colors } from 'styles/theme';
const { white, greyLight2 } = colors;

const StyledCard = styled.div`
  width: 75rem;
  margin-top: 2rem;
  border-radius: 3rem;
  box-shadow: 0.8rem 0.8rem 1.4rem ${greyLight2},
    -0.2rem -0.2rem 1.8rem ${white};
  padding: 4rem;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Card({ ...props }) {
  return (
    <Container>
      <StyledCard {...props} />
    </Container>
  );
}
