import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 5,
    },

    FlatList: {
        width: screenWidth,
        alignSelf: 'center',
    },

    header: {
        width: screenWidth,
        height: screenWidth * 0.15,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2a010',
    },

    novaLista: {
        marginRight: 17
    },

    todasListas: {
        marginTop: 8,
        width: screenWidth -10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderRadius: 6,
        backgroundColor: '#fff',
    },

    listaTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3c3c3c'
    },

    listaDescricao: {
        fontSize: 16,
        color: '#808080'
    },

    botaoSoprebosicao: {
        backgroundColor: "#fff",
        flex: 1,
        borderRadius: 0
    }

});