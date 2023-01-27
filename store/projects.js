export const state = () => ({
  projects: [
    {
      name: "BFI Treasury",
      desc: "A web finance management system.",
      picture: "bfi-treasury.webp",
      url: "",
      stack: ["Boostrap", "ReactJS", "Redux", "Hooks"],
    },
    {
      name: "Sipector",
      desc: "A web application for inspecting and managing vehicle.",
      picture: "sipector.webp",
      url: "https://devotoappraisal.sitama.co.id",
      stack: ["Nuxt", "Vuetify", "Laravel"],
    },
    {
      name: "Kirim Paket",
      desc: "Website tracking sales",
      picture: "kirim-paket.webp",
      url: "https://app.kirimpaket.id",
      stack: ["Vue 3", "Tailwind", "Composition", "Pinia"],
    },
    {
      name: "Sitama Admin 3",
      desc: "Website content management system",
      picture: "sitama-admin-3.webp",
      url: "https://sitamaadminbeta.grosirmobil.id",
      stack: ["NuxtJS", "Vuetify", "Composition", "Vuex"],
    },
    {
      name: "Sitama PKP",
      desc: "Website management selling",
      picture: "pkp.webp",
      url: "https://finance.sitama.co.id/",
      stack: ["NuxtJS", "Vuetify", "Vuex", "Socket.io"],
    },



    {
      name: "Find me by",
      desc: "Website search cation youtube url",
      picture: "findmeby.webp",
      url: "https://findmeby.netlify.app/",
      stack: ["NuxtJS", "Vuetify", "Vuex"],
    },
    {
      name: "Eccomerce Grosir Mobil V2",
      desc: "Car sales e-commerce website",
      picture: "eccomerce-grosir-mobil-v2.webp",
      url: "",
      stack: ["NuxtJS", "Vuetify", "Tailwind"],
    },
    {
      name: "Eccomerce Grosir Mobil",
      desc: "Car sales e-commerce website",
      picture: "eccormece-grosirmobil.webp",
      url: "",
      stack: ["NuxtJS", "Boostrap"],
    },
    {
      name: "Vehiclo 2.0",
      desc: "Vehicle management website",
      picture: "vehiclo2.webp",
      url: "https://vehiclo.id",
      stack: ["NuxtJS", "Buefy", "Vuex"],
    },
    {
      name: "Indo Event",
      desc: "Ticketing system website",
      picture: "indo-event.webp",
      url: "http://demo.indoevent.id/",
      stack: ["NuxtJS", "Boostrap"],
    },
    {
      name: "Dashboard",
      desc: "Dashboard monitoring system",
      picture: "dashboard.webp",

      stack: ["VueJs", "Boostrap"],
    },
    {
      name: "Vehiclo",
      desc: "Vehicle asset management",
      picture: "vehiclo.webp",
      stack: ["Laravel", "VueJs", "Boostrap"],
    },
    {
      name: "Sitama Admin",
      desc: "All business data management",
      picture: "sitamaadmin.webp",
      url: "https://sitamaadmin.grosirmobil.id/",
      stack: ["Laravel", "VueJs", "Vuesax", "Boostrap"],
    },

    {
      name: "Grosir Mobil 2.0",
      desc: "E-commerce site for buying and selling cars",
      picture: "grosirmobil.webp",
      url: "https://grosirmobil.id",
      stack: ["Laravel", "VueJs", "Boostrap"],
    },
    {
      name: "Negondeal",
      desc: "Digital Car Sales",
      picture: "negondeal.webp",
      stack: ["Laravel", "VueJs", "Boostrap"],
    },
    {
      name: "Admin Negondeal",
      desc: "Management, Manage negondeal apps",
      picture: "adminnegondeal.webp",
      stack: ["Laravel", "VueJs", "Vuesax"],
    },
    {
      name: "Monster Slayer",
      desc: "Simple game like MMORPG",
      picture: "monsterslayer.webp",
      url: "https://monster-slayer-vue-1.netlify.app/",
      stack: ["VueJs"],
    },
    {
      name: "Logtify",
      desc: "Attendance data management",
      picture: "logtify.webp",
      stack: ["VueJs", "Laravel", "Boostrap"],
    },
    {
      name: "Admin Grosir Mobil",
      desc: "Management Set Up Car Wholesale Application",
      picture: "admingrosirmobil.webp",
      stack: ["VueJs", "Laravel", "Boostrap", "Vuesax"],
    },

  
    {
      name: "Yayasan Quran Company Profile",
      desc: "Introduction to Quran Foundation through Website",
      picture: "ycquran.webp",
      stack: ["Laravel", "Boostrap"],
    },
    {
      name: "E-Voting",
      desc: "Voting digitally osis",
      picture: "evoting.webp",
      stack: ["PHP"],
    },
  ],
});

export const getters = {
  getProjects(state) {
    return state.projects;
  },
};
