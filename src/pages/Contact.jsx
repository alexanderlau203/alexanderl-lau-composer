import React from 'react';
import Header from '../components/Header'
import styled from 'styled-components';
import Footer from '../components/Footer';
import { MainTitle } from '../components/PageTitles';
import { TextInputGroup, TextAreaGroup } from '../components/FormGroup';
import CoverPhoto from '../assets/Contact.jpeg';
console.log(process.env)

const Body = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 4% 80px 4%;
`

const ContactForm = styled.div`
  width: 50%;
  height: 800px;%;
`

const FormWrapper = styled.div`
  margin-top: 80px;
  padding: 50px 100px;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
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

const Contact = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [message, setMessage] = React.useState('')

  React.useEffect(() => {
    console.log(name)
  }, [name])

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
              </Form>
            </FormWrapper>
          </ContactForm>

          {/* Cover photo */}
          <PhotoWrapper>
            <img src={CoverPhoto}/>
          </PhotoWrapper>
        </Body>
      <Footer />
    </section>
  );
}

export default Contact;