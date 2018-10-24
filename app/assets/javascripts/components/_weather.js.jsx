const OWM_API_KEY = "4d40341dd26882eedd85c3f706e4bcaa";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        temperature: ":(",
        condition: "...",
        description: ""
    };

  }

  componentDidMount() {
  	var city = this.props.city
  	fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city},hu&appid=${OWM_API_KEY}`)
  	.then(results => { 
  		return results.json() 
  		}).then(data => {
  			console.log(data)
  			this.setState({ 
  				temperature: data.main.temp,
  				condition: data.weather[0].main,
  				description:  data.weather[0].description
  			})
  		})
  }

  render() {
    return (

   		<p>{this.state.temperature}&deg;C - {this.state.condition}</p>
    );
  }
}

