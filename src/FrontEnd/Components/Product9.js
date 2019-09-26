import React from 'react';
import { Typography, Divider,Row,Col } from 'antd';

import './Product_Page.css'

import Pic from '../pic/9.jpg' 
const { Title,Paragraph } = Typography;

class Product6 extends React.Component{
  render(){
    return(
      <div className='ProductPage'>
        <Row>
          <Col xs={{ span: 24}} md={{ span: 12}}>
            <div className='product_div'>
              <img alt="example" src={Pic} />
            </div>
          </Col>
          <Col xs={{ span: 24}} md={{ span: 12}}>
            <div className='Product_4Content'>
              <Title>活力肽</Title>
              <Divider />
              <Paragraph>
              成份：Soy peptide powder、Pumpkin powder、Isomaltulose、Zein peptide powder、Triticum peptide powder Hydroxypropyl distarch phosphate、Peruvian Black M-aca powder、Cortex Acanthopanacis Radicis E-xtract powder、Taurine、Gi-nseng Radix eptide powder-Nicotinic acid、Zinc gluconate。
              </Paragraph>
              <Paragraph>
              食用辦法：每包沖泡冷水或者常溫水沖泡飲用，可依個人喜好增減水量，每日建議食用2-4包。
              </Paragraph>
              <Paragraph>
              容量：3公克/包，20包入
              </Paragraph>
              <Paragraph>
              保存期限：二年(未開封且正常條件之保存)
              </Paragraph>
              <Paragraph>
              有效日期：詳見外部標示
              </Paragraph>
              <Paragraph>
              產地：台灣
              </Paragraph>
              <Paragraph>
              總代理：儷馨生技有限公司
              </Paragraph>
              <Paragraph>
              本產品已投保二千萬元產品責任險
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Product6;