import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import FloatNextButton from '../../components/UI/FloatNextButton/FloatNextButton';


import styles from './Landing.module.css';

function Landing() {
   return (
      <div className={styles.landing}>
         <div className={styles.bg}>
            <h1 className={styles.heroText}>
               <span className={styles.s1}>Symposia on</span>
               <span className={styles.s1}>Emerging Technologies in</span>
               <span className={styles.s2}>DOROTICS</span>
               <span className={styles.s3}>2023</span>
            </h1>

            <h3 className={styles.subText}>
               <span className={styles.sb}>30,31 March & April 1 2023</span>
               <span className={styles.sb1}>College of Engineering, Guindy,</span>
               <span className={styles.sb1}>Anna University, Chennai, Tamil Nadu</span>
            </h3>
         </div>

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
         
         <FloatNextButton link="/about" />
      </div>
   );
}

export default Landing;
