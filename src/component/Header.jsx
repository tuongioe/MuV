import React, { useState } from "react";
import "../assets/styles/Header.css";
import { IoSearchOutline } from "react-icons/io5";
import Modal from "./Modal";

function Header({ onSearch }) {
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });
  const handleReset = () => {
    setInput("");
  };
  const handleOpenModal = (type) => {
    if (type === "about") {
      setModalContent({
        title: "About me",
        content: `Hello, my name is Trương Quang Tường.
        I graduated from the University of Information Technology Vietnam National University, Ho Chi Minh City, majoring in Web Programming with a strong focus on Front-end development. I am passionate about creating visually appealing and user-friendly website interfaces, continuously improving them based on user feedback.
        
        Beyond my academic background, I have a strong interest in music and was an active member of my university's music club. I frequently performed at acoustic shows, which helped me connect with many friends from different faculties and made my student life more vibrant.
        
        In terms of languages, I hold an IELTS 5.5 and JLPT N3 certificate. I am currently self-studying to achieve JLPT N2 next year while practicing Japanese listening and speaking daily, aiming to work and build my career in Japan in the future.`,
      });
    } else if (type === "contact") {
      setModalContent({
        title: "Contact",
        content: "📧 Gmail: truongquangtuong10a2@gmail.com",
      });
    }
    setShowModal(true);
  };

  return (
    <>
      <div className="top-0 left-0 w-full p-4 bg-black flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-[30px] uppercase font-bold text-red-600">
            MooVee
          </h1>
          <nav className="lg:flex lg:items-center lg:space-x-8 hidden">
            <a href="/" className="nav-link text-lg hover:text-white">
              Home
            </a>
            <a
              onClick={() => handleOpenModal("about")}
              className="nav-link text-lg hover:text-white"
            >
              About
            </a>
            <a
              onClick={() => handleOpenModal("contact")}
              className="nav-link text-lg hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center">
          <input
            id="search"
            type="text"
            value={input}
            placeholder="Search"
            className="h-[40px] px-3 text-black w-[40vw] lg:w-[20vw] outline-none rounded"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="h-[43px] w-[50px] flex items-center justify-center text-white bg-red-600 hover:bg-opacity-60 border-none"
            onClick={() => {
              onSearch(input);
              handleReset();
            }}
          >
            <IoSearchOutline size={36} className="text-white" />
          </button>
        </div>
      </div>

      {showModal && (
        <Modal
          title={modalContent.title}
          content={modalContent.content}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default Header;
