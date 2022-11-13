import React from "react"
import Content from './Content'

export default function ShowContent(props) {
    const searchKey = props.searchKey;
    const dataList = props.dataAsJSONObject.map((data) => {
        if (data.title.includes(searchKey)) {
            return <Content data={data}/>
        }
    });

    return (
        <div className="row">
            {dataList}
        </div>
    );
}