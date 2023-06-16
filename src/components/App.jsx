import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import useStyles from './styles'

import {Actors,Profiles,Movies,MovieInformation, Navbar} from './';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar/>
      <main className={classes.content}>
      <div className={classes.toolbar}/>
        <Routes>
          <Route exact path="/" element={<Movies/>} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors/>} />
          <Route exact path="/profile/:id" element={<Profiles/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
