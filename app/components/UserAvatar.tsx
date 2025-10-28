interface UserAvatarProps {
  src: string
  alt: string
  size?: 'small' | 'medium' | 'large'
  className?: string
}

const sizeClasses = {
  small: 'w-8 h-8',
  medium: 'w-12 h-12',
  large: 'w-16 h-16'
}

export default function UserAvatar({ src, alt, size = 'medium', className = '' }: UserAvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeClasses[size]} rounded-full ${className}`}
    />
  )
}