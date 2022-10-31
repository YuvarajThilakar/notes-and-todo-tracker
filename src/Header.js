export default function Header(props) {
    const name = props.name;
    return (
        <div className="row m-2 border">
            <div className="col bg-light text-dark">
                <div className="h3 text-center font-weight-bold">{name}</div>
            </div>
        </div>
    );
}