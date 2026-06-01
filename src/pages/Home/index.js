import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Actions from "../../components/Actions";
import Movements from "../../components/Movements";
import { db } from '../../config/firebaseConfig'
import { collection, query, where, orderBy, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { useAuth } from '../../context/AuthContext'
import { useEffect, useState } from "react";


export default function Home(){
    const { user } = useAuth()
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)

    console.log(user?.email)

    useEffect(() =>{
        if (!user) return;

        const q = query(
            collection(db, 'movements'),
            where('userId', '==', user.uid),
            orderBy('date', 'desc')
        )

        const unsubscribe = onSnapshot(
            q,
            (querySnapshot) =>{
                const movementsData = []
                querySnapshot.forEach((doc)=>{
                    movementsData.push({id: doc.id, ...doc.data()})
                })
                setList(movementsData)
                setLoading(false)
            },
            (error) =>{
                console.error('Erro ao buscar movimentações', error)
                setLoading(false)
            }
        );

        return() => unsubscribe() 
    }, [user])

    if (loading){
        <View style={{ flex:1, justifyContent: 'center', alignItems:'center' }}>
            <ActivityIndicator size='large' color='#8000ff'/>
        </View>
    }


    return(
        <View style={styles.container}>
            <Header name={user?.email || 'Usuário'}/>
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