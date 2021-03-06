import React, { Component } from 'react';
import axios from 'axios';

import DisplayPic from './DisplayPic/DisplayPic';
import DescCard from './DescCard/DescCard';

class User extends Component {
  state = {
    streamData: {},
  }

  componentDidMount() {
    const username = this.props.username;

    this.getUserfromAPI(username, 'streams')
      .then(res => {
        this.setState({
          streamData: res.data
        })
      })  
  }

  getUserfromAPI = (username, type) => {
    const base_url = "https://wind-bow.glitch.me/twitch-api/";
    return axios.get(`${base_url}/${type}/${username}`);
  }

  render() {
    const stream = this.state.streamData.stream;
    return (
      <div className="w-90 pa2 flex flex-row items-center mb1 br3 shadow-4 bg-light-green">
        <DisplayPic src={this.props.displayPic} />
        <DescCard 
          display_name={this.props.display_name}
          username={this.props.username} 
          url={this.props.url}
          isOnline={stream ? true : false} 
          game={stream && stream.game } 
          status={stream && stream.channel.status} />
      </div>  
    );
  }
}

export default User;