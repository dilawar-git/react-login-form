import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


function App() {
  return (
    <div className="login-page">
    <Tabs >
    <TabList style={{"list-style":"none","display":"inline-flex","padding-left":"0px"}}>
      <Tab style={{"padding":"10px"}} className="tab-st">Login</Tab>
      <Tab style={{"padding":"10px"}} className="tab-st">Register</Tab>
    </TabList>
 
    <TabPanel>
      <Login />
    </TabPanel>
    <TabPanel>
      <Register />
    </TabPanel>
  </Tabs>
  </div>
    
  );
}

export default App;
