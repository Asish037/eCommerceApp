<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
=======
import React, {useState} from 'react';
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
<<<<<<< HEAD
  FlatList,
  Alert,
  ActivityIndicator,
=======
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
  FlatList,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
} from 'react-native';
import {COLORS} from '../Constant/Colors';
import {FONTS} from '../Constant/Font';
import {moderateScale} from '../PixelRatio';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
<<<<<<< HEAD
import {useNavigation} from '@react-navigation/native';
import Moment from 'moment';
import Header from '../Components/Header';
import axios from '../Components/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderDetails = ({route}) => {
  const navigation = useNavigation();
  const {items} = route.params; // comes from order-list
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState(null);

  const fetchOrderDetails = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        Alert.alert('Error', 'No auth token found. Please log in again.');
        return;
      }

      const response = await axios.get(
        `/order-details?orderId=${items.order_id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.data.status === 1) {
        const apiData = response.data.data;

        // Normalize data
        const normalizedData = {
          order_id: apiData.id,
          order_date: apiData.created_at,
          shipping_status: 'Processing', // backend missing → fallback
          tracking_number: null, // not available
          payment: {
            payment_status: 'Paid', // fallback
            payment_method: 'Online', // fallback
            total_amount: apiData.total,
          },
          items: apiData.order_items.map(item => ({
            item_id: item.id,
            product_name: item.product_name,
            product_image: item.product_image,
            product_price: item.product_price,
            product_offer_price: item.product_offer_price,
            product_sku: item.product_sku,
            quantity: item.quantity,
          })),
          customer: {
            name: `${apiData.fname} ${apiData.lname}`,
            email: apiData.email,
            phone: apiData.phone || 'N/A',
            shipping_address: {
              street: 'N/A',
              city: 'N/A',
              state: 'N/A',
              zip_code: 'N/A',
              country: 'N/A',
            },
          },
          reviews: [],
        };

        setOrderDetails(normalizedData);
      } else {
        Alert.alert('Error', 'Failed to fetch order details.');
      }
    } catch (error) {
      console.error('Error fetching order details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, [items.order_id]);
=======
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Moment from 'moment';
import Header from '../Components/Header';

const OrderDetails = ({route}) => {
  const navigation = useNavigation();
  const {items} = route.params;
  const [rating, setRating] = useState(0);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd

  const getStatusIcon = status => {
    switch (status) {
      case 'Shipped':
        return 'truck-delivery';
      case 'Delivered':
        return 'check-circle';
      case 'Processing':
        return 'clock-outline';
      default:
        return 'package-variant-closed';
    }
  };

  const getStatusColor = status => {
    switch (status) {
      case 'Shipped':
        return COLORS.orange || '#FF6B35';
      case 'Delivered':
        return COLORS.green || '#4CAF50';
      case 'Processing':
        return COLORS.yellow || '#FFC107';
      default:
        return COLORS.gray || '#757575';
    }
  };

<<<<<<< HEAD
=======
  /*
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`https://api.example.com/orders/${items.order_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch order details');
        }
        const data = await response.json();
        setOrders(data.orders);
        setError(null);
      } catch (error) {
        setError('An error occurred while fetching order details');
        console.error("Error fetching order details:", error);
        setOrders([]);  // clear orders data on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);
  */

>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  const renderStars = () => {
    return Array.from({length: 5}, (_, index) => (
      <TouchableOpacity
        key={`rating-star-${index}`}
        onPress={() => setRating(index + 1)}>
        <MaterialCommunityIcons
          name={index < rating ? 'star' : 'star-outline'}
          size={moderateScale(25)}
<<<<<<< HEAD
          color={index < rating ? '#FFD700' : COLORS.button}
=======
          color={index < rating ? COLORS.rating : COLORS.button}
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
        />
      </TouchableOpacity>
    ));
  };

  const renderOrderItem = ({item}) => (
    <View style={styles.orderItemCard}>
<<<<<<< HEAD
      <Image source={{uri: item.product_image}} style={styles.orderItemImage} />
=======
      <Image
        source={{uri: item.thumbnail_image}}
        style={styles.orderItemImage}
      />
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
      <View style={styles.orderItemDetails}>
        <Text style={styles.orderItemName} numberOfLines={2}>
          {item.product_name}
        </Text>
<<<<<<< HEAD
        <Text style={styles.orderItemBrand}>{item.product_sku}</Text>
        <Text style={styles.orderItemSpec}>Qty: {item.quantity}</Text>
        <Text style={styles.orderItemPrice}>
          ₹{item.product_offer_price || item.product_price}
        </Text>
=======
        <Text style={styles.orderItemBrand}>{item.brand}</Text>
        <View style={styles.orderItemSpecs}>
          <Text style={styles.orderItemSpec}>
            {item.size ? `Size: ${item.size}` : `Weight: ${item.weight}`}
          </Text>
          <Text style={styles.orderItemSpec}>Qty: {item.quantity}</Text>
        </View>
        <Text style={styles.orderItemPrice}>${item.total}</Text>
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
      </View>
    </View>
  );

<<<<<<< HEAD
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={COLORS.button} />
      </View>
    );
  }

  if (!orderDetails) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>No order details found.</Text>
      </View>
    );
  }
=======
  // Render loading state
  // if (isLoading) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size="large" color={COLORS.button} />
  //     </View>
  //   );
  // }

  // // Render error state
  // if (error) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <Text style={styles.errorText}>{error}</Text>
  //     </View>
  //   );
  // }
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd

  return (
    <LinearGradient colors={COLORS.gradient} style={styles.container}>
      <Header />
<<<<<<< HEAD
=======

>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}>
        {/* Order Status Header */}
        <View style={styles.statusHeader}>
          <View style={styles.statusIconContainer}>
            <MaterialCommunityIcons
<<<<<<< HEAD
              name={getStatusIcon(orderDetails.shipping_status)}
              size={moderateScale(35)}
              color={getStatusColor(orderDetails.shipping_status)}
            />
          </View>
          <View style={styles.statusTextContainer}>
            <Text style={styles.statusTitle}>Order Status</Text>
            <Text style={styles.statusSubtitle}>
              Order #{orderDetails.order_id}
            </Text>
            <Text style={styles.statusDate}>
              {Moment(orderDetails.order_date).format('MMMM DD, YYYY')}
=======
              name={getStatusIcon(items.shipping_status)}
              size={moderateScale(35)}
              color={getStatusColor(items.shipping_status)}
            />
          </View>
          <View style={styles.statusTextContainer}>
            <Text style={styles.statusTitle}>
              {items.shipping_status === 'Shipped'
                ? 'Order Delivered'
                : 'Order Status'}
            </Text>
            <Text style={styles.statusSubtitle}>Order #{items.order_id}</Text>
            <Text style={styles.statusDate}>
              {Moment(items.order_date).format('MMMM DD, YYYY')}
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
            </Text>
          </View>
          <View style={styles.paymentStatusContainer}>
            <Text
              style={[
                styles.paymentStatus,
<<<<<<< HEAD
                {color: getStatusColor(orderDetails.payment.payment_status)},
              ]}>
              {orderDetails.payment.payment_status}
            </Text>
          </View>
        </View>

=======
                {color: getStatusColor(items.payment.payment_status)},
              ]}>
              {items.payment.payment_status}
            </Text>
          </View>
        </View>
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
        {/* Order Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Items</Text>
          <FlatList
<<<<<<< HEAD
            data={orderDetails.items}
            renderItem={renderOrderItem}
            keyExtractor={item => item.item_id.toString()}
=======
            data={items.items}
            renderItem={renderOrderItem}
            keyExtractor={item => item.item_id}
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
            scrollEnabled={false}
          />
        </View>

        {/* Delivery Address */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Address</Text>
          <View style={styles.addressCard}>
            <View style={styles.addressHeader}>
              <MaterialCommunityIcons
                name="map-marker"
                size={moderateScale(20)}
                color={COLORS.button}
              />
<<<<<<< HEAD
              <Text style={styles.addressName}>
                {orderDetails.customer.name}
              </Text>
              <Text style={styles.addressPhone}>
                {orderDetails.customer.phone}
              </Text>
            </View>
            <Text style={styles.addressText}>
              {`${orderDetails.customer.shipping_address.street}, ${orderDetails.customer.shipping_address.city}, ${orderDetails.customer.shipping_address.state} - ${orderDetails.customer.shipping_address.zip_code}, ${orderDetails.customer.shipping_address.country}`}
=======
              <Text style={styles.addressName}>{items.customer.name}</Text>
              <Text style={styles.addressPhone}>{items.customer.phone}</Text>
            </View>
            <Text style={styles.addressText}>
              {`${items.customer.shipping_address.street}, ${items.customer.shipping_address.city}, ${items.customer.shipping_address.state} - ${items.customer.shipping_address.zip_code}, ${items.customer.shipping_address.country}`}
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
            </Text>
          </View>
        </View>

        {/* Order Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Payment Method</Text>
              <Text style={styles.summaryValue}>
<<<<<<< HEAD
                {orderDetails.payment.payment_method}
=======
                {items.payment.payment_method}
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
              </Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Total Amount</Text>
              <Text style={styles.summaryValueTotal}>
<<<<<<< HEAD
                ₹{orderDetails.payment.total_amount}
              </Text>
            </View>
=======
                ${items.payment.total_amount}
              </Text>
            </View>
            {items.tracking_number && (
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Tracking Number</Text>
                <Text style={styles.summaryValueTracking}>
                  {items.tracking_number}
                </Text>
              </View>
            )}
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
          </View>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Updates sent to</Text>
          <View style={styles.contactCard}>
            <View style={styles.contactRow}>
              <MaterialCommunityIcons
                name="phone"
                size={moderateScale(20)}
                color={COLORS.button}
              />
<<<<<<< HEAD
              <Text style={styles.contactText}>
                {orderDetails.customer.phone}
              </Text>
=======
              <Text style={styles.contactText}>{items.customer.phone}</Text>
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
            </View>
            <View style={styles.contactRow}>
              <MaterialCommunityIcons
                name="email"
                size={moderateScale(20)}
                color={COLORS.button}
              />
<<<<<<< HEAD
              <Text style={styles.contactText}>
                {orderDetails.customer.email}
              </Text>
=======
              <Text style={styles.contactText}>{items.customer.email}</Text>
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
            </View>
          </View>
        </View>

        {/* Rate Product */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rate this order</Text>
          <View style={styles.ratingCard}>
            <Image
<<<<<<< HEAD
              source={{uri: orderDetails.items[0].product_image}}
=======
              source={{uri: items.items[0].thumbnail_image}}
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
              style={styles.ratingProductImage}
            />
            <View style={styles.ratingContent}>
              <Text style={styles.ratingTitle}>How was your experience?</Text>
              <View style={styles.starsContainer}>{renderStars()}</View>
              <Text style={styles.ratingSubtitle}>
<<<<<<< HEAD
                Rate & Review to earn credits
=======
                Rate & Review to earn MJ Credits
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
              </Text>
            </View>
          </View>
        </View>
<<<<<<< HEAD
=======

        {/* Reviews Section */}
        {items.reviews && items.reviews.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Customer Reviews</Text>
            {items.reviews.map((review, index) => (
              <View
                key={`review-${index}-${
                  review.reviewerEmail || review.reviewerName
                }-${review.date}`}
                style={styles.reviewCard}>
                <View style={styles.reviewHeader}>
                  <Text style={styles.reviewerName}>{review.reviewerName}</Text>
                  <View style={styles.reviewRating}>
                    {Array.from({length: 5}, (_, i) => (
                      <MaterialCommunityIcons
                        key={`review-${index}-star-${i}`}
                        name={i < review.rating ? 'star' : 'star-outline'}
                        size={moderateScale(14)}
                        color={i < review.rating ? '#e82929da' : COLORS.gray}
                      />
                    ))}
                  </View>
                </View>
                <Text style={styles.reviewComment}>{review.comment}</Text>
                <Text style={styles.reviewDate}>
                  {Moment(review.date).format('MMM DD, YYYY')}
                </Text>
              </View>
            ))}
          </View>
        )}
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
      </ScrollView>
    </LinearGradient>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
<<<<<<< HEAD
  
  container: {
    flex: 1, 
    width: '100%', 
    height: '100%'
  },
  scrollView: {
    flex: 1
  },
  scrollContent: {
    paddingBottom: moderateScale(10)
=======
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: moderateScale(10),
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  statusHeader: {
    backgroundColor: COLORS.card,
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
    borderRadius: moderateScale(15),
    padding: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
<<<<<<< HEAD
    elevation: 5,
=======
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 8,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  statusIconContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: moderateScale(30),
    padding: moderateScale(2),
    marginRight: moderateScale(10),
  },
  statusTextContainer: {
<<<<<<< HEAD
    flex: 1
  },
  statusTitle: {
    color: COLORS.black,
=======
    flex: 1,
  },
  statusTitle: {
    color: COLORS.text,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    fontFamily: FONTS.Bold,
    fontSize: moderateScale(17),
    fontWeight: '700',
  },
  statusSubtitle: {
<<<<<<< HEAD
    color: COLORS.button,
    fontFamily: FONTS.Medium,
    fontSize: moderateScale(13),
  },
  statusDate: {
    color: COLORS.gray,
    fontFamily: FONTS.Regular,
    fontSize: moderateScale(12),
=======
    color: COLORS.subtext,
    fontFamily: FONTS.Medium,
    fontSize: moderateScale(13),
    marginTop: moderateScale(2),
  },
  statusDate: {
    color: COLORS.text || '#474545ff',
    fontFamily: FONTS.Regular,
    fontSize: moderateScale(12),
    marginTop: moderateScale(4),
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  paymentStatusContainer: {
    backgroundColor: 'rgba(10, 85, 13, 0.26)',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(6),
    borderRadius: moderateScale(15),
  },
  paymentStatus: {
<<<<<<< HEAD
    fontFamily: FONTS.Bold,
=======
    fontFamily: FONTS.subtext,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    fontSize: moderateScale(11),
    fontWeight: '700',
  },
  section: {
    marginHorizontal: moderateScale(10),
<<<<<<< HEAD
    marginTop: moderateScale(10)
  },
  sectionTitle: {
    color: COLORS.black,
=======
    marginTop: moderateScale(10),
  },
  sectionTitle: {
    color: COLORS.text,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    fontFamily: FONTS.Bold,
    fontSize: moderateScale(15),
    fontWeight: '700',
    marginBottom: moderateScale(5),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  orderItemCard: {
<<<<<<< HEAD
    flexDirection: 'row',
    borderRadius: moderateScale(12),
    padding: moderateScale(5),
    marginBottom: moderateScale(5),
=======
    // backgroundColor: COLORS.white,
    borderRadius: moderateScale(12),
    padding: moderateScale(5),
    marginBottom: moderateScale(5),
    flexDirection: 'row',
    // shadowColor: COLORS.black,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 3.84,
    // elevation: 5,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  orderItemImage: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(10),
<<<<<<< HEAD
=======
    backgroundColor: COLORS.lightGray || '#F5F5F5',
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    marginRight: moderateScale(20),
  },
  orderItemDetails: {
    flex: 1,
<<<<<<< HEAD
    justifyContent: 'space-between'
=======
    justifyContent: 'space-between',
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  orderItemName: {
    color: COLORS.black,
    fontFamily: FONTS.Bold,
    fontSize: moderateScale(14),
<<<<<<< HEAD
  },
  orderItemBrand: {
    color: COLORS.button,
    fontFamily: FONTS.Medium,
    fontSize: moderateScale(12),
  },
  orderItemSpec: {
    color: COLORS.gray,
    fontSize: moderateScale(11),
  },
  orderItemPrice: {
    color: COLORS.black,
    fontFamily: FONTS.Bold,
    fontSize: moderateScale(14),
  },
  addressCard: {
    borderRadius: moderateScale(12),
    padding: moderateScale(10)
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  addressName: {
    color: COLORS.black,
    fontFamily: FONTS.Bold,
    fontSize: moderateScale(14),
=======
    fontWeight: '600',
    lineHeight: moderateScale(18),
  },
  orderItemBrand: {
    color: COLORS.iconText,
    fontFamily: FONTS.Medium,
    fontSize: moderateScale(12),
    marginTop: moderateScale(2),
  },
  orderItemSpecs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(5),
  },
  orderItemSpec: {
    color: COLORS.subtext || '#181717ff',
    fontFamily: FONTS.Regular,
    fontSize: moderateScale(11),
  },
  orderItemPrice: {
    color: COLORS.text,
    fontFamily: FONTS.Bold,
    fontSize: moderateScale(14),
    fontWeight: '700',
    alignSelf: 'flex-end',
  },
  addressCard: {
    // backgroundColor: COLORS.white,
    borderRadius: moderateScale(12),
    padding: moderateScale(10),
    // shadowColor: COLORS.black,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(5),
  },
  addressName: {
    color: COLORS.text,
    fontFamily: FONTS.Bold,
    fontSize: moderateScale(14),
    fontWeight: '650',
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    marginLeft: moderateScale(8),
    flex: 1,
  },
  addressPhone: {
    color: COLORS.button,
<<<<<<< HEAD
    fontSize: moderateScale(12)
  },
  addressText: {
    color: COLORS.gray,
    fontSize: moderateScale(12)
  },
  summaryCard: {
    borderRadius: moderateScale(12),
    padding: moderateScale(10)
=======
    fontFamily: FONTS.Medium,
    fontSize: moderateScale(12),
    fontWeight: '600',
  },
  addressText: {
    color: COLORS.subtext || '#343232ff',
    fontFamily: FONTS.Regular,
    fontSize: moderateScale(12),
    lineHeight: moderateScale(16),
  },
  summaryCard: {
    // backgroundColor: COLORS.white,
    borderRadius: moderateScale(12),
    padding: moderateScale(10),
    // shadowColor: COLORS.black,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 3.84,
    // elevation: 5,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
<<<<<<< HEAD
    paddingVertical: moderateScale(8),
  },
  summaryLabel: {
    color: COLORS.gray,
    fontSize: moderateScale(14)
  },
  summaryValue: {
    color: COLORS.black,
    fontSize: moderateScale(14)
  },
  summaryValueTotal: {
    color: COLORS.black,
    fontFamily: FONTS.Bold,
    fontSize: moderateScale(15),
  },
  contactCard: {
    borderRadius: moderateScale(12),
    padding: moderateScale(10)
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  contactText: {
    color: COLORS.black,
    marginLeft: moderateScale(10)
  },
  ratingCard: {
=======
    alignItems: 'center',
    paddingVertical: moderateScale(8),
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  summaryLabel: {
    color: COLORS.subtext || '#2b2929ff',
    fontFamily: FONTS.Regular,
    fontSize: moderateScale(14),
  },
  summaryValue: {
    color: COLORS.text,
    fontFamily: FONTS.Medium,
    fontSize: moderateScale(14),
    fontWeight: '500',
  },
  summaryValueTotal: {
    color: COLORS.text,
    fontFamily: FONTS.Bold,
    fontSize: moderateScale(15),
    fontWeight: '700',
  },
  summaryValueTracking: {
    color: COLORS.button,
    fontFamily: FONTS.Medium,
    fontSize: moderateScale(12),
    fontWeight: '600',
  },
  contactCard: {
    // backgroundColor: COLORS.white,
    borderRadius: moderateScale(12),
    padding: moderateScale(10),
    // shadowColor: COLORS.black,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(5),
  },
  contactText: {
    color: COLORS.text,
    fontFamily: FONTS.Medium,
    fontSize: moderateScale(14),
    marginLeft: moderateScale(10),
  },
  ratingCard: {
    // backgroundColor: COLORS.white,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    borderRadius: moderateScale(12),
    padding: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
<<<<<<< HEAD
=======
    // shadowColor: COLORS.black,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 3.84,
    // elevation: 5,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  ratingProductImage: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
<<<<<<< HEAD
    marginRight: moderateScale(15),
  },
  ratingContent: {
    flex: 1
  },
  ratingTitle: {
    color: COLORS.black,
    fontFamily: FONTS.Bold,
    fontSize: moderateScale(14),
    marginBottom: moderateScale(8),
  },
  starsContainer: {
    flexDirection: 'row'
  },
  ratingSubtitle: {
    color: COLORS.gray,
    fontSize: moderateScale(12)
=======
    backgroundColor: COLORS.white,
    marginRight: moderateScale(15),
  },
  ratingContent: {
    flex: 1,
  },
  ratingTitle: {
    color: COLORS.text,
    fontFamily: FONTS.Bold,
    fontSize: moderateScale(14),
    fontWeight: '600',
    marginBottom: moderateScale(8),
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: moderateScale(7),
  },
  ratingSubtitle: {
    color: COLORS.subtext || '#3b3a3aff',
    fontFamily: FONTS.Regular,
    fontSize: moderateScale(12),
  },
  reviewCard: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(12),
    padding: moderateScale(10),
    marginBottom: moderateScale(10),
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(8),
  },
  reviewerName: {
    color: COLORS.text,
    fontFamily: FONTS.Bold,
    fontSize: moderateScale(14),
    fontWeight: '700',
  },
  reviewRating: {
    flexDirection: 'row',
  },
  reviewComment: {
    color: COLORS.subtext || '#2c2a2aff',
    fontFamily: FONTS.Regular,
    fontSize: moderateScale(13),
    lineHeight: moderateScale(18),
    marginBottom: moderateScale(8),
  },
  reviewDate: {
    color: COLORS.gray || '#2c2a2aff',
    fontFamily: FONTS.Regular,
    fontSize: moderateScale(11),
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
});
