import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 5,
    },

    header: {
        width: screenWidth,
        height: 60,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2a010',
    },

    textInput: {
        width: 250,
        height: 30,
        borderRadius: 8,
        backgroundColor: '#fff',
    },

    itensLista: {
        fontSize: 16,
        color: '#808080'
    },



    FlatList: {
        width: screenWidth,
        alignSelf: 'center',
    },



    novaLista: {
        marginRight: 17
    },

    todasListas: {
        marginTop: 8,
        width: screenWidth - 10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderRadius: 6,
        backgroundColor: '#fff',
    },



    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
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
    },

    botao: {
        marginTop: 8,
        width: 100,
        height: 40,
        color: '#ffff',

    },

});