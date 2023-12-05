import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Product_Detail=()=>{
    const [data,setData] = useState([]);
    const filePath='https://dummyjson.com/products/2';
    
    useEffect(()=>{
        fecthData();
    },[]);
    const fecthData=()=>{
        fetch(filePath)
        .then((response)=>{
            if(!response.ok){
                throw new  Error('Network response was not ok');
            }
            return response.json();
        })
        .then((d)=>{
            setData(d);
           
        })
        .catch((error)=>{
            console.log('Error fetching data:',error);
        });
    };
    return(
        <View style={styles.container}>
                <Image source={{uri:data.thumbnail}} style={styles.thumbnail}/>
                    <View style={styles.detail}>
                        <Text style={styles.titles}>
                            Title: {data.title}
                        </Text>
                        <Text style={styles.content}>
                            Desciption: {data.description}
                        </Text>
                        <Text style={styles.content}>
                            Price: {data.price}
                        </Text>
                        <Text style={styles.content}>
                            Discount : {data.discountPercentage}
                        </Text>
                        <Text style={styles.content}>
                            Rating: {data.rating}
                        </Text>
                        <Text style={styles.content}>
                            Stock: {data.stock}
                        </Text>
                        <Text style={styles.content}>
                            Brand: {data.brand}
                        </Text>
                        <Text style={styles.content}>
                            Category:{data.category}
                        </Text>
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>Cancel</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
    );
};
const styles= StyleSheet.create({
    container:{
        flex:1,
        marginVertical:10,
    },
    input:{
        marginLeft:10,
        padding: 0,
    },
    viewButton:{
        flex:1,
        flexDirection:'row-reverse',
        marginHorizontal:20,
    },
    button:{
        borderRadius:5,
        backgroundColor:'purple',
        padding:10,
        marginHorizontal:30,
        height:40,
        
    },
    textButton:{
        fontWeight:'bold',
        color:'white',
    },
    thumbnail:{
        width:'100%',
        height:'30%',
        borderRadius:10,
    },
    titles:{
        fontWeight:'bold',
        fontSize:25,
    },
    detail:{
        flex:1,
        justifyContent:"center",
        marginLeft:20,
    },
    content:{
        marginVertical:5,
    },
});
export default Product_Detail;