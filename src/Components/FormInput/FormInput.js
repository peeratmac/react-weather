import React, { Component } from 'react';

class FormInput extends Component {
  handleGetWeather = event => {
    event.preventDefault();
    console.log('handleGetWeather Button Click!');
  };

  render() {
    return (
      <section className='form'>
        <h1>Form Component</h1>
        <form>
          <input
            name='city'
            type='text'
            value={''}
            placeholder='City'
            onChange={() => {}}
            className='form-input'
          />

          <input
            name='country'
            type='text'
            value={''}
            placeholder='Country'
            onChange={() => {}}
            className='form-input'
          />

          <button onClick={this.handleGetWeather} className='submit-button'>
            Get Weather
          </button>
        </form>
      </section>
    );
  }
}

export default FormInput;
