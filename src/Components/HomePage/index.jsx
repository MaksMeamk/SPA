import React from 'react';
import { Header } from '../Header';

export const HomePage = () => {
   return (
      <div className="block-homePage">
         <div className="block-homePage__items">
            <Header />
            <div className="block-homePage__search"></div>
         </div>
      </div>
   );
};
