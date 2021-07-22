import React, {useEffect, useState} from "react"
import axios from "axios"
import {Link, navigate} from '@reach/router'



const CreateAuthor = props => {


    const {submitState, setSubmitState} = props
    
    const [formState, setFormState] = useState({
        name:""
    })

    const [validState, setValidState] = useState({})


    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/author", formState)
        .then(res => {
            setFormState({
                name:""
            })
            // setSubmitState(!submitState)
            navigate('/')
        })
        .catch(err => {
            console.log(err)
            const {errors} = err.response.data
            let errorObj = {}
            for(let [key,value] of Object.entries(errors)){
                errorObj[key] = value.message
            }
            setValidState(errorObj)
        })
    
    
    
    }



    return (
        <div>
            <Link to="/">Home</Link>
            <h2>Add a New Author</h2>
            <form onSubmit={submitHandler}>
                <p>
                Name:
                    <input type='text' name='name' id="" value={formState.name} onChange={changeHandler}></input>
                    {(validState.name) ? <p>{validState.name} </p>: null}
                </p>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateAuthor;