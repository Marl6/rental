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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-outline-variant overflow-hidden"
        >
          <video
            src={item.url}
            controls
            title={item.title}
            className="w-full h-full object-cover aspect-video"
          />
        </div>
      ))}
    </div>
  );
}
