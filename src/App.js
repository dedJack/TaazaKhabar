import './App.css';
import React from 'react'

import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  let pageSize=9;
  let apiKey = process.env.REACT_APP_API_KEY

    return (
      <Router>
      <div>
        <NavBar/>
          <Routes>
            <Route  path="/" element = {<News key="general" pageSize={pageSize} apiKey={apiKey} country = 'in' category = 'general'/>}/>
            <Route  path="/business" element={<News key="business" pageSize={pageSize} apiKey={apiKey} country = 'in' category = 'business' />} />
            <Route  path="/entertainment" element = {<News key="entertainment" pageSize={pageSize} apiKey={apiKey} country = 'in' category = 'entertainment' />}/>
            <Route  path="/health" element = {<News key="health" pageSize={pageSize} apiKey={apiKey} country = 'in' category = 'health' />}/>
            <Route  path="/science" element = {<News key="science" pageSize={pageSize} apiKey={apiKey} country = 'in' category = 'science' />}/>
            <Route  path="/sports" element = {<News key="sports" pageSize={pageSize} apiKey={apiKey} country = 'in' category = 'sports' />}/>
            <Route  path="/technology" element = {<News key="technology" pageSize={pageSize} apiKey={apiKey} country = 'in' category = 'technology' />}/>
          </Routes>
      </div>
    </Router>
      
    )
  }


export default App


