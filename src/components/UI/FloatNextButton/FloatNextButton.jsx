import React from 'react'
import { Link } from 'react-router-dom'

import styles from './FloatNextButton.module.css'

import { HiArrowRight } from 'react-icons/hi'

function FloatNextButton(props) {
  return (
     <div className={styles.floaterMob}>
         <Link to={props.link} className={styles.floaterMobLink}>
        <HiArrowRight className={styles.floaterMobIcon} />
         </Link>
     </div>
  );
}

export default FloatNextButton