import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Button from '../../../components/button.component';

import screen1 from '../../../../assets/screen1.png';
import screen3 from '../../../../assets/screen3.png';
import theme from '../../../../constants/theme';

const {COLORS, SIZES, FONTS} = theme;

const onBoardings = [
  {
    title: 'Good and Tasty Food',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: screen1,
  },
  {
    title: 'Good Service',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: screen1,
  },
  {
    title: 'Fast Delivery',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: screen3,
  },
  {
    title: 'Start Exploring',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: screen1,
  },
];

export const OnboardingScreen = ({navigation}) => {
  const [completed, setCompleted] = React.useState(false);
  const [scrollXValue, setScrollXValue] = React.useState(0);

  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    if (Math.floor(scrollXValue) === Math.floor(SIZES.width * (onBoardings.length - 1))) {
      setCompleted(true);
    }
  }, [scrollXValue]);

  const scrollViewRef = React.useRef();

  function renderContent() {
    const handleScroll = event => {
      Animated.event([{nativeEvent: {contentOffset: {x: event.nativeEvent.contentOffset.x}}}], {
        useNativeDriver: false,
      });

      setScrollXValue(event.nativeEvent.contentOffset.x);
    };

    return (
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}>
        {onBoardings.map((item, index) => (
          <View key={`img-${index}`} style={styles.imageAndTextContainer}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={item.img}
                  resizeMode="stretch"
                  style={{transform: [{scale: 0.3}, {translateY: -180}]}}
                />
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: '10%',
                left: 40,
                right: 40,
              }}>
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.black,
                  textAlign: 'center',
                  fontWeight: '500',
                }}>
                {item.title}
              </Text>

              <Text
                style={{
                  ...FONTS.body3,
                  textAlign: 'center',
                  marginTop: SIZES.base,
                  color: COLORS.gray,
                }}>
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollXValue, SIZES.width);

    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 50, SIZES.base],
            extrapolate: 'clamp',
          });

          const dotHeight = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, {width: dotWidth, height: dotHeight}]}
            />
          );
        })}
      </View>
    );
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={[styles.flexCol, {flex: 1}]}>
        <ImageBackground
          source={require('../../../../assets/pattern-bg.png')}
          style={{
            flex: 3,
            position: 'relative',
          }}
          imageStyle={{
            resizeMode: 'stretch',
            position: 'absolute',
            top: 0,
            bottom: 0,
            opacity: 0.6,
          }}>
          <View style={styles.flexGrow}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View>{renderContent()}</View>
              <View>{renderDots()}</View>
            </View>
          </View>
        </ImageBackground>

        <ImageBackground
          source={require('../../../../assets/wave.png')}
          style={{
            flex: 1,
            position: 'relative',
          }}
          imageStyle={{
            resizeMode: 'stretch',
            position: 'absolute',
            top: -100,
            bottom: 0,
          }}>
          <View
            style={[
              styles.flexShrink,
              {
                position: 'absolute',
                bottom: 50,
                width: '100%',
              },
            ]}>
            <View style={{alignItems: 'center'}}>
              <Button
                iconName="right"
                onPress={() => {
                  if (!completed) {
                    scrollViewRef.current.scrollTo({x: SIZES.width + scrollXValue, animated: true});
                    setScrollXValue(SIZES.width + scrollXValue);
                  } else {
                    navigation.navigate('AppNavigator');
                  }
                }}>
                {completed ? 'Get Started' : 'Continue'}
              </Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexGrow: {
    display: 'flex',
    flexGrow: 1,
  },
  flexShrink: {
    flexShrink: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  imageAndTextContainer: {
    width: SIZES.width,
  },
  dotsRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '20%' : '16%',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.padding / 2,
    marginBottom: SIZES.padding * 3,
    height: SIZES.padding,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: '#FFA928',
    marginHorizontal: SIZES.radius / 2,
  },
});

export default OnboardingScreen;
