import React from 'react';
import { Typography, Divider,Row,Col } from 'antd';

import './Product_Page.css'

import Pic from '../pic/2.png' 
const { Title,Paragraph } = Typography;

class Product2 extends React.Component{
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
            <div className='Product_2Content'>
              <Title>甄嬛美人魚</Title>
              <Divider />
              <Paragraph>
                成    份：玉米可溶性纖維(異麥牙糊精).複合柑橘及瓜拿納萃取物(葡萄柚萃取物.麥芽糊精.瓜拿納萃取物.甜橙萃取物. 血橙萃取物).馬鈴薯萃取物.阿拉伯糖.穀蔬果發酵萃取物20-Plus(乳糖.穀類萃取物(米).鳳梨萃取物.青木瓜萃取物 酵素製劑(含乳糖分解酵素.纖維分解酵素.澱粉酵素.蛋白酵素.糖甘酵素.麥芽糊精).芽孢乳酸菌(乳酸菌Bacillus coagulans).PVP-K30.二氧化矽.硬脂酸鎂。
              </Paragraph>
              <Paragraph>
                產品特性：調整體質.維持健康活力.增加飽足感.維持消化道機能.排便順暢。
              </Paragraph>
              <Paragraph>
                包裝規格：800mg/顆 , 60顆/盒。
              </Paragraph>
              <Paragraph>
                食用方式：每日2~4顆 , 搭配溫開水服用。
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
                保存條件:請保存於25度C以下乾燥環境 , 避免陽光直接照射 , 並置於兒童無法拿取的地方
              </Paragraph>
              <Paragraph>
                保存期限:二年(未開封且正常條件之保存) 有效日期:詳見外部標示(西元年/月/日)。
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
export default Product2;