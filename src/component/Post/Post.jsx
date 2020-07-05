import React from "react";
import Styled from "styled-components";

const Card = Styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 20%;
margin-left: 20px;
&:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}`;

function Post(props) {
    return (
        <div>
            <Card>
                <div>Post</div>
                <div className="image">
                    <img src="https://placeimg.com/200/150/tech" alt="Tech" />
                </div>
                <div className="content">
                    <p>{props.title}</p>
                    <p>{props.desc}</p>
                </div>
            </Card>
        </div>
    );
}

export default Post;
