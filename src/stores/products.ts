import { defineStore } from "pinia";
import type { Product, Category } from "@/types";

interface ProductsState {
  products: Product[];
  categories: Category[];
  selectedCategory: string;
  searchQuery: string;
}

export const useProductsStore = defineStore("products", {
  state: (): ProductsState => ({
    products: [
      {
        id: 1,
        name: "NVIDIA GeForce RTX 5090",
        category: "gpu",
        price: 1599,
        image:
          "https://decisive-angel-514477a09e.media.strapiapp.com/nvidia_rtx_5090_23c99cc315.png",
        description:
          "Najvýkonnejšia herná grafická karta na trhu s 24GB GDDR6X pamäťou.",
        specs: [
          "24GB GDDR6X",
          "16384 CUDA jadier",
          "Boost Clock: 2.52 GHz",
          "450W TDP",
        ],
        inStock: true,
        rating: 4.9,
      },
      {
        id: 2,
        name: "AMD Ryzen 9 7950X",
        category: "cpu",
        price: 699,
        image: "https://mtech.am/assets/images/b4/b43a59_Ryzen-9-7950x--1.png",
        description: "16-jadrový procesor s vysokým výkonom pre náročné úlohy.",
        specs: [
          "16 jadier / 32 vlákien",
          "Base Clock: 4.5 GHz",
          "Boost Clock: 5.7 GHz",
          "170W TDP",
        ],
        inStock: true,
        rating: 4.8,
      },
      {
        id: 3,
        name: "Corsair Vengeance DDR5 32GB",
        category: "ram",
        price: 159,
        image:
          "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Memory/vengeance-rgb-ddr5-wht-config/Gallery/Vengeance-RGB-DDR5-2UP-WHITE_10.webp",
        description: "Vysokorýchlostná DDR5 RAM s RGB osvetlením.",
        specs: ["32GB (2x16GB)", "DDR5-6000 MHz", "CL36", "RGB osvetlenie"],
        inStock: true,
        rating: 4.7,
      },
      {
        id: 4,
        name: "Samsung 990 PRO 2TB NVMe",
        category: "storage",
        price: 199,
        image:
          "https://interlink-static0.tsbohemia.cz/samsung-990-pro-2tb-nvme-big_ies66185344.jpg",
        description: "Bleskovo rýchly NVMe SSD disk s PCIe 4.0.",
        specs: [
          "2TB kapacita",
          "Čítanie: 7450 MB/s",
          "Zápis: 6900 MB/s",
          "PCIe 4.0 x4",
        ],
        inStock: true,
        rating: 4.9,
      },
      {
        id: 5,
        name: "ASUS ROG Strix B650-E",
        category: "motherboard",
        price: 299,
        image:
          "https://dlcdnwebimgs.asus.com/files/media/42CF69C2-D16A-449F-A113-E7AB3C57AEE7/v1/img/kv/ROG-Strix-B650E-E-Gaming.png",
        description: "Prémiová základná doska pre AMD Ryzen 7000 sériu.",
        specs: ["Socket AM5", "PCIe 5.0", "WiFi 6E", "DDR5 podpora"],
        inStock: false,
        rating: 4.6,
      },
      {
        id: 6,
        name: "NZXT Kraken X73 RGB",
        category: "cooling",
        price: 179,
        image:
          "https://c1.neweggimages.com/NeweggImage/productimage/APMXS2101129BrQs.jpg",
        description: "Výkonné vodné chladenie s 360mm radiátorom.",
        specs: [
          "360mm radiátor",
          "RGB ventilátory",
          "LCD displej",
          "Kompatibilita: Intel/AMD",
        ],
        inStock: true,
        rating: 4.7,
      },
      {
        id: 7,
        name: "Corsair RM1000x",
        category: "psu",
        price: 189,
        image:
          "https://assets.corsair.com/image/upload/f_auto,q_auto/content/CP-9020094-NA-RMx-1000-01.png",
        description: "Modulárny zdroj s 80 PLUS Gold certifikáciou.",
        specs: ["1000W", "80 PLUS Gold", "Plne modulárny", "Tichá prevádzka"],
        inStock: true,
        rating: 4.8,
      },
      {
        id: 8,
        name: "Lian Li O11 Dynamic EVO",
        category: "case",
        price: 159,
        image:
          "https://lian-li.com/wp-content/uploads/2023/12/O11D-EVO-RBG_09.webp",
        description: "Prémiová skrinka s excelentným prúdením vzduchu.",
        specs: [
          "Mid Tower",
          "Temperované sklo",
          "Podpora až 10 ventilátorov",
          "USB-C",
        ],
        inStock: true,
        rating: 4.9,
      },
      {
        id: 9,
        name: "Intel Core i9-13900K",
        category: "cpu",
        price: 589,
        image:
          "https://i0.wp.com/esgaming.co.ke/wp-content/uploads/2023/04/Core-i9-13900K-Processor.webp?fit=1080%2C1080&ssl=1",
        description: "Výkonný 24-jadrový procesor od Intelu.",
        specs: [
          "24 jadier",
          "P-cores: 8, E-cores: 16",
          "Boost až 5.8 GHz",
          "125W TDP",
        ],
        inStock: true,
        rating: 4.7,
      },
      {
        id: 10,
        name: "AMD Radeon RX 9070 XT",
        category: "gpu",
        price: 999,
        image:
          "https://dlcdnwebimgs.asus.com/gain/df7da385-bb99-4c6d-84fb-98aa5ae8eea2/",
        description: "Výkonná grafická karta s RDNA 3 architektúrou.",
        specs: [
          "16GB GDDR6",
          "6144 Stream Processors",
          "Boost Clock: 2.5 GHz",
          "355W TDP",
        ],
        inStock: true,
        rating: 4.6,
      },
      {
        id: 11,
        name: "G.Skill Trident Z5 RGB 64GB",
        category: "ram",
        price: 299,
        image: "https://i.ebayimg.com/images/g/ExoAAOSwdm9mXno~/s-l1200.png",
        description: "Prémiová DDR5 pamäť s RGB a vysokou frekvenciou.",
        specs: ["64GB (2x32GB)", "DDR5-6400 MHz", "CL32", "RGB osvetlenie"],
        inStock: true,
        rating: 4.8,
      },
      {
        id: 12,
        name: "WD Black SN850X 4TB",
        category: "storage",
        price: 399,
        image:
          "https://www.pgs.sk/images/data/product/472/wd-black-sn850x-ssd-2tb-m-2-nvme-gen4-7300-6600-mbps-wds400t2x0e-472929.jpg",
        description: "Vysoko výkonný herný NVMe SSD.",
        specs: [
          "4TB kapacita",
          "Čítanie: 7300 MB/s",
          "Zápis: 6600 MB/s",
          "PCIe 4.0 x4",
        ],
        inStock: true,
        rating: 4.7,
      },
    ],
    categories: [
      { id: "all", name: "Všetky", icon: "🔧" },
      { id: "cpu", name: "Procesory", icon: "🖥️" },
      { id: "gpu", name: "Grafické karty", icon: "🎮" },
      { id: "ram", name: "RAM", icon: "💾" },
      { id: "storage", name: "Úložisko", icon: "💿" },
      { id: "motherboard", name: "Základné dosky", icon: "⚡" },
      { id: "cooling", name: "Chladenie", icon: "❄️" },
      { id: "psu", name: "Zdroje", icon: "🔌" },
      { id: "case", name: "Skrinky", icon: "📦" },
    ],
    selectedCategory: "all",
    searchQuery: "",
  }),

  getters: {
    filteredProducts: (state): Product[] => {
      let result = state.products;

      if (state.selectedCategory !== "all") {
        result = result.filter((p) => p.category === state.selectedCategory);
      }

      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        result = result.filter(
          (p) =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query),
        );
      }

      return result;
    },

    getProductById: (state) => (id: number) => {
      return state.products.find((p) => p.id === id);
    },

    productsByCategory: (state) => (category: string) => {
      return state.products.filter((p) => p.category === category);
    },
  },

  actions: {
    setCategory(category: string) {
      this.selectedCategory = category;
    },

    setSearchQuery(query: string) {
      this.searchQuery = query;
    },

    clearFilters() {
      this.selectedCategory = "all";
      this.searchQuery = "";
    },
  },
});
