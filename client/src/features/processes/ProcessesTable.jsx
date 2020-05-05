import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';

import Process from './Process';
import { colors } from 'styles/theme';
import HeaderCell from './HeaderCell';
import Table, { THead, Tr, Th } from 'components/Table';
import { selectProcesses, fetch } from './processesSlice';
import { selectIsLoading } from 'features/loader/loaderSlice';

export default function ProcessesTable() {
  const dispatch = useDispatch();
  const processes = useSelector(selectProcesses);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Table>
      <THead>
        <Tr>
          <Th />
          <Th>Id</Th>
          <HeaderCell title='Name' />
          <HeaderCell title='Start Time' />
          <HeaderCell title='Total Jobs' />
          <HeaderCell title='Status' />
          <Th>
            <ClipLoader size={25} color={colors.primary} loading={isLoading} />
          </Th>
        </Tr>
      </THead>
      <tbody>
        {processes.map(({ id, name, startTime, totalJobs, jobs, status }) => {
          return (
            <Process
              key={id}
              {...{ id, name, startTime, totalJobs, jobs, status }}
            />
          );
        })}
      </tbody>
    </Table>
  );
}
