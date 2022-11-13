export function CategoryDropDown(props) {
    const dropDownItems = props.categories.map((data) => {
        return <a class="dropdown-item" href="#">{data}</a>
    });
    return (
        <div class="btn-group mr-2">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Category
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {dropDownItems}
            </div>
        </div>
    )
}