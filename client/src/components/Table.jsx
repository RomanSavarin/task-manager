import styled from 'styled-components';

import theme, { colors } from 'styles/theme';

export default styled.table`
  width: 100%;
  border-radius: 1rem;
  border-collapse: collapse;
  box-shadow: ${theme.shadow};
`;

export const NestedTable = styled.table`
  width: calc(100% - 4rem);
  margin: 2rem;
  border-radius: 1rem;
  border-collapse: collapse;
  box-shadow: ${theme.innerShadow};
`;

export const THead = styled.thead`
  border-bottom: 1px solid ${colors.greyLight3};
`;

export const Tr = styled.tr`
  height: 4rem;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
`;

export const Td = styled.td`
  font-size: 14px;
  font-weight: normal;
  color: ${colors.greyDark};
  text-align: center;
`;

export const Th = styled(Td)`
  font-weight: 500;
`;

export const TdIcon = styled(Td)`
  width: 4rem;
  height: 4rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${colors.primary};
`;
