'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations('Legal');
  const locale = useLocale();

  const showNotice = locale !== 'en';

  return (
    <div className='min-h-screen bg-[#0A0B14] text-gray-200'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='bg-white/[0.03] rounded-2xl shadow-lg overflow-hidden border border-white/10'>
          {/* Header */}
          <div className='bg-gradient-to-r from-[#6B78E8] to-[#9775FA] text-white p-6 sm:p-8 text-center'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2'>
              Terms of Service
            </h1>
            <p className='text-indigo-100'>
              Please read these terms carefully before using SleepFlow
            </p>
          </div>

          <div className='p-5 sm:p-8 md:p-12'>
            {/* Language Notice Banner - Show for locales without a translated doc */}
            {showNotice && (
              <div className='bg-amber-500/10 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg'>
                <p className='text-amber-200'>{t('languageNotice')}</p>
              </div>
            )}

            {/* Controlling Language */}
            <div className='bg-emerald-500/10 border-l-4 border-emerald-500 p-4 mb-8 rounded-r-lg'>
              <p className='text-emerald-200 text-sm leading-relaxed'>
                <strong>Controlling Language:</strong> These Terms are written
                in English. Any translation is provided for convenience only. In
                the event of any conflict or inconsistency between the English
                version and a translation, the English version shall govern.
              </p>
            </div>

            <div className='bg-amber-500/10 border-l-4 border-amber-500 p-4 mb-10 rounded-r-lg'>
              <p className='text-amber-200 text-sm leading-relaxed'>
                <strong>
                  Please read these Terms carefully and in full before using the
                  Service, especially the provisions shown in bold or
                  underlined.
                </strong>{' '}
                By downloading, installing, registering, signing in, or
                otherwise using the Service, you acknowledge that you have read,
                understood, and agree to be bound by these Terms in their
                entirety. If you do not agree to any provision, please stop
                using and uninstall the App.
              </p>
            </div>

            {/* 1. Acceptance and Changes */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                1. Acceptance and Changes to These Terms
              </h2>
              <ol className='space-y-4 list-decimal pl-6'>
                <li className='text-gray-300 leading-relaxed'>
                  By completing any of the actions above, you are deemed to
                  voluntarily accept and be bound by these Terms.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  We may revise these Terms from time to time based on legal
                  requirements, product adjustments, or operational needs. The
                  revised Terms take effect on the date they are posted in the
                  App or on this page. If you continue to use the Service after
                  the revised Terms take effect, you are deemed to accept them;
                  if you do not agree, please stop using the Service.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  These Terms include any specific rules and notices we may
                  publish, all of which form an integral part of these Terms.
                </li>
              </ol>
            </section>

            {/* 2. Description of the Service */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                2. Description of the Service
              </h2>
              <ol className='space-y-4 list-decimal pl-6'>
                <li className='text-gray-300 leading-relaxed'>
                  The App is a{' '}
                  <strong className='text-white'>
                    white noise / ambient sound
                  </strong>{' '}
                  playback and mixing tool for sleep assistance, and also
                  provides an{' '}
                  <strong className='text-white'>AI audio generation</strong>{' '}
                  feature to help you create a relaxing sleep environment.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  <strong className='text-white'>
                    The App is not a medical device and does not provide any
                    medical diagnosis, treatment, or health advice.
                  </strong>{' '}
                  If you have sleep disorders or health concerns, please consult
                  a qualified physician. We make no guarantee regarding the
                  sleep-enhancing effect of the App.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  We will use reasonable efforts to keep the Service available,
                  but do not guarantee that it will be uninterrupted or
                  error-free. We reserve the right to add, adjust, or
                  discontinue any part or all of the features (free or paid) at
                  any time, and will notify you in advance or promptly through
                  reasonable means.
                </li>
              </ol>
            </section>

            {/* 3. Account and Sign-In */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                3. Account and Sign-In
              </h2>
              <ol className='space-y-4 list-decimal pl-6'>
                <li className='text-gray-300 leading-relaxed'>
                  The App provides account services through{' '}
                  <strong className='text-white'>Sign in with Apple</strong>;
                  sign-in is also subject to Apple&apos;s applicable terms.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  You are responsible for ensuring the authenticity and legality
                  of your sign-in identity, and for all activity under your
                  account. You bear any losses caused by your failure to
                  safeguard your account.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  You may not transfer, lend, or share your account with others
                  for commercial purposes.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  If you believe your account has been compromised or is at
                  risk, contact us immediately.
                </li>
              </ol>
            </section>

            {/* 4. AI Audio Generation */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                4. AI Audio Generation
              </h2>
              <ol className='space-y-4 list-decimal pl-6'>
                <li className='text-gray-300 leading-relaxed'>
                  <strong className='text-white'>Nature of the feature:</strong>{' '}
                  AI audio is generated automatically by a machine model based
                  on your text prompt, and the results are somewhat random. We
                  do not guarantee that the generated content will meet your
                  expectations, and make no express or implied warranty as to
                  the availability, accuracy, completeness, or artistic quality
                  of the results.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  <strong className='text-white'>Usage allowance:</strong>
                  <ul className='mt-2 space-y-2 list-disc pl-6'>
                    <li>
                      Subscribers receive a monthly allocation of AI audio
                      generations (currently{' '}
                      <strong className='text-white'>5 per month</strong>), as
                      displayed in the App;
                    </li>
                    <li>
                      The monthly allowance is calculated by calendar month;
                      unused allowance does not carry over.
                    </li>
                  </ul>
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  <strong className='text-white'>
                    Input content standards:
                  </strong>{' '}
                  You agree not to use this feature to generate content that
                  violates applicable law or public morality, including but not
                  limited to content involving violence, terrorism,
                  discrimination, infringement of others&apos; intellectual
                  property or personal rights, defamation, pornography, or false
                  information. We may, without further notice, refuse to
                  generate, delete, or restrict features in response to
                  violations.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  <strong className='text-white'>
                    Use of generated content:
                  </strong>{' '}
                  AI-generated content is for your personal, non-commercial use
                  only (unless you have obtained the relevant authorization).
                  You are responsible for ensuring that your use of generated
                  content does not infringe any third-party rights; you bear any
                  disputes and liabilities arising from your use of the
                  generated content.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  <strong className='text-white'>
                    Storage of generated content:
                  </strong>{' '}
                  Generated audio files are stored in the cloud; we may clean
                  them up after a long period of inactivity or after account
                  deletion, so please save important content promptly. We are
                  not liable for any interruption or loss of the storage
                  service.
                </li>
              </ol>
            </section>

            {/* 5. Subscriptions and Auto-Renewal */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                5. Subscriptions and Auto-Renewal{' '}
                <span className='text-base font-normal text-amber-300'>
                  (Important)
                </span>
              </h2>
              <ol className='space-y-4 list-decimal pl-6'>
                <li className='text-gray-300 leading-relaxed'>
                  The App offers{' '}
                  <strong className='text-white'>
                    auto-renewing subscriptions
                  </strong>
                  ; the specific tiers, prices, and entitlements are as
                  displayed on the in-app purchase page (Apple App Store).
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  <strong className='text-white'>Auto-renewal rules:</strong>
                  <ul className='mt-2 space-y-2 list-disc pl-6'>
                    <li>
                      Subscriptions are completed through the Apple App Store,
                      and payment is collected by Apple on our behalf;
                    </li>
                    <li>
                      Within 24 hours before your subscription expires, unless
                      you manually turn off auto-renewal, Apple will
                      automatically charge your Apple ID account for the next
                      period, and the subscription will be extended by one
                      period;
                    </li>
                    <li>
                      To cancel auto-renewal, go to your iPhone{' '}
                      <strong>
                        Settings → [your Apple ID] → Subscriptions
                      </strong>{' '}
                      at least 24 hours before the current period ends and
                      manage or cancel it. After cancellation, the Service
                      remains active for the current period, and will not renew
                      after it expires;
                    </li>
                    <li>
                      <strong>
                        Charges already deducted are generally non-refundable,
                        except as required by law.
                      </strong>
                    </li>
                  </ul>
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  <strong className='text-white'>Restore Purchases:</strong>{' '}
                  After changing devices or reinstalling the App, you can use
                  &quot;Restore Purchases&quot; to restore your purchased
                  subscription entitlements.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  Management of subscriptions (refunds, downgrades, upgrades,
                  Family Sharing, etc.) is governed by Apple&apos;s applicable
                  terms and is ultimately decided by Apple. If you have a
                  billing dispute, you may contact Apple Support directly.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  Free trial rules (if any): If you subscribe during a free
                  trial, any unused trial period may be forfeited, subject to
                  Apple&apos;s rules.
                </li>
              </ol>
            </section>

            {/* 6. Intellectual Property */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                6. Intellectual Property
              </h2>
              <ol className='space-y-4 list-decimal pl-6'>
                <li className='text-gray-300 leading-relaxed'>
                  All content in the App — including software, interface, icons,
                  built-in sound effects (unless otherwise noted), copy, and
                  trademarks — is owned by us or the relevant rights holders and
                  is protected by applicable law.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  Without our written permission, you may not copy, modify,
                  distribute, rent, sell, reverse-engineer, or decompile any
                  part of the App, or use it for commercial purposes.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  Content you generate using the AI feature: To the extent
                  permitted by applicable law, you may use your generated audio
                  for personal, non-commercial purposes; for commercial use, you
                  must confirm and obtain the necessary authorizations yourself.
                  We do not claim ownership of your generated content, but you
                  understand that some jurisdictions impose limitations on the
                  copyrightability of purely AI-generated content.
                </li>
              </ol>
            </section>

            {/* 7. User Conduct */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                7. User Conduct
              </h2>
              <p className='text-gray-300 mb-4 leading-relaxed'>
                You agree not to:
              </p>
              <ol className='space-y-3 list-decimal pl-6'>
                <li className='text-gray-300 leading-relaxed'>
                  Endanger national security, disclose state secrets, or
                  undermine social stability in any way;
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  Infringe the lawful rights of others or us (including
                  intellectual property, personal rights, trade secrets, etc.);
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  Use the Service to engage in illegal or criminal activity,
                  fraud, harassment, or defamation;
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  Interfere with, disrupt, attack, or intrude upon the Service,
                  or use automated means (scripts, crawlers, etc.) for bulk
                  access;
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  Circumvent or break the Service&apos;s usage limits, payment
                  mechanisms, or security measures;
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  Redistribute the Service or its content commercially without
                  permission;
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  Otherwise violate applicable law, these Terms, or public
                  morality.
                </li>
              </ol>
              <p className='text-gray-300 mt-4 leading-relaxed'>
                We may respond to violations with warnings, feature
                restrictions, suspension or termination of the Service, or
                account bans, and reserve the right to pursue legal liability.
              </p>
            </section>

            {/* 8. User Content */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                8. User Content
              </h2>
              <ol className='space-y-4 list-decimal pl-6'>
                <li className='text-gray-300 leading-relaxed'>
                  You are solely responsible for the prompts you enter through
                  the AI feature and the content generated from them.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  You grant us a non-exclusive, royalty-free, worldwide license,
                  to the extent necessary to provide, maintain, and improve the
                  Service, to process, translate, transmit, store, and display
                  your input.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  You warrant that your input does not infringe any third-party
                  rights and complies with these Terms. You bear full
                  responsibility for any disputes arising from your input or
                  generated content and release us from liability.
                </li>
              </ol>
            </section>

            {/* 9. Changes, Suspension, and Termination */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                9. Changes, Suspension, and Termination of the Service
              </h2>
              <ol className='space-y-4 list-decimal pl-6'>
                <li className='text-gray-300 leading-relaxed'>
                  We may change, suspend, or terminate any part or all of the
                  Service due to business adjustments, technical upgrades, or
                  legal requirements, and will endeavor to notify you in
                  advance.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  If you materially breach these Terms, we may restrict,
                  suspend, or terminate the Service to you at any time and ban
                  your account.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  After the Service terminates, we have no obligation to retain
                  your data; please back it up in advance.
                </li>
              </ol>
            </section>

            {/* 10. Disclaimer and Limitation of Liability */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                10. Disclaimer and Limitation of Liability
              </h2>
              <ol className='space-y-4 list-decimal pl-6'>
                <li className='text-gray-300 leading-relaxed'>
                  The Service is provided{' '}
                  <strong className='text-white'>&quot;AS IS.&quot;</strong> To
                  the maximum extent permitted by applicable law, we{' '}
                  <strong className='text-white'>
                    make no express or implied warranties
                  </strong>
                  , including warranties of merchantability, fitness for a
                  particular purpose, or non-infringement.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  For any{' '}
                  <strong className='text-white'>
                    direct or indirect losses
                  </strong>{' '}
                  (including loss of profits, data loss, or business
                  interruption) arising from the use of, or inability to use,
                  the Service, generated content not meeting expectations, data
                  loss, or service interruption — to the extent permitted by
                  applicable law,{' '}
                  <strong className='text-white'>
                    our total liability is limited to the amount you actually
                    paid us (or that Apple collected on our behalf)
                  </strong>
                  , and we are not liable for any indirect or consequential
                  damages.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  Disputes between you and third parties (such as Apple,
                  ElevenLabs, Cloudflare) arising from their services shall be
                  resolved between you and that third party; we are not
                  responsible.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  The App is intended for lawful personal use such as sleep
                  assistance; you bear the consequences of any improper use.
                </li>
              </ol>
            </section>

            {/* 11. Governing Law and Dispute Resolution */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                11. Governing Law and Dispute Resolution
              </h2>
              <ol className='space-y-4 list-decimal pl-6'>
                <li className='text-gray-300 leading-relaxed'>
                  These Terms, and any dispute arising out of or relating to the
                  Service, shall be governed by the laws applicable at the
                  Operator&apos;s place of business, without regard to its
                  conflict-of-laws rules.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  The parties shall first attempt to resolve any dispute
                  amicably through negotiation. If negotiation fails, either
                  party may submit the dispute to the competent court at the
                  Operator&apos;s place of business.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  <strong className='text-white'>Consumer protection:</strong>{' '}
                  If you are a consumer and the mandatory consumer protection
                  laws of the country/region where you reside provide greater
                  rights than these Terms, those mandatory laws shall prevail to
                  that extent. Nothing in these Terms limits any non-waivable
                  consumer rights you may have.
                </li>
              </ol>
            </section>

            {/* 12. Miscellaneous */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                12. Miscellaneous
              </h2>
              <ol className='space-y-4 list-decimal pl-6'>
                <li className='text-gray-300 leading-relaxed'>
                  If any provision of these Terms is held to be invalid or
                  unenforceable, the remaining provisions remain in full force.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  Headings in these Terms are for convenience only and do not
                  affect interpretation.
                </li>
                <li className='text-gray-300 leading-relaxed'>
                  We reserve the right of final interpretation of these Terms.
                </li>
              </ol>
            </section>

            {/* Contact Us */}
            <section className='mb-12'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-[#6B78E8] pb-3'>
                Contact Us
              </h2>
              <p className='text-gray-300 mb-6 leading-relaxed'>
                If you have any questions about these Terms, please contact:
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
                  <strong className='text-white'>Operator:</strong>{' '}
                  <span className='ml-2'>TinyKit</span>
                </li>
              </ul>
            </section>

            {/* Footer */}
            <div className='text-center pt-8 border-t border-white/10'>
              <p className='text-gray-400 mb-2'>
                <strong>These Terms were last updated on:</strong> June 22,
                2026.
              </p>
              <p className='text-gray-500 italic'>
                Thank you for choosing SleepFlow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
