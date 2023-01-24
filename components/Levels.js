import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Levels = ({ currentLevel, totalLevels }) => {

    const getLevelStyle = (level) => {
        const pastLevel = level < currentLevel;
        const presentLevel = level === currentLevel;
        
        return presentLevel ? 'currentLevelContainer' : pastLevel ? 'pastLevelContainer' : '';
    }
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Levels</Text>
        <View style={styles.mainContainer}>
            {Array.from({ length: totalLevels }, (_, i) => {
                const level = i + 1;
                return (
                    <View key={level} style={[styles.levelContainer, styles[getLevelStyle(level)]]}>
                        <Text style={[styles.levelText, styles[getLevelStyle(level)]]}>{level}</Text>
                    </View>
                );
            })}
        </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContainer: {
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
    levelContainer: {
        width: '60%',
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    levelText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A73E8',
    },
    currentLevelContainer: {
        backgroundColor: '#ffd700',
        color: 'white'
    },
    pastLevelContainer: {
        backgroundColor: '#1A73E8',
        color: 'white',
    },
    currentLevelText: {
        color: 'white'
    }
});

export default Levels;