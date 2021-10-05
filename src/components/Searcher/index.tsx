import React, { useState } from 'react';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import { camerasName } from '../../utils/camerasName';
import { rovers } from '../../utils/rovers';
import useLocalStorage from '../../hooks/useLocalStorage';
import {
  Input,
  SearcherContainer,
  Title,
  InputContainer,
  SelectContainer
} from './styles';

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

  const history = useHistory();
  const [_, setIntoLocalStorage] = useLocalStorage('last', '');

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
    const query = new URLSearchParams([
      ['rover', state.rover],
      ['camera', state.camera],
      ['sol', state.sol],
      ['date', state.date]
    ]);
    const route = `/search?${query}`;
    setIntoLocalStorage(route);
    history.push(route);
  };

  return (
    <SearcherContainer>
      <Title>Refine your search</Title>
      <form onSubmit={handleSubmit}>
        <SelectContainer>
          <Select
            options={rovers}
            defaultValue={null}
            onChange={handleRover}
            placeholder="Rover"
          />
        </SelectContainer>

        <SelectContainer>
          <Select
            options={camerasName}
            defaultValue={null}
            onChange={handleCamera}
            placeholder="Camera"
          />
        </SelectContainer>

        <InputContainer>
          <Input
            placeholder="Sol date..."
            onChange={handleText}
            type="number"
            value={state.sol}
            name="sol"
          />

          <Input
            placeholder="Earth Date..."
            onChange={handleText}
            type="date"
            value={state.date}
            name="date"
          />
        </InputContainer>
        <Button content="SEARCH" />
      </form>
    </SearcherContainer>
  );
};

export default Searcher;
