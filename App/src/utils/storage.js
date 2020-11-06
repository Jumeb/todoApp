import AsyncStorage from '@react-native-community/async-storage';
import Storage from 'react-native-storage';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24 * 365, //1 year
  enableCache: true,
  sync: {},
});

const storeData = (key, data) => {
  storage.save({
    key: key,
    data: data,
    expires: 1000 * 3600 * 24 * 25,
  });
};

const loadData = async (key) => {
  try {
    let value = storage.load({
      key: key,
      autoSync: true,
      syncInBackground: true,
    });
    return value;
  } catch (err) {
    console.log(err);
  }
};

const removeData = (key) => {
  storage.remove({
    key: key,
  });
};

export {removeData, storeData, loadData};

// export default {
//   storeData: (key, data) => {
//     storage.save({
//       key: key,
//       data: data,
//       expires: 1000 * 3600 * 5,
//     });
//   },
//   loadData: (key) => {
//     storage.load({
//       key: key,
//       autoSync: true,
//       syncInBackground: true,
//     });
//   },
//   removeData: (key) => {
//     storage.remove({
//       key: key,
//     });
//   },
// };
