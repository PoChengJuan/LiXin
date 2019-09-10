import React from 'react';
import { Menu, Icon, Layout,Affix } from 'antd';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import '../../App.css'
import './Main.css'
import CSILogo from '../pic/LiXin.png' 
import ShoppingCar from '../Components/ShoppingCar.js';
import Home from '../Components/Home.js'
import Product from '../Components/Product.js'
import Contact from '../Components/Contact.js'
const {
  Header, Footer, Content,
} = Layout;


const BranchData = [
  {
    key:1,
    shopname:'xxx'
  }
]
class MainPage extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      Branch: window.localStorage.getItem('branch'),
      BranchList:BranchData,
      StockPage: false,
      ScrapPage: false,
      isAuth:'',
      Display:'',
      visible:false,
      warningData:[],
      current:'1'
    }
      this.saveRef = ref => {this.refDom = ref};
  }
  ShopChangeHandle = e => {
    console.log('dropdown change to '+e.key)
    this.setState({Branch:this.state.BranchList[e.key-1].branch})
    window.localStorage.setItem('branch',this.state.BranchList[e.key-1].branch);
  }
  StockFunction(e){
    this.setState({StockPage:true})
  }
  ScrapFunction(e){
    this.setState({ScrapPage:true})
  }
  LogoutFunction(){
    window.sessionStorage.setItem('isAuth','false');
    this.setState({isAuth:'false'});
  }
  render(){
    const routes = [
      {
        path: "/",
        exact: true,
        //main: () => <Info Branch={this.state.Branch} Width={1500} />
        main: () => <Home />
      },
      {
        path: '/Product',
        exact: true,
        main: () => <Product />
      },
      {
        path: "/ShoppingCar",
        exact: true,
        main: () => <ShoppingCar/>
      },
      {
        path: "/Contact",
        exact: true,
        main: () => <Contact/>
      }
    ];
    const { StockPage,ScrapPage } = this.state;
    if(window.sessionStorage.getItem('isAuth') === 'false'){
      return <Redirect to={'/'} />
    }
    if(StockPage === true){
      return <Redirect to={'User'} />
    }
    if(ScrapPage === true){
      return <Redirect to={'Scrap'} />
    }
    console.log('Main')
    return(
      <div className="MainPage">
        <Layout>
        <Router>
          <Affix offsetTop={this.state.top}>
            <Header className="Header">
            <img className="CSILOGO" src={CSILogo} alt="CSILOGO" />

              <Menu onClick={this.handleClick} defaultSelectedKeys={['1']} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="1">
                  <Icon type="home" />
                  <span className="nav-text">首頁</span>
                  <Link to='/'></Link>
                </Menu.Item>
                <Menu.Item key="2" >
                  <Icon type="appstore" />
                  <span className="nav-text">產品</span>
                  <Link to='/Product' />
                </Menu.Item>
                <Menu.Item key="3" >
                  <Icon type="shopping-cart" />
                  <span className="nav-text">購物車</span>
                  <Link to='/ShoppingCar' />
                </Menu.Item>
                <Menu.Item key="4" >
                  <Icon type="phone" />
                  <span className="nav-text">聯絡我們</span>
                  <Link to='/Contact' />
                </Menu.Item>
              </Menu>
            </Header>
          </Affix>
              
                  
                  <Content className="Content">
                    <div style={{ display: "flex",width: "100%",height: "100%" }}>
                      <div ref={this.saveRef} style={{ flex: 1, padding: "10px", width: "0%" }}>
                        {routes.map((route, index) => (
                          // Render more <Route>s with the same paths as
                          // above, but different components this time.
                          <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                          />
                        ))}
                      </div>
                    </div>
                  </Content>
              </Router>  
              
            <Footer className="Footer"></Footer>
        </Layout>
        
      </div>
    )
  }
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  componentWillMount() {
    console.log('componentWillMount')
    console.log(window.localStorage.getItem('shopname'))
    //console.log(this.state.Branch)
    //this.setState({isAuth:window.sessionStorage.getItem('isAuth')});
    //console.log(window.sessionStorage.getItem('isAuth'))
    

    if(window.sessionStorage.getItem('permission') === '9'){
      this.setState({Position:'開發者',
      Display:true});
    }else if(window.sessionStorage.getItem('permission') === '7'){
      this.setState({Position:'老闆',
      Display:false
      //  Display:true
      });
    }
  }
  
  
}

export default MainPage;
