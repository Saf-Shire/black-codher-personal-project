import React from 'react';
import Bootcamp from './Bootcamp';

const Bootcamplist = (props) => {
    const currentBootcamps= props.bootcamps;

   

return (
    <React.Fragment>
        <div>
        {currentBootcamps.map(bootcamp =>
         <Bootcamp key={bootcamp._id} bootcamp={bootcamp} currentBootcamps={currentBootcamps}/>)} 
        </div>
    </React.Fragment>
)

}

export default Bootcamplist;