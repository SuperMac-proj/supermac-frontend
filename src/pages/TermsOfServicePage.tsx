import { motion } from 'framer-motion';
import { Section } from '../components/common';

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-gray-400 text-lg">Last updated: January 12, 2025</p>
          </div>

          {/* Main Content Container */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 sm:p-12 md:p-16">
            {/* Introduction */}
            <div className="mb-16 pb-16 border-b border-gray-800/50">
              <p className="text-gray-300 leading-loose text-xl">
                These Terms of Service ("Terms") govern your access to and use of SuperMac, a macOS-only desktop application, and any related services (collectively, the "Service") provided by Mople ("Company", "we", "us", or "our").
              </p>
              <p className="text-gray-300 leading-loose text-xl mt-6">
                By downloading, installing, or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use the Service.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-16">
              {/* Section 1 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">1.</span>
                  Purpose
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  These Terms set forth the conditions for using the Service and define the rights, obligations, and responsibilities between the Company and users.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 2 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">2.</span>
                  Definitions
                </h2>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="leading-loose">
                    <strong className="text-white">"Service"</strong> means the macOS-only desktop application SuperMac and all related features provided by the Company.
                  </li>
                  <li className="leading-loose">
                    <strong className="text-white">"User"</strong> means an individual who agrees to these Terms and uses the Service.
                  </li>
                  <li className="leading-loose">
                    <strong className="text-white">"Subscription"</strong> means a recurring paid plan that provides access to the Service.
                  </li>
                  <li className="leading-loose">
                    <strong className="text-white">"Lifetime License"</strong> means a one-time purchase that grants access to the Service as defined herein.
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 3 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">3.</span>
                  Acceptance of Terms
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  By accessing or using the Service, you acknowledge that you have read, understood, and agreed to be bound by these Terms.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 4 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">4.</span>
                  Description of the Service
                </h2>
                <ol className="space-y-4 text-gray-300 text-lg list-decimal list-inside">
                  <li className="leading-loose">The Service is provided exclusively for macOS devices.</li>
                  <li className="leading-loose">
                    The Service is a productivity application designed to enhance convenience and efficiency in everyday macOS usage.
                  </li>
                  <li className="leading-loose">
                    Features may include, but are not limited to:
                    <ul className="ml-6 mt-3 space-y-2 list-disc list-inside">
                      <li>Clipboard management</li>
                      <li>Text snippet management</li>
                      <li>Advanced multi-window controls and enhanced Mission Control usability</li>
                    </ul>
                  </li>
                  <li className="leading-loose">
                    The Company may modify, update, or discontinue any part of the Service at any time for operational or technical reasons.
                  </li>
                </ol>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 5 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">5.</span>
                  Eligibility
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  The Service is intended for individual users. By using the Service, you represent that you are legally permitted to use the Service under applicable laws in your jurisdiction.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 6 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">6.</span>
                  Fees and Payments
                </h2>
                <ul className="space-y-4 text-gray-300 text-lg list-disc list-inside">
                  <li className="leading-loose">
                    The Service is offered through paid Subscription plans and/or Lifetime Licenses.
                  </li>
                  <li className="leading-loose">
                    Payments are processed by Paddle, an authorized third-party payment processor acting as the Merchant of Record.
                  </li>
                  <li className="leading-loose">
                    Subscription plans automatically renew unless cancelled prior to the renewal date.
                  </li>
                  <li className="leading-loose">
                    Pricing and billing terms are clearly presented at the time of purchase.
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 7 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">7.</span>
                  Subscription Cancellation
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  Users may cancel their Subscription at any time through the Paddle subscription management page. Upon cancellation, access to the Service will remain available until the end of the current billing period.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 8 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">8.</span>
                  Refund Policy
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  Refunds are subject to the Company's Refund Policy, which is provided as a separate document. All payments and refunds are processed through Paddle.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 9 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">9.</span>
                  Lifetime License
                </h2>
                <ul className="space-y-4 text-gray-300 text-lg list-disc list-inside">
                  <li className="leading-loose">
                    A Lifetime License grants the User access to the current major version of the Service (e.g., version 2.x), including all minor updates and bug fixes within that major version, for an unlimited period.
                  </li>
                  <li className="leading-loose">
                    Major version upgrades (e.g., 3.0, 4.0) may be offered as separate purchases. Lifetime License holders may be eligible for discounted upgrade pricing at the Company's discretion.
                  </li>
                  <li className="leading-loose">
                    The Lifetime License does not guarantee continued availability of the Service in the event of service termination, major platform changes, or macOS compatibility issues.
                  </li>
                  <li className="leading-loose">
                    No additional guarantees or compensation are provided if the Service becomes unavailable due to circumstances beyond the Company's control.
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 10 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">10.</span>
                  Intellectual Property Rights
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-6">
                  All rights, title, and interest in and to the Service, including software, design, text, and features, are owned by the Company.
                </p>
                <p className="text-gray-300 leading-loose text-lg mb-6">
                  Users are granted a limited, non-exclusive, non-transferable, revocable license to use the Service for personal, non-commercial purposes only.
                </p>
                <p className="text-gray-300 leading-loose text-lg mb-4">Users must not:</p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">Copy, modify, distribute, sell, sublicense, or rent the Service</li>
                  <li className="leading-loose">Reverse engineer, decompile, or attempt to extract source code</li>
                  <li className="leading-loose">Use the Service in violation of applicable laws</li>
                </ul>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 11 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">11.</span>
                  User Obligations
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-4">Users agree not to:</p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">Violate any applicable laws or regulations</li>
                  <li className="leading-loose">Interfere with or disrupt the operation of the Service</li>
                  <li className="leading-loose">Infringe upon the intellectual property rights of the Company or third parties</li>
                </ul>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 12 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">12.</span>
                  Disclaimer of Warranties
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  The Service is provided on an "as is" and "as available" basis. The Company makes no warranties, express or implied, including but not limited to warranties of fitness for a particular purpose, accuracy, or uninterrupted availability.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 13 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">13.</span>
                  Limitation of Liability
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-6">
                  To the maximum extent permitted by law, the Company shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of the Service.
                </p>
                <p className="text-gray-300 leading-loose text-lg mb-4">The Company is not responsible for issues caused by:</p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">The User's device environment</li>
                  <li className="leading-loose">Operating system updates</li>
                  <li className="leading-loose">Third-party software or services</li>
                </ul>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 14 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">14.</span>
                  Privacy Policy
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  The collection and use of personal data are governed by the Company's Privacy Policy, which is provided as a separate document and forms an integral part of these Terms.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 15 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">15.</span>
                  Termination
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  The Company may suspend or terminate access to the Service if a User violates these Terms. Users may discontinue use of the Service at any time.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 16 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">16.</span>
                  Changes to the Terms
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  The Company may update these Terms from time to time. Updated Terms will be made available through the Service or the official website. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 17 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">17.</span>
                  Governing Law and Jurisdiction
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  These Terms shall be governed by and construed in accordance with the laws of the Republic of Korea. Any disputes arising out of or in connection with these Terms shall be resolved in accordance with applicable laws and regulations of the Republic of Korea.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 18 - Contact */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">18.</span>
                  Company Information & Contact
                </h2>
                <div className="space-y-4 text-gray-300 text-lg">
                  <p className="leading-loose">
                    <strong className="text-white">Seller:</strong> Mople
                  </p>
                  <p className="leading-loose">
                    <strong className="text-white">Business Type:</strong> Sole Proprietorship
                  </p>
                  <p className="leading-loose">
                    <strong className="text-white">Business Registration Number:</strong> 647-08-03097
                  </p>
                  <p className="leading-loose">
                    <strong className="text-white">Representative:</strong> Jaeyoung Cho
                  </p>
                  <p className="leading-loose">
                    <strong className="text-white">Address:</strong><br />
                    Seoul, Yeongdeungpo-gu, Yeongdeungporo 47-gil 17, Louvre House, Republic of Korea
                  </p>
                  <div className="pt-8 mt-8 border-t border-gray-800/30">
                    <p className="text-gray-300 text-lg mb-4 leading-loose">If you have any questions regarding these Terms or the Service, please contact us at:</p>
                    <p className="leading-loose">
                      <strong className="text-white">Email:</strong>{' '}
                      <a href="mailto:jwjygpt0507@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                        jwjygpt0507@gmail.com
                      </a>
                    </p>
                    <p className="leading-loose">
                      <strong className="text-white">Phone:</strong>{' '}
                      <a href="tel:+82-10-2847-9981" className="text-blue-400 hover:text-blue-300 transition-colors">
                        +82-10-2847-9981
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </Section>
    </div>
  );
}
