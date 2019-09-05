import React from 'react';
import { Row, Col,Typography } from 'antd';
import './ShoppingCar.css'

const{Title} = Typography


class ShoppingCar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartWidth:this.props.Width,
      chartHeight:500
    }      
    this.saveRef = ref => {this.refDom = ref};
    this.updateDimensions = this.updateDimensions.bind(this)
  }
  render(){
    return(
      <Row>
        <Col span={24}>
          <div className='ShoppingCar'>
            <Title level={2}>Coming soon...</Title>
          </div>
        </Col>
      </Row>      
    )
  }

  
  componentWillMount(e) {
    console.log('componentWillMount');
    
  }
  updateDimensions = (e) => { 
        console.log("AreaChart updateDimensions");
        const {clientWidth, clientHeight} = this.refDom;
    console.log('====================================');
    console.log(clientWidth, clientHeight, this.refDom);
    console.log('====================================');
    this.setState({
      chartWidth:clientWidth
    });
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    window.removeEventListener("resize", this.updateDimensions);
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
}

export default ShoppingCar