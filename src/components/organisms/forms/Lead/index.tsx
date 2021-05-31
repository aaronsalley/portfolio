import React from 'react';
import Freshsales from '../../../../services/Freshsales/controller';
import style from './index.module.scss';

class LeadForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      fname: '',
      lname: '',
      company: '',
      phone: '',
      email: '',
    };
  }

  handleInputChange = (event: any): void => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event: any): void => {
    event.preventDefault();
    Freshsales.createLead(this.state);
    return;
  };

  render(): any {
    return (
      <form className={style.container} onSubmit={this.handleSubmit}>
        <section className={style.collapse}>
          <div>
            <input
              type='text'
              name='fname'
              autoComplete='given-name'
              value={this.state.fname}
              onChange={this.handleInputChange}
            ></input>
            <label htmlFor='email'>First Name</label>
          </div>
          <div>
            <input
              type='text'
              name='lname'
              autoComplete='family-name'
              value={this.state.lname}
              onChange={this.handleInputChange}
            ></input>
            <label htmlFor='email'>Last Name</label>
          </div>
          <div>
            <input
              type='text'
              name='company'
              autoComplete='organization'
              value={this.state.company}
              onChange={this.handleInputChange}
            ></input>
            <label htmlFor='email'>Company</label>
          </div>
          <div>
            <input
              type='tel'
              name='phone'
              autoComplete='tel'
              value={this.state.phone}
              onChange={this.handleInputChange}
            ></input>
            <label htmlFor='email'>Work</label>
          </div>
        </section>
        <div>
          <input
            type='email'
            name='email'
            placeholder='name@example.com'
            autoComplete='email'
            value={this.state.email}
            onChange={this.handleInputChange}
          ></input>
          <label htmlFor='email'>Email Address</label>
          <button type='submit'>Contact Me</button>
        </div>
      </form>
    );
  }
}

export default LeadForm;
