import React from 'react';
import { Typography, Divider,Row,Col } from 'antd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Product_Page.css'

import Pic_1 from '../pic/7-1.jpg' 
import Pic_2 from '../pic/7-2.jpg' 

const { Title,Paragraph } = Typography;

class Product1 extends React.Component{
  render(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      };
    return(
      <div className='ProductPage'>
        <Row>
          <Col xs={{ span: 24}} md={{ span: 12}}>
            <div className='product_div'>
              <Slider {...settings}>
              <div>
                  <img alt="example" src={Pic_1} />
              </div>
              <div>
                <img alt="example" src={Pic_2} />
              </div>
              </Slider>
            </div>
          </Col>
          <Col xs={{ span: 24}} md={{ span: 12}}>
            <div className='Product_1Content'>
              <Title>肌さらさら晚安膠囊</Title>
              <Divider />
              <Paragraph>
                成    份：甘露糖醇、膠原蛋白、水、海藻糖、出芽短梗酶多糖。
              </Paragraph>
              <Paragraph>
              使用辦法：臉部清潔後，撕開封膜後，滴入化妝水或純露或純水蒸餾水等約3滴，將活性膠原蛋白凍干精華球溶化後，將精華液均勻塗抹於臉上各部位與肩頸部達到滋潤作用。
              </Paragraph>
              <Paragraph>
              使用步驟：
              <ul>
                  <li>
                    步驟1-將精華小球放入手中
                  </li>
                  <li>
                  步驟2-滴入化妝水2-3滴
                  </li>
                  <li>
                  步驟3-待小球完全溶解
                  </li>
                  <li>
                  步驟4-均勻塗抹至面部並輕拍至吸收
                  </li>
              </ul>
              小建議：建議首10天每晚使用一次，之後每周視膚況而定使用1-2次
              </Paragraph>
              <Paragraph>
              注意事項：使用後若產生紅腫過敏現象，請暫停使用並諮詢專業醫師。
              </Paragraph>
              <Paragraph>
              保存條件：請置於陰涼處，避免高溫或陽光照射。
              </Paragraph>
              <Paragraph>
              容量：18mg/7入
              </Paragraph>
              <Paragraph>
              保存期限：5年(未拆封)，開封後 6個月內使用完畢。
              </Paragraph>
              <Paragraph>
              有效日期：標示於包裝上
              </Paragraph>
              <Paragraph>
              製造廠：Wuxi BIOT Biology Technology Co.,Ltd.
              </Paragraph>
              <Paragraph>
              製造廠地址：Biological pharmaceutical industry park, Ziyun Road, Mashan, Wuxi, PRC.
              </Paragraph>
              <Paragraph>
              ISO證號：ISO22716：2007E
              </Paragraph>
              <Paragraph>
              進口商：儷馨生技有限公司
              </Paragraph>
              <Paragraph>
              本產品已投保2000萬產品責任險
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Product1;