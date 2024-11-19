import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Fetch posts on component mount
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  // Add a new post
  const handleAddPost = (e) => {
    e.preventDefault();

    const newPost = { title, content };

    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts([...posts, data]);
        setTitle("");
        setContent("");
      })
      .catch((err) => console.error("Error adding post:", err));
  };

  // Delete a post
  const handleDeletePost = (id) => {
    fetch(`/api/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((err) => console.error("Error deleting post:", err));
  };

  return (
    <div className="container mt-4">
      <h2>Posty</h2>

      <form onSubmit={handleAddPost} className="mb-4">
        <div className="form-group">
          <label htmlFor="title">Tytuł</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Treść</label>
          <textarea
            id="content"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Dodaj Post
        </button>
      </form>

      <div>
        {posts.length === 0 ? (
          <p>Brak postów.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post mb-3 p-3 border rounded">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <button
                onClick={() => handleDeletePost(post.id)}
                className="btn btn-danger"
              >
                Usuń
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Posts;
