(function(){var t={1065:function(t,e,a){"use strict";var i=a(6369),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.isLoading?e("loader"):t._e(),e("router-view")],1)},n=[],o=function(){var t=this;t._self._c;return t._m(0)},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"boxes"},[e("div",{staticClass:"box"},[e("div"),e("div"),e("div"),e("div")]),e("div",{staticClass:"box"},[e("div"),e("div"),e("div"),e("div")]),e("div",{staticClass:"box"},[e("div"),e("div"),e("div"),e("div")]),e("div",{staticClass:"box"},[e("div"),e("div"),e("div"),e("div")])])])}],l={},u=l,c=a(1001),d=(0,c.Z)(u,o,r,!1,null,"34117dfe",null),f=d.exports,p=a(3822),m={components:{loader:f},computed:{...(0,p.rn)({isLoading:t=>t.news.isLoading})}},h=m,g=(0,c.Z)(h,s,n,!1,null,null,null),b=g.exports,v=a(2631),w=function(){var t=this,e=t._self._c;return e("div",[e("navbar-site"),e("router-view"),e("footer-site")],1)},y=[],A=function(){var t=this,e=t._self._c;return e("header",{staticClass:"fixed w-full"},[e("div",{staticClass:"sidebar",class:{open:t.sidebarColapse}},[e("div",{staticClass:"mask",on:{click:function(e){t.sidebarColapse=!1}}}),e("div",{staticClass:"body relative"},[e("div",{staticClass:"krestik"},[e("a",{staticClass:"mr-4",attrs:{href:"#!"},on:{click:function(e){e.preventDefault(),t.sidebarColapse=!1}}},[e("img",{staticClass:"w-5",attrs:{src:a(8331)}})])]),e("ul",{staticClass:"flex flex-col"},[e("li",{staticClass:"flex w-full items-center",on:{click:function(e){t.sidebarColapse=!1}}},[e("router-link",{staticClass:"w-full px-4 py-3",attrs:{to:"/"}},[t._v(" "+t._s(t.$t("home"))+" ")])],1),e("li",{staticClass:"flex w-full items-center",on:{click:function(e){t.sidebarColapse=!1}}},[e("router-link",{staticClass:"w-full px-4 py-3",attrs:{to:"/news"}},[t._v(" "+t._s(t.$t("news"))+" ")])],1),e("li",{staticClass:"flex w-full items-center",on:{click:function(e){t.sidebarColapse=!1}}},[e("router-link",{staticClass:"w-full px-4 py-3",attrs:{to:"/lawyers"}},[t._v(" "+t._s(t.$t("lawyers"))+" ")])],1)])])]),e("nav",{staticClass:"border",class:{"bg-base navscroll":t.scrolHeader}},[e("div",{staticClass:"container px-3 mx-auto flex items-center justify-between"},[e("a",{staticClass:"flex items-center",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.routeHome.apply(null,arguments)}}},[e("img",{staticClass:"w-8 mr-2",attrs:{src:a(5080)}}),e("strong",{staticClass:"text-slate font-lato w-52 logo-text"},[t._v(" "+t._s(t.$t("ORAV"))+" ")])]),e("div",{staticClass:"hidden md:flex navBar flex-grow"},[e("ul",{},[e("li",[e("router-link",{attrs:{to:"/"}},[t._v(" "+t._s(t.$t("home"))+" ")])],1),e("li",[e("router-link",{attrs:{to:"/news"}},[t._v(" "+t._s(t.$t("news"))+" ")])],1),e("li",[e("router-link",{attrs:{to:"/lawyers"}},[t._v(" "+t._s(t.$t("lawyers"))+" ")])],1)])]),e("div",{staticClass:"tools flex items-center"},[t.drobdawn?t._e():e("div",{staticClass:"dropdwon__mask",on:{click:function(e){t.drobdawn=!0}}}),e("label",{staticClass:"langs flex items-center justify-center h-full mr-2 relative cursor-pointer",attrs:{for:"lang_input"}},[e("img",{staticClass:"w-5",attrs:{src:a(4548)(`./${t.lang}.png`)}}),e("span",{staticClass:"flex items-center justify-center pr-5 pl-2 h-full",on:{click:function(e){t.drobdawn=!t.drobdawn}}},[t._v(t._s(t.$t(`langs.${t.lang}`)))]),e("div",{staticClass:"drobdawn absolute top-full right-0",class:{close:t.drobdawn}},[e("ul",{staticClass:"flex flex-col"},t._l(t.langs,(function(i,s){return e("li",{key:s,staticClass:"flex items-center my-2 mx-4"},[e("a",{staticClass:"flex items-center",attrs:{href:"#!"},on:{click:function(e){return e.preventDefault(),t.changeLang(i)}}},[e("img",{staticClass:"w-5 mr-2",attrs:{src:a(4548)(`./${i}.png`)}}),t._v(" "+t._s(t.$t(`langs.${i}`))+" ")])])})),0)])]),e("a",{staticClass:"flex items-center h-full p-2 ml-2",attrs:{href:"https://id.egov.uz/?client_id=e-advokat&token_id=538b3314-4e81-4171-8366-4fa02c0390d4&method=IDPW"}},[t._v(" "+t._s(t.$t("logIn"))+" ")]),e("a",{staticClass:"flex w-8 h-6 sidebarOpen md:hidden",attrs:{href:"#!"},on:{click:function(e){e.preventDefault(),t.sidebarColapse=!0}}},[e("span"),e("span"),e("span")])])])])])},k=[],z={data(){return{scrolHeader:!1,colapse:!1,lang:"Uz",langs:["uz","en","ru"],drobdawn:!0,sidebarColapse:!1}},methods:{scrolingHeader(){window.addEventListener("scroll",(()=>{window.scrollY>10?this.scrolHeader=!0:this.scrolHeader=!1}))},routeHome(){this.$router.push("/")},changeLang(t){localStorage.setItem("lang",t),this.$i18n.locale=t,this.lang=t,this.drobdawn=!0}},created(){this.lang=this.$i18n.locale},mounted(){this.scrolingHeader()}},C=z,x=(0,c.Z)(C,A,k,!1,null,"786b02a8",null),O=x.exports,L=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"bg-bgdarkblue"},[e("div",{staticClass:"container mx-auto px-3 py-10 flex flex-wrap flex-col lg:flex-row items-center justify-between"},[e("router-link",{staticClass:"logo flex items-center mb-4 lg:mb-0",attrs:{to:"/"}},[e("img",{staticClass:"w-8 mr-4",attrs:{src:a(5080)}}),e("strong",{staticClass:"w-60"},[t._v(t._s(t.$t("ORAV")))])]),e("ul",{staticClass:"flex items-center mb-4 lg:mb-0"},[e("li",[e("router-link",{attrs:{to:"/"}},[t._v(" "+t._s(t.$t("home"))+" ")])],1),e("li",[e("router-link",{attrs:{to:"/news"}},[t._v(" "+t._s(t.$t("news"))+" ")])],1),e("li",[e("router-link",{attrs:{to:"/lawyers"}},[t._v(" "+t._s(t.$t("lawyers"))+" ")])],1)]),e("div",{staticClass:"links flex"},[e("a",{attrs:{href:"#!"}},[e("svg",{staticClass:"bi bi-telegram",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"}})])]),e("a",{attrs:{href:"#!"}},[e("svg",{staticClass:"bi bi-facebook",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}})])]),e("a",{attrs:{href:"#!"}},[e("svg",{staticClass:"bi bi-twitter",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}})])]),e("a",{attrs:{href:"#!"}},[e("svg",{staticClass:"bi bi-instagram",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}})])])]),e("p",{staticClass:"w-full text-center mb-0 mt-5 text-bgleight"},[t._v(" "+t._s(t.$t("copyRight"))+" ")])],1)])},S=[],I={},R=I,_=(0,c.Z)(R,L,S,!1,null,"bad76c9a",null),B=_.exports,T={components:{NavbarSite:O,FooterSite:B}},E=T,U=(0,c.Z)(E,w,y,!1,null,null,null),N=U.exports;i["default"].use(v.Z);const P=[{path:"/",name:"Home",component:N,children:[{path:"",name:"Main",component:()=>a.e(521).then(a.bind(a,9521))},{path:"news",name:"News",component:()=>a.e(654).then(a.bind(a,654)),children:[{path:"",name:"NewsMain",component:()=>a.e(235).then(a.bind(a,3235))},{path:":id",name:"NewsItem",component:()=>a.e(647).then(a.bind(a,2647))},{path:"*",redirect:{name:"NotFound"}}]},{path:"lawyers",name:"Lawyers",component:()=>a.e(234).then(a.bind(a,4234))},{path:"*",redirect:{name:"NotFound"}}]},{path:"error",name:"NotFound",component:()=>a.e(145).then(a.bind(a,2145))},{path:"*",redirect:{name:"NotFound"}}],H=new v.Z({mode:"history",scrollBehavior(t,e,a){return a||{x:0,y:0}},routes:P});var j=H,M=a(7176),Z={getListLawyers(t){return M.Z.post(`lawyer/list?search=${t.querys.search}&status=${t.querys.status}&contragentId=${t.querys.contragentId}&regionId=${t.querys.regionId}`,t.data)},getListContragents(t){return M.Z.post(`contragent/list?search=${t.search}&typeId=&isArchive=false&regionId=`,{page:t.page,limit:t.limit})},countInfo(){return M.Z.post("contragent/count-info")}};const F={list:[],contList:{list:[]},page:0,search:"",contId:"",isLoading:!1,countInfo:""},G={},$={setList(t,e){t.list=e},setSearch(t,e){t.search=e},setConstId(t,e){t.contId=e},setPage(t,e){t.page=e},setContList(t,e){t.contList=e},setLoading(t,e){t.isLoading=e},setCountInfo(t,e){t.countInfo=e}},D={async getListLawyers({commit:t},e){let a;t("setLoading",!0);try{a=await Z.getListLawyers(e),t("setList",a.data)}finally{t("setLoading",!1)}},async getContragents({commit:t},e){let a;t("setLoading",!0);try{a=await Z.getListContragents(e),t("setContList",a.data)}finally{t("setLoading",!1)}},async countInfo({commit:t}){let e;t("setLoading",!0);try{e=await Z.countInfo(),t("setCountInfo",e.data)}finally{t("setLoading",!1)}}};var q={state:F,getters:G,mutations:$,actions:D,namespaced:!0},V=a(5796);const K={list:[],isLoading:!1},Q={},Y={setList(t,e){t.list=e},setLoading(t,e){t.isLoading=e}},W={async getList({commit:t}){let e;t("setLoading",!0);try{e=await V.Z.getList(),t("setList",e.data)}catch(a){console.log(a)}finally{t("setLoading",!1)}}};var X={state:K,getters:Q,mutations:Y,actions:W,namespaced:!0};i["default"].use(p.ZP);const J=new p.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{news:X,contragents:q}});var tt=J,et=a(6905),at=a.n(et),it={langs:{uz:"O'zbek",ru:"Русский",en:"English"},logIn:"Kirish",hello:"Assalamu alaykum",homeTitle:"Advokatlar tizimi",newsTitle:"Yangiliklar",lawyersTitle:"Advokatlar",homeSubtitle:"Advokatlarni avtomatlashtirilgan tizimi",newsSubtitle:"Portalning yangiliklari",lawyersSubtitle:"Advokatlarni avtomatlashtirilgan tizimi",home:"Bosh sahifa",news:"Yangiliklar",lawyers:"Advokatlar",topTitleHome:"Advokatlarni avtomatlashtirish",topSubtitleHome:"Advokatlarni avtomatlashtirish foydalanishdagi qulaylikni yaratadi",seeMore:"Batafsil",countersTitle:"Statistik ma'lumotlar",copyRight:"2022  ©  DataPrizma",region:"Viloyat",organization:"Tashkilot",specialization:"Mutahasislik",FIO:"F.I.O",contact:"Kontakt",ORAV:"O'zbekiston Respublikasi Adliya Vazirligi",noInfoFound:"Ma'lumot topilmadi",mahsusAdvokat:"MAHSUS ADVOKAT IZLAYAPSIZMI?",allNews:"Barcha yangiliklarni ko'rish",allAttorneys:"BARCHA ADVOLATLARNI KO'RISH",videos:"VIDEOLAR",homeBG:{title:{first:"Samarqand, ",middle:"Registon ",last:"maydoni."},subtitle:"Amir Temur davrida Registon – Samarqandning bosh savdo maydoni bo`lgan."},homeBG2:{title:{first:"Xiva ",middle:"ichan qalʼa ",last:"muzeyqoʻriqxonasi."},subtitle:"Muzeyqoʻriqxona 26 ga maydonni egallagan boʻlib, uning tarkibida 54 ta tarixiy obidalar bor."},homeBG3:{title:{first:"Toshkent, ",middle:'"Tashkent City" ',last:"parki."},subtitle:"Toshkent shahrining mo'jaz parklaridan biri, Tashkent city - kun davomida hordiq oluvchilar maskani"},homeBG4:{title:{first:"Toshkent, ",middle:"Hazrati Imom ",last:"majmuasi."},subtitle:"Majmua imom Abu Bakr Muhammad ibn Ali Ismoil ash-Qaffol Shoshiy qabri atrofida shakllangan"},search:"Qidirish",goHome:"Bosh sahifaga qaytish",goBack:"Orqaga qaytish",pageNotFound:"Sahifa topilmadi",noNewsYet:"Hozircha yangiliklar yo'q",lawBureau:"Advokatlar byurosi",lawFirm:"Advokatlar firmasi",countLawyer:"Advokatlar soni",lawyerPanel:"Advokatlar hay'ati",prezidentUz:{title:"O'zbekiston Respublikasi Prezidenti",poster:"President.uz O'zbekiston Respublikasi Prezidenti portaliga o'tish",link:"https://president.uz"},goUz:{title:"O'zbekiston Respublikasi Hukumat portali",poster:"Go.uz O'zbekiston Respublikasi Hukumat portaliga o'tish",link:"https://go.uz"},parliamentUz:{title:"O'zbekiston Rspublikasi Oliy Majlisi Qonunchilik Palatasi",poster:"Parliament.gov.uz O'zbekiston Rspublikasi Oliy Majlisi Qonunchilik Palatasi portaliga o'tish",link:"https://parliament.gov.uz/"},senatUz:{title:"O'zbekiston Respublikasi Oliy Majlisining Senati",poster:"Senat.gov.uz O'zbekiston Respublikasi Oliy Majlisining Senati portaliga o'tish",link:"https://senat.gov.uz/"},lexUz:{title:"O'zbekiston Respublikasi qonunchilik ma'lumotlari milliy bazasi",poster:"Lex.uz O'zbekiston Respublikasi qonunchilik ma'lumotlari milliy bazasi postaliga o'tish",link:"https://lex.uz/"}},st={langs:{uz:"O'zbek",ru:"Русский",en:"English"},logIn:"Логин",hello:"Привет",homeTitle:"Система адвокатов",newsTitle:"Новости",lawyersTitle:"Адвокаты",homeSubtitle:"Автоматизированная система адвокатов",newsSubtitle:"Новости портала",lawyersSubtitle:"Автоматизированная система адвокатов",home:"Главная",news:"Новости",lawyers:"Адвокаты",topTitleHome:"Автоматизированная система адвокатов",seeMore:"Подробнее",topSubtitleHome:"Автоматизированная система адвокатов качества создания",countersTitle:"Статистическая информация",copyRight:"2022  ©  DataPrizma",region:"Регион",organization:"Организация",specialization:"Специализация",FIO:"Ф.И.О",contact:"Контакт",ORAV:"Министерство юстиции Республики Узбекистан",noInfoFound:"Информация не найдена",mahsusAdvokat:"ИЩЕТЕ КОНКРЕТНОГО АДВОКАТА?",allNews:"Посмотреть все новости",allAttorneys:"ПОСМОТРЕТЬ ВСЕ АДВОКАТЫ",videos:"ВИДЕО",homeBG:{title:{first:"Самарканд, площадь ",middle:"Регистан",last:""},subtitle:"Во времена правления Амира Темура Регистан был главным торговым районом Самарканда."},homeBG2:{title:{first:"Хивинский замок-музей-заповедник ",middle:"Ичан ",last:""},subtitle:"Музей-заповедник занимает площадь 26 га и включает в себя 54 памятника истории."},homeBG3:{title:{first:"Ташкент, парк ",middle:"«Ташкент Сити» ",last:"park."},subtitle:"Один из прекрасных парков города Ташкента, Ташкент-сити - место для любителей активного отдыха в дневное время."},homeBG4:{title:{first:"Комплекс ",middle:"Хазрат Имам, ",last:"Ташкент."},subtitle:"Комплекс образовался вокруг могилы имама Абу Бакра Мухаммада ибн Али Исмаила аль-Каффаль Шаши."},search:"Поиск",goHome:"На главную",goBack:"Назад",pageNotFound:"Страница не найдена",noNewsYet:"Новостей пока нет",lawBureau:"Юридическая бюро",lawFirm:"Адвокатская фирма",countLawyer:"Количество юристов",lawyerPanel:"Группа юристов",prezidentUz:{title:"Президент Республики Узбекистан",poster:"Перейти на портал President.uz Президента Республики Узбекистан",link:"https://president.uz"},goUz:{title:"Правительственный портал Республики Узбекистан",poster:"Go.uz Перейти на Правительственный портал Республики Узбекистан",link:"https://go.uz"},parliamentUz:{title:"Законодательная палата Олий Мажлиса Республики Узбекистан",poster:"Parliament.gov.uz Перейти на портал Законодательной палаты Олий Мажлиса Республики Узбекистан",link:"https://parliament.gov.uz/"},senatUz:{title:"Сенат Олий Мажлиса Республики Узбекистан",poster:"Senat.gov.uz Перейти на портал Сената Олий Мажлиса Республики Узбекистан",link:"https://senat.gov.uz/"},lexUz:{title:"Национальная база данных законодательной информации Республики Узбекистан",poster:"Перейти в национальную базу законодательной информации Республики Узбекистан Lex.uz",link:"https://lex.uz/"}},nt={langs:{uz:"O'zbek",ru:"Русский",en:"English"},logIn:"Login",hello:"Hello",homeTitle:"The system of lawyers",newsTitle:"News",lawyersTitle:"Lawyers",homeSubtitle:"Automated system of lawyers",newsSubtitle:"News of the portal",lawyersSubtitle:"Automated system of lawyers",home:"Home",news:"News",lawyers:"Lawyers",topTitleHome:"Automated system of lawyers",topSubtitleHome:"Automated system of lawyers creation quality",seeMore:"See more",countersTitle:"Statistics information",copyRight:"2022  ©  DataPrizma",region:"Region",organization:"Organization",specialization:"Specialization",FIO:"Full name",contact:"Contact",ORAV:"Ministry of Justice of the Republic of Uzbekistan",noInfoFound:"Information not found",mahsusAdvokat:"LOOKING FOR A SPECIFIC ATTORNEY?",allNews:"View all news",allAttorneys:"VIEW ALL ATTORNEYS",videos:"VIDEOS",homeBG:{title:{first:"Samarkand, ",middle:"Registan ",last:"square."},subtitle:"During the reign of Amir Temur, Registan was the main trading area of Samarkand."},homeBG2:{title:{first:"Khiva ",middle:"Ichan Castle ",last:"Museum-Reserve."},subtitle:"The museum-reserve covers an area of 26 hectares and includes 54 historical monuments."},homeBG3:{title:{first:"Tashkent, ",middle:'"Tashkent City" ',last:"park."},subtitle:"One of the wonderful parks of the city of Tashkent, Tashkent city is a place for recreationists during the day"},homeBG4:{title:{first:"",middle:"Hazrat Imam ",last:"complex, Tashkent"},subtitle:"The complex was formed around the tomb of Imam Abu Bakr Muhammad ibn Ali Ismail al-Qaffal Shoshi"},search:"Search",goHome:"Go to home page",goBack:"Go back",pageNotFound:"Page not found",noNewsYet:"No news yet",lawBureau:"Law Bureau",lawFirm:"A firm of lawyers",countLawyer:"Number of lawyers",lawyerPanel:"Panel of lawyers",prezidentUz:{title:"President of the Republic of Uzbekistan",poster:"Go to President.uz portal of the President of the Republic of Uzbekistan",link:"https://president.uz"},goUz:{title:"Government portal of the Republic of Uzbekistan",poster:"Go.uz Go to the Government portal of the Republic of Uzbekistan",link:"https://go.uz"},parliamentUz:{title:"Legislative Chamber of the Oliy Majlis of the Republic of Uzbekistan",poster:"Parliament.gov.uz Go to the portal of the Legislative Chamber of the Oliy Majlis of the Republic of Uzbekistan",link:"https://parliament.gov.uz/"},senatUz:{title:"Senate of the Oliy Majlis of the Republic of Uzbekistan",poster:"Senat.gov.uz Go to the portal of the Senate of the Oliy Majlis of the Republic of Uzbekistan",link:"https://senat.gov.uz/"},lexUz:{title:"National database of legislative information of the Republic of Uzbekistan",poster:"Go to Lex.uz national database of legislative information of the Republic of Uzbekistan",link:"https://lex.uz/"}},ot=a(6018);i["default"].use(ot.Z);let rt=localStorage.getItem("lang")||"uz";const lt=new ot.Z({locale:rt,allowChangingLocale:!0,messages:{en:nt,uz:it,ru:st},missing:(t,e)=>`${e} is missing for ${t}`});var ut=lt,ct=a(6265),dt=a.n(ct),ft=a(6423),pt=a(9501);let mt={position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1};var ht=mt;i["default"].config.productionTip=!1,i["default"].use(at().init({once:!0})),i["default"].use(ft.Z,dt()),i["default"].use(pt.ZP,{transition:"Vue-Toastification__bounce",maxToasts:30,newestOnTop:!0}),i["default"].use(ht),M.Z.init("https://api-lawyer.adliya.uz/api/v.1/");new i["default"];new i["default"]({router:j,store:tt,i18n:ut,render:t=>t(b)}).$mount("#app")},7176:function(t,e,a){"use strict";var i=a(6265),s=a.n(i);let n=!0;const o={init(t){s().defaults.baseURL=t},removeHeader(){s().defaults.headers.common={}},get(t,e=!0){return n=e,s().get(t)},post(t,e,a=!0){return n=a,s().post(t,e)},mount401Interceptor(){s().interceptors.response.use((t=>(console.log("RES",t),t)),(async t=>{throw n&&console.log("ERROR",t),t}))},unmount401Interceptor(){s().interceptors.response.eject(this._40i1nterceptor)}};e["Z"]=o},5796:function(t,e,a){"use strict";var i=a(7176);const s="https://api.e-advokat.uz/api/v.1/directory-post";e["Z"]={getList(){return i.Z.get(`${s}/list`)},getById(t){return i.Z.get(`${s}/get-by-id/${t}`)},create(t){return i.Z.post(`${s}/create`,t)},update(t){return i.Z.post(`${s}/update`,t)},delete(t){return i.Z["delete"](`${s}/delete/${t}`)}}},4548:function(t,e,a){var i={"./en.png":4144,"./krestik.png":8331,"./logo.png":5080,"./mapicon.png":552,"./ru.png":1915,"./search-icon.png":7530,"./uz.png":1311,"./uzbkarta.png":6109};function s(t){var e=n(t);return a(e)}function n(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=n,t.exports=s,s.id=4548},4144:function(t,e,a){"use strict";t.exports=a.p+"img/en.3c5d6bed.png"},8331:function(t,e,a){"use strict";t.exports=a.p+"img/krestik.d2cba1f9.png"},5080:function(t,e,a){"use strict";t.exports=a.p+"img/logo.e163bb15.png"},552:function(t,e,a){"use strict";t.exports=a.p+"img/mapicon.a1b5bcb6.png"},1915:function(t,e,a){"use strict";t.exports=a.p+"img/ru.564896c3.png"},7530:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAFAAAAACy3fD9AAACeUlEQVQ4Ea2UTWgTURDHZ95m2yRUD/YiBfGjiIoHwZPUpntRyKZqsdhNEQ8iVpReRMSDlFLo0ZMXDx5EL9pEEyUxsRQP3YigoicpVSKURsipt23ZmHR3nBdIidlsDeKDTebN/N/vzZudtwh/GcOpdwecmnMdEaMs3UdAiIAltheECg9zo9pyMwKbJ802EaGeLEyz4C77HX7eAuAyErmEcIjBpzkWIhL3d4jInecGSg0E5E+7oSfMR+y/DIh5NahMZEYGy8268+mPvXat8gDAvWW5hf4ZotEZRLdZs2XHEuZkdG6RoglzdsvpY+hzhZtSqycXp6XEc2Q9/2EnWb9WkKDYI4ZONo7iw6u7eeN5BkUQQ/2iVUhW9RwQ7RJCTHYCk+tVhBtc8zCAHfcAuSYaJ17OGZEvrZv5zbOGtsJd8JUINA+QW6KPC7Hqt9jXT7QKBH0eIO9SQaCQ70K/AGKYE9nwAAHpO0MPn81+5pp0NsaSpHBfHiOAohdI8JIxQcfemOgMB7DuFsb5uL2sz3jaRkK4r5Kcvq5i4GjWGCxtB44lP+12yV4CoJ8nDO24N0NeLbqUKd6xZ9N1ssNp84gf8MwL8yCRneE2CwslcFXeFE+Ger7YDVY5zcAoIVn81kNs31OF+jhjDPyQ8Fjq/V7YdC5y3ab4cRUU4zljKCdjfwAljKxyim+Jzh+AKyE1+LpStWdZdY1flMK9VuWj8YBuuZjveU5V1NvZCwPf6nPpahhjyaUui9bSDdh8XHvSiI28MvfUKuIUobNf+pBESRFioV1968DtYA1op//4P2FyU7FOa0/bHbPTjFp1Ab5mNqBy6U088qw1+C/z34tICBk/S/+BAAAAAElFTkSuQmCC"},1311:function(t,e,a){"use strict";t.exports=a.p+"img/uz.da5cd82e.png"},6109:function(t,e,a){"use strict";t.exports=a.p+"img/uzbkarta.1c51297a.png"}},e={};function a(i){var s=e[i];if(void 0!==s)return s.exports;var n=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=t,function(){a.amdO={}}(),function(){var t=[];a.O=function(e,i,s,n){if(!i){var o=1/0;for(c=0;c<t.length;c++){i=t[c][0],s=t[c][1],n=t[c][2];for(var r=!0,l=0;l<i.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((function(t){return a.O[t](i[l])}))?i.splice(l--,1):(r=!1,n<o&&(o=n));if(r){t.splice(c--,1);var u=s();void 0!==u&&(e=u)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[i,s,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,i){return a.f[i](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{145:"c94e2751",234:"9b14ff7e",235:"a65711a7",521:"437ff9ba",647:"960803ee",654:"0de9f421"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+t+"."+{145:"1f751a83",234:"b6a45c08",235:"6ddc7c51",521:"a6cfa534",647:"a66137b4"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="advokatlar_v2:";a.l=function(i,s,n,o){if(t[i])t[i].push(s);else{var r,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+n){r=d;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",e+n),r.src=i),t[i]=[s];var f=function(e,a){r.onerror=r.onload=null,clearTimeout(p);var s=t[i];if(delete t[i],r.parentNode&&r.parentNode.removeChild(r),s&&s.forEach((function(t){return t(a)})),e)return e(a)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=f.bind(null,r.onerror),r.onload=f.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t=function(t,e,a,i){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var n=function(n){if(s.onerror=s.onload=null,"load"===n.type)a();else{var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=r,s.parentNode.removeChild(s),i(l)}};return s.onerror=s.onload=n,s.href=e,document.head.appendChild(s),s},e=function(t,e){for(var a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],n=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===t||n===e))return s}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){s=o[i],n=s.getAttribute("data-href");if(n===t||n===e)return s}},i=function(i){return new Promise((function(s,n){var o=a.miniCssF(i),r=a.p+o;if(e(o,r))return s();t(i,r,s,n)}))},s={143:0};a.f.miniCss=function(t,e){var a={145:1,234:1,235:1,521:1,647:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=i(t).then((function(){s[t]=0}),(function(e){throw delete s[t],e})))}}(),function(){var t={143:0};a.f.j=function(e,i){var s=a.o(t,e)?t[e]:void 0;if(0!==s)if(s)i.push(s[2]);else{var n=new Promise((function(a,i){s=t[e]=[a,i]}));i.push(s[2]=n);var o=a.p+a.u(e),r=new Error,l=function(i){if(a.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var n=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",r.name="ChunkLoadError",r.type=n,r.request=o,s[1](r)}};a.l(o,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,n,o=i[0],r=i[1],l=i[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(l)var c=l(a)}for(e&&e(i);u<o.length;u++)n=o[u],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(c)},i=self["webpackChunkadvokatlar_v2"]=self["webpackChunkadvokatlar_v2"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(1065)}));i=a.O(i)})();
//# sourceMappingURL=app.70c3849f.js.map