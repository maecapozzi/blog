import React, { useState } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import mediaQueries from "../utils/mediaQueries";

const FormWrapper = styled.div`
  background: ${(props) => props.theme.colors.muted};
  border-radius: 5px;
  padding: 40px;
  color: ${(props) => props.theme.colors.secondary};
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
  color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.theme.colors.highlight};
  font-size: ${(props) => props.theme.fontSizes["5"]};
  height: ${(props) => props.theme.spacings["7"]};
  width: 100%;
  ${mediaQueries.TABLET_PORTRAIT`
    width: ${(props) => props.theme.spacings["10"]};
  `}

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
  color: red;
  padding-top: ${(props) => props.theme.spacings["1"]};
  padding-bottom: ${(props) => props.theme.spacings["3"]};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  ${mediaQueries.TABLET_PORTRAIT`
    width: ${(props) => props.theme.spacings["10"]};
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `}
`;
const NewsletterText = styled.p`
  font-size: ${(props) => props.theme.fontSizes["5"]};
`;

const AdblockerText = styled.p`
  font-size: ${(props) => props.theme.fontSizes["3"]};
  margin-top: ${(props) => props.theme.spacings["3"]};
`;

const Spacer = styled.div`
  margin: ${(props) => props.theme.spacings["4"]} 0;
`;
export const NewsletterSignup = ({ slug }) => {
  const [message, setMessage] = useState(null);

  const dataToLog = React.useRef([]);
  const [amplitudeInstance, setAmplitudeInstance] = React.useState({
    logEvent: (...args) => {
      dataToLog.current.push(args);
    },
  });

  React.useEffect(() => {
    const load = async () => {
      const amplitude = await import("amplitude-js");
      const instance = amplitude.getInstance();

      if (process.env.GATSBY_AMPLITUDE_API_KEY) {
        instance.init(process.env.GATSBY_AMPLITUDE_API_KEY);
      } else {
        console.log(`amplitude api key is undefined`);
      }

      dataToLog.current.forEach((args) => {
        instance.logEvent(...args);
      });
      dataToLog.current = [];
      setAmplitudeInstance(instance);
    };
    load();
  }, []);

  return (
    <Formik
      initialValues={{
        firstName: "",
        email: "",
      }}
      validate={(values) => {
        const errors = {};

        if (!values.firstName) {
          errors.firstName = "First name is required.";
        }

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
            amplitudeInstance.logEvent(`newsletter signup from ${slug}`);
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
            Want frequent design systems tips, articles, and jobs sent right to
            your inbox?
          </NewsletterHeader>
          <Spacer>
            <NewsletterText>
              Sign up for the Design Systems Newsletter today!
            </NewsletterText>
          </Spacer>
          <StyledForm onSubmit={handleSubmit}>
            <Wrapper>
              <StyledLabel>First Name</StyledLabel>
            </Wrapper>
            <Wrapper>
              <StyledInput
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
            </Wrapper>
            {errors.firstName && touched.firstName && (
              <Error>{errors.firstName}</Error>
            )}
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
            </Wrapper>
            {errors.email && touched.email && <Error>{errors.email}</Error>}
            <ButtonWrapper>
              <StyledButton type="submit" disabled={isSubmitting}>
                Submit
              </StyledButton>
            </ButtonWrapper>

            {message !== null && <StyledMessage>{message}</StyledMessage>}

            <AdblockerText>
              If you're unable to sign up, please turn off your ad blocker and
              try again.
            </AdblockerText>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};
