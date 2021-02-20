import React, { useState } from "react";
import styled from "styled-components";
import { Formik } from "formik";

const FormWrapper = styled.div`
  background: ${(props) => props.theme.colors.muted};
  margin: 40px 0px;
  border-radius: 5px;
  padding: 40px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.primary};
  box-shadow: 0 10px 15px 3px rgba(0, 0, 0, 0.1),
    0 4px 6px 1px rgba(0, 0, 0, 0.05);
`;

const NewsletterHeader = styled.h2`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes["7"]};
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
  font-size: ${(props) => props.theme.fontSizes["5"]};
`;

const StyledInput = styled.input`
  font-family: ${(props) => props.theme.fonts.primary};
  padding: 8px;
  margin: 8px 0px;
  drop-shadow: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: ${(props) => props.theme.spacings["7"]};
  font-size: ${(props) => props.theme.fontSizes["4"]};
`;

export const StyledButton = styled.button`
  font-family: ${(props) => props.theme.fonts.primary};
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  border-radius: 5px;

  margin: 16px;
  border: none;
  background-color: ${(props) => props.theme.colors.highlight};
  font-size: ${(props) => props.theme.fontSizes["5"]};
  height: ${(props) => props.theme.spacings["7"]};
  width: ${(props) => props.theme.spacings["10"]};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const StyledMessage = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
`;

const Error = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes["3"]};
  color: "red";
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NewsletterText = styled.p`
  font-size: ${(props) => props.theme.fontSizes["5"]};
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
          errors.email = "Email address is required.";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address.";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        async function postData(url = "", data = {}) {
          const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
          });

          return response;
        }

        postData("https://app.convertkit.com/forms/2055370/subscriptions", {
          email_address: values.email,
          first_name: values.firstName,
        }).then((data) => {
          if (data.status === 200) {
            setMessage(`You've signed up successfully!`);
          } else {
            setMessage(
              `Looks like something went wrong. I'm sorry about that!`
            );
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
          <NewsletterHeader>
            Get the free design systems newsletter
          </NewsletterHeader>
          <NewsletterText>
            Whether you're new to design systems or a seasoned pro, this
            newsletter is for you.
          </NewsletterText>
          <NewsletterText>
            Join over 50 developers learning about design systems now:
          </NewsletterText>

          <StyledForm onSubmit={handleSubmit}>
            <Wrapper>
              <StyledLabel>Email Address</StyledLabel>
            </Wrapper>
            <Wrapper>
              <StyledInput
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              <StyledButton type="submit" disabled={isSubmitting}>
                Submit
              </StyledButton>
            </Wrapper>
            {errors.email && touched.email && <Error>{errors.email}</Error>}
            {message !== null && <StyledMessage>{message}</StyledMessage>}
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};
