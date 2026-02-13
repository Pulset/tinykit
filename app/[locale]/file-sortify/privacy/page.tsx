'use client'

import { siteConfig } from '@/app/data/site-config'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-purple-100">File Sortify is committed to protecting your privacy</p>
          </div>

          <div className="p-8 md:p-12">
            {/* Summary Section */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">File Sortify's Core Privacy Commitments:</h3>
              <ul className="space-y-2">
                <li className="text-green-800">
                  <strong>No personal information collection</strong>
                </li>
                <li className="text-green-800">
                  <strong>All data stored locally</strong>
                </li>
                <li className="text-green-800">
                  <strong>File content protection</strong>
                </li>
                <li className="text-green-800">
                  <strong>Minimal network access</strong>
                </li>
                <li className="text-green-800">
                  <strong>User complete control over data</strong>
                </li>
              </ul>
            </div>

            {/* Data Collection & Usage */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                Data Collection & Usage
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                File Sortify is a macOS desktop application focused on local file management. We are committed to
                <span className="bg-yellow-100 px-2 py-1 rounded font-semibold">not collecting, storing, or transmitting any personal user information</span>.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Data We Do Not Collect:</h3>
              <ul className="space-y-3 mb-8">
                <li>
                  <strong className="text-gray-800">Personal Information:</strong>
                  <span className="text-gray-700 ml-2">We do not collect names, email addresses, phone numbers, or any other personal identification information</span>
                </li>
                <li>
                  <strong className="text-gray-800">User Behavior Data:</strong>
                  <span className="text-gray-700 ml-2">We do not record application usage habits, operation frequency, or usage time</span>
                </li>
                <li>
                  <strong className="text-gray-800">Device Information:</strong>
                  <span className="text-gray-700 ml-2">We do not collect device models, system versions, or other hardware information</span>
                </li>
                <li>
                  <strong className="text-gray-800">File Content:</strong>
                  <span className="text-gray-700 ml-2">We do not read, analyze, or transmit user file content</span>
                </li>
                <li>
                  <strong className="text-gray-800">Network Data:</strong>
                  <span className="text-gray-700 ml-2">We do not monitor user network activity or connections</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Local Data Storage</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                All data is stored locally on the user device and
                <span className="bg-yellow-100 px-2 py-1 rounded font-semibold">never uploaded to any servers</span>:
              </p>
              <ul className="space-y-2">
                <li className="text-gray-700">
                  <strong>Application Settings:</strong> Stored locally for configuration
                </li>
                <li className="text-gray-700">
                  <strong>File Organization History:</strong> Local records of file movements (maximum 500 records), used for undo functionality
                </li>
                <li className="text-gray-700">
                  <strong>Application Logs:</strong> Local runtime logs (maximum 1000 records)
                </li>
              </ul>
            </section>

            {/* File System Access */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                File System Access
              </h2>
              <p className="text-gray-700 mb-6">The application requires the following permissions to provide file organization services:</p>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Downloads Folder Access:</strong> Read and write access to user's Downloads folder
                </li>
                <li className="text-gray-700">
                  <strong>User-Selected File Access:</strong> Only processes files that users explicitly select for organization
                </li>
                <li className="text-gray-700">
                  <strong>System Notifications:</strong> Displays notifications when file organization is complete
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">File Processing Method</h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Extension-Based Only:</strong> The application categorizes files based only on file extensions, not analyzing file content
                </li>
                <li className="text-gray-700">
                  <strong>Metadata Protection:</strong> Does not read or process file metadata, creation times, or other attributes
                </li>
                <li className="text-gray-700">
                  <strong>Privacy Protection:</strong> File content remains completely private during processing
                </li>
              </ul>
            </section>

            {/* Network Communication */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                Network Communication
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Minimal Network Access</h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Update Checks:</strong> Only checks for updates when new versions are available
                </li>
                <li className="text-gray-700">
                  <strong>No Data Transmission:</strong> No network data transmission beyond necessary update checks
                </li>
                <li className="text-gray-700">
                  <strong>Offline Operation:</strong> The application can function normally without network connection
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                Data Security
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Local Data Protection</h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Application Sandbox:</strong> The application runs in a macOS sandbox environment with limited system access
                </li>
                <li className="text-gray-700">
                  <strong>Data Integrity:</strong> Hash-based checksum verification for data integrity
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">No Cloud Storage</h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>No User Account System:</strong> No user registration or login required
                </li>
                <li className="text-gray-700">
                  <strong>No Cloud Sync:</strong> All data is stored locally only, not synchronized with the cloud
                </li>
                <li className="text-gray-700">
                  <strong>No Remote Backups:</strong> No remote backup creation or upload of user data
                </li>
              </ul>
            </section>

            {/* Third Party Services */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                Third Party Services
              </h2>
              <p className="text-gray-700 mb-6">File Sortify uses the following open-source frameworks and technologies:</p>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Tauri Framework:</strong> Application framework
                </li>
                <li className="text-gray-700">
                  <strong>React/TypeScript:</strong> User interface development
                </li>
                <li className="text-gray-700">
                  <strong>Zustand:</strong> State management
                </li>
                <li className="text-gray-700">
                  <strong>TailwindCSS:</strong> Styling design
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Third Party Privacy</h3>
              <p className="text-gray-700 leading-relaxed">
                All third-party libraries used are open-source software. We prioritize libraries with strong privacy
                protection characteristics when making our selections.
              </p>
            </section>

            {/* User Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                User Rights
              </h2>
              <p className="text-gray-700 mb-6">Under applicable privacy regulations, users have the following rights:</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Right to Data Access</h3>
              <p className="text-gray-700 mb-4">Users can access and export their local data at any time:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-6">
                <li className="text-gray-700">Settings and configuration files</li>
                <li className="text-gray-700">File organization history records</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Right to Data Deletion</h3>
              <p className="text-gray-700 mb-4">Users can delete local data by:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-6">
                <li className="text-gray-700">Uninstalling the application</li>
                <li className="text-gray-700">Manually deleting the configuration folder</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Right to Withdraw Consent</h3>
              <p className="text-gray-700 mb-4">Users can at any time:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li className="text-gray-700">Revoke file system access through System Preferences</li>
                <li className="text-gray-700">Disable file monitoring in application settings</li>
                <li className="text-gray-700">Uninstall the application to stop all data collection</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                Data Retention
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Local Data Retention Period</h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>File Organization History:</strong> Maximum 500 records
                </li>
                <li className="text-gray-700">
                  <strong>Application Logs:</strong> Maximum 1000 records
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Data Deletion Mechanism</h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Automatic Cleanup:</strong> History beyond limits is automatically deleted
                </li>
                <li className="text-gray-700">
                  <strong>User Control:</strong> Users can clear all local data at any time
                </li>
                <li className="text-gray-700">
                  <strong>Uninstall Cleanup:</strong> All related data is removed when uninstalling the application
                </li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                Children's Privacy Protection
              </h2>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Age Restrictions:</strong> This application is not specifically designed for children under 13
                </li>
                <li className="text-gray-700">
                  <strong>No Targeted Collection:</strong> We do not intentionally collect personal information from children under 13
                </li>
                <li className="text-gray-700">
                  <strong>Parental Control:</strong> Parents are encouraged to monitor minor children's usage
                </li>
              </ul>
            </section>

            {/* International Data Transfer */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                International Data Transfer
              </h2>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>No Data Transfer:</strong> All data is processed locally on user devices without international transmission
                </li>
                <li className="text-gray-700">
                  <strong>Local Operation:</strong> Application functionality does not depend on any geographically located data centers
                </li>
              </ul>
            </section>

            {/* Policy Updates */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                Policy Updates
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Notification Mechanism</h3>
              <p className="text-gray-700 mb-6">If significant changes occur in the privacy policy, we will:</p>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  Display notifications within the application
                </li>
                <li className="text-gray-700">
                  Update the privacy policy text within the application
                </li>
                <li className="text-gray-700">
                  Re-request user authorization when necessary
                </li>
              </ul>
              <p className="text-gray-700 mt-6">
                <strong>Effective Date:</strong> This privacy policy is effective from the date of publication.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-6">For any privacy-related questions or concerns, please contact us:</p>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Email:</strong>
                  <a href={`mailto:${siteConfig.email}`} className="text-purple-600 hover:text-purple-800 ml-2">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="text-gray-700">
                  <strong>In-app Feedback:</strong> Use the feedback function within the application
                </li>
              </ul>
            </section>

            {/* Compliance Statement */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-3">
                Compliance Statement
              </h2>
              <p className="text-gray-700 mb-6">File Sortify complies with the following privacy regulations and standards:</p>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>GDPR:</strong> Complies with EU General Data Protection Regulation
                </li>
                <li className="text-gray-700">
                  <strong>CCPA:</strong> Complies with California Consumer Privacy Act
                </li>
                <li className="text-gray-700">
                  <strong>Apple App Store Guidelines:</strong> Complies with Apple App Store review guidelines
                </li>
              </ul>
            </section>

            {/* Final Summary */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Privacy Policy Summary</h3>
              <p className="text-green-700 mb-4"><strong>File Sortify's Core Privacy Commitments:</strong></p>
              <ul className="space-y-2">
                <li className="text-green-800">
                  <strong>No personal information collection</strong>
                </li>
                <li className="text-green-800">
                  <strong>All data stored locally</strong>
                </li>
                <li className="text-green-800">
                  <strong>File content protection</strong>
                </li>
                <li className="text-green-800">
                  <strong>Minimal network access</strong>
                </li>
                <li className="text-green-800">
                  <strong>User complete control over data</strong>
                </li>
              </ul>
            </div>

            {/* Footer */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-2">
                <strong>Last Updated:</strong> October 28, 2025
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Version:</strong> 1.0
              </p>
              <p className="text-gray-500 italic">
                This privacy policy is provided in English. For other language versions, please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}