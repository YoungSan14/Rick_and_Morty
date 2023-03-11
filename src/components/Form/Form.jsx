import { useState } from "react"
import styled from "styled-components"

const DivStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    width: 100vw;
    color: white;
    form{
        display: flex;
        flex-direction: column;
        align-items: start;
        border-radius: 20px;
        padding: 5rem;
        /* background-image: radial-gradient(circle, rgba(36, 49, 96, 0.9), rgba(29, 41, 79, 0.9), rgba(23, 33, 62, 0.9), rgba(18, 26, 46, 0.9), rgba(13, 17, 31, 0.9)); */
        background-image: linear-gradient(to top, rgba(187, 239, 85, 0.9), rgba(0, 189, 127, 0.9), rgba(0, 129, 137, 0.9), rgba(0, 69, 98, 0.9), rgba(13, 17, 31, 0.9));
        label{
            margin: 2rem 1rem 0 0;
            padding-bottom: 1rem;
        }
        button{
        align-self: center;
        padding: 10px;
        margin-top: 2rem;
        margin-bottom: 2rem;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        background-color: #81D15E;
        transition: background-color 0.5s linear 0.2s;
        font-weight: 700;
        color: white;
    }
    button:hover{
        background-color: #BBEF55;
    }
    .base{
        border: 1px solid white;
    }
    .valid{
        border: 2px solid #BBEF55;
    }
    .invalid{
        border: 2px solid #ef233c;
    }
    }
`;

const validation = (form, error, setError) => {
    // const expReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (form.email){
        const expRegEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        if(!expRegEmail.test(form.email)){
            setError({ ...error, email: 'El email ingresado no es valido' })
        }else{
            setError({ ...error, email: ''})
        }
    }
    else{
        const expRegPass = /^(?=.*\d)[a-zA-Z\d]{6,10}$/i;
        if(!expRegPass.test(form.password)){
            setError({ ...error, password: 'Deve tener 6 caracteres y al menos un numero'})
        }else{
            setError({ ...error, password: ''})
        }
    }
}

export default function Form(){
    const [ form , setForm ] = useState({
        email: '',
        password: '',
    });
    const [ error , setError ] = useState({
        email: '',
        password: '',
    });
    const [ changeForm , setChangeForm ] = useState({
        email: false,
        password: false,
    })

    const handleChange = (e) =>{
        const inputType = e.target.type;
        const inputValue = e.target.value;
        // console.log(form[inputType])
        setForm({ ...form, [inputType]: inputValue});
        setChangeForm({ ...changeForm, [inputType]: true})
        validation({...form, [inputType]: inputValue}, error, setError);
        // if(form[inputType] === ""){setChangeForm({ ...changeForm, [inputType]: false})}
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <DivStyled>
            <form>
                <label>Usuario:</label>
                    <input 
                        type='email' 
                        name='username' 
                        onChange={handleChange} 
                        value={form.email}
                        className={(!changeForm.email) ? 'base' : (!error.email) ? 'valid' : 'invalid'}
                    />
                    {/* {(error.email) ? (
                        <span style={{fontSize: '14px', color: '#ef233c', position: 'absolute', top: '33.5%'}}>
                            {`${error.email}`}
                        </span>
                    ):(
                        <></>
                    )} */}
                <label>Contraseña:</label>
                    <input 
                        type='password' 
                        name='password' 
                        onChange={handleChange} 
                        value={form.password}
                        className={(!changeForm.password) ? 'base' : (!error.password) ? 'valid' : 'invalid'}
                    />   
                    {/* {(error.password) ? (
                        <span style={{fontSize: '14px', color: '#ef233c', position: 'absolute', bottom: '47.5%'}}>
                            {`${error.password}`}
                        </span>
                    ):(
                        <></>
                    )} */}
                <button type='submit' onClick={handleSubmit}>Registrarse</button>
            </form>
        </DivStyled>
    )
}