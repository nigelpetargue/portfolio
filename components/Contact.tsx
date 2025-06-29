/** @format */

"use client"

import styles from "@/styles/contact.module.scss"
import { AiFillMail } from "react-icons/ai"
import Reveal from "./Reveal"
import Link from "next/link"

export default function Contact() {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Have an idea to discuss? Shoot me an email if you want to connect! You can also find me
            on &nbsp;
            <Link
              href="https://www.linkedin.com/in/nigel-petargue-b31704259/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>
            &nbsp; or &nbsp;
            <Link href="https://join.skype.com/invite/u9O4Fsbi7tPX" target="_blank" rel="nofollow">
              Skype
            </Link>
            &nbsp; if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:nigelpetargue@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>Send Email</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
