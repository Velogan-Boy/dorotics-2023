import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import styles from './Form.module.css';

function Form() {
   const [name, setName] = useState("");
   const [contact, setContact] = useState("");
   const [designation, setDesignation] = useState("");
   const [organization, setOrganization] = useState("");
   const [country, setCountry] = useState("");
   const [email, setEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");

   const [mailStatus, setMailStatus] = useState("success");
   const [isLoading, setIsLoading] = useState(false);
   const [open, setOpen] = useState(false);

   const alertMessage = {
      "success": "Message sent",
      "error": "Failed! Try again",
      "warning": "Please fill out all the fields"
   };

   const submitHandler = (e) => {
      e.preventDefault();

      let details = { name, contact, designation, email, organization, country, subject, message };
      let filled = name && contact && designation && email && organization && country && subject && message;
      console.log(filled)
      if (!filled) {
         setMailStatus("warning");
         setOpen(true);
         return;
      }

      let formBody = [];
      for (let property in details) {
         formBody.push(encodeURIComponent(property) + "=" + encodeURIComponent(details[property]));
      }
      formBody = formBody.join("&");

      setIsLoading(true);
      fetch('https://dorotics-server.vercel.app/message', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
         },
         body: formBody
      }).then(res => res.json())
         .then(res => {
            setMailStatus("success");
            setIsLoading(false);
            setOpen(true);
         })
         .catch(err => {
            setMailStatus("error");
            setIsLoading(false);
            setOpen(true);
         });
   }

   const handleClose = () => {
      setOpen(false);
   }

   return (
      <form className={styles.container}>
         <div className={styles.inputGrp}>
            <input className={styles.input} type="text" placeholder="Name" required
               value={name} onChange={(e) => setName(e.target.value)} />
            <input className={styles.input} type="text" placeholder="Contact Number" required
               value={contact} onChange={(e) => setContact(e.target.value)} />
         </div>
         <div className={styles.inputGrp}>
            <input className={styles.input} type="text" placeholder="Designation" required
               value={designation} onChange={(e) => setDesignation(e.target.value)} />
            <input className={styles.input} type="text" placeholder="Organization Name" required
               value={organization} onChange={(e) => setOrganization(e.target.value)} />
         </div>
         <div className={styles.inputGrp}>
            <input className={styles.input} type="text" placeholder="Country" required
               value={country} onChange={(e) => setCountry(e.target.value)} />
            <input className={styles.input} type="text" placeholder="Email Address" required
               value={email} onChange={(e) => setEmail(e.target.value)} />
         </div>

         <div className={styles.inputGrp}>
            <input className={styles.input} type="text" placeholder="Subject" required
               value={subject} onChange={(e) => setSubject(e.target.value)} />
         </div>

         <div className={styles.inputGrp}>
            <textarea className={styles.textarea} placeholder="Message" required
               value={message} onChange={(e) => setMessage(e.target.value)} />
         </div>

         {isLoading ? <Box sx={{ display: 'flex', margin: "20px 0px" }}>
            <CircularProgress size={40} style={{ color: '#EC6832' }} />
         </Box>
            :
            <button type='submit' className={styles.btn} onClick={submitHandler}>Send</button>
         }
         <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            autoHideDuration={6000}
            open={open}
            onClose={handleClose}
            key={"bottomcenter"}
         >
            <Alert onClose={handleClose} severity={mailStatus} sx={{ width: '100%' }}>
               {alertMessage[mailStatus]}
            </Alert>
         </Snackbar>
      </form>
   );
}

export default Form;
