
// import { OWM_API_KEY } from 'config/weather.js'

const OWM_API_KEY = "4d40341dd26882eedd85c3f706e4bcaa";

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
		      		<p> 	
		      		
		      		</p>
		        	<BigMessage message="What's up with the weather?" />
		      		<CityForm handleData={this.handleData} />
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