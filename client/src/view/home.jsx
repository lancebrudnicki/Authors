import React, {useState} from "react";
import ListAuthor from "../components/ListAuthor";
import Header from "./header";
import {Link} from '@reach/router'



const Home = props => {

    const [submitState, setSubmitState] = useState(false)



    return(
        <div>
            <Header/>
            <Link path to='/newauthor'>Create New Author</Link>
            <ListAuthor submitState={submitState} setSubmitState={setSubmitState}/>
        </div>
    )
}

export default Home;