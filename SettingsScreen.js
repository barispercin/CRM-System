import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
function SettingsScreen() {
    return (
      <View style={{ paddingHorizontal: 160, paddingVertical: 290 }}>
      <TouchableOpacity style={{ paddingVertical: 7, width: 100, height: 50, backgroundColor: "#4941A2" }}>
        <Text style={{ fontSize: 19, color: "white", textAlign: "center" }}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
    );
  }
export default SettingsScreen;