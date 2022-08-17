import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/Ionicons";
import { Linking } from 'react-native'
// import all the components we are going to use
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  FlatList,
  TouchableOpacity,
} from 'react-native';

// import CallLogs API
import CallLogs from 'react-native-call-log';
import { ScrollView } from 'react-native-gesture-handler';

const App = () => {
  const [listData, setListDate] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (Platform.OS != 'ios') {
        try {
          //Ask for runtime permission
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
            {
              title: 'Call Log Example',
              message: 'Access your call logs',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            CallLogs.loadAll().then((c) => setListDate(c));
            CallLogs.load(3).then((c) => console.log(c));
          } else {
            alert('Call Log permission denied');
          }
        } catch (e) {
          alert(e);
        }
      } else {
        alert(
          'Sorry! You can’t get call logs in iOS devices because of the security concern',
        );
      }
    }
    fetchData();
  }, []);

  const ItemView = ({ item }) => {
    return (
      <View showsVerticalScrollIndicator={false} style={{
        height: 100
      }}>
        <ScrollView>
          <View>

            <View style={{
              flexDirection: "row", elevation: 0.2,

              borderRadius: 2, padding: 10
            }}>

              <View style={{ flexDirection: "column", }}>
                <Text>
                  <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>{item.name ? item.name : 'NA'} </Text>
                  {'\n'}

                  <Text style={{ fontSize: 15, color: "black" }}>{item.dateTime}</Text>
                  {'\n'}
                </Text>
              </View>
              <View style={{ flexDirection: "column", }}>
                <View style={{ flexDirection: "row", paddingLeft: 35, marginTop: 15 }}>
                  <TouchableOpacity onPress={() => Linking.openURL(`tel:${item.phoneNumber}`)}>
                    <Icon
                      name="call"
                      color="black"
                      size={40}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon
                      name="call-outline"
                      size={40}
                    />
                  </TouchableOpacity>


                  {/* <Text style={{ fontSize: 20, color: "black" }}>{item.phoneNumber}</Text> */}




                </View>
              </View>

            </View>

          </View>
        </ScrollView>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
        style={{


        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={listData}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
        <View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 16,
    marginVertical: 10,
  },
});

const styles2 = StyleSheet.create({
  image: {},

  textContainer: { flexDirection: "column", paddingLeft: 20 },
  imageContainer: { width: 70, height: 40 },
  container: {
    width: 356,
    height: 120,
    borderRadius: 15,
    marginLeft: 20,
    marginTop: 10,
    elevation: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    shadowOpacity: 30,
    paddingLeft: 20
  },
  size1: { fontSize: 17 },
  size2: { fontSize: 16 },
  size3: { fontSize: 15 },
  fontWeight1: { fontWeight: "bold" },
  color1: { color: "black" },
  color2: { color: "#AAAAAA" },
},
);