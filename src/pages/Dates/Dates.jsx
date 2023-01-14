import React from 'react';

import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';

import styles from './Dates.module.css';

function Dates() {
   return (
      <div style={{ padding: '7rem 0rem', textAlign: 'center' }}>
         <p
            style={{
               color: 'rgb(119, 119, 119)',
               letterSpacing: '1.25px',
               fontSize: '1.5rem',
               lineHeight: '1.4',
            }}
         >
            Content will be updated soon!
         </p>
         <FloatNextButton link="/contact-us" />
      </div>
   );
}

export default Dates;
