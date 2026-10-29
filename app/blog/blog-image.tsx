import Image from "next/image";

type BlogImageProps = {
  alt: string;
  mobileSrc?: string;
  priority?: boolean;
  sizes: string;
  src: string;
};

export function BlogImage({
  alt,
  mobileSrc,
  priority,
  sizes,
  src,
}: BlogImageProps) {
  return (
    <picture>
      {mobileSrc && (
        <source media="(max-width: 640px)" sizes={sizes} srcSet={mobileSrc} />
      )}
      <Image alt={alt} fill priority={priority} sizes={sizes} src={src} />
    </picture>
  );
}
