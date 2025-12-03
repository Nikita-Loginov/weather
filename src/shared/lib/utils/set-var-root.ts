export const setVarRoot = (
  element: HTMLElement | null,
  property: string,
  varName: string
) => {
  if (!element || !property || !varName) return;

  const styles = window.getComputedStyle(element);
  const value = styles.getPropertyValue(property);

  if (value) {
    document.documentElement.style.setProperty(`--${varName}`, value);

    getComputedStyle(document.documentElement).getPropertyValue(`--${varName}`);
  }
};
