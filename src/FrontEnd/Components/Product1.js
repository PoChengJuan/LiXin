import React from 'react';
import { Typography, Divider,Row,Col } from 'antd';

import './Product_Page.css'

import Pic from '../pic/1.png' 
const { Title,Paragraph } = Typography;

class Product1 extends React.Component{
  render(){
    return(
      <div className='ProductPage'>
        <Row>
          <Col xs={{ span: 24}} md={{ span: 12}}>
            <img alt="example" src={Pic} />
          </Col>
          <Col xs={{ span: 24}} md={{ span: 12}}>
            <div className='Product_1Content'>
              <Title>アイスクリスタル膠原蛋白</Title>
              <Divider />
              <Paragraph>
                成    份：日本魚膠原蛋白、台灣虱目魚鱗膠原蛋白(含三胜肽)、以色列黃金番
                茄粉末、流行鏈球菌發酵物(含透明質酸鈉)、金頂側耳萃取物(含神經醯胺)。
              </Paragraph>
              <Paragraph>
                產品特性：小分子易吸收，透亮Q嫩雙倍效力。
              </Paragraph>
              <Paragraph>
                包裝規格：3.8g/包，20包/盒。
              </Paragraph>
              <Paragraph>
                食用方式：一天2~4包，可將粉包直接口服或搭配開水食用，於晨起或睡前空腹食用效果最佳。亦可添加於任何冷、熱(40℃以下)飲品中調配飲用。
              </Paragraph>
              <Paragraph>
                注意事項：
                <ol>
                  <li>
                    素食不可食用。
                  </li>
                  <li>
                    孕婦、12歲以下兒童、服用藥物者、魚類過敏者、體質特殊者，食用前請洽詢專業醫師建議再食用。
                  </li>
                  <li>
                    食用後若出現不適感或有食物過敏現象者，請立即停止使用並洽詢 專業醫師協助。
                  </li>
                  <li>
                    手術前後之患者，請遵循專業醫師指示。
                  </li>
                </ol>
              </Paragraph>
              <Paragraph>
                保存條件：請放置於陰涼乾燥處，並避免陽光直接照射，開封後請儘早使用完畢，以確保產品品質。
              </Paragraph>
              <Paragraph>
                保存期限：二年(未開封且正常條件之保存)。
              </Paragraph>
              <Paragraph>
                有效日期：詳見外部包裝標示(西元年/月/日)。
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
export default Product1;