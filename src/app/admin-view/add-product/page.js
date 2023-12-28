"use client";

import InputComponent from "@/components/FormElements/InputComponent";
import SelectComponent from "@/components/FormElements/SelectComponent";
import TileComponent from "@/components/FormElements/TileComponent";
import Notification from "@/components/Notification";
import ComponentLevelLoader from "@/components/Loader/componentlevel";
import { GlobalContext } from "@/context";
import { addNewProduct } from "@/services/product";
import {
  AvailableSizes,
  adminAddProductformControls,
  firebaseConfig,
  firebaseStorageURL,
} from "@/utils";
import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, firebaseStorageURL);

const createUniqueFileName = (getFile) => {
  const timeStamp = Date.now();
  const randomStringValue = Math.random().toString(36).substring(2, 12);

  return `${getFile.name}-${timeStamp}-${randomStringValue}`;
};

async function helperForUPloadingImageToFirebase(file) {
  const getFileName = createUniqueFileName(file);

  const storageReference = ref(storage, `deneme/${getFileName}`);
  const uploadImage = uploadBytesResumable(storageReference, file);

  return new Promise((resolve, reject) => {
    uploadImage.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref)
          .then((downloadUrl) => resolve(downloadUrl))
          .catch((error) => reject(error));
      }
    );
  });
}

const initialFormData = {
  shopName: "Biquu",
  name: "Bilal Ergin Demirci",
  phone: "05071167922",
  brand: "Fender",
  model: "Stratocaster",
  condition: "",
  year: 2007,
  finish: "Sunburst",
  manufacturer: "Mexico",
  category: "Elektro Gitar",
  subCategory: "HSS manyetikli",
  listingTitle: "Uygun fiyata hss fender strat 2007 sunburst",
  description: "Az kullanılmış iyi durumda fender strat hss",
  price: 25000,
  onSale: "",
  priceDrop: 0,
  imageUrl: "",
  sizes: [],
};

export default function AdminAddNewProduct() {
  const [formData, setFormData] = useState(initialFormData);

  const { componentLevelLoader, setComponentLevelLoader } =
    useContext(GlobalContext);

  const router = useRouter();

  async function handleImage(event) {
    console.log(event.target.files);
    const extractImageUrl = await helperForUPloadingImageToFirebase(
      event.target.files[0]
    );
    console.log(extractImageUrl);

    if (extractImageUrl !== "") {
      setFormData({
        ...formData,
        imageUrl: extractImageUrl,
      });
    }
  }

  function handleTileClick(getCurrentItem) {
    let cpySizes = [...formData.sizes];
    const index = cpySizes.findIndex((item) => item.id === getCurrentItem.id);

    if (index === -1) {
      cpySizes.push(getCurrentItem);
    } else {
      cpySizes = cpySizes.filter((item) => item.id !== getCurrentItem.id);
    }

    setFormData({
      ...formData,
      sizes: cpySizes,
    });
  }

  async function handleAddProduct() {
    setComponentLevelLoader({ loading: true, id: "" });
    const res = await addNewProduct(formData);

    console.log(res);

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });

      setFormData(initialFormData);
      setTimeout(() => {
        router.push("/admin-view/all-products");
      }, 1000);
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setComponentLevelLoader({ loading: false, id: "" });
      setFormData(initialFormData);
    }
  }

  console.log(formData);

  return (
    <div className="flex flex-col items-center justify-between pt-2 pr-10 pb-2 pl-10 mt-8 mx-auto xl:px-5 lg:flex-row relative ">
      <div className="flex flex-col items-start justify-start p-10 bg-white   border-opacity-80 rounded-xl relative mr-auto">
        <label className="w-full text-4xl font-medium text-center font-serif text-customPurple">
          Lütfen Ürün Hakkında Bilgi Veriniz
        </label>
        <div className="w-full mt-8 mr-0 mb-0 ml-0 relative space-y-8">
          {/* <div className="flex gap-2 flex-col">
            <label>Available sizes</label>
            <TileComponent
              selected={formData.sizes}
              onClick={handleTileClick}
              data={AvailableSizes}
            />
          </div> */}

          {adminAddProductformControls.map((controlItem) =>
            controlItem.componentType === "input" ? (
              <InputComponent
                type={controlItem.type}
                placeholder={controlItem.placeholder}
                label={controlItem.label}
                value={formData[controlItem.id]}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    [controlItem.id]: event.target.value,
                  });
                }}
              />
            ) : controlItem.componentType === "select" ? (
              <SelectComponent
                label={controlItem.label}
                options={controlItem.options}
                value={formData[controlItem.id]}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    [controlItem.id]: event.target.value,
                  });
                }}
              />
            ) : null
          )}

          <label
            htmlFor="imageInput"
            className="cursor-pointer bg-customPurple text-white font-medium py-3 px-5 rounded-md text-s"
            style={{ display: "inline-block" }}
          >
            Ürün Görseli Ekleyiniz
          </label>
          <input
            id="imageInput"
            accept="image/*"
            max="1000000"
            type="file"
            onChange={(e) => {
              e.stopPropagation();
              handleImage(e);
            }}
            className="hidden"
          />
          <button
            onClick={handleAddProduct}
            className="inline-flex w-full items-center justify-center bg-customPurple px-6 py-4 text-lg text-white font-medium uppercase tracking-wide rounded-md"
          >
            {componentLevelLoader && componentLevelLoader.loading ? (
              <ComponentLevelLoader
                text={"Adding Product"}
                color={"#ffffff"}
                loading={componentLevelLoader && componentLevelLoader.loading}
              />
            ) : (
              "Ürün Ekle"
            )}
          </button>
        </div>
      </div>
      <Notification />
    </div>
  );
}
