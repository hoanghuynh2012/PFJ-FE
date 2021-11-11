import {StyleSheet} from 'react-native';
import {COLOR} from '../../assets/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOR.GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '30%',
    tintColor: COLOR.WHITE,
    marginTop: 200,
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 26,
    color: COLOR.WHITE,
    fontWeight: 'bold',
  },
  info: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: COLOR.WHITE,
    margin: 2,
    padding: 16,
    textAlign: 'center',
  },
});
export default styles;
