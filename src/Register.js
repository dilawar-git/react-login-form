import React from 'react';
import {Form} from 'react-bootstrap';
  
class Register extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      male: false,
      female: false,
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
        size: event.target.value
      });

  
    this.setState({
      input
    });
  }
    
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["email"] = "";
        input["password"] = "";
        this.setState({input:input});
  
    }
  }
  
 

  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
      if (typeof input["password"] !== "undefined") {
          
        var pattern1 = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
        if (!pattern1.test(input["password"])) {
          isValid = false;
          errors["password"] = "Min 8 characters with small, caps, number and symbol.";
        }
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
      
      if (!input["username"]) {
        isValid = false;
        errors["username"] = "Please enter your Username.";
      }
      if (!input["firstname"]) {
        isValid = false;
        errors["firstname"] = "Please enter your firstname.";
      }
      if (!input["lastname"]) {
        isValid = false;
        errors["lastname"] = "Please enter your lastname.";
      }

     
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div className="login-page">
      <div className="form">
      <h3>Register</h3>
        <form onSubmit={this.handleSubmit}>
        
        <div className="form-group">
            <input 
              type="text" 
              name="username" 
              value={this.state.input.username}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="username" 
              id="username" />
  
              <div className="text-danger">{this.state.errors.username}</div>
          </div>

        <div className="form-group">
            <input 
              type="email" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Enter email" 
              id="email" />
   
              <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div className="form-group">
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Password" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>

          <div className="form-group">
            <input 
              type="text" 
              name="firstname" 
              value={this.state.input.firstname}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="firstname" 
              id="firstname" />
  
              <div className="text-danger">{this.state.errors.firstname}</div>
          </div>

          <div className="form-group">
            <input 
              type="text" 
              name="lastname" 
              value={this.state.input.lastname}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="lastname" 
              id="lastname" />
  
              <div className="text-danger">{this.state.errors.lastname}</div>
          </div>
          <div className="form-group">
          <Form.Group controlId="exampleForm.ControlSelect1" >
            <Form.Control as="select" className="dpdown">
            <option>Country</option>
            <option>Saudi</option>
            <option>India</option>
            <option>UAE</option>
            <option>Belgium</option>
            </Form.Control>
        </Form.Group>
          </div>
        <div className="form-group">
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="Male"
                checked={this.state.size === "Male"}
                onChange={this.handleChange}
                id="formHorizontalRadios1"
              />
              Male
            </label>
          </li>
          
          <li>
            <label>
              <input
                type="radio"
                value="Female"
                checked={this.state.size === "Female"}
                onChange={this.handleChange}
                id="formHorizontalRadios2"
              />
              Female
            </label>
          </li>
        </ul>
        </div>
          
              
          <input type="submit" value="Sign up" className="btn btn-primary submit-button" />
        </form>
        </div>
      </div>
    );
  }
}
  
export default Register;