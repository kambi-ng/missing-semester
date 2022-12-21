"use strict";(self.webpackChunkmissing_semester=self.webpackChunkmissing_semester||[]).push([[773],{3905:(a,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>c});var t=n(7294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function m(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var d=t.createContext({}),p=function(a){var e=t.useContext(d),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},o=function(a){var e=p(a.components);return t.createElement(d.Provider,{value:e},a.children)},k="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},s=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,i=a.originalType,d=a.parentName,o=m(a,["components","mdxType","originalType","parentName"]),k=p(n),s=r,c=k["".concat(d,".").concat(s)]||k[s]||u[s]||i;return n?t.createElement(c,l(l({ref:e},o),{},{components:n})):t.createElement(c,l({ref:e},o))}));function c(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=n.length,l=new Array(i);l[0]=s;var m={};for(var d in e)hasOwnProperty.call(e,d)&&(m[d]=e[d]);m.originalType=a,m[k]="string"==typeof a?a:r,l[1]=m;for(var p=2;p<i;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4337:(a,e,n)=>{n.d(e,{Z:()=>m});var t=n(7294);const r="quizContainer_T6G1",i="answerContainer_UNaf",l="answerButton_lwLu",m=a=>{let{answers:e,correctAnswer:n,children:m}=a;const[d,p]=(0,t.useState)(null),o=null!==d;return t.createElement("div",{className:r},t.createElement("h3",null,"Quiz!"),t.createElement("div",null,m),t.createElement("div",{className:i},e.map(((a,e)=>t.createElement("button",{key:a,onClick:()=>(a=>{o||p(a)})(e),disabled:o&&n!=e,className:l,style:n==e&&o?{backgroundColor:"var(--ifm-color-primary)"}:{}},a," ",o?n==e?"\u2714":d==e&&"\u274c":"")))))}},205:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var t=n(7462),r=(n(7294),n(3905));n(2389);var i=n(4337);const l={sidebar_label:"Windows"},m="Command Line",d={unversionedId:"command-line/windows",id:"command-line/windows",title:"Command Line",description:"Apabila kamu mencari materi untuk macOS, materi tersebut ada di sini.",source:"@site/docs/command-line/windows.mdx",sourceDirName:"command-line",slug:"/command-line/windows",permalink:"/missing-semester/command-line/windows",draft:!1,editUrl:"https://github.com/kambi-ng/missing-semester/edit/main/docs/command-line/windows.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Windows"},sidebar:"tutorialSidebar",previous:{title:"Mac",permalink:"/missing-semester/command-line/mac"}},p={},o=[{value:"Tampilan",id:"tampilan",level:2},{value:"Command Line Dan Folder",id:"command-line-dan-folder",level:2},{value:"Berpindah Folder",id:"berpindah-folder",level:3},{value:"Interaksi Dengan Program",id:"interaksi-dengan-program",level:2},{value:"Struktur Perintah",id:"struktur-perintah",level:3},{value:"Perintah Bawaan",id:"perintah-bawaan",level:3}],k={toc:o};function u(a){let{components:e,...n}=a;return(0,r.kt)("wrapper",(0,t.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-line"},"Command Line"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Apabila kamu mencari materi untuk macOS, materi tersebut ",(0,r.kt)("a",{parentName:"p",href:"mac"},"ada di sini"),".")),(0,r.kt)("p",null,"Sebagai mahasiswa fakultas Ilmu Komputer, kita akan seringkali bertemu dengan ",(0,r.kt)("em",{parentName:"p"},"command line"),". Mulai dari menjalankan program, melakukan ",(0,r.kt)("em",{parentName:"p"},"compile"),", hingga melakukan organisasi proyek. Namun, masih banyak dari kita yang belum memahami penggunaan ",(0,r.kt)("em",{parentName:"p"},"command line"),". Hal ini dapat menghambat efektifias dari pembelajaran, sehingga penting bagi kita untuk memahami penggunaan ",(0,r.kt)("em",{parentName:"p"},"command line")," secara efektif."),(0,r.kt)("p",null,"Materi ini ditujukan untuk mengajarkan kamu untuk menggunakan ",(0,r.kt)("em",{parentName:"p"},"command line")," dalam melakukan berbagai macam tugas. Materi akan berbentuk tutorial dengan penjelasan. Kamu diharapkan untuk membaca penjelasan, tidak hanya ",(0,r.kt)("em",{parentName:"p"},"copy-paste")," perintah-perintah yang ada."),(0,r.kt)("admonition",{title:"Dokumen ini menggunakan PowerShell",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Windows memiliki dua ",(0,r.kt)("em",{parentName:"p"},"shell"),", yaitu Command Prompt dan PowerShell. Sebelum melanjutkan, harap ketahui shell yang digunakan adalah ",(0,r.kt)("strong",{parentName:"p"},"PowerShell"),", bukan Command Prompt."),(0,r.kt)("p",{parentName:"admonition"},"Apabila kamu menggunakan Visual Studio Code, kamu ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/45899693"},"dapat mengganti ",(0,r.kt)("em",{parentName:"a"},"shell"),"-nya"),"."),(0,r.kt)("p",{parentName:"admonition"},"Apabila kamu tidak menggunakan Windows 11, kamu disarankan untuk ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell"},"memasang versi PowerShell terbaru"),".")),(0,r.kt)("h2",{id:"tampilan"},"Tampilan"),(0,r.kt)("p",null,"Buka shell kalian menggunakan Windows Terminal atau terminal di Visual Studio Code. Kalian akan melihat baris yang terlihat seperti berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PS C:\\Users\\User>\n")),(0,r.kt)("p",null,"Setiap kali kalian melihat baris tersebut, artinya ",(0,r.kt)("em",{parentName:"p"},"command line")," siap menerima perintah baru. Setiap perintah yang kalian jalankan pada ",(0,r.kt)("em",{parentName:"p"},"command line")," akan dieksekusi pada ",(0,r.kt)("em",{parentName:"p"},"current working directory"),"."),(0,r.kt)("admonition",{title:"Current working directory (cwd)",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"Current working directory")," adalah posisi di mana ",(0,r.kt)("em",{parentName:"p"},"command line")," kalian berada. Hal ini ditandai dengan path yang terlihat sebelum ",(0,r.kt)("inlineCode",{parentName:"p"},">")," dalam setiap baris saat ingin melakukan perintah."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"PS C:\\Users\\User>\n   ^^^^^^^^^^^^^\n       CWD\n")),(0,r.kt)("p",{parentName:"admonition"},"Sebagai contoh, pada contoh di atas, ",(0,r.kt)("em",{parentName:"p"},"current working directory"),"-nya adalah ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Users\\User"),". Anggap ",(0,r.kt)("em",{parentName:"p"},"current working directory")," ini adalah ",(0,r.kt)("em",{parentName:"p"},"file explorer")," kalian, di mana folder tersebut sedang dibuka.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Mulai titik ini, semua ",(0,r.kt)("em",{parentName:"p"},"current working directory")," akan disingkat menjadi ",(0,r.kt)("inlineCode",{parentName:"p"},"cwd"),".")),(0,r.kt)("h2",{id:"command-line-dan-folder"},"Command Line Dan Folder"),(0,r.kt)("p",null,"Seperti halnya dengan ",(0,r.kt)("em",{parentName:"p"},"file explorer"),", kamu bisa melakukan banyak hal. Cetak semua isi folder kalian menggunakan perintah ",(0,r.kt)("inlineCode",{parentName:"p"},"dir"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PS C:\\Users\\Public> dir\n\nDirectory: C:\\Users\\Public\n\nMode                 LastWriteTime         Length Name\n----                 -------------         ------ ----\nd-r--          12/15/2022 11:19 PM                Documents\nd-r--           12/7/2019  4:14 PM                Downloads\nd-r--           12/7/2019  4:14 PM                Music\nd-r--           12/7/2019  4:14 PM                Pictures\nd-r--           12/7/2019  4:14 PM                Videos\n")),(0,r.kt)("h3",{id:"berpindah-folder"},"Berpindah Folder"),(0,r.kt)("p",null,"Kamu bisa berpindah ke folder lain menggunakan perintah ",(0,r.kt)("inlineCode",{parentName:"p"},"cd"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Untuk berpindah ke folder yang ada di dalam folder cwd, ketik ",(0,r.kt)("inlineCode",{parentName:"li"},"cd <path_ke_folder>"),"."),(0,r.kt)("li",{parentName:"ul"},"Untuk berpindah ke folder sebelumnya, ketik ",(0,r.kt)("inlineCode",{parentName:"li"},"cd .."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<path_ke_folder>")," dapat berupa ",(0,r.kt)("em",{parentName:"p"},"relative")," atau ",(0,r.kt)("em",{parentName:"p"},"absolute")," path. Apabila kamu lupa mengenai konsep representasi path, klik ",(0,r.kt)("a",{parentName:"p",href:"../filesystem#representasi-path"},"di sini")," untuk mempelajari kembali."),(0,r.kt)("p",{parentName:"admonition"},"Kamu juga bisa menggabungkan folder sebelumnya dengan relative path. Sebagai contoh, jika kamu berada di ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\home\\user\\halo")," dan ingin pindah ke ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\home\\user\\keren"),", kamu bisa gunakan ",(0,r.kt)("inlineCode",{parentName:"p"},"cd ..\\keren"),".")),(0,r.kt)("p",null,"Perhatikan perubahan cwd yang ada dalam ilustrasi berikut."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PS C:\\Users\\Public> cd Downloads\nPS C:\\Users\\Public\\Downloads> cd ..\nPS C:\\Users\\Public>\n")),(0,r.kt)(i.Z,{answers:["D:\\semoga","D:\\semoga\\lancar","D:\\lancar","D:\\lancar\\ya"],correctAnswer:2,mdxType:"Quiz"},"Anggap kondisi command line sedang berada pada ",(0,r.kt)("code",null,"D:\\"),". Apabila dijalankan perintah berikut, dimanakan command line berada pada akhir command terakhir?",(0,r.kt)("pre",null,(0,r.kt)("p",null,"cd semoga\ncd ..\ncd lancar\ncd ya\ncd .."))),(0,r.kt)("h2",{id:"interaksi-dengan-program"},"Interaksi Dengan Program"),(0,r.kt)("p",null,"Dalam menggunakan command line, dipastikan akan ada interaksi dengan program dan perintah-perintah yang ada. Bagian ini akan menjelaskan bagaimana suatu program dijalankan dalam command line."),(0,r.kt)("h3",{id:"struktur-perintah"},"Struktur Perintah"),(0,r.kt)("p",null,"Secara umum, struktur perintah adalah"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<perintah_atau_program> <argumen_1> <argumen_2> ... <argumen_n>\n")),(0,r.kt)("p",null,"Di mana ",(0,r.kt)("inlineCode",{parentName:"p"},"<perintah_atau_program>")," dapat berupa perintah bawaan dari PowerShell, atau program yang berada di salah satu folder ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,r.kt)("p",null,"Argumen adalah data-data tambahan yang kamu kirim dalam perintah kamu. Dalam contoh ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," di atas, argumen digunakan untuk menyatakan folder tujuan. Penggunaan argumen dapat berbeda-beda, tergantung pada perintah atau program yang dipanggil."),(0,r.kt)("p",null,"Berikut contoh-contoh perintah dan pembagian perintah serta argumennya:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Baris"),(0,r.kt)("th",{parentName:"tr",align:null},"Nama Perintah/Program"),(0,r.kt)("th",{parentName:"tr",align:null},"Argumen"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cd folder")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cd")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"folder"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"echo halo dunia")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"echo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"halo dunia"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mkdir folderbaru")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mkdir")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"folderbaru"))))),(0,r.kt)("h3",{id:"perintah-bawaan"},"Perintah Bawaan"),(0,r.kt)("p",null,"Setiap sistem operasi memiliki sejumlah perintah-perintah bawaan yang ada. Untuk Windows, kamu bisa mendapatkan informasi tersebut ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands"},"di sini"),". Namun, berikut adalah perintah-perintah yang biasa digunakan:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Perintah"),(0,r.kt)("th",{parentName:"tr",align:null},"Fungsi"),(0,r.kt)("th",{parentName:"tr",align:null},"Argumen"),(0,r.kt)("th",{parentName:"tr",align:null},"Contoh"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cd")),(0,r.kt)("td",{parentName:"tr",align:null},"Berpindah ke folder lain"),(0,r.kt)("td",{parentName:"tr",align:null},"Path menuju folder tujuan"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cd folder"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"echo")),(0,r.kt)("td",{parentName:"tr",align:null},"Menampilkan pesan"),(0,r.kt)("td",{parentName:"tr",align:null},"Pesan yang ingin ditampilkan"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"echo halo"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cat")),(0,r.kt)("td",{parentName:"tr",align:null},"Menampilkan isi dari file"),(0,r.kt)("td",{parentName:"tr",align:null},"Path menuju file"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cat file.txt"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mkdir")),(0,r.kt)("td",{parentName:"tr",align:null},"Membuat folder baru"),(0,r.kt)("td",{parentName:"tr",align:null},"Nama folder"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mkdir folder"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ls")),(0,r.kt)("td",{parentName:"tr",align:null},"Menampilkan isi dari folder"),(0,r.kt)("td",{parentName:"tr",align:null},"Path folder (opsional, ",(0,r.kt)("em",{parentName:"td"},"default")," ke cwd)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ls")," (tanpa argumen)",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"ls folder")," (dengan argumen)")))))}u.isMDXComponent=!0}}]);