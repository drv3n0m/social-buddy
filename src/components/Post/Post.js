import React from 'react';
import { useHistory } from 'react-router'

const Post = (props) => {
   const {id, title, body} = props.post;
   const history = useHistory();
   const showCommnets = id => {
        const url = `post/${id}`;
        history.push(url);
   }

    return (
        <div>
            <h3><strong>Id: {id}</strong> {title}</h3>
            <p>{body}</p>
            <button onClick={() => showCommnets(id)}>Show comments</button>
        </div>
    );
};

export default Post;