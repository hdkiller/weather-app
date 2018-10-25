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
        temperature: ":(",
        condition: "...",
        description: "",
        prevCity: this.props.city
    };

  }


  componentDidMount() {
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
    fetch(`/weather/index?q=${city},hu`)
    .then(results => { 
        return results.json() 
        }).then(data => {
            console.log(data)
            this.setState({ 
                currentCity: city,
                temperature: data.temperature,
                condition: data.condition,
                description:  data.description
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

      

                <Grid item xs={8}>
                          <Grid item xs={12}>
                    <Typography variant="title" gutterBottom>
                        {this.state.condition}
                    </Typography>
                </Grid>
                    <Grid container spacing={16}>

                            <Grid item xs={6}>
                                <img height="52%" src="/md-weather-iconset/weather-fog.png"/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h1" gutterBottom>
                                    {this.state.temperature}&deg;C
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="caption">
                                  {this.props.city}
                                    {this.props.currentCity}

                              </Typography>
                            </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={16}>
                            <Grid item xs={4}>
                                <WaterPercentIcon size={54} />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h3" gutterBottom>
                                     55%
                                </Typography>
                            </Grid>
    
                            <Grid item xs={4}>
                                   <WeatherRainyIcon size={54} />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h3" noWrap >
                                    15%
                                </Typography>
                            </Grid>


                            <Grid item xs={4}>
                                   <WeatherWindyIcon size={54} />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h3" noWrap >
                                    12
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