import React from 'react';
import { Typography, Divider,Row,Col } from 'antd';

import './Product_Page.css'

import Pic from '../pic/5.png' 
const { Title,Paragraph } = Typography;

class Product5 extends React.Component{
  render(){
    return(
      <div className='ProductPage'>
        <Row>
          <Col xs={{ span: 24}} md={{ span: 12}}>
            <img alt="example" src={Pic} />
          </Col>
          <Col xs={{ span: 24}} md={{ span: 12}}>
            <div className='Product_4Content'>
              <Title>綠蜂膠黃金胜肽皂</Title>
              <Divider />
              <Paragraph>
              成 份：Propolis、Honey、Fruit Enzymes (Fruit Extract)、Golden Peptide、Amino Acids、Ginger Extract、Curcuma Aromatica Extract、Essential Oil、Propylene Glycol、Glycerin、E.D.T.A.- 4Na、Sorbitol、Sodium Hydroxide、Extra Virgin Olive Oil、Coconut Oil Fatty Acid、Titanium Dioxide、Essential Oil 、Aqua(D.I. Water)。
              </Paragraph>
              <Paragraph>用 途：清潔臉部及全身肌膚。</Paragraph>
              <Paragraph>
              使用方法：臉或身體打濕後,將綠蜂膠阿勃勒雙效活皂至於沐浴球或手心搓揉起泡後塗抹於臉部或身體,再以溫水清淨。
              </Paragraph>
              <Paragraph>
              容 量：每塊100g,本包裝含3塊。
              </Paragraph>
              <Paragraph>
              製造日期：標示於外包裝(西元年/月/日)。
              </Paragraph>
              <Paragraph>
              保存條件：未拆封前請置於陰涼乾燥處(遵循古法煉製,隨著時間顏色會越來越深,屬正常熟成現象)。使用後請放置於底部可漏水之皂架, 保持乾燥並避免陽光直射之陰涼處。
              </Paragraph>
              <Paragraph>
              保存期限：五年(未開封且正常條件之保存)。
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
export default Product5;