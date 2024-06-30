import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig.js';

const FirestoreTest = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Log de verificación de db
        console.log('Firestore db:', db);

        const querySnapshot = await getDocs(collection(db, 'testCollection'));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Check the console for Firestore data</Text>
    </View>
  );
};

export default FirestoreTest;
