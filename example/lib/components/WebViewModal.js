import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Platform } from "react-native";

import WebView from "./WebView";
import Modal from "./Modal";

const WebViewModal = forwardRef(
  (
    {
      visible,
      source,
      onMessage,
      scrollEnabled,
      injectedJavaScript,
      onDismiss,
      onRequestClose,
      animationType,
    },
    ref,
  ) => (
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
        ref={ref}
        style={StyleSheet.absoluteFill}
        source={source}
        onMessage={onMessage}
        scrollEnabled={scrollEnabled}
        injectedJavaScript={injectedJavaScript}
      />
    </Modal>
  ),
);

WebViewModal.displayName = "WebViewModal";

WebViewModal.propTypes = {
  visible: PropTypes.bool,
  source: PropTypes.oneOfType([
    PropTypes.shape({ uri: PropTypes.string.isRequired }),
    PropTypes.shape({ html: PropTypes.string.isRequired }),
  ]),
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
  onMessage: () => null,
  scrollEnabled: false,
  injectedJavaScript: "",
  onDismiss: () => null,
  onRequestClose: () => null,
  animationType: "slide",
};

export default React.memo(WebViewModal);
