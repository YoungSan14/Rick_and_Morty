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
        background-image: radial-gradient(circle, rgba(36, 49, 96, 0.9), rgba(29, 41, 79, 0.9), rgba(23, 33, 62, 0.9), rgba(18, 26, 46, 0.9), rgba(13, 17, 31, 0.9));
        /* background-image: linear-gradient(to top, rgba(187, 239, 85, 0.9), rgba(0, 189, 127, 0.9), rgba(0, 129, 137, 0.9), rgba(0, 69, 98, 0.9), rgba(13, 17, 31, 0.9)); */
        h2{
            /* margin-top: 1rem; */
            /* font-family: 'Press Start 2P';
            font-size: .9rem; */
            margin-bottom: 1rem;
        }
        label{
            margin-top: .5rem;
            /* padding-bottom: 1rem; */
        }
        input{
            height: 1.7rem;
            padding-left: 10px;
            background: linear-gradient(#040207, rgba(15,20,36,0.5));
            border-radius: 10px;
            border: 1px solid white;
            color: white;
            outline: none;
        }
        button{
        align-self: center;
        padding: 10px;
        margin-top: 1rem;
        margin-bottom: 1rem;
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

const validation = (inputType, form, error, setError) => {
    // const expReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (inputType === 'email'){
        const expRegEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        if(!expRegEmail.test(form.email)){
            if(form.email === '') setError({ ...error, email: 'ejemplo@gmail.com'})
            else setError({ ...error, email: 'El email ingresado no es valido' })
        }else{
            setError({ ...error, email: ''})
        }
    }else if(inputType === 'password'){
        const expRegPass = /^(?=.*\d)[a-zA-Z\d]{6,10}$/i;
        if(!expRegPass.test(form.password)){
            if(form.password === '') setError({ ...error, password: 'Deve tener 6 caracteres o mas' })
            else if(!form.password.match(/[0-9]/i)) setError({ ...error, password: 'Deve tener al menos un numero'})
            else if(form.password.length > 10) setError ({ ...error, password: 'Como maximo 10 caracteres' })
        }else{
            setError({ ...error, password: ''})
        }
    }
}

export default function Form({ login }){
    const [ form , setForm ] = useState({
        email: '',
        password: '',
    });
    const [ changeForm , setChangeForm ] = useState({
        email: false,
        password: false,
    })
    const [ error , setError ] = useState({
        email: '',
        password: '',
    });
    
    const handleChange = (e) =>{
        const inputType = e.target.type;
        const inputValue = e.target.value;
        // console.log(form[inputType])
        setForm({ ...form, [inputType]: inputValue});
        validation( inputType, {...form, [inputType]: inputValue}, error, setError);
        setChangeForm({ ...changeForm, [inputType]: true});
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     login();
    // }

    return (
        <DivStyled>
            <form onSubmit={() => login(form)}>
            <h2>Iniciar Sesión</h2>
                <label>Usuario:</label>
                {(error.email) ? (
                    <span style={{paddingBottom: '5px', fontSize: '12px', color: '#ef233c'}}>
                        {`${error.email}`}
                    </span>
                ):(
                    <span style={{paddingBottom: '5px', fontSize: '12px', opacity: '0'}}>error</span>
                )}
                <input 
                    type='email' 
                    name='username' 
                    onChange={handleChange} 
                    value={form.email}
                    className={(!changeForm.email) ? 'base' : (!error.email) ? 'valid' : 'invalid'}
                />
                <label>Contraseña:</label>
                {(error.password) ? (
                    <span style={{paddingBottom: '5px', fontSize: '12px', color: '#ef233c', position: 'relative'}}>
                        {`${error.password}`}
                    </span>
                ):(
                    <span style={{paddingBottom: '5px', fontSize: '12px', opacity: '0'}}>error</span>
                )}
                <input 
                    type='password' 
                    name='password' 
                    onChange={handleChange} 
                    value={form.password}
                    className={(!changeForm.password) ? 'base' : (!error.password) ? 'valid' : 'invalid'}
                />   
                <button type='submit'>Iniciar Sesión</button>
            </form>
        </DivStyled>
    )
}