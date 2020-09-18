import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { WebViewModal } from "./lib";

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={StyleSheet.absoluteFill}>
      <Button
        title="Open"
        onPress={() => setVisible(true)}
      />
      <WebViewModal
        visible={visible}
        source={{
          html: "https://lottiefiles.com"
        }}
        animationType="fade"
        injectedJavaScript={`
console.log('iya');
        `}
      />
    </View>
  );
}
