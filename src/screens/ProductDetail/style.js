import {StyleSheet} from 'react-native';
import {COLOR} from '../../assets/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  viewItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLOR.DARK,
    borderRadius: 10,
  },
  textItem: {
    fontSize: 16,
    margin: 8,
    fontFamily: 'SFProText-Medium',
    color: COLOR.WHITE,
  },
  itemImage: {width: 150, height: 150},
  titleBody: {
    fontSize: 18,
    color: COLOR.DARK,
    fontFamily: 'SFProText-Medium',
  },
  content: {
    marginLeft: 16,
    marginRight: 16,
    fontFamily: 'SFProText-Medium',
  },
  more: {
    color: COLOR.GREEN,
    marginLeft: 16,
    marginRight: 16,
    fontFamily: 'SFProText-Medium',
  },
  viewButton: {
    flexDirection: 'row',
    height: '10%',
    justifyContent: 'space-around',
    marginTop: 8,
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLOR.DARK,
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonAdd: {
    backgroundColor: COLOR.GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '100%',
    borderRadius: 10,
  },
});
export default styles;
