import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [id])

    return (
        <div>
            <h3>This is post Detail: {id}</h3>
            <p>User posted: {post.id}</p>
            <p>title: {post.title}</p>
            <p>Post Body: {post.body}</p>
            <p>Number of comments: {comments.length}</p>
            {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }

        </div>
    );
};

export default PostDetail;