import type { Metadata } from "next";
import { PhotoGrid } from "@/components/gallery/PhotoGrid";
import { VideoGrid } from "@/components/gallery/VideoGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

const galleryPhotos = [
  {
    id: "1",
    url: "/images/gallery/ride-01.jpg",
    alt: "ATV riders on the ridge",
  },
  {
    id: "2",
    url: "/images/gallery/ride-02.jpg",
    alt: "Horseback trail through sage",
  },
  {
    id: "3",
    url: "/images/gallery/ride-03.jpg",
    alt: "Campfire gathering at dusk",
  },
  { id: "4", url: "/images/gallery/ride-04.jpg", alt: "Ranch lodge exterior" },
  {
    id: "5",
    url: "/images/gallery/ride-05.jpg",
    alt: "Dining hall table setting",
  },
  {
    id: "6",
    url: "/images/gallery/ride-06.jpg",
    alt: "Couple walking through the meadow",
  },
  { id: "7", url: "/images/gallery/ride-07.jpg", alt: "Sunset over the arena" },
  {
    id: "8",
    url: "/images/gallery/ride-08.jpg",
    alt: "Trail ride with the guides",
  },
];

const galleryVideos = [
  {
    id: "1",
    url: "/videos/highlights-01.mp4",
    title: "Ranch highlights reel",
  },
  {
    id: "2",
    url: "/videos/highlights-02.mp4",
    title: "Wedding weekend preview",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Gallery | Lockwood's Ranch",
    description:
      "Explore photos and videos from Lockwood's Ranch events, rentals, and retreats.",
  };
}

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      <SectionWrapper>
        {/* TODO Phase 2: Replace static images with Cloudinary fetch */}
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the Range"
          subtitle="A curated look at ranch life, celebrations, and trail adventures."
        />
        <div className="mt-10">
          <PhotoGrid items={galleryPhotos} />
        </div>
      </SectionWrapper>
      <section className="bg-surface-container">
        <SectionWrapper>
          <SectionHeading
            eyebrow="Motion"
            title="Cinematic Reels"
            subtitle="Short films capturing the atmosphere of the ranch."
          />
          <div className="mt-10">
            <VideoGrid items={galleryVideos} />
          </div>
        </SectionWrapper>
      </section>
    </div>
  );
}
