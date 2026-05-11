export type VideoGridItem = {
  id: string;
  url: string;
  title?: string;
};

export type VideoGridProps = {
  items: VideoGridItem[];
};

export function VideoGrid({ items }: VideoGridProps) {
  return (
    <div>
      {items.map((item) => (
        <video key={item.id} src={item.url} controls title={item.title} />
      ))}
    </div>
  );
}
