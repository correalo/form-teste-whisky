import React from "react";
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { NavLink } from 'react-bootstrap';

import "./ForgotPassword.css"
import Logo from "../images/Logo.png";
import {ErrorMessage, Formik, Form as FormikForm, Field} from 'formik';


const validations = yup.object().shape({
    user: yup.string().email().required(),
    
})

const ForgotPassword = ({handleSubmit , initialValues})=>(
    <Formik initialValues = {initialValues} onSubmit={handleSubmit} validationSchema ={validations}>
        <FormikForm className = "Form">
            <img src={Logo} alt="Logo" width = "40%"/>
            <h1 className ="Form-Welcome">Recupere sua Senha!</h1>
            <h5 className ="Form-Info">Digite Seu email e receba uma Senha provisória</h5>
            <div className = "Form-Group">
            <Field className ="Form-Field" name ="user"  placeholder ="email" type ="text" />
            <br/>
            <span className ="Form-Alert">
            <ErrorMessage className ="Form-Error" component ="span" name="user"/>
            </span>
            </div>

            <button type="button" class="btn btn-primary">Login</button>
            <br/>
            <NavLink>
            
            <a href="../component/RevalidatePassword" class="link-warning">Recadastrar sua Nova Senha</a>
            </NavLink>

        </FormikForm>
    
    </Formik>       
)

ForgotPassword.propTypes ={
    initialValues: PropTypes.object.isRequired,
    onsubmit: PropTypes.func.isRequired

}

export default ForgotPassword;