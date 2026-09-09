/**
 * Scrollt geschmeidig zu einer Sektion und stellt sicher,
 * dass kein störender Hash (#sektion) in der Browser-URL verbleibt.
 */
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  // URL immer sauber ohne # halten
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
};
