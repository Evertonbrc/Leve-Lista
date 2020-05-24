import React from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Itens(){

    return(

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.listaTitulo}>Mercado</Text>
            </View>

            <View style>
                <View style={styles.textInput} >
                    <TextInput
                        value={"Digite um item para adicionar a lista"}
                    />
                    <View style={styles.botaoAdicionarItem}>
                        <TouchableOpacity onPress={() => {}}>
                            <Feather name="plus-square" size={24} color="#1a81b7"></Feather>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            <FlatList 
                    style={styles.FlatList}
                    showsVerticalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    keyExtractor={Itens => String(Itens)}

                    renderItem={() =>(
                    
                        <View style={styles.lista}>
                            <View style={styles.Item}>
                                <Text style={styles.itensLista}>Item</Text>
                            </View>

                        <View style={styles.botaoExcluir}>
                            <TouchableOpacity onPress={() => {}}>
                                <Feather name="trash-2" size={24} color="#e02041"></Feather>
                             </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => {}}>
                                <Feather name="check" size={24} color="#1a81b7"></Feather>
                             </TouchableOpacity>
                        </View>
                        
                    </View>
                )}
            />
        </View>
    );
}