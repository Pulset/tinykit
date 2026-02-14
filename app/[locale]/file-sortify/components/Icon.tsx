import { LucideProps } from 'lucide-react'
import {
  Star,
  Check,
  Apple,
  Bell,
  Shield,
  Zap,
  Clock,
  Archive,
  Settings
} from 'lucide-react'

export type IconName =
  | 'star'
  | 'check'
  | 'fab fa-apple'
  | 'bell'
  | 'shield-alt'
  | 'bolt'
  | 'history'
  | 'magic'
  | 'cog'

interface IconProps extends LucideProps {
  name: IconName
  className?: string
}

const iconMap: Record<IconName, React.ComponentType<LucideProps>> = {
  'star': Star,
  'check': Check,
  'fab fa-apple': Apple,
  'bell': Bell,
  'shield-alt': Shield,
  'bolt': Zap,
  'history': Clock,
  'magic': Archive,
  'cog': Settings,
}

export default function Icon({ name, className = '', ...props }: IconProps) {
  const IconComponent = iconMap[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return <div className={className} />
  }

  return <IconComponent className={className} {...props} />
}