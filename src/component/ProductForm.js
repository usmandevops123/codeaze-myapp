import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../component/Textfield';
import * as Yup from 'yup';

export const ProductForm = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        productName: '',
        rate: '',
        // email: '',
        // password: '',
        // confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Edit Product </h1>
          <Form>
            <TextField label="Product Name" name="firstName" type="text" />
            <TextField label="Rate" name="lastName" type="number" />
            {/* <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" /> */}
            <button className="btn btn-dark mt-3" type="submit">Update</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Cancel</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}