export default function calculatedCSS(property: string, _document = document) {
  const element = _document.documentElement;
  const styles = getComputedStyle(element);

  return styles.getPropertyValue(property);
}
