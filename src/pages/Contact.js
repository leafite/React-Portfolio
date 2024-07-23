import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.messageInput = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const name = this.nameInput.current.value;
    const email = this.emailInput.current.value;
    const message = this.messageInput.current.value;

    const errors = this.validateForm(name, email, message);

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted', { name, email, message });

      e.target.reset();
    } else {
      alert(Object.values(errors).join('\n'));
    }
  };

  validateForm = (name, email, message) => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    if (!message) errors.message = 'Message is required';
    return errors;
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-3">Contact</h2>
          <form onSubmit={this.handleSubmit} className="contact-form">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  ref={this.nameInput}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  name="email"
                  ref={this.emailInput}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  ref={this.messageInput}
                ></textarea>
              </div>
            </div>
            <div className="control">
              <button className="button is-primary" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
