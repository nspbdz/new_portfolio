export const strict = false;

export const state = () => ({
  home: {
    name: "Mohamad Alfian Ramadhan",
    job: "Backend Engineer",
    office: "",
    address: "Indonesia",
    description:
      "Experience as a Fullstack Engineer for 3 years, passionate, hardworker and also willing try and learn new skill about technologies.",
  },
});

export const getters = {
  getHome(state) {
    return state.home;
  },
};
