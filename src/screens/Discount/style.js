import {StyleSheet} from 'react-native';
import {COLOR} from '../../assets/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOR.WHITE,
  },
  viewItemCategory: {
    marginLeft: 16,
    marginRight: 8,
  },
  textItemCategory: {
    fontSize: 18,
    fontFamily: 'SF-Pro-Display-Bold',
  },
  viewItemPlants: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    margin: 16,
    backgroundColor: '#ffff',
  },
  imageItem: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
  },
  titleItem: {
    fontSize: 18,
    color: COLOR.BLACK,
    fontFamily: 'SFProText-Medium',
    marginBottom: 8,
  },
  contentItem: {
    flexDirection: 'column',
    marginLeft: 8,
    width: 220,
  },
});
export default styles;
