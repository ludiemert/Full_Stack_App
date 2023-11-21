import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <p>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          explicabo perspiciatis optio quia, ea hic autem omnis vero, expedita
          nulla sit corporis pariatur doloribus debitis cumque nostrum harum aut
          enim!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
          nisi nostrum cupiditate voluptatum tenetur libero adipisci delectus
          veritatis sint, vel iste earum ipsa illo itaque voluptates repellat
          sequi veniam ipsum. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Amet explicabo perspiciatis optio quia, ea hic autem
          omnis vero, expedita nulla sit corporis pariatur doloribus debitis
          cumque nostrum harum aut enim!Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Fuga nisi nostrum cupiditate voluptatum tenetur
          libero adipisci delectus veritatis sint, vel iste earum ipsa illo
          itaque voluptates repellat sequi veniam ipsum. <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          explicabo perspiciatis optio quia, ea hic autem omnis vero, expedita
          nulla sit corporis pariatur doloribus debitis cumque nostrum harum aut
          enim!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
          nisi nostrum cupiditate voluptatum tenetur libero adipisci delectus
          veritatis sint, vel iste earum ipsa illo itaque voluptates repellat
          sequi veniam ipsum.
        </p>
      </div>

      <Menu />
    </div>
  );
};

export default Single;
