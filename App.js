import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RiShip2Fill } from "react-icons/ri";
import MenuItem from '@mui/material/MenuItem';
import { makeStyles, Select } from '@material-ui/core';
import { TextField, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Pelabuhan, Layanan, Waktu, Jadwal } from './data/data'
import { Divider } from '@mui/material';
import { StackActions } from '@react-navigation/native';

var data = {
  pelabuhanAsal : '',
  pelabuhanTujuan : '',
  tanggal : '',
  jam : '',
  layanan: '',
  tiket: 0,
  pemesan:'',
  identitas: '',
  Usia: 0,
}

const FormAwal = ({navigation}) => {
  const classes = useStyles();
  const [pelabuhanAsal, setPelabuhanAsal] = useState('0');
  const [pelabuhanTujuan, setPelabuhanTujuan] = useState('0');
  const [kelasLayanan, setKelasLayanan] = useState('0');
  const [tanggal, setTanggal] = useState('0');
  const [jam, setJam] = useState('0');
  const [jumlahTiket, setTiket] = useState('1')
  const numbers = [1, 2, 3, 4, 5];
  const ubahPelabuhanAsal = (event) => {
    setPelabuhanAsal(event.target.value);
  };
  const ubahPelabuhanTujuan = (event) => {
    setPelabuhanTujuan(event.target.value);
  };
  const ubahKelas = (event) => {
    setKelasLayanan(event.target.value);
  };
  const ubahJam = (event) => {
    setJam(event.target.value);
  };
  const ubahJumlahTicket = (event) => {
    setTiket(event.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
      data.pelabuhanAsal = pelabuhanAsal,
      data.pelabuhanTujuan = pelabuhanTujuan,
      data.tanggal = tanggal,
      data.jam = jam,
      data.layanan= kelasLayanan,
      data.tiket= jumlahTiket,
    console.log(data);
    navigation.navigate('ResultScreen', { data })
  };

  const cekOrder = e =>{
    navigation.navigate('Order', { data })
  }
  return(
    <form className={classes.root} onSubmit={handleSubmit}>
    <View style={styles.single}>
          <Text style={styles.textForm}>Pelabuhan Awal</Text>
            <View style={styles.formGroup}>
              <RiShip2Fill style={{height:50, width:50, flex:1, flexGrow:0, flexShrink:0, flexBasis:50,}}/>
                <Box sx={{ bgcolor:'#b4c3db' ,width: '80%', boxShadow:10, border: 5, ml:2 }}>
                    <Select
                    fullWidth
                    options={Pelabuhan}
                    renderValue={(selected) => {
                      if (selected =='0') {
                        return <Text style={styles.textbutton}>Pilih Pelabuhan Awal</Text>;
                      }
                      return selected;
                    }}
                    variant="outlined"
                    type="text"
                    size="small"
                    value={pelabuhanAsal}
                    onChange= {ubahPelabuhanAsal}
                   >
                     {Pelabuhan.map((option) => (
                    <MenuItem key={option.key} value={option.title}>
                      <View style={{flex:1, flexDirection:'column'}}>
                      <Text style={{fontSize:10}}>{option.kota}</Text>
                      <Text style={{fontSize:15}}>{option.title}</Text>
                      </View>
                    </MenuItem>
                    ))}
                    </Select>
                </Box>
          </View>
        </View>
        <View style={styles.single}>
          <Text style={styles.textForm}>Pelabuhan Tujuan</Text>
            <View style={styles.formGroup}>
              <RiShip2Fill style={{height:50, width:50, flex:1, flexGrow:0, flexShrink:0, flexBasis:50,}}/>
              <Box sx={{ bgcolor:'#b4c3db' ,width: '80%', boxShadow:10, border: 5, ml:2 }}>
                    <Select
                    fullWidth
                    options={Pelabuhan}
                    renderValue={(selected) => {
                      if (selected =='0') {
                        return <Text style={styles.textbutton}>Pilih Pelabuhan Tujuan</Text>;
                      }
                      return selected;
                    }}
                    variant="outlined"
                    type="text"
                    size="small"
                    value={pelabuhanTujuan}
                    onChange= {ubahPelabuhanTujuan}
                   >
                     {Pelabuhan.map((option) => (
                    <MenuItem key={option.key} value={option.title}>
                      <View style={{flex:1, flexDirection:'column'}}>
                      <Text style={{fontSize:10}}>{option.kota}</Text>
                      <Text style={{fontSize:15}}>{option.title}</Text>
                      </View>
                    </MenuItem>
                    ))}
                    </Select>
                </Box>
          </View>
        </View>
        <View style={styles.single}>
          <Text style={styles.textForm}>Kelas Layanan</Text>
            <View style={styles.formGroup}>
              <RiShip2Fill style={{height:50, width:50, flex:1, flexGrow:0, flexShrink:0, flexBasis:50,}}/>
              <Box sx={{ bgcolor:'#b4c3db' ,width: '80%', boxShadow:10, border: 5, ml:2 }}>
                    <Select
                    fullWidth
                    options={Layanan}
                    renderValue={(selected) => {
                      if (selected =='0') {
                        return <Text style={styles.textbutton}>Pilih Kelas Layanan</Text>;
                      }
                      return selected;
                    }}
                    variant="outlined"
                    type="text"
                    size="small"
                    value={kelasLayanan}
                    onChange= {ubahKelas}
                   >
                     {Layanan.map((option) => (
                    <MenuItem key={option.key} value={option.kelas}>
                      <View style={{flex:1, flexDirection:'column'}}>
                      <Text style={{fontSize:15}}>{option.kelas}</Text>
                      <Text style={{fontSize:10}}>Harga: Rp.{option.harga}</Text>
                      </View>
                    </MenuItem>
                    ))}
                    </Select>
                </Box>
          </View>
        </View>
        <View style={styles.single}>
          <Text style={styles.textForm}>Tanggal Masuk pelabuhan </Text>
            <View style={styles.formGroup}>
              <RiShip2Fill style={{height:50, width:50, flex:1, flexGrow:0, flexShrink:0, flexBasis:50,}}/>
              <Box sx={{ bgcolor:'#b4c3db' ,width: '80%', boxShadow:10, border: 5, ml:2 }}>
                    <TextField
                    fullWidth
                    placeholder='Pilih Tanggal'
                    variant="outlined"
                    type="date"
                    size="medium"
                    value={tanggal}
                    onChange={e => setTanggal(e.target.value)}
                    >
                    </TextField>
                </Box>
          </View>
        </View>
        <View style={styles.single}>
          <Text style={styles.textForm}>Kelas Layanan</Text>
            <View style={styles.formGroup}>
              <RiShip2Fill style={{height:50, width:50, flex:1, flexGrow:0, flexShrink:0, flexBasis:50,}}/>
              <Box sx={{ bgcolor:'#b4c3db' ,width: '80%', boxShadow:10, border: 5, ml:2 }}>
                    <Select
                    fullWidth
                    options={Pelabuhan}
                    renderValue={(selected) => {
                      if (selected =='0') {
                        return <Text style={styles.textbutton}>Pilih Jam Masuk</Text>;
                      }
                      return selected;
                    }}
                    variant="outlined"
                    type="text"
                    size="small"
                    value={jam}
                    onChange= {ubahJam}
                   >
                     {Waktu.map((option) => (
                    <MenuItem key={option.value} value={option.waktu}>
                      <View style={{flex:1, flexDirection:'column'}}>
                      <Text style={{fontSize:10}}>{option.waktu}</Text>
                      <Text style={{fontSize:15}}>{option.value} WIB</Text>
                      </View>
                    </MenuItem>
                    ))}
                    </Select>
                </Box>
          </View>
        </View>
        <View style={styles.singleBottom}>
              <Box sx={{ bgcolor:'#b4c3db' ,width: '90%', boxShadow:10, border: 5, ml:2, alignSelf:'center', marginTop:10, }}>
                    <Select
                    fullWidth
                    options={Pelabuhan}
                    renderValue={(selected) => {
                      if (selected =='0') {
                        return <Text style={styles.textbutton}>Pilih Kelas Layanan</Text>;
                      }
                      return (
                        <View style={{flex:1, flexDirection:'row'}}>
                        <Text style={{fontSize:15, flexGrow:1, alignSelf:'flex-start'}}>Dewasa</Text>
                        <Text style={{fontSize:15, flexGrow:1, alignSelf:'flex-end', textAlign:'right'}}>{selected} Orang</Text>
                        </View>
                      );
                    }}
                    variant="outlined"
                    type="text"
                    size="small"
                    value={jumlahTiket}
                    onChange= {ubahJumlahTicket}
                   >
                     {numbers.map((number) => (
                    <MenuItem key={number.toString()} value={number}>
                      <View style={{flex:1, flexDirection:'row'}}>
                      <Text style={{fontSize:15, flexGrow:1, alignSelf:'flex-start'}}>Dewasa</Text>
                      <Text style={{fontSize:15, flexGrow:1, alignSelf:'flex-end', textAlign:'right'}}>{number} Orang</Text>
                      </View>
                    </MenuItem>
                    ))}
                    </Select>
                </Box>
        </View>
        <View style={{marginTop:15}}>
        <Button type="submit" variant="contained" color="primary" >
          Cari
        </Button>
        <Button variant="outlined" color="primary" onClick={cekOrder} >
          Lihat Pesanan
        </Button>
        </View>
        </form>
    )

}
const SearchResult = ({navigation}) => {
  let available = true
  var adaJadwal = Jadwal.filter( (x) => {
    let cekPelAsal = Pelabuhan.filter( (x) => {
      return x.title == data.pelabuhanAsal
    })
    let cekPelTujuan = Pelabuhan.filter( (x) => {
      return x.title == data.pelabuhanTujuan
    })

    try{
        return (
            x.asal == cekPelAsal[0].title&&
            x.tujuan == cekPelTujuan[0].title
        )
    }
    catch(err){
        return available = false
    }

})
if(adaJadwal.length>0){
  return adaJadwal.map( ( i ) => {
    const onPress = e => {
      e.preventDefault();
      navigation.navigate('DetailScreen', { data:data })
    };
    let cekKelas = Layanan.filter( (x) => {
      return x.kelas == data.layanan
    })
      if(available == true){
          return(
            <TouchableHighlight key={i} onPress={onPress}>
              <View style={resultStyle.box}>
                  <View style={resultStyle.textBox}>
                      <View style={resultStyle.upperText}>
                          <Text style={resultStyle.textJudul}>{data.pelabuhanAsal}</Text>
                          <Text style={resultStyle.textJudul}>{"     >>     "}</Text>
                          <Text style={resultStyle.textJudul}>{data.pelabuhanTujuan}</Text>
                      </View>
                      <View style={resultStyle.underText}>
                          <Text style={resultStyle.textKecil}>{cekKelas[0].kelas} : Rp.{cekKelas[0].harga}</Text>
                          <Text style={resultStyle.textTanggal}>{data.tanggal}</Text>
                      </View>
                  </View>
              </View>              
            </TouchableHighlight>
          )
      }
  })
}else{
  return(
      <View style={resultStyle.boxNotAvail}>
          <Text style={resultStyle.textNotAvail}>Maaf, jadwal Kapal tidak tersedia</Text>
      </View>
  )
}
}
const HomeScreen = ({navigation}) =>{
  return (
    <View style={{alignItems:'center', backgroundColor: 'lightgray'}}>
      <View style={styles.container}>
        <Text style={styles.teksLogo}>Kapalzy</Text>
        <FormAwal navigation={navigation}/>
      </View>
    </View>
  );
}

const Order = () =>{
  const onPressBack = e => {
    navigation.dispatch(StackActions.popToTop());
  };
  const multiply = (num1, num2) => {
    return num1 * num2;
  };
  let cekKelas = Layanan.filter( (x) => {
    return x.kelas == data.layanan
  })
  let totalHarga = multiply(cekKelas[0].harga, data.tiket);
  return (
    <View style={DetailStyle.container}>
      <View style={DetailStyle.grayBox}>
      <View style={{flexDirection:'row'}}>
      <Text style={{flexBasis:30, fontWeight:'bold', fontsize:30,flex:1, flexGrow:1, padding:10}}>{data.pelabuhanAsal}</Text>
      <RiShip2Fill style={{height:50, width:50, flex:2, flexGrow:0, flexShrink:0, flexBasis:50,}}/>
      <Text style={{flexBasis:30, fontWeight:'bold', fontsize:30, flex:3,flexGrow:1, padding:10, textAlign:'right'}}>{data.pelabuhanTujuan}</Text>
      </View>
      <Text>Jadwal Masuk Pelabuhan</Text>
      <Text>{data.tanggal}</Text>
      <Text>{data.waktu}</Text>
      <Text>Layanan</Text>
      <Text>{data.layanan}</Text>
      <Divider variant="middle" />
      <Text>Dewasa x {data.tiket}</Text>
      <Text>{cekKelas[0].harga}</Text>
    </View>
    <View style={{flexDirection:'row', paddingVertical:10, justifyContent:'space-between'}}>
    <Text style={DetailStyle.textTotal}>Total</Text>
    <Text style={DetailStyle.textTotal}>Rp.{totalHarga}</Text>
    </View>
    <Button onClick={onPressBack}>Kembali Ke HomeScreen</Button>
  </View>
    )
}

const ResultScreen = ({route, navigation}) =>{

  const { data } = route.params;

  return (
      <View>
        <SearchResult navigation={navigation} data = {data}/>
      </View>
    )
}

const DetailScreen = ({navigation}) =>{
  const multiply = (num1, num2) => {
    return num1 * num2;
  };
  let cekKelas = Layanan.filter( (x) => {
    return x.kelas == data.layanan
  })
  let totalHarga = multiply(cekKelas[0].harga, data.tiket);
  const onPressNext = e => {
    e.preventDefault();
    data.pemesan = pemesan
    data.identitas = identitas
    data.Usia = Usia
    console.log(data)
    navigation.navigate('Order', { data:data })
  };
  const onPressBack = e => {
    navigation.dispatch(StackActions.popToTop());
  };
  const [pemesan, setPemesan] = useState('');
  const [identitas, setIdentitas] = useState('');
  const [Usia, setUsia] = useState(0);
  const ubahPemesan = (event) => {
    setPemesan(event.target.value);
  };
  const ubahIdentitas = (event) => {
    setIdentitas(event.target.value);
  };
  const ubahUsia = (event) => {
    setUsia(event.target.value);
  };
  return (
    <View style={{alignItems:'center', backgroundColor: 'lightgray'}}>
      <View style={DetailStyle.container}>
        <Text style={styles.teksLogo}>Kapalzy</Text>
        <Text style={DetailStyle.textA}>Kuota Tersedia (10000)</Text>
        <Text style={DetailStyle.textA}>Rincian</Text>
        <View style={DetailStyle.grayBox}>
          <View style={{flexDirection:'row'}}>
          <Text style={{flexBasis:30, fontWeight:'bold', fontsize:30,flex:1, flexGrow:1, padding:10}}>{data.pelabuhanAsal}</Text>
          <RiShip2Fill style={{height:50, width:50, flex:2, flexGrow:0, flexShrink:0, flexBasis:50,}}/>
          <Text style={{flexBasis:30, fontWeight:'bold', fontsize:30, flex:3,flexGrow:1, padding:10, textAlign:'right'}}>{data.pelabuhanTujuan}</Text>
          </View>
          <Text>Jadwal Masuk Pelabuhan</Text>
          <Text>{data.tanggal}</Text>
          <Text>{data.waktu}</Text>
          <Text>Layanan</Text>
          <Text>{data.layanan}</Text>
          <Divider variant="middle" />
          <Text>Dewasa x {data.tiket}</Text>
          <Text>{cekKelas[0].harga}</Text>
        </View>
        <View style={{flexDirection:'row', paddingVertical:10, justifyContent:'space-between'}}>
        <Text style={DetailStyle.textTotal}>Total</Text>
        <Text style={DetailStyle.textTotal}>Rp.{totalHarga}</Text>
        </View>
        <Text style={{fontSize:20, textAlign:'left'}}>Data Pemesan</Text>
        <View>
        <View style={styles.single}>
          <Text style={styles.textForm}>Nama Lengkap</Text>
            <View style={styles.formGroup}>
                <Box sx={{ bgcolor:'#b4c3db' ,width: '90%', boxShadow:10, border: 5, ml:2 }}>
                    <TextField
                    fullWidth
                    placeholder='Masukan Nama'
                    variant="outlined"
                    type="text"
                    size="small"
                    value={pemesan}
                    onChange= {ubahPemesan}
                   >
                    </TextField>
                </Box>
          </View>
        </View>
        <View style={styles.single}>
          <Text style={styles.textForm}>Identitas</Text>
            <View style={styles.formGroup}>
                <Box sx={{ bgcolor:'#b4c3db' ,width: '90%', boxShadow:10, border: 5, ml:2 }}>
                    <TextField
                    fullWidth
                    placeholder='Masukan nomor identittas (cnth: 10001001010)'
                    variant="outlined"
                    type="text"
                    size="small"
                    value={identitas}
                    onChange= {ubahIdentitas}
                   >
                    </TextField>
                </Box>
          </View>
        </View>
        <View style={styles.single}>
          <Text style={styles.textForm}>Usia</Text>
            <View style={styles.formGroup}>
                <Box sx={{ bgcolor:'#b4c3db' ,width: '90%', boxShadow:10, border: 5, ml:2 }}>
                    <TextField
                    fullWidth
                    placeholder='Masukan Usia anda'
                    variant="outlined"
                    type="number"
                    size="small"
                    value={Usia}
                    onChange= {ubahUsia}
                   >
                    </TextField>
                </Box>
          </View>
        </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Button variant="outlined" onClick={onPressBack}>Kembali</Button>
          <Button variant="contained" onClick={onPressNext}>Lanjutkan</Button>
        </View>
      </View>
    </View>
  )
}
const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
              headerShown: false,
            }}/>
          <Stack.Screen options={{
          title: 'Hasil Pencarian',
        }}name="ResultScreen" component={ResultScreen}/>
          <Stack.Screen options={{
          title: 'Detail Pesanan',
        }}name="DetailScreen" component={DetailScreen}/>
        <Stack.Screen options={{
          title: 'Pesanan Anda',
        }}name="Order" component={Order}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));
const DetailStyle = StyleSheet.create({
  textTotal:{
    fontsize:20,
  },
  textA:{
      fontWeight:'bold',
      fontSize: 14,
      padding: 10,
  },
  grayBox:{
    backgroundColor:'lightblue',
    width:'90%',
    alignSelf:'center',
    paddingVertical:10,
  },
  container:{
    justifyContent: "center",
    width: "95%",
    marginVertical: '15%',
    padding: 20,
    backgroundColor: 'white',
    elevation: "10dp",
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 3,
  }
})

const resultStyle = StyleSheet.create({
  textJudul:{
      fontWeight:'bold',
      fontSize: 20,
      padding: 10,
  },
  textKecil:{
    fontSize:15,
    padding:10,
    
  },
  textTanggal:{
    fontSize:15,
    padding:10,
    color: '#e89348',
    fontWeight:'bold',
  },
  notAvailable:{
      alignItems: 'center',
  }, 
  box:{
    backgroundColor:'#b4c3db' ,
    width: '90%', 
    boxShadow:10, 
    border: 5, 
    borderColor: 'black',
    marginLeft:2, 
    alignSelf:'center', 
    marginTop:10, 
    borderRadius: 10,
  },
  boxNotAvail:{
      backgroundColor: '#363c40',
      borderRadius: 10,
      padding: 10,
      width: '80%',
      left: '10%',
      elevation: 5,
      top: '100%',
      alignItems: 'center',
  },
  textNotAvail:{
      textAlign: 'center',
      color: '#f0f0f0',
  },
  userIcon: {
      marginTop: 25,
      fontSize: 60,
      paddingHorizontal: 50,
      alignItems: 'center',
  },
  upperText:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: 30,
      marginRight: 30,
  },
  Image:{
      width: 60,
      resizeMode: 'contain',
      height: 60,
  },
  underText:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 30,
      marginRight: 30,
  },
  text:{
      fontWeight: 'bold',
      color: '#f0f0f0',
  },
  textBlue:{
      fontWeight: 'bold',
      color: '#a6d1ed',
  }
})

const styles = StyleSheet.create({
  singleBBottom:{
    width: '100%',
    marginBottom: 10,
    color: "#777",
    alignSelf: "center",
  },
  buttonBottom:{
    width: '100%',
    marginLeft: 10,
    marginBottom: 10,
    marginTop:20,
    color: "#777",
    alignSelf: "center",
  },
  teksLogo:{
    textAlign: 'center',
    fontSize: 38,
    padding: 10,
    color: 'blue',
    fontWeight: 'bold',
  },
  single:{
    width: '100%',
    marginLeft: 10,
    marginBottom: 10,
    color: "#777",
    alignSelf: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: 'center',
    width: "95%",
    marginVertical: '15%',
    padding: 10,
    backgroundColor: 'white',
    elevation: "10dp",
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 3,
  },
  textForm:{
    textAlign:'left',
    paddingBottom: 10,
    fontSize: 15,
    color: "#777"
  },
  formGroup:{
    flexDirection: 'row',
    justifyContent: 'center',
    width: "100%",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#b4c3db",
    paddingLeft: 10,
    marginLeft:20,
    marginRight:10,
    flex: 2,
    flexShrink: 1,
    flexGrow:1,
    paddingVertical:10,
    borderRadius:5,
  },
  textbutton:{
    fontWeight: 'bold',
    textAlign: 'left'
  },
});


export default App;