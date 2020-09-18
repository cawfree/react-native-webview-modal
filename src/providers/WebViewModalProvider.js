import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { PortalProvider, WhitePortal } from "react-native-portal";

import { WebViewModalContext, defaultContext } from "../contexts";

function WebViewModalProvider({ children, ...extraProps }) {
  return (
    <WebViewModalContext.Provider value={defaultContext}>
      <PortalProvider>
        {children}
        <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
          <WhitePortal name="react-native-webview-modal" />
        </View>
      </PortalProvider> 
    </WebViewModalContext.Provider>
  );
}

WebViewModalProvider.propTypes = {};
WebViewModalProvider.defaultProps = {};

export default WebViewModalProvider;
