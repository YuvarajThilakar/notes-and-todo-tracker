import React from "react"
import Content from './Note'

export default function ShowContent(props) {
    const searchKey = props.searchKey;
    const dataList = props.dataAsJSONObject.map((data) => {
        if (data.title.includes(searchKey)) {
            return <Content title={data.title} subTitle={data.subTitle} content={data.content} />
        }
    });

    return (
        <div className="row">
            {dataList}
        </div>
    );
}