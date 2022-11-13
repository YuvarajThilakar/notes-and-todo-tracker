import ContentBody from "./Notes/ContentBody";
import CategoryAddModal from "./CategoryAddModal";

export default function Body() {

    const notesSectionData = {
        typeKey: "notes",
        sectionTitle: "Notes",
        addButtonName: "Add Notes",
        navContentID: "noteBody",
        navItemID: "note-body-tab",
        navTabClassName: "tab-pane fade show active"
    };
    const todoSectionData = {
        typeKey: "todos",
        sectionTitle: "ToDos",
        addButtonName: "Add ToDo",
        navContentID: "todoBody",
        navItemID: "todo-body-tab",
        navTabClassName: "tab-pane fade show"
    };

    return (
        <div className="row mx-2 mt-2 border">
            <div className="container-fluid">
                <div className="row p-2">
                    <div className="col-8">
                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id={notesSectionData.navItemID} data-toggle="tab" href={"#" + notesSectionData.navContentID} role="tab" aria-controls={notesSectionData.navContentID} aria-selected="true">Notes</a>
                                <a class="nav-item nav-link" id={todoSectionData.navItemID} data-toggle="tab" href={"#" + todoSectionData.navContentID} role="tab" aria-controls={todoSectionData.navContentID} aria-selected="false">ToDos</a>
                            </div>
                        </nav>
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-outline-secondary" data-toggle="modal" data-target="#categoryAddModal">Add Category</button>
                        <CategoryAddModal />
                    </div>
                </div>
                <div className="row">
                    <div class="col tab-content bg-white">
                        <ContentBody sectionData={notesSectionData} />
                        <ContentBody sectionData={todoSectionData} />
                    </div>
                </div>
            </div>
        </div >
    )
}