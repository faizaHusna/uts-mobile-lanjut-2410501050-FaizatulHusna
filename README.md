##Nama + Project Mini-Catalog-App Nama: Faizatul Husna NIM: 2410501050 Kelas: B

##Tema Tema A:ResepKita - Katalog Resep Kuliner API: https://www.themealdb.com/api.php

Tech Stack
Aplikasi ResepKita dibangun menggunakan teknologi berikut:

React Native (Expo SDK 50) Digunakan untuk membangun aplikasi mobile berbasis JavaScript tanpa perlu native code. -React Navigation (v6) Digunakan untuk mengatur navigasi antar screen, dengan kombinasi Stack Navigator dan Bottom Tab Navigator. -Context API + useReducer Digunakan sebagai state management untuk mengelola data favorit secara global tanpa perlu library tammbahan.

Fetch API Digunakan untuk mengambil data dari API eksternal (TheMealDB).

Expo Go Digunakan untuk menjalankan dan menguji aplikasi seecara langsung di perangkat mobile.

##Cara Install npm install npx expo start

##Screenshots C:\Users\Lenovo\Mini-Catalog-App\screenshots\ABOUT_SCREEN.png C:\Users\Lenovo\Mini-Catalog-App\screenshots\DETAIL_SCREEN.png C:\Users\Lenovo\Mini-Catalog-App\screenshots\FAVORITES_SCREEN.png C:\Users\Lenovo\Mini-Catalog-App\screenshots\MAIN_TAB.png C:\Users\Lenovo\Mini-Catalog-App\screenshots\SEARCH_SCREEN.png

##Link Video https://drive.google.com/file/d/1MsydWVLjehTqYZ5TBG7tArGP3DqybaxW/view?usp=drivesdk

##State Management Aplikasi ini menggunakan Context API untuk mengelola state favorit secara global. Alasan memilih Context API adalah karena data favorit perlu diakses oleh beberapa screen sekaligus, seperti HomeScreen, DetailScreen, dan FavoriteScreen.

Justifikasi? Dengan Context API, data favorit dapat dibagikan tanpa harus mengirim props secara berulang dari parent ke child (prop drilling)

Selain itu, Context API sudah bawaan React sehingga tidak memerlukan library tambahan seperti Redux. Untuk skala aplikasi 'ResepKita' yang masih sederhana hingga menengah, Context API lebih ringan, mudah dipahami, dan cukup efisien.

Pada implementasinya, state favorit dikelola menggunakan useReducer agar proses tambah dan hapus favorit lebih terstruktur.

##Referensi

https://apiko.com/blog/react-native-for-web/
https://www.youtube.com/watch?v=-D7W6BNMxXo

https://stackoverflow.com/questions/71833895/create-a-website-with-react-native-expo-or-react-native-web

https://medium.com/@saudafzal25/react-native-simple-recipe-app-using-themealdb-api-e61c7416d54c

https://reactnavigation.org/docs/nesting-navigators/

https://reactnative.dev/docs/flatlist?language=javascript

https://reactnative.dev/docs/refreshcontrol

https://dev.to/vishnusatheesh/controlled-and-uncontrolled-components-in-react-1me4

##Refleksi Selama proses membuat aplikasi ResepKita dengan React Native dan Expo, saya mendapatkan banyak pengalaman baru sekaligus tantangan yang cukup besar sebagai pemula. Awalnya saya mengira membuat aplikasi hanya soal menulis kode, tetapi ternyata saya belajar bahwa struktur project, penamaan file, dan ketelitian sangat berpengaruh. Saya beberapa kali mengalami error seperti file tidak ditemukan, tombol tidak berfungsi, halaman blank putih, serta data API tidak muncul. Dari situ saya sadar bahwa kesalahan kecil seperti typo, salah import, nama variabel berbeda huruf besar kecil, atau salah menulis props bisa membuat aplikasi gagal berjalan.

Saya juga belajar bagaimana menggunakan Context API untuk fitur favorit. Saat tombol hapus favorit tidak berfungsi, ternyata penyebabnya adalah nama action yang salah. Dari masalah itu saya memahami pentingnya konsistensi nama variabel dan fungsi. Selain itu saya belajar menangani error dari API menggunakan try...catch, sehingga aplikasi tetap aman ketika internet mati atau server bermasalah.

Bagian yang paling menantang adalah debugging, karena error kadang tidak langsung terlihat. Namun justru dari situ saya belajar membaca pesan error dan mencari sumber masalah secara perlahan. Saya juga belajar pentingnya membuat kode yang rapi dan terstruktur agar mudah diperbaiki.

Secara keseluruhan, project ini membuat saya lebih paham dasar React Native seperti component, state, props, navigation, FlatList, dan penggunaan API. Saya merasa kemampuan saya meningkat karena bukan hanya membuat tampilan, tetapi juga belajar menyelesaikan masalah nyata dalam proses coding.