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
  	fetch(`/weather/index?q=${city},hu`)
  	.then(results => { 
  		return results.json() 
  		}).then(data => {
  			console.log(data)
  			this.setState({ 
  				temperature: data.temperature,
  				condition: data.condition,
  				description:  data.description
  			})
  		})
  }

  render() {
    return (

   		<p>{this.state.temperature}&deg;C - {this.state.condition}</p>
    );
  }
}

