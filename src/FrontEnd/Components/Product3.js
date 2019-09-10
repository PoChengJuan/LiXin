import React from 'react';
import { Typography, Divider,Row,Col } from 'antd';

import './Product_Page.css'

import Pic from '../pic/3.png' 
const { Title,Paragraph } = Typography;

class Product3 extends React.Component{
  render(){
    return(
      <div className='ProductPage'>
        <Row>
          <Col xs={{ span: 24}} md={{ span: 12}}>
            <img alt="example" src={Pic} />
          </Col>
          <Col xs={{ span: 24}} md={{ span: 12}}>
            <div className='Product_3Content'>
              <Title>核彈咖啡</Title>
              <Divider />
              <Paragraph>
              成    份：專利難消化性麥芽糊精、奶油粉、椰子油粉、即溶咖啡粉、中鏈三酸甘油酯、芒果核提取物。
              </Paragraph>
              <Paragraph>
              包裝規格：15公克x8包/盒*1盒。
              </Paragraph>
              <Paragraph>
              食用方式：每包沖泡150~200cc熱開水沖泡飲用,可依個人喜好增減水量。
              </Paragraph>
              <Paragraph>
                注意事項：
                <ol>
                  <li>
                    本產品若有破損或完封不良 , 請勿食用。
                  </li>
                  <li>
                  兒童.孕婦.哺餵母乳者.老年人.洗腎患者及有心血管疾病者不宜使用。
                  </li>
                  <li>
                  服用藥物者 , 欲使用本產品請先諮詢醫療人員。
                  </li>
                  <li>
                  對本產品任一成份敏感者忌食 , 身體不適或特殊狀況者 , 請先諮詢醫(藥)師意見再行食用。
                  </li>
                </ol>
              </Paragraph>
              <Paragraph>
              保存條件：請保存陰涼乾燥環境 , 並於有效日期內食用完畢。
              </Paragraph>
              <Paragraph>
              保存期限：二年(未開封且正常條件之保存)。
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
export default Product3;