import {StyleSheet} from 'react-native';
import {COLOR} from '../../assets/colors';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffff'},
  textInput: {
    height: 50,
    margin: 12,
    padding: 10,
    marginTop: 24,
    backgroundColor: COLOR.WHITE,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: 'SFProText-Medium',
  },
  button: {
    backgroundColor: COLOR.GREEN,
    alignItems: 'center',
    height: '20%',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 8,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 18,
    color: COLOR.WHITE,
    fontFamily: 'SF-Pro-Display-Semibold',
  },
});
export default styles;
