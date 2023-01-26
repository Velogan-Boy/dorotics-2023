import React from 'react';
import Heading from '../../components/UI/Heading/Heading';
import SubHeading from '../../components/UI/SubHeading/SubHeading';
import Footer from '../../components/Footer/Footer';
import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';
import { journals, publications, subJournals } from '../../data';
import styles from './Publications.module.css';

const Publications = () => {
   return (
      <div>
         <Heading text="Publications" />
         <div className={styles.section}>
            <SubHeading text="Publications" />
            <div className={styles.container}>
               <div>
                  {publications.map((publication, index) => (
                     <p key={index}>{publication}</p>
                  ))}
                  <div className={styles.journal}>
                     <p>◼{" " + journals[0]}</p>
                     <ul>
                        {subJournals.one.map((journal, index) => (
                           <li key={index}>{journal}</li>
                        ))}
                     </ul>
                     <p>
                        For more details visit
                        <a href="https://www.ictactjournals.in" target="_blank" rel="noreferrer">
                           {' '}
                           www.ictactjournals.in
                        </a>
                     </p>
                  </div>
                  <div className={styles.journal}>
                     <p>◼{" " + journals[1]}</p>
                  </div>
               </div>
               <div className={styles.partner}>
                  <img src="/ict-academy.png" alt="ICTACT logo" />
                  <p>Knowledge Partner</p>
               </div>
            </div>
         </div>
         <Footer />
         <FloatNextButton link="/register" />
      </div>
   );
};

export default Publications;
