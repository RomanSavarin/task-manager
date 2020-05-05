import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { IoIosArrowDown, IoIosClose } from 'react-icons/io';

import processShape from 'shapes/process';
import { deleteProcess } from './processesSlice';
import JobsTable from 'components/JobsTable';
import { Tr, Td, TdIcon } from 'components/Table';

const Arrow = styled(({ expanded, ...rest }) => <IoIosArrowDown {...rest} />)`
  transform: ${({ expanded }) => (expanded ? 'rotate(0)' : 'rotate(-90deg)')};
  transition: transform 0.2s ease-out;
`;

export default function Process({
  id,
  name,
  startTime,
  totalJobs,
  status,
  jobs,
}) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleRemoveClick = (e, id) => {
    e.stopPropagation();
    dispatch(deleteProcess(id));
  };

  return (
    <>
      <Tr clickable onClick={() => setExpanded(!expanded)}>
        <TdIcon>
          <Arrow size={15} expanded={expanded} />
        </TdIcon>
        <Td>{id}</Td>
        <Td>{name}</Td>
        <Td>{startTime}</Td>
        <Td>{totalJobs}</Td>
        <Td>{status}</Td>
        <TdIcon onClick={(e) => handleRemoveClick(e, id)}>
          <IoIosClose size={25} />
        </TdIcon>
      </Tr>
      {expanded && (
        <Tr>
          <Td colSpan='7'>
            <JobsTable jobs={jobs} />
          </Td>
        </Tr>
      )}
    </>
  );
}

Process.propTypes = processShape;
Process.defaultProps = {
  id: ' ',
  name: ' ',
  startTime: 0,
  totalJobs: 0,
  jobs: [],
  status: 'running',
};
