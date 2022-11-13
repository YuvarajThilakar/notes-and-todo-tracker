import React from "react";
import $ from 'jquery';
import { CategoryDropDown } from "./CategoryDropDown";

export default function AddModal(props) {
    function handleSave() {
        const data = new Object();
        data.title = $("#" + props.addModalId + "title").val();;
        data.content = $("#" + props.addModalId + "content").val();

        console.log(JSON.stringify(data));
        clearValues();
    }

    function clearValues()
    {
        const title = $("#" + props.addModalId + "title").val("");
        const content = $("#" + props.addModalId + "content").val("");
    }

    return (
        <div className="modal fade" data-backdrop="static" data-keyboard="false" id={props.addModalId} tabIndex={-1} aria-labelledby={props.addModalId + "Label"} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={props.addModalId + "Label"}>Add {props.sectionTitle}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={clearValues}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group py-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Title</span>
                            </div>
                            <input type="text" className="form-control" id={props.addModalId + "title"} aria-describedby="title"/>
                        </div>
                        <div className="form-group py-2">
                            <label htmlFor="message-text" className="col-form-label">Description:</label>
                            <textarea className="form-control" id={props.addModalId + "content"} rows="3"></textarea>
                        </div>
                        <CategoryDropDown categories={props.categories} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={clearValues}>Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}