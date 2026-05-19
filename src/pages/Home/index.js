import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";

export default function Home(){
    return(
        <View style={styles.container}>
            <Header name="João Silva"/>
            <Balance saldo="230,00" gastos="-200,00"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor:' #fafafa'}
    
})