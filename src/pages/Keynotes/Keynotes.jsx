import React from 'react'

import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';

import styles from './Keynotes.module.css'

function Keynotes() {
   return (
      <div style={{ padding: '10rem 0rem', textAlign: 'center' }}>
         <p
            style={{
               color: 'rgb(119, 119, 119)',
               letterSpacing: '1.25px',
               fontSize: '2rem',
               lineHeight: '1.4',
            }}
         >
            <b>Stay tuned!</b>
         </p>
         <FloatNextButton link="/dates" />
      </div>
   );
}

export default Keynotes