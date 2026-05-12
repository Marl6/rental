import Image from "next/image";

export type PhotoGridItem = {
  id: string;
  url: string;
  alt?: string;
};

export type PhotoGridProps = {
  items: PhotoGridItem[];
};

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23e4e2dd'/%3E%3C/svg%3E";

export function PhotoGrid({ items }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative aspect-square overflow-hidden border border-outline-variant"
        >
          <Image
            src={item.url}
            alt={item.alt ?? ""}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        </div>
      ))}
    </div>
  );
}
