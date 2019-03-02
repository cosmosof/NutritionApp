import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import styles from './styles/InputAreaStyles';
import {
  FormInput,
  FormValidationMessage,
  FormLabel,
} from 'react-native-elements';

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
  _handleChange = value => {
    this.props.onChange(this.props.name, value);
    this.props.onTouch(this.props.name);

  };

  render() {
    const { placeholder, error, ...rest } = this.props;

    return (
      <TextInput
        onChangeText={this._handleChange}
        onFocus={() => this.textInputonFocusStyleHandle()}
        onBlur={() => this.textInputonBlurStyleHandle()}
        secureTextEntry={this.props.secureTextEntry || false}
        underlineColorAndroid='transparent'
        placeholder={placeholder}
        ref={this.props.ref}
        style={[styles.textInput, this.props.styles, this.state.boxShadow]}
        keyboardType='default'
        returnKeyType='next'
        autoCapitalize='none'
        autoCorrect={false}
        maxLength={600}
        />
    );
  }
}
