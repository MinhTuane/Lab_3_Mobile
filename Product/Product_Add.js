import { useState } from "react";
import {  Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";




const Product_Add =()=>{
    const [title,setTitle] = useState('');
    const [description,setDesciption] = useState('');
    const[price,setPrice] = useState('');
    const [discountPercentage,setDiscountPercentage] = useState('');
    const [rating, setRating] = useState('');
    const[stock,setStock]= useState('');
    const [brand,setBrand] = useState('');
    const [category,setCategory] = useState('');
    const [images,setImages]= useState('');
    handleSubmit =()=>{
        fetch('https:dummyjson.com/products/add',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                title: title,
                description:description,
                price:price,
                discountPercentage: discountPercentage,
                rating :rating,
                stock: stock,
                brand: brand,
                category : category,
                images: images,
            }),
        })
        .then((res)=>res.json())
            .then(console.log);
           Alert.alert("Add Successful");
    };
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.content}>
                Title
            </Text>
            <TextInput style={styles.input} placeholder="Enter title" onChangeText={newtext=>setTitle(newtext)}/>
            <Text style={styles.content}>
                Description
            </Text>
            <TextInput onChangeText={newtext=>setDesciption(newtext)} style={styles.input} placeholder="Ente description"/>
            <Text style={styles.content}>
                Price
            </Text>
            <TextInput style={styles.input} placeholder="Enter price" onChangeText={newText=>setPrice(newText)} keyboardType="numeric"/>
            <Text style={styles.content}>
                Discount Percentage
            </Text>
            <TextInput style={styles.input} placeholder="Enter discount percentage" onChangeText={newText=>setDiscountPercentage(newText)} keyboardType="numeric"/>
            <Text style={styles.content}>
                Rating
            </Text>
            <TextInput style={styles.input} placeholder="Enter rating" onChangeText={newText=>setRating(newText)}  keyboardType="numeric"/>
            <Text style={styles.content}>
                Stock
            </Text>
            <TextInput style={styles.input} placeholder="Enter stock" onChangeText={newText=>setStock(newText)}/>
            <Text style={styles.content}>
                Brand
            </Text>
            <TextInput style={styles.input} placeholder="Enter brand" onChangeText={newText=>setBrand(newText)}/>
            <Text style={styles.content}>
                Category
            </Text>
            <TextInput style={styles.input} placeholder="Enter category" onChangeText={newText=>setCategory(newText)}/>
            <Text style={styles.content}>
                Image :
            </Text>
            <TextInput style={styles.input} placeholder="Enter imgaes URL(s)"onChangeText={newText=>setImages(newText)}/>
            <TouchableOpacity style={styles.button} onPress={()=>handleSubmit()}>
                <Text style={styles.textButton}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        margin:10,
    },
    content:{
        padding:5,
        fontWeight:'bold',
        marginLeft:0,
    },
    input:{
        marginLeft:10,
        padding: 5,
    },
    button:{
        backgroundColor:'blue',
        paddingVertical:10,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    textButton:{
        fontWeight:'bold',
        color:'white',
        fontSize:16,
    },
});
export default Product_Add;