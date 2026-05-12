export function SectionWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
