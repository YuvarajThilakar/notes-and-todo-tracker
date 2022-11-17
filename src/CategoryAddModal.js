import React from "react";
import $ from 'jquery';

export default function CategoryAddModal(props) {

    const colors = ["primary", "secondary", "success", "danger", "warning", "info"]
    const colorsDropDown = colors.map((color) => {
        return <a class={"dropdown-item text-" + color} value={"text-" + color}>{color}</a>;
    });

    function handleSave() {
        const category = new Object();
        category.categoryName = $("#categoryName").val();
        category.color = $("#colorDropdownMenuIcon").attr("color");
        console.log(JSON.stringify(category));
        resetValues();
    }

    function resetValues() {
        $("#categoryName").val("");
        const colorDropdownMenuIcon = $("#colorDropdownMenuIcon");
        const selectedColor = colorDropdownMenuIcon.attr("color");
        colorDropdownMenuIcon.removeClass(selectedColor);
        colorDropdownMenuIcon.addClass("text-dark");
        colorDropdownMenuIcon.attr("color", "text-dark");
    }

    function handleColorSection(event) {
        const selectedColorClass = event.target.attributes.value.value;
        const colorDropdownMenuIcon = $("#colorDropdownMenuIcon");
        const previouslySelectedColorClassName = colorDropdownMenuIcon.attr("color");
        colorDropdownMenuIcon.removeClass(previouslySelectedColorClassName);
        colorDropdownMenuIcon.addClass(selectedColorClass);
        colorDropdownMenuIcon.attr("color", selectedColorClass);
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
                                <button className="btn btn-outline-secondary font-weight-bold text-dark" type="button" id="colorDropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bi bi-palette-fill font-weight-bold text-dark" id="colorDropdownMenuIcon" color="text-dark"></i>
                                </button>
                                <div class="dropdown-menu border border-dark" onClick={handleColorSection} aria-labelledby="colorDropdownMenuButton">
                                    {colorsDropDown}
                                </div>
                            </div>
                            <input type="text" className="form-control" id="categoryName" aria-describedby="category" placeholder="Category name" />
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