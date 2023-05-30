import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

type CardProps = {
  href?: string;
  title?: string;
  description?: string;
  className?: string;
  image?: { url?: string | null; alt?: string };
  variant?: "internal" | "external";
};

// https://v1.tailwindcss.com/components/cards
const Card: FC<CardProps> = ({
  href,
  title,
  description,
  className,
  image,
  variant = "internal",
}) => {
  return variant === "internal" ? (
    <Link
      className={`inline-block w-96 max-w-md overflow-hidden rounded shadow-md transition-shadow hover:shadow-lg sm:max-w-[15rem] md:max-w-[17rem] ${className}`}
      href={href ?? `#${title}`}
      id={`${title}`}
    >
      <Image
        height={200}
        width={300}
        src={image?.url ?? "/default.gif"}
        alt={image?.alt ?? ""}
        className="h-60 w-full object-cover sm:h-auto"
      />

      <div className="px-6 py-4">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="block h-8 overflow-hidden text-ellipsis whitespace-nowrap text-base text-gray-700">
          {description}
        </p>
      </div>
    </Link>
  ) : (
    <a
      href={href}
      className="group rounded-lg border border-transparent bg-gray-50 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className={`mb-3 text-2xl font-semibold`}>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h3>
      <p className={`m-0 max-w-[30ch] text-sm opacity-80`}>{description}</p>
    </a>
  );
};

export default Card;
