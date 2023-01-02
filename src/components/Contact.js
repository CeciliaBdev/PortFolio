import React from 'react'

function Contact() {
  return (
    <div className="contactForm" id="contact">
      <form
        className="contact"
        method="post"
        name="contact"
        data-netlify="true"
        onSubmit="submit"
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
    </div>
  )
}

export default Contact
