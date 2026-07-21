const galleryModules = import.meta.glob("../assets/the-hungry-scholars/*.{jpeg,jpg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const galleryLabels: Record<string, string> = {
  "zz-university-higher-authority-guests.jpg": "University Higher authority Guests",
};

const compareGalleryEntries = ([pathA]: [string, string], [pathB]: [string, string]) => {
  const fileNameA = pathA.split("/").pop() ?? "";
  const fileNameB = pathB.split("/").pop() ?? "";
  const hasLabelA = Boolean(galleryLabels[fileNameA]);
  const hasLabelB = Boolean(galleryLabels[fileNameB]);

  if (hasLabelA !== hasLabelB) {
    return hasLabelA ? -1 : 1;
  }

  return pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: "base" });
};

export const theHungryScholarsGalleryItems = Object.entries(galleryModules)
  .sort(compareGalleryEntries)
  .map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "";

    return {
      src,
      fileName,
      label: galleryLabels[fileName],
    };
  });

export const theHungryScholarsGallery = theHungryScholarsGalleryItems.map((item) => item.src);

export const theHungryScholarsBanner =
  theHungryScholarsGalleryItems.find((item) => !item.label)?.src ?? theHungryScholarsGallery[0];
