import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";



const EditCustomerScreen = (navigation) => {
  return (

    <View style={{ padding: 20, flexDirection: "column", backgroundColor: "white", height: 700 }}>
      <Text style={{ paddingLeft: 7, fontSize: 20, color: "#4941A2" }}>Müşterinin Adı ve Soyadı:</Text>
      <TextInput style={{ width: 300, paddingVertical: 25, paddingLeft: 15, elevation: 5 }} placeholder="Müşterinin adını ve Soyadını giriniz:" ></TextInput>

      <Text style={{ paddingLeft: 7, fontSize: 20, color: "#4941A2" }}>Firma İsmi:</Text>
      <TextInput style={{ width: 300, paddingVertical: 25, paddingLeft: 15, elevation: 5 }} placeholder="Firmanın adını giriniz:" ></TextInput>

      <Text style={{ paddingLeft: 7, fontSize: 20, color: "#4941A2" }}>Telefon Numarası:</Text>
      <TextInput style={{ width: 300, paddingVertical: 25, paddingLeft: 15, elevation: 5 }} placeholder="Tarihi Giriniz:" ></TextInput>

      <View style={{ padding: 10 }}>
        <TouchableOpacity style={{ paddingVertical: 7, width: 100, height: 50, backgroundColor: "#4941A2" }}>
          <Text style={{ fontSize: 19, color: "white", textAlign: "center" }}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default EditCustomerScreen;