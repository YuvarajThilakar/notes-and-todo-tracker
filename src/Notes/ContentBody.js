import React from "react";
import AddModal from "../AddModal";
import ShowContent from "./ShowContent";
import { CategoryDropDown } from "../CategoryDropDown";

export default class ContentBody extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        const dataAsJSONString = `[{"key":"1", "title":"Note Title","subTitle":"Note's Sub-Title","content":"Actual note content","category":"Forte"}, {"key":"2", "title":"Note 2 Title","subTitle":"2 Note's Sub-Title","content":"Actual note 2 content","category":"OTSP"}]`;
        // const dataAsJSONObject = getContent(props.sectionData.typeKey);
        const categories = ["Forte", "OTSP"];
        const dataAsJSONObject = JSON.parse(dataAsJSONString);
        this.state = {
            dataAsJSONObject: dataAsJSONObject,
            searchKey: "",
            categories: categories,
            addModalId: "add" + props.sectionData.sectionTitle + "modal",
            selectedCategory: ""
        };
        this.handleSearchKeyChange = this.handleSearchKeyChange.bind(this);
        this.elevateSelectedCategory = this.elevateSelectedCategory.bind(this);
        this.handleFilterClear = this.handleFilterClear.bind(this);
    }

    handleSearchKeyChange(event) {
        const currentInput = event.target.value;
        console.log(currentInput);
        this.setState({ searchKey: currentInput });
    }

    handleFilterClear()
    {
        this.setState({
            searchKey: "",
            selectedCategory : ""
        })
    }

    elevateSelectedCategory(selectedCategory) {
        this.setState({
            selectedCategory: selectedCategory
        })
        console.log(this);
    }

    render() {
        return (
            <div className={this.props.sectionData.navTabClassName} id={this.props.sectionData.navContentID} role="tabpanel" aria-labelledby={this.props.sectionData.navItemID}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <nav className="navbar navbar-white justify-content-between">
                                <div>
                                    <button type="button" className="btn btn-outline-secondary mr-2" data-toggle="modal" data-target={"#" + this.state.addModalId}>{this.props.sectionData.addButtonName}</button>
                                </div>
                                <div className="d-inline">
                                    <form className="form-inline">
                                        <CategoryDropDown selectedCategory={this.state.selectedCategory} elevateSelectedCategory={this.elevateSelectedCategory} categories={this.state.categories} />
                                        <input className="form-control my-auto mr-2" type="search" placeholder="Search title"
                                            aria-label="Search" value={this.state.searchKey} onChange={this.handleSearchKeyChange} />
                                        <button type="button" className="btn btn-outline-danger" onClick={this.handleFilterClear}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <ShowContent dataAsJSONObject={this.state.dataAsJSONObject} searchKey={this.state.searchKey} selectedCategory={this.state.selectedCategory} />
                </div>
                <AddModal categories={this.state.categories} sectionTitle={this.props.sectionData.sectionTitle} addModalId={this.state.addModalId} />
            </div>
        );
    }
}