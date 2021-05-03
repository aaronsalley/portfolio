import React from 'react';
import { Helmet } from 'react-helmet';

const HeaderMeta = (props: any) => {
  const { title } = props.meta;

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default HeaderMeta;
