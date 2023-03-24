import React from 'react';
import { Snackbar, Card } from '@mui/material';
import Heading from '../../components/UI/Heading/Heading';
import SubHeading from '../../components/UI/SubHeading/SubHeading';
import Footer from '../../components/Footer/Footer';
import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';
import styles from './PaperSubmission.module.css';
import { submissionGuidelines, submissionFormat } from '../../data';

const PaperSubmission = () => {
   const [open, setOpen] = React.useState(true);

   const handleClose = (event) => {
      setOpen(false);
   };

   const handleClick = () => {
      setOpen(true);
   };

   return (
      <div>
         <Heading text="Paper Submission" />
         <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} onClose={handleClose} sx={{ transform: 'translateY(10rem)' }}>
            <Card style={{ fontFamily: 'Roboto', width: '100%', fontSize: '1.2rem', backgroundColor: 'var(--accent)', color: '#fff', padding: '1rem' }}>
               Paper Submission closed !!!
            </Card>
         </Snackbar>
         <div className={styles.section}>
            <SubHeading text="Submission guidelines" />
            <div className={styles.container}>
               <div>
                  <ul>
                     {submissionGuidelines.map((point, index) => {
                        if (point.includes('EasyChair')) {
                           let arr = point.split('EasyChair');
                           return (
                              <li key={index}>
                                 {arr[0]}
                                 <a href="https://easychair.org/conferences/?conf=dorotics2023" target="_blank" rel="noreferrer">
                                    EasyChair
                                 </a>
                                 {arr[1]}
                              </li>
                           );
                        }
                        return <li key={index}>{point}</li>;
                     })}
                  </ul>
               </div>
               <div>
                  <img src="/easy-chair.png" alt="Easy chair logo" />
               </div>
            </div>
            <SubHeading text="Submission format and link" />
            <div className={styles.format}>
               <ul>
                  {submissionFormat.map((point, index) => {
                     if (point.includes(',')) {
                        let arr = point.split(',');
                        return (
                           <li>
                              {arr[0]}
                              <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noreferrer">
                                 {arr[1]}
                              </a>
                           </li>
                        );
                     }
                     return <li key={index}>{point}</li>;
                  })}
               </ul>
            </div>
         </div>

         <Footer />
         <FloatNextButton link="/publications" />
      </div>
   );
};

export default PaperSubmission;
