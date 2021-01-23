import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

 const Copyright = () => {
     function Copyright(){
         return(
<Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://Techiton.com/">
            TechitOn
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
         );
     }


    return (
        <Copyright/>
        
      );
    
}
export default Copyright