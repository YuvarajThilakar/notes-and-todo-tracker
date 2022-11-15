import React from "react";
export class CategoryDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: "",
            dropButtonName: "Category",
            categories: props.categories
        }
        this.props = props;
        this.handleDropDownSelect = this.handleDropDownSelect.bind(this);
    }

    handleDropDownSelect(event) {
        const selectedCategory = event.target.getAttribute("value");
        this.setState({
            selectedCategory: selectedCategory,
            dropButtonName: selectedCategory
        }, () => {
            if (this.props.elevateSelectedCategory) {
                this.props.elevateSelectedCategory(this.state.selectedCategory);
            }
        });
    }

    render() {
        return (
            <div class="btn-group mr-2">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="categoryDropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" category={this.state.selectedCategory}>
                    {(() => {
                        if(!this.state.selectedCategory || this.state.selectedCategory.length === 0)
                        {
                            return this.state.dropButtonName; 
                        }
                        return this.state.selectedCategory;
                    })()}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" onClick={this.handleDropDownSelect}>
                    {
                        this.state.categories.map((data) => {
                            return <a class="dropdown-item" value={data}>{data}</a>
                        })
                    }
                </div>
            </div>)
    }
}