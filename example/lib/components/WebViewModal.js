import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Platform } from "react-native";

import WebView from "./WebView";
import Modal from "./Modal";

function WebViewModal({
  visible,
  source,
  originWhitelist,
  onMessage,
  scrollEnabled,
  injectedJavaScript,
  onDismiss,
  onRequestClose,
  animationType,
}) {
  return (
    <Modal
      animationType={animationType}
      transparent
      presentationStyle="overFullScreen"
      visible={visible}
      onDismiss={onDismiss}
      onRequestClose={onRequestClose}
      hardwareAccelerated={Platform.OS !== "web"}
    >
      <WebView
        style={StyleSheet.absoluteFill}
        originWhitelist={originWhitelist}
        source={source}
        onMessage={onMessage}
        scrollEnabled={scrollEnabled}
        injectedJavaScript={injectedJavaScript}
      />
    </Modal>
  );
}

WebViewModal.propTypes = {
  visible: PropTypes.bool,
  source: PropTypes.oneOfType([
    PropTypes.shape({ uri: PropTypes.string.isRequired }),
    PropTypes.shape({ html: PropTypes.string.isRequired }),
  ]),
  originWhitelist: PropTypes.arrayOf(PropTypes.string),
  onMessage: PropTypes.func,
  scrollEnabled: PropTypes.bool,
  injectedJavaScript: PropTypes.string,
  onDismiss: PropTypes.func,
  onRequestClose: PropTypes.func,
  animationType: PropTypes.string,
};

WebViewModal.defaultProps = {
  visible: false,
  source: {},
  originWhitelist: [],
  onMessage: () => null,
  scrollEnabled: false,
  injectedJavaScript: "",
  onDismiss: () => null,
  onRequestClose: () => null,
  animationType: "slide",
};

export default WebViewModal;
