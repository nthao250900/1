import React from "react";

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <div className='item phone'>
          <i className='fa-solid fa-phone'></i>
          <p>(225) 555-0118</p>
        </div>
        <div className=' item email'>
          <i className='fa-solid fa-envelope'></i>
          <p>michelle.rivera@example.com</p>
        </div>
      </div>
      <div className='header__center'>
        <p>Follow Us and get a chance to win 80% off</p>
      </div>
      <div className='header__right'>
        <ul>
          <li>Follow Us : </li>
          <li>
            <a href='#'>
              <i className='fa-brands fa-instagram'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fa-brands fa-youtube'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fa-brands fa-facebook'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fa-brands fa-twitter'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
