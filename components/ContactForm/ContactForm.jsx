import React, { useEffect, useState } from 'react'
import { Form, FormField, FormFieldGroup, Input, Label, SubmitButton, SuccessMessage, TextArea } from './ContactForm.styles'

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

  console.log(success)

  return (
    <Form method="post" name="contact" netlify netlify-honeypot="bot-field">
      <h3>Contactformulier</h3>
      <input type="hidden" name="form-name" value="contact" />
      <FormFieldGroup>
        <FormField>
          <Label htmlFor="name">Naam</Label>
          <Input type="text" name="name" id="name" required/>
        </FormField>
        <FormField>
          <Label htmlFor="phone">Telefoonnummer</Label>
          <Input type="tel" name="phone" id="phone"/>
        </FormField>
      </FormFieldGroup>
      <FormField>
        <Label htmlFor="email">E-mailadres</Label>
        <Input type="email" name="email" id="email" required/>
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
      <SubmitButton type="submit">Versturen</SubmitButton>

      {success && (
        <SuccessMessage>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"></path></svg>
          Het formulier is succesvol verzonden
        </SuccessMessage>
      )}
    </Form>
  )
}
