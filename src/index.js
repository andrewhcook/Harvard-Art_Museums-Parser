import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Greeting, SearchBar, SearchResults, Feature} from './components';

const App = () => {
  const [resourceType, setResourceType] =  useState("Object");
  
  const [searchResults, setSearchResults] = useState([]);
  const [featuredResult, setFeaturedResult] = useState({});
    return <>
    <Greeting ></Greeting>
    <SearchBar setSearchResults = {setSearchResults}></SearchBar>
    <Feature featuredResult = {featuredResult}></Feature>
    <SearchResults searchResults = {searchResults} featuredResult = {featuredResult} setFeaturedResult = {setFeaturedResult}></SearchResults>
    
  </>
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);