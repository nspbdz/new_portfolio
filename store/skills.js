export const state = () => ({
  skills: [
    {
      name: "VueJS",
      icon: "devicon-vuejs-plain",
      experience: 3,
      experienceYear: "y",
    },
    {
      name: "NuxtJS",
      icon: "devicon-nuxtjs-plain",
      experience: 2.5,
      experienceYear: "y",
    },
    {
      name: "Laravel",
      icon: "devicon-laravel-plain",
      experience: 3.3,
      experienceYear: "y",
    },
    {
      name: "React",
      icon: "devicon-react-plain",
      experience: 6,
      experienceYear: "m",
    },
    {
      name: "ExpressJS",
      icon: "devicon-express-original",
      experience: 3,
      experienceYear: "m",
    },
    {
      name: "Python",
      icon: "devicon-python-plain",
      experience: 2,
      experienceYear: "m",
    },
    {
      name: "MySql",
      icon: "devicon-mysql-plain",
      experience: 2,
      experienceYear: "m",
    },
  ],
});

export const getters = {
  getSkills(state) {
    return state.skills;
  },
};
