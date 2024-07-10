import { useEffect, useState } from "react";
import db from "../appwrite/databases";
import NoteForm from "../components/NoteForm";
import { Query } from "appwrite";
import Note from "../components/Note";
import ThemeOption from "../components/ThemeOption";
import LogoutButton from "../components/LogoutButton";

function Notes() {
    const [notes, setNotes] = useState([]);
    // console.log(notes)

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const response = await db.notes.list([Query.orderDesc("$createdAt")]);
        // console.log(response)
        setNotes(response.documents);
    };

    return (
        <>
            <div>
                <h1>✍️ My Todo List</h1>
            </div>

            <div className="theme-options">
                <ThemeOption theme="dark" />
                <ThemeOption theme="light" />
                <ThemeOption theme="purple" />
            </div>

            <NoteForm setNotes={setNotes} />

            <div>
                {notes.map((note) => (
                    <Note key={note.$id} setNotes={setNotes} noteData={note} />
                ))}
            </div>

            <LogoutButton />
        </>
    );
}

export default Notes;