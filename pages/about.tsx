// pages/about.tsx
import React from 'react';
import Layout from '../components/layout';
import { BiCodeAlt, BiWorld, BiRocket } from 'react-icons/bi';

const aboutData = [
  {
    id: 1,
    name: 'AmirAli',
    image: '/amirali.jpg', // Replace with the actual image file path
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    name: 'Amin',
    image: '/amin.jpg', // Replace with the actual image file path
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    name: 'Haji',
    image: '/haji.png', // Replace with the actual image file path
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  // Add more people as needed
];

const projectData = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: <BiCodeAlt />,
  },
  {
    id: 2,
    title: 'Global Presence',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: <BiWorld />,
  },
  {
    id: 3,
    title: 'Innovative Solutions',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    icon: <BiRocket />,
  },
  // Add more projects as needed
];

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <h1 className="text-center mb-4">About Us</h1>
        <div className="row">
          {aboutData.map((person) => (
            <div key={person.id} className="col-md-6 col-lg-4 mb-4">
              <div>

              <img
                  src={person.image}
                  alt={person.name}
                  className="card-img-top rounded-circle"
                  style={{ margin: '3% 0% 6% 0%', width: '100px', height: '100px', objectFit: 'cover' }}
                />
               
                <div className="card-body" >
                  <h5 className="card-title">{person.name}</h5>
                  <p className="card-text">{person.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      
        <h2 className="text-center mb-4">Our Projects</h2>
        <div className="row">
          {projectData.map((project) => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  {project.icon}
                  <h5 className="card-title mt-3">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </Layout>
  );
};

export default AboutPage;
