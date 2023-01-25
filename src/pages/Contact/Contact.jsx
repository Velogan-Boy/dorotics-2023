import React from 'react';

import Heading from '../../components/UI/Heading/Heading';
import SubHeading from '../../components/UI/SubHeading/SubHeading';
import Form from './Form';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

import styles from './Contact.module.css';
import Footer from '../../components/Footer/Footer';

function Contact() {
   return (
      <>
         <Heading text="Contact Us" />

         <div className={styles.section}>
            <SubHeading text="Contact Details" />

            <div className={styles.container}>
               <Form />
               <div className={styles.rightContainer}>
                  <div className={styles.card}>
                     <div className={styles.name}>Dr. S. Chitrakala</div>
                     <div>Professor, DCSE, CEG, Anna University</div>
                     <div className={styles.phone}>
                        <FiPhoneCall />
                        <span className={styles.phoneNo}>+91 44-22358859</span>
                     </div>
                  </div>
                  <div className={styles.card}>
                     <div className={styles.name}>Dr. T.Mala</div>
                     <div>Associate Professor, DIST, CEG, Anna University</div>
                     <div className={styles.phone}>
                        <FiPhoneCall />
                        <span className={styles.phoneNo}>+91 44-22358854</span>
                     </div>
                  </div>

                  <div className={styles.divider}></div>

                  <div className={styles.emailCard}>
                     <MdEmail />
                     dorotics.symposium@gmail.com
                  </div>
               </div>
            </div>
         </div>

         <Footer />
      </>
   );
}

export default Contact;
