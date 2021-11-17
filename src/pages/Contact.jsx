import React from 'react';
import Header from '../components/Header'
import styled from 'styled-components';
import Footer from '../components/Footer';
import { MainTitle } from '../components/PageTitles';
import { TextInputGroup, TextAreaGroup } from '../components/FormGroup';
import CoverPhoto from '../assets/Contact.jpeg';
import PrimaryButton from '../components/PrimaryButton';
import emailjs from 'emailjs-com';
import Spinner from 'react-bootstrap/Spinner'
import Validator from '../utils/Validator'

const v = new Validator()

const Body = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 4% 80px 4%;
`

const ContactForm = styled.div`
  width: 50%;
  height: 800px;
`

const FormWrapper = styled.div`
  margin-top: 80px;
  padding: 50px 100px;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  height: 480px;
  justify-content: space-between;
  max-width: 500px;
`

const PhotoWrapper = styled.div`
  & {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
  }

  & img {
    height: 570px;
    object-fit: cover;
    width: 75%;
  }
`

const Alert = styled.div`
  color: ${props => props.alertType === 'danger' ? '#b11717' : '#1aa416'}
`

const FormSubmissionWrapper = styled.div`
  & {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  & .spinner-border {
    margin-left: 10px;
  }
`

const Contact = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [alertMessage, setAlertMessage] = React.useState(undefined)
  const [alertType, setAlertType] = React.useState('danger')
  const [loading, setLoading] = React.useState(false)
  const [disableButton, setDisableButton] = React.useState(false)

  const validateParams = () => {
    let isValid = false
    if (v.isEmpty(name)) {
      setAlertMessage('Name is a mandatory field.')
    } else if (v.isEmpty(email)) {
      setAlertMessage('Email is a mandatory field.')
    } else if (!v.validateEmail(email)) {
      setAlertMessage('Email must be valid.')
    } else if (v.isEmpty(subject)) {
      setAlertMessage('Subject is a mandatory field')
    } else if (v.isEmpty(message)) {
      setAlertMessage('Message is a mandatory field.')
    } else {
      isValid = true
    }

    return isValid
  }

  /**
   * Send an email from the frontend to the composer himself!
   */
  const sendEmail = async () => {
    // Validate all parameters
    setAlertMessage(undefined)
    if (!validateParams()) {
      return
    }

    // Prepare the email template parameters
    const templateParams = {
      from_name: name,
      subject: subject,
      sender_email: email,
      message: message
    }

    // Make the API call
    setLoading(true)
    setDisableButton(true)
    const response = await emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_USER_ID
    )

    // Handle response
    if (response.status === 200) {
      setAlertMessage('Success! Your email was sent.')
      setAlertType('success')
    } else {
      setDisableButton(false)
      setAlertMessage(`Error! We couldn't send your email. ${response.text}`)
    }
    setLoading(false)
  } 

  return (
    <section id="contact">
      <Header />
        <Body>

          {/* Form for contact */}
          <ContactForm>
            <FormWrapper>

              {/* Contact title and paragraph text */}
              <MainTitle>Contact</MainTitle>
              {/* https://medium.com/@patienceadajah/how-to-send-emails-from-a-react-application-without-a-backend-server-1dd8718ceedd */}
              <p>
                Feel free to reach out to me! I’m always looking to collaborate or work on a new 
                project. You can also contact me to purchase any sheet music of my compositions 
                or just ask questions.
              </p>

              {/* Text inputs */}
              <Form>
                <TextInputGroup label="Name *"
                  onChange={setName}
                />
                <TextInputGroup label="Email *"
                  onChange={setEmail}
                />
                <TextInputGroup label="Subject *"
                  onChange={setSubject}
                />
                <TextAreaGroup label="Message *" 
                  onChange={setMessage}
                />

                {/* Alert message */}
                {
                  alertMessage !== undefined &&
                  <Alert alertType={alertType}>
                    {alertMessage}
                  </Alert>
                }

                {/* Send email button and spinner */}
                <FormSubmissionWrapper>
                  <PrimaryButton onClick={() => sendEmail()} 
                    disabled={disableButton}
                  >
                    Send email
                  </PrimaryButton>
                  {
                    loading &&
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  }
                </FormSubmissionWrapper>
              </Form>
            </FormWrapper>
          </ContactForm>

          {/* Cover photo */}
          <PhotoWrapper>
            <img src={CoverPhoto}
              alt="Composer Alex Lau playing the violin."
            />
          </PhotoWrapper>
        </Body>
      <Footer />
    </section>
  );
}

export default Contact;