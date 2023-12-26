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
  }
  
]
