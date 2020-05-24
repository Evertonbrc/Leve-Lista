import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Listas(){
    const navigation = useNavigation();

    function irParaItens(){
        navigation.navigate('Itens');
    }

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} />
                 
                 <View style={styles.novaLista}>
                <Feather name="file-plus" size={24} color={"#fff"} ></Feather>
                </View>
            </View>

            <FlatList
                style={styles.FlatList}
                showsVerticalScrollIndicator={false}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                keyExtractor={lista => String(lista)}
                renderItem={() =>(
                    
                    <View style={styles.todasListas}>
                        
                        <View style={styles.botaoSoprebosicao}>
                            <TouchableOpacity onPress={irParaItens}>
                                <View style={styles.lista}>
                                    <Text style={styles.listaTitulo}>Mercado</Text>
                                    <Text style={styles.listaDescricao}>Arroz, feijão, açucar...</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        
                    
                        <View>
                            <TouchableOpacity onPress={() => {}}>
                                <Feather name="trash-2" size={24} color="#e02041"></Feather>
                             </TouchableOpacity>
                        </View>
                        
                    </View>
                )}
            />
    
        </View>
    );
}