import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box1,{justifyContent: 'flex-start'} ]}/>
      <View style={[styles.box2]} />
      <View style={styles.box3}>
         <View style={[styles.box3_1]} />
         <View style={[styles.box3_1]} />
         <View style={[styles.box3_1]} />
      </View>
      <View style={[styles.box4]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    
    
  },
  box1:{
    width: '95%',
    height: 100,
    backgroundColor:'#169',
    paddingStart: '10px'
  },
  box2:{
    width: '95%',
    height: 300,
    backgroundColor:'#500'
  },
  box3:{
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  box3_1:{
    backgroundColor: '#700',
    width: 100,
    height: 100,
  },
  box4:{
    width: '95%',
    height: 100,
    backgroundColor:'#698',
  }
});
