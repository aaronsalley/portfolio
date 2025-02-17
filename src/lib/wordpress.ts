export const getPages = async () => {
  try {
    return [
      { id: "", title: "home", uri: "/" },
      { id: "", title: "about", uri: "/about" },
      { id: "", title: "services", uri: "/services" },
      { id: "", title: "portfolio", uri: "/portfolio" },
      { id: "", title: "contact", uri: "/contact" },
      { id: "", title: "insights", uri: "/insights" },
    ];
  } catch (error) {
    console.error(error);
  }
};

export const getPosts = async () => {
  try {
    return [
      { id: "", title: "Konsu", uri: "/konsu" },
      { id: "", title: "MSK Direct", uri: "/msk-direct" },
      { id: "", title: "B&H", uri: "/bh" },
      { id: "", title: "Intry", uri: "/intry" },
    ];
  } catch (error) {
    console.error(error);
  }
};

export const getFooterGallery = async () => {
  try {
    return [
      { id: "", uri: "/#", caption: "" },
      { id: "", uri: "/#", caption: "" },
      { id: "", uri: "/#", caption: "" },
      { id: "", uri: "/#", caption: "" },
      { id: "", uri: "/#", caption: "" },
      { id: "", uri: "/#", caption: "" },
      { id: "", uri: "/#", caption: "" },
      { id: "", uri: "/#", caption: "" },
    ];
  } catch (error) {
    console.error(error);
  }
};
