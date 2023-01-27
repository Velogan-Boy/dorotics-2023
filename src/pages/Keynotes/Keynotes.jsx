import React from 'react'

import Heading from "../../components/UI/Heading/Heading"
import SubHeading from "../../components/UI/SubHeading/SubHeading"
import KeynoteSpeaker from "../../components/KeynoteSpeaker/KeynoteSpeaker"
import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';
import Footer from '../../components/Footer/Footer';

import { keynote_speakers } from "../../data.js"

import styles from './Keynotes.module.css'

function Keynotes() {
  return (
    <div>
      <Heading text={"Keynotes"} />
      <div className={styles.wrapper}>
        <SubHeading text={"Speakers"} />
        <div className={styles.container}>
          {
            keynote_speakers.map((detail) => {
              return (
                <KeynoteSpeaker detail={detail} />
              )
            })
          }
        </div>
      </div>
      <FloatNextButton link="/schedule" />
      <Footer />
    </div>
  );
}

export default Keynotes