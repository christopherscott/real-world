import * as React from 'react';
import ContentLoader from 'react-content-loader';

const MovieCardPlaceholder = () => (
  <ContentLoader
    height={223}
    width={350}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="10" y="25" rx="0" ry="0" width="140" height="20" />
    <rect x="10" y="55" rx="0" ry="0" width="165" height="15" />
    <rect x="200" y="10" rx="0" ry="0" width="140" height="200" />
  </ContentLoader>
);

export default MovieCardPlaceholder;
