export const state = () => ({
  skills: [
    {
      name: "VueJS",
      icon: "devicon-vuejs-plain",
      experience: 1,
      experienceYear: "y",
      bootcamp:"n"
    },
    {
      name: "NuxtJS",
      icon: "devicon-nuxtjs-plain",
      experience: 1,
      experienceYear: "y",
      bootcamp:"n"
    },
    {
      name: "Laravel",
      icon: "devicon-laravel-plain",
      experience: 3,
      experienceYear: "y",
      bootcamp:"y"
    },
    {
      name: "React ",
      icon: "devicon-react-plain",
      experience: 6,
      experienceYear: "m",
      bootcamp:"y"
    },
    {
      name: "ExpressJS",
      icon: "devicon-express-original",
      experience: 6,
      experienceYear: "m",
      bootcamp:"y"
    },
    {
      name: "Python",
      icon: "devicon-python-plain",
      experience: 1,
      experienceYear: "m",
      bootcamp:"n"
    },
    {
      name: "MySql",
      icon: "devicon-mysql-plain",
      experience: 3,
      experienceYear: "y",
      bootcamp:"y"
    },
    {
      name: "PostgreSQL",
      icon: "devicon-postgresql-plain",
      experience: 1,
      experienceYear: "m",
      bootcamp:"n"
    },
  ],
});

export const getters = {
  getSkills(state) {
    return state.skills;
  },
};
