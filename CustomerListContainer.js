
import React from 'react';
import { TouchableOpacity, StyleSheet, Image,  ScrollView, Text, View, } from 'react-native';


const CustomerListContainer = ({  navigation }) => {
    return (
        <View
            showsVerticalScrollIndicator={false}
            style={{
                height: 600
            }}
        >
            <ScrollView>
                <View>
                    <View style={{ backgroundColor: "#FFFFFF" }}>
                        <TouchableOpacity onPress={() => navigation.navigate('CustomerCardScreen')}>
                            <View style={styles.container}>
                                <Image style={styles.imageContainer}
                                    source={require('./assets/logok.png')} />
                                <View style={styles.textContainer}>
                                    <Text style={[styles.size1, styles.color1, styles.fontWeight1]}>Bahadır Aydın</Text>
                                    <Text style={[styles.size2, styles.color2]}>DijitalKaa</Text>
                                    <Text style={[styles.size3, styles.fontWeight1]}>05392646946</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('CustomerCardScreen')}>
                            <View style={styles.container}>
                                <Image style={styles.imageContainer}
                                    source={require('./assets/logok.png')} />
                                <View style={styles.textContainer}>
                                    <Text style={[styles.size1, styles.color1, styles.fontWeight1]}>Bahadır Aydın</Text>
                                    <Text style={[styles.size2, styles.color2]}>DijitalKa</Text>
                                    <Text style={[styles.size3, styles.fontWeight1]}>05392646946</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('CustomerCardScreen')}>
                            <View style={styles.container}>

                                <Image style={styles.imageContainer}
                                    source={require('./assets/logok.png')}
                                />
                                <View style={styles.textContainer}>
                                    <Text style={[styles.size1, styles.color1, styles.fontWeight1]}>Bahadır Aydın</Text>
                                    <Text style={[styles.size2, styles.color2]}>DijitalKa</Text>
                                    <Text style={[styles.size3, styles.fontWeight1]}>05392646946</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('CustomerCardScreen')}>
                            <View style={styles.container}>

                                <Image style={styles.imageContainer}
                                    source={require('./assets/logok.png')}
                                />
                                <View style={styles.textContainer}>
                                    <Text style={[styles.size1, styles.color1, styles.fontWeight1]}>Bahadır Aydın</Text>
                                    <Text style={[styles.size2, styles.color2]}>DijitalKa</Text>
                                    <Text style={[styles.size3, styles.fontWeight1]}>05392646946</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('CustomerCardScreen')} w>
                            <View style={styles.container}>

                                <Image style={styles.imageContainer}
                                    source={require('./assets/logok.png')}
                                />
                                <View style={styles.textContainer}>
                                    <Text style={[styles.size1, styles.color1, styles.fontWeight1]}>Bahadır Aydın</Text>
                                    <Text style={[styles.size2, styles.color2]}>DijitalKa</Text>
                                    <Text style={[styles.size3, styles.fontWeight1]}>05392646946</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('CustomerCardScreen')} w>
                            <View style={styles.container}>

                                <Image style={styles.imageContainer}
                                    source={require('./assets/logok.png')}
                                />
                                <View style={styles.textContainer}>
                                    <Text style={[styles.size1, styles.color1, styles.fontWeight1]}>Bahadır Aydın</Text>
                                    <Text style={[styles.size2, styles.color2]}>DijitalKa</Text>
                                    <Text style={[styles.size3, styles.fontWeight1]}>05392646946</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('CustomerCardScreen')} w>
                            <View style={styles.container}>
                                <Image style={styles.imageContainer}
                                    source={require('./assets/logok.png')}
                                />
                                <View style={styles.textContainer}>
                                    <Text style={[styles.size1, styles.color1, styles.fontWeight1]}>Bahadır Aydın</Text>
                                    <Text style={[styles.size2, styles.color2]}>DijitalKa</Text>
                                    <Text style={[styles.size3, styles.fontWeight1]}>05392646946</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>



    )
}
const styles = StyleSheet.create({
    image: {},

    textContainer: { flexDirection: "column", paddingLeft: 20 },
    imageContainer: { width: 70, height: 40 },
    container: {
        marginLeft: 25,
        elevation: 20,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        flexDirection: "row",
        borderRadius: 7,
        backgroundColor: "#FFFFFF",
        width: 356,
        height: 100,
        shadowOpacity: 30,
        padding: 20,
    },
    size1: { fontSize: 17 },
    size2: { fontSize: 16 },
    size3: { fontSize: 15 },
    fontWeight1: { fontWeight: "bold" },
    color1: { color: "black" },
    color2: { color: "#AAAAAA" },
},
);
export default CustomerListContainer;