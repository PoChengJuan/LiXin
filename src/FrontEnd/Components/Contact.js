import React from 'react';
import './Contact.css'
import { Typography,Icon } from 'antd';
import axios from 'axios'
import baseURL from './AxiosAPI'
import moment from 'moment';
const { Title, Paragraph, Text } = Typography;
class Achieving extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:[],
      month:moment().format('YYY-MM'),
      chartWidth:this.props.Width,
      chartHeight:500,
      
    }      
    this.saveRef = ref => {this.refDom = ref};
    this.updateDimensions = this.updateDimensions.bind(this)
  }
  render(){
    const{chartWidth,data}=this.state
    return(
      <div className='Contact' ref={this.saveRef}>
        <Title>聯絡我們</Title>
        <Paragraph><Icon type="home" /> 公司地址：台南市中西區永福路二段219號3樓</Paragraph>
        <Paragraph><Icon type="phone" /> 電 話：(06)222-8560、(06)222-6086</Paragraph>
        <Paragraph><Icon type="file-text" /> 傳 真：(06)222-3136</Paragraph>
        <Paragraph><Icon type="mail" /> E - mail：ka3354857@gmail.com</Paragraph>
        <Paragraph>統一編號：42902873</Paragraph>
        <Paragraph>營業時間：週一至週五 / AM09:00~PM18:00</Paragraph>
        <Paragraph>【食品業者登錄字號：D-142902873-00000-6】</Paragraph>
      </div>
    )
  }
  /***********************componentWillMount********************************************/
  componentWillMount(){
    
  }
  /***********************componentWillUnmount********************************************/
  componentWillUnmount(){
    window.removeEventListener("resize", this.updateDimensions);
  }
  componentWillUpdate(){

  }
  /***********************updateDimensions********************************************/
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
  /***********************MonthPickerFunction********************************************/
  MonthPickerFunction(dates, dateStrings) {
    var lastmonth;
    window.localStorage.setItem("AchievingPageDate_Month",dateStrings)
    lastmonth = moment(dateStrings).add('month',-1).format('YYYY-MM');
    this.DataUpdate(lastmonth,dateStrings);
  }
  /***********************DataUpdate****************************************************/
  DataUpdate = (lastmonth,month) => {
    axios.get(baseURL+'/ShopData/getAchieving',
    {
      params: {
        shopname : window.localStorage.getItem('shopname'),
        branch :  window.localStorage.getItem('branch'),
        month: month,
        lastmonth:lastmonth
      }
    })
    .then( (response) =>{
      this.setState({data:response.data})  
      console.log(this.state.data)
    })
    .catch(function (error) {
      console.log(error);
    }); 
    this.setState({
      month:month})
  }
}

export default Achieving