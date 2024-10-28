import React from 'react';
import { Header } from '../Header';
import './style.scss';
import { Input, ConfigProvider, Button } from 'antd';
import { fetchSearch } from '../Authorization/Requests';
export const Search = () => {
   const[dataSearch, setDataSearch] = React.useState({search: ''});
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
                           Button: {
                              contentFontSize: '20px',
                              paddingBlock: '14px',
                              paddingInline: '46px',
                              controlHeight: '52px',
                           }
                        },
                     }}
                  >
                     <Input placeholder='Что хотите посмотреть?'
                      onChange={(e) =>
                         setDataSearch((dataSearch) => ({
                            ...setDataSearch,
                            search: e.target.value,
                        }))
                      }
                      value={dataSearch.search}
                     />
                     <Button 
                        type="primary"
                        onClick={() => fetchSearch(dataSearch.search)}
                     >
                        Найти
                     </Button>
                  </ConfigProvider>
               </div>
            </div>
         </div>
      </>
   );
};
