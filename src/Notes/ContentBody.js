import React from "react";
import AddModal from "../AddModal";
import ShowContent from "./ShowContent";
import {getContent, getNotes, getToDos} from "../DBUtils/LocalStorageUtils";

export default class ContentBody extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        const dataAsJSONString = `[{"key":"1", "title":"Note Title","subTitle":"Note's Sub-Title","content":"Actual note content"}, {"key":"2", "title":"Note 2 Title","subTitle":"2 Note's Sub-Title","content":"Actual note 2 content"}]`;
        // const dataAsJSONObject = getContent(props.sectionData.typeKey);
        const dataAsJSONObject = JSON.parse(dataAsJSONString);
        this.state = { dataAsJSONObject: dataAsJSONObject, searchKey: "" };
        this.handleSearchKeyChange = this.handleSearchKeyChange.bind(this);
    }

    handleSearchKeyChange(event) {
        const currentInput = event.target.value;
        console.log(currentInput);
        this.setState({ searchKey: currentInput });
    }

    render() {
        return (
            <div className={this.props.sectionData.navTabClassName} id={this.props.sectionData.navContentID} role="tabpanel" aria-labelledby={this.props.sectionData.navItemID}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col pb-2">
                            <nav className="navbar navbar-white justify-content-between">
                                <div className="h4">{this.props.sectionData.sectionTitle}</div>
                                <div>
                                    <form className="form-inline">
                                        <button type="button" className="btn btn-outline-secondary m" data-toggle="modal" data-target="#noteAddModal">{this.props.sectionData.addButtonName}</button>
                                        <input className="form-control my-auto mx-2" type="search" placeholder="Search title"
                                            aria-label="Search" value={this.state.searchKey} onChange={this.handleSearchKeyChange} />
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <ShowContent dataAsJSONObject={this.state.dataAsJSONObject} searchKey={this.state.searchKey} />
                </div>
                <AddModal />
            </div>
        );
    }
}