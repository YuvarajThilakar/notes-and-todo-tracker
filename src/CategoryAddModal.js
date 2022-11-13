import React from "react";
import $ from 'jquery';

export default function CategoryAddModal(props) {

    const colors = ["primary", "secondary", "success", "danger", "warning", "info"]
    const colorsDropDown = colors.map((color) => {
        return <a class={"dropdown-item bg-" + color} value={"bg-" + color}>{color}</a>;
    });

    function handleSave() {
        const category = new Object();
        category.categoryName = $("#categoryName").val();
        category.color = $("#colorDropdownMenuButton").attr("color");
        console.log(JSON.stringify(category));
        resetValues();
    }

    function resetValues() {
        $("#categoryName").val("");
        const colorDropdownMenuButton = $("#colorDropdownMenuButton");
        const selectedColor = colorDropdownMenuButton.attr("color");
        colorDropdownMenuButton.removeClass(selectedColor);
        colorDropdownMenuButton.addClass("bg-light");
        colorDropdownMenuButton.attr("color", "bg-light");   
    }

    function handleColorSection(event) {
        const selectedColorClass = event.target.attributes.value.value;
        const colorDropdownMenuButton = $("#colorDropdownMenuButton");
        const previouslySelectedColorClassName = colorDropdownMenuButton.attr("color");
        colorDropdownMenuButton.removeClass(previouslySelectedColorClassName);
        colorDropdownMenuButton.addClass(selectedColorClass);
        colorDropdownMenuButton.attr("color", selectedColorClass);
        console.log(event);
    }

    return (
        <div className="modal fade" data-backdrop="static" data-keyboard="false" id="categoryAddModal" tabIndex={-1} aria-labelledby="categoryAddModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="categoryAddModalLabel">Add Category</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={resetValues}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <label htmlFor="message-text" className="col-form-label">Category:</label>
                        <div className="input-group py-2">
                            <div className="input-group-prepend">
                                <button class="btn btn-outline-secondary dropdown-toggle font-weight-bold text-dark bg-light" type="button" id="colorDropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" color="bg-light">
                                    Color
                                </button>
                                <div class="dropdown-menu border border-dark" onClick={handleColorSection} aria-labelledby="colorDropdownMenuButton">
                                    {colorsDropDown}
                                </div>
                            </div>
                            <input type="text" className="form-control" id="categoryName" aria-describedby="category" placeholder="Category name"/>
                        </div>
                        <div class="btn-group mr-2">

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={resetValues}>Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}