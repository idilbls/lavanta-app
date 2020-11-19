import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Dimensions} from 'react-native';

const {width} = Dimensions.get("window");
const height = width * 0.8; // 60%

const images = [
    'https://images2.imgbox.com/5e/a1/u3wKelVu_o.jpg',
    'https://images2.imgbox.com/fb/2b/j0xhbaWy_o.jpg',
    'https://images2.imgbox.com/37/58/WjhFRdwj_o.jpg'
]

const Home = props =>{
state={
    active:0
}
    return(
        <View style={styles.container}>           
            <View style={styles.top}>
                <View style={styles.slider}>
                    <ScrollView 
                    pagingEnabled 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >
                    {
                        images.map((image, index) =>(
                            <Image
                            key={index}
                            source={{uri: image}}
                            style={styles.slidercontent}
                            />
                        ))
                    }
                    </ScrollView>
                    <View style={styles.dots}>
                    {
                        images.map((i, k) => (
                            <Text key={k} style={k==this.state.active ? styles.pagingActiveText : styles.pagingText}>•</Text>
                        ))
                    }                      
                    </View>
                </View>                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",        
    },
    top: {
        backgroundColor: "#5994ad",
        width: 375,
        height:158,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,

    },
    slider: {
        marginTop: 90,
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height,       
    },
    slidercontent: {
        width: 350,
        height: 137,
        resizeMode: 'cover',
        borderRadius: 5,
        marginEnd: 15,
        marginStart: 15,
    },
    dots: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 165,
        alignSelf: 'center',
    },
    pagingText: {
        color: '#888',
        margin: 3,
        fontSize: 20,
    },
    pagingActiveText: {
        color: 'white',
        margin: 3,
        fontSize: 20,
    },
});

export default Home;