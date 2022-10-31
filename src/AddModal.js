import React from "react";
import $ from 'jquery';

export default function AddModal() {
    function handleSave() {
        const note = new Object();
        note.noteTitle = $("#addNoteTitle").val();;
        note.noteContent = $('#addNoteContent').val();

        console.log(JSON.stringify(note));
        clearNoteValues();
    }

    function clearNoteValues()
    {
        const noteTitle = $("#addNoteTitle").val("");
        const noteContent = $('#addNoteContent').val("");
    }

    return (
        <div className="modal fade" data-backdrop="static" data-keyboard="false" id="noteAddModal" tabIndex={-1} aria-labelledby="noteAddModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="noteAddModalLabel">Add Note</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={clearNoteValues}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group py-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Note title</span>
                            </div>
                            <input type="text" className="form-control" id="addNoteTitle" aria-describedby="noteTitle"/>
                        </div>
                        <div className="form-group py-2">
                            <label htmlFor="message-text" className="col-form-label">Message:</label>
                            <textarea className="form-control" id="addNoteContent" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={clearNoteValues}>Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}