import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

const ProductList =()=>{
    const [data,setData] =useState([]);
    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts=()=>{
        const URL='https://dummyjson.com/products/';

        fetch(URL)
        .then((res)=>{
        if(!res.ok){
            throw new Error('error');
            }
            return res.json();
        })
        .then((data)=>{
            setData(data.products);
        })
        .catch((error)=>{
            console.log("Error fetching data",error);
        });
    };
    return(
        <View>
            <FlatList
            data={data}
            renderItem={({item})=>(
                <View style={styles.container}>
                    <View style={styles.cover}>
                    <Image source={{uri:item.thumbnail}} style={styles.images}/>
                    <View style={styles.detail}>
                        <Text style={styles.title}>
                            Title: {item.title}
                        </Text>
                        <Text style={styles.content}>
                            Desciption: {item.description}
                        </Text>
                        <Text style={styles.content}>
                            Price: {item.price}
                        </Text>
                        <Text style={styles.content}>
                            Price :{item.price}
                        </Text>
                        <Text style={[styles.content,styles.discount]}>
                            Discount : {item.discountPercentage}
                        </Text>
                        <Text style={styles.content}>
                            Rating: {item.rating}
                        </Text>
                        <Text style={styles.content}>
                            Stock: {item.stock}
                        </Text>
                        <Text style={styles.content}>
                            Brand: {item.brand}
                        </Text>
                        <Text style={styles.content}>
                            Category:{item.category}
                        </Text>
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>DETAIL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>ADD</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>DELETE</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
    
        </View>
            )}
                
            />
        </View>
    )
};
const styles=  StyleSheet.create({
    container:{
        marginTop:10,
    },
    cover:{
        flex:1,
        flexDirection:'row',
        alignItems:"center",
        padding:20,
    },
    images:{
        width:80,
        height:80,
        padding:10,
    },
    detail:{
        flex:1,
        justifyContent:"center",
        marginLeft:30,
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        padding:10,
        justifyContent:"center",
    },
    discount:{
        color:'#39e75f',
    },
    content:{
        paddingVertical:5,
    },
    viewButton:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    button:{
        borderRadius:5,
        backgroundColor:'blue',
        padding:10,
    },
    textButton:{
        fontWeight:'bold',
        color:'white',
    },
});
export default ProductList;