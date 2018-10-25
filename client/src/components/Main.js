
import React, { Component}  from 'react';
import BigMessage from './BigMessage'
import SmallMessage from './SmallMessage'
import CityForm from './CityForm'
import Weather from './Weather'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleData = this.handleData.bind(this);

    this.state = {
    		city: ''
    };
  }

  handleData(data) {
    this.setState({
      city: data
    });
  }

  render() {

  	// if ( this.state.city == "") {
  		return(
  			<div>
		    <Grid container justify = "center" spacing={32}>
				<Grid item xs={8}>
		        	<BigMessage message="What's up with the weather?" />
		      		<CityForm handleData={this.handleData} defaultCity={this.props.city} />
		      	</Grid>
	            <Grid item xs={6}  justify = "center">		
					<Weather city={ this.state.city ? this.state.city : "Budapest" }/>
				</Grid>				
			</Grid>
		   	</div>
		    )
  // 	} else {
  // 		return(
		//     <div class="container">
		//         	<Weather city={this.state.city}/>
		//     </div>  		
		// )
  // 	}
    
  }
}

export default Main;