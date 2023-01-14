import React from "react"
import Heading from '../../components/UI/Heading/Heading';
import SubHeading from '../../components/UI/SubHeading/SubHeading';
import RegisterTable from '../../components/RegisterTable/RegisterTable'
import styles from "./Register.module.css";


const Register = () => {

    return (
        <div>
            <Heading text="REGISTER" />
            <div className={styles.wrapper} >
                <SubHeading text="PAPER REGISTRATION" />
                <RegisterTable />
            </div>

        </div>
    )
}

export default Register