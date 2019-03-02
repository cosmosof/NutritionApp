import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Input
} from 'react-native-elements';
import {Colors, Fonts} from './../constants'

export default class InputSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boxShadow: null
    };
  }
  _handleChange = value => {
    this.props.onChange(this.props.name, value);
  };

  _handleTouch = () => {
    this.setState({ boxShadow: null });
    this.props.onTouch(this.props.name);
  };
  textInputonFocusStyleHandle() {
    this.setState({ boxShadow: styles.boxShadow });
  }
  render() {
    const { label, error, containerStyle, inputContainerStyle, ...rest } = this.props;
    return (
        <Input
          onChangeText={this._handleChange}
          onBlur={this._handleTouch}
          onFocus={() => this.textInputonFocusStyleHandle()}
          placeholder={label}
          errorMessage={error}
          containerStyle={[containerStyle, {borderWidth: 0}]}
          inputContainerStyle={[this.state.boxShadow, styles.inputContainerStyle, inputContainerStyle]}
          inputStyle={{borderWidth: 0, paddingLeft: 10, fontSize: 12}}
          {...rest}
        /> 
    );
  }
}

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderBottomWidth: 0, backgroundColor: 'white'
  },
  boxShadow: {
    borderColor: Colors.lightMatBlue,
    shadowColor: Colors.lightMatBlue,
		shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
		shadowRadius: 3,
    elevation: 1
  }
});

