import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Alert,
    } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import model5 from '../../assets/model5.jpg';
import {COLORS} from '../../Constant/Colors';
import {FONTS} from '../../Constant/Font';

const Otp = ({navigation, route}) => {
    const {data} = route.params;
    const [otp, setOtp] = React.useState(['', '', '', '', '', '']);
    const [timer, setTimer] = React.useState(30);
    const [isResendDisabled, setIsResendDisabled] = React.useState(true);
    const refs = [];

    React.useEffect(() => {
        if (timer === 0) {
            setIsResendDisabled(false);
            return;
        }
        const interval = setInterval(() => {
            setTimer(t => (t > 0 ? t - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const handleOtpChange = (value, idx) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[idx] = value;
            setOtp(newOtp);
        // Auto focus next
        if (value && idx < 5) {
            refs[idx + 1]?.focus();
        }
        }
    };

    const handleContinue = () => {
        const enteredOtp = otp.join('');
        if (enteredOtp.length !== 6) {
            Alert.alert('Error', 'Please enter a valid 6-digit OTP.');
            return;
        }
        // Mock verification: accept 123456 as valid
        if (enteredOtp === '123456') {
            navigation.reset({
                index: 0,
                routes: [{name: 'MainHome'}],
            });
        } else {
            Alert.alert('Error', 'Invalid OTP!');
        }
    };

    const handleResend = () => {
        setOtp(['', '', '', '', '', '']);
        setTimer(30);
        setIsResendDisabled(true);
        // Add resend logic here
    };

    return (
        <ImageBackground source={model5} style={styles.bgImage} resizeMode="cover">
            <View style={styles.overlay} />
            <View style={styles.container}>
                <View style={{position: 'absolute', top: -5, left: 20}}>
                    <Text style={styles.logoText}>
                        <Text>Style</Text>
                        <Text style={styles.logoBold}>ON</Text>
                    </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>OTP Verification</Text>
                    <Text style={styles.subtitle}>
                        We have sent Verification code to{'\n'}
                        <Text style={styles.phone}>{data?.phone}</Text>{' '}
                        <Text onPress={() => navigation.goBack()} style={styles.edit}>
                        Edit
                        </Text>
                    </Text>
                    <View style={styles.otpRow}>
                        {otp.map((digit, idx) => (
                        <TextInput
                            key={idx}
                            ref={ref => (refs[idx] = ref)}
                            style={styles.otpInput}
                            keyboardType="number-pad"
                            maxLength={1}
                            value={digit}
                            onChangeText={val => handleOtpChange(val, idx)}
                            returnKeyType="next"
                            autoFocus={idx === 0}
                        />
                        ))}
                    </View>
                    <View style={styles.resendRow}>
                        <Text style={styles.resendText}>
                            Resend in {timer > 0 ? `${timer} sec` : ''}
                        </Text>
                        <TouchableOpacity
                            disabled={isResendDisabled}
                            onPress={handleResend}>
                            <Text
                                style={[styles.resendBtn, isResendDisabled && {color: '#aaa'}]}>
                                Resend
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.continueContainer}
                        onPress={handleContinue}
                        activeOpacity={0.8}
                        disabled={otp.join('').length !== 6}>
                        <LinearGradient
                            colors={
                                otp.join('').length !== 6
                                ? ['#ccc', '#ccc']
                                : COLORS.gradientButton
                            }
                            style={styles.continueBtn}>
                            <Text style={styles.continueText}>CONTINUE</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.1)',
    zIndex: 1,
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 2,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'semibold',
    color: COLORS.button,
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center',
  },
  logoBold: {
    color: COLORS.button,
    fontWeight: '900',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 18,
  },
  phone: {
    color: '#222',
    fontWeight: 'bold',
  },
  edit: {
    color: '#007bff',
    textDecorationLine: 'underline',
    fontSize: 13,
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    marginTop: 8,
  },
  otpInput: {
    width: 40,
    height: 48,
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: 8,
    marginHorizontal: 6,
    fontSize: 22,
    color: '#222',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  resendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  resendText: {
    fontSize: 13,
    color: '#888',
    marginRight: 8,
  },
  resendBtn: {
    fontSize: 13,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  continueContainer: {
    width: '100%',
  },
  continueBtn: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 0,
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default Otp;
