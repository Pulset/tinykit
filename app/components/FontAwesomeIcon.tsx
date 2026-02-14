'use client'

import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar as fasStar,
  faMagic as fasMagic,
  faCog as fasCog,
  faBell as fasBell,
  faHistory as fasHistory,
  faShieldAlt as fasShieldAlt,
  faBolt as fasBolt,
  faCheck as fasCheck,
  faClock as fasClock,
  faInfinity as fasInfinity,
  faCheckCircle as fasCheckCircle,
  faLock as fasLock,
  faFolderOpen as fasFolderOpen,
  faPlayCircle as fasPlayCircle,
  faEnvelope as fasEnvelope,
  faPlay as fasPlay,
  faImages as fasImages,
  faPalette as fasPalette,
  faTint as fasTint,
  faCamera as fasCamera,
  faDownload as fasDownload,
  faHeart as fasHeart,
  faQuoteLeft as fasQuoteLeft,
  faFileContract as fasFileContract
} from '@fortawesome/free-solid-svg-icons'
import {
  faApple as fabApple,
  faGithub as fabGithub,
  faDiscord as fabDiscord,
  faYoutube as fabYoutube
} from '@fortawesome/free-brands-svg-icons'

export type FontAwesomeIconName =
  | 'fas fa-star'
  | 'fas fa-magic'
  | 'fas fa-cog'
  | 'fas fa-bell'
  | 'fas fa-history'
  | 'fas fa-shield-alt'
  | 'fas fa-bolt'
  | 'fas fa-check'
  | 'fas fa-clock'
  | 'fas fa-infinity'
  | 'fas fa-check-circle'
  | 'fas fa-lock'
  | 'fas fa-folder-open'
  | 'fas fa-play-circle'
  | 'fas fa-envelope'
  | 'fab fa-apple'
  | 'fab fa-github'
  | 'fab fa-discord'
  | 'fab fa-youtube'
  | 'fas fa-play'
  | 'fas fa-images'
  | 'fas fa-palette'
  | 'fas fa-tint'
  | 'fas fa-camera'
  | 'fas fa-download'
  | 'fas fa-heart'
  | 'fas fa-quote-left'
  | 'fas fa-file-contract'

const iconMap: Record<FontAwesomeIconName, IconProp> = {
  // Solid icons
  'fas fa-star': fasStar,
  'fas fa-magic': fasMagic,
  'fas fa-cog': fasCog,
  'fas fa-bell': fasBell,
  'fas fa-history': fasHistory,
  'fas fa-shield-alt': fasShieldAlt,
  'fas fa-bolt': fasBolt,
  'fas fa-check': fasCheck,
  'fas fa-clock': fasClock,
  'fas fa-infinity': fasInfinity,
  'fas fa-check-circle': fasCheckCircle,
  'fas fa-lock': fasLock,
  'fas fa-folder-open': fasFolderOpen,
  'fas fa-play-circle': fasPlayCircle,
  'fas fa-envelope': fasEnvelope,
  'fas fa-play': fasPlay,
  'fas fa-images': fasImages,
  'fas fa-palette': fasPalette,
  'fas fa-tint': fasTint,
  'fas fa-camera': fasCamera,
  'fas fa-download': fasDownload,
  'fas fa-heart': fasHeart,
  'fas fa-quote-left': fasQuoteLeft,
  'fas fa-file-contract': fasFileContract,

  // Brand icons
  'fab fa-apple': fabApple,
  'fab fa-github': fabGithub,
  'fab fa-discord': fabDiscord,
  'fab fa-youtube': fabYoutube,
}

interface FontAwesomeIconProps {
  name: FontAwesomeIconName
  className?: string
  style?: React.CSSProperties
}

export default function FontAwesomeIconComponent({ name, className = '', style }: FontAwesomeIconProps) {
  const icon = iconMap[name]

  if (!icon) {
    console.warn(`Font Awesome icon "${name}" not found`)
    return <span className={className} />
  }

  return <FontAwesomeIcon icon={icon} className={className} style={style} />
}