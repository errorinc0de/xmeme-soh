import React, { Component } from 'react';
import axios from 'axios';
import TimelineItems from './timelineItems';
import './timeline.css';

const backendUrl = "https://xmeme-soh.herokuapp.com/memes";

class timeline extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            memes: []
        }
    }
    componentDidMount(){
        var timelineItems = [],memes = [];
        axios.get(backendUrl).then(res => {
            timelineItems = res.data;
            const itemLen = timelineItems.length;
            for(let i=itemLen-1,count=0;i>=0 && count<=100;i--,count++){
                memes.push(timelineItems[i]);
            }
            this.setState({memes: memes})
        })
    }

    render() {
        return(
            <div className = "timeLineClass">
                {this.state.memes && this.state.memes.map((meme) => {
                    return(<TimelineItems items={meme} key={meme.id}></TimelineItems>)
                })}
                
            </div>
        )
    }
}

export default timeline;
