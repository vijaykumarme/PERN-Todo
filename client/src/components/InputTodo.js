import React, { Fragment,useState } from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("")

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {description}
            const response = await fetch("http://localhost:5000/todos",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });
            
            window.location = "/"
        } catch(err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form onSubmit={onSubmitForm} className="d-flex my-5"> 
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                <button className="btn btn-success mx-2">Add</button>
            </form>
        </Fragment>
        
    )
}

export default InputTodo