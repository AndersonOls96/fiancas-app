import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Movements({ data }){
    const [showValue, setShowValue] = useState(false)

    return(
        <TouchableOpacity style={styles.container} onPress={()=> setShowValue(prev => !prev)}>
            <Text style={styles.date}>{data.date?.toDate  ? data.date.toDate().toLocaleDateString('pt-BR') : ''}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                {showValue ?(
                    <Text style={data.type === 'receita' ? styles.value : styles.expenses}>
                        {data.type === 'receita' ? `R$ ${data.value}` : `R$ -${data.value}`}
                    </Text>
                ):(
                    <View style={styles.skeleton}/>
                )}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{ flex:1, marginBottom: 24, borderBottomWidth: 0.5,  borderBottomColor: '#dadada'},
    content:{ flexDirection: 'row', justifyContent: 'space-between', marginTop:2, marginBottom:8},
    date: { color: '#dadada', fontWeight: 'bold'},
    label: { fontWeight: 'bold', fontSize: 16},
    value: { fontSize: 16, color:'#2ecc71', fontWeight:'bold' },
    expenses: { fontSize: 16, color: '#e74c3c', fontWeight: 'bold' },
    skeleton: { marginTop: 6, width: 80, height: 10, backgroundColor: '#dadada', borderRadius: 8 }
})