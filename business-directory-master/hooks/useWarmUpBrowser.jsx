import React from "react";
import { Platform } from "react-native";
import * as WebBrowser from "expo-web-browser";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    if (Platform.OS !== 'web') {
      // Warm up the android browser to improve UX
      // https://docs.expo.dev/guides/authentication/#improving-user-experience
      void WebBrowser.warmUpAsync();
      return () => {
        void WebBrowser.coolDownAsync();
      };
    }
  }, []);
};
