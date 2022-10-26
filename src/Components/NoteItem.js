import React, { useContext } from 'react'
import MyContext from '../Context/MyContext'

const NoteItem = (props) => {

    const context = useContext(MyContext)
    const { deleteNote } = context

    const { note, updatenote } = props;
    return (

        <div className='col-md-3'>
            <div className="card mb-3" >
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className=" badge rounded-pill bg-danger">{note.tag}</span>
                </div>

                {/* <img src={props.img} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                </div>
                <div className='d-flex justify-content-end mb-2'>
                    <i onClick={() => updatenote(note)} className="fa-solid fa-pen-to-square me-3"></i>
                    <i onClick={() => deleteNote(note._id)} className="fa-solid fa-trash-can me-3"></i>
                </div>
            </div>
        </div>

    )
}

export default NoteItem

