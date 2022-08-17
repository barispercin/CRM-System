import React from "react";
import { Alert, Image, View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import { Linking } from 'react-native'


const deleteButtonAlert = () =>
    Alert.alert(
        "Emin misin?",
        "Bu müşteri silinicek. Bu işlem geri alınamaz.",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    );
const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 200,
    },
});
const CustomerCardScreen = ({ navigation }) => {
    return (

        <View style={{ alignItems: "center", justifyContent: 'center', flexDirection: "column", backgroundColor: "white", height: 700 }}>
            <Image style={styles.container} source={require('./assets/logok.png')}>
            </Image>
            <Text style={{ fontSize: 25, color: "black" }}>Bahadır Aydın</Text>
            <Text style={{ fontSize: 25, color: "black" }}>DijitalKa</Text>
            <Text style={{ fontSize: 25, color: "black" }}>05392646946</Text>

            <View style={{ flexDirection: "row", paddingTop: 20 }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => Linking.openURL(`tel:+90(539)-264-6946`)} style={{ borderRadius: 10, paddingVertical: 11, paddingLeft: 33, backgroundColor: "green", height: 60, width: 100 }}>
                        <Text style={{ color: "white", fontSize: 20 }}>Ara</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ paddingLeft: 15, }}>
                    <TouchableOpacity onPress={() => navigation.navigate('EditCustomerScreen')} style={{ borderRadius: 10, paddingVertical: 11, paddingLeft: 15, backgroundColor: "#4941A2", height: 60, width: 100 }}>
                        <Text style={{ color: "white", fontSize: 20 }}>Düzenle</Text>
                    </TouchableOpacity>
                </View >

                <View style={{ paddingLeft: 15 }}>
                    <TouchableOpacity onPress={deleteButtonAlert} style={{ borderRadius: 10, paddingVertical: 11, paddingLeft: 40, backgroundColor: "red", height: 60, width: 100 }}>
                        <Text style={{ color: "white", fontSize: 20 }}>Sil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default CustomerCardScreen;