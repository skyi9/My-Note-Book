import React, { useContext, useRef, useState } from 'react'
import MyContext from '../Context/MyContext'

const AddNotes = () => {

    const context = useContext(MyContext)
    const { addNote } = context

    const [state, setstate] = useState({ title: "", description: "", tag: "" })

    const handelChange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }
    const ref = useRef(null)

    const handleClick = (e) => {
        e.preventDefault();
        addNote(state.title, state.description, state.tag)
        // console.log(state);
        setstate({ title: "", description: "", tag: "" })
        // ref.current.click()

    }
    // console.log(state);

    return (
        <>
            <div className='container my-4'>
                <h2>Add Your Notes</h2>
                <div className="mb-2">
                    <label htmlFor="text" className="form-label fs-2">Title</label>
                    <input onChange={handelChange} value={state.title} name='title' type="text" className="form-control" id="title" placeholder='Eg: Marvels' />
                </div>
                <div className="mb-2">
                    <label htmlFor="text" className="form-label fs-2">Description</label>
                    <textarea onChange={handelChange} value={state.description} name='description' className="form-control" id="description" rows="5"></textarea>
                </div>
                <div className="mb-2">
                    <label htmlFor="text" className="form-label fs-2">Tag</label>
                    <input onChange={handelChange} value={state.tag} name='tag' type="text" className="form-control" id="tag" placeholder='Eg: Favourite' />
                </div>
                <div className="mb-2">
                    <label htmlFor="formFile" className="form-label fs-2">Upload Image</label>
                    <input className="form-control" type="file" id="image" />
                </div>
                <button onClick={handleClick} style={{ width: '10rem' }} type="submit" className="btn btn-primary mt-3 fs-4">Add Note</button>
            </div>

        </>
    )
}

export default AddNotes
