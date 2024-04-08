import React, { useEffect, useState } from 'react';

import {
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Storage } from './infra/storage';

function App(): JSX.Element {
  const [storageToken, setStorageToken] = useState<string | null | undefined>();
  const [storageUser, setStorageUser] = useState<string | null | undefined>();

  useEffect(() => {
    async function getStorage() {
      const storageItem = await Storage.getItem('storage_token_key');
      setStorageToken(storageItem);
    }
    getStorage();
  }, []);

  useEffect(() => {
    (async () => {
      const storageItem = await Storage.getItem('storage_user_key');
      setStorageUser(storageItem);
    })();
  }, []);

  const handleSetItem = () => {
    Storage.setItem('storage_token_key', 'token1234');
    Storage.setItem('storage_user_key', '303030');
  };

  const handleClearKey = () => {
    Storage.clearkey('storage_token_key');
  };

  const handleClearAllKey = () => {
    Storage.clearAllKey();
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.sectionContainer}>
        <Text style={styles.highlight}>
          {storageToken?.toString() ?? 'sem valor'}
        </Text>
        <Text style={styles.highlight}>
          {storageUser?.toString() ?? 'sem valor'}
        </Text>
        <View style={styles.sectionButton}>
          <TouchableOpacity style={styles.button} onPress={handleSetItem}>
            <Text>Add Value</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleClearKey}>
            <Text>Clear Key</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleClearAllKey}>
            <Text>Clear All Key</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#434343',
  },
  sectionButton: {
    marginHorizontal: 30,
  },
  button: {
    height: 48,
    marginTop: 10,
    backgroundColor: '#80c980',
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlight: {
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
