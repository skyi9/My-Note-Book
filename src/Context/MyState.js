import { useState } from "react"
import MyContext from "./MyContext"

const MyState = (props) => {

    const host = 'http://localhost:5000/mynotebook/notes'
    const initNotes = []

    const [notes, setNotes] = useState(initNotes);

    const fetchnotes = async () => {
        const url = `${host}/fetchnotes`
        const response = await fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'user-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwMzU3YjVkODFkYWU5NGFjNTRiMGUyIn0sImlhdCI6MTY2MTE2NjY2Nn0.FqcJzYYdb8SCkA4OtNeFxiiwFD6Y2t6HZbUNEQX8P4w'
            }
        });
        const json = await response.json();
        setNotes(json)
    }

    const addNote = async (title, description, tag) => {

        const url = `${host}/addnote`
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'user-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwMzU3YjVkODFkYWU5NGFjNTRiMGUyIn0sImlhdCI6MTY2MTE2NjY2Nn0.FqcJzYYdb8SCkA4OtNeFxiiwFD6Y2t6HZbUNEQX8P4w'
            },
            body: JSON.stringify({ title, description, tag })
        });

        const json = await response.json();
        setNotes(notes.concat(json));
    }

    const deleteNote = async (id) => {

        const url = `${host}/deletenote/${id}`
        const response = await fetch(url, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'user-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwMzU3YjVkODFkYWU5NGFjNTRiMGUyIn0sImlhdCI6MTY2MTE2NjY2Nn0.FqcJzYYdb8SCkA4OtNeFxiiwFD6Y2t6HZbUNEQX8P4w'
            }
        })
        const newnotes = notes.filter((note) => { return note._id !== id })
        setNotes(newnotes)

    }

    const editNote = async (id, title, description, tag) => {
        const url = `${host}/updatenote/${id}`
        const response = await fetch(url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'user-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwMzU3YjVkODFkYWU5NGFjNTRiMGUyIn0sImlhdCI6MTY2MTE2NjY2Nn0.FqcJzYYdb8SCkA4OtNeFxiiwFD6Y2t6HZbUNEQX8P4w'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json()
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < notes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <MyContext.Provider value={{ notes, addNote, deleteNote, fetchnotes, editNote }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState