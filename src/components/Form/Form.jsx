import { useState } from "react"
import { FormStyled } from "./FormStyled"
import img from "../../assets/logorickandmorty.png"


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

    return (
        <FormStyled>
            <div>
                <img src={img} alt='logo-rick-and-morty'/>
            </div>
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
        </FormStyled>
    )
}