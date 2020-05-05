import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import H2 from 'components/H2';
import Row from 'components/Row';
import Card from 'components/Card';
import Search from 'features/search/Search';
import CreateProcess from 'features/processes/CreateProcess';
import ProcessesTable from 'features/processes/ProcessesTable';

export default function App() {
  return (
    <>
      <Card>
        <Search />
        <Row>
          <H2>Processes</H2>
          <CreateProcess />
        </Row>
        <ProcessesTable />
      </Card>
      < ReduxToastr 
        position="bottom-right" 
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />
    </>
  );
}