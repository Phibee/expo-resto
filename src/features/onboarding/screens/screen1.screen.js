import React from "react";
import {
      StyleSheet,
      Text,
      View,
      ScrollView,
      ImageBackground,
} from "react-native";
import Button from "../../../components/button.component";

export const Screen1 = ({ navigation }) => {
      return (
            <View style={{ backgroundColor: "white", flex: 1 }}>
                  <ImageBackground
                        source={require("../../../../assets/wave.png")}
                        style={{
                              flex: 1,
                              position: "relative",
                        }}
                        imageStyle={{
                              resizeMode: "cover",
                              position: "absolute",
                              bottom: -100,
                        }}
                  >
                        <View style={[styles.flexCol, { flex: 1 }]}>
                              <ImageBackground
                                    source={require("../../../../assets/pattern-bg.png")}
                                    style={{
                                          flex: 1,
                                          position: "relative",
                                    }}
                                    imageStyle={{
                                          resizeMode: "center",
                                          position: "absolute",
                                          top: 0,
                                    }}
                              >
                                    <View style={styles.flexGrow}></View>
                              </ImageBackground>

                              <View
                                    style={[
                                          styles.flexShrink,
                                          {
                                                paddingBottom: 50,
                                                alignItems: "center",
                                                flexGrow: 0,
                                          },
                                    ]}
                              >
                                    <Button iconName="right">Continue</Button>
                              </View>
                        </View>
                  </ImageBackground>
            </View>
      );
};

const styles = StyleSheet.create({
      flexRow: {
            display: "flex",
            flexDirection: "row",
      },
      flexCol: {
            display: "flex",
            flexDirection: "column",
      },
      flexGrow: {
            display: "flex",
            flexGrow: 1,
      },
      flexShrink: {
            flexShrink: 0,
      },
});

export default Screen1;
