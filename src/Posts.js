import React from "react";
import { useState, useEffect } from "react";
// Importing necessary hooks from React
import { Container, Grid, Typography } from "@material-ui/core";
// Importing necessary components from Material UI

const Posts = () => {
  const [posts, setPosts] = useState([]);
  // Declaring state using the useState hook

  useEffect(() => {
    // Using the useEffect hook to fetch data from a dummy API
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
      // Setting fetched data to state
      .catch((err) => console.log(err));
    // Handling errors
  }, []);

  return (
    <Container>
      {/* Material UI container to wrap the layout */}
      <Typography variant="h3" align="center" gutterBottom>
        Available Posts {/* Heading */}
      </Typography>
      <Grid container spacing={2}>
        {/* Material UI Grid component to display posts */}
        {posts.map((post) => {
          // Using map() method to iterate over the posts array and create a Grid item for each post
          return (
            <Grid item key={post.id} xs={12} md={6}>
              {/* Each post is a Grid item */}
              <Typography variant="h5" gutterBottom>
                {post.title} {/* Post title */}
              </Typography>
              <Typography variant="body1">{post.body}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Posts; // Exporting the component as default
