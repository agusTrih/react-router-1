import React, { useState, useEffect, Fragment } from "react";
import Post from "../Post/Post";
function FakeApi() {
    const [content, setContent] = useState([]);

    // i use fake Api comment
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((json) => {
                setContent(json);
            });
    }, []);
    return (
        <Fragment>
            {content.map((post) => (
                <Post title={post.email} desc={post.body} />
            ))}
        </Fragment>
    );
}

export default FakeApi;
