import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";


const Product_Search=()=>{
    const [data,setData] = useState([]);
    const [ value,setValue] = useState('');

    let  filePath ='https://dummyjson.com/products';

    const searchProduct =() =>{
        if(value!='')
        filePath='https://dummyjson.com/products/search?q='+ value;
        fetch(filePath)
        .then((response)=>{
        if(!response.ok){
            throw new Error('Network response was not ok')    
        }
        return response.json();
        })
        .then((d)=>{
        setData(d.products)
        })
        .catch((error)=>{
        console.error('Error fetching data:',error)
    });
    };
    return(
        <View>
            <TextInput style={styles.input} placeholder="search" onChangeText={newText=>setValue(newText)}/>
            <TouchableOpacity style={styles.button} onPress={()=>searchProduct()}>
                <Text style={styles.textButton}>Search</Text>
            </TouchableOpacity>
        <FlatList 
            data={data}
            renderItem={({item})=>(
                
            <View style={styles.container}>
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
            )}
            />
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginVertical:10,
    },
    input:{
        marginLeft:10,
        padding: 0,
    },
    button:{
        backgroundColor:'blue',
        paddingVertical:10,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },
    textButton:{
        fontWeight:'bold',
        color:'white',
        fontSize:16,
    },
    thumbnail:{
        width:'100%',
        height:80,
        borderRadius:10,
    },
    title:{
        fontWeight:25,
    },
    detail:{
        flex:1,
        justifyContent:"center",
        marginLeft:20,
    },
});
export default Product_Search;
    
