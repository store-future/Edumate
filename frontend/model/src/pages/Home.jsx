
import React from 'react';
import Nav from '../Components/navbar/Nav';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>
        <h1>i am in home</h1>
        <Nav />

        
      </div>
    </>
  );
};

export default Home;
