import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Flag,
  Icon,
  List,
} from 'semantic-ui-react'
import { isAfter, isBefore, format } from 'date-fns';
import { createDateFromTimeUnits } from '../../utils/time';

class Exchange extends Component {
  render() {
    const {
      id,
      city,
      country,
      flag,
      name,
      time,
      timeZone,
      openTime,
      closeTime,
    } = this.props;

    const current = new Date(time).toLocaleString("en-US", { timeZone });
    const openTimeDate = createDateFromTimeUnits(openTime.hours, openTime.minutes);
    const closeTimeDate = createDateFromTimeUnits(closeTime.hours, closeTime.minutes);
    const isOpen = isAfter(current, openTimeDate) && isBefore(current, closeTimeDate);

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <Flag name={ flag } />{ id.toUpperCase() }
          </Card.Header>
          <Card.Meta>
            { city }, { country }
          </Card.Meta>
          <Card.Description>
            <List>
              <List.Item>
                Name: <strong>{ name }</strong>
              </List.Item>
              <List.Item>
                Openning Bell: <strong>{ format(openTimeDate, 'HH:mm') } AM</strong>
              </List.Item>
              <List.Item>
                Closing Bell: <strong>{ format(closeTimeDate, 'HH:mm') } PM</strong>
              </List.Item>
              <List.Item>
                Status: <strong>{ isOpen ? 'Open' : 'Close' }</strong>
              </List.Item>
            </List>
            { isOpen
              ? <Button style={ { cursor: 'default' } } color="green">Open</Button>
              : <Button style={ { cursor: 'default' } } color="red">Closed</Button>
            }
          </Card.Description>  
        </Card.Content>
        <Card.Content extra>
          <Icon name="clock outline" />{ format(current, 'HH:mm:ss') }
        </Card.Content>
      </Card>
    )
  }
}

Exchange.propTypes = {
  id: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  timeZone: PropTypes.string.isRequired,
  openTime: PropTypes.shape({
    hours: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
  }).isRequired,
  closeTime: PropTypes.shape({
    hours: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
  }).isRequired,
}

export default Exchange;
