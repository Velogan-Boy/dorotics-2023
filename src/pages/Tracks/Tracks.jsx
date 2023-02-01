import React from 'react';
import Heading from '../../components/UI/Heading/Heading';
import SubHeading from '../../components/UI/SubHeading/SubHeading';
import Footer from '../../components/Footer/Footer';
import FloatNextButton from '../../components/FloatNextButton/FloatNextButton';
import styles from './Tracks.module.css';
import { track_description, track_titles, track_topics } from '../../data';

import { Collapse, IconButton, List, ListItemButton, ListItemText } from '@mui/material';

import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';

const Tracks = () => {
   const [open, setOpen] = React.useState([false, false, false, false, false]);

   const handleClick = (index) => {
      setOpen((prevState) => {
         const newState = [...prevState];

         newState[index] = !newState[index];

         return newState;
      });
   };

   return (
      <div>
         <Heading text="tracks" />
         <div className={styles.section}>
            <SubHeading text="Themes and topics" />
            <p className={styles.description}>{track_description}</p>
            {track_titles.map((title, index) => {
               return (
                  <div className={styles.track} key={index}>
                     <h2 onClick={() => handleClick(index)}>
                        <i>Track {index + 1}:</i> {title}
                        <IconButton className={styles.icon}>{open[index] ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}</IconButton>
                     </h2>

                     <Collapse in={open[index]} timeout="auto" unmountOnExit>
                        <div>
                           <ul>
                              {track_topics[title].map((topic, index) => (
                                 <li key={index}>{topic}</li>
                              ))}
                           </ul>
                        </div>
                     </Collapse>
                  </div>
               );
            })}
         </div>

         <Footer />
         <FloatNextButton link="/paper-submission" />
      </div>
   );
};

export default Tracks;
