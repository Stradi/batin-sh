'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/tailwind';

type TProjectCard = {
  title: string;
  images: string[];
};

type Props = TProjectCard & {
  href: string;
  className?: string;
  rotationAngle?: number;
  translationY?: number;
};

const MotionLink = motion(Link);
const MotionImage = motion(Image);

export default function ProjectCard({ title, href, images, className, rotationAngle, translationY }: Props) {
  const _rotationAngle = rotationAngle ?? 1;
  const _translationY = translationY ?? -30;

  return (
    <MotionLink
      animate={{ rotateZ: 0, y: 0, opacity: 1 }}
      className={cn(
        'group rounded-lg h-96 flex border overflow-hidden',
        'bg-neutral-100 border-neutral-200',
        'transition-colors duration-100',
        'dark:bg-neutral-800 dark:border-neutral-700',
        className
      )}
      href={href}
      initial={{ rotateZ: _rotationAngle * 3, y: _translationY, opacity: 0 }}
      whileHover={{ rotateZ: _rotationAngle }}
    >
      {images.length === 1 ? (
        <SingleImageContents images={images} title={title} />
      ) : (
        <MultiImageContents images={images} title={title} />
      )}
    </MotionLink>
  );
}

function SingleImageContents({ title, images }: TProjectCard) {
  const imageVariants = {
    default: { scale: 0.9, y: 64 },
    hover: { scale: 0.95, y: 36 },
  };

  return (
    <motion.div className="relative aspect-[9/16] w-full" initial="default" whileHover="hover">
      <p className={cn('text-center text-2xl font-medium pt-2 z-50')}>{title}</p>
      <MotionImage
        alt="Image"
        className="rounded-lg shadow-2xl shadow-black/75"
        fill
        src={images[0]}
        variants={imageVariants}
      />
    </motion.div>
  );
}

function MultiImageContents({ title, images }: TProjectCard) {
  const containerVariants = {
    default: {},
    hover: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const imageVariants = {
    default: { scale: 1 },
    hover: {
      scale: 1.1,
      rotateZ: 0,
      y: -24,
    },
  };

  // TODO: Refactor this
  return (
    <motion.div className="w-full h-full flex relative" variants={containerVariants} whileHover="hover">
      <p className="mt-2 ml-2 text-2xl font-medium">{title}</p>
      {images.map((image, index) => (
        <motion.div
          className="absolute rounded-lg aspect-[9/16] h-full"
          key={image}
          style={{
            right: `${-2 + index * 9.625}rem`,
            rotateZ: `${(index + 1) * -3}deg`,
            top: `${5 + index * 2}rem`,
          }}
          variants={imageVariants}
        >
          <Image alt="Image" className="rounded-lg shadow-2xl shadow-black/75" fill src={image} />
        </motion.div>
      ))}
    </motion.div>
  );
}
