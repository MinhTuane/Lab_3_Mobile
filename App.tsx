import { useState } from "react";
import {BottomNavigation} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ProductList from "./Product/Product";
import Product_Add from "./Product/Product_Add";
import Product_Search from "./Product/Product_Search";
import Product_Detail from "./Product/Product_Detail";

 const App =() =>{
  const[index,setIndex] =useState(0);
  const[routes] = useState([
    {key:'ProductList',title:'Products',focusedIcon:'folder'},
    {key:'Product_Add',title:"Add",focusedIcon:'folder'},
    {key:'Product_Search',title:'Search',focusedIcon:'find'},
    {key:'Product_Detail',title:'Detail',focusedIcon:'calendar'},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    ProductList:ProductList,
    Product_Add: Product_Add,
    Product_Search:Product_Search,
    Product_Detail:Product_Detail,
  });
   return(
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{index,routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        />
    </SafeAreaProvider>
   );
 };
 export default App;