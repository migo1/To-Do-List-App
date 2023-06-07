const toggleIcon = (element) => {
  if (element.classList.contains("fa-grip-vertical")) {
    element.classList.remove("fa-grip-vertical");
    element.classList.add("fa-trash");
  } else {
    element.classList.remove("fa-trash");
    element.classList.add("fa-grip-vertical");
  }
};

export default toggleIcon;
