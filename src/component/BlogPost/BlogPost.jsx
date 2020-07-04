import React, { Fragment } from "react";
import Styled from "styled-components";

const StyledHead = Styled.h1`
background-color: pink;
`;
function BlogPost() {
    return (
        <Fragment>
            <StyledHead>Blog Post</StyledHead>
            <div>Post</div>
            <div className="image">
                <img src="/" />
            </div>
            <div className="content">
                <p>Dummy title</p>
                <p>Body Here</p>
            </div>
        </Fragment>
    );
}

export default BlogPost;
