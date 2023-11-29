import { db } from "../db.js";

export const getPosts = (req, res) => {
  const q = req.query.cat
  ? "SELECT * FROM posts WHERE cat=?"
  : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    // If there's an error, send a 500 status code and the error message
    if (err) return res.status(500).send(err);

    // Otherwise, send a 200 status code and the data as JSON
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  res.json("from controller");
};

export const addPost = (req, res) => {
  res.json("from controller");
};

export const deletePost = (req, res) => {
  res.json("from controller");
};

export const updatePost = (req, res) => {
  res.json("from controller");
};
