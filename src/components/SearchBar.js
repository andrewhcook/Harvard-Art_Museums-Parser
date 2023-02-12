import React, { useState, useEffect } from 'react';
import { fetchQueryResults, fetchAllCenturies, fetchAllClassifications} from '../api/requests';

const SearchBar = (props) => {
    const {setSearchResults} = props;

    const [centuryList, setCenturyList] = useState([]);
    const [classificationList, setClassificationList] = useState([]);
    const [queryString, setQueryString] = useState('');
    const [century, setCentury] = useState('any');
    const [classification, setClassification] = useState('any');
    const onSubmitHandler = async ()=> {
            
            try {
             const results = await  fetchQueryResults({century, classification, queryString})  ;
             const {records} = results;
             setSearchResults(records);
            }catch (error) {
                throw error
            }
    }

     useEffect( ()=> {
      
    const fetchCenturiesAndClassifications = async () => {
    //console.log("useEffect hook entered");
    try {
      
     await Promise.all([fetchAllCenturies()]).then((values) => {
      console.log(values[0]);
      let myList= [];
      for (let i in values[0]) {
        console.log("name of century", values[0][i].name);
        myList.push(values[0][i].name);
      }
      setCenturyList(myList);
        
      });
      await Promise.all([fetchAllClassifications()]).then((values) => {
        let myList = [];
        for (let i in values[0]) {
          
          myList.push(values[0][i].name);
        }
        setClassificationList(myList)
     });

    } catch (error){
      console.error("oops error in useEffect of Search: ", error);
    }
  }
  fetchCenturiesAndClassifications();
}, []);

    return <><form id = "searchForm" onSubmit= {(event) =>{
        event.preventDefault();
        onSubmitHandler()}}>


        <fieldset>
      <label htmlFor="keywords">Query</label>
      <input 
        id="keywords" 
        type="text" 
        placeholder="enter keywords..." 
        value=  {queryString}
        onChange={(event) => {setQueryString(event.target.value);}}
        />
    </fieldset>
    <fieldset>
      <label htmlFor="select-classification">Classification <span className="classification-count">({ classificationList.length })</span></label>
      <select 
        name="classification"
        id="select-classification"
        value={classification}
        onChange={(event) => {setClassification(event.target.value);}}>
        <option value="any">Any</option>
        {classificationList.map((item) => {return <option key = {item}> {item}</option>})}
      </select>
    </fieldset>
    <fieldset>
      <label htmlFor="select-century">Century <span className="century-count">({ centuryList.length })</span></label>
      <select 
        name="century" 
        id="select-century"
        value={century} 
        onChange={(event) => {setCentury(event.target.value);}}>
        <option value="any">Any</option>
        {/* map over the centuryList, return an <option /> */
        centuryList.map((item)=>{
        
        return <option key = {item}> {item}</option>})}
      </select>
     </fieldset>

        <button className="submit-form" type = "submit" value = "Submit">Submit</button>
            
            </form></>
}

export default SearchBar