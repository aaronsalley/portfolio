export default (property) => {
  const element = document.documentElement;
  const styles = getComputedStyle(element);

  return styles.getPropertyValue(property);
};
