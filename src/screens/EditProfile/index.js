import React from 'react';
import {TouchableOpacity, Text, Image, View, TextInput} from 'react-native';
import styles from './style';
import Header from '../../components/Header';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {COLOR} from '../../assets/colors';
import ImagePicker from 'react-native-image-crop-picker';
const DATA = [
  {
    id: 1,
    name: 'Hoang Huynh',
    image: 'https://picsum.photos/200/300',
    address: `3 Newbridge Courtand. 
  Chino Hills, CA 91709`,
    phone: '(+84) 395 956 275',
    email: 'hoanghuynh5555@gmail.com',
  },
];
const Index = ({navigation}) => {
  const takePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };
  return (
    <View style={styles.container}>
      <Header
        left={true}
        title="Edit Profile"
        right={false}
        navigation={navigation}
      />
      <View style={{flex: 11}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 100, height: 100, borderRadius: 10}}
            source={{uri: DATA[0].image}}></Image>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: -10,
              right: 130,
              backgroundColor: COLOR.GREEN,
              borderRadius: 10,
            }}
            onPress={() => takePhoto()}>
            <EvilIcons name="camera" size={40} color={COLOR.WHITE} />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.textInput}
          value={DATA[0].name}
          placeholder={DATA[0].name}
        />
        <TextInput
          style={styles.textInput}
          value={DATA[0].phone}
          placeholder={DATA[0].phone}
        />
        <TextInput
          style={styles.textInput}
          value={DATA[0].email}
          placeholder={DATA[0].email}
        />
        <TextInput
          style={styles.textInput}
          value={DATA[0].address}
          placeholder={DATA[0].address}
          å
        />
        <View style={{flex: 1}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Index;
