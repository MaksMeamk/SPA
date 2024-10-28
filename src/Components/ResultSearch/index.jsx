import React from 'react';
import { Pagination } from 'antd';
import { Col, Divider, Row } from 'antd';
const style = {
   background: '#0092ff',
   padding: '8px 0',
};

export const ResultSearch = () => {
   return (
      <div>
         {/* <       Pagination defaultCurrent={6} total={500} /> */}
         <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={4}>
               <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={4}>
               <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={4}>
               <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={4}>
               <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={4}>
               <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
               <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
               <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
               <div style={style}>col-6</div>
            </Col>
         </Row>
      </div>
   );
};
