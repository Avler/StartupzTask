import React from 'react';
import { Form, Field } from 'react-final-form';
import { Form as BSForm } from 'react-bootstrap';
import styled from 'styled-components';
import * as yup from 'yup';
import CustomButton from '../../common/components/CustomButton/CustomButton';
import '../../common/style/commonStyle.scss'

interface FormFields {
  name: string;
  email: string;
  message: string;
}
interface Props {
  onSuccessfulSubmit: () => void;
}
// Define the validation schema using yup
const schema: yup.ObjectSchema<FormFields> = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const ContactForm: React.FC<Props> = ({ onSuccessfulSubmit }) => {
  const onSubmit = (values: FormFields) => {
    console.log(values);
    onSuccessfulSubmit();
  };

  const validate = (values: FormFields) => {
    try {
      schema.validateSync(values, { abortEarly: false });
      return {};
    } catch (err) {
      const errors = (err as yup.ValidationError).inner.reduce((acc: { [key: string]: string }, curr) => {
        acc[curr.path!] = curr.message;
        return acc;
      }, {});
      return errors;
    }
  };

  return (
    <StyledFormWrapper>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <BSForm onSubmit={handleSubmit}>
            <Field name="name">
              {({ input, meta }) => (
                <div>
                  <StyledInput {...input} placeholder="Name*" />
                  {meta.error && meta.touched && <span className='error-msg'>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="email">
              {({ input, meta }) => (
                <div>
                  <StyledInput {...input} placeholder="Email*" />
                  {meta.error && meta.touched && <span className='error-msg'>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="message">
              {({ input, meta }) => (
                <StyledTextAreaCont>
                  <StyledTextArea as="textarea" {...input} placeholder="Message*" />
                  {meta.error && meta.touched && <span className='error-msg'>{meta.error}</span>}
                </StyledTextAreaCont>
              )}
            </Field>
            <CustomButton bgColor="#3D4F5C" width={243} textColor="#FBFBFA" type="submit">
              Shoot us a message
            </CustomButton>
          </BSForm>
        )}
      />
    </StyledFormWrapper>
  );
};

const StyledTextAreaCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const StyledFormWrapper = styled.div`
  width: 512px;
  z-index: 1;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f3f3f3;
  box-shadow: 0px 8px 35px 0px rgba(187, 169, 142, 0.15);
  padding: 20px;
  @media (max-width: 550px) {
    width: 350px;
  }
  form {
    margin-top: 50px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
`;
const StyledInput = styled(BSForm.Control)`
  height: 54px;
  margin-bottom: 15px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 35px 0px rgba(187, 169, 142, 0.15);

  width: 429px;
  @media (max-width: 550px) {
    width: 300px;
  }
`;
const StyledTextArea = styled(BSForm.Control)`
  width: 429px;
  height: 270px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 35px 0px rgba(187, 169, 142, 0.15);
  border: none;
  padding: 20px;
  @media (max-width: 550px) {
    width: 300px;
  }
`;

export default ContactForm;
