import React from 'react';
import { useHistory } from 'react-router';
import Head from '../../components/Head';
import image from '../../resources/images/notFound.png';
import { ErrorContainer, ErrorImage } from './styles';

const ErrorPage = () => {
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };

  return (
    <div>
      <Head title="Error 404" />
      <ErrorContainer>
        <ErrorImage src={image} onClick={goHome} />
      </ErrorContainer>
    </div>
  );
};

export default ErrorPage;
