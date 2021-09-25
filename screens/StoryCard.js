import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <TouchableOpacity style={styles.container}onPress={()=>
          this.props.navigation.navigate("StoryScreen",{story:this.props.story})
}>
        
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.CardContainer}>
<Image source={require("../assets/story_image_1.png")}
style={styles.StoryImage}>
</Image>

<View style={styles.TitleContainer}>

      <Text style={styles.storyTitleText}>
        {this.props.story.title}
      </Text>
 
      <Text style={styles.storyAuthorText}>
        {this.props.story.author}
      </Text>
      <Text style={styles.storyDescriptionText}>
        {this.props.story.description}
      </Text>
</View>
<View style={styles.actionContainer}>
  <View style={styles.likeButton}>
<ionicons name={"hearts"} size={RFValue(30)} color={"white"} />
<Text style={styles.likeText}>
        12k
</Text>
  </View>
</View>
          
          </View>
        </View>
        </TouchableOpacity>
        <View style={styles.container}>
            <View style={this.state.light_theme?styles.container}>
            </View>
        </View>

      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  containerLight:{
    flex:1,
    backgroundColor:"white"
  }
  CardContainer:{
    margin:RFValue(13),
    backgroundColor:"#2f345d",
    borderRadius:RFValue(20)
  },
  StoryImage:{
    resizeMode:"contain",
    width:"95%",
    alignSelf:"center",
    height:RFValue(250)
  },
  TitleContainer:{
    paddingLeft:RFValue(20),
  justifyContent:'center'
  },
  storyTitleText:{
    fontSize:RFValue(25),
     fontFamily:"Bubblegum-Sans",
    color:"white"
  },
  storyAuthorText:{
    fontSize:RFValue(18),
    fontFamily:"Bubblegum-Sans",
   color:"white"
  },
  descriptionText:{
    fontSize:RFValue(13),
    fontFamily:"Bubblegum-Sans",
   color:"white",
   paddingTop:RFValue(10)
  },
  actionContainer: { justifyContent: "center", alignItems: "center", padding: RFValue(10) },
  likeButton: { width: RFValue(160), height: RFValue(40), justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: "#eb3948", borderRadius: RFValue(30) },
  likeText: { color: "white", fontFamily: "Bubblegum-Sans", fontSize: RFValue(25), marginLeft: RFValue(5) }
  
});
