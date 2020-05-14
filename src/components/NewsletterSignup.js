import React, { useState } from "react";
import styled from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { Formik } from "formik";

const FormWrapper = styled.div`
  background: ${(props) => props.theme.colors.gray1};
  margin: 40px 0px;
  border-radius: 5px;
  padding: 40px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  box-shadow: 0 10px 15px 3px rgba(0, 0, 0, 0.1),
    0 4px 6px 1px rgba(0, 0, 0, 0.05);
`;

const NewsletterHeader = styled.h2`
  font-family: ${(props) => props.theme.fonts.primary};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
`;

const StyledLabel = styled.label`
  font-family: ${(props) => props.theme.fonts.primary};
  margin-top: 16px;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  letter-spacing: 0.5px;
`;

const StyledInput = styled.input`
  font-family: ${(props) => props.theme.fonts.primary};
  padding: 8px;
  margin: 8px 0px;
  drop-shadow: none;
  border: none;
  border-radius: 5px;
`;

const StyledTextArea = styled.textarea`
  font-family: ${(props) => props.theme.fonts.primary};
  padding: 8px;
  margin: 8px 0px;
  drop-shadow: none;
  border: none;
  border-radius: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const StyledButton = styled.button`
  font-family: ${(props) => props.theme.fonts.primary};
  cursor: pointer;
  color: white;
  border-radius: 5px;
  width: 88px;
  padding: 8px;
  border: none;
  background-color: ${(props) => props.theme.colors.highlight};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const StyledMessage = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  background-color: ${(props) => props.theme.colors.highlight};
  padding: 8px;
  border-radius: 5px;
  margin: 16px 0;
  text-align: center;
`;

const Error = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes["2"]};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewsletterSignup = () => {
  const [message, setMessage] = useState(null);
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        interests: "",
      }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.firstName) {
          errors.firstName = "Required";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        addToMailchimp(values.email, {
          FIRST_NAME: values.firstName,
          TOPICS: values.interests,
        }).then((data) => {
          if (data.result === "error") {
            setMessage(`Looks like you've already signed up!`);
          }

          if (data.result === "success") {
            setMessage(`You've signed up successfully!`);
          }
        });
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <FormWrapper>
          <NewsletterHeader>Let's talk coding.</NewsletterHeader>
          <p>
            I send articles about working as a software engineer, tips and
            tricks about React and building component libraries, and the
            occasional personal post. You can unsubscribe at any time.
          </p>
          {message !== null && <StyledMessage>{message}</StyledMessage>}
          <StyledForm onSubmit={handleSubmit}>
            <Wrapper>
              <StyledLabel>First name</StyledLabel>
              {errors.firstName && touched.firstName && (
                <Error>{errors.firstName}</Error>
              )}
            </Wrapper>
            <StyledInput
              type="firstName"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />

            <Wrapper>
              <StyledLabel>Email</StyledLabel>
              {errors.email && touched.email && <Error>{errors.email}</Error>}
            </Wrapper>
            <StyledInput
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <StyledLabel>
              What topics are you interested in hearing about?
            </StyledLabel>
            <StyledTextArea
              type="interests"
              name="interests"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.interests}
            />
            <ButtonWrapper>
              <StyledButton type="submit" disabled={isSubmitting}>
                Submit
              </StyledButton>
            </ButtonWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};
