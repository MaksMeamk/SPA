import React from 'react';
import logo from '../../img/sibdev-logo.png';
import './style.scss';

export const Header = () => {
   return (
      <div className="block-header">
         <div className="block-header__items">
            <div className="block-header__logo-button">
               <img
                  className="block-header__image-logo"
                  src={logo}
                  alt="logo"
               />
            </div>
            <div className="block-header__button">Поиск</div>
            <div className="block-header__button">Избранное</div>
            <div className="block-header__button block-header__button_right">
               Выйти
            </div>
         </div>
      </div>
   );
};
