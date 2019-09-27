import React from 'react';
import { Card, Col, Row,Modal } from 'antd';
import Product1 from './Product1.js'
import Product2 from './Product2.js'
import Product3 from './Product3.js'
import Product4 from './Product4.js'
import Product5 from './Product5.js'
import Product6 from './Product6.js'
import Product7 from './Product7.js'
import Product8 from './Product8.js'
import Product9 from './Product9.js'

//import Home1 from '../Components/Home1.js'
import './Product.css'

import pic1 from '../pic/Pic1.png' 
import pic2 from '../pic/Pic2.png' 
import pic3 from '../pic/Pic3.png' 
import pic4 from '../pic/Pic4.png' 
import pic5 from '../pic/Pic5.png' 
import pic6 from '../pic/Pic6.png' 
import pic7 from '../pic/Pic7.png' 
import pic8 from '../pic/Pic8.png' 
import pic9 from '../pic/Pic9.png' 
const { Meta } = Card;

class Product extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Product1Visible:false,
      Product2Visible:false,
      Product3Visible:false,
      Product4Visible:false,
      Product5Visible:false,
      Product6Visible:false,
      Product7Visible:false,
      Product8Visible:false,
      Product9Visible:false,
    }
  }
  render(){
    return(
      <div className='ProductList'>
        <span style={{fontSize:"18px",color:'#C8A065'}}>產品</span>
        <Row gutter={16}>
          <Col xs={{ span: 24}} md={{ span: 12}} xl={{ span: 8}}>
            <Card
             hoverable
             cover={<img alt="example" src={pic1} onClick={()=>this.SetProduct_1visible(true)} />}
            >
              <Meta title="アイスクリスタル膠原蛋白" 
                //description="日本魚膠原蛋白、台灣虱目魚鱗膠原蛋白(含三胜肽)、以色列黃金番茄粉末、流行鏈球菌發酵物(含透明質酸鈉)、金頂側耳萃取物(含神經醯胺)"
                 />
              <Modal
                footer={null}
                keyboard = {true}
                width='520'
                visible={this.state.Product1Visible}
                onCancel={() => this.SetProduct_1visible(false)}
              >
                <span>
                  <Product1 />
                </span>
              </Modal>
            </Card>
          </Col>
          <Col xs={{ span: 24}} md={{ span: 12}} xl={{ span: 8}}>
            <Card
              hoverable
              cover={<img alt="example" src={pic2} onClick={()=>this.SetProduct_2visible(true)} />}
            >
              <Meta title="甄嬛美人魚" 
              //description="玉米可溶性纖維(異麥牙糊精).複合柑橘及瓜拿納萃取物(葡萄柚萃取物.麥芽糊精.瓜拿納萃取物.甜橙萃取物. 血橙萃取物).馬鈴薯萃取物.阿拉伯糖.穀蔬果發酵萃取物20-Plus(乳糖.穀類萃取物(米).鳳梨萃取物.青木瓜萃取物 酵素製劑(含乳糖分解酵素.纖維分解酵素.澱粉酵素.蛋白酵素.糖甘酵素.麥芽糊精).芽孢乳酸菌(乳酸菌Bacillus coagulans).PVP-K30.二氧化矽.硬脂酸鎂" 
              />
              <Modal
                footer={null}
                width='520'
                visible={this.state.Product2Visible}
                onCancel={() => this.SetProduct_2visible(false)}
              >
                <Product2 />
              </Modal>
            </Card>
          </Col>
          <Col xs={{ span: 24}} md={{ span: 12}} xl={{ span: 8}}>
            <Card
              hoverable
              cover={<img alt="example" src={pic4} onClick={()=>this.SetProduct_4visible(true)}/>}
            >
              <Meta title="專利活益菌" 
              //description="日植物乳酸桿菌LP110、植物乳酸桿菌LP109、乳酸片菌PA320、初乳蛋白萃取、水溶性膳食纖維、乳酸粉、木寡糖、海藻糖、異麥芽寡糖產品特性：含有高活性乳酸菌及功能成分，調整體質及生理機能。且菌種採用專利多層凍晶包覆技術，可維持菌株高度存活率" 
              />
              <Modal
                footer={null}
                width='520'
                visible={this.state.Product4Visible}
                onCancel={() => this.SetProduct_4visible(false)}
              >
                <Product4 />
              </Modal>
            </Card>
          </Col>
          <Col xs={{ span: 24}} md={{ span: 12}} xl={{ span: 8}}>
            <Card
              hoverable
              cover={<img alt="example" src={pic5} onClick={()=>this.SetProduct_5visible(true)}/>}
            >
              <Meta title="綠蜂膠黃金胜肽皂" 
              //description="Propolis、Honey、Fruit Enzymes (Fruit Extract)、Golden Peptide、Amino Acids、Ginger Extract、Curcuma Aromatica Extract、Essential Oil、Propylene Glycol、Glycerin、E.D.T.A.- 4Na、Sorbitol、Sodium Hydroxide、Extra Virgin Olive Oil、Coconut Oil Fatty Acid、Titanium Dioxide、Essential Oil 、Aqua(D.I. Water)" 
              />
              <Modal
                footer={null}
                width='520'
                visible={this.state.Product5Visible}
                onCancel={() => this.SetProduct_5visible(false)}
              >
                <Product5 />
              </Modal>
            </Card>
          </Col>
          <Col xs={{ span: 24}} md={{ span: 12}} xl={{ span: 8}}>
            <Card
              hoverable
              cover={<img alt="example" src={pic6} onClick={()=>this.SetProduct_6visible(true)}/>}
            >
              <Meta title="純南極磷蝦油 軟膠囊" 
              //description="磷蝦油100% 膠皮成分:明膠.甘油.水" 
              />
              <Modal
                footer={null}
                width='520'
                visible={this.state.Product6Visible}
                onCancel={() => this.SetProduct_6visible(false)}
              >
                <Product6 />
              </Modal>
            </Card>
          </Col>
          <Col xs={{ span: 24}} md={{ span: 12}} xl={{ span: 8}}>
            <Card
              hoverable
              cover={<img alt="example" src={pic7} onClick={()=>this.SetProduct_7visible(true)}/>}
            >
              <Meta title="肌さらさら晚安膠囊" 
              //description="磷蝦油100% 膠皮成分:明膠.甘油.水" 
              />
              <Modal
                footer={null}
                width='520'
                visible={this.state.Product7Visible}
                onCancel={() => this.SetProduct_7visible(false)}
              >
                <Product7 />
              </Modal>
            </Card>
          </Col>
          <Col xs={{ span: 24}} md={{ span: 12}} xl={{ span: 8}}>
            <Card
              hoverable
              cover={<img alt="example" src={pic8} onClick={()=>this.SetProduct_8visible(true)}/>}
            >
              <Meta title="翡玟 漾采保濕凝霜" 
              //description="磷蝦油100% 膠皮成分:明膠.甘油.水" 
              />
              <Modal
                footer={null}
                width='520'
                visible={this.state.Product8Visible}
                onCancel={() => this.SetProduct_8visible(false)}
              >
                <Product8 />
              </Modal>
            </Card>
          </Col>
          <Col xs={{ span: 24}} md={{ span: 12}} xl={{ span: 8}}>
            <Card
              hoverable
              cover={<img alt="example" src={pic9} onClick={()=>this.SetProduct_9visible(true)}/>} 
            >
              <Meta title="活力肽" 
              //description="磷蝦油100% 膠皮成分:明膠.甘油.水" 
              />
              <Modal
                footer={null}
                width='520'
                visible={this.state.Product9Visible}
                onCancel={() => this.SetProduct_9visible(false)}
              >
                <Product9 />
              </Modal>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
  SetProduct_1visible = (status) =>{
    this.setState({Product1Visible:status});
  }
  SetProduct_2visible = (status) =>{
    this.setState({Product2Visible:status});
  }
  SetProduct_3visible = (status) =>{
    this.setState({Product3Visible:status});
  }
  SetProduct_4visible = (status) =>{
    this.setState({Product4Visible:status});
  }
  SetProduct_5visible = (status) =>{
    this.setState({Product5Visible:status});
  }
  SetProduct_6visible = (status) =>{
    this.setState({Product6Visible:status});
  }
  SetProduct_7visible = (status) =>{
    this.setState({Product7Visible:status});
  }
  SetProduct_8visible = (status) =>{
    this.setState({Product8Visible:status});
  }
  SetProduct_9visible = (status) =>{
    this.setState({Product9Visible:status});
  }
  
}

export default Product;