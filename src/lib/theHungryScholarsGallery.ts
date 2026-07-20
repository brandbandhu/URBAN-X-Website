const galleryModules = import.meta.glob("../assets/the-hungry-scholars/*.{jpeg,jpg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const theHungryScholarsGallery = Object.entries(galleryModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
  .map(([, src]) => src);
