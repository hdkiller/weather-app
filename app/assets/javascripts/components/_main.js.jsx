
// import { OWM_API_KEY } from 'config/weather.js'


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

  	if ( this.state.city == "") {
  		return(
		    <div class="container">
		      <div class="row">
		      	<div class="col-12 text-center">
		        	<BigMessage message="What's up with the weather?" />
		        	{this.props.city}
		      		<CityForm handleData={this.handleData} defaultCity={this.props.city} />
		        </div>
		      </div>
		    </div>
		    )
  	} else {
  		return(
		    <div class="container">
		      <div class="row">
		      	<div class="col-12 text-center">
		        	<BigMessage message="The Weater Is Just Great" />
		        	<SmallMessage message={this.state.city} />
		        	<Weather city={this.state.city}/>
		        </div>
		      </div>
		    </div>  		
		)
  	}
    
  }
}