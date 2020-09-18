# react-native-webview-modal



⚛️ A `<WebViewModal />` component for [**React Native**](https://reactnative.dev), where the source content is pre-loaded for speed 🏁.  Supports iOS/Android/Web/Expo.  

Using [react-native-webview-modal](https://github.com/cawfree/react-native-webview-modal), you can embed content which can be presented _without_ waiting for the page actually load. This is achieved by effectively pre-caching the render result and not making this visible until the modal is ready.

This helps provide a more native feeling experience when handing over to web-defined parts of the user journey, such as authentication with a web provider.

## 🚀 Getting Started

```
yarn add react-native-webview-modal
```

## ✍️ Example

You're required to declare a [`<WebViewModalProvider />`](https://github.com/cawfree/react-native-webview-modal/blob/main/src/components/WebViewModal.js) at the root of your application. This is because the `react-native-webview-modal` _does not_ use React Native's built in [`<Modal />`](https://reactnative.dev/docs/modal) component.

```javascript
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
```

## ✌️ License
[**MIT**](./LICENSE)
