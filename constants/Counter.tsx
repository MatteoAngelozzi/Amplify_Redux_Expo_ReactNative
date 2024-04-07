import { AppDispatch, RootState } from "../state/store"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementAsync } from "../state/counter/counterSlice"
import { Text, View } from "../components/Themed"
import { StyleSheet, Button, TextInput, Pressable } from "react-native"

export default function Counter() {

    const count = useSelector((state : RootState) => state.counter.value)
    const updateCount = useSelector((state : RootState) => state.counter.updateCount)
    const updating = useSelector((state : RootState) => state.counter.updating)?.toString()
    const dispatch = useDispatch<AppDispatch>()
    
    return (
        <View>

            <View style={styles.container}>
                <Text style={styles.title}>Count: </Text>
                <Text style={styles.title}> {count}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Update: </Text>
                <Text style={styles.title}> {updateCount}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Is updating ? : </Text>
                <Text style={styles.title}> {updating}</Text>
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <View style={styles.container}>
                <Button title="Increment" onPress={() => dispatch(incrementAsync(19))} />
                <Button title="Decrement" onPress={() => dispatch(decrement())} />
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={styles.container}>
                <Pressable onPress={() => dispatch(reset())}>
                    <Text style={styles.title}>Reset</Text>
                </Pressable>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});