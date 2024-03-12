import React from 'react';
import { Header } from '../Header';
import './style.scss';
export const HomePage = () => {
   return (
      <>
         <Header />
         <div className="block-homePage">
            <div className="block-homePage__items">
               <div className="block-homePage__search"></div>
            </div>
         </div>
      </>
   );
};
