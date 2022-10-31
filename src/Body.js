import React from "react";
import AddModal from "./AddModal";
import ShowNotes from "./Notes/ShowNotes";

export default class Body extends React.Component {

    constructor(props) {
        const notesAsJSONString = `[{"key":"1", "title":"Note Title","subTitle":"Note's Sub-Title","content":"Actual note content"}, {"key":"2", "title":"Note 2 Title","subTitle":"2 Note's Sub-Title","content":"Actual note 2 content"}]`;
        const notesAsJSONObject = JSON.parse(notesAsJSONString);
        super(props);
        this.state = { notesAsJSONObject: notesAsJSONObject, searchKey: "" };
        this.handleSearchKeyChange = this.handleSearchKeyChange.bind(this);
    }

    handleSearchKeyChange(event) {
        const currentInput = event.target.value;
        console.log(currentInput);
        this.setState({ searchKey: currentInput });
    }

    render() {
        return (
            <div>
                <div className="row m-2 border bg-light">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col bg-light pb-2">
                                <nav className="navbar navbar-light justify-content-between">
                                    <div className="h4">My Notes</div>
                                    <div>
                                        <form className="form-inline">
                                            <button type="button" className="btn btn-outline-secondary m" data-toggle="modal" data-target="#noteAddModal">Add Note</button>
                                            <input className="form-control my-auto mx-2" type="search" placeholder="Search note title"
                                                aria-label="Search" value={this.state.searchKey} onChange={this.handleSearchKeyChange} />
                                        </form>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <ShowNotes notesAsJSONObject={this.state.notesAsJSONObject} searchKey={this.state.searchKey} />
                    </div>
                </div>
                <AddModal />
            </div>
        );
    }
}