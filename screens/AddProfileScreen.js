import React from "react";
import {
  TextInput,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import moment from "moment";
import { SafeAreaView } from "react-navigation";
import { Formik } from "formik";
import * as Yup from "yup";
import API, { graphqlOperation } from "@aws-amplify/api";
import uuidv1 from "uuid/v1";

import DatePicker from "react-native-datepicker";
import InputLabel from "../components/InputLabel";
import InputArea from "../components/InputArea";
import InputSection from "../components/InputSection";
import { createNutrition } from "../src/graphql/mutations";

import ErrorText from "../components/ErrorText";
import styles from "./styles/AddProfileStyles";
import { Colors, Fonts, ActivityLevel } from "../constants";
import { toCm, toKg } from "../transforms";
import {
  Card,
  ListItem,
  Button,
  Icon,
  ButtonGroup,
  FormValidationMessage
} from "react-native-elements";
const api = user =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.email === "hello@gmail.com") {
        reject({ email: "Email already use" });
      } else {
        resolve();
      }
    }, 3000);
  });
export default class AddProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Add New Nutrition Profile"
  };
  constructor(props) {
    super(props);
    this.state = {
      isKgUnitOn: true,
      isCmUnitOn: true
    };
  }

  toggleWeightUnit = () => {
    this.setState(({ isKgUnitOn }) => ({ isKgUnitOn: !isKgUnitOn }));
  };
  toggleHeightUnit = () => {
    this.setState(({ isCmUnitOn }) => ({ isCmUnitOn: !isCmUnitOn }));
  };
  _handleSubmit = async (values, bag) => {
    // console.warn(values, bag);
    const name = values.name;
    const cm = this.state.isCmUnitOn ? values.cm : toCm(values.ft, values.in);
    const kg = this.state.isKgUnitOn ? values.kg : toKg(values.lbs);
    const gender = values.gender;
    const dob = moment(values.dob).toISOString();
    const activityIndex = values.activityIndex;

    console.warn(name, cm, kg, name, dob, activityIndex);
    //const profileData = await API.graphql(graphqlOperation(createNutrition));
    const profileDataDetails = {
      input:{
        profileId: uuidv1(),
        name: values.name,
        gender: values.gender,
        dob: moment(values.dob).toISOString(),
        weight: this.state.isKgUnitOn ? values.kg : toKg(values.lbs),
        height: this.state.isCmUnitOn ? values.cm : toCm(values.ft, values.in),
        activity_level: values.activityIndex
      }     
    };
    
    try {
      const graphqldata =await API.graphql(graphqlOperation(createNutrition, profileDataDetails));
      console.log('graphqldata:', graphqldata)
    } catch (err) {
      console.log('error: ', err)
    }
  };
  render() {
    const { isKgUnitOn, isCmUnitOn } = this.state;

    const maxDate = moment().toISOString();
    const weightButtons = ["kg", "lbs"];
    const heightButtons = ["cm", "ft"];

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Formik
            initialValues={{
              name: "",
              isKgUnitOn: isKgUnitOn,
              isCmUnitOn: isCmUnitOn,
              gender: "female",
              activityIndex: 0,
              dob: "",
              kg: "",
              lbs: "",
              ft: "",
              cm: "",
              in: ""
            }}
            onSubmit={this._handleSubmit}
            validationSchema={Yup.object().shape({
              isKgUnitOn: Yup.boolean(),
              isCmUnitOn: Yup.boolean(),
              name: Yup.string().required("Name is required"),
              kg: Yup.string().when("isKgUnitOn", {
                is: true,
                then: Yup.string().required("enter weight in kg")
              }),
              lbs: Yup.string().when("isKgUnitOn", {
                is: false,
                then: Yup.string().required("enter weight in lbs")
              }),
              cm: Yup.string().when("isCmUnitOn", {
                is: true,
                then: Yup.string().required("enter height in cm")
              }),
              ft: Yup.string().when("isCmUnitOn", {
                is: false,
                then: Yup.string().required("enter height ft")
              }),
              in: Yup.string().when("isCmUnitOn", {
                is: false,
                then: Yup.string().required("enter height inch")
              }),
              dob: Yup.string().required("DOB is required")
            })}
            render={({
              values,
              handleSubmit,
              setFieldValue,
              errors,
              touched,
              setFieldTouched,
              isValid,
              isSubmitting
            }) => {
              return (
                <React.Fragment>
                  <View style={styles.inputRow}>
                    <InputLabel
                      label="Name"
                      containerStyle={{ marginLeft: 10 }}
                    />
                    <InputSection
                      containerStyle={{ width: 220 }}
                      label="enter a name"
                      autoCapitalize="none"
                      value={values.name}
                      onChange={setFieldValue}
                      onTouch={setFieldTouched}
                      name="name"
                      error={touched.name && errors.name}
                    />
                  </View>
                  <View style={styles.inputRow}>
                    <InputLabel
                      label="Weight"
                      containerStyle={{ marginLeft: 10 }}
                    />

                    <InputSection
                      containerStyle={{ width: 80, marginTop: 5 }}
                      label={isKgUnitOn ? "kg" : "lbs"}
                      autoCapitalize="none"
                      value={isKgUnitOn ? values.kg : values.lbs}
                      onChange={setFieldValue}
                      onTouch={setFieldTouched}
                      name={isKgUnitOn ? "kg" : "lbs"}
                      error={
                        isKgUnitOn
                          ? touched.kg && errors.kg
                          : touched.lbs && errors.lbs
                      }
                    />
                    <ButtonGroup
                      onPress={() => {
                        this.toggleWeightUnit();
                        setFieldValue("isKgUnitOn", !isKgUnitOn);
                      }}
                      selectedIndex={isKgUnitOn ? 0 : 1}
                      buttons={weightButtons}
                      containerStyle={{ height: 40, width: 70 }}
                      selectedButtonStyle={{
                        backgroundColor: Colors.vividBlue
                      }}
                      textStyle={styles.buttonGroupText}
                    />
                  </View>
                  <View style={styles.inputRow}>
                    <InputLabel
                      label="Height"
                      containerStyle={{ marginLeft: 10 }}
                    />
                    <InputSection
                      containerStyle={{ width: 80, marginTop: 5 }}
                      label={isCmUnitOn ? "cm" : "ft"}
                      autoCapitalize="none"
                      value={isCmUnitOn ? values.cm : values.ft}
                      onChange={setFieldValue}
                      onTouch={setFieldTouched}
                      name={isCmUnitOn ? "cm" : "ft"}
                      error={
                        isCmUnitOn
                          ? touched.cm && errors.cm
                          : touched.ft && errors.ft
                      }
                    />
                    {!isCmUnitOn && (
                      <InputSection
                        containerStyle={{ width: 80, marginTop: 5 }}
                        label="in"
                        autoCapitalize="none"
                        value={values.in}
                        onChange={setFieldValue}
                        onTouch={setFieldTouched}
                        name="in"
                        error={touched.in && errors.in}
                      />
                    )}
                    <ButtonGroup
                      onPress={() => {
                        this.toggleHeightUnit();
                        setFieldValue("isCmUnitOn", !isCmUnitOn);
                      }}
                      selectedIndex={isCmUnitOn ? 0 : 1}
                      buttons={heightButtons}
                      containerStyle={{ height: 40, width: 70 }}
                      selectedButtonStyle={{
                        backgroundColor: Colors.vividBlue
                      }}
                      textStyle={styles.buttonGroupText}
                    />
                  </View>
                  <View style={styles.inputRow}>
                    <InputLabel
                      label="Gender"
                      containerStyle={{ paddingLeft: 10 }}
                    />
                    <ButtonGroup
                      buttonStyle={{ borderColor: Colors.gray }}
                      innerBorderStyle={{
                        width: 0.5,
                        borderColor: Colors.gray
                      }}
                      containerStyle={{ height: 40, width: 220 }}
                      selectedTextStyle={{ color: "white" }}
                      selectedButtonStyle={{
                        backgroundColor: Colors.vividBlue
                      }}
                      onPress={index =>
                        setFieldValue("gender", index === 0 ? "female" : "male")
                      }
                      selectedIndex={values.gender === "female" ? 0 : 1}
                      buttons={["female", "male"]}
                      textStyle={styles.buttonGroupText}
                    />
                  </View>
                  <View style={styles.inputRow}>
                    <InputLabel
                      label="Activity Level"
                      containerStyle={{ marginLeft: 10 }}
                    />
                    <View style={{ flexDirection: "column", width: 220 }}>
                      {ActivityLevel.map(e => (
                        <TouchableOpacity
                          key={e.index}
                          style={[
                            styles.activityInput,
                            values.activityIndex === e.index && {
                              ...styles.activeList
                            }
                          ]}
                          onPress={() =>
                            setFieldValue("activityIndex", e.index)
                          }
                        >
                          <Text
                            style={[
                              styles.listHeader,
                              values.activityIndex === e.index && {
                                ...styles.activeListText
                              }
                            ]}
                          >
                            {e.name}
                          </Text>
                          <Text
                            style={[
                              styles.listText,
                              values.activityIndex === e.index && {
                                ...styles.activeListText
                              }
                            ]}
                          >
                            {e.description}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                  <View style={styles.inputRow}>
                    <InputLabel
                      label="DOB"
                      containerStyle={{ marginLeft: 10 }}
                    />
                    <DatePicker
                      onOpenModal={() => setFieldTouched("dob", true)}
                      maxDate={maxDate}
                      showIcon={false}
                      style={{ width: 220 }}
                      date={values.dob}
                      mode="date"
                      placeholder="select a date"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateInput: {
                          borderRadius: 5,
                          borderColor: "transparent",
                          backgroundColor: "white"
                        },
                        dateText: {
                          color: Colors.charcoal
                        }
                      }}
                      onDateChange={date => setFieldValue("dob", date)}
                    />
                  </View>
                  {touched.dob && errors.dob && (
                    <Text style={styles.error}>DOB is required</Text>
                  )}
                  <Button
                    backgroundColor="blue"
                    buttonStyle={styles.button}
                    title="Submit"
                    onPress={handleSubmit}
                    disabled={!isValid || isSubmitting}
                    loading={isSubmitting}
                  />
                </React.Fragment>
              );
            }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
