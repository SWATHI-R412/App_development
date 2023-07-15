import React from "react";
import './style/brand.css'
import Header from './Header'

class Brand extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{ brandid: "", brandname : "" , status:"" }]
     };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState(({
      formValues: [...this.state.formValues, { brandid: "", brandname: "", status:""}]
    }))
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Successfully added");
  }

  render() {

    return (
      <div>
        <div><Header/></div>
      <div className="brand">
        
        <h2 style={{color:'purple',fontFamily:'brush script mt'}}>BRAND DETAILS</h2>
      
        <form  onSubmit={this.handleSubmit}>
          {this.state.formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              {/* <h1><center>Brand</center></h1>
              <br/> */}
              <label>Brand Id</label>
              <br/>
              <input type="text" name="brandid" value={element.brandid || ""} onChange={e => this.handleChange(index, e)} />
              <br/>
              <label>Brand Name</label>
              <br/>
              <input type="text" name="brandname" value={element.brandname || ""} onChange={e => this.handleChange(index, e)} />
              <br/>
              <label>Status</label>
              <br/>
              <input type="text" name="status" value={element.status || ""} onChange={e => this.handleChange(index, e)} />
              <br/>
              <hr
        style={{
          background: 'lime',
          color: 'lime',
          borderColor: 'lime',
          height: '3px',
        }}
      />
              
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => this.addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
      </div>
      </div>
    );
  }
}
export default Brand;