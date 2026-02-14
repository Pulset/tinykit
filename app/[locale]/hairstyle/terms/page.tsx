import { redirect } from 'next/navigation'

export default function TermsRedirect() {
  // Permanent redirect (308) from /hairstyle/terms to /ai-hairstyle-studio/terms
  redirect('/ai-hairstyle-studio/terms')
}
