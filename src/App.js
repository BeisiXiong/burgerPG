import React, {Component} from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import Toolbar from "./Components/Navigation/Toolbar/Toolbar";

class App extends Component{
  render() {
    return (
        <div className="App">
          <Layout>
              <Toolbar></Toolbar>
              <BurgerBuilder></BurgerBuilder>
          </Layout>
        </div>
    );
  }
  }

export default App;
