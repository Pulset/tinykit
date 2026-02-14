import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - AI Hairstyle Studio',
  description:
    'Read the Terms of Service for AI Hairstyle Studio. Learn about your rights and responsibilities when using our AI-powered hairstyle try-on application.',
  keywords: [
    'terms of service',
    'user agreement',
    'legal terms',
    'AI hairstyle terms',
    'hairstyle app terms',
  ],
  openGraph: {
    title: 'Terms of Service - AI Hairstyle Studio',
    description:
      'Read the Terms of Service for AI Hairstyle Studio. Learn about your rights and responsibilities.',
    url: 'https://www.tinykit.app/ai-hairstyle-studio/terms',
    siteName: 'TinyKit',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.tinykit.app/ai-hairstyle-studio/terms',
  },
};

export default function TermsPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
        <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
          {/* Header */}
          <div className='bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 text-center'>
            <h1 className='text-4xl font-bold mb-2'>Terms of Service</h1>
            <p className='text-purple-100'>
              Please read these terms carefully before using AI Hairstyle App
            </p>
          </div>

          <div className='p-8 md:p-12'>
            {/* Document Info */}
            <div className='bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded'>
              <p className='text-blue-800'>
                <strong>Last Updated:</strong> December 27, 2025
              </p>
            </div>

            {/* 1. Acceptance of Terms */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                1. Acceptance of Terms
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                Welcome to AI Hairstyle App (the &quot;App&quot;). Please read
                this Terms of Service agreement (the &quot;Agreement&quot;)
                carefully before downloading, installing, or using the App. By
                using the App, you agree to be bound by all terms and conditions
                of this Agreement. If you do not agree to any part of this
                Agreement, do not use the App.
              </p>
            </section>

            {/* 2. Service Description */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                2. Service Description
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                AI Hairstyle App is an AI-powered hairstyle try-on application.
                The main features of the App include:
              </p>
              <ul className='space-y-3 ml-6'>
                <li className='text-gray-700'>
                  <span className='font-semibold text-gray-800'>
                    • Upload user photos
                  </span>{' '}
                  for hairstyle try-on
                </li>
                <li className='text-gray-700'>
                  <span className='font-semibold text-gray-800'>
                    • Select different hairstyles
                  </span>{' '}
                  and hair colors
                </li>
                <li className='text-gray-700'>
                  <span className='font-semibold text-gray-800'>
                    • Generate composite images
                  </span>{' '}
                  using AI technology
                </li>
                <li className='text-gray-700'>
                  <span className='font-semibold text-gray-800'>
                    • Provide credit recharge services
                  </span>
                </li>
                <li className='text-gray-700'>
                  <span className='font-semibold text-gray-800'>
                    • Save and share
                  </span>{' '}
                  generated images
                </li>
              </ul>
            </section>

            {/* 3. User Accounts */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                3. User Accounts
              </h2>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                3.1 Account Registration
              </h3>
              <ul className='space-y-3 mb-8'>
                <li className='text-gray-700'>
                  <strong className='text-gray-800'>
                    Registration Methods:
                  </strong>{' '}
                  You can register an account through Apple ID, Google ID, or
                  other third-party authentication methods.
                </li>
                <li className='text-gray-700'>
                  <strong className='text-gray-800'>Account Security:</strong>{' '}
                  You are responsible for maintaining the accuracy and security
                  of your account information.
                </li>
                <li className='text-gray-700'>
                  <strong className='text-gray-800'>No Sharing:</strong> You
                  must not share your account or password with others.
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                3.2 Account Responsibility
              </h3>
              <ul className='space-y-3'>
                <li className='text-gray-700'>
                  <strong className='text-gray-800'>
                    Activity Responsibility:
                  </strong>{' '}
                  You are responsible for all activities that occur under your
                  account.
                </li>
                <li className='text-gray-700'>
                  <strong className='text-gray-800'>
                    Unauthorized Access:
                  </strong>{' '}
                  If you discover any unauthorized use of your account, please
                  notify us immediately.
                </li>
              </ul>
            </section>

            {/* 4. User Conduct */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                4. User Conduct
              </h2>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                4.1 Content Upload Restrictions
              </h3>
              <p className='text-gray-700 mb-4'>
                When using the App, you agree not to upload any content that is:
              </p>
              <ul className='space-y-3 mb-8'>
                <li className='text-gray-700'>
                  <span className='font-semibold text-gray-800'>
                    • Illegal or harmful
                  </span>{' '}
                  - Any content that is illegal, harmful, threatening, abusive,
                  harassing, defamatory, vulgar, obscene, or otherwise
                  objectionable
                </li>
                <li className='text-gray-700'>
                  <span className='font-semibold text-gray-800'>
                    • Infringing
                  </span>{' '}
                  - Any photos or content that infringe upon others&apos;
                  intellectual property rights, privacy rights, or other rights
                </li>
                <li className='text-gray-700'>
                  <span className='font-semibold text-gray-800'>
                    • Malicious
                  </span>{' '}
                  - Any files containing viruses, malicious code, or other
                  harmful components
                </li>
                <li className='text-gray-700'>
                  <span className='font-semibold text-gray-800'>
                    • Unauthorized
                  </span>{' '}
                  - Any photos of others without their explicit consent
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                4.2 Usage Restrictions
              </h3>
              <p className='text-gray-700 mb-4'>You agree not to:</p>
              <ul className='space-y-3'>
                <li className='text-gray-700'>
                  <span className='font-semibold text-gray-800'>
                    • Use the App for any illegal purpose
                  </span>
                </li>
                <li className='text-gray-700'>
                  <span className='font-semibold text-gray-800'>
                    • Attempt to hack, reverse engineer
                  </span>{' '}
                  or otherwise interfere with the normal operation of the App
                </li>
                <li className='text-gray-700'>
                  <span className='font-semibold text-gray-800'>
                    • Use automated tools
                  </span>{' '}
                  (such as bots, spiders, or crawlers) to access the App
                </li>
                <li className='text-gray-700'>
                  <span className='font-semibold text-gray-800'>
                    • Impersonate any person or entity
                  </span>{' '}
                  or misrepresent your affiliation with any person or entity
                </li>
              </ul>
            </section>

            {/* 5. Intellectual Property */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                5. Intellectual Property
              </h2>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                5.1 App Ownership
              </h3>
              <ul className='space-y-3 mb-8'>
                <li className='text-gray-700'>
                  <strong>Ownership:</strong> The App and all its content,
                  features, and functionality are owned by us or our licensors.
                </li>
                <li className='text-gray-700'>
                  <strong>Protection:</strong> The App is protected by
                  copyright, trademark, and other intellectual property laws.
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                5.2 User Content
              </h3>
              <ul className='space-y-3 mb-8'>
                <li className='text-gray-700'>
                  <strong>Your Ownership:</strong> You retain ownership of the
                  photos and content you upload to the App.
                </li>
                <li className='text-gray-700'>
                  <strong>Limited License:</strong> By uploading content, you
                  grant us the right to use, modify, display, and distribute
                  such content solely for the purpose of providing the App
                  services.
                </li>
                <li className='text-gray-700'>
                  <strong>Your Warranty:</strong> You declare that you own all
                  rights to the uploaded content or have obtained all necessary
                  permissions and consents.
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                5.3 Generated Content
              </h3>
              <ul className='space-y-3'>
                <li className='text-gray-700'>
                  <strong>Personal Use Only:</strong> AI-generated hairstyle
                  images are for personal use and entertainment only.
                </li>
                <li className='text-gray-700'>
                  <strong>No Commercial Use:</strong> You must not use generated
                  images for commercial purposes.
                </li>
                <li className='text-gray-700'>
                  <strong>No Guarantee:</strong> We make no guarantees regarding
                  the accuracy or quality of generated content.
                </li>
              </ul>
            </section>

            {/* 6. Credit System and Payment */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                6. Credit System and Payment
              </h2>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                6.1 Credit Rules
              </h3>
              <ul className='space-y-3 mb-8'>
                <li className='text-gray-700'>
                  <strong>Credit System:</strong> The App uses a credit system,
                  and each hairstyle generation consumes a certain amount of
                  credits.
                </li>
                <li className='text-gray-700'>
                  <strong>Purchase:</strong> Credits can be obtained through
                  in-app purchases.
                </li>
                <li className='text-gray-700'>
                  <strong>Non-Refundable:</strong> Credits are non-refundable
                  once purchased (except as required by applicable law).
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                6.2 Pricing and Payment
              </h3>
              <ul className='space-y-3 mb-8'>
                <li className='text-gray-700'>
                  <strong>Transparent Pricing:</strong> Credit prices are
                  clearly displayed within the App.
                </li>
                <li className='text-gray-700'>
                  <strong>Secure Payment:</strong> Payments are processed
                  through Apple App Store or Google Play Store payment systems.
                </li>
                <li className='text-gray-700'>
                  <strong>No Data Storage:</strong> We do not store your payment
                  information.
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                6.3 Consumption Policy
              </h3>
              <ul className='space-y-3'>
                <li className='text-gray-700'>
                  <strong>Cost Per Generation:</strong> Each hairstyle
                  generation consumes 10 credits.
                </li>
                <li className='text-gray-700'>
                  <strong>Insufficient Balance:</strong> When your credit
                  balance is insufficient, you must purchase more credits to
                  continue using the service.
                </li>
              </ul>
            </section>

            {/* 7. Privacy Protection */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                7. Privacy Protection
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                We take your privacy seriously. For information on how we
                collect, use, and protect your personal information, please
                refer to our{' '}
                <Link
                  href='/ai-hairstyle-studio/privacy'
                  className='text-purple-600 hover:text-purple-800 font-semibold underline'
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            {/* 8. Disclaimer */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                8. Disclaimer
              </h2>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                8.1 Service &quot;As Is&quot;
              </h3>
              <ul className='space-y-3 mb-8'>
                <li className='text-gray-700'>
                  The service is provided on an &quot;AS IS&quot; and &quot;AS
                  AVAILABLE&quot; basis without any warranties of any kind,
                  either express or implied.
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                8.2 AI Generated Content
              </h3>
              <ul className='space-y-3 mb-8'>
                <li className='text-gray-700'>
                  <strong>Reference Only:</strong> AI-generated images are for
                  reference and entertainment purposes only.
                </li>
                <li className='text-gray-700'>
                  <strong>No Guarantee:</strong> We do not guarantee that
                  generated results will perfectly match actual results.
                </li>
                <li className='text-gray-700'>
                  <strong>Not for Decisions:</strong> Generated results should
                  not be used as the sole basis for any decisions (such as
                  haircuts or hair coloring).
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                8.3 Service Interruption
              </h3>
              <ul className='space-y-3'>
                <li className='text-gray-700'>
                  We do not guarantee that the service will be uninterrupted,
                  timely, secure, or error-free.
                </li>
              </ul>
            </section>

            {/* 9. Limitation of Liability */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                9. Limitation of Liability
              </h2>
              <div className='bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg'>
                <p className='text-gray-700 leading-relaxed'>
                  To the maximum extent permitted by law, we shall not be liable
                  for any indirect, incidental, special, consequential, or
                  punitive damages (including but not limited to loss of
                  profits, data loss, loss of goodwill, or other intangible
                  losses) resulting from or related to the use of or inability
                  to use the App.
                </p>
              </div>
            </section>

            {/* 10. Indemnification */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                10. Indemnification
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                You agree to indemnify and hold harmless the Company and its
                subsidiaries, affiliates, officers, agents, and employees from
                any claim, damage, liability, loss, cost, and expense (including
                reasonable attorneys&apos; fees) arising from or related to your
                use of the App, your violation of this Agreement, or your
                violation of any third-party rights.
              </p>
            </section>

            {/* 11. Agreement Changes */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                11. Agreement Changes
              </h2>
              <ul className='space-y-3'>
                <li className='text-gray-700'>
                  <strong>Right to Modify:</strong> We reserve the right to
                  modify this Agreement at any time.
                </li>
                <li className='text-gray-700'>
                  <strong>Notification:</strong> Modified agreements will be
                  published within the App.
                </li>
                <li className='text-gray-700'>
                  <strong>Acceptance:</strong> Your continued use of the App
                  after any modification constitutes your acceptance of the
                  modified Agreement.
                </li>
              </ul>
            </section>

            {/* 12. Termination */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                12. Termination
              </h2>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                12.1 Termination Rights
              </h3>
              <ul className='space-y-3 mb-8'>
                <li className='text-gray-700'>
                  We reserve the right to suspend or terminate your account and
                  access to the App for any reason, including but not limited to
                  violation of this Agreement.
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                12.2 User Termination
              </h3>
              <ul className='space-y-3'>
                <li className='text-gray-700'>
                  You may stop using the App and delete your account at any
                  time.
                </li>
              </ul>
            </section>

            {/* 13. Governing Law */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                13. Governing Law
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                This Agreement shall be governed by and construed in accordance
                with the laws of the People&apos;s Republic of China (excluding
                its conflict of law principles).
              </p>
            </section>

            {/* 14. Dispute Resolution */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                14. Dispute Resolution
              </h2>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                14.1 Negotiated Resolution
              </h3>
              <ul className='space-y-3 mb-8'>
                <li className='text-gray-700'>
                  Any dispute arising from this Agreement shall first be
                  resolved through friendly negotiation between both parties.
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                14.2 Jurisdiction
              </h3>
              <ul className='space-y-3'>
                <li className='text-gray-700'>
                  If negotiation fails, either party may bring a lawsuit to a
                  competent people&apos;s court at our location.
                </li>
              </ul>
            </section>

            {/* 15. Miscellaneous */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                15. Miscellaneous
              </h2>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                15.1 Entire Agreement
              </h3>
              <ul className='space-y-3 mb-8'>
                <li className='text-gray-700'>
                  This Agreement constitutes the entire agreement between you
                  and the Company regarding the use of the App.
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                15.2 Severability
              </h3>
              <ul className='space-y-3 mb-8'>
                <li className='text-gray-700'>
                  If any provision of this Agreement is deemed invalid or
                  unenforceable, that provision shall be deemed severable and
                  shall not affect the validity and enforceability of the
                  remaining provisions.
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                15.3 No Waiver
              </h3>
              <ul className='space-y-3'>
                <li className='text-gray-700'>
                  Our failure to enforce any right or provision of this
                  Agreement shall not constitute a waiver of such right or
                  provision.
                </li>
              </ul>
            </section>

            {/* 16. Contact Information */}
            <section className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3'>
                16. Contact Us
              </h2>
              <p className='text-gray-700 mb-6'>
                If you have any questions or suggestions about this Agreement,
                please contact us:
              </p>
              <ul className='space-y-3'>
                <li className='text-gray-700'>
                  <strong>Email:</strong>
                  <a
                    href='mailto:support@tinykit.app'
                    className='text-purple-600 hover:text-purple-800 ml-2'
                  >
                    support@tinykit.app
                  </a>
                </li>
                <li className='text-gray-700'>
                  <strong>In-App Feedback:</strong> Use the in-app feedback
                  feature to reach us directly.
                </li>
              </ul>
            </section>

            {/* Footer */}
            <div className='text-center pt-8 border-t border-gray-200'>
              <p className='text-gray-600 mb-2'>
                <strong>Last Updated:</strong> December 27, 2025
              </p>
              <p className='text-gray-600 mb-2'>
                <strong>Version:</strong> 1.0
              </p>
              <p className='text-gray-500 italic'>
                Thank you for using AI Hairstyle App. By using our service, you
                agree to these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
