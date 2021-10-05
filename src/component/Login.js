import React from "react";
import * as yup from 'yup';
import PropTypes from 'prop-types';

import "./Login.css"
import Logo from "../images/Logo.png";
import {ErrorMessage, Formik, Form as FormikForm, Field} from 'formik';
import { Link } from "react-router-dom";

const validations = yup.object().shape({
    user: yup.string().email().required(),
    password: yup.string().min(6).required()
})
const handleSubmit = Values => alert(JSON.stringify(Values))
const initialValues = {user:'', password: ''}

const Login = ()=>(
    <Formik initialValues = {initialValues} onSubmit={handleSubmit} validationSchema ={validations}>
        <FormikForm className = "Form">
            <img src={Logo} alt="Logo" width = "40%"/>
            <h1 className ="Form-Welcome">Bem Vindo!</h1>
            <h5 className ="Form-Info">Digite Seu email e sua Senha para acessar o Site</h5>
            <div className = "Form-Group">
            <Field className ="Form-Field" name ="user"  placeholder ="email" type ="text" />
            <br/>
            <span className ="Form-Alert">
            <ErrorMessage className ="Form-Error" component ="span" name="user"/>
            </span>
            </div>
            
            <div className = "Form-Group">
            <Field className ="Form-Field" name ="password" placeholder ="Senha" type ="password" />
            <br/>
            <span className ="Form-Alert">
            <ErrorMessage className ="Form-Error" component ="span" name="password"/>
            </span>
            </div>

            <button type="submit" class="btn btn-primary">Login</button>
            
            <br/>
            
            <Link to={"/forgotpassword"} class="link-warning">Esqueceu a sua Senha?</Link>
    

        </FormikForm>
    
    </Formik>       
)

Login.propTypes ={
    initialValues: PropTypes.object.isRequired,
    onsubmit: PropTypes.func.isRequired

}

export default Login;