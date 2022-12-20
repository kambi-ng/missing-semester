---
sidebar_position: 3
title: 2. Konsep Filesystem
---

# Filesystem

Filesystem adalah cara suatu sistem operasi melakukan organisasi dan penyimpanan file di suatu hard drive atau alat penyimpanan lainnya. Konsep ini memberi fondasi untuk sistem operasi dalam menyimpan dan melacak bagaimana suatu file itu disimpan, dan hubungannya dengan file lain.

:::info Catatan untuk pengguna Windows

Untuk memahami secara penuh mengenai konsep filesystem, kamu harus membuat Windows menampilkan _extension_ suatu file. Hal ini dapat dilakukan dengan cara:

1. Buka File Explorer
2. Pada panel di atas, cari tab `View` atau `Tampilan`.
3. Dalam grup `Show/Hide` atau `Pelihatkan/Sembunyikan`, centang kotak `File name extensions` atau `Ekstensi nama file`.  
   ![Opsi ekkstensi nama file](https://support.content.office.net/id-id/media/046a19de-0421-1b38-9499-4bf45ccae676.png)

:::

## File

File adalah hal yang biasa kamu temui dalam mengoperasikan suatu komputer. Suatu file dapat menyimpan berbagai macam informasi. Biasanya, suatu file terdiri dari dua bagian, nama file dan juga _extension_-nya. Sebagai contoh, saat kamu membuka suatu dokumen word, kamu berinteraksi dengan suatu file dengan ekstensi `.docx` (atau `.doc`).

Namun, perlu diketahui bahwa nama lengkap suatu file **tidak perlu** terbentuk dari dua bagian itu. Suatu file bisa saja bernama sepert `.env` atau `hello`, dan tersebut tetaplah nama yang valid. Jadi, jangan kaget apabila kamu menemukan suatu file yang terlihat tidak mempunyai "nama" atau _extension_.

Perlu diketahui juga bahwa tidak semua file dapat dibuka dengan cara meng-klik dua kali. Bisa saja suatu file harus dibuka dengan cara khusus sendiri. Oleh karena itu, apabila kamu tidak bisa membuka suatu file dengan klik dua kali, jangan panik! Coba lakukan GSGS terlebih dahulu untuk mencari tahu cara membukanya. Ada kemungkinan juga bahwa file tersebut bukan untuk dibuka juga.

Penggunaan suatu file dapat dilakukan oleh program juga. Sehingga tidak hanya pengguna yang dapat melakukan akses dan mengubah suatu file. Sebagai contoh, suatu game RPG harus melakukan akses pada save file agar pemain bisa menyimpan _progress_ dari permainannya. Kamu akan belajar bagaimana suatu aplikasi dapat mengakses suatu file pada topik Command Line nanti.

## Folder

Folder adahal suatu "kotak" virtual yang digunakan untuk menyimpan file-file yuang berkaitan. Tidak hanya itu, suatu folder bisa menyimpan folder lain, dimana folder tersebut dinamakan _sub-folder_. Pada umumnya, kamu ingin membuat suatu folder memiliki isi yang berkaitan dengan satu sama lain.

Sebagai contoh, kamu mempunyai folder bernama `DDP-1`, di mana dalam folder tersebut memiliki dua folder lagi, yaitu `TP`, dan `Lab`. Untuk masing-masing folder, kamu menyimpan _source code_ dari setiap tugas TP atau Lab kamu. Berikut ilustrasi dari folder tersebut:

```
DDP-1
|
|-- Lab
    |--- lab1.py
    |--- lab2.py
    |--- lab3.py
    |--- lab4.py
    |--- lab5.py
|-- TP
    |--- tp01.py
    |--- tp02.py
    |--- tp03.py
    |--- tp04.py
```
