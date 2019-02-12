import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import styles from './styles/InputAreaStyles';

export default class InputArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boxShadow: null
    };
  }
  static propTypes = {
    ref: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    styles: PropTypes.object,
    secureTextEntry: PropTypes.bool
  };
  textInputonFocusStyleHandle() {
    this.setState({ boxShadow: styles.boxShadow });
  }
  textInputonBlurStyleHandle() {
    this.setState({ boxShadow: null });
  }
  render() {
    return (
      <TextInput
        onFocus={() => this.textInputonFocusStyleHandle()}
        onBlur={() => this.textInputonBlurStyleHandle()}
        secureTextEntry={this.props.secureTextEntry || false}
        underlineColorAndroid='transparent'
        placeholder={this.props.placeholder}
        ref={this.props.ref}
        style={[styles.textInput, this.props.styles, this.state.boxShadow]}
        keyboardType='default'
        returnKeyType='next'
        autoCapitalize='none'
        autoCorrect={false}
        maxLength={600}
        onChangeText={this.props.onChangeText}
      />
    );
  }
}
