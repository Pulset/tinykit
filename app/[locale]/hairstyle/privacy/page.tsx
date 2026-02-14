import { redirect } from 'next/navigation'

export default function PrivacyRedirect() {
  // Permanent redirect (308) from /hairstyle/privacy to /ai-hairstyle-studio/privacy
  redirect('/ai-hairstyle-studio/privacy')
}
