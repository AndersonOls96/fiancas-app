import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Actions from "../../components/Actions";
import Movements from "../../components/Movements";

const list = [
    { id: 1, label: 'Boleto conta de luz', value:'300,90', date:'17/06/2026', type: 0},
    {id: 2, label: 'Pix Cliente X', value:'2500,00', date:'20/05/2026', type: 1},
    {id: 3, label: 'Salário', value:'7.200,00', date:'19/05/2026', type: 1}
]

export default function Home(){
    return(
        <View style={styles.container}>
            <Header name="João Silva"/>
            <Balance saldo="230,00" gastos="-200,00"/>
            <Actions/>
            <Text style={styles.title}>Últimas movimentações</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
            />         
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor:' #fafafa'},
    title: {fontSize: 18, fontWeight: 'bold', margin: 14},
    list:{ marginStart: 14, marginEnd: 14}
    
})