import React, { Component}  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import { WeatherWindyIcon,WaterPercentIcon,WeatherRainyIcon } from 'mdi-react';

import moment from 'moment'


const styles = {
  card: {
    maxWidth: 600,
  },
  media: {
    height: 140,
  },
  metric: {
    fontWeight: 'bold',
    fontSize: 24,
  }
};

class Weather extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
        time: "",
        day: "",
        dt: 0,
        temperature: ":(",
        condition: "...",
        description: "",
        prevCity: this.props.city
    };

  }
    componentWillUnmount() {
      clearInterval(this.interval);
    }

  componentDidMount() {
    setInterval( () => {
        this.setState({
          time : moment.unix(this.state.dt).format('HH:mm'),
          day: moment.unix(this.state.dt).format('dddd')
        })
    },1000)

    setInterval( () => {
        this._loadWeatherData();  
    },1000*60*3) // 3 min
    this._loadWeatherData();  
  }

  componentDidUpdate(prevProps) {
   if (prevProps.city !== this.props.city) {
           this._loadWeatherData();  
     }
  }

  _loadWeatherData() {

    console.log("load");
    var city = this.props.city
    fetch(`/weather/index?q=${city}`)
    .then(results => { 
        return results.json() 
        }).then(data => {
            console.log(data)
            this.setState({ 
                currentCity: city,
                temperature: Math.round(data.temperature * 10 ) / 10,
                condition: data.condition,
                description:  data.description,
                humidity: data.humidity,
                dt: data.data.dt,
                wind:  Math.round(data.wind * 10 ) / 10,
                clouds: data.clouds
            })
        })
  }

  render() {
    const { classes } = this.props;

    return (
    <Card className={classes.card}>
        <CardHeader>
        </CardHeader>
        <CardContent>
            <Grid container spacing={16}>

      

                <Grid item xs={7}>
                          <Grid item xs={12}>
                    <Typography variant="h3" gutterBottom>
                        {this.state.day}
                    </Typography>

                    <Typography variant="title" gutterBottom>
                        {this.state.condition}
                    </Typography>
                </Grid>
                    <Grid container spacing={16}>

                            <Grid item xs={4}>
                                <img height="52%" src="/md-weather-iconset/weather-fog.png"/>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h1" gutterBottom>
                                    {this.state.temperature}&deg;C
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="caption">
                                  {this.props.city} - {this.state.time}
                                 
                              </Typography>
                            </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={5}>
                    <Grid container spacing={16}>
                            <Grid item xs={4}>
                                <WaterPercentIcon size={54} />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h3" gutterBottom>
                                     {this.state.humidity}%
                                </Typography>
                            </Grid>
    
                            <Grid item xs={4}>
                                   <WeatherRainyIcon size={54} />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h3" noWrap >
                                    {this.state.clouds}%
                                </Typography>
                            </Grid>


                            <Grid item xs={4}>
                                   <WeatherWindyIcon size={54} />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h3" noWrap >
                                    {this.state.wind}
                                    <span className={classes.metric}>
                                        km/h
                                    </span>
                                </Typography>
                            </Grid>
                     </Grid>
                </Grid>
            </Grid>
        </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    );
  }
}


Weather.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Weather);