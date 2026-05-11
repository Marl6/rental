import Image from "next/image";

export type PhotoGridItem = {
  id: string;
  url: string;
  alt?: string;
};

export type PhotoGridProps = {
  items: PhotoGridItem[];
};

export function PhotoGrid({ items }: PhotoGridProps) {
  return (
    <div>
      {items.map((item) => (
        <Image
          key={item.id}
          src={item.url}
          alt={item.alt ?? ""}
          width={1200}
          height={800}
        />
      ))}
    </div>
  );
}
