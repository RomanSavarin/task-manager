import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/Button';
import { create } from './processesSlice';

export default function CreateProcess() {
  const dispatch = useDispatch();
  return <Button onClick={() => dispatch(create())}>Create Process</Button>;
}
