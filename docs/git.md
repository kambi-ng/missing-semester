---
sidebar_position: 5
title: 4. Menggunakan Git
---

# Git

<center>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/2sjqTHE0zok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

## Version Control System (VCS)

Version Control System adalah program-program yang digunakan untuk mendeteksi perubahan dari source code. Tidak hanya itu, VCS juga digunakan untuk kolaborasi. VCS mendeteksi perubahan dari folder dan isinya dengan snapshot-snapshot yang tersimpan, di mana setiap snapshot menyimpan kondisi folder/file yang ada. Tidak hanya itu, setiap snapshot juga memiliki metadata yang berisi kapan snapshot itu dibuat, pesan yang terkait, dan lain-lain.

VCS berguna tidak hanya untuk mengakomodasi kolaborasi, namun juga dapat membantu melakukan perubahan yang terkait dengan snapshot, seperti mengembalikan kondisi source code ke suatu snapshot.

Terdapat berbagai macam program VCS, seperti `svn`, Mercurial, dan `git`. Namun, `git` merupakan VCS yang paling populer digunakan.

## Konsep Git

<center>
    <img src="https://imgs.xkcd.com/comics/git.png" />
</center>
<center>
    <a href="https://xkcd.com/1597">xkcd 1597: Git</a>
</center>

Seperti yang dapat dilihat dalam komik xkcd tersebut, git memiliki konsep yang sangat keren, namun memiliki interface yang tidak ramah bagi kebanyakan pengguna (terutama pemula). Untuk itu, materi ini akan memberikan informasi mengenai konsep-konsep yang ada di git, sehingga kamu diharapkan agar lebih mudah mengerti interface yang ada.

:::info
Banyak informasi di sini yang disimplifikasi, meskipun tidak merepresentasikan apa yang dilakukan `git` secara akurat, informasi yang diberikan diharapkan tetap memberi gambaran besar mengenai konsep-konsep yang ada di git.
:::

### Repository

Suatu repository adalah tempat penyimpanan virtual yang menyimpan segala hal mengenai proyek yang dibuat. Konsep yang dimiliki mirip seperti folder, namun suatu repository dapat menyimpan snapshot-snapshot dari perubahan yang dilakukan, serta metadata yang diikuti.

Repository dapat berada di lokal dan juga remote. Repository lokal adalah repository yang berada di dalam komputer kalian, sedangkan repository remote adalah repository yang berada di service git yang ada di internet, seperti GitHub atau Gitlab.

### Branch

Seperti dengan namanya, suatu branch adalah "cabang" dari repository tersebut. Artinya, suatu repository dapat memiliki versi-versi yang berbeda. Branch membantu dalam mengorganisasikan pekerjaan dengan melakukan pekerjaan tersebut di tempat yang berbeda tanpa menyentuh versi utamanya. Suatu branch juga dapat "menimpa" perubahan-perubahan dari branch lain, sehingga perubahan yang ada di branch lain dapat juga dimasukkan ke dalam branch yang sedang dipakai.

Sebagai contoh, kamu sedang membuat website bersama teman-temanmu. Kamu ingin membuat suatu fitur, sehingga kamu membuat branch baru agar orang lain tidak terganggu dengan perubahan-perubahan kamu. Setelah selesai, kamu "menimpa" branch kamu ke branch utama, sehingga fitur kamu dirilis.

### Commit

Commit adalah snapshot dari suatu perubahan yang terjadi di suatu branch. Commit tidak hanya menyimpan snapshot dari file yang berubah, namun juga metadata yang terkait dengan commit tersebut, seperti siapa yang membuat commit tersebut, kapan waktu commit tersebut dibuat, dan lain-lain.

Pada sistem git, suatu commit terkait dengan commit-commit lainnya, sehingga sistem yang digunakan git adalah "relasi dari commit". Hal ini membuat git menjadi fleksibel untuk melakukan kolaborasi dengan banyak branch, hingga melakukan undo dari suatu commit.

## Menggunakan Git

### Repository

#### Membuat Baru

#### Clone

#### Commit

#### Push

### Branching

#### Membuat Baru

#### Push

#### Merge

## Resources

- [Git Book/What is Git?](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F)
- [Missing Semester/Version Control (Git)](https://missing.csail.mit.edu/2020/version-control/)
