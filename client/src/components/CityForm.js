import React, { Component}  from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },  
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    align: 'center',
  },
  input: {
    margin: theme.spacing.unit,
    width: 300,
  },
  button: {
    margin: theme.spacing.unit,
  },  
});

class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        inputField: this.props.defaultCity
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keyPress = this.keyPress.bind(this);

  }

  handleChange(event) {
    this.setState({
        inputField: event.target.value
      });
  }
  keyPress(event){
      if(event.keyCode == 13){
        event.preventDefault();
        this.handleSubmit(event);
      }
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleData(this.state.inputField);
    this.setState({
        inputField: ""
    });
  }



  render() {
   const { classes } = this.props;
    return (
      <Paper className={styles.root}>
      <Grid container spacing={16}>
              <Grid item xs={12}>
                  <Grid container justify = "center">

              <Input
                placeholder="Enter the city you are living in"
                value={this.state.inputField}
                onChange={this.handleChange}
                onKeyDown={this.keyPress}

                className={classes.input}
                inputProps={{
                  'aria-label': 'City',
                }}
              />
              <Button variant="contained" color="primary"  className={styles.button}  onClick={this.handleSubmit}>
                 Submit
              </Button>

              </Grid>

              </Grid>
              <Grid item xs={12}>
                  <Typography gutterBottom variant="subtitle1"  color="textSecondary" align="center">
                      We'll never expose where you live with anyone else.
                  </Typography>
              </Grid>

      </Grid>
    </Paper>
    );
  }
}

CityForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CityForm);

// export default CityForm;