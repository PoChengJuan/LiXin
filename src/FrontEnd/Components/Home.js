import React from 'react';
import { Typography,Divider } from 'antd';

import './Home.css'

import MainPic from '../pic/MainPic.png' 

const { Title, Paragraph } = Typography;

class Home extends React.Component{
    render(){
        return(
            <div className='HomePage'>
                <img alt="pic" src={MainPic} />
                <Divider />
                <div className='HomeContent'>
                
                <Title>關於我們</Title>
                <Paragraph>
                儷馨生技公司於2018年創立，由於現代全球逐漸走向高齡少子化，現代人對於保健食品的需求也越來越大。本公司以保健及美容食品為主，與專業研發團隊本公司研發出「安全、有效」的保健食品。並以專業、誠懇的態度為顧客服務，讓現代人不再因為生活忙碌而無法顧及身體的健康。
                </Paragraph>
                <Title level={3}>我們的堅持</Title>
                <Paragraph>
                食安事件頻傳的現今，我們期許自己，仍能保有一個優質原料商的堅持。當配方開立後，我們開始進行儷馨製造流程層層把關 : 來源→是否安全→栽種→是否安全→加工→是否安全→試驗臨床→是否安全→才能選入我們的配方原料中。 我們除了警惕自身，同時也希望大家能繼續維持保健營養品的初心－帶給人們健康。
                </Paragraph>
                <Title level={3}>我們的服務</Title>
                <Paragraph>
                    <ul>
                        <li>調配最適合您客群的產品</li>
                        <li>為產品規劃最有特色的行銷訴求</li>
                        <li>為您找尋稀有且市場獨家的專利原料</li>
                        <li>量身訂製研發獨特且符合您需求的劑型</li>
                        <li>跨國際性合作方案</li>
                    </ul>
                </Paragraph>
                <Title level={3}>我們的團隊</Title>
                <Paragraph>
                儷馨生技的一站式服務，讓您免除產品開發的麻煩。我們樂於傾聽您的想法及需求，由經驗豐富的專業研究人員精心進行產品研發。
                我們為您提供以下專業開發流程：
                    <ul>
                        <li>選用獨特專利原料</li>
                        <li>營養師進行配方設計</li>
                        <li>劑型穩定性測試</li>
                        <li>獨家調味</li>
                        <li>試作打樣</li>
                    </ul>

                </Paragraph>
                </div>
            </div>
            
        )
    }
}
export default Home;