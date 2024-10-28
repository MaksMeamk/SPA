import React, { useState } from 'react';
import { Input, ConfigProvider, Button } from 'antd';
import logo from '../../img/sibdev-logo.png';
import '../Authorization/style.scss';
import { fetchAuthorization } from './Requests';
import { useNavigate } from 'react-router-dom';
function Authorization() {
   const navigate = useNavigate();
   const [authorizationData, setauthorizationData] = useState({
      email: '',
      password: '',
   });
   const onFinish = async () => {
      try {
         await fetchAuthorization(authorizationData);
         navigate('/tasks');
      } catch (error) {
         onFinishFailed(error.message);
      }
   };
   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };
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

               <div className="block-authorization__input-email">
                  <label className="label">Логин:</label>
                  <Input                     
                     onChange={(e) =>
                        setauthorizationData((authorizationData) => ({
                           ...authorizationData,
                           email: e.target.value,
                        }))
                     }
                     value={authorizationData.email}
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
                     value={authorizationData.password}
                  />
               </div>

               <div className="block-authorization__button">
                  <Button
                     className="button"
                     type="primary"
                     onClick={() => onFinish()}
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
