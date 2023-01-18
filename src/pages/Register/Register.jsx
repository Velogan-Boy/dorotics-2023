import React from "react"
import Heading from '../../components/UI/Heading/Heading';
import SubHeading from '../../components/UI/SubHeading/SubHeading';
import RegisterTable from '../../components/RegisterTable/RegisterTable'
import styles from "./Register.module.css";
import FloatNextButton from "../../components/FloatNextButton/FloatNextButton";
import Footer from "../../components/Footer/Footer";
import { register_description } from "../../data";

const Register = () => {

    return (
        <>
            <div>
                <Heading text="REGISTER" />
                <div className={styles.wrapper} >
                    <SubHeading text="PAPER REGISTRATION" />
                    <p className={styles.description}>{register_description}</p>
                    <RegisterTable />
                </div>
                <FloatNextButton link="/keynote" />
            </div>
            <Footer />
        </>
    )
}

export default Register