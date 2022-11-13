export default function Content(props) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <div className="card border-info">
                <div className="card-body">
                    <div className="h4 card-title">
                        {props.data.title}
                        <span class="badge badge-pill badge-info float-right">{props.data.contentType}</span>
                    </div>
                    <hr />
                    <p className="card-text">{props.data.content}</p>
                    {(() => {
                        if (props.data.contentType === "todos") {
                            <span class="badge badge-pill badge-info">Due date</span>
                        }
                    })()}
                </div>
            </div>
        </div>
    )
}