import {StyleSheet} from 'react-native';
import {COLOR} from '../../assets/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    flexDirection: 'column',
  },
  viewSearch: {
    padding: 6,
    flex: 0.75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    margin: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
  },
  textHeader: {
    color: COLOR.BLACK,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'SF-Pro-Display-Semibold',
  },
  title: {
    padding: 8,
    color: COLOR.BLACK,
    fontSize: 18,
    fontFamily: 'SF-Pro-Display-Semibold',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    height: 40,
    margin: 12,
  },
  viewItem: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: COLOR.WHITE,
    marginLeft: 4,
    width: '28%',
    height: '10%',
    marginBottom: 6,
    borderRadius: 10,
  },
});
export default styles;
