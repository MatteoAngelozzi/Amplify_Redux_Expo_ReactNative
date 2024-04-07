import { FlatList, Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/state/store';
import { useEffect } from 'react';
import { taskList } from '@/state/tasks/tasksSlice';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { Link, router } from 'expo-router';

export default function ToDoList() {

  const colorScheme = useColorScheme()
  const tasks = useSelector((state : RootState) => state.tasks)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(taskList())
  }, [])

  return (
    <View style={styles.container}>
      <FlatList data={tasks} renderItem={({item}) => (

        <Pressable style={styles.list} onPress={()=>router.navigate(`./${item.id}`)}>
          {({ pressed }) => (
          <>
          <Text style={{fontSize:18, opacity: pressed? 0.5 : 1}}>{item.name}</Text>
          <Text style={{opacity: pressed? 0.5 : 1}}>{item.createdAt.slice(11, 16)} / {item.createdAt.slice(2, 10)}</Text>
          </>
          )}
        </Pressable>
      )} />

      <Pressable style={styles.add_button}>
        {({ pressed }) => (
          <FontAwesome
            name="plus"
            size={25}
            color={Colors[colorScheme ?? 'light'].text}
            style={{ opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderColor: 'gray',
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
    alignItems: 'center'
  }
});
