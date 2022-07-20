import React from 'react';

import { Layout, StyledLink } from '../../components';

const resources= [
  {
    title: 'School Calendar'
  },
  {
    title: 'LP Calendar'
  },
  {
    title: 'Parent University'
  }
]

export default ParentResources = () => {
  return <Layout title="Parent Educationl Resources">
    {resources.map(({ title }) => <StyledLink key={title} title={title} style={{ marginBottom: 22 }} />)}
  </Layout>
}