import { StatusBar } from 'expo-status-bar';
import { Dimensions, Platform, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { RootState } from '@/state/store';
import { useSelector } from 'react-redux';
import { useLocalSearchParams } from 'expo-router';
import { selectTaskById } from '@/state/tasks/tasksSlice';



export default function TaskDetail() {

    const ID = useLocalSearchParams().taskDetails as string

    const task = useSelector((state : RootState) => selectTaskById(state, ID))

    if (task === undefined ) {
        return null
    }

    return (
      <View style={styles.container}>
        
        <Text style={styles.title}>{task.name}</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <View style={styles.container_list}>
          <View style={styles.list}>
              <Text style={{fontSize:20}}>Submission date:</Text>
              <Text>{task.createdAt.slice(2, 10)}</Text>
          </View>
          <View style={styles.list}>
              <Text style={{fontSize:20}}>Task status:</Text>
              <Text>{task.status}</Text>
          </View>
          <View style={styles.list}>
              <Text style={{fontSize:20}}>Task description:</Text>
              <Text>{task.description}</Text>
          </View>
        </View>

        <Pressable style={styles.button}>
          <Text style={{fontSize:20, fontWeight: 'bold'}}>Add files</Text>
        </Pressable>

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Dimensions.get('window').height * 0.05,
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
  container_list: {
    width: '90%',
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 15,
    padding: 10
  },
  list: {
    width: '100%',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  button:{
    width: '70%',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 15
  }
});
