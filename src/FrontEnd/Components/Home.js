import React from 'react';
import {  } from 'antd';

import './Home.css'

import MainPic from '../pic/MainPic.png' 

class Home extends React.Component{
    render(){
        return(
            <div className='HomePage'>
                <img alt="example" src={MainPic} />
                <div className='HomeContent'>
                <h1>關於我們</h1>
            </div>
            </div>
            
        )
    }
}
export default Home;