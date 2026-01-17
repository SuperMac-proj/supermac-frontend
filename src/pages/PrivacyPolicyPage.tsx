import { motion } from 'framer-motion';
import { Section } from '../components/common';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <Section className="bg-black">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-lg">Last updated: January 12, 2025</p>
          </div>

          {/* Main Content Container */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 sm:p-12 md:p-16">
            {/* Introduction */}
            <div className="mb-16 pb-16 border-b border-gray-800/50">
              <p className="text-gray-300 leading-loose text-xl">
                This Privacy Policy explains how Mople, a sole proprietorship ("Company", "we", "us", or "our"), collects, uses, stores, and protects personal information when you use SuperMac, a macOS-only desktop application (the "Service").
              </p>
              <p className="text-gray-300 leading-loose text-xl mt-6">
                By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-16">
              {/* Section 1 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">1.</span>
                  Data Controller
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  Mople acts as the data controller for all personal data processed under this Privacy Policy.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 2 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">2.</span>
                  Information We Collect
                </h2>

                <h3 className="text-2xl font-semibold text-white mt-8 mb-4">2.1 Information You Provide</h3>
                <p className="text-gray-300 leading-loose text-lg mb-4">
                  We collect only the minimum personal information necessary to provide the Service, including:
                </p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">Email address (used for account identification and authentication)</li>
                  <li className="leading-loose">Authentication information provided by third-party login providers (Google, GitHub, and Apple)</li>
                </ul>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  We do not collect passwords, payment card information, real names, physical addresses, or any other unnecessary personal data.
                </p>

                <h3 className="text-2xl font-semibold text-white mt-8 mb-4">2.2 Automatically Collected Information</h3>
                <p className="text-gray-300 leading-loose text-lg mb-4">
                  When you use the Service, we may automatically collect limited, non-identifying information, including:
                </p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">Basic usage and diagnostic data</li>
                  <li className="leading-loose">Application version and macOS operating system information</li>
                </ul>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  This information is used solely to maintain service stability and improve performance.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 3 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">3.</span>
                  Legal Basis for Processing (GDPR)
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-4">
                  We process personal data based on the following legal grounds:
                </p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">Performance of a contract (to provide and operate the Service)</li>
                  <li className="leading-loose">User consent, where applicable</li>
                </ul>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 4 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">4.</span>
                  Authentication and Third-Party Services
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-4">
                  The Service supports authentication through the following third-party providers:
                </p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">Google Login</li>
                  <li className="leading-loose">GitHub Login</li>
                  <li className="leading-loose">Sign in with Apple</li>
                </ul>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  Authentication is handled directly by these providers. We receive only limited account information, such as your email address, in accordance with each provider's privacy policy.
                </p>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  The Service uses Supabase as its backend infrastructure provider for authentication and data storage. Supabase processes personal data solely on our behalf and does not use it for its own independent purposes.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 5 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">5.</span>
                  Free Trial, Account Deletion, and Data Retention
                </h2>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="leading-loose">The Service offers a 7-day free trial period.</li>
                  <li className="leading-loose">
                    If a user deletes their account during or after the free trial period, certain account-related information may be retained for up to 30 days for fraud prevention and service management purposes.
                  </li>
                </ul>
                <p className="text-gray-300 leading-loose text-lg mt-6 mb-4">During this retention period:</p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">Any remaining free trial eligibility is preserved</li>
                  <li className="leading-loose">Retained data is stored in a de-identified form</li>
                  <li className="leading-loose">The user's email address is not stored in plain text</li>
                </ul>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  If the user re-registers, a non-reversible hashed value generated from the email address is used solely to determine remaining free trial eligibility. This hashed value cannot be used to directly identify the user.
                </p>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  After the 30-day retention period, all retained information is permanently deleted or irreversibly anonymized.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 6 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">6.</span>
                  Use of Information
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-4">
                  We use personal information solely for the following purposes:
                </p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">Providing and operating the Service</li>
                  <li className="leading-loose">Authenticating users and managing accounts</li>
                  <li className="leading-loose">Managing free trial eligibility</li>
                  <li className="leading-loose">Improving service performance and user experience</li>
                  <li className="leading-loose">Complying with applicable laws and regulations</li>
                </ul>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  We do not sell, rent, or trade personal information to third parties.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 7 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">7.</span>
                  Payments
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  Payments for paid features are processed by Paddle, a third-party payment provider acting as Merchant of Record.
                </p>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  We do not collect or store payment card details or billing information. All payment-related data is handled directly by Paddle in accordance with its own privacy policy.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 8 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">8.</span>
                  International Data Transfers
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  Personal data may be processed and stored on servers operated by Supabase, which may be located outside the user's country of residence.
                </p>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  Any international data transfers are conducted in accordance with applicable data protection laws and appropriate safeguards.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 9 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">9.</span>
                  Data Security
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  We implement reasonable technical and organizational measures to protect personal information against unauthorized access, loss, or misuse.
                </p>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  However, no method of electronic storage or transmission is completely secure, and absolute security cannot be guaranteed.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 10 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">10.</span>
                  Children's Privacy
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  The Service is not intended for children and does not target individuals under the age required to provide valid consent under applicable laws.
                </p>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  We do not knowingly collect personal information from children.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 11 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">11.</span>
                  Your Rights
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-6">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="leading-loose">
                    <strong className="text-white">Right of Access:</strong> Request access to your personal data
                  </li>
                  <li className="leading-loose">
                    <strong className="text-white">Right to Rectification:</strong> Request correction of inaccurate personal data
                  </li>
                  <li className="leading-loose">
                    <strong className="text-white">Right to Erasure:</strong> Request deletion of your personal data
                  </li>
                  <li className="leading-loose">
                    <strong className="text-white">Right to Restriction:</strong> Request restriction of processing of your personal data
                  </li>
                  <li className="leading-loose">
                    <strong className="text-white">Right to Data Portability:</strong> Request transfer of your personal data to another service
                  </li>
                  <li className="leading-loose">
                    <strong className="text-white">Right to Object:</strong> Object to processing of your personal data
                  </li>
                  <li className="leading-loose">
                    <strong className="text-white">Right to Withdraw Consent:</strong> Withdraw consent where processing is based on consent
                  </li>
                  <li className="leading-loose">
                    <strong className="text-white">Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with a supervisory authority in your country of residence if you believe your data protection rights have been violated
                  </li>
                </ul>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  You may exercise these rights by contacting us using the contact information below.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 12 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">12.</span>
                  Data Protection Officer
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-4">
                  For questions or concerns regarding data protection, you may contact our Data Protection Officer at:
                </p>
                <p className="text-gray-300 leading-loose text-lg">
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:whwo9745@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    whwo9745@gmail.com
                  </a>
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 13 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">13.</span>
                  Changes to This Privacy Policy
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  We may update this Privacy Policy from time to time. Any changes will be posted within the Service or on our website. Continued use of the Service after such changes constitutes acceptance of the updated Privacy Policy.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 14 - Contact */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">14.</span>
                  Contact
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>

                {/* Contact Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-4 px-4 text-white font-semibold text-lg">Item</th>
                        <th className="text-left py-4 px-4 text-white font-semibold text-lg">Details</th>
                      </tr>
                    </thead>
                    <tbody className="text-lg">
                      <tr className="border-b border-gray-800/50">
                        <td className="py-4 px-4 text-gray-300">Email</td>
                        <td className="py-4 px-4">
                          <a href="mailto:jwjygpt0507@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                            jwjygpt0507@gmail.com
                          </a>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800/50">
                        <td className="py-4 px-4 text-gray-300">Phone</td>
                        <td className="py-4 px-4">
                          <a href="tel:+82-10-2847-9981" className="text-blue-400 hover:text-blue-300 transition-colors">
                            +82-10-2847-9981
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-gray-300">Data Protection Officer</td>
                        <td className="py-4 px-4">
                          <a href="mailto:whwo9745@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                            whwo9745@gmail.com
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </Section>
    </div>
  );
}
