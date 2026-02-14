import { redirect } from 'next/navigation'

export default function HairstyleRedirect() {
  // Permanent redirect (308) from /hairstyle to /ai-hairstyle-studio
  redirect('/ai-hairstyle-studio')
}
