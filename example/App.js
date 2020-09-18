import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Button } from 'react-native';

import { WebViewModal, WebView } from "./lib";

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={StyleSheet.absoluteFill}>
      <SafeAreaView />
      <Button
        title="Open"
        onPress={() => setVisible(true)}
      />
      <WebViewModal
        visible={visible}
        source={{
          uri: "https://google.com"
        }}
      />
    </View>
  );
}
