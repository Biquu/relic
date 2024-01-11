export const navOptions = [
  {
    id: "home",
    label: "Ana Sayfa",
    path: "/",
  },
  {
    id: "listing",
    label: "Tüm Ürünler",
    path: "/product/listing/all-products",
  },
];

export const primaryHeaderOptions = [
  {
    id: "elektroGitar",
    label: "Elektro Gitarlar",
    path: "/product/listing/electric-guitars",
  },
  {
    id: "amplifiers",
    label: "Amfiler",
    path: "/product/listing/amplifiers",
  },
  {
    id: "drumsAndPercussion",
    label: "Davul ve Perküsyon",
    path: "/product/listing/drums-and-percussion",
  },
  {
    id: "bassGitar",
    label: "Bass Gitarlar",
    path: "/product/listing/bass-guitars",
  },
  {
    id: "akustikGitar",
    label: "Akustik Gitarlar",
    path: "/product/listing/acoustic-guitars",
  },
  {
    id: "efektVePedal",
    label: "Efektler ve Pedallar",
    path: "/product/listing/efekt-pedal",
  },
  {
    id: "DJStüdyo",
    label: "DJ / Stüdyo",
    path: "/product/listing/dj-studio",
  },
  {
    id: "seslendirme",
    label: "Seslendirme",
    path: "/product/listing/seslendirme",
  },
  {
    id: "nefesliler",
    label: "Nefesliler",
    path: "/product/listing/nefesliler",
  },
];
export const secondaryHeaderOptions = [
  {
    id: "markalar",
    label: "Markalar",
    path: "/product/listing/brands",
  },
  {
    id: "mağazalar",
    label: "Mağazalar",
    path: "/product/listing/shops",
  },
  {
    id: "kampanyalar",
    label: "Kampanyalar",
    path: "/product/listing/discounts",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Ürünleri Düzenle",
    path: "/admin-view/products",
  },
  {
    id: "adminNewProduct",
    label: "Yeni Ürün Ekle",
    path: "/admin-view/add-product",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "İsminizi giriniz",
    label: "İsim",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "E-posta adresinizi giriniz",
    label: "E-posta",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Şifrenizi giriniz",
    label: "Şifre",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "seller",
        label: "Satıcı",
      },
      {
        id: "customer",
        label: "Müşteri",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "E-posta adresinizi giriniz",
    label: "E-posta",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Şifrenizi giriniz",
    label: "Şifre",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "shopName",
    type: "text",
    placeholder: "Mağazanızın adını giriniz",
    label: "Mağaza Adı",
    componentType: "input",
  },
  {
    id: "name",
    type: "text",
    placeholder: "Ürününüze başlık Giriniz",
    label: "Başlık",
    componentType: "input",
  },

  {
    id: "phone",
    type: "string",
    placeholder: "Telefon numaranızı giriniz",
    label: "Telefon numarası",
    componentType: "input",
  },
  {
    id: "brand",
    type: "text",
    placeholder: "Ürününüzün markasını giriniz",
    label: "Marka",
    componentType: "input",
  },
  {
    id: "model",
    type: "text",
    placeholder: "Ürününüzün modelini giriniz",
    label: "Model",
    componentType: "input",
  },
  {
    id: "condition",
    type: "",
    placeholder: "",
    label: "Durum",
    componentType: "select",
    options: [
      { id: "new", label: "Yeni ürün" },
      { id: "used", label: "Kullanılmış" },
    ],
  },
  {
    id: "year",
    type: "text",
    placeholder: "Ürününüzün üretim yılını giriniz",
    label: "Yıl",
    componentType: "input",
  },
  {
    id: "finish",
    type: "text",
    placeholder: "Ürününüzün rengini giriniz",
    label: "Renk",
    componentType: "input",
  },
  {
    id: "manufacturer",
    type: "text",
    placeholder: "Ürününüzün yapım yerini giriniz",
    label: "Yapım Yeri",
    componentType: "input",
  },
  {
    id: "category",
    type: "text",
    placeholder: "Ürününüzün kategorisini seçiniz",
    label: "Kategori",
    componentType: "select",
    options: [
      { id: "aksesuar", label: "Aksesuar" },
      { id: "akustikGitar", label: "Akustik Gitar" },
      { id: "klasikGitar", label: "Klasik Gitar" },
      { id: "amfi", label: "Amfi" },
      { id: "bassGitar", label: "Bass Gitar" },
      { id: "djStüdyo", label: "DJ / Stüdyo" },
      { id: "davulVePerküsyon", label: "Davul ve Perküsyon" },
      { id: "efektVePedal", label: "Efekt ve Pedal" },
      { id: "elektroGitar", label: "Elektro Gitar" },
      { id: "yaylılar", label: "Yaylılar" },
      { id: "nefesliler", label: "Nefesliler" },
      { id: "seslendirme", label: "Seslendirme" },
      { id: "klavyeler", label: "Klavyeler" },
      { id: "piyanolar", label: "Piyanolar" },
    ],
  },
  {
    id: "subCategory",
    type: "text",
    placeholder: "Ürününüzün alt kategorisini seçiniz",
    label: "Alt Kategori",
    componentType: "select",
    dependsOn: "category",
    options: [],
  },
  {
    id: "description",
    type: "text",
    placeholder: "Ürününüze dair açıklama giriniz",
    label: "Açıklama",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Ürününüzün fiyatını giriniz",
    label: "Fiyat",
    componentType: "input",
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Ürününüzün indirim oranını giriniz",
    label: "İndirim Oranı",
    componentType: "input",
  },
];
export const getCategoryOptions = (selectedCategory) => {
  let subCategoryOptions = ["kablo"];

  switch (selectedCategory) {
    case "aksesuar":
      subCategoryOptions = [
        { id: "kablo", label: "Kablo" },
        { id: "kapo", label: "Kapo" },
        { id: "aski", label: "Askı" },
        { id: "cantaVeCase", label: "Çanta ve Case" },
        { id: "metronomVeAkortCihazi", label: "Metronom ve Akort Cihazı" },
        { id: "standlar", label: "Standlar" },
        { id: "penalar", label: "Penalar" },
        { id: "fretwrap", label: "Fretwrap" },
        { id: "teller", label: "Teller" },
        { id: "slideYuzugu", label: "Slide Yüzüğü" },
        { id: "temizlikVeBakimUrunleri", label: "Temizlik ve Bakım Ürünleri" },
        { id: "notaSehpasi", label: "Nota Sehpası" },
        { id: "baget", label: "Bagetler" },
      ];
      break;
    case "akustikGitar":
      subCategoryOptions = [
        { id: "akustikgitarlar", label: "Akustik Gitarlar" },
        { id: "elektroakustikgitarlar", label: "Elektro Akustik Gitarlar" },
        { id: "solakAkustikGitarlar", label: "Solak Akustik Gitarlar" },
        { id: "12TellAkustikGitarlar", label: "12 Telli Akustik Gitarlar" },
        { id: "akustikBasGitarlar", label: "Akustik Bas Gitarlar" },
      ];
      break;
    case "klasikGitar":
      subCategoryOptions = [
        { id: "elektroklasikgitarlar", label: "Elektro Klasik Gitarlar" },
        { id: "4-4KlasikGitarlar", label: "4/4 Klasik Gitarlar" },
        { id: "3-4KlasikGitarlar", label: "¾ Klasik Gitarlar" },
        { id: "2-4KlasikGitarlar", label: "2/4 Klasik Gitarlar" },
        { id: "solakAkustikGitarlar", label: "Solak Akustik Gitarlar" },
      ];
      break;
    case "amfi":
      subCategoryOptions = [
        { id: "elektrogitaramfileri", label: "Elektro Gitar Amfileri" },
        { id: "basguitaramfileri", label: "Bas Gitar Amfileri" },
        { id: "akustikenstrumanamfileri", label: "Akustik Enstrüman Amfileri" },
        { id: "klavyeamfileri", label: "Klavye Amfileri" },
        {
          id: "elektronikdavulmonitorleri",
          label: "Elektronik Davul Monitörleri",
        },
      ];
      break;
    case "bassGitar":
      subCategoryOptions = [
        { id: "bassgitarlar", label: "Bass Gitarlar" },
        { id: "5telliBassgitarlar", label: "5 Telli Bass Gitarlar" },
        { id: "6telliBassgitarlar", label: "6 Telli Bass Gitarlar" },
        { id: "akustikBassgitarlar", label: "Akustik Bass Gitarlar" },
        { id: "solakBassGitarlar", label: "Solak Bass Gitarlar" },
      ];
      break;
    case "djStüdyo":
      subCategoryOptions = [
        { id: "seskartlari", label: "Ses Kartları" },
        { id: "monitörler", label: "Monitörler" },
        { id: "midiklavyeler", label: "Midi Klavyeler" },
        { id: "kayitsetleri", label: "Kayıt Setleri" },
        { id: "djekipmanlari", label: "DJ Ekipmanları" },
        { id: "mikrofonlar", label: "Mikrofonlar" },
        { id: "kulakliklar", label: "Kulaklıklar" },
        { id: "kablolar", label: "Kablolar" },
        { id: "yazilimlar", label: "Yazılımlar" },
      ];
      break;
    case "davulVePerküsyon":
      subCategoryOptions = [
        { id: "akustikdavullar", label: "Akustik Davullar" },
        { id: "elektronikdavullar", label: "Elektronik Davullar" },
        { id: "perküsyonlar", label: "Perküsyonlar" },
        { id: "ziller", label: "Ziller" },
        { id: "bagetlervemalletler", label: "Bagetler ve Malletler" },
        { id: "deriler", label: "Deriler" },
        { id: "sehpalarveaksamlar", label: "Sehpalar ve Aksamlar" },
        { id: "davulmikrofonlari", label: "Davul Mikrofonları" },
        { id: "yedekparcalar", label: "Yedek Parçalar" },
      ];
      break;
    case "efektVePedal":
      subCategoryOptions = [
        { id: "basspedallari", label: "Bass Pedalları" },
        { id: "kabinsimulasyonlari", label: "Kabin Simülasyonları" },
        { id: "chorus", label: "Chorus" },
        { id: "delay", label: "Delay" },
        { id: "vibrato", label: "Vibrato" },
        { id: "buffer", label: "Buffer" },
        { id: "compression", label: "Compression" },
        { id: "sustain", label: "Sustain" },
        { id: "distortion", label: "Distortion" },
        { id: "EQ", label: "EQ" },
        { id: "flanger", label: "Flanger" },
        { id: "fuzz", label: "Fuzz" },
        { id: "loop", label: "Loop" },
        { id: "octave", label: "Octave" },
        { id: "overdrive", label: "Overdrive" },
        { id: "boost", label: "Boost" },
        { id: "preamps", label: "Preamps" },
        { id: "reverb", label: "Reverb" },
        { id: "tremolo", label: "Tremolo" },
        { id: "akortpedallari", label: "Akort Pedalları" },
        { id: "wahpedallari", label: "Wah Pedalları" },
      ];
      break;
    case "elektroGitar":
      subCategoryOptions = [
        { id: "12telli", label: "12 Telli" },
        { id: "bariton", label: "Bariton" },
        { id: "tenor", label: "Tenor" },
        { id: "hhmanyetikli", label: "HH Manyetikli" },
        { id: "hshmanyetikli", label: "HSH Manyetikli" },
        { id: "hssmanyetikli", label: "HSS Manyetikli" },
        { id: "ssmanyetikli", label: "SS Manyetikli" },
        { id: "sssmanyetikli", label: "SSS Manyetikli" },
        { id: "hhhmanyetikli", label: "HHH Manyetikli" },
        { id: "hsmanyetikli", label: "HS Manyetikli" },
      ];
      break;
    case "yaylılar":
      subCategoryOptions = [
        { id: "keman", label: "Keman" },
        { id: "viyola", label: "Viyola" },
        { id: "cello", label: "Çello" },
        { id: "kontrabass", label: "Kontrabas" },
        { id: "yayliaksesuarlari", label: "Yaylı Aksesuarları" },
      ];
      break;
    case "nefesliler":
      subCategoryOptions = [
        { id: "elektroniknefesli", label: "Elektronik Nefesli" },
        { id: "blokflut", label: "Blok Flüt" },
        { id: "yanflut", label: "Yan Flüt" },
        { id: "obua", label: "Obua" },
        { id: "fagot", label: "Fagot" },
        { id: "klarnet", label: "Klarnet" },
        { id: "saksafon", label: "Saksafon" },
        { id: "korno", label: "Korno" },
        { id: "tuba", label: "Tuba" },
        { id: "trompet", label: "Trompet" },
        { id: "kornet", label: "Kornet" },
        { id: "flugelhorn", label: "Flugelhorn" },
        { id: "trombon", label: "Trombon" },
        { id: "bariton", label: "Bariton" },
        { id: "euphonium", label: "Euphonium" },
        { id: "melodikavemizika", label: "Melodika ve Mızıka" },
        {
          id: "nefesliaksesuaryedekparca",
          label: "Nefesli Aksesuar Yedek Parça",
        },
      ];
      break;
    case "seslendirme":
      subCategoryOptions = [
        {
          id: "evesessistemlerivesoundbar",
          label: "Eve Ses Sistemleri ve Soundbar",
        },
        { id: "monitörler", label: "Monitörler" },
        { id: "poweramfiler", label: "Power Amfiler" },
        { id: "seslendirmesetleri", label: "Seslendirme Setleri" },
        { id: "hoparlor", label: "Hoparlör" },
        { id: "bluetoothhoparlor", label: "Bluetooth Hoparlör" },
        { id: "mikserler", label: "Mikserler" },
        { id: "pikap", label: "Pikap" },
        { id: "plak", label: "Plak" },
        { id: "seslendirmeaksesuarlari", label: "Seslendirme Aksesuarları" },
      ];
      break;
    case "klavyeler":
      subCategoryOptions = [
        { id: "orglar", label: "Orglar" },
        { id: "arrangerklavye", label: "Arranger Klavye" },
        { id: "synthesizer", label: "Synthesizer" },
        { id: "sesmodulleri", label: "Ses Modülleri" },
        { id: "midiklavyeler", label: "Midi Klavyeler" },
        { id: "klavyeamfileri", label: "Klavye Amfileri" },
        { id: "akordiyonlar", label: "Akordiyonlar" },
        { id: "klavyeaksesuarli", label: "Klavye Aksesuarlı" },
      ];
      break;
    case "piyanolar":
      subCategoryOptions = [
        { id: "akustikduvarpiyanoları", label: "Akustik Duvar Piyanoları" },
        { id: "akustikkuyruklupiyanolar", label: "Akustik Kuyruklu Piyanolar" },
        { id: "dijitalkonsolpiyanolar", label: "Dijital Konsol Piyanolar" },
        { id: "dijitalkuyruklupiyanolar", label: "Dijital Kuyruklu Piyanolar" },
      ];
      break;
    default:
      subCategoryOptions = [];
  }
  return subCategoryOptions;
};

export const firebaseConfig = {
  apiKey: "AIzaSyBt1wU48_clruSRBR9Jj-WL86AL1fcbJ-E",
  authDomain: "deneme-fd0f9.firebaseapp.com",
  projectId: "deneme-fd0f9",
  storageBucket: "deneme-fd0f9.appspot.com",
  messagingSenderId: "574683319824",
  appId: "1:574683319824:web:03bb9c774aced44e07c495",
  measurementId: "G-76DG5LXFQZ",
};

export const firebaseStorageURL = "gs://deneme-fd0f9.appspot.com";

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Enter your full name",
    label: "Ad Soyad",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Enter your full address",
    label: "Adres",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Enter your city",
    label: "Şehir",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Enter your country",
    label: "Ülke",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Enter your postal code",
    label: "Posta Kodu",
    componentType: "input",
  },
];
