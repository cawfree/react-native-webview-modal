import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Button } from 'react-native';

import WebViewModalProvider, { WebViewModal } from "react-native-webview-modal";

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <WebViewModalProvider>
      <View style={StyleSheet.absoluteFill}>
        <SafeAreaView />
        <Button
          title="Open"
          onPress={() => setVisible(true)}
        />
        <WebViewModal
          visible={visible}
          source={{ uri: "https://google.com" }}
        />
      </View>
    </WebViewModalProvider>
  );
}
