import React, { useState } from 'react';
import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap,
} from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };



  function Submit(e) {
    const formEle = document.querySelector('form');
    const formDatab = new FormData(formEle);
    fetch(
      'https://script.google.com/macros/s/AKfycbwOjjpLsgzoMEAijD47zmP-Z19OXog6o8MnAC4YRBqJI3MxSKM5UuKwjrzpJfQ4Q_vJ/exec',
      {
        method: 'POST',
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setForm({ Name: '', Email: '', Subject: '', Message: '' });
  }

  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title text-cs'>Contact Me</h2>
      <p className='section__subtitle'>
        Let's <span>Talk About Ideas</span>
      </p>

      <div className='contact__container container grid'>
        <div className='contact__content'>
          <div className='contact__card'>
            <span className='contact__card-icon'>
              <FaRegMap />
            </span>

            <h3 className='contact__card-title'>Address</h3>
            <p className='contact__card-data'>Barcelona, Spain</p>
          </div>

          <div className='contact__card'>
            <span className='contact__card-icon'>
              <FaRegUser />
            </span>

            <h3 className='contact__card-title'>Freelance</h3>
            <p className='contact__card-data'>Available Right Now</p>
          </div>

          <div className='contact__card'>
            <span className='contact__card-icon'>
              <FaRegEnvelope />
            </span>

            <h3 className='contact__card-title'>Email</h3>
            <p className='contact__card-data'>obafeminathaniel6@gmail.com</p>
          </div>

          <div className='contact__card'>
            <span className='contact__card-icon'>
              <FaRegAddressBook />
            </span>

            <h3 className='contact__card-title'>Phone</h3>
            <p className='contact__card-data'>+34 691 - 85 - 7968</p>
          </div>
        </div>

        <form className='contact__form' onSubmit={(e) => Submit(e)}>
          <div className='contact__form-group grid'>
            <div className='contact__form-div'>
              <label className='contact__form-tag text-cs'>
                Your Full Name <b>*</b>
              </label>
              <input
                type='text'
                name='Name'
                onChange={handleChange}
                value={form.Name}
                className='contact__form-input'
              />
            </div>

            <div className='contact__form-div'>
              <label className='contact__form-tag text-cs'>
                Your Email Address <b>*</b>
              </label>
              <input
                type='text'
                name='Email'
                onChange={handleChange}
                value={form.Email}
                className='contact__form-input'
              />
            </div>
          </div>
          <div className='contact__form-div'>
            <label className='contact__form-tag text-cs'>
              Your Subject <b>*</b>
            </label>
            <input
              type='text'
              name='Subject'
              onChange={handleChange}
              value={form.Subject}
              className='contact__form-input'
            />
          </div>
          <div className='contact__form-div contact__form-area'>
            <label className='contact__form-tag text-cs'>
              Your Message <b>*</b>
            </label>
            <textarea
              name='Message'
              onChange={handleChange}
              value={form.Message}
              className='contact__form-input'
            ></textarea>
          </div>

          <div className='contact__submit'>
            <p>* Accept the terms and conditions.</p>
            <button type='submit' className='btn contact__btn text-cs'>
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className='section__deco deco__left'></div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>Contact Me</span>
      </div>
    </section>
  );
};

export default Contact;
