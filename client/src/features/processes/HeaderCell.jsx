import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TiArrowSortedDown } from 'react-icons/ti';
import styled from 'styled-components';

import { Th } from 'components/Table';
import { sortBy } from './processesSlice';
import { selectSortedBy, setSortedBy } from 'features/sortedBy/sortedBySlice';
import { camalize } from 'helpers/utils';
import { colors } from 'styles/theme';

const Arrow = styled(({ upward, ...rest }) => <TiArrowSortedDown {...rest} />)`
  transform: ${({ upward }) => (upward ? 'rotate(0)' : 'rotate(180deg)')};
  transition: transform 0.2s ease-out;
  color: primary;
`;

const { primary, greyLight3 } = colors;
const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${({ isActive }) => {
    return isActive ? primary : greyLight3;
  }};
`;

export default function HeaderCell({ title }) {
  const dispatch = useDispatch();
  const sortedBy = useSelector(selectSortedBy);
  const [upward, setUpward] = useState(true);
  const isActive = sortedBy === title;

  const handleClick = () => {
    setUpward(!upward);
    const payload = { prop: camalize(title), upward };
    dispatch(sortBy(payload));
    dispatch(setSortedBy(title));
  };

  return (
    <Th onClick={handleClick}>
      {title}
      <IconWrapper isActive={isActive}>
        <Arrow size={15} upward={upward} />
      </IconWrapper>
    </Th>
  );
}
