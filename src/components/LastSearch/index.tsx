import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const LastSearch = () => {
  const [storedValue, setValue] = useLocalStorage('last', '');
  const info = storedValue ? storedValue : 'No Pics, try another search';
  return (
    <div>
      <h4>Last Search: </h4>
      <h5>{info}</h5>
    </div>
  );
};

export default LastSearch;
