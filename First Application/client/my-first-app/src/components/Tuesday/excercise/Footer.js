import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-2 d-flex flex-column fixed-bottom">
      <div className="container mx-auto text-center text-black">
        <ul className="list-unstyled d-flex flex-row justify-content-center">
            <li className="m-2">Home</li>
            <li className="m-2">Feautures</li>
            <li className="m-2">Pricing</li>
            <li className="m-2">FAQ</li>
            <li className="m-2">About</li>
        </ul>
        <p>&copy; 2023 My Website</p>
      </div>
    </footer>
  );
}

export default Footer;