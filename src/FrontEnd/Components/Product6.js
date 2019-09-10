import React from 'react';
import { Typography, Divider } from 'antd';

import './Product_Page.css'

import Pic from '../pic/6.png' 
const { Title,Paragraph } = Typography;

class Product6 extends React.Component{
  render(){
    return(
      <div className='ProductPage'>
        <img alt="example" src={Pic} />
        <div className='Product_4Content'>
          <Title>純南極磷蝦油 軟膠囊</Title>
          <Divider />
          <Paragraph>
          主成份：磷蝦油100% 膠皮成分:明膠.甘油.水。
          </Paragraph>
          <Paragraph>
          包裝規格：730mg/30粒/盒。
          </Paragraph>
          <Paragraph>
          食用方法：平常保養每天2至4粒(多食無益)。
          </Paragraph>
          <Paragraph>
          注意事項：本產品含有蝦蟹類製品,不適合其過敏體質者食用。
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
      </div>
    )
  }
}
export default Product6;