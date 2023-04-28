import React, { useState } from 'react';
import styles from './ContactUs.module.scss';
import MainLayout from '~layouts/MainLayout';
import Button from '~components/Button';
import PageHero from '~components/PageHero';
import {
  validateEmail,
  validateMessage,
  validateName,
} from 'src/validation/Validation';
import Input from '~components/Input';

function ContactUsScreen() {
  const [changeEmailValide, setChangeEmailValide] = useState('');
  const [changeSubjectValid, setChangeSubjectValid] = useState('');
  const [changeMessageValid, setChangeMessageValid] = useState('');

  const changeEmails = (e) => {
    const { value } = e.target;
    const isValidEmail = validateEmail(value);
    if (!isValidEmail) {
      setChangeEmailValide({
        valid: 'is-invalid',
        text: 'The e-mail address is invalid.',
        isValid: false,
      });
    } else {
      setChangeEmailValide({
        valid: 'is-valid',
        text: '',
        isValid: true,
      });
    }
  };

  const changeSubject = (e) => {
    const { value } = e.target;
    validateName(value, setChangeSubjectValid);
  };

  const changeMessage = (e) => {
    const { value } = e.target;
    validateMessage(value, setChangeMessageValid);
  };

  return (
    <MainLayout>
      <div className={`${styles['top-box-background-image']}`}>
        <PageHero
          title="Contact Us"
          image="https://images.unsplash.com/photo-1490772888775-55fceea286b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />

        <section className="bg-image p-3">
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row mt-5 d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className={`${styles['card-background-image']} card`}>
                    <div className="card-body p-5">
                      <form className={styles['form-font-size']}>
                        <div className="form-outline mb-4">
                          <Input
                            type="email"
                            id={'form3Example3cg'}
                            valid={changeEmailValide}
                            onChange={changeEmails}
                            label="Your Email"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <Input
                            id={'form3Example4cg'}
                            valid={changeSubjectValid}
                            onChange={changeSubject}
                            label="Subject"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cdg"
                          >
                            Message
                          </label>
                          <textarea
                            type="password"
                            id="form3Example4cdg"
                            className={`form-control form-control-lg ${changeMessageValid.valid}`}
                            onChange={changeMessage}
                          />
                          <div
                            id="validationServer03Feedback"
                            className="invalid-feedback"
                          >
                            {changeMessageValid.text}
                          </div>
                        </div>

                        <div
                          className={`${styles['button-text']} d-flex justify-content-center`}
                        >
                          <Button
                            fontSizes="11px"
                            className="btn btn-block btn-lg gradient-custom-4 text-body"
                            disabled={
                              changeEmailValide.isValid === true &&
                              changeSubjectValid.isValid === true &&
                              changeMessageValid.isValid === true
                                ? false
                                : true
                            }
                          >
                            Send Message
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default ContactUsScreen;
