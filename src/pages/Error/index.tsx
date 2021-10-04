import React from 'react';
import { useHistory } from 'react-router';
import Head from '../../components/Head';
import image from '../../resources/images/notFound.png';

const ErrorPage = () => {
  const history = useHistory();

  const redirect = () => {
    history.push('/');
  };

  return (
    <div>
      <Head title="Error 404" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={image} onClick={redirect} style={{ maxWidth: '660px' }} />
      </div>
    </div>
  );
};

export default ErrorPage;
