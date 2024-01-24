import React from 'react';
import Layout from '../components/layout';

const Page = () => {
  return (
    <Layout>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
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
        <h1 style={{color: 'black', fontSize: '67px'}}>OceanFront Contractors</h1>
      </div>
    </Layout>
  );
};

export default Page;

