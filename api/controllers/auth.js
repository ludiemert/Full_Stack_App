import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  //check existing user
  const q = "SELECT * FROM users WHERE email = ? or username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.js(err);
    if (data.length) return res.status(409).json("User already exists!!");

    //Hash the password and creta a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    // Store hash in your password DB.

    const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username. req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created")
      //O usuário foi criado
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
