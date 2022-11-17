import Header from "./Header";
import React from "react";
import Body from "./Body";

export default function App() {
    return (
        <div className="container-fluid">
            <Header name="Welcome" />
            <Body />
        </div>
    );
}