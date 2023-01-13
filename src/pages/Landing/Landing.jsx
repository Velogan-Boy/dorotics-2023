import React from 'react';

import styles from './Landing.module.css';

function Landing() {
   return (
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
   );
}

export default Landing;
