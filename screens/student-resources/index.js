import React from 'react';

import { Layout, TextInputField, StyledLink } from '../../components';

const resources= [
  {
    title: 'Learning Tools'
  },
  {
    title: 'Helpful Educational Resourcess'
  },
  {
    title: 'Learning Games'
  },
  {
    title: 'Resources Category'
  }
]

export default StudentResources = () => {
  return <Layout title="Student Educationl Resources">
    <TextInputField placeholder="Type your student name" style={{ marginBottom: 22 }} />
    {resources.map(({ title }) => <StyledLink key={title} title={title} style={{ marginBottom: 22 }} />)}
  </Layout>
}