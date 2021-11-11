import {StyleSheet} from 'react-native';
import {COLOR} from '../../assets/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  viewBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
  },
  textButtonBuy: {
    fontSize: 22,
    fontFamily: 'SF-Pro-Display-Semibold',
    textAlign: 'center',
    color: COLOR.WHITE,
  },
  buttonBuy: {
    backgroundColor: COLOR.GREEN,
    height: '30%',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 16,
  },
  containerItem: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 24,
    borderColor: COLOR.WHITE,
    borderWidth: 1,
    margin: 8,
  },
  viewItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewBottomItem: {
    flexDirection: 'row',
    height: '30%',
    justifyContent: 'space-around',
    marginTop: 8,
    alignItems: 'center',
  },
  buttonChangeQuantity: {
    backgroundColor: COLOR.WHITE,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textOldPrice: {
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
export default styles;
