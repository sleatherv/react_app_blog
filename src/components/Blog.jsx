import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts';
import { ThemeContext } from '../contexts/themeContext';

export default function Blog() {
    const dummy = useContext(ThemeContext);
    console.log(dummy);
    return (
        <div>
            <h2>Blog</h2>
            <ul>
                {posts.map(post => {
                    return (
                        <li key={post.id}>
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
