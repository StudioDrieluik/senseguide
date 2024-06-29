import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRef } from 'react';
import Loader from '../Loader/Loader';
import { Input, Message, SubmitButton } from '../ContactForm/ContactForm.styles';

export default function DownloadForm({ linkTitle, downloadLink }) {
  const ref = useRef();
  const { t } = useTranslation('common');
  const [isLoading, setIsLoadig] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    let myForm = ref.current;
    let formData = new FormData(myForm);
    console.log(formData);
    setIsLoadig(true);
    fetch('/neededfordownloadform.html', {
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
        setTimeout(() => {
          if (downloadLink) {
            window.location = downloadLink;
          }
        }, 5000);
      })
      .catch(error => {
        setError(true);
        alert(error);
      });
  };

  return (
    <>
      <form
        ref={ref}
        name="download"
        netlify
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex gap-6 md:gap-10 items-start md:items-center flex-col md:flex-row"
      >
        <input type="hidden" name="form-name" value="download" />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="E-mailadres"
          required
          className="!border-white max-w-[40rem] h-[49px]"
        />

        <p className="hidden">
          <label>
            Please don’t fill this out if you’re human:
            <input name="bot-field" />
          </label>
        </p>
        <SubmitButton type="submit" disabled={isLoading} className="!rounded-[4px] ">
          <Loader isLoading={isLoading} />
          {linkTitle}
        </SubmitButton>
      </form>
      <div>
        {(success || error) && (
          <Message
            className={
              success
                ? 'success leading-tight max-w-[400px] w-full'
                : 'error leading-tight max-w-[400px] w-full'
            }
            initial={{ y: '20%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"></path>
            </svg>
            {success && t('downloadForm.success')}
            {error && t('downloadForm.error')}
          </Message>
        )}
      </div>
    </>
  );
}
