import React from 'react'

import Heading from "../../components/UI/Heading/Heading"
import SubHeading from '../../components/UI/SubHeading/SubHeading';
import KeynoteSpeaker from "../../components/KeynoteSpeaker/KeynoteSpeaker"
import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';
import Footer from '../../components/Footer/Footer';

import styles from './Keynotes.module.css'

function Keynotes() {
  return (
     <>
     <Heading text={"Keynotes"}/>
     <div className={styles.wrapper}>
            {/* <SubHeading text="Keynote speakers" /> */}
            <div className={styles.container}>
              {/* <KeynoteSpeaker /> */}
              <div className={styles.update}>Will be updated shortly!</div>
            </div>
            
      </div>
      <FloatNextButton link="/schedule" />
      <Footer />

     </>
  );
}

export default Keynotes