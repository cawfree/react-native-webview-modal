import React, { useState, forwardRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Animated, StyleSheet, Platform } from "react-native";
import { BlackPortal } from "react-native-portal";
import { useWindowDimensions } from "react-native-use-dimensions";

import WebView from "./WebView";

const WebViewModal = forwardRef(
  (
    {
      visible,
      source,
      onMessage,
      scrollEnabled,
      injectedJavaScript,
      style,
      ...extras
    },
    ref,
  ) => {
    const { width, height } = useWindowDimensions();
    const [animTranslate] = useState(() => new Animated.Value(1));
    useEffect(
      () => {
        Animated.timing(
          animTranslate,
          {
            toValue: visible ? 0 : 1,
            useNativeDriver: Platform.OS !== "web",
            duration: 250,
          },
        ).start();
      },
      [animTranslate, visible],
    );
    return (
      <BlackPortal name="react-native-webview-modal">
        <Animated.View
          pointerEvents="box-none"
          style={[
            StyleSheet.absoluteFill,
            { transform: [{ translateY: Animated.multiply(animTranslate, height) }] },
          ]}
        >
          <WebView
            {...extras}
            ref={ref}
            style={[StyleSheet.absoluteFill, StyleSheet.flatten(style))}
            source={source}
            onMessage={onMessage}
            scrollEnabled={scrollEnabled}
            injectedJavaScript={injectedJavaScript}
          />
        </Animated.View>
      </BlackPortal>
    );
  },
);

WebViewModal.displayName = "WebViewModal";

WebViewModal.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.shape({ uri: PropTypes.string.isRequired }),
    PropTypes.shape({ html: PropTypes.string.isRequired }),
  ]),
  onMessage: PropTypes.func,
  scrollEnabled: PropTypes.bool,
  injectedJavaScript: PropTypes.string,
  style: PropTypes.any,
};

WebViewModal.defaultProps = {
  source: {},
  onMessage: () => null,
  scrollEnabled: false,
  injectedJavaScript: "",
  style: {},
};

export default React.memo(WebViewModal);
