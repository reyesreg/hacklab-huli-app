import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: '#edeef2',
    paddingBottom: 70
  },
  navBarStyle: {
      backgroundColor: '#38B69A',
      elevation: 6,
  },
  floatingActionButton: {
    position: 'absolute',
    bottom: 70,
    elevation: 6,
    right: 20,
    backgroundColor:'#11ABFE',
    height: 50,
    width: 50,
    borderRadius: 25,
    zIndex: 2,
    alignItems:'center',
    justifyContent: 'center',
  },
    picker: {
      width: 130,
      alignSelf: 'flex-end',
      margin: 5
  },
  pickerItem: {
      fontSize: 1
  },
  card: {
    backgroundColor: '#fff',
    marginTop: 10,
    flexDirection: 'column',
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  titleText: {
    paddingTop: 10,
    paddingRight: 10,
    color: '#000',
    fontFamily: 'museo'
  },
  info: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginBottom: 2
  },
  infoText: {
    fontSize: 9,
    marginLeft: 5,
  },
  navTitle: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'museo',
    fontWeight: 'bold'
  }
});