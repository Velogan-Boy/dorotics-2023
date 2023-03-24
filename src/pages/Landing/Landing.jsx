import React from 'react';
import { Snackbar, Alert, Card } from '@mui/material';

import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';
import Footer from '../../components/Footer/Footer';
import Subheading from '../../components/UI/SubHeading/SubHeading';

import styles from './Landing.module.css';

function Landing() {
   const [open, setOpen] = React.useState(true);

   const handleClose = (event) => {
      setOpen(false);
   };

   const handleClick = () => {
      setOpen(true);
   };

   return (
      <div className={styles.landing}>
         <div className={styles.bg}>
            <h1 className={styles.heroText}>
               <span className={styles.s1}>
                  National Symposium on <br /> emerging technologies in <br />
                  <span className={styles.s12}> Drones and Robotics </span>
               </span>
               <span className={styles.s2}>DOROTICS</span>
               <span className={styles.s3}>2023</span>
            </h1>

            <h3 className={styles.subText}>
               <span className={styles.sb}>April 24 2023</span>
               <span className={styles.sb1}>College of Engineering, Guindy,</span>
               <span className={styles.sb1}>Anna University, Chennai, Tamil Nadu</span>
            </h3>
            <div className={styles.scroll_wrapper}>
               <div className={styles.scroll}>
                  <div className={styles.scroll_title}>
                     <div>
                        <p>
                           {
                              ' |  Best Paper from each track will be awarded a cash price of ₹5000 | The best papers selected will be recommended for possible publication in the respective scopes of ICTACT Journals  |  Selected papers presented will also be published in IMEKO ACTA open access journal (SCOPUS indexed) '
                           }
                        </p>
                        <p>
                           {
                              ' |  Best Paper from each track will be awarded a cash price of ₹5000 | The best papers selected will be recommended for possible publication in the respective scopes of ICTACT Journals |  Selected papers presented will also be published in IMEKO ACTA open access journal. (SCOPUS indexed)   '
                           }
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} onClose={handleClose} sx={{ transform: 'translateY(4.2rem)' }}>
            <Card style={{ fontFamily: 'Roboto', width: '100%', fontSize: '1.2rem', backgroundColor: 'var(--accent)', color: '#fff', padding: '1rem' }}>
               Registeration is Open Now !!!
            </Card>
         </Snackbar>

         <div className={styles.venueSection}>
            <Subheading text="How to reach" />

            <div className={styles.venueContainer}>
               <div className={styles.howtoReach}>
                  <div>
                     <h2>Venue</h2>
                     <p>
                        College of Engineering, Guindy
                        <br />
                        12, Sardar Patel Rd, Anna University, Guindy, Chennai, Tamil Nadu 600025
                     </p>
                  </div>
               </div>
               <div className={styles.map}>
                  <iframe
                     title="map"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.8458456108235!2d80.2352517371262!3d13.011240525709582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679f0d20f797%3A0x59f9f10c66e02a19!2sCollege%20of%20Engineering%2C%20Guindy!5e0!3m2!1sen!2sin!4v1674065533135!5m2!1sen!2sin"
                     style={{ border: 0, width: '100%', height: '100%' }}
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
               </div>
            </div>
         </div>

         <Footer />

         <FloatNextButton link="/about" />
      </div>
   );
}

export default Landing;
