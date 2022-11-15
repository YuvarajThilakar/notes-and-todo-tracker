import React from "react";
import $ from 'jquery';
import { CategoryDropDown } from "./CategoryDropDown";

export default class AddModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sectionTitle: props.sectionTitle,
            title: "",
            description: "",
            selectedCategory : ""
        }
        this.handleSave = this.handleSave.bind(this);
        this.clearValues = this.clearValues.bind(this);
        this.elevateSelectedCategory = this.elevateSelectedCategory.bind(this);
    }

    handleSave() {
        console.log(JSON.stringify(this.state));
        this.clearValues();
    }

    clearValues() {
        this.setState({
            title: "",
            description: ""
        })
    }

    elevateSelectedCategory(selectedCategory) {
        this.state.selectedCategory = selectedCategory;
        console.log(this);
    }

    render() {
        return (
            <div className="modal fade" data-backdrop="static" data-keyboard="false" id={this.props.addModalId} tabIndex={-1} aria-labelledby={this.props.addModalId + "Label"} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={this.props.addModalId + "Label"}>Add {this.state.sectionTitle}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group py-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Title</span>
                                </div>
                                <input type="text" className="form-control" onChange={(e) => { this.setState({ title: e.target.value }) }} aria-describedby="title" value={this.state.title} />
                            </div>
                            <div className="form-group py-2">
                                <label htmlFor="message-text" className="col-form-label">Description:</label>
                                <textarea className="form-control" onChange={(e) => { this.setState({ description: e.target.value }) }} rows="3" value={this.state.description}></textarea>
                            </div>
                            <CategoryDropDown elevateSelectedCategory={this.elevateSelectedCategory} categories={this.props.categories} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}