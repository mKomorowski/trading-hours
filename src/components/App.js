import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Exchange from './Exchange';
import exchanges from '../constants/exchanges'; 

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Date.now(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: Date.now(),
      });
    }, 1000);
  }

  render() {
    const { time } = this.state;

    return (
      <div>
        <Grid stackable columns={3} container verticalAlign='middle' style={{ marginTop: '5vh' }} >
          {
            exchanges.map(exchange => (
              <Grid.Column key={exchange.id}>
                <Exchange {...exchange} time={time}/>
              </Grid.Column>
            ))
          }
        </Grid>  
      </div>
    );
  }
};
