import React, { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter = ({ className }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleInput = e => setEmail(e.target.value);

  const handleSubmit = async event => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch(
        `https://random-studio.netlify.app/.netlify/functions/addToNewsletterList?email=${email}`,
      );

      if (response.ok) {
        setIsSuccessful(true);
      } else {
        const body = await response.json();
        setError(body.errorMessage);
      }
    } catch (responseError) {
      console.log(responseError);
      setError('Failed to submit. Please check email and try again.');
    }

    return false;
  };

  return (
    <form className={`${className} ${styles.wrapper}`} onSubmit={handleSubmit}>
      <h4>Newsletter</h4>
      {isSuccessful ? (
        <>
          <div className={styles.input}>{'Thank you!'}</div>
          <div className={styles.submit}>
            <img
              alt="success"
              className={styles.check}
              src="/check.svg"
            />
          </div>
        </>
      ) : (
				<div className={styles.field}>
					<input
            className={styles.input}
            placeholder="enter your email address"
            onChange={handleInput}
            type="email"
            value={email}
          />
          <input
            alt="submit"
            className={styles.submit}
            src="/arrow.svg"
            type="image"
          />
          {error !== '' && <p className={styles.error}>{error}</p>}
				</div>
      )}
    </form>
  );
};

export default Newsletter;
