import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { emailChanged, passwordChanged, loginUser, logoutUser } from '../actions';
import { Card, CardSection, TextField, Button, Spinner } from './common';

class LoginForm extends Component {
  // helper methods
  onEmailChange (text) {
    this.props.emailChanged(text); // invoke emailChanged action creator
  }

  onPasswordChange (text) {
    this.props.passwordChanged(text); // invoke passwordChanged action creator
  }

  handleUserLogin () {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  handleUserLogout () {
    this.props.logoutUser();
  }

  renderError () {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: '#fdfdfd' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderNotification () {
    if (this.props.notification) {
      return (
        <View style={{ backgroundColor: '#fdfdfd' }}>
          <Text style={styles.notificationTextStyle}>
            {this.props.notification}
          </Text>
        </View>
      );
    }
  }

  renderButton () {
    if (this.props.loading) {
      return (
        <Spinner />
      );
    }
    if (this.props.user) {
      return (
        <Button onPressProp={this.handleUserLogout.bind(this)}>
          Logout
        </Button>
      );
    }
    return (
      <Button onPressProp={this.handleUserLogin.bind(this)}>
        Login
      </Button>
    );
  }

  // render method
  render () {
    return (
      <Card>

        <CardSection>
          <TextField
            label="Email"
            placeholderText="username@email.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <TextField
            secureTextEntryProp
            label="Password"
            placeholderText="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        {this.renderNotification()}

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>

    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#ff3333'
  },
  notificationTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#00e500'
  }
};

const mapStateToProps = state => {
  const { email, password, error, notification, loading, user } = state.auth;
  return { email, password, error, notification, loading, user };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser, logoutUser }
)(LoginForm);
