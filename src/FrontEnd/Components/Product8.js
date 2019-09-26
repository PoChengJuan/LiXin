import React from 'react';
import { Typography, Divider,Row,Col } from 'antd';

import './Product_Page.css'

import Pic from '../pic/8.jpg' 
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
              <Title>翡玟 漾采保濕凝霜</Title>
              <Divider />
              <Paragraph>
              成分：Purified Water、Water & Butylene Glycol & Prunus Yedoensis Leaf Extract、ß-White™/Water & Butylene Glycol & Hydrogenated Lecithin & Sodium Oleate & Oligopeptide-68 & Disodium EDTA、Leontopodium Alpinum Extract、Resistem™(Globularia Cordifolia Extract)、Eterniskin™(Grifola Frondosa Fruiting Body Extract / Maltodextrin)、Ceramide 3、Tremella Fuciformis Sporocarp Extract、Antarcticine(Pseudoalteromonas Ferment Extract)、Hyaluronic Acid、Cetearyl Glucoside、Cetearyl Alcohol、Cyclopentasiloxane、Caprylic/Capric Triglyceride、Isononyl Isononanote、Polyquaternium-51、Hexamidine Diisethionate、Tea-Cocoyl Glutamate、Phenoxyethanol、Fragrance 
              </Paragraph>
              <Paragraph>
              用途：給予肌膚鎖水保濕、緊實潤澤、提升修護力功效；能維持一整天的水潤清透，調理肌膚油水平衡。
              </Paragraph>
              <Paragraph>
              容量：30ml
              </Paragraph>
              <Paragraph>
              使用方法：早晚臉部清潔，緊接著相關保養程序後，最後取適量均勻塗抹於臉部、頸部肌膚，以指腹輕輕按摩再以輕拍方式直至產品吸收即可。
              </Paragraph>
              <Paragraph>
              產地：台灣
              </Paragraph>
              <Paragraph>
              保存期限：3年(未拆封)，開封後 6個月內用畢。
              </Paragraph>
              <Paragraph>
              保存方法：請置於陰涼處，避免高溫或陽光照射。
              </Paragraph>
              <Paragraph>
              注意事項：
              <ol>
                  <li>
                    僅限皮膚外用，請避免兒童誤食。
                  </li>
                  <li>
                    使用後若產生紅腫過敏現象，請暫停使用並諮詢專業醫師。
                  </li>
                  <li>
                    皮膚敏感者，使用前請先做敏感測試，無刺激反應再使用。
                  </li>
              </ol>
                製造日期及效期：標示於包裝上
              </Paragraph>
              <Paragraph>
              代理商：儷馨生技有限公司
              </Paragraph>
              <Paragraph>
              製造商：優能生技股份有限公司
              <br/>
              地址：高雄市燕巢區安招里安林路14號
              <br/>
              工廠證號：99-685594-00 
              <br/>
              本產品已投保二千萬產品責任險
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Product6;