import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
<<<<<<< HEAD
  Platform,
  SafeAreaView,
=======
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
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
<<<<<<< HEAD
    Platform.OS === 'ios' ? (
      <SafeAreaView style={styles.container}>
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
                colors={COLORS.gradient}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.gradientButton}>
                <Text style={styles.buttonText}>Lets Explore</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    ) : (
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
              colors={['#FFD700', '#FFA500', '#FF8C00']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.gradientButton}>
              <Text style={styles.buttonText}>Lets Explore</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
=======
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
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? 'black' : undefined,
  },
=======
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  bgimage: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
<<<<<<< HEAD
    paddingTop: 35,
    paddingBottom: 45,
=======
    paddingVertical: moderateScale(50),
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  topContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
<<<<<<< HEAD
    paddingTop: 10,
  },
  bottomContent: {
    alignItems: 'center',
    paddingBottom: 25,
    width: '100%',
  },
  logoContainer: {
    marginBottom: 16,
    alignItems: 'flex-start',
    marginLeft: 20,
    width: '100%',
  },
  taglineContainer: {
    marginBottom: 36,
    alignItems: 'flex-start',
    marginLeft: 20,
=======
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
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    width: '100%',
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'semibold',
<<<<<<< HEAD
    color: 'red',
    letterSpacing: 1,
  },
  logoBold: {
    color: 'red',
=======
    color: COLORS.button,
    letterSpacing: 1,
  },
  logoBold: {
    color: COLORS.button,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
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
<<<<<<< HEAD
    marginBottom: 10,
  },
  gradientButton: {
    width: '100%',
    height: Platform.OS === 'ios' ? 90 : 60,
    paddingVertical: Platform.OS === 'ios' ? 20 : 15,
    paddingHorizontal: 0,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'System' : FONTS.title,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginVertical: 0,
    marginHorizontal: 0,
    ...(Platform.OS === 'ios' && {
      lineHeight: 18,
      letterSpacing: 0.5,
      transform: [{translateY: -20}],
    }),
=======
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
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
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
<<<<<<< HEAD
//   })
=======
//   })
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
