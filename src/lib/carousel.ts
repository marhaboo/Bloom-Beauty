export function scrollCarouselToIndex(
  container: HTMLDivElement | null,
  index: number,
  cardWidth = 300
) {
  if (!container) return;
  container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
}
