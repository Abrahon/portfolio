import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  imageUrls: string[];
  slug: string;
  shortDescription: string;
};

export default function ProjectsCard({
  title,
  imageUrls,
  slug,
  shortDescription,
}: Props) {
  // Only take first 2 images
  const images = imageUrls
    .filter((url) => typeof url === "string" && url.trim() !== "")
    .slice(0, 2);

  return (
    <Link
      href={`/projects/${slug}`}
      className="block border shadow-xl hover:shadow-2xl border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group transform hover:scale-[1.02] hover:rotate-[-1deg]"
      aria-label={`View details for project ${title}`}
    >
      <div className="flex w-full h-[200px]">
        {images.map((url, idx) => (
          <div
            key={idx}
            className={`
              relative flex-1 overflow-hidden
              ${idx === 0 ? "rounded-l-xl" : ""}
              ${idx === 1 ? "rounded-r-xl" : ""}
            `}
          >
            <Image
              src={url}
              alt={`${title} project screenshot ${idx + 1}`}
              fill
              sizes="50vw"
              className="object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 p-2 ">
        <h2 className="text-center font-bold text-2xl">{title}</h2>
        <p className="text-center">{shortDescription}</p>
      </div>
    </Link>
  );
}
