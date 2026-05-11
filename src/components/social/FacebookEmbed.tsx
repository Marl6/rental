"use client";

export type FacebookEmbedProps = {
  url: string;
  title?: string;
};

export function FacebookEmbed({ url, title }: FacebookEmbedProps) {
  return <iframe src={url} title={title ?? "Facebook"} />;
}
