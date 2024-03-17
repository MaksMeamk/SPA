import React from 'react';
import { Header } from '../Header';
import './style.scss';
import { Input, ConfigProvider, Button } from 'antd';
export const HomePage = () => {
   return (
      <>
         <Header />
         <div className="block-homePage">
            <div className="block-homePage__items">
               <div className="block-homePage__text">Поиск видео</div>
               <div className="block-homePage__search">
                  <ConfigProvider
                     theme={{
                        token: {
                           fontSize: '20px',
                           lineHeight: '24px',
                        },
                        components: {
                           Input: {
                              activeBg: 'rgba(197, 228, 249, 0.3)',
                              activeBorderColor: 'rgba(19, 144, 229, 1)',
                              paddingBlock: '5px',
                           },
                        },
                     }}
                  >
                     <Input
                     // onChange={(e) =>
                     //    setauthorizationData((authorizationData) => ({
                     //       ...authorizationData,
                     //       email: e.target.value,
                     //    }))
                     // }
                     // value={authorizationData.email}
                     />
                     <Button type="primary">Найти</Button>
                  </ConfigProvider>
               </div>
            </div>
         </div>
      </>
   );
};
