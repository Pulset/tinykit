'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Moon } from 'lucide-react';

export default function PrivacyPage() {
  const t = useTranslations('Legal');
  const tNav = useTranslations('SleepFlow.footer');
  const locale = useLocale();

  const showNotice = locale !== 'en';

  return (
    <div className='min-h-screen bg-[#0A0B14] text-gray-200'>
      {/* Minimal nav back to product */}
      <div className='border-b border-white/10 bg-[#06070F]/80 backdrop-blur-md sticky top-0 z-10'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <span className='w-8 h-8 rounded-lg bg-gradient-to-br from-[#6B78E8] to-[#9775FA] flex items-center justify-center'>
              <Moon className='w-4 h-4 text-white' fill='currentColor' />
            </span>
            <span className='font-bold text-white'>SleepFlow</span>
          </div>
          <Link
            href='/sleepflow'
            className='text-sm text-[#97A3FF] hover:text-white transition'
          >
            ← {tNav('backHome')}
          </Link>
        </div>
      </div>

      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='bg-white/[0.03] rounded-2xl shadow-lg overflow-hidden border border-white/10'>
          {/* Header */}
          <div className='bg-gradient-to-r from-[#6B78E8] to-[#9775FA] text-white p-6 sm:p-8 text-center'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2'>
              Privacy Policy
            </h1>
            <p className='text-indigo-100'>
              SleepFlow is committed to protecting your privacy
            </p>
          </div>

          <div className='p-5 sm:p-8 md:p-12'>
            {/* Language Notice Banner - Show for locales without a translated doc */}
            {showNotice && (
              <div className='bg-amber-500/10 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg'>
                <p className='text-sm sm:text-base text-amber-200'>{t('languageNotice')}</p>
              </div>
            )}

            {/* Summary Section */}
            <div className='bg-[#6B78E8]/10 border-l-4 border-[#6B78E8] p-4 mb-8 rounded-r-lg'>
              <h3 className='text-sm sm:text-base font-semibold text-[#BCC4FF] mb-4'>
                SleepFlow&apos;s Core Privacy Commitments:
              </h3>
              <ul className='space-y-2'>
                <li className='text-sm sm:text-base text-[#BCC4FF]'>
                  <strong>Data minimization</strong> — we only collect what is
                  necessary
                </li>
                <li className='text-sm sm:text-base text-[#BCC4FF]'>
                  <strong>No ads, no selling of your data</strong>
                </li>
                <li className='text-sm sm:text-base text-[#BCC4FF]'>
                  <strong>You control and can delete your information</strong>
                </li>
                <li className='text-sm sm:text-base text-[#BCC4FF]'>
                  <strong>Compliance with GDPR &amp; CCPA</strong>
                </li>
              </ul>
            </div>

            {/* Document Info */}
            <div className='bg-blue-500/10 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg'>
              <p className='text-sm sm:text-base text-blue-200'>
                <strong>Effective Date:</strong> June 22, 2026
              </p>
            </div>

            {/* Controlling Language */}
            <div className='bg-emerald-500/10 border-l-4 border-emerald-500 p-4 mb-8 rounded-r-lg'>
              <p className='text-sm sm:text-base text-emerald-200 leading-relaxed'>
                <strong>Controlling Language:</strong> This Privacy Policy is
                written in English. Any translation is provided for convenience
                only. In the event of any conflict or inconsistency between the
                English version and a translation, the English version shall
                govern.
              </p>
            </div>

            <p className='text-gray-300 mb-8 leading-relaxed'>
              This Privacy Policy explains how SleepFlow (&quot;we,&quot;
              &quot;us,&quot; or &quot;the App&quot;) collects, uses, stores,
              shares, and protects your personal information. Please read this
              Policy carefully and in full before using the App.
            </p>

            <div className='bg-[#9775FA]/10 border border-[#9775FA]/30 p-4 mb-10 rounded-lg'>
              <p className='text-[#BCC4FF] text-sm'>
                <strong>Important:</strong> SleepFlow is a white noise / ambient
                sound playback and AI audio generation app intended for sleep
                assistance. It is <strong>NOT</strong> a medical device and does
                not provide any medical diagnosis, treatment, or health advice.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                1. Information We Collect
              </h2>
              <p className='text-gray-300 mb-6 leading-relaxed'>
                We follow a &quot;data minimization&quot; principle and only
                collect information necessary to provide the Service.
              </p>

              <h3 className='text-xl font-semibold text-white mb-4'>
                1.1 Information you provide
              </h3>
              <ul className='space-y-3 mb-8'>
                <li className='text-gray-300'>
                  <strong className='text-white'>
                    AI audio generation prompts:
                  </strong>{' '}
                  The text you enter to describe a sound when using the AI audio
                  generation feature.
                </li>
                <li className='text-gray-300'>
                  <strong className='text-white'>
                    Mix configurations / saved items:
                  </strong>{' '}
                  Sound mixes you create and audio you save.
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-white mb-4'>
                1.2 Information from third-party sign-in
              </h3>
              <p className='text-gray-300 mb-6 leading-relaxed'>
                <strong className='text-white'>Sign in with Apple:</strong> If
                you choose to sign in with Apple, Apple provides us with an
                anonymized, app-scoped user identifier.{' '}
                <strong>
                  We do not receive or store your Apple ID, real name, or email
                  address
                </strong>{' '}
                — unless you actively choose to share your real email during the
                Apple sign-in flow, in which case we receive that email.
              </p>

              <h3 className='text-xl font-semibold text-white mb-4'>
                1.3 Automatically collected information
              </h3>
              <p className='text-gray-300 mb-4 leading-relaxed'>
                When you use the App or the AI audio generation feature, we may
                automatically record:
              </p>
              <ul className='space-y-3 mb-6'>
                <li className='text-gray-300'>
                  Basic device information such as device model, operating
                  system version, language, and time zone;
                </li>
                <li className='text-gray-300'>
                  Service call logs (e.g., request counts, timestamps, error
                  codes) for usage accounting and reliability.
                </li>
              </ul>
              <div className='bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg'>
                <p className='text-red-200'>
                  <strong>We do NOT collect:</strong> precise location,
                  contacts, photo library, microphone recordings, or health
                  data. The App does not record your voice.
                </p>
              </div>
            </section>

            {/* 2. How We Use Information */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                2. How We Use Information
              </h2>
              <ol className='space-y-3 mb-6 list-decimal pl-6'>
                <li className='text-gray-300'>
                  <strong className='text-white'>Provide core features:</strong>{' '}
                  Play white noise, save your mixes and favorites, and provide
                  AI audio generation.
                </li>
                <li className='text-gray-300'>
                  <strong className='text-white'>
                    Account &amp; usage management:
                  </strong>{' '}
                  Identify you and count your monthly AI audio generations
                  (subscribers receive a monthly allocation of 5 generations).
                </li>
                <li className='text-gray-300'>
                  <strong className='text-white'>Subscription services:</strong>{' '}
                  Verify your subscription status and provide the corresponding
                  entitlements.
                </li>
                <li className='text-gray-300'>
                  <strong className='text-white'>
                    Service improvement &amp; reliability:
                  </strong>{' '}
                  Analyze error logs, troubleshoot, and maintain availability.
                </li>
                <li className='text-gray-300'>
                  <strong className='text-white'>Customer support:</strong>{' '}
                  Respond to your questions and feedback.
                </li>
              </ol>
              <p className='text-gray-300 leading-relaxed'>
                We will <strong>not</strong> use your information for
                personalized advertising or sell your information to anyone.
              </p>
            </section>

            {/* 3. AI Audio Generation — Special Notice */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                3. AI Audio Generation — Special Notice
              </h2>
              <p className='text-gray-300 mb-4 leading-relaxed'>
                When you use AI audio generation, your input text is processed
                through the following flow, which you should be aware of:
              </p>
              <ol className='space-y-4 mb-6 list-decimal pl-6'>
                <li className='text-gray-300'>
                  <strong className='text-white'>Machine translation:</strong>{' '}
                  To help the AI model better understand your description, your
                  prompt may first be translated into English by a machine
                  translation model integrated into our backend (running on
                  Cloudflare&apos;s AI service). This step happens within the
                  Cloudflare network; your prompt text is not sent to any
                  additional third party for translation.
                </li>
                <li className='text-gray-300'>
                  <strong className='text-white'>AI model generation:</strong>{' '}
                  The translated text is sent to a third-party AI audio model
                  service (ElevenLabs, located in the United States) to generate
                  audio.
                </li>
                <li className='text-gray-300'>
                  <strong className='text-white'>
                    Storage &amp; playback:
                  </strong>{' '}
                  The generated audio file is stored in a cloud object storage
                  service (Cloudflare R2, located in the United States) so you
                  can play and download it later, until you delete it or it is
                  cleaned up after a period of time.
                </li>
              </ol>
              <div className='bg-amber-500/10 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg'>
                <p className='text-amber-200'>
                  <strong>
                    This means your prompt text (after translation) is
                    transmitted to AI and storage services located in the United
                    States.
                  </strong>{' '}
                  We require all third-party processors to keep your information
                  confidential and secure; however, privacy protection standards
                  may differ between countries/regions.
                </p>
              </div>
              <p className='text-gray-300 leading-relaxed'>
                <strong className='text-white'>
                  We do not manually review the content you enter
                </strong>
                , except to troubleshoot technical issues or where required by
                law or competent authorities.
              </p>
            </section>

            {/* 4. Sharing and Disclosure */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                4. Sharing and Disclosure of Information
              </h2>
              <p className='text-gray-300 mb-6 leading-relaxed'>
                We do not sell your personal information to any third party. We
                only share information in the following circumstances:
              </p>

              <h3 className='text-xl font-semibold text-white mb-4'>
                4.1 Service providers (data processors)
              </h3>
              <p className='text-gray-300 mb-4 leading-relaxed'>
                We use the following third parties to provide the Service. They
                process information necessary for the purposes described in this
                Policy:
              </p>

              <div className='overflow-x-auto mb-6'>
                <table className='w-full border-collapse text-sm'>
                  <thead>
                    <tr className='bg-[#6B78E8]/20'>
                      <th className='border border-white/10 px-4 py-3 text-left text-white'>
                        Provider
                      </th>
                      <th className='border border-white/10 px-4 py-3 text-left text-white'>
                        Purpose
                      </th>
                      <th className='border border-white/10 px-4 py-3 text-left text-white'>
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-white/10 px-4 py-3 text-gray-300'>
                        <strong className='text-white'>Apple Inc.</strong>
                      </td>
                      <td className='border border-white/10 px-4 py-3 text-gray-300'>
                        Sign in with Apple; in-app purchase and subscription
                        billing
                      </td>
                      <td className='border border-white/10 px-4 py-3 text-gray-300'>
                        United States
                      </td>
                    </tr>
                    <tr className='bg-white/[0.02]'>
                      <td className='border border-white/10 px-4 py-3 text-gray-300'>
                        <strong className='text-white'>RevenueCat, Inc.</strong>
                      </td>
                      <td className='border border-white/10 px-4 py-3 text-gray-300'>
                        Subscription status management (anonymous identifier and
                        subscription credentials only)
                      </td>
                      <td className='border border-white/10 px-4 py-3 text-gray-300'>
                        United States
                      </td>
                    </tr>
                    <tr>
                      <td className='border border-white/10 px-4 py-3 text-gray-300'>
                        <strong className='text-white'>ElevenLabs</strong>
                      </td>
                      <td className='border border-white/10 px-4 py-3 text-gray-300'>
                        AI audio model generation (receives translated prompt
                        text)
                      </td>
                      <td className='border border-white/10 px-4 py-3 text-gray-300'>
                        United States
                      </td>
                    </tr>
                    <tr className='bg-white/[0.02]'>
                      <td className='border border-white/10 px-4 py-3 text-gray-300'>
                        <strong className='text-white'>Cloudflare, Inc.</strong>
                      </td>
                      <td className='border border-white/10 px-4 py-3 text-gray-300'>
                        Backend hosting, database, prompt translation (Workers
                        AI), and audio file storage (R2)
                      </td>
                      <td className='border border-white/10 px-4 py-3 text-gray-300'>
                        United States
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-gray-300 mb-6 leading-relaxed'>
                Each provider has its own privacy policy. We are not responsible
                for how they use your information under their own policies.
              </p>

              <h3 className='text-xl font-semibold text-white mb-4'>
                4.2 Legal requirements
              </h3>
              <p className='text-gray-300 mb-6 leading-relaxed'>
                To comply with laws and regulations, respond to lawful requests
                from competent authorities, and protect our rights and the
                public interest, we may disclose your information to the extent
                necessary.
              </p>

              <h3 className='text-xl font-semibold text-white mb-4'>
                4.3 Business changes
              </h3>
              <p className='text-gray-300 leading-relaxed'>
                In the event of a merger, acquisition, or asset transfer, your
                information may be transferred as an asset; we will notify you
                via in-app notice or other reasonable means.
              </p>
            </section>

            {/* 5. International Data Transfer */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                5. International Data Transfer
              </h2>
              <p className='text-gray-300 mb-6 leading-relaxed'>
                Because our Service relies on providers located in the United
                States (ElevenLabs, RevenueCat, Cloudflare, Apple), some of your
                personal information — primarily AI audio generation prompts,
                your anonymous identifier, and subscription credentials — will
                be transferred to, and processed in, the United States.
              </p>
              <p className='text-gray-300 mb-6 leading-relaxed'>
                If you are located <strong>outside the United States</strong>,
                please be aware that the data protection laws of the United
                States may differ from those of your country or region. By using
                the AI audio generation and other features that require such
                transfer, you consent to the transfer and processing of your
                information in the United States as described in this Policy.
              </p>
              <p className='text-gray-300 leading-relaxed'>
                For users in the{' '}
                <strong>
                  European Union, the United Kingdom, and California
                </strong>
                , please see the &quot;Your Rights&quot; section below for
                additional protections.
              </p>
            </section>

            {/* 6. Data Storage and Security */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                6. Data Storage and Security
              </h2>

              <h3 className='text-xl font-semibold text-white mb-4'>
                6.1 Retention
              </h3>
              <ul className='space-y-3 mb-8'>
                <li className='text-gray-300'>
                  We keep your information only for as long as necessary to
                  provide the Service.
                </li>
                <li className='text-gray-300'>
                  Your AI-generated audio and records are retained until you
                  actively delete them or for a period after account deletion.
                </li>
                <li className='text-gray-300'>
                  Log data kept beyond the necessary period is deleted or
                  anonymized.
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-white mb-4'>
                6.2 Storage location
              </h3>
              <p className='text-gray-300 mb-8 leading-relaxed'>
                Your information is primarily stored on the U.S.-based servers
                of the providers listed above.
              </p>

              <h3 className='text-xl font-semibold text-white mb-4'>
                6.3 Security measures
              </h3>
              <p className='text-gray-300 leading-relaxed'>
                We take reasonable technical and organizational measures (such
                as HTTPS encryption in transit and access controls) to protect
                your information. However, no internet transmission is fully
                secure, and we cannot guarantee 100% security. In the event of a
                personal data security incident, we will notify you as required
                by applicable law.
              </p>
            </section>

            {/* 7. Children */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                7. Children
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                The App is not directed to children under 13, and we do not
                knowingly collect personal information from children. If you are
                a parent or guardian and believe your child has provided us with
                information, please contact us and we will delete it.
              </p>
            </section>

            {/* 8. Your Rights */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                8. Your Rights
              </h2>
              <p className='text-gray-300 mb-4 leading-relaxed'>
                Depending on applicable law, you may have the following rights:
              </p>
              <ul className='space-y-3 mb-6'>
                <li className='text-gray-300'>
                  <strong className='text-white'>Access</strong> your personal
                  information;
                </li>
                <li className='text-gray-300'>
                  <strong className='text-white'>Correct or update</strong>{' '}
                  inaccurate information;
                </li>
                <li className='text-gray-300'>
                  <strong className='text-white'>Delete</strong> your personal
                  information or deactivate your account;
                </li>
                <li className='text-gray-300'>
                  <strong className='text-white'>Withdraw consent</strong>{' '}
                  (which may make some features unavailable);
                </li>
                <li className='text-gray-300'>
                  <strong className='text-white'>Obtain / port</strong> a copy
                  of your data;
                </li>
                <li className='text-gray-300'>
                  <strong className='text-white'>
                    Object to automated decision-making
                  </strong>
                  .
                </li>
              </ul>
              <p className='text-gray-300 mb-8 leading-relaxed'>
                To exercise these rights, contact us using the details at the
                end of this Policy. We will respond within a reasonable period
                (generally no more than 30 days).
              </p>

              <h3 className='text-xl font-semibold text-white mb-4'>
                8.1 EU / UK users (GDPR)
              </h3>
              <p className='text-gray-300 mb-8 leading-relaxed'>
                If you are located in the European Union or the United Kingdom,
                under the GDPR you additionally have the right to object to
                certain processing, restrict processing, lodge a complaint with
                your local data protection authority, and request that your data
                be transferred to another controller. The legal bases on which
                we process your information are: performance of a contract
                (providing the Service), consent, and legitimate interests.
                International transfers rely on Standard Contractual Clauses
                (SCCs) or other appropriate safeguards.
              </p>

              <h3 className='text-xl font-semibold text-white mb-4'>
                8.2 California users (CCPA / CPRA)
              </h3>
              <p className='text-gray-300 mb-8 leading-relaxed'>
                If you are a California resident, under the CCPA/CPRA you have
                the right to know what personal information we collect, request
                deletion, opt out of the &quot;sale&quot; or &quot;sharing&quot;
                of your personal information, and not be discriminated against
                for exercising these rights.{' '}
                <strong className='text-white'>
                  We do not sell or share your personal information as those
                  terms are defined by California law.
                </strong>{' '}
                To submit a request, contact us using the details below.
              </p>

              <h3 className='text-xl font-semibold text-white mb-4'>
                8.3 &quot;Do Not Sell or Share My Personal Information&quot;
              </h3>
              <p className='text-gray-300 leading-relaxed'>
                We do not sell or share your personal information for
                cross-context behavioral advertising. No opt-out is necessary;
                we do not engage in these practices.
              </p>
            </section>

            {/* 9. Cookies */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                9. Cookies and Similar Technologies
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                The App (mobile) does not use browser cookies itself. Backend
                services may use necessary logs and anonymous technical metrics
                for security and reliability, and do not use them for cross-app
                tracking.
              </p>
            </section>

            {/* 10. Third-Party Links */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                10. Third-Party Links
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                The App may contain links to third parties (such as Apple,
                ElevenLabs). We are not responsible for the content or privacy
                practices of third parties; please review their respective
                privacy policies.
              </p>
            </section>

            {/* 11. Updates */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                11. Updates to This Policy
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                We may update this Policy from time to time. When we do, we will
                provide the revised Policy in the App or on this page and update
                the &quot;Effective date&quot; at the top. In the case of
                material changes, we will notify you through reasonable means
                (such as an in-app notice).
              </p>
            </section>

            {/* 12. Contact Us */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                12. Contact Us
              </h2>
              <p className='text-gray-300 mb-6 leading-relaxed'>
                If you have any questions, suggestions, or complaints about this
                Policy or the protection of your personal information, please
                contact us:
              </p>
              <ul className='space-y-3'>
                <li className='text-gray-300'>
                  <strong className='text-white'>Email:</strong>{' '}
                  <a
                    href='mailto:support@tinykit.app'
                    className='text-[#97A3FF] hover:text-white ml-2'
                  >
                    support@tinykit.app
                  </a>
                </li>
                <li className='text-gray-300'>
                  <strong className='text-white'>App Store developer:</strong>{' '}
                  <span className='ml-2'>TinyKit</span>
                </li>
              </ul>
              <p className='text-gray-300 mt-6 leading-relaxed'>
                We will process your request as soon as possible after receiving
                it.
              </p>
            </section>

            {/* Footer */}
            <div className='text-center pt-8 border-t border-white/10'>
              <p className='text-gray-400 mb-2'>
                <strong>This Policy was last updated on:</strong> June 22, 2026.
              </p>
              <p className='text-gray-500 italic'>
                Thank you for trusting SleepFlow with your personal information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
