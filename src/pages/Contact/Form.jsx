import React from 'react';

import styles from './Form.module.css';

function Form() {
   return (
      <div className={styles.container}>
         <div className={styles.inputGrp}>
            <input className={styles.input} type="text" placeholder="Name" />
            <input className={styles.input} type="text" placeholder="Contact Number" />
         </div>
         <div className={styles.inputGrp}>
            <input className={styles.input} type="text" placeholder="Designation" />
            <input className={styles.input} type="text" placeholder="Organization Name" />
         </div>
         <div className={styles.inputGrp}>
            <input className={styles.input} type="text" placeholder="Country" />
            <input className={styles.input} type="text" placeholder="Email Address" />
         </div>

         <div className={styles.inputGrp}>
            <input className={styles.input} type="text" placeholder="Subject" />
         </div>

         <div className={styles.inputGrp}>
            <textarea className={styles.textarea} placeholder="Message" />
         </div>

         <button className={styles.btn}>Send</button>
      </div>
   );
}

export default Form;
