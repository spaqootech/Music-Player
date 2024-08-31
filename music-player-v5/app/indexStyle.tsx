import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:600,
        color:'white',
        paddingBottom:10
    },
    body:{
        padding:10,
        backgroundColor:'black',
        flex:1
    },
    logo:{
        height:50,
        width:50,
        borderRadius:10,
        borderColor:'gray',
        borderWidth:1,
        borderStyle:'solid',
    },
    name:{
        fontSize:14,
        fontWeight:400,
        color:'white'
    },
    label:{
        fontSize:16,
        fontWeight:600,
        color:'white'
    },
    track:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:10,
        marginVertical:10
    },
    texts:{
        flex:1
    },
    trackPopup:{
        position:'absolute',
        backgroundColor:'rgba(55,55,55,1)',
        left:0,
        right:0,
        padding:5,
        borderRadius:10,
        bottom:30
    }
})

export default styles