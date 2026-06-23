// Night-theme accent tokens, mirroring the iOS app's "Quiet Night" palette.
export type AccentName =
  | 'indigo'
  | 'violet'
  | 'blue'
  | 'amber'
  | 'teal'
  | 'rose';

interface AccentTokens {
  bg: string; // soft glow background
  text: string; // icon / heading color
  ring: string; // border ring
}

// Accent palette derived from the app's Theme tokens (#6B78E8 family).
export const ACCENTS: Record<AccentName, AccentTokens> = {
  indigo: {
    bg: 'rgba(107, 120, 232, 0.16)',
    text: '#97A3FF',
    ring: 'rgba(107, 120, 232, 0.35)',
  },
  violet: {
    bg: 'rgba(151, 117, 250, 0.16)',
    text: '#BCC4FF',
    ring: 'rgba(151, 117, 250, 0.35)',
  },
  blue: {
    bg: 'rgba(90, 144, 208, 0.16)',
    text: '#84B6F0',
    ring: 'rgba(90, 144, 208, 0.35)',
  },
  amber: {
    bg: 'rgba(232, 168, 76, 0.16)',
    text: '#FFD29A',
    ring: 'rgba(232, 168, 76, 0.35)',
  },
  teal: {
    bg: 'rgba(76, 175, 122, 0.16)',
    text: '#6FD39A',
    ring: 'rgba(76, 175, 122, 0.35)',
  },
  rose: {
    bg: 'rgba(208, 96, 112, 0.16)',
    text: '#E08A92',
    ring: 'rgba(208, 96, 112, 0.35)',
  },
};

export function getAccent(name: AccentName): AccentTokens {
  return ACCENTS[name] ?? ACCENTS.indigo;
}
