import NoteBody from "./Notes/NoteBody";

export default function Body() {

    const notesSectionData = {
        sectionTitle : "Notes",
        addButtonName : "Add Notes",
        navContentID : "noteBody",
        navItemID : "note-body-tab",
        navTabClassName : "tab-pane fade show active"
    };
    const todoSectionData = {
        sectionTitle : "ToDos",
        addButtonName : "Add ToDo",
        navContentID : "todoBody",
        navItemID : "todo-body-tab",
        navTabClassName : "tab-pane fade show"
    };

    return (
        <div className="row mx-2 mt-2 border">
            <div className="container-fluid">
                <div className="row p-2">
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id={notesSectionData.navItemID} data-toggle="tab" href={"#" + notesSectionData.navContentID} role="tab" aria-controls={notesSectionData.navContentID} aria-selected="true">Notes</a>
                            <a class="nav-item nav-link" id={todoSectionData.navItemID} data-toggle="tab" href={"#" + todoSectionData.navContentID} role="tab" aria-controls={todoSectionData.navContentID} aria-selected="false">ToDos</a>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div class="col tab-content bg-white">
                        <NoteBody sectionData={notesSectionData}/>
                        <NoteBody sectionData={todoSectionData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}