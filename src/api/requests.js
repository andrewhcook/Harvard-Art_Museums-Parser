export const BASE_URL = 'https://api.harvardartmuseums.org';
export const KEY = 'apikey=a6d45e52-c980-4ea4-b1e0-a77e2e34a25c';

//work on these api calls!

export async function fetchQueryResults({
    century,
    classification,
    queryString,
  }) {
    const url = `${BASE_URL}/object?${KEY}&classification=${classification}&century=${century}&keyword=${queryString}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    return data;
  }

export const fetchQueryResultsFromURL = async (url)=> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }



  export async function fetchAllCenturies() {
    if (localStorage.getItem('centuries')) {
      return JSON.parse(localStorage.getItem('centuries'));
    }
  
    const url = `${BASE_URL}/century?${KEY}&size=100&sort=temporalorder`;
  
    const response = await fetch(url);
    const { records } = await response.json();
  
    localStorage.setItem('centuries', JSON.stringify(records));
  
    return records;
  }

  export async function fetchQueryResultsFromTermAndValue(term, value) {
    const response = await fetch(`${BASE_URL}/object?${KEY}&${term}=${encodeURI(value.split('-').join('|'))}`);
    const data = await response.json();
  
    return data;
  }


  export async function fetchAllClassifications() {
    if (localStorage.getItem('classifications')) {
      return JSON.parse(localStorage.getItem('classifications'));
    }
  
    const url = `${BASE_URL}/classification?${KEY}&size=100&sort=name`;
  
    const response = await fetch(url);
    const { records } = await response.json();
  
    localStorage.setItem('classifications', JSON.stringify(records));
  
    return records;
  }