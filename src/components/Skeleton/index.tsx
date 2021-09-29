import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonLoader = () => {
  return (
    <SkeletonTheme highlightColor="#444">
      <p>
        <Skeleton count={4} duration={5} height={200} width={150} style={{ margin: '0.5rem' }} />
      </p>
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
