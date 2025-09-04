import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../Constant/Colors';
import {FONTS} from '../../Constant/Font';
import {moderateScale} from '../../PixelRatio';
// import Navigation from '../../Service/Navigation';
import {useNavigation} from '@react-navigation/native';
import model6 from '../../assets/model6.jpg';

const {width, height} = Dimensions.get('window');

// const DATA = [
//     {
//         "title" : "Mark quick reservations",
//         "subtitle" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
//     },
//     {
//         "title" : "What is Lorem Ipsum?",
//         "subtitle" : "Lorem Ipsum is simply dummy text of the printing"
//     },
//     {
//         "title" : "Where does it come from?",
//         "subtitle" : "Contrary to popular belief, Lorem Ipsum is not simply random text."
//     }
// ]

export default function Landing() {
  const Navigation = useNavigation();
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     // Navigation.navigate('PhoneNumber')
  //   }, 5000);
  //   return () => null;
  // }, [])

  return (
    //  <CustomImageBackground>
    //   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //      <Image
    //      style={{width: width/1.5,resizeMode:'contain'}}
    //      source={require('../../assets/logo.png')}
    //      />
    //      <View style={{height:150,width:'100%'}}>
    //       <Swiper
    //       style={styles.wrapper}
    //       showsButtons={false}
    //       dotColor={COLORS.textInput}
    //       activeDotColor={COLORS.button}
    //       >
    //          {
    //              DATA.map((it,key)=>
    //               <View style={styles.slide} key={key}>
    //                    <Text style={styles.text}>{it.title}</Text>
    //                    <Text style={styles.subtext}>{it.subtitle}</Text>
    //               </View>
    //              )
    //          }
    //       </Swiper>
    //      </View>
    //    </View>
    //    </CustomImageBackground>

    <ImageBackground source={model6} style={styles.bgimage} resizeMode="cover">
      <View style={styles.topContent}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            <Text>Style</Text>
            <Text style={styles.logoBold}>ON</Text>
          </Text>
        </View>
        <View style={styles.taglineContainer}>
          <Text style={styles.tagline}>Curating the Best You</Text>
        </View>
      </View>

      <View style={styles.bottomContent}>
        <TouchableOpacity
          style={styles.exploreContainer}
          onPress={() => Navigation.navigate('Register')}>
          <LinearGradient
            colors={COLORS.gradientButton}
            style={styles.gradientButton}>
            <Text style={styles.buttonText}>Lets Explore</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(50),
  },
  topContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  bottomContent: {
    alignItems: 'center',
    paddingBottom: moderateScale(20),
  },
  logoContainer: {
    marginBottom: moderateScale(16),
    alignItems: 'flex-start',
    marginLeft: moderateScale(20),
    width: '100%',
  },
  taglineContainer: {
    marginBottom: moderateScale(32),
    alignItems: 'flex-start',
    marginLeft: moderateScale(20),
    width: '100%',
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'semibold',
    color: COLORS.button,
    letterSpacing: 1,
  },
  logoBold: {
    color: COLORS.button,
    fontWeight: '900',
  },
  tagline: {
    fontSize: moderateScale(16),
    fontFamily: FONTS.Regular,
    color: COLORS.white,
    fontWeight: '500',
    marginBottom: moderateScale(32),
  },
  exploreContainer: {
    width: '75%',
    alignSelf: 'center',
  },
  gradientButton: {
    width: '100%',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(25),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: moderateScale(16),
    fontFamily: FONTS.title,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});

// const styles = StyleSheet.create({
//     wrapper: {
//         // width:'100%',
//         // height:height/2
//     },
//     slide: {
//     //   width:'100%',
//     //     height:height/2,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginHorizontal:15
//     //   backgroundColor: '#9DD6EB'
//     },
//     text: {
//       color: '#fff',
//       fontSize: moderateScale(17),
//       fontFamily:FONTS.title,
//       textTransform:'uppercase',
//       textAlign:'center'
//     },
//     subtext: {
//         color: '#fff',
//         fontSize: moderateScale(13),
//         fontFamily:FONTS.Regular,
//         textAlign:'center'
//       }
//   })
