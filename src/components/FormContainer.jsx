// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'reactstrap';

const FormContainer = () => (
  <div>
    {/* <h1>Any place in your app!</h1> */}
    <Formik
      initialValues={{ email: '', number: '', name:'' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Please enter your email';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.number) {
          errors.number = 'Please enter your contact number';
        } 
        else if (
          !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.number)
        )
         {
          errors.number = 'Invalid contact number';
        }
        if (!values.name) {
          errors.name = 'Please enter your name';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.warn(JSON.stringify(values));
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 2000);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
        <div className="form-group">
          <Field className="form-control my-1" type="text" name="name" placeholder="Your Name" />
          <ErrorMessage name="name" component="div" className="text-danger" />
        </div>
        <div className="form-group">
          <Field className="form-control my-1" type="email" name="email" placeholder="Your Email" />
          <ErrorMessage name="email" component="div" className="text-danger" />
        </div>
        <div className="form-group input-group my-1">
          <span className="input-group-text">+91</span>
          <Field className="form-control " name="number" placeholder="Your Number" />
        </div>
        <ErrorMessage name="number" className="text-danger" component="div" />
        <div className="form-group">
          <Field as="textarea" className="form-control my-1" name="query" placeholder="Your Query" />
        </div>
        <Button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          Submit
        </Button>
      </Form>
      )}
    </Formik>
   </div>
);

export default FormContainer;