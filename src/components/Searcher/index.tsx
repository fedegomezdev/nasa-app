import React, { useState } from 'react';
import { useLocation } from 'wouter';
import Select from 'react-select';
import Button from '../Button';
import { camerasName } from '../../utils/camerasName';
import { rovers } from '../../utils/rovers';

type SearcherState = {
  rover: string;
  camera: string;
  sol: string;
  date: string;
};

const Searcher = () => {
  const [state, setState] = useState<SearcherState>({
    camera: '',
    sol: '',
    date: '',
    rover: ''
  });
  const [_, pushLocation] = useLocation();

  const handleText = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleCamera = ({ value }) => {
    setState({ ...state, camera: value });
  };

  const handleRover = ({ value }) => {
    setState({ ...state, rover: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(state);
    pushLocation(`/search/${state.rover}/${state.camera}/${state.sol}/${state.date}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Sol date..."
        onChange={handleText}
        type="number"
        value={state.sol}
        name="sol"
      />
      <input
        placeholder="Earth Date..."
        onChange={handleText}
        type="date"
        value={state.date}
        name="date"
      />
      <Select options={camerasName} defaultValue={null} onChange={handleCamera} />
      <Select options={rovers} defaultValue={null} onChange={handleRover} />
      <Button>Search</Button>
    </form>
  );
};

export default Searcher;
