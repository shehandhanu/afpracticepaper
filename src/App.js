import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import viewCategories from './components/viewCategories';
import viewVehicals from './components/viewVehicals';
import insertVehical from './components/insertVehical';
import viewvihicalsInCategory from './components/viewVehicalsInCategory';
import Navbar from './components/nav';
import calTrip from './components/caltrip';

function App() {
  return (

    <Router>
      <div className="container mt-2">
        <Navbar />
        <Route path="/" component={insertVehical} exact />
        <Route path="/vehical" component={viewVehicals} exact />
        <Route path="/category" component={viewCategories} exact />
        <Route path="/eachcategory" component={viewvihicalsInCategory} exact />
        <Route path="/caltrip" component={calTrip} exact />
      </div>
    </Router>
  );
}

export default App;
