import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BatchTicketContextProvider from './contexts/BatchTicketContext';
import RawMaterialContextProvider from './contexts/RawMaterialContext';
import ItemBatchContextProvider from './contexts/ItemBatchContext';
import KartuStockContextProvider from './contexts/KartuStockContext';
import Navbar from './components/Navbar';
import KartuStock from './components/KartuStock';
import BatchTicket from './components/BatchTicket';
import BatchTicketDetail from './components/BatchTicketDetail';
import FormBatchTicket from './components/FormBatchTicket'
import ItemMasuk from './components/ItemMasuk';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <KartuStockContextProvider>
        <ItemBatchContextProvider>
        <RawMaterialContextProvider>
        <BatchTicketContextProvider>
        <Switch>
          <Route exact path='/' component={KartuStock} />
          <Route path='/batchticket/:id_batch' component={BatchTicketDetail} />
          <Route path='/formbatchitem' component={FormBatchTicket} />
          <Route path='/batchticket' component={BatchTicket} />
          <Route path='/itemmasuk' component={ItemMasuk} />
        </Switch>
        </BatchTicketContextProvider>
        </RawMaterialContextProvider>
        </ItemBatchContextProvider>
        </KartuStockContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
