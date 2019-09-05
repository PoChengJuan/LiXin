import React from 'react';
import { Card, Col, Row } from 'antd';

import './Product.css'

import pic1 from '../pic/1.png' 
import pic2 from '../pic/2.png' 
import pic3 from '../pic/3.png' 
import pic4 from '../pic/4.png' 
import pic5 from '../pic/5.png' 
import pic6 from '../pic/6.png' 

const routes = [
  {
    path: 'index',
    breadcrumbName: 'home',
  },
  {
    path: 'product1',
    breadcrumbName: 'product1',
  },
  {
    path: 'product2',
    breadcrumbName: 'product2',
  },
  {
    path: 'product3',
    breadcrumbName: 'product3',
  },
  {
    path: 'product4',
    breadcrumbName: 'product4',
  },
  {
    path: 'product5',
    breadcrumbName: 'product5',
  },
  {
    path: 'product6',
    breadcrumbName: 'product6',
  },
];
const { Meta } = Card;

class Product extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartWidth:this.props.Width,
      chartHeight:250,
    }      
    this.saveRef = ref => {this.refDom = ref};
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  render() {
  return (
    <div className='Product' ref={this.saveRef}>
      <Row gutter={16}>

        <Col span={8}>
          <Card
            hoverable
            style={{ width: 360 }}
            cover={<img alt="example" src={pic1} />}
            onClick={this.handleClick.bind(this)}
          >
            <Meta title="アイスクリスタル膠原蛋白" description="日本魚膠原蛋白、台灣虱目魚鱗膠原蛋白(含三胜肽)、以色列黃金番
              茄粉末、流行鏈球菌發酵物(含透明質酸鈉)、金頂側耳萃取物(含神經醯胺)
            " />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 360 }}
            cover={<img alt="example" src={pic2} />}
          >
            <Meta title="甄嬛美人魚" description="玉米可溶性纖維(異麥牙糊精).複合柑橘及瓜拿納萃取物(葡萄柚萃取物.麥芽糊精.瓜拿納萃取物.甜橙萃取物. 血橙萃取物).馬鈴薯萃取物.阿拉伯糖.穀蔬果發酵萃取物20-Plus(乳糖.穀類萃取物(米).鳳梨萃取物.青木瓜萃取物 酵素製劑(含乳糖分解酵素.纖維分解酵素.澱粉酵素.蛋白酵素.糖甘酵素.麥芽糊精).芽孢乳酸菌(乳酸菌Bacillus coagulans).PVP-K30.二氧化矽.硬脂酸鎂" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 360 }}
            cover={<img alt="example" src={pic3} />}
          >
            <Meta title="核彈咖啡" description="專利難消化性麥芽糊精、奶油粉、椰子油粉、即溶咖啡粉、中鏈三酸" />
          </Card>
        </Col>
      </Row>
      <br/>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 360 }}
            cover={<img alt="example" src={pic4} />}
            onClick={this.handleClick.bind(this)}
          >
            <Meta title="專利活益菌" description="日植物乳酸桿菌LP110、植物乳酸桿菌LP109、乳酸片菌PA320、初乳蛋白萃取、水溶性膳食纖維、乳酸粉、木寡糖、海藻糖、異麥芽寡糖
              產品特性：含有高活性乳酸菌及功能成分，調整體質及生理機能。且菌種採用專利多層凍晶包覆技術，可維持菌株高度存活率
            " />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 360 }}
            cover={<img alt="example" src={pic5} />}
          >
            <Meta title="綠蜂膠黃金胜肽皂" description="Propolis、Honey、Fruit Enzymes (Fruit Extract)、Golden Peptide、Amino Acids、Ginger Extract、Curcuma Aromatica Extract、Essential Oil、Propylene Glycol、Glycerin、E.D.T.A.- 4Na、Sorbitol、Sodium Hydroxide、Extra Virgin Olive Oil、Coconut Oil Fatty Acid、Titanium Dioxide、Essential Oil 、Aqua(D.I. Water)" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 360 }}
            cover={<img alt="example" src={pic6} />}
          >
            <Meta title="純南極磷蝦油 軟膠囊" description="磷蝦油100% 膠皮成分:明膠.甘油.水" />
          </Card>
        </Col>
      </Row>
      
      </div>
    )    
  }
  handleClick = () =>{
    console.log('click')
  }
  componentWillMount(){
    console.log('componentWillMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    window.removeEventListener("resize", this.updateDimensions);
  }
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  updateDimensions = (e) => { 
    console.log("StockList updateDimensions");
    const {clientWidth, clientHeight} = this.refDom;
    console.log('====================================');
    console.log(clientWidth, clientHeight, this.refDom);
    console.log('====================================');
    this.setState({
      chartWidth:clientWidth
    });
  }
}

export default Product;