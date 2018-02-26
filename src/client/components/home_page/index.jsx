import React, { Component } from 'react';
import axios from 'axios';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      grapqlData: '',
    };
  }

  componentDidMount() {
    return axios.get(`/api/graphql?query={hello}`)
    .then(response => response.data)
    .then(data => {
      console.log('data ---> ', data);
      this.setState({
        loading: false,
        graphqlData: data.data.hello,
      });
    })
    .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        { this.state.loading ? (
          <div className='text'>
            Thanks for using my starting template!
          </div>
        ) : (
          <div className='text'>
            {this.state.graphqlData}
          </div>
        ) }
      </div>
    );
  };
}
