"use strict";(self.webpackChunkmissing_semester=self.webpackChunkmissing_semester||[]).push([[773],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>k});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=t.createContext({}),s=function(e){var a=t.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=s(e.components);return t.createElement(m.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(m,".").concat(c)]||u[c]||d[c]||i;return n?t.createElement(k,l(l({ref:a},p),{},{components:n})):t.createElement(k,l({ref:a},p))}));function k(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var m in a)hasOwnProperty.call(a,m)&&(o[m]=a[m]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4337:(e,a,n)=>{n.d(a,{Z:()=>o});var t=n(7294);const r="quizContainer_T6G1",i="answerContainer_UNaf",l="answerButton_lwLu",o=e=>{let{answers:a,correctAnswer:n,children:o}=e;const[m,s]=(0,t.useState)(null),p=null!==m;return t.createElement("div",{className:r},t.createElement("h3",null,"Quiz!"),t.createElement("div",null,o),t.createElement("div",{className:i},a.map(((e,a)=>t.createElement("button",{key:e,onClick:()=>(e=>{p||s(e)})(a),disabled:p&&n!=a,className:l,style:n==a&&p?{backgroundColor:"var(--ifm-color-primary)"}:{}},e," ",p?n==a?"\u2714":m==a&&"\u274c":"")))))}},205:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>v,contentTitle:()=>y,default:()=>P,frontMatter:()=>f,metadata:()=>w,toc:()=>N});var t=n(7462),r=n(7294),i=n(3905),l=n(6010),o=n(2389),m=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){const{lazy:a,block:n,defaultValue:i,values:o,groupId:c,className:k}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=o??b.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),g=(0,m.l)(h,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[v,N]=(0,r.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=c){const e=y[c];null!=e&&e!==v&&h.some((a=>a.value===e))&&N(e)}const T=e=>{const a=e.currentTarget,n=C.indexOf(a),t=h[n].value;t!==v&&(P(a),N(t),null!=c&&w(c,String(t)))},D=e=>{let a=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;a=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;a=C[n]??C[C.length-1];break}}a?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},k)},h.map((e=>{let{value:a,label:n,attributes:i}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:v===a?0:-1,"aria-selected":v===a,key:a,ref:e=>C.push(e),onKeyDown:D,onClick:T},i,{className:(0,l.Z)("tabs__item",d,i?.className,{"tabs__item--active":v===a})}),n??a)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==v})))))}function k(e){const a=(0,o.Z)();return r.createElement(c,(0,t.Z)({key:String(a)},e))}const b="tabItem_Ymn6";function h(e){let{children:a,hidden:n,className:t}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(b,t),hidden:n},a)}var g=n(4337);const f={sidebar_label:"Windows"},y="Command Line",w={unversionedId:"command-line/windows",id:"command-line/windows",title:"Command Line",description:"Apabila kamu mencari materi untuk macOS, materi tersebut ada di sini.",source:"@site/docs/command-line/windows.mdx",sourceDirName:"command-line",slug:"/command-line/windows",permalink:"/missing-semester/command-line/windows",draft:!1,editUrl:"https://github.com/kambi-ng/missing-semester/edit/main/docs/command-line/windows.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Windows"},sidebar:"tutorialSidebar",previous:{title:"Mac",permalink:"/missing-semester/command-line/mac"}},v={},N=[{value:"Tampilan",id:"tampilan",level:2},{value:"Command Line Dan Folder",id:"command-line-dan-folder",level:2}],C={toc:N};function P(e){let{components:a,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},C,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"command-line"},"Command Line"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Apabila kamu mencari materi untuk macOS, materi tersebut ",(0,i.kt)("a",{parentName:"p",href:"mac"},"ada di sini"),".")),(0,i.kt)("p",null,"Sebagai mahasiswa fakultas Ilmu Komputer, kita akan seringkali bertemu dengan ",(0,i.kt)("em",{parentName:"p"},"command line"),". Mulai dari menjalankan program, melakukan ",(0,i.kt)("em",{parentName:"p"},"compile"),", hingga melakukan organisasi proyek. Namun, masih banyak dari kita yang belum memahami penggunaan ",(0,i.kt)("em",{parentName:"p"},"command line"),". Hal ini dapat menghambat efektifias dari pembelajaran, sehingga penting bagi kita untuk memahami penggunaan ",(0,i.kt)("em",{parentName:"p"},"command line")," secara efektif."),(0,i.kt)("p",null,"Materi ini ditujukan untuk mengajarkan kamu untuk menggunakan ",(0,i.kt)("em",{parentName:"p"},"command line")," dalam melakukan berbagai macam tugas. Materi akan berbentuk tutorial dengan penjelasan. Kamu diharapkan untuk membaca penjelasan, tidak hanya ",(0,i.kt)("em",{parentName:"p"},"copy-paste")," perintah-perintah yang ada."),(0,i.kt)("admonition",{title:"Pemilihan tab shell",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Windows memiliki dua ",(0,i.kt)("em",{parentName:"p"},"shell"),", yaitu Command Prompt dan Powershell. Sebelum melanjutkan, harap ketahui shell yang kamu gunakan. Buka Windows Terminal atau terminal pada Visual Studio Code. Lalu lihat baris pertama:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Apabila terlihat seperti berikut, maka shell kamu adalah ",(0,i.kt)("strong",{parentName:"p"},"Command Prompt")," (",(0,i.kt)("inlineCode",{parentName:"p"},"CMD"),")"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Microsoft Windows [Version 10.0.19045.2364]\n(c) Microsoft Corporation. All rights reserved.\n\nC:\\Users\\User>\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Apabila terlihat seperti berikut, maka shell kamu adalah ",(0,i.kt)("strong",{parentName:"p"},"Powershell")," (",(0,i.kt)("inlineCode",{parentName:"p"},"PWSH"),")"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"PowerShell 7.2.8\nCopyright (c) Microsoft Corporation.\n\nhttps://aka.ms/powershell\nType 'help' to get help.\n\nPS C:\\Users\\User>\n"))))),(0,i.kt)("h2",{id:"tampilan"},"Tampilan"),(0,i.kt)("p",null,"Buka shell kalian menggunakan Windows Terminal atau terminal di Visual Studio Code. Kalian akan melihat baris yang terlihat seperti berikut:"),(0,i.kt)(k,{groupId:"shell",mdxType:"Tabs"},(0,i.kt)(h,{value:"cmd",label:"Command Prompt",mdxType:"TabItem"},(0,i.kt)("pre",null,"PS C:\\Users\\User>")),(0,i.kt)(h,{value:"pwsh",label:"Powershell",mdxType:"TabItem"},(0,i.kt)("pre",null,"C:\\Users\\User>"))),(0,i.kt)("p",null,"Setiap kali kalian melihat baris tersebut, artinya ",(0,i.kt)("em",{parentName:"p"},"command line")," siap menerima perintah baru. Setiap perintah yang kalian jalankan pada ",(0,i.kt)("em",{parentName:"p"},"command line")," akan dieksekusi pada ",(0,i.kt)("em",{parentName:"p"},"current working directory"),"."),(0,i.kt)("admonition",{title:"Current working directory (cwd)",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"Current working directory")," adalah posisi di mana ",(0,i.kt)("em",{parentName:"p"},"command line")," kalian berada. Hal ini ditandai dengan path yang terlihat sebelum ",(0,i.kt)("inlineCode",{parentName:"p"},">")," dalam setiap baris saat ingin melakukan perintah."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"PS C:\\Users\\User>\n   ^^^^^^^^^^^^^\n       CWD\n\n------------------\n\nC:\\Users\\User>\n^^^^^^^^^^^^^\n     CWD\n")),(0,i.kt)("p",{parentName:"admonition"},"Sebagai contoh, pada contoh di atas, ",(0,i.kt)("em",{parentName:"p"},"current working directory"),"-nya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Users\\User"),". Anggap ",(0,i.kt)("em",{parentName:"p"},"current working directory")," ini adalah ",(0,i.kt)("em",{parentName:"p"},"file explorer")," kalian, di mana folder tersebut sedang dibuka.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Mulai titik ini, semua ",(0,i.kt)("em",{parentName:"p"},"current working directory")," akan disingkat menjadi ",(0,i.kt)("inlineCode",{parentName:"p"},"cwd"),".")),(0,i.kt)("h2",{id:"command-line-dan-folder"},"Command Line Dan Folder"),(0,i.kt)("p",null,"Seperti halnya dengan ",(0,i.kt)("em",{parentName:"p"},"file explorer"),", kamu bisa melakukan banyak hal. Cetak semua isi folder kalian menggunakan perintah ",(0,i.kt)("inlineCode",{parentName:"p"},"dir"),"."),(0,i.kt)(k,{groupId:"shell",mdxType:"Tabs"},(0,i.kt)(h,{value:"cmd",label:"Command Prompt",mdxType:"TabItem"},(0,i.kt)("pre",null,"C:\\Users\\Public>dir",(0,i.kt)("p",null,"Volume in drive C has no label.\nVolume Serial Number is 3CEA-EF6E"),(0,i.kt)("p",null,"Directory of C:\\Users\\Public"),(0,i.kt)("p",null,"05/03/2022 08:16 PM <DIR",">"," .\n05/03/2022 08:16 PM <DIR",">"," ..\n12/15/2022 11:19 PM <DIR",">"," Documents\n12/07/2019 04:14 PM <DIR",">"," Downloads\n12/07/2019 04:14 PM <DIR",">"," Music\n12/07/2019 04:14 PM <DIR",">"," Pictures\n12/07/2019 04:14 PM <DIR",">"," Videos\n0 File(s) 0 bytes\n7 Dir(s) 71,948,279,808 bytes free"))),(0,i.kt)(h,{value:"pwsh",label:"Powershell",mdxType:"TabItem"},(0,i.kt)("pre",null,"PS C:\\Users\\Public> dir",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    Directory: C:\\Users\\Public\n\n    Mode                 LastWriteTime         Length Name\n    ----                 -------------         ------ ----\n    d-r--          12/15/2022 11:19 PM                Documents\n    d-r--           12/7/2019  4:14 PM                Downloads\n    d-r--           12/7/2019  4:14 PM                Music\n    d-r--           12/7/2019  4:14 PM                Pictures\n    d-r--           12/7/2019  4:14 PM                Videos\n"))))),(0,i.kt)("p",null,"Kamu bisa berpindah ke folder lain menggunakan perintah ",(0,i.kt)("inlineCode",{parentName:"p"},"cd"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Untuk berpindah ke folder yang ada di dalam folder cwd, ketik ",(0,i.kt)("inlineCode",{parentName:"li"},"cd <nama_folder>"),"."),(0,i.kt)("li",{parentName:"ul"},"Untuk berpindah ke folder sebelumnya, ketik ",(0,i.kt)("inlineCode",{parentName:"li"},"cd .."))),(0,i.kt)("p",null,"Perhatikan perubahan cwd yang ada dalam ilustrasi berikut."),(0,i.kt)(k,{groupId:"shell",mdxType:"Tabs"},(0,i.kt)(h,{value:"cmd",label:"Command Prompt",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("p",null,"C:\\Users\\Public>cd Downloads"),(0,i.kt)("p",null,"C:\\Users\\Public\\Downloads>cd .."),(0,i.kt)("p",null,"C:\\Users\\Public>"))),(0,i.kt)(h,{value:"pwsh",label:"Powershell",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("p",null,"PS C:\\Users\\Public> cd Downloads\nPS C:\\Users\\Public\\Downloads> cd ..\nPS C:\\Users\\Public>")))),(0,i.kt)(g.Z,{answers:["D:\\semoga","D:\\semoga\\lancar","D:\\lancar","D:\\lancar\\ya"],correctAnswer:2,mdxType:"Quiz"},"Anggap kondisi command line sedang berada pada ",(0,i.kt)("code",null,"D:\\"),". Apabila dijalankan perintah berikut, dimanakan command line berada pada akhir command terakhir?",(0,i.kt)("pre",null,(0,i.kt)("p",null,"cd semoga\ncd ..\ncd lancar\ncd ya\ncd .."))))}P.isMDXComponent=!0}}]);