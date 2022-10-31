import React from "react"
import Note from './Note'

export default function ShowNotes(props) {
    const searchKey = props.searchKey;
    const notesList = props.notesAsJSONObject.map((note) => {
        if (note.title.includes(searchKey)) {
            return <Note title={note.title} subTitle={note.subTitle} content={note.content} />
        }
    });

    return (
        <div className="row">
            {notesList}
        </div>
    );
}