import React, { Component } from 'react'
import { Appbar, TextInput, Button } from 'react-native-paper'
import { AsyncStorage, Text, View, FlatList, Image } from 'react-native'
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import AwesomeAlert from 'react-native-awesome-alerts';


import logoImg from '../../assets/logo.png';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


//import { connect } from 'react-redux'
//import { NavigationActions } from 'react-navigation'

//const Stack = createStackNavigator();



export default class asyncStorageExemplo extends Component {

    arr = [{ "id": 0, "data": "" }];
    //id = 1;
    state = {
        text: '',
        item: [
            { id: '', data: '' }
        ],
        itensLista: [
            {nomeItem: ''}
        ]

    }

    /*irParaAsyncStorage(){
    const { navigate } = this.props.navigation;
    navigate({ routeName: 'asyncStorageExemplo' })
    console.log("irParaAsyncStorage")
    }*/

    irParaItens() {
        navigation.navigate('Itens', {  })
    }


    storeData = async (nomeLista) => {
        if (this.state.text != '') {
            try {
                this.arr = this.arr.sort(function (a, b) { return a - b });
                this.arr.push({ id: this.arr.length + 1, data: this.state.text });
                //this.id++;
                await AsyncStorage.setItem(nomeLista, JSON.stringify(this.arr));

                this.componentDidMount();

                console.log(this.state)

            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Digite um nome para sua lista")
        }
    }

    removeData = async (id) => {
        try {
            //const arrFiltrado = this.arr.filter((item) => item.id !== id);

            //this.arr = this.arrFiltrado;
            //await AsyncStorage.setItem("Lista1", JSON.stringify(this.arr));
            console.log("Item do array: " + JSON.stringify(this.arr))

            this.setState({
                item: JSON.parse(await AsyncStorage.getItem("Lista1"))
            });

            //console.log(this.state);

        } catch (error) {
            console.log(error);
        }
    }

    deletarLista = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
            //console.log("DELETOU O ITEM " + key)

            this.componentDidMount();

        } catch (err) {
            console.log(err)
        }
    }


    async componentDidMount() {
        let keys = await AsyncStorage.getAllKeys()

        keys = keys.map((data, id) => ({ data, id }))
        console.log(keys)

        this.setState({
            item: keys
        })


    }


    render() {


        let renderList = this.state.item.map(item => {
            return (

                { key: item.id, data: item.data }
            )
            console.log(renderList)

        })

        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Image source={logoImg} />


                    <TextInput
                        style={styles.textInput}
                        placeholder="Teste"
                        value={String(this.state.text)}
                        onChangeText={(text) => this.setState({ text })}
                    //onBlur={ () => {
                    //    this.storeData(this.state.text);
                    //this.TextInput.clear();
                    //}}

                    />
                    {console.log(this.state.text)}

                    <View style={styles.novaLista} >
                        <TouchableOpacity onPress={() => this.storeData(this.state.text)}>
                            <Feather name="file-plus" size={24} color={"#fff"}  ></Feather>
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    style={styles.FlatList}
                    showsVerticalScrollIndicator={false}
                    data={renderList}
                    keyExtractor={renderList => String(renderList.key)}
                    renderItem={({ item: renderList }) => (


                        <View style={styles.todasListas}>

                            <View style={styles.botaoSoprebosicao}>
                                <TouchableOpacity onPress={() => this.irParaItens()}>
                                    <View style={styles.lista}>
                                        <Text style={styles.listaTitulo}>{renderList.data}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>


                            <View>
                                <TouchableOpacity onPress={() => { this.deletarLista(renderList.data) }}>
                                    <Feather name="trash-2" size={24} color="#e02041"></Feather>

                                </TouchableOpacity>
                            </View>
                        </View>

                    )}
                />

            </View>

        )
    }
}