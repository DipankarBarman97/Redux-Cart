import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiOutlineShoppingCart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1><AiOutlineShoppingCart /> Mart.</h1>
        <p>@all rights reserved</p>
      </div>
      <div>
        <h5>Social handles</h5>
        <div>
          <a href="https://instagram.com/dipankar.db37" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/DipankarBarman97" target={"blank"}>
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dipankarbarman2607/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
