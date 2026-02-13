'use client'

import { siteConfig } from '@/app/data/site-config'

export default function UserAgreementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 text-center">
            <h1 className="text-4xl font-bold mb-2">File Sortify Terms of Service</h1>
            <p className="text-purple-100">Effective Date: October 29, 2025 | Version: 1.0</p>
          </div>

          <div className="p-8 md:p-12">
            {/* Welcome Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg">
              <p className="text-blue-800">
                Welcome to File Sortify (hereinafter referred to as "the Application"). Please read these Terms of Service (hereinafter referred to as "these Terms") carefully before using the Application.
              </p>
            </div>

            {/* Section 1: Agreement Acceptance and Modification */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                1. Acceptance of Terms
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">1.1 Acceptance</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When you download, install, or use the Application, you indicate that you have fully read, understood, and agree to be bound by these Terms.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">1.2 Modifications</h3>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. The modified Terms will be published within the Application. If you do not agree with the modifications, please stop using the Application.
              </p>
            </section>

            {/* Section 2: Service Description */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                2. Service Description
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2.1 Service Content</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                File Sortify is an intelligent file organization tool with main features including:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700">
                  <strong>•</strong> Automatic file classification and organization
                </li>
                <li className="text-gray-700">
                  <strong>•</strong> Real-time folder monitoring
                </li>
                <li className="text-gray-700">
                  <strong>•</strong> Custom classification rules
                </li>
                <li className="text-gray-700">
                  <strong>•</strong> File operation history
                </li>
                <li className="text-gray-700">
                  <strong>•</strong> Statistics display
                </li>
                <li className="text-gray-700">
                  <strong>•</strong> <span className="bg-yellow-100 px-2 py-1 rounded font-semibold">Complete offline operation</span>: No network connection required
                </li>
                <li className="text-gray-700">
                  <strong>•</strong> <span className="bg-yellow-100 px-2 py-1 rounded font-semibold">Zero data upload</span>: All operations completed locally
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2.2 Service Scope</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This service is applicable to devices running macOS 10.13 and above.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2.3 Offline Features</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Application has the following offline features:
              </p>
              <ul className="space-y-2">
                <li className="text-gray-700">All features accessible without network connection</li>
                <li className="text-gray-700">No dependence on any online services</li>
                <li className="text-gray-700">No user registration or login required</li>
                <li className="text-gray-700">No concerns about network interruptions affecting usage</li>
              </ul>
            </section>

            {/* Section 3: User Rights and Obligations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                3. User Rights and Obligations
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3.1 User Rights</h3>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700">
                  <strong>•</strong> Enjoy complete feature services of the Application
                </li>
                <li className="text-gray-700">
                  <strong>•</strong> Receive technical support and customer service
                </li>
                <li className="text-gray-700">
                  <strong>•</strong> Install and use on personal devices
                </li>
                <li className="text-gray-700">
                  <strong>•</strong> Use on multiple personal devices (same Apple ID only)
                </li>
                <li className="text-gray-700">
                  <strong>•</strong> Rights to personal information: access, correction, and deletion
                </li>
                <li className="text-gray-700">
                  <strong>•</strong> Other rights provided by laws and regulations
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3.2 User Obligations</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">
                  <strong>•</strong> Comply with laws and regulations of your country/region; do not use the Application for illegal activities
                </li>
                <li className="text-gray-700">
                  <strong>•</strong> Do not decompile, reverse engineer, or crack the Application
                </li>
                <li className="text-gray-700">
                  <strong>•</strong> Do not distribute, share, or resell the Application or its components
                </li>
                <li className="text-gray-700">
                  <strong>•</strong> Assume all risks and responsibilities arising from using the Application
                </li>
                <li className="text-gray-700">
                  <strong>•</strong> Properly safeguard your Apple ID and purchase proof
                </li>
              </ul>
            </section>

            {/* Section 4: Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                4. Intellectual Property
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">4.1 Application Ownership</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The intellectual property rights of the Application (including but not limited to copyright, trademark rights, patent rights, etc.) belong to the developer.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">4.2 Usage License</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We grant you a non-transferable, non-exclusive license to use the Application for personal non-commercial purposes, subject to compliance with this Agreement.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">4.3 Prohibited Actions</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Without authorization, you must not:
              </p>
              <ul className="space-y-2">
                <li className="text-gray-700">Copy, modify, or distribute the Application</li>
                <li className="text-gray-700">Create derivative works of the Application</li>
                <li className="text-gray-700">Remove or modify copyright notices of the Application</li>
                <li className="text-gray-700">Use the Application for commercial purposes</li>
              </ul>
            </section>

            {/* Section 5: Purchase and License */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                5. Purchase and License
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">5.1 One-Time Purchase</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Application uses a one-time paid purchase model:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700">
                  <strong>Purchase Price:</strong> $9.99 (one-time payment)
                </li>
                <li className="text-gray-700">
                  <strong>Purchase Method:</strong> One-time payment through App Store
                </li>
                <li className="text-gray-700">
                  <strong>License Type:</strong> Permanent use license
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">5.2 User Benefits</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                After purchase, you enjoy:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700">Permanent use of all core features</li>
                <li className="text-gray-700">Unlimited file organization features</li>
                <li className="text-gray-700">Real-time folder monitoring</li>
                <li className="text-gray-700">Custom classification rules</li>
                <li className="text-gray-700">File operation history</li>
                <li className="text-gray-700">Statistics display</li>
                <li className="text-gray-700">In-app feature updates</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">5.3 Purchase Management</h3>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700">Application purchased and managed through App Store</li>
                <li className="text-gray-700">Refund policy follows Apple App Store standard application refund regulations</li>
                <li className="text-gray-700">Cross-device synchronization after purchase (using same Apple ID)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">5.4 Update Support</h3>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700">Permanent free feature updates after purchase</li>
                <li className="text-gray-700">Includes all new features, performance optimizations, and bug fixes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">5.5 Technical Support</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">Technical support provided via email</li>
                <li className="text-gray-700">Support response times may vary by time zone</li>
                <li className="text-gray-700">No guarantee that all issues can be resolved</li>
                <li className="text-gray-700">Only supports Application-related issues, does not provide file organization consulting services</li>
              </ul>
            </section>

            {/* Section 6: Disclaimer */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                6. Disclaimer
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">6.1 Service Disclaimer</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Application is provided on an "AS IS" basis. We assume no responsibility for:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700">Service interruptions, delays, or failures</li>
                <li className="text-gray-700">Data loss or damage (recommend users regularly backup important files)</li>
                <li className="text-gray-700">Losses caused by improper user operation</li>
                <li className="text-gray-700">File location changes caused by file organization errors</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">6.2 Data Security Statement</h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-lg">
                <ul className="space-y-2">
                  <li className="text-green-800">
                    <strong>•</strong> <strong>Complete offline operation:</strong> The Application runs completely locally, no network connection required
                  </li>
                  <li className="text-green-800">
                    <strong>•</strong> <strong>Zero data upload:</strong> The Application does not upload any user files to servers
                  </li>
                  <li className="text-green-800">
                    <strong>•</strong> <strong>Zero data collection:</strong> The Application does not collect, upload, or store any user data
                  </li>
                  <li className="text-green-800">
                    <strong>•</strong> <strong>Complete local processing:</strong> All file operations, configuration storage, and history records are completed locally on user devices
                  </li>
                  <li className="text-green-800">
                    <strong>•</strong> <strong>No third-party tracking:</strong> The Application contains no third-party analytics tools or tracking code
                  </li>
                  <li className="text-green-800">
                    <strong>•</strong> <strong>No remote communication:</strong> The Application does not communicate with any remote servers
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">6.3 Usage Risk Warning</h3>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700">Please backup important files before performing file operations with the Application</li>
                <li className="text-gray-700">Recommend testing custom rules on non-important folders first</li>
                <li className="text-gray-700">The Application provides file operation history with undo functionality</li>
                <li className="text-gray-700">Users bear final responsibility for file organization results</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">6.4 Limitation of Liability</h3>
              <p className="text-gray-700 leading-relaxed">
                Except as otherwise provided by laws and regulations, our liability for your direct losses does not exceed the Application purchase fee you paid.
              </p>
            </section>

            {/* Section 7: Privacy Protection */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                7. Privacy Protection
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">7.1 Privacy Commitment</h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-lg">
                <ul className="space-y-2">
                  <li className="text-green-800">
                    <strong>•</strong> The Application is a <strong>completely offline application</strong> that does not require network connection
                  </li>
                  <li className="text-green-800">
                    <strong>•</strong> We <strong>do not collect</strong> any user personal information
                  </li>
                  <li className="text-green-800">
                    <strong>•</strong> We <strong>do not upload</strong> any user data
                  </li>
                  <li className="text-green-800">
                    <strong>•</strong> We <strong>do not use</strong> any third-party analytics services or tracking tools
                  </li>
                  <li className="text-green-800">
                    <strong>•</strong> All user files and configuration information are <strong>completely stored on the local device</strong>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">7.2 Local Data Description</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Data stored locally by the Application only includes:
              </p>
              <ul className="space-y-2">
                <li className="text-gray-700">User application configuration and settings</li>
                <li className="text-gray-700">File classification rules</li>
                <li className="text-gray-700">File operation history (for undo functionality)</li>
                <li className="text-gray-700">Application usage statistics (local display only)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">7.3 Rights Statement</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Because the Application is completely offline and does not collect any data, user privacy receives <strong>maximum protection</strong>:
              </p>
              <ul className="space-y-2">
                <li className="text-gray-700">No data leakage risk (because no upload)</li>
                <li className="text-gray-700">No third-party data sharing (because no collection)</li>
                <li className="text-gray-700">No possibility of data misuse (because completely localized)</li>
                <li className="text-gray-700">Users have <strong>complete control</strong> over their data</li>
              </ul>
            </section>

            {/* Section 8: Breach of Contract Liability */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                8. Termination
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">8.1 Termination by You</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You may stop using the Application at any time.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">8.2 Termination by Us</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We reserve the right to suspend or terminate your access to the Application if you violate these Terms.
              </p>
              <ul className="space-y-2">
                <li className="text-gray-700">Suspend or terminate service</li>
                <li className="text-gray-700">Delete relevant data</li>
                <li className="text-gray-700">Pursue legal remedies according to law</li>
              </ul>
            </section>

            {/* Section 9: Dispute Resolution */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                9. Dispute Resolution
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">9.1 Applicable Law</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The conclusion, execution, and interpretation of this Agreement are governed by the following laws and regulations:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700">
                  <strong>China Mainland Users:</strong> Laws of the People's Republic of China
                </li>
                <li className="text-gray-700">
                  <strong>EU Region Users:</strong> Applicable EU laws, including GDPR
                </li>
                <li className="text-gray-700">
                  <strong>Other Region Users:</strong> Applicable laws of user's country/region and international commercial practices
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">9.2 Dispute Resolution</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Disputes arising from this Agreement should first be resolved through friendly consultation.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>China Mainland Users:</strong>
              </p>
              <ul className="space-y-2 mb-4 ml-6">
                <li className="text-gray-700">If consultation fails, either party may file a lawsuit with a competent people's court at the developer's location</li>
              </ul>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>EU and Other Region Users:</strong>
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-gray-700">Disputes shall be submitted to courts with jurisdiction at the developer's location</li>
                <li className="text-gray-700">Applicable relevant international commercial arbitration rules (if applicable)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">9.3 Legal Application Priority</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">App Store Terms and Conditions (Apple Service Terms)</li>
                <li className="text-gray-700">This Agreement</li>
                <li className="text-gray-700">Applicable country/region consumer protection laws</li>
                <li className="text-gray-700">International relevant commercial practices</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">9.4 Data Cross-Border Transfer Statement</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                <p className="text-yellow-800">
                  <strong>Important Statement:</strong> Because the Application operates completely offline and does not involve any data cross-border transfer. All data is stored on user's local device, and there is no situation of data leaving the country.
                </p>
              </div>
            </section>

            {/* Section 10: Other Terms */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                10. General Terms
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">10.1 Entire Agreement</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                These Terms constitute the entire agreement between you and us regarding the Application, superseding all prior agreements and understandings.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">10.2 Notices</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We may send you notices through in-app announcements, email, or other means. Such notices are deemed effective upon delivery.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">10.3 Severability</h3>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
              </p>
            </section>

            {/* Section 11: Contact Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                11. Contact Us
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="space-y-2">
                <li className="text-gray-700">
                  <strong>Email:</strong>
                  <a href={`mailto:${siteConfig.email}`} className="text-purple-600 hover:text-purple-800 ml-2">
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </section>

            {/* Section 12: Privacy Rights Special Statement */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                12. Your Privacy Rights
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Although the Application is completely offline and does not collect data, we respect your legal rights:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">12.1 California Residents (CCPA)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Because the Application does not collect any personal information, CCPA rights regarding data selling and disclosure do not apply. However, if future changes lead to data collection, California residents will have:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700">Right to know what personal information is collected</li>
                <li className="text-gray-700">Right to know whether personal information is sold or disclosed</li>
                <li className="text-gray-700">Right to opt out of personal information sale</li>
                <li className="text-gray-700">Right to request deletion of personal information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">12.2 EU Residents (GDPR)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Because the Application does not process any personal data, most GDPR rights do not apply. However, you still have the following rights:
              </p>
              <ul className="space-y-2">
                <li className="text-gray-700">
                  <strong>Data access:</strong> You can access locally stored configuration data at any time
                </li>
                <li className="text-gray-700">
                  <strong>Data deletion:</strong> You can delete all local data by uninstalling the Application or clearing application data
                </li>
                <li className="text-gray-700">
                  <strong>Data portability:</strong> You can export personal configuration data if an export function is provided
                </li>
              </ul>
            </section>

            {/* Closing Statement */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-6 mb-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">
                Thank You for Choosing File Sortify!
              </h3>
              <p className="text-purple-700 italic">
                This Agreement was last updated on October 29, 2025
              </p>
            </div>

            {/* Footer */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-2">
                <strong>Last Updated:</strong> October 29, 2025
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Version:</strong> 1.0
              </p>
              <p className="text-gray-500 italic">
                These Terms of Service are provided in English. For other language versions, please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
