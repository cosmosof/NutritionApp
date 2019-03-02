import React from 'react';
import {StyleSheet} from 'react-native';
import {shallow} from 'enzyme';
import TabBarLabel from '../TabBarLabel';
import {TestHelpers} from '../../../Constants';

const {sampleText} = TestHelpers;

describe('<TabBarLabel>', () => {
  const Component = (<TabBarLabel
    focused={false}
    title={sampleText}
  />);

  describe('Structure', () => {
    it('renders correctly', () => {
      const wrapper = shallow(Component);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders external text style from object', () => {
      const Clone = React.cloneElement(Component, {styles: {textAlign: 'center'}});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders external text style from ID', () => {
      const styles = StyleSheet.create({
        containerStyle: {
          padding: 5,
        },
      });
      const Clone = React.cloneElement(Component, {styles: styles.containerStyle});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders external container style from array', () => {
      const style1 = {backgroundColor: 'yellow'};
      const styles = StyleSheet.create({
        style2: {
          maxHeight: 32,
        },
      });
      const Clone = React.cloneElement(Component, {styles: [style1, styles.style2]});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders external text style from object', () => {
      const Clone = React.cloneElement(Component, {textStyle: {color: 'black'}});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders external text style from ID', () => {
      const styles = StyleSheet.create({
        textStyle: {
          fontSize: 12,
        },
      });
      const Clone = React.cloneElement(Component, {textStyle: styles.textStyle});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders external text style from array', () => {
      const style1 = {color: 'blue'};
      const styles = StyleSheet.create({
        style2: {
          fontFamily: 'sans-serif',
        },
      });
      const Clone = React.cloneElement(Component, {textStyle: [style1, styles.style2]});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
