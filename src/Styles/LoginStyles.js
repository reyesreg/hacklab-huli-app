import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  viewContainer: {
        backgroundColor: '#edeef2',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer: {
        marginTop: 25,
        backgroundColor: '#fff',
        flexDirection: 'column',
        elevation: 2,
        marginLeft: 15,
        marginRight: 15,
        padding: 15,
        paddingLeft:50,
        paddingRight: 50,
                alignItems: 'center'
    },
    avatarContainer: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
    },
    avatar: {
        width: 150,
        height: 50
    },
    submit: {
        backgroundColor: '#11ABFE',
        width:190,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }
});