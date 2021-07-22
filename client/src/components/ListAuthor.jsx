import React, {useEffect, useState} from "react"
import axios from "axios"
import {Link} from '@reach/router'

const ListAuthor = props => {

    const {submitState, setSubmitState} = props

    const[listState, setListState] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setListState(res.data.allAuthors))
            .catch(err => console.log(err))
    },[submitState])


    const deleteHandler = (author_id) => {
        axios.delete(`http://localhost:8000/api/authors/${author_id}`)
            .then(res => setSubmitState(!submitState))
            .catch(err => console.log(err))
    }


    return(
        <div>
            {
                listState.map((author, i) => {
                    return(
                        <div key={i}>
                            {author.name}
                            <Link to={`/editauthor/${author._id}`}><button>Edit</button></Link>
                            <button onClick={() => deleteHandler(author._id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )

}
export default ListAuthor