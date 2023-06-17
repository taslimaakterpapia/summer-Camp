import React from 'react';
import footerImg from '../../../image/logo.png';

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div>


                  <img className="navImg" src={footerImg} alt="" />
              
              <p className='text-xl text-white text-semibold md:pl-8'> Foreign Language Learning School</p>
            </div>

            <div className='pl-20'>
              <span className="footer-title text-xl text-white">Social</span> <br />
              <a className="link link-hover text-xl text-white">Twitter</a> <br />
              <a className="link link-hover text-xl text-white">Instagram</a> <br />
              <a className="link link-hover text-xl text-white">Facebook</a>

            </div>
            <div>
              <span className="footer-title text-xl text-white">Contact Us</span>
              <div className="text-xl text-white">Phone : 000 000 000</div>
              <div className="text-xl text-white">Email:  languageline@gmail.com </div>
              <div className="text-xl text-white">Address: Dhaka, Bangladesh 1234 </div>


            </div>



          </div>
        </div>


      </footer>

      <div className="text-center text-blue-700 text-xl py-2">
        <p>Copyright © 2023 - All right reserved by LanguageLine.</p>
      </div>
    </div>
  );
};

export default Footer;
