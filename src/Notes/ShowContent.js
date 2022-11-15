import React from "react"
import Content from './Content'

export default function ShowContent(props) {
    const searchKey = props.searchKey.toLowerCase();
    const selectedCategory = props.selectedCategory;
    const dataList = props.dataAsJSONObject.map((data) => {
        if (data.title.toLowerCase().includes(searchKey) && data.category.includes(selectedCategory)) {
            return <Content data={data}/>
        }
    });

    return (
        <div className="row">
            {dataList}
        </div>
    );
}