import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import Loader from '../Loader/Loader';
import {
  ContentWrapper,
  Form,
  FormField,
  FormFieldGroup,
  Input,
  Label,
  Message,
  SubmitButton,
  TextArea,
} from './ContactForm.styles';

export default function ContactForm({ introText, overlay }) {
  const ref = useRef();
  const [isLoading, setIsLoadig] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    let myForm = ref.current;
    let formData = new FormData(myForm);
    setIsLoadig(true);
    fetch('/neededforcontactform.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setTimeout(() => {
          console.log('Form successfully submitted');
          setSuccess(true);
          setIsLoadig(false);
        }, 1000);
      })
      .catch(error => {
        setError(true);
        alert(error);
      });
  };

  return (
    <Form
      ref={ref}
      name="contact"
      netlify
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={overlay ? 'is-overlay' : ''}
    >
      <h3>Contactformulier</h3>
      {introText && <ContentWrapper>Vul onderstaand formulier in en we nemen zo spoedig mogelijk contact op. Of bel ons op <a href="tel:+31631902336">+31 6 3190 2336</a></ContentWrapper>}
      <input type="hidden" name="form-name" value="contact" />
      <FormFieldGroup>
        <FormField>
          <Label htmlFor="name">Naam</Label>
          <Input type="text" name="name" id="name" required />
        </FormField>
        <FormField>
          <Label htmlFor="phone">Telefoonnummer</Label>
          <Input type="tel" name="phone" id="phone" />
        </FormField>
      </FormFieldGroup>
      <FormField>
        <Label htmlFor="email">E-mailadres</Label>
        <Input type="email" name="email" id="email" required />
      </FormField>
      <FormField>
        <Label htmlFor="question">Vraag of opmerking</Label>
        <TextArea name="question" id="question" rows="8" required></TextArea>
      </FormField>
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <SubmitButton type="submit" disabled={isLoading}>
        <Loader isLoading={isLoading} />
        Versturen
      </SubmitButton>

      {(success || error) && (
        <Message
          className={success ? 'success' : 'error'}
          initial={{ y: '20%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"></path>
          </svg>
          {success && 'Het formulier is succesvol verzonden'}
          {error && 'Excuses, er is iets fout gegaan. Probeer het later opnieuw.'}
        </Message>
      )}
    </Form>
  );
}
