"use client";

export type InstagramEmbedProps = {
  url: string;
  title?: string;
};

export function InstagramEmbed({ url, title }: InstagramEmbedProps) {
  return <iframe src={url} title={title ?? "Instagram"} />;
}
