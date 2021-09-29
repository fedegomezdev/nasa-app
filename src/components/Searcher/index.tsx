import React, { useState } from 'react';
import { useLocation } from 'wouter';
import Select from 'react-select';
import Button from '../Button';
import { camerasName } from '../../utils/camerasName';
import { rovers } from '../../utils/rovers';

type SearcherState = {
  rover: string;
  camera: string;
  sol: number;
  date: string;
};

const Searcher = () => {
  const [data, setData] = useState<SearcherState>({
    camera: '',
    sol: 0,
    date: '',
    rover: 'curiosity'
  });
  const [_, pushLocation] = useLocation();

  const handleChange = (event: any) => {
    console.log(event);
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(data);
    alert('Enter');
    //pushLocation(`/search/${data.camera}/${data.sol}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Sol date..."
        onChange={handleChange}
        type="number"
        value={data.sol}
        name="sol"
      />
      <input
        placeholder="Earth Date..."
        onChange={handleChange}
        type="date"
        value={data.date}
        name="date"
      />
      <Select options={camerasName} defaultValue={null} onChange={handleChange} />
      <Select options={rovers} defaultValue={null} onChange={handleChange} />
      <Button>Search</Button>
    </form>
  );
};

export default Searcher;
