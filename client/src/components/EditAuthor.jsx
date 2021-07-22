import React, {useEffect, useState} from "react"
import axios from "axios"
import {Link, navigate} from '@reach/router'




const EditAuthor = props => {

    const {author_id} = props
    
    const [formState, setFormState] = useState({
        name:""
    })
    
    const [validState, setValidState] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${author_id}`)
            .then(res => setFormState(res.data.oneAuthor[0]))
            .catch(err => console.log(err))
    },[])


    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }


    const submitHandler = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${author_id}`, formState)
        .then(res => navigate(`/`))
        .catch(err => {
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
            <h2>Update Author</h2>
            <form onSubmit={submitHandler}>
                <p>
                Name:
                    <input type='text' name='name' id="" value={formState.name} onChange={changeHandler}></input>
                    {(validState.name) ? <p>{validState.name} </p>: null}
                </p>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditAuthor;