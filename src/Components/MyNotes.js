import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteItem from './NoteItem'
import MyContext from '../Context/MyContext'

const MyNotes = () => {
    const context = useContext(MyContext)
    const { notes, fetchnotes, editNote } = context;
    useEffect(() => {
        fetchnotes()
    }, [])
    // console.log(notes);
    const [state, setstate] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const ref = useRef(null)
    const closeref = useRef(null)

    const handelChange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }

    const updatenote = (note) => {
        ref.current.click()
        setstate({ id: note._id, etitle: note.title, edescription: note.description, etag: note.tag })
    }

    const saveChanges = (e) => {
        editNote(state.id, state.etitle, state.edescription, state.etag)
        closeref.current.click()
    }
    // console.log(state);

    return (

        <>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-2">
                                <label htmlFor="text" className="form-label ">Title</label>
                                <input onChange={handelChange} value={state.etitle} name='etitle' type="text" className="form-control" id="etitle" placeholder='Eg: Marvels' />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="text" className="form-label">Description</label>
                                <textarea onChange={handelChange} value={state.edescription} name='edescription' className="form-control" id="edescription" rows="5"></textarea>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="text" className="form-label ">Tag</label>
                                <input onChange={handelChange} value={state.etag} name='etag' type="text" className="form-control" id="etag" placeholder='Eg: Favourite' />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={closeref} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={saveChanges} type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <h2 className='my-4 text-center'>My Notes</h2>
                <div className='row justify-content-start'>
                    {notes.map((note, index) => {
                        // debugger;
                        //console.log(index);
                        return <NoteItem note={note} key={index} updatenote={updatenote} />
                    })
                    }
                </div>
            </div>
        </>

    )
}

export default MyNotes
