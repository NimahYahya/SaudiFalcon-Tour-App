import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/ContactUs.css'

class ContactUsForm extends Component {
  render() {
    return (
      <section className="containerContactUs">
        <form>
          <h1 className="headerContactUs">Contact us</h1>
          <div className="mb-2">
            <label for="userFullName " className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userFullName"
              aria-describedby="nameHelp"
            />
            <div id="nameHelp" className="form-text">
              please write your full name
            </div>
          </div>
          <div className="mb-3">
            <label for="userEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="userEmail"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              please write your Email
            </div>
          </div>
          <div className="mb-3">
            <label for="DescriptionHelp" className="form-label">
              Massege
            </label>
            <textarea
              className="form-control"
              id="DescriptionHelp"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="btnContact">
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default ContactUsForm;
