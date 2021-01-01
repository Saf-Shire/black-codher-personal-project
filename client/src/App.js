import React, { useState, useEffect } from 'react';

// SERVICES
import userService from './services/userService';

function App() {
  const [bootcamps, setbootcamps] = useState(null);

  useEffect(() => {
    if (!bootcamps) {
      getbootcamps();
    }
  });

  const getbootcamps = async () => {
    let res = await userService.getAll();
    setbootcamps(res);
  };

  const renderBootcamp = (bootcamp) => {
    return (
      <li key={bootcamp._id}>
        <h3>
          {`${bootcamp.title} 
          ${bootcamp.company}`}
        </h3>
        <p>{bootcamp.location}</p>
      </li>
    );
  };

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
}

export default App;
