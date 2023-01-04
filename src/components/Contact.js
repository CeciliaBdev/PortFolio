import React from 'react'
import footer_github from '../assets/footer_github.png'
import footer_linkedin from '../assets/footer_linkedin.png'

function Contact() {
  return (
    <div className="contactForm" id="contact">
      <form
        className="contact"
        method="post"
        name="contact"
        data-netlify="true"
        // onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label>Nom: </label>
        <input type="text" name="name" />

        <label>Email:</label>
        <input type="email" name="email" />

        <label>Message:</label>
        <textarea name="message"></textarea>

        <button type="submit">Envoyer</button>
      </form>

      <div className="footer">
        <a href="https://github.com/CeciliaBdev" target="_blank">
          <img src={footer_github} alt="github" width="50px" />
        </a>
        <a
          href="https://www.linkedin.com/in/c%C3%A9cilia-bernard-849221252/"
          target="_blank"
        >
          <img src={footer_linkedin} alt="github" width="30px" />
        </a>
      </div>
    </div>
  )
}

export default Contact
