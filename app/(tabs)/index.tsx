import { FlatList, Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View, SafeAreaView } from '@/components/Themed';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/state/store';
import { useEffect } from 'react';
import { porpertiesList } from '@/state/properties/popertiesSlice';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { Link, router } from 'expo-router';
import { head } from 'aws-amplify/api';

export default function ToDoList() {

  const colorScheme = useColorScheme()
  const properties = useSelector((state : RootState) => state.properties)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(porpertiesList())
  }, [])

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Welcome back USER</Text>
        <Pressable onPress={() => router.navigate('modal')}>
            {({ pressed }) => (
              <FontAwesome
                name="user-circle"
                size={80}
                color={Colors[colorScheme ?? 'light'].text}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
      </View>

      <FlatList data={properties} renderItem={({item}) => (

        <Pressable style={styles.list} onPress={()=>router.navigate(`./${item.id}`)}>
          {({ pressed }) => (
          <>
          <Text style={{fontSize:18, opacity: pressed? 0.5 : 1}}>{item.name}</Text>
          <Text style={{opacity: pressed? 0.5 : 1}}>{item.createdAt.slice(2, 10)}</Text>
          </>
          )}
        </Pressable>
        
      )} />

      <Pressable style={styles.add_button}>
        {({ pressed }) => (
          <FontAwesome
            name="plus"
            size={25}
            color={Colors[colorScheme ?? 'light'].tint}
            style={{ opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '90%',
    marginVertical: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  list: {
    flex: 1,
    height: 50,
    width: '90%',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: Colors.light.tint,
    borderRadius: 15,
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  add_button: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.light.tint,
  }
});
