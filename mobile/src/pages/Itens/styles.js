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
        height: screenWidth * 0.10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2a010',        
    },

    listaTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
        color: '#3c3c3c'
    },

    novaLista: {
        marginRight: 17
    },

    lista: {
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

    itensLista: {
        fontSize: 16,
        color: '#808080'
    },

    listaDescricao: {
        fontSize: 16,
        color: '#808080'
    },

    Item: {
        backgroundColor: "#fff",
        flex: 1,
        borderRadius: 0
    },

    botaoExcluir: {
        paddingHorizontal: 16,
    },

    botaoAdicionarItem: {
        paddingHorizontal: 16,
    },

    textInput: {
        marginTop: 8,
        width: screenWidth -10,
        alignSelf: 'center',
        borderRadius: 6,
        height: 40,
        borderColor: 'gray',
        backgroundColor: '#fff',
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    }

});