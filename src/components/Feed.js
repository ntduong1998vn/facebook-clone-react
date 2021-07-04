import React, { useEffect, useState } from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import "./Feed.css";
import db from "./../firebase";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          image={post.data.image}
          profilePic={post.data.profilePic}
          username={post.data.username}
          timestamp={post.data.timestamp}
          message={post.data.message}
        />
      ))}
      {/* <Post
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png"
        message="Hello World"
        timestamp="This is a timestamp"
        username="Trieu Duong"
        image="https://i.pinimg.com/originals/9f/66/0f/9f660f6d0d09d80f6cc039d275567deb.png"
      />
      <Post
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png"
        message="Hello World"
        timestamp="This is a timestamp"
        username="Trieu Duong"
        image="https://i.pinimg.com/originals/9f/66/0f/9f660f6d0d09d80f6cc039d275567deb.png"
      />
      <Post
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png"
        message="Hello World"
        timestamp="This is a timestamp"
        username="Trieu Duong"
        image="https://i.pinimg.com/originals/9f/66/0f/9f660f6d0d09d80f6cc039d275567deb.png"
      />
      <Post
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png"
        message="Hello World"
        timestamp="This is a timestamp"
        username="Trieu Duong"
        image="https://i.pinimg.com/originals/9f/66/0f/9f660f6d0d09d80f6cc039d275567deb.png"
      /> */}
    </div>
  );
}
