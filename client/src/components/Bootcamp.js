import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// SERVICES
import userService from "../services/userService";

const Bootcamp = (props) => {
  const {
    _id,
    title,
    company,
    location: { city },
    durationType,
    durationDetails: { weeksLength, totalAmountOfHours },
    imageLinks: { logo },
    free,
    tuitionFee,
    financialDiscounts: {
      earlyPayment: {
        available: earlyPayment_available,
        amount: earlyPayment_amount,
      },
      womenDiversity: {
        available: womenDiversity_available,
        amount: womenDiversity_amount,
      },
    },
    laptonLoan,
    childCare,
    installmentPaymentPlan: {
      available,
      numberOfInstallments,
      deposit,
      depositFee,
      additionalFee,
    },
    additionalInfo: { applicationCycles, certification, applicationlink },

    contactDetails: { emailAddress, telephoneNumber },
  } = props.bootcamp;

  // const [bootcamps, setBootcamps] = useState([]);

  // useEffect(() => {
  // console.log(typeof bootcamps)
  //   if (Array.isArray(bootcamps) && bootcamps.length ==0)  {
  //       console.log(bootcamps )
  //     getbootcamps();
  //   }
  // });

  // const getbootcamps = async () => {
  //   let res = await userService.getAll();
  //   let result=res.map(item => {
  //     return item
  //   })
  //   console.log(typeof res);
  //   setBootcamps(res);
  // };

  //   const renderBootcamp= (bootcamp) =>{
  //    return (
  //     <div>
  //       <li>
  //         <h3>
  //           {bootcamp.title}-{bootcamp.company}
  //         </h3>
  //         {bootcamp.location.city[0]}
  //       </li>
  //     </div>
  //   );
  // }

  // return (
  //       <div>
  //         <ul>
  //           {bootcamps && bootcamps.length > 0 ? (
  //             bootcamps.map((bootcamp) => renderBootcamp(bootcamp))
  //           ) : (
  //             <p>No Bootcamps found</p>
  //           )}
  //         </ul>
  //       </div>
  //     );
};

Bootcamp.propTypes = {
  bootcamp: PropTypes.shape({
    title: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.shape({
      city: PropTypes.string,
    }),
    durationType: PropTypes.string,
    durationDetails: PropTypes.shape({
      weeksLength: PropTypes.number,
      totalAmountOfHours: PropTypes.number
    }),
    imageLinks: PropTypes.shape({
      logo: PropTypes.string,
    }),
    free: PropTypes.boolean,
    tuitionFee: PropTypes.number,
    financialDiscounts: PropTypes.shape({
      earlyPayment: PropTypes.shape({
        available: PropTypes.boolean,
        amount: PropTypes.number,
      }),
      womenDiversity: PropTypes.shape({
        available: PropTypes.boolean,
        amount: PropTypes.number,
      }),
    }),
    laptonLoan: PropTypes.boolean,
    childCare: PropTypes.boolean,
    installmentPaymentPlan: PropTypes.shape({
      available: PropTypes.boolean,
      numberOfInstallments: PropTypes.number,
      deposit: PropTypes.boolean,
      depositFee: PropTypes.number,
    }),
    additionalInfo: PropTypes.shape({
      applicationCycles: PropTypes.number,
      certification: PropTypes.boolean,
      applicationLink: PropTypes.string,
    }),
    contactDetails: PropTypes.shape({
      emailAddress: PropTypes.string,
    }),
  }),
};

export default Bootcamp;
