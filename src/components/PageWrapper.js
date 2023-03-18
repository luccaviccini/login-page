import React, { useEffect } from 'react';

const PageWrapper = ({ children, backgroundImage }) => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
  }, [backgroundImage]);

  return <div>{children}</div>;
};

export default PageWrapper;
