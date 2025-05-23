// src/components/RemoteAvatar.tsx
import Image from "next/image";

export default function RemoteAvatar({
  src,
  alt,
  size = 16,
}: {
  src: string;
  alt: string;
  size?: number;
}) {
  return (
    <div
      className="rounded-full overflow-hidden border border-gray-200 bg-white"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
