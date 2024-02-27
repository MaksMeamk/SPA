import React, { useState } from 'react';
import { Input, ConfigProvider, Button } from 'antd';
import logo from '../../img/sibdev-logo.png';
import '../Authorization/authorization.scss';
function Authorization() {
   const [authorizationData, setauthorizationData] = useState();
   return (
      <form className="block-authorization">
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
            <div className="block-authorization__items">
               <div className="block-authorization__logo">
                  <img src={logo} alt="logo" />
               </div>
               <div className="block-authorization__text">Вход</div>

               <div className="block-authorization__input-login">
                  <label className="label">Логин:</label>
                  <Input
                     onChange={(e) =>
                        setauthorizationData((authorizationData) => ({
                           ...authorizationData,
                           login: e.target.value,
                        }))
                     }
                  />
               </div>

               <div className="block-authorization__input-password">
                  <label className="label">Пароль:</label>
                  <Input.Password
                     onChange={(e) =>
                        setauthorizationData((authorizationData) => ({
                           ...authorizationData,
                           password: e.target.value,
                        }))
                     }
                  />
               </div>

               <div className="block-authorization__button">
                  <Button
                     className="button"
                     type="primary"
                     onClick={() => console.log('button click')}
                  >
                     Войти
                  </Button>
               </div>
            </div>
         </ConfigProvider>
      </form>
   );
}

export default Authorization;
