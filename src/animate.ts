export function createScrollObserver(toWatch: Element, newClass: string, elements: Element[]): IntersectionObserver {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        elements.forEach(x => x.classList.add(newClass));
      } else {
        elements.forEach(x => x.classList.remove(newClass));
      }
    });
  });
  observer.observe(toWatch);
  return observer;
}