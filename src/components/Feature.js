import React, { useState, useEffect } from 'react';

const Feature = (props) => {

    
          const {featuredResult} = props;
          
          if (!featuredResult) {
            return <main id="feature"></main>
          }
          console.log("description", featuredResult.description);
         return   <main id="feature">
             <div className="object-feature">
               <header>
                 <h3>{featuredResult.title}</h3>
                 <h4>{featuredResult.dated}</h4>
               </header>
              <section className="facts">
                {featuredResult.description ? <React.Fragment><span className="title">Description</span>
                 <span className="content">{featuredResult.description}</span> </React.Fragment>: null }
                {featuredResult.culture ? <React.Fragment><span className="title">Culture</span>
                 <span className="content">{featuredResult.culture}</span> </React.Fragment>: null }
                 {featuredResult.style ? <React.Fragment><span className="title">Style</span>
                 <span className="content">{featuredResult.style}</span> </React.Fragment>: null }
                 {featuredResult.tecnhnique ? <React.Fragment><span className="title">Technique</span>
                 <span className="content">{featuredResult.tecnhnique}</span> </React.Fragment>: null }
                 {featuredResult.medium ? <React.Fragment><span className="title">Medium</span>
                 <span className="content">{featuredResult.medium}</span> </React.Fragment>: null }
                 {featuredResult.dimensions ? <React.Fragment><span className="title">Dimensions</span>
                 <span className="content">{featuredResult.dimensions}</span> </React.Fragment>: null }
                 {featuredResult.people ? <React.Fragment><span className="title">Artist Profile</span>
                 {/* vvv I would enjoy some feedback on the approach I took on the following two lines vvv */}
                 <span className="content"> {featuredResult.people.map((key) => {return Object.entries(key).map((value, index) => {
                  return <span key = {index}>{value[0]}: {value[1]} </span>})})}</span> </React.Fragment> : null}
                 {featuredResult.department ? <React.Fragment><span className="title">Department</span>
                 <span className="content">{featuredResult.department}</span> </React.Fragment>: null }
                 {featuredResult.division ? <React.Fragment><span className="title">Division</span>
                 <span className="content">{featuredResult.division}</span> </React.Fragment>: null }
                 {featuredResult.contact ? <React.Fragment><span className="title">Contact</span>
                 <span className="content">{featuredResult.contact}</span> </React.Fragment>: null }
                 {featuredResult.creditline ? <React.Fragment><span className="title">Creditline</span>
                 <span className="content">{featuredResult.creditline}</span> </React.Fragment>: null }
               </section>
               <section className="photos">
               {featuredResult.images ?
               featuredResult.images.map((index) => {
                console.log("base img url",index); 
                return <img key = {index} src = {index.baseimageurl} alt = "image not found"/>}) : null}
               </section>
             </div>
             
             </main>;
         
        };
export default Feature