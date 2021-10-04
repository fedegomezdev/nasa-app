import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonLoader = () => {
  return (
    <SkeletonTheme highlightColor="#444">
      <Skeleton
        count={5}
        duration={5}
        height={200}
        width={350}
        style={{ margin: '0.5rem' }}
      />
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
