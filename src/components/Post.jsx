import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import posts from '../data/posts';

export default function Post() {
    const { id } = useParams();
    return (
        <>
            {posts[id - 1] ?
                <div>
                    <h1>{posts[id - 1].title}</h1>
                    <p>{posts[id - 1].text}</p>
                </div>
                :
                <Redirect to='/' />
            }
        </>
    );
}
