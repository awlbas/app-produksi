import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AirContextProvider from './contexts/AirContext';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import BatchTicket from './components/BatchTicket';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <AirContextProvider>
          <Route exact path='/' component={ItemList} />
          <Route path='/kartustok/:nama_item' component={ItemDetail} />
          <Route path='/batchticket' component={BatchTicket} />
        </AirContextProvider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
