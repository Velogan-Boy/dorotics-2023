import React from 'react';

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer() {
   return (
      <div className={styles.footer}>
         <div className={styles.logo}>
            <a href="/">
               <img src="/logo-white.png" className={styles.logoImg} alt="Dorotics Logo" />
            </a>
         </div>
         <h2>Follow Us On</h2>
         <div className={styles.socialIcons}>
            <a className={styles.socialLinks} href="https://www.facebook.com/dorotics2023" target="_blank" rel="noreferrer">
               <div></div>
               <FaFacebookF />
            </a>
            <a className={styles.socialLinks} href="https://twitter.com/dorotics2023" target="_blank" rel="noreferrer">
               <FaTwitter />
            </a>
            <a className={styles.socialLinks} href="https://www.instagram.com/dorotics2023/" target="_blank" rel="noreferrer">
               <FaLinkedinIn />
            </a>
         </div>
         <h2 className={styles.copyrights}>@ Copyright DOROTICS, All Right Reserved.</h2>
      </div>
   );
}

export default Footer;
