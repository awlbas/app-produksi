import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/templates/Navbar';
import Home from './components/templates/Home';
import ListBatchTicket from './components/batchticket/ListBatchTicket';
import DetailBatchTicket from './components/batchticket/DetailBatchTicket';
import { Grid } from '@material-ui/core';
import Header from './components/templates/Header';


function App() {
  return (
    <BrowserRouter> 
          <Header />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
        </Grid>
        <Grid item>
          body  
        </Grid>
        <Navbar />
      </Grid>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/batchticket/:no_batch' component={DetailBatchTicket} />
          <Route path='/batchticket' component={ListBatchTicket} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
