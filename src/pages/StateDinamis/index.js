import React, {Component, useState} from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'


// functional component
const Counter = () => {
    const [number, setNumber] = useState(0);
    return (
        <View>
            <Text>{number}</Text>
            <Button title="tambah" onPress={() => setNumber(number + 1)} />
        </View>
    )
}

// class component
class CounterClass extends Component {
    state = {
        number: 0
    }
    render() {
        return (
            <View>
            <Text>{this.state.number}</Text>
            <Button title="tambah" onPress={() => this.setState({number: this.state.number + 1})} />
        </View>
        )
    }
}

const StateDinamis = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTitle}>
                Materi Component Dinamis dengan State
            </Text>
            <Text style={styles.titleSection}>Functional Component</Text>
            <Counter />
            <Counter />
            <Text style={styles.titleSection}>Class Component</Text>
            <CounterClass />
            <CounterClass />
        </View>
    )
}

export default StateDinamis;

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
    },
    textTitle: {
        textAlign: 'center',
    },
    titleSection: {
        marginTop: 20,
    },
});

