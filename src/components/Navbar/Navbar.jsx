import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

function Navbar() {
   const mobileNavRef = useRef(null);
   const [showMenu, setShowMenu] = useState(false);

   const navLinks = [

      {
         name: 'About',
         path: '/about',
      },
      {
         name: 'Committee',
         path: '/committee',
      },
      {
         name: 'Tracks',
         path: '/tracks',
      },
      {
         link1: {
            name: 'Paper Submission ',
            path: '/paper-submission',
         },
         link2: {
            name: 'Publications',
            path: '/publications',
         },
      },
      {
         name: 'Register',
         path: '/register',
      },
      {
         name: 'Keynote',
         path: '/keynote',
      },
      {
         name: 'Schedule',
         path: '/schedule',
      },
      {
         name: 'Contact Us',
         path: '/contact-us',
      },
   ];

   const toggleNav = (e) => {
      const nav = e.target.parentElement;
      nav.classList.toggle(styles.active);

      mobileNavRef.current.classList.toggle(styles.activeMob);
   };

   const toggleDropdown = (e) => {
      setShowMenu(!showMenu);
   }

   return (
      <>
         <div className={styles.nav}>
            <div className={styles.logo}>
               <a href="/">
                  <img src="/dorotics-logo.png" className={styles.logoImg} alt="Dorotics Logo" />
               </a>
            </div>
            <div className={styles.navLinks}>
               <a className={`${styles.nav_toggle}`} href="#!" onClick={toggleNav}>
                  <span></span>
               </a>
               <ul className={styles.navItems}>
                  {navLinks.map((nav, idx) => {
                     if (idx === 3) {
                        return <li key={"menu"} className={styles.navItem + " " + styles.menu}>
                           <a href='#' className={styles.navLink}>Submission & Publications</a>
                           <div className={styles.dropdown}>
                              <Link className={styles.navLink} to={nav.link1.path}>
                                 {nav.link1.name}
                              </Link>
                              <Link className={styles.navLink} to={nav.link2.path}>
                                 {nav.link2.name}
                              </Link>
                           </div>
                        </li>
                     }
                     return <li key={idx} className={styles.navItem}>
                        <Link className={styles.navLink} to={nav.path}>
                           {nav.name}
                        </Link>
                     </li>
                  })}
               </ul>
            </div>

            <div className={`${styles.nav_mobile}`} ref={mobileNavRef}>
               <ul className={styles.navItems_mobile}>
                  {navLinks.map((nav, idx) => {
                     if (idx === 3) {
                        return <>
                           <li key={"mobile" + idx + ".1"} className={styles.navItem_mobile}>
                              <Link className={styles.navLink} to={nav.link1.path}>
                                 {nav.link1.name}
                              </Link>
                           </li>
                           <li key={"mobile" + idx + ".2"} className={styles.navItem_mobile}>
                              <Link className={styles.navLink} to={nav.link2.path}>
                                 {nav.link2.name}
                              </Link>
                           </li>
                        </>
                     }
                     return <li key={"mobile" + idx} className={styles.navItem_mobile}>
                        <Link className={styles.navLink} to={nav.path}>
                           {nav.name}
                        </Link>
                     </li>
                  })}
               </ul>
            </div>
         </div>

         <div className={styles.floater}>
            <div className={`${styles.floater1}`}>
               <Link className={styles.floaterLink} to="/paper-submission">
                  Submit Papers
               </Link>
            </div>

            <div className={`${styles.floater2}`}>
               <Link className={styles.floaterLink} to="/schedule">
                  Important Dates
               </Link>
            </div>
         </div>

      </>
   );
}

export default Navbar;
