import Image from 'next/image';

interface UserAvatarProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const sizeClasses = {
  small: 'w-8 h-8',
  medium: 'w-12 h-12',
  large: 'w-16 h-16',
};

const sizeDimensions = {
  small: 32,
  medium: 48,
  large: 64,
};

export default function UserAvatar({
  src,
  alt,
  size = 'medium',
  className = '',
}: UserAvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={sizeDimensions[size]}
      height={sizeDimensions[size]}
      className={`${sizeClasses[size]} rounded-full ${className}`}
    />
  );
}