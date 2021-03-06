import React from 'react';
import { 
    View,
    ScrollView,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import { navigationOptions } from '../config/navOptions'

const { width, height } = Dimensions.get('window');

export default class MeetupList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isLoading: true
    }
  }

  static navigationOptions = ({ navigation }) => ({

    title:'Meetup',
    ...navigationOptions
  });

  componentWillMount(){
    setTimeout(() => {
      this.setState({
        events: [
          { id: 1, title: 'Evento de Meetup 1', groupImage: 'http://angular.github.io/react-native-renderer/assets/react.png', groupName: 'ReactJs Peru' },
          { id: 2, title: 'Evento de Meetup 2', groupImage: 'http://angular.github.io/react-native-renderer/assets/react.png', groupName: 'ReactJs Peru' },
          { id: 3, title: 'Evento de Meetup 3', groupImage: 'http://angular.github.io/react-native-renderer/assets/react.png', groupName: 'ReactJs Peru' },
          { id: 4, title: 'Evento de Meetup 4', groupImage: 'http://angular.github.io/react-native-renderer/assets/react.png', groupName: 'ReactJs Peru' },
          { id: 5, title: 'Evento de Meetup 4', groupImage: 'http://angular.github.io/react-native-renderer/assets/react.png', groupName: 'ReactJs Peru' }
        ],
        isLoading: false
      });
    }, 3000);
  }

  render() {

    const { navigation } = this.props;
    return this.setState.isLoading 
    ?(<ActivityIndicator style={styles.loader} size={100} color="red" />)
    :(<ScrollView style={styles.container} >
        {this.state.events.map((event, i) => (
          <TouchableWithoutFeedback
            key = {i}
            onPress={() => navigation.navigate('Detail', {
              group: event.groupName,
              id: event.id
            })}
          >
            <View style={styles.card} >
              <Image style={styles.image} source={{ uri: event.groupImage }} />
              <View style={styles.cardContent} >
                <Text style={styles.title} >{event.title}</Text>
                <Text>Organizado por {event.groupName}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>)
  }
}

const styles = StyleSheet.create({
  loader:{
    marginTop: 100
  },
  container: {
    flex: 1,
    margin: 10,
    height
  },
  card: {
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 3,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    marginVertical: 3,
  },
  image: {
    width: 100,
    height: 100
  },
  cardContent: {
    flex: 1,
    padding: 10,
    margin: 0,
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold'
  }
})