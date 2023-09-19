import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cardContainer}>
                <Card>
                    <Card.Title>This is Card Title</Card.Title>
                    <Card.Divider />
                    <Text style={{ marginBottom: 10 }}>This is a card from react-native-elements</Text>
                    <Button
                        title="Go to Screen 1"
                        type="outline"
                        onPress={() => navigation.push('Home')}
                    />
                </Card>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        width: '90%',
    },
});





