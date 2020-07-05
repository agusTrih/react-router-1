import React, { Fragment, Component } from "react";
import Styled from "styled-components";
import Post from "../Post/Post";

const StyledHead = Styled.h1`
background-color: pink;
`;

export default class BlogPost extends Component {
    state = {
        post: [],
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    post: json,
                });
            });
    }
    render() {
        return (
            <Fragment>
                <StyledHead>Blog Post</StyledHead>

                {this.state.post.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            title={post.title}
                            desc={post.body}
                        />
                    );
                })}
            </Fragment>
        );
    }
}
