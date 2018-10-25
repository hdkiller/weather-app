import React, { Component}  from 'react';
import Typography from '@material-ui/core/Typography';

const SmallMessage = (props) => {
    return(
        <h5>{props.message}</h5>
    )
}

export default SmallMessage;