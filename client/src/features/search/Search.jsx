import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';

import theme, { colors } from 'styles/theme';
import JobsTable from 'components/JobsTable';
import Label from 'components/Label';
import { findedJobs, setSearchQuery, selectSearchQuery } from './searchSlice';

const { shadow, innerShadow } = theme;
const { primary, greyDark, greyLight3 } = colors;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const TableContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

const Input = styled.input`
  width: 20.4rem;
  height: 4rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding-left: 3.8rem;
  box-shadow: ${innerShadow};
  background: none;
  font-family: inherit;
  color: ${greyDark};

  &::placeholder {
    color: ${greyLight3};
  }

  &:focus {
    outline: none;
    box-shadow: ${shadow};
  }
`;

const Icon = styled(IoIosSearch)`
  height: 2rem;
  box-sizing: content-box;
  position: absolute;
  font-size: 2rem;
  padding: 0 1rem;
  display: flex;
  color: ${({ focused }) => (focused ? primary : greyDark)};
  transition: 0.3s ease;
`;

export default function Search() {
  const [inputFocused, setFocused] = useState(undefined);
  const jobs = useSelector(findedJobs);
  const query = useSelector(selectSearchQuery);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <>
      <Wrapper>
        <Input
          type='text'
          placeholder='Find A Job'
          onFocus={() => setFocused('focused')}
          onBlur={() => setFocused(undefined)}
          onChange={handleChange}
        />
        <Icon focused={inputFocused} />
      </Wrapper>
      {query.length > 1 && (
        <TableContainer>
          {jobs.length ? (
            <JobsTable nested={false} jobs={jobs} />
          ) : (
            <Label>No jobs were found</Label>
          )}
        </TableContainer>
      )}
    </>
  );
}
