'use client'

import { siteConfig } from '@/app/data/site-config'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-purple-100">AI Hairstyle Studio is committed to protecting your privacy</p>
          </div>

          <div className="p-8 md:p-12">
            {/* Summary Section */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">AI Hairstyle Studio's Core Privacy Commitments:</h3>
              <ul className="space-y-2">
                <li className="text-green-800">
                  <strong>Secure photo processing</strong>
                </li>
                <li className="text-green-800">
                  <strong>Transparent data usage</strong>
                </li>
                <li className="text-green-800">
                  <strong>User control over data</strong>
                </li>
                <li className="text-green-800">
                  <strong>Compliance with privacy laws</strong>
                </li>
              </ul>
            </div>

            {/* Document Info */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
              <p className="text-blue-800">
                <strong>Effective Date:</strong> December 18, 2025 |
                <strong> Last Updated:</strong> December 18, 2025
              </p>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                1. Introduction
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Welcome to AI Hairstyle Studio, an AI-powered mobile application that allows users to try on different hairstyles and colors using their photos. This Privacy Policy explains how we collect, use, store, share, and protect your personal information when you use our mobile application ("App").
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                AI Hairstyle Studio is committed to protecting your privacy and ensuring the security of your personal data. This policy applies to all users of the AI Hairstyle Studio mobile application, regardless of the platform used to access the service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By downloading, installing, or using AI Hairstyle Studio, you agree to the collection and use of your information as described in this Privacy Policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2.1 Personal Information You Provide</h3>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">
                  <strong className="text-gray-800">Email Address:</strong>
                  <span className="text-gray-700 ml-2">When you create an account or use email-based authentication, we collect your email address for account verification, communication, and service delivery.</span>
                </li>
                <li className="text-gray-700">
                  <strong className="text-gray-800">Profile Information:</strong>
                  <span className="text-gray-700 ml-2">You may optionally provide your name for your user profile.</span>
                </li>
                <li className="text-gray-700">
                  <strong className="text-gray-800">Verification Codes:</strong>
                  <span className="text-gray-700 ml-2">We collect verification codes sent to your email during the authentication process.</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2.2 Photos and Image Data</h3>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">
                  <strong className="text-gray-800">User Photos:</strong>
                  <span className="text-gray-700 ml-2">When you use the app to try on hairstyles, we collect the photos you upload or capture through your device's camera.</span>
                </li>
                <li className="text-gray-700">
                  <strong className="text-gray-800">Generated Images:</strong>
                  <span className="text-gray-700 ml-2">We store the AI-generated hairstyle images created based on your uploaded photos.</span>
                </li>
                <li className="text-gray-700">
                  <strong className="text-gray-800">Image Metadata:</strong>
                  <span className="text-gray-700 ml-2">We may collect basic metadata associated with your images, such as creation date and dimensions.</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2.3 Usage and Service Data</h3>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">
                  <strong className="text-gray-800">Generation History:</strong>
                  <span className="text-gray-700 ml-2">We maintain a history of your hairstyle generations, including the original images, selected styles and colors, and generated results.</span>
                </li>
                <li className="text-gray-700">
                  <strong className="text-gray-800">Credit Information:</strong>
                  <span className="text-gray-700 ml-2">We track your credit balance and transaction history for service usage.</span>
                </li>
                <li className="text-gray-700">
                  <strong className="text-gray-800">User Statistics:</strong>
                  <span className="text-gray-700 ml-2">We collect anonymous usage statistics such as total number of generations and monthly usage patterns.</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2.4 Technical Data</h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong className="text-gray-800">Device Information:</strong>
                  <span className="text-gray-700 ml-2">We collect information about your device, including operating system version, device model, and unique device identifiers.</span>
                </li>
                <li className="text-gray-700">
                  <strong className="text-gray-800">App Usage Data:</strong>
                  <span className="text-gray-700 ml-2">We collect information about how you interact with the app, including features used, time spent in the app, and crash reports.</span>
                </li>
                <li className="text-gray-700">
                  <strong className="text-gray-800">Network Data:</strong>
                  <span className="text-gray-700 ml-2">We may collect IP address and network information for service delivery and security purposes.</span>
                </li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                3. How We Use Your Information
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3.1 Service Provision</h3>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">
                  <strong>Hair Style Generation:</strong> We use your photos and selected parameters to generate AI-powered hairstyle simulations.
                </li>
                <li className="text-gray-700">
                  <strong>Account Management:</strong> We use your email and profile information to manage your account and provide personalized services.
                </li>
                <li className="text-gray-700">
                  <strong>Credit System:</strong> We track and manage your credits for service usage.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3.2 Communication</h3>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">
                  <strong>Service Notifications:</strong> We may send you notifications about your account, credit balance, and service updates.
                </li>
                <li className="text-gray-700">
                  <strong>Customer Support:</strong> We use your information to respond to your inquiries and provide technical support.
                </li>
                <li className="text-gray-700">
                  <strong>Transactional Communications:</strong> We send confirmations and receipts for credit purchases and other transactions.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3.3 Security and Compliance</h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Fraud Prevention:</strong> We monitor for suspicious activities to prevent fraud and abuse.
                </li>
                <li className="text-gray-700">
                  <strong>Legal Compliance:</strong> We use your information to comply with applicable laws and regulations.
                </li>
                <li className="text-gray-700">
                  <strong>Security Measures:</strong> We implement security measures to protect your data and our services.
                </li>
              </ul>
            </section>

            {/* Data Storage and Retention */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                4. Information Storage and Retention
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">4.1 Data Storage</h3>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">
                  <strong>Secure Storage:</strong> Your personal information is stored securely using industry-standard encryption and security measures.
                </li>
                <li className="text-gray-700">
                  <strong>Local Storage:</strong> Some user preferences and session data are stored locally on your device using AsyncStorage.
                </li>
                <li className="text-gray-700">
                  <strong>Secure Storage:</strong> Sensitive authentication data is stored using SecureStore on mobile devices.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">4.2 Data Retention</h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Account Information:</strong> We retain your account information while your account remains active.
                </li>
                <li className="text-gray-700">
                  <strong>Generation History:</strong> We store your hairstyle generation history according to your account settings and service tier.
                </li>
                <li className="text-gray-700">
                  <strong>Transaction Records:</strong> We retain credit transaction records for accounting and customer support purposes.
                </li>
                <li className="text-gray-700">
                  <strong>Legal Requirements:</strong> We may retain certain information longer than necessary to comply with legal obligations.
                </li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                5. Information Sharing and Disclosure
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">5.1 Third-Party Service Providers</h3>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">
                  <strong>AI Service Provider:</strong> We use Nano Banana API for AI-powered hairstyle generation services.
                </li>
                <li className="text-gray-700">
                  <strong>CDN Services:</strong> We use content delivery networks for efficient image storage and delivery.
                </li>
                <li className="text-gray-700">
                  <strong>Authentication Services:</strong> We use secure authentication services for user verification.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">5.2 Legal Requirements</h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Legal Compliance:</strong> We may disclose your information when required by law, court order, or government regulation.
                </li>
                <li className="text-gray-700">
                  <strong>Protection of Rights:</strong> We may share information to protect our rights, property, or safety, or that of our users.
                </li>
                <li className="text-gray-700">
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of the transaction.
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                6. Data Security
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">6.1 Security Measures</h3>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">
                  <strong>Encryption:</strong> We use encryption protocols to protect data in transit and at rest.
                </li>
                <li className="text-gray-700">
                  <strong>Access Controls:</strong> We implement strict access controls to limit access to personal information.
                </li>
                <li className="text-gray-700">
                  <strong>Secure Authentication:</strong> We use secure authentication methods including JWT tokens and multi-factor verification.
                </li>
                <li className="text-gray-700">
                  <strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">6.2 Data Breach Notification</h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Incident Response:</strong> We have procedures in place to respond to security incidents and data breaches.
                </li>
                <li className="text-gray-700">
                  <strong>Notification:</strong> In the event of a data breach, we will notify affected users and relevant authorities as required by law.
                </li>
                <li className="text-gray-700">
                  <strong>Remediation:</strong> We take immediate action to mitigate risks and prevent future incidents.
                </li>
              </ul>
            </section>

            {/* Your Rights and Choices */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                7. Your Rights and Choices
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">7.1 Access and Correction</h3>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">
                  <strong>Data Access:</strong> You can request access to the personal information we hold about you.
                </li>
                <li className="text-gray-700">
                  <strong>Correction Rights:</strong> You can request correction of inaccurate or incomplete personal information.
                </li>
                <li className="text-gray-700">
                  <strong>Account Settings:</strong> You can update your profile information and preferences through the app.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">7.2 Data Deletion</h3>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">
                  <strong>Account Deletion:</strong> You can request deletion of your account and all associated personal data.
                </li>
                <li className="text-gray-700">
                  <strong>Selective Deletion:</strong> You may request deletion of specific data or generation history while maintaining your account.
                </li>
                <li className="text-gray-700">
                  <strong>Right to be Forgotten:</strong> You have the right to request removal of your personal information under applicable data protection laws.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">7.3 Data Portability</h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Export Data:</strong> You can request a copy of your personal data in a machine-readable format.
                </li>
                <li className="text-gray-700">
                  <strong>Data Transfer:</strong> You have the right to transfer your data to other service providers.
                </li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                8. Children's Privacy
              </h2>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Age Requirement:</strong> AI Hairstyle Studio is not intended for children under the age of 13 (or applicable minimum age in your jurisdiction).
                </li>
                <li className="text-gray-700">
                  <strong>Parental Consent:</strong> We do not knowingly collect personal information from children under 13 without parental consent.
                </li>
                <li className="text-gray-700">
                  <strong>Data Deletion:</strong> If we become aware that we have collected information from a child under 13, we will delete it promptly.
                </li>
              </ul>
            </section>

            {/* App-Specific Permissions */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                13. App-Specific Permissions
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">13.1 Camera and Photo Library Access</h3>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">
                  <strong>Purpose:</strong> The app requires access to your camera and photo library to capture or select photos for hairstyle generation.
                </li>
                <li className="text-gray-700">
                  <strong>User Control:</strong> You can grant or deny these permissions through your device's settings.
                </li>
                <li className="text-gray-700">
                  <strong>Local Processing:</strong> Photos are processed locally when possible and transmitted securely to our servers for AI generation.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">13.2 Storage Permissions</h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Device Storage:</strong> The app may request storage permissions to save generated images and cache data for improved performance.
                </li>
                <li className="text-gray-700">
                  <strong>Secure Storage:</strong> Sensitive data is stored using secure storage mechanisms provided by the mobile operating system.
                </li>
              </ul>
            </section>

            {/* California Privacy Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                15. California Privacy Rights (CCPA)
              </h2>
              <p className="text-gray-700 mb-6">If you are a California resident, you have additional rights under the California Consumer Privacy Act:</p>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Right to Know:</strong> The right to know what personal information is collected, used, shared, or sold.
                </li>
                <li className="text-gray-700">
                  <strong>Right to Delete:</strong> The right to delete personal information collected from you.
                </li>
                <li className="text-gray-700">
                  <strong>Right to Opt-Out:</strong> The right to opt-out of the sale of your personal information.
                </li>
                <li className="text-gray-700">
                  <strong>Right to Non-Discrimination:</strong> The right not to receive discriminatory treatment for exercising your privacy rights.
                </li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                12. Contact Information
              </h2>
              <p className="text-gray-700 mb-6">If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:</p>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Email:</strong>
                  <a href="mailto:support@tinykit.app" className="text-purple-600 hover:text-purple-800 ml-2">
                    support@tinykit.app
                  </a>
                </li>
                <li className="text-gray-700">
                  <strong>App Name:</strong>
                  <span className="ml-2">AI Hairstyle Studio</span>
                </li>
                <li className="text-gray-700">
                  <strong>Developer:</strong>
                  <span className="ml-2">TinyKit</span>
                </li>
                <li className="text-gray-700">
                  <strong>Platform:</strong>
                  <span className="ml-2">iOS, Android</span>
                </li>
              </ul>
            </section>

            {/* Footer */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-2">
                <strong>Last Updated:</strong> December 18, 2025
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Version:</strong> 1.0
              </p>
              <p className="text-gray-500 italic">
                Thank you for trusting AI Hairstyle Studio with your personal information. We are committed to protecting your privacy and providing you with a secure and enjoyable experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}