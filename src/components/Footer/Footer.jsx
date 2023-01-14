import React from 'react';

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer() {
   return (
      <div className={styles.footer}>
         <div className={styles.footerLeft}>
            <h2>Subscribe for Dorotics Update</h2>
            <div className={styles.inputGroup}>
               <input type="email" className={styles.input} id="Email" name="Email" placeholder="dorotics@verse.com" autocomplete="off" />
               <button className={styles.subscribeBtn}> Subscribe </button>
            </div>
         </div>

         <div className={styles.footerRight}>
            <div className={styles.footerRightTop}>
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
            </div>
            <h2 className={styles.copyrights}>@ Copyright DOROTICS, All Right Reserved.</h2>
         </div>
      </div>
   );
}

export default Footer;
