---
sidebar_position: 2
title: 1. Mesin Pencari
---

# Mesin Pencari

Selama melakukan pemrograman (atau menggunakan komputer secara umum), sudah pasti terdapat berbagai macam masalah yang dapat terjadi. Sehingga mesin pencari merupakan alat yang vital bagi kita. Meskipun dengan seiring waktu mesin pencari semakin lebih baik, tidak banyak yang dapat menggunakan alat tersebut secara efektif. Oleh karena itu, penting bagi kita untuk dapat membuat _search query_ yang efektif.

Di dalam Fakultas Ilmu Komputer UI, terdapat singkatan GSGS (Google Sana, Google Sini). Singkatan ini dicetuskan oleh bapak [Drs. Rahmat Mustafa Samik-Ibrahim, M.Kom.](https://cs.ui.ac.id/personnel/rahmat-mustafa-samik-ibrahim/) dalam mata kuliah Sistem Operasi. Karena kami merasa GSGS merupakan hal yang krusial bagi semua mata kuliah, maka kami masukkan ke dalam materi.

:::info
Halaman ini hanya akan membahas bagaimana cara mengoptimisasi _search query_ dalam konteks komputer dan pemrograman.
:::

Pada materi ini, akan ada topik umum yang dibahas, yaitu mencari suatu topik dan mencari solusi error.

## Mencari Topik

Apabila kamu ingin mencari suatu topik, ada beberapa tips yang dapat kamu gunakan dalam membuat _search query_ kalian, yaitu:

### Buat Query Secara Ringkas

Apabila memungkinkan, buat query kalian secara ringkas dan langsung menuju ke inti dari apa yang kamu mau. Sebagai contoh, apabila kamu ingin tahu mengenai rektor dari Universitas Indonesia, kamu bisa membuat _query_ kamu seperti `rektor universitas indonesia`. Kamu tidak perlu menulis pertanyaan lengkap seperti `siapa rektor dari universitas indonesia?`, meskipun pada contoh ini dapat mengeluarkan hasil yang tepat, pada kasus yang lebih spesifik, dapat saja mesin pencari tidak menemukan apa yang kamu inginkan.

Meskipun begitu, kamu tetap dapat memberikan pertanyaan ke mesin pencari dalam kasus tertentu, yang biasanya dapat dijawab dengan "ya" atau "tidak" dan cukup umum diketahui. Sebagai contoh, kamu dapat bertanya "is golang garbage collected?" dan mesin pencari akan dapat memberikan jawaban yang benar untuk kamu.

### Perkecil Scope

Terkadang, _query_ yang kamu buat dapat menghasilkan hal-hal yang diluar dengan apa yang kamu mau. Sebagai contoh, kamu ingin mencari bagaimana cara mengambil angka acak, sehingga kamu mencari `random number generator`. Meskipun benar, namun hasil yang kamu dapat adalah website yang menyediakan layanan untuk mengambil angka acak. Untuk itu, kamu bisa pertajam _scope_ yang kamu inginkan dengan cara:

- Apabila kamu sudah tau topik yang kamu inginkan, masukkan ke dalam _query_.  
  Pada contoh angka acak, misalkan kamu ingin membuat algoritma tersebut dalam bahasa pemrograman Python, maka tambahkan `python` di dalam query tersebut.
- Apabila kamu sudah tau website yang akan kamu inginkan, masukkan ke dalam _query_.
  Sebagai contoh, kamu ingin mengambil library `random` yang ada pada Python untuk keperluan angka acak kamu, kamu dapat menggunakan query `random python docs` agar langsung diarahkan ke dokumentasi Python.

## Mencari Solusi Error

<center>
  <img src="https://imgs.xkcd.com/comics/tech_support_cheat_sheet.png" />
</center>
<center>
  <a href="https://xkcd.com/627">xkcd 1024: Tech Support Cheat Sheet</a>
</center>

:::tip
Kamu akan mempelajari lebih lanjut mengenai error pada topik [Mengenali Error](/error).
:::

Selama melakukan pemrograman, kalian pasti akan bertemu dengan error. Apabila terjadi hal tersebut dan kamu ingin mencari tahu mengenai error tersebut, berikut tips yang dapat kamu gunakan:

### Masukkan Kode Error

Setiap kali terdapat error, program terkadang akan memberi tahu kode error. Hal ini dapat membantu untuk memfokuskan error yang sama dengan yang kamu alami, terutama pada program atau kondisi di mana pesan error dapat sama pada berbagai kode error (Windows seringkali melakukan hal ini).

Apabila program tidak memberikan kode error, tidak apa-apa. Kamu harus lebih teliti dalam melihat hasil dari mesin pencari, gunakan solusi yang dirasa memiliki kondisi yang sama denganmu.

### Hapus Informasi Tidak Penting

Suatu error dapat memiliki pesan yang berbeda-beda, namun terkadang beberapa error memiliki informasi yang tidak akan relevan pada hasil pencarian. Tidak hanya itu, informasi yang tidak relevan tersebut bisa saja mengubah makna dari _query_ kamu. Sebagai contoh, perhatikan error berikut:

```
>>> open("contoh/file.txt", "r")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
FileNotFoundError: [Errno 2] No such file or directory: 'contoh/file.txt'
```

Kita tahu bahwa pesan errornya ada pada baris terakhir, yaitu `FileNotFoundError: [Errno 2] No such file or directory: 'contoh/file.txt'`. Sehingga kita mencari dengan _query_ tersebut. Namun, terdapat informasi tidak penting, yaitu `'contoh/file.txt'` di mana hal ini merupakan spesifik untuk kode kita. Hal ini dapat memengaruhi hasil pencarian kita, sebab mesin pencari akan mencoba mencari `contoh/file.txt` juga. Oleh karena itu, alangkah baiknya untuk menghapus bagian tersebut, sehingga kamu cukup mencari `FileNotFoundError: [Errno 2] No such file or directory`.
