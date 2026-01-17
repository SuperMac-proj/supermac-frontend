import { motion } from 'framer-motion';
import { Section } from '../components/common';

export default function RefundPolicyPage() {
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
              Refund Policy
            </h1>
            <p className="text-gray-400 text-lg">Last updated: January 12, 2025</p>
          </div>

          {/* Main Content Container */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 sm:p-12 md:p-16">
            {/* Introduction */}
            <div className="mb-16 pb-16 border-b border-gray-800/50">
              <p className="text-gray-300 leading-loose text-xl">
                This Refund Policy applies to purchases and subscriptions of SuperMac, a macOS-only desktop application, provided by Mople ("Company", "we", "us", or "our").
              </p>
              <p className="text-gray-300 leading-loose text-xl mt-6">
                By purchasing or subscribing to the Service, you agree to this Refund Policy.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-16">
              {/* Section 1 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">1.</span>
                  Payment Processing and Merchant of Record
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-6">
                  All payments for the Service are processed by Paddle.com Market Limited ("Paddle"), which acts as the Merchant of Record for all transactions.
                </p>
                <p className="text-gray-300 leading-loose text-lg mb-4">This means:</p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">You purchase the Service from Paddle, not directly from Mople</li>
                  <li className="leading-loose">Paddle handles payment processing, tax calculation, and refund processing</li>
                  <li className="leading-loose">The Service is licensed to you by Mople</li>
                  <li className="leading-loose">All refund requests are submitted to and processed by Paddle in accordance with their policies and applicable consumer protection laws</li>
                </ul>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  The Company does not process refunds directly and cannot override Paddle's decisions.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 2 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">2.</span>
                  Digital Product and Right of Withdrawal
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-6">
                  SuperMac is a digital software product delivered immediately upon purchase.
                </p>
                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-6 mb-6">
                  <p className="text-yellow-200 font-semibold mb-3 text-lg">Important Notice for EU/UK Consumers:</p>
                  <p className="text-gray-300 leading-loose text-lg">
                    By downloading or otherwise acquiring the Service, you explicitly consent to the immediate performance of this agreement and acknowledge that you will lose your right of withdrawal once the download or transmission has begun, in accordance with EU Directive 2011/83/EU, Article 16(m).
                  </p>
                </div>
                <p className="text-gray-300 leading-loose text-lg">
                  During the checkout process, you will be asked to provide explicit consent via a checkbox before completing your purchase. If you wish to retain your right of withdrawal, you must not download or activate the Service within the 14-day withdrawal period.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 3 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">3.</span>
                  Refund Eligibility and Timeframes
                </h2>

                <h3 className="text-2xl font-semibold text-white mt-8 mb-4">3.1 30-Day Money-Back Guarantee</h3>
                <p className="text-gray-300 leading-loose text-lg mb-4">
                  We offer a 30-day money-back guarantee for all purchases of SuperMac.
                </p>
                <p className="text-gray-300 leading-loose text-lg mb-4">Eligibility Requirements:</p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">Refund requests must be submitted within 30 days of the original purchase date</li>
                  <li className="leading-loose">The request must be made through Paddle's refund process</li>
                  <li className="leading-loose">Refunds are granted at Paddle's discretion based on the circumstances</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mt-8 mb-4">3.2 Lifetime License</h3>
                <p className="text-gray-300 leading-loose text-lg mb-4">For one-time purchases (Lifetime License):</p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">Refund requests must be submitted within 30 days of purchase</li>
                  <li className="leading-loose">Eligibility is determined by Paddle based on usage patterns and compliance with Terms of Service</li>
                  <li className="leading-loose">Refunds may be denied if the Service has been extensively used or if Terms of Service have been violated</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mt-8 mb-4">3.3 Subscription Plans</h3>
                <p className="text-gray-300 leading-loose text-lg mb-4">For monthly or annual subscription plans:</p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">You may cancel your subscription at any time</li>
                  <li className="leading-loose">Cancellation stops future billing and takes effect at the next payment date</li>
                  <li className="leading-loose">No refunds are provided for unused portions of the current billing period</li>
                  <li className="leading-loose">Access to the Service continues until the end of the current billing period</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mt-8 mb-4">3.4 Free Trial Period</h3>
                <p className="text-gray-300 leading-loose text-lg mb-4">SuperMac offers a 7-day free trial with full access to all features.</p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">During the trial period, you may cancel at any time without charge</li>
                  <li className="leading-loose">It is your responsibility to cancel before the trial period ends to avoid being charged</li>
                  <li className="leading-loose">Once the paid subscription begins, all refunds are subject to this Refund Policy</li>
                  <li className="leading-loose">We strongly encourage you to evaluate the Service during the free trial period</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mt-8 mb-4">3.5 Refund Request Deadline</h3>
                <p className="text-gray-300 leading-loose text-lg">
                  All refund requests must be submitted within 60 days of the transaction date. Requests received after this period will not be processed, except where required by applicable consumer protection laws.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 4 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">4.</span>
                  Data Storage Notice
                </h2>
                <p className="text-gray-300 leading-loose text-lg">
                  SuperMac stores user data on Supabase servers to provide service functionality. By using the Service, you acknowledge that certain data is transmitted to and stored on third-party servers as described in our Privacy Policy.
                </p>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  This does not affect your refund rights, but please review our Privacy Policy before purchase.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 5 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">5.</span>
                  How to Request a Refund
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-4">To request a refund:</p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">Visit paddle.net and submit a refund request</li>
                  <li className="leading-loose">Alternatively, use the refund link in your purchase receipt email from Paddle</li>
                  <li className="leading-loose">Provide your order number and the email address used for purchase</li>
                </ul>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  For questions about refund status or payment issues, contact Paddle's support team directly at paddle.net.
                </p>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  The Company does not approve or deny refund requests and cannot override Paddle's decisions. All refund determinations are made by Paddle in accordance with their policies.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 6 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">6.</span>
                  Refund Processing Time
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-4">Once a refund is approved by Paddle:</p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">Processing typically takes 5-7 business days</li>
                  <li className="leading-loose">The actual time for funds to appear in your account may vary depending on your bank or card issuer (typically 7-14 days total)</li>
                  <li className="leading-loose">Refunds are issued to the original payment method used for purchase</li>
                </ul>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 7 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">7.</span>
                  Refund Amount and Adjustments
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-4">
                  The refund amount may differ from the original purchase amount due to:
                </p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">Tax adjustments and recalculation based on your jurisdiction</li>
                  <li className="leading-loose">Currency exchange rate fluctuations (for non-USD transactions)</li>
                  <li className="leading-loose">Payment processing fees (in limited circumstances)</li>
                </ul>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  <strong className="text-white">Promotional Purchases:</strong> If you purchased the Service at a discounted or promotional price, the refund will be for the actual amount paid, not the original full price.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 8 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">8.</span>
                  Circumstances Where Refunds May Be Denied
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-4">
                  Paddle may deny refund requests in the following circumstances:
                </p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose"><strong className="text-white">Terms of Service Violations:</strong> Use of the Service in ways that violate our Terms of Service</li>
                  <li className="leading-loose"><strong className="text-white">Prior Refund History:</strong> Previous refund(s) for the same product (to prevent refund abuse)</li>
                  <li className="leading-loose"><strong className="text-white">Chargeback Abuse:</strong> Initiating chargebacks or payment disputes without first contacting Paddle</li>
                  <li className="leading-loose"><strong className="text-white">Fraudulent Activity:</strong> Suspected fraud, use of stolen payment methods, or license key sharing/resale</li>
                  <li className="leading-loose"><strong className="text-white">Excessive Usage:</strong> For Lifetime Licenses, if the Service has been used extensively beyond evaluation purposes</li>
                  <li className="leading-loose"><strong className="text-white">Requests Outside Time Limits:</strong> Refund requests submitted after the applicable deadline</li>
                </ul>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  Users who initiate fraudulent chargebacks may have their access to the Service terminated immediately.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 9 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">9.</span>
                  Lifetime License - Version Updates
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-4">Lifetime License grants you access to:</p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">The current major version of SuperMac (e.g., version 2.x)</li>
                  <li className="leading-loose">All minor updates and bug fixes within that major version</li>
                </ul>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  Major version upgrades (e.g., 3.0, 4.0) may require a separate purchase.
                </p>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  This policy allows us to continue improving and maintaining the Service while offering fair pricing for significant new versions.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 10 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">10.</span>
                  Regional Consumer Rights
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-6">
                  Nothing in this Refund Policy affects your mandatory rights as a consumer under applicable local laws.
                </p>
                <p className="text-gray-300 leading-loose text-lg mb-4">
                  <strong className="text-white">For EU/UK Consumers:</strong> You may be entitled to additional rights under consumer protection laws, including:
                </p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">The right to cancel within 14 days of purchase (right of withdrawal)</li>
                  <li className="leading-loose">However, this right is waived when you download digital content after giving explicit consent</li>
                </ul>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  <strong className="text-white">For All Consumers:</strong> You benefit from mandatory provisions of the law of the country in which you are resident. If local consumer protection laws provide greater rights than this policy, those laws will prevail.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 11 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">11.</span>
                  Contact Before Chargebacks
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-6">
                  If you experience any issues with the Service or have concerns about your purchase, please contact Paddle's support team before initiating a chargeback or payment dispute with your bank.
                </p>
                <p className="text-gray-300 leading-loose text-lg">
                  Chargebacks should only be used as a last resort for genuine fraud or unauthorized transactions. Improper use of chargebacks may result in account termination and may affect your ability to purchase from Paddle in the future.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 12 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">12.</span>
                  Changes to This Refund Policy
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-4">
                  We may update this Refund Policy from time to time to reflect changes in our practices, legal requirements, or Paddle's policies.
                </p>
                <p className="text-gray-300 leading-loose text-lg mb-4">Updated versions will be posted:</p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">Within the SuperMac application</li>
                  <li className="leading-loose">On our official website</li>
                </ul>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  Continued use of the Service after changes are posted constitutes acceptance of the updated Refund Policy. We encourage you to review this policy periodically.
                </p>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 13 - Contact */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">13.</span>
                  Contact Information
                </h2>

                <div className="mb-8">
                  <p className="text-white font-semibold text-lg mb-3">For refund requests and payment issues:</p>
                  <p className="text-gray-300 text-lg leading-loose">Contact Paddle directly at <a href="https://paddle.net" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">paddle.net</a></p>
                </div>

                <div className="mb-8">
                  <p className="text-white font-semibold text-lg mb-4">For general questions about this Refund Policy:</p>
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
                        <tr>
                          <td className="py-4 px-4 text-gray-300">Phone</td>
                          <td className="py-4 px-4">
                            <a href="tel:+82-10-2847-9981" className="text-blue-400 hover:text-blue-300 transition-colors">
                              +82-10-2847-9981
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
                  <p className="text-red-200 font-semibold text-lg mb-3">Important:</p>
                  <p className="text-gray-300 text-lg leading-loose">
                    The Company (Mople) cannot process refunds directly. All refund requests must be submitted to Paddle.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-800/30"></div>

              {/* Section 14 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">14.</span>
                  Compliance Statement
                </h2>
                <p className="text-gray-300 leading-loose text-lg mb-4">This Refund Policy is designed to comply with:</p>
                <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside ml-4">
                  <li className="leading-loose">Paddle's Seller requirements and Buyer Terms</li>
                  <li className="leading-loose">EU Consumer Rights Directive (2011/83/EU)</li>
                  <li className="leading-loose">Applicable consumer protection laws in relevant jurisdictions</li>
                </ul>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  This policy works in conjunction with our Terms of Service and Privacy Policy, which should be read together as a complete agreement.
                </p>
                <p className="text-gray-300 leading-loose text-lg mt-6">
                  By purchasing SuperMac, you acknowledge that you have read, understood, and agreed to this Refund Policy.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
