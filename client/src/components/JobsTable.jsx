import React from 'react';
import PropTypes from 'prop-types';

import Table, { NestedTable, Tr, Th, Td } from 'components/Table';
import jobsShape from 'shapes/job';

export default function JobsTable({ jobs, nested = true }) {
  const Container = nested ? NestedTable : Table;
  return (
    <Container>
      <thead>
        <Tr>
          <Th>Id</Th>
          <Th>Name</Th>
          <Th>Status</Th>
        </Tr>
      </thead>
      <tbody>
        {jobs?.map(({ id, name, status }) => (
          <Tr key={id}>
            <Td>{id}</Td>
            <Td>{name}</Td>
            <Td>{status}</Td>
          </Tr>
        ))}
      </tbody>
    </Container>
  );
}

JobsTable.propTypes = {
  jobs: PropTypes.arrayOf(jobsShape),
};
