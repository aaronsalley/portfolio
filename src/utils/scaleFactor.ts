export default (_window = window) => {
  let height = _window.innerHeight;

  const scrollTop = _window.scrollY;
  const scaleFactor = (height - scrollTop * 2) / height;

  return scaleFactor;
};
