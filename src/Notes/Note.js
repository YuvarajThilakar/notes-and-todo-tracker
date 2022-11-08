export default function Content(props) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <div className="card border-info">
                <div className="card-body">
                    <div className="h4 card-title">{props.title}</div>
                    <hr/>
                    <p className="card-text">{props.content}</p>
                    <a href="#" className="card-link">External link</a>
                </div>
            </div>
        </div>
    )
}