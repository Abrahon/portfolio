import Image from "next/image";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

export default function ProjectsCard({
  title,
  description,
  imageUrl,
  link,
}: Props) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group">
      <div className="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={400}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
