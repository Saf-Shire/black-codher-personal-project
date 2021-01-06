import React from 'react';
// import Card from 'react-bootstrap/Card'
// import { CardGroup, Container } from 'react-bootstrap';



const Bootcamp = (props) => {
  const { _id,
      title,
      company,
    location:{ 
      city, 
      virtual,
    },
    durationType:{
      fullTime:{
       weeksLength: fullTime_weeksLength,
      totalAmountOfHours:fullTime_totalAmountOfHours,   
      },
      partTime:{
        weeksLength:partTime_weeksLength,
        totalAmountOfHours:partTime_totalAmountOfHours,    
      },
  },
  free,
  tuitionFee,
financialDiscounts:{
  earlyPayment:{
   available:earlyPayment_available,
   amount:earlyPayment_amount,
  },
womenDiversity:{
   available:womenDiversity_available,
   amount:womenDiversity_amount,  
  },
},   
laptonLoan,
childCare,
installmentPaymentPlan:{
  available,
numberOfInstallments,
deposit,
depositFee,
additionalFee,   
},
additionalInfo:{
applicationCycles:{
 manchester:applicationCycles_manchester,
london:applicationCycles_london,
bristol:applicationCycles_bristol,
birmingham:applicationCycles_birmingham,
leeds:applicationCycles_leeds,  
},
},
certification,
applicationlink:{
 manchester,
london,
bristol,
birmingham,
leeds,   
},
contactDetails:{
 emailAddress,
telephoneNumber,    
}    
    } = props.bootcamp;



  
  
 


}



  export default Bootcamp;