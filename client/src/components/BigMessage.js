import React, { Component}  from 'react';
import Typography from '@material-ui/core/Typography';

const BigMessage = (props) => {
    return(

		<Typography component="h2" variant="display3" gutterBottom align="center">
        {props.message}
		</Typography>

    )
}

export default BigMessage;