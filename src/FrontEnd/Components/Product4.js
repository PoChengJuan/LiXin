import React from 'react';
import { Typography, Divider,Row,Col } from 'antd';

import './Product_Page.css'

import Pic from '../pic/4.png' 
const { Title,Paragraph } = Typography;

class Product4 extends React.Component{
  render(){
    return(
      <div className='ProductPage'>
        <Row>
          <Col xs={{ span: 24}} md={{ span: 12}}>
            <img alt="example" src={Pic} />
          </Col>
          <Col xs={{ span: 24}} md={{ span: 12}}>
            <div className='Product_4Content'>
              <Title>專利活益菌</Title>
              <Divider />
              <Paragraph>
              成    份：植物乳酸桿菌LP110、植物乳酸桿菌LP109、乳酸片菌PA320、初乳蛋白萃取、水溶性膳食纖維、乳酸粉、木寡糖、海藻糖、異麥芽寡糖。
              </Paragraph>
              <Paragraph>
              產品特性：含有高活性乳酸菌及功能成分，調整體質及生理機能。且菌種採用專利多層凍晶包覆技術，可維持菌株高度存活率。
              </Paragraph>
              <Paragraph>
              包裝規格：2.5公克X20包。
              </Paragraph>
              <Paragraph>
              建議用量：
              <ul>
                <li>七歲以下，每次半包</li>
                <li>七歲以上，每次一包</li>
                <li>平日保健，每日食用一次</li>
                <li>加強保健，每日早、晚餐後各一次</li>
              </ul>
              </Paragraph>
              <Paragraph>
              食用方式：每次一包，每日1-2包（建議搭配適量水份1500cc有助提升抑菌活性）。
              </Paragraph>
              <Paragraph>
              建議飯後食用，可直接食用或加入牛奶、果汁中，溫度勿超過40度。
              </Paragraph>
              <Paragraph>
              保存條件：請保存陰涼乾燥環境 , 並於有效日期內食用完畢。
              </Paragraph>
              <Paragraph>
              保存期限：三年(未開封且正常條件之保存)。
              </Paragraph>
              <Paragraph>
              有效日期：詳見外部標示(西元年/月/日)。
              </Paragraph>
              <Paragraph>
                產品產地：台灣。
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Product4;