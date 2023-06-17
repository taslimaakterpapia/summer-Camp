import React from 'react';

const InstructorCard = ({ instruct }) => {
    const {name,image,email,number}=instruct;
    return (
        <div>
        <div className="card rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 shadow-xl mx-2 overflow-hidden transform transition duration-300 hover:scale-105">
  <figure>
    <img className="w-full h-56 object-cover" src={image} alt="images" />
  </figure>
  <div className="card-body p-4">
    <h2 className="card-title text-2xl font-bold text-white">{name}</h2>
    <p className="text-gray-300">{email}</p>
    <div className="flex justify-end mt-4">
      <button className="like-btn">
        <svg
          className="w-6 h-6 stroke-current text-white hover:text-red-500 transition duration-300"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        > 
          <path d="M7 5c0-2.761 2.239-5 5-5s5 2.239 5 5c0 3.086-2.204 5.605-5 6.236V22l-4-3 1-2-2-1-2 1 1 2-4 3v-9.764C4.204 10.605 2 8.086 2 5zm3 0c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z" />
        </svg>
        <p>Like</p>
      </button>
      <button className="dislike-btn">
        <svg
          className="w-6 h-6 stroke-current text-white hover:text-blue-300 transition duration-300"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M17 19l-7-7-7 7M7 5c0 2.761 2.239 5 5 5s5-2.239 5-5-2.239-5-5-5-5 2.239-5 5zm4 0c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z" />
        </svg>
        <p>Dslike</p>
      </button>
    </div>
  </div>
</div>

      </div>
      
    );
};

export default InstructorCard;