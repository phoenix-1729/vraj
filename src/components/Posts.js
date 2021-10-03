import React from "react";
import Post from "./Post";
import LocationCard from "./LocationCard";
import Trend from "./Trend";
import "../stylesheets/Posts.css";
function Posts() {
  return (
    <div className="posts">
      {/* Posting */}
      <Post />
      {/* Location */}
      <LocationCard />
      {/* Trending */}
      <Trend />
    </div>
  );
}

export default Posts;
