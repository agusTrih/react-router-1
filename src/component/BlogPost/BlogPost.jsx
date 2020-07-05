import React, { Fragment } from "react";
import Styled from "styled-components";

const StyledHead = Styled.h1`
background-color: pink;
`;
const Card = Styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 20%;
margin-left: 20px;
&:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`;
function BlogPost() {
    return (
        <Fragment>
            <StyledHead>Blog Post</StyledHead>
            <Card>
                <div>Post</div>
                <div className="image">
                    <img src="https://placeimg.com/200/150/tech" alt="Tech" />
                </div>
                <div className="content">
                    <p>Dummy title</p>
                    <p>Body Here</p>
                </div>
            </Card>
        </Fragment>
    );
}

export default BlogPost;
