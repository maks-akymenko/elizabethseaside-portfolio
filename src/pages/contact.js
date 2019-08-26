import React from 'react'
import { IoLogoInstagram, IoIosMail, IoIosPhonePortrait } from "react-icons/io";
import { Layout } from 'src/components'
import { ContactSection } from 'src/styles/pages/contact.styled'

const Contact = () => {
  return (
    <Layout>
      <ContactSection>
        <h1>Hey there. Feel free to contact me,</h1>
        <h2>If you'd like to book a photoshoot:</h2>

        <ul>
          <li>
            <p>
              <IoIosPhonePortrait />
              Call me
            </p>
            <a href="tel:+48537584327">+48537584327</a></li>
          <li>
            <p>
              <IoLogoInstagram />
              Drop me a message on
            </p>
            <a target="_blank" rel="nooperner noreferrer" href="https://www.instagram.com/elizabethseaside_photography/"> Instagram</a>
          </li>
          <li>
            <p>
              <IoIosMail />
              Write me at
            </p>
            <a href="mailto:biriukovayelyzaveta@gmail.com"> biriukovayelyzaveta@gmail.com</a>
          </li>
        </ul>
      </ContactSection>
    </Layout>
  )
}

export default Contact
