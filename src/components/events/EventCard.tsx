export type EventCardProps = {
  title: string;
};

export function EventCard({ title }: EventCardProps) {
  return <article>{title}</article>;
}
