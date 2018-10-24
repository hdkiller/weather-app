class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        inputField: this.props.defaultCity
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
        inputField: event.target.value
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    this.props.handleData(this.state.inputField);
    this.setState({
        inputField: ""
    });
  }



  render() {
    return (
      <div class="col-10 col-md-6 ml-auto mr-auto text-center mt-5">
        <form  onSubmit={this.handleSubmit}>
            <div class="form-group">        
              <input  class="form-control" id="city" type="text"  placeholder="Enter city" value={this.state.inputField} onChange={this.handleChange} />
              <small id="cityHelp" class="form-text text-muted">We'll never expose where you live with anyone else.</small>
            </div>        
        <input  class="btn btn-primary"  type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

