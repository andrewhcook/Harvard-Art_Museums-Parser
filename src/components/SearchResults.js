import React, { useState, useEffect } from 'react';

const SearchResults = (props) => {
    const {searchResults, featuredResult, setFeaturedResult} = props;
    let resultsMap = Object.keys(searchResults);

    console.log(searchResults);
    return <div id ="results">{resultsMap.map((key)=> {return <div className='indie-result' onClick={ ()=> {setFeaturedResult(searchResults[key])}}> <div> {searchResults[key].title} </div> {searchResults[key].primaryimageurl ? <img className='result-listing' src={ searchResults[key].primaryimageurl } alt={ searchResults[key].description } /> : <div> Image Not Available </div>}</div>})}</div>
}

export default SearchResults