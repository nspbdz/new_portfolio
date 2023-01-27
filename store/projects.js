export const state = () => ({
  projects: [
    {
      name: "Agreesip ",
      desc: "A web loan and agent management system.",
      picture: "agreesip.webp",
      url: "",
      stack: ["Vuetify", "VueJs","NuxtJs", "Vuex", "Laravel"],
    },
    {
      name: "Gadai Bpkb Online ",
      desc: "A web collection user data.",
      picture: "gadai.webp",
      url: "https://gadaibpkbonline.id/",
      stack: ["Vuetify", "VueJs","NuxtJs", "Vuex", "Laravel"],
    },

    {
      name: "E-Budgeting ",
      desc: "A web to claim paid.",
      picture: "e-budgeting.webp",
      url: "",
      stack: ["Bootstrap","Javascript(Jquery)", "Laravel"],
    },

    {
      name: "PKBL ",
      desc: "A web program for developing Small Business and Environmental Empowerment by BUMN.",
      picture: "pkbl.webp",
      url: "",
      stack: ["Bootstrap","Javascript(Jquery)", "Laravel"],
    },

    {
      name: "Mistery Shop",
      desc: "Mystery Shop is a website to make it easier to sell and buy goods online",
      picture: "shop.webp",
      url: "https://dev-mistery-shops.netlify.app/",
      stack: ["Nuxt", "Vuetify", "Laravel"],
    },

    {
      name: "Waysbucks ",
      desc: "Waysbucks is an website to order your favorite coffee  by online and easy",
      picture: "waysbucks.webp",
      url: "https://github.com/nspbdz/nspbdz-integration-Waysbucks",
      stack: ["react-bootstrap", "ReactJs","axios", "ExpressJs"],
    },

    {
      name: "The Journey ",
      desc: "Website for share and inspire, in this website you can inspire and inspired with each other Journey and experience",
      picture: "journey.webp",
      url: "https://github.com/nspbdz/nspbdz-NIS_The-Journey",
      stack: ["react-bootstrap", "ReactJs","axios", "ExpressJs"],
    },

    {
      name: "Housy ",
      desc: "Waysbucks is an website to order and booking your favorite room  by online and easy",
      picture: "housy.webp",
      url: "https://github.com/nspbdz/Housy-Integration",
      stack: ["react-bootstrap", "ReactJs","axios", "ExpressJs"],
    },


    {
      name: "Turjawali ",
      desc: "A web program absen/presence and reporting.",
      picture: "turjawali.webp",
      url: "",
      stack: ["Bootstrap","Javascript(Jquery)", "Laravel"],
    },

  ],
});

export const getters = {
  getProjects(state) {
    return state.projects;
  },
};
