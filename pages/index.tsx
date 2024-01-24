import React from 'react';
import Layout from '../components/layout';

const Page = () => {
  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url('/res1.png')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white', // Text color on top of the image
          textAlign: 'center',
        }}
      >
        <h1 style={{color: 'black', fontSize: '67px'}}>OceanFron Contractors</h1>
      </div>
    </Layout>
  );
};

export default Page;

