import React from 'react';
import { StyleSheet, Image,ScrollView, Text, View,TouchableOpacity, TextInput } from 'react-native';
import Colors from './Colors';
import Container1 from './HomeScreenContainer';
const styles = StyleSheet.create({
  container: {
    left: 20,
    top: 20,
    height: 50,
    width: 100
  },
});
const Home = ({navigation}) => {
  
  return (

    <View
      showsVerticalScrollIndicator={false}
      style={{
        height: 700
      }}
    >
      <View style={{
        backgroundColor: "#4941A2",
        height: 162
      }}>
        <View style={{
          flexDirection: "row"
        }}>
          <Image style={styles.container}
            source={require('./assets/logok.png')}></Image>
          <Text style={{
            left: 50,
            top: 25,
            fontSize: 20,
            color: "#F7B030"
          }}>{'Dijital Kreatif \nAjans'}
          </Text>
        </View>
        <View style={{
          flexDirection: "row",
          left: 10,
          top: 60,
          height: 35,
          width: 400,
          elevation: 2,
          borderRadius: 10,
          backgroundColor: "white"
        }}>
          <TextInput placeholder='Search for products,brans and more' ></TextInput>
        </View>
      </View>
      <ScrollView>
        <View style={{
          flexDirection: "row",
          top: 5,
          left: 20
        }}>
          
        </View>
        <View style={{
          flexDirection: "row",
          width: 350,
          right: 10,
          justifyContent: 'space-between',
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('NewCustomerScreen')} >
            <Container1 text="Yeni Müşteri" color={Colors.purple} colorCircle={Colors.darkPurple} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('CustomerListContainer')} >
            <Container1 text="Müşteri Listesi" color={Colors.blue} colorCircle={Colors.darkBlue} />
          </TouchableOpacity>

        </View>
        <View style={{
          marginTop: 30,
          flexDirection: "row",
          width: 350,
          right: 10,
          justifyContent: 'space-between',
        }}>
          <TouchableOpacity>
            <Container1 text="Arama Geçmişi" color={Colors.green} colorCircle={Colors.darkGreen} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Container1 text="zaman" color={Colors.brown} colorCircle={Colors.darkBrown} />
          </TouchableOpacity>
        </View>
        <View style={{
          marginTop: 30,
          flexDirection: "row",
          width: 350,
          height: 170,
          right: 10,
          justifyContent: 'space-between',
        }}>
          <TouchableOpacity>
            <Container1 text="zaman" color={Colors.green} colorCircle={Colors.darkGreen} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Container1 text="zaman" color={Colors.brown} colorCircle={Colors.darkBrown} />
          </TouchableOpacity>
        </View>
        <View style={{
          marginTop: 30,
          flexDirection: "row",
          width: 350,
          height: 170,
          right: 10,
          justifyContent: 'space-between',
        }}>
          <TouchableOpacity>
            <Container1 text="zaman" color={Colors.green} colorCircle={Colors.darkGreen} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Container1 text="zaman" color={Colors.brown} colorCircle={Colors.darkBrown} />
          </TouchableOpacity>
        </View>
        <View style={{
          marginTop: 30,
          flexDirection: "row",
          width: 350,
          height: 250,
          right: 10,
          justifyContent: 'space-between',
        }}>
          <TouchableOpacity>
            <Container1 text="zaman" color={Colors.green} colorCircle={Colors.darkGreen} />

          </TouchableOpacity>
          <TouchableOpacity>
            <Container1 text="zaman" color={Colors.brown} colorCircle={Colors.darkBrown} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

  )
}
export default Home;