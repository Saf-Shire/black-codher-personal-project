import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Bootcamplist from './components/Bootcamplist';


// SERVICES
import userService from './services/userService';

function App() {
  const [bootcamps, setbootcamps] = useState([]);

  useEffect(() => {
  console.log(typeof bootcamps)
    if (Array.isArray(bootcamps) && bootcamps.length ==0)  {
        console.log(bootcamps )
      getbootcamps();
    }
  });

  const getbootcamps = async () => {
    let res = await userService.getAll();
    let result=res.map(item => {
      // delete item.location.city
      return item
    })
    console.log(typeof res);
    console.log("test");
    setbootcamps(res);
};

 const renderBootcamp= (bootcamp) =>{
     return (
      <div>
        <li>
          <h3>
            {bootcamp.title}-{bootcamp.company}
          </h3>
          {bootcamp.location.city[0]}
        </li>  
      </div>
    );
  }
  
  return (
        <div>
          <ul>
            {bootcamps && bootcamps.length > 0 ? (
              bootcamps.map((bootcamp) => renderBootcamp(bootcamp))
            ) : (
              <p>No Bootcamps found</p>
            )}
          </ul>
        </div>
      );
      
 
return(

<BrowserRouter>
<Switch>       
<Route exact path="/" render={() => (
<React.Fragment>
<Bootcamplist bootcamps={bootcamps}/>
 </React.Fragment>

                  )} />
 

                   
                 
                  </Switch>
              </BrowserRouter>

)
              
}
export default App;
