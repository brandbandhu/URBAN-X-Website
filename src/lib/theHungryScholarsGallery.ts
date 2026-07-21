const galleryModules = import.meta.glob("../assets/the-hungry-scholars/*.{jpeg,jpg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const galleryLabels: Record<string, string> = {
  "zz-university-higher-authority-guests.jpg": "University Higher authority Guests",
};

export const theHungryScholarsGalleryItems = Object.entries(galleryModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
  .map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "";

    return {
      src,
      fileName,
      label: galleryLabels[fileName],
    };
  });

export const theHungryScholarsGallery = theHungryScholarsGalleryItems.map((item) => item.src);
