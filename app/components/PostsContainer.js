import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import { fetchMainPosts } from "../utils/api";
import Post from "./Post";

export default function PostsContainer({ postType }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPosts([]);
    setLoading(true);
    fetchMainPosts(postType).then((posts) => {
      console.log(posts);
      setPosts(posts);
      setLoading(false);
      console.log(posts[0]);
    });
  }, [postType]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <React.Fragment>
      {posts &&
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            by={post.by}
            time={post.time}
            url={post.url}
            title={post.title}
            descendants={post.descendants}
          />
        ))}
    </React.Fragment>
  );
}

{
  /* <React.Fragment>
  {posts &&
    posts.map((post) => (
      <Post
        key={post.id}
        by={post.by}
        time={post.time}
        url={post.url}
        title={post.title}
      />
    ))}
</React.Fragment> */
}

// export default class TopPosts extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//     };
//   }

//   componentDidMount() {
//     getNewPosts('top').then((postsArray) => this.setState({ posts: postsArray }));
//   }

//   render() {
//     const { posts } = this.state;
//   }
// }
