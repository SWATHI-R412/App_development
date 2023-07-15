import React from "react";
import './style/category.css'
import Header from './Header'

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{ categoryId : "" ,categoryName : "" , status:"" }]
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
      formValues: [...this.state.formValues, { categoryId: "", status:"", options:""}]
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
      <div className="category">
      <h2 style={{color:'white',fontFamily:'brush script mt'}}>CATEGORY DETAILS</h2>
        <form  onSubmit={this.handleSubmit}>
          {this.state.formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Category Id</label>
              <input type="text" name="categoryId" value={element.categoryId || ""} onChange={e => this.handleChange(index, e)} />
              <label>Category Name</label>
              <input type="text" name="categoryName" value={element.categoryName || ""} onChange={e => this.handleChange(index, e)} />
              <label>Status</label>
              <input type="text" name="options" value={element.status || ""} onChange={e => this.handleChange(index, e)} />
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
export default Category;