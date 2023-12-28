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
  {
    id: "listingMen",
    label: "Enstrümanlar",
    path: "/product/listing/men",
  },
  {
    id: "listingWomen",
    label: "Ekipmanlar",
    path: "/product/listing/women",
  },
  {
    id: "listingKids",
    label: "Kampanyalar",
    path: "/product/listing/kids",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Ürünleri Düzenle",
    path: "/admin-view/all-products",
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
    placeholder: "İsminizi giriniz",
    label: "İsim",
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
    type: "number",
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
    placeholder: "Ürününüzün kategorisini giriniz",
    label: "Kategori",
    componentType: "input",
  },
  {
    id: "subCategory",
    type: "text",
    placeholder: "Ürününüzün alt kategorisini giriniz",
    label: "Alt Kategori",
    componentType: "input",
  },

  {
    id: "listingTitle",
    type: "text",
    placeholder: "Ürününüzün başlığını giriniz",
    label: "Başlık",
    componentType: "input",
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
    id: "onSale",
    type: "",
    placeholder: "",
    label: "Satış Durumu",
    componentType: "select",
    options: [
      { value: "forSale", label: "Satılık" },
      { value: "sold", label: "Satılmış" },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Ürününüzün indirimini giriniz",
    label: "İndirim",
    componentType: "input",
  },
];

export const AvailableSizes = [
  {
    id: "s",
    label: "S",
  },
  {
    id: "m",
    label: "M",
  },
  {
    id: "l",
    label: "L",
  },
];

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
