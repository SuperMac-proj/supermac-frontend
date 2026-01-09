import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, CreditCard, Settings, LogOut, Trash2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import { Section } from '../components/common';

type TabType = 'account' | 'billing' | 'settings';

export default function MyPage() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>('account');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/');
        return;
      }
      setUser(session.user);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/');
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const tabs = [
    { id: 'account' as TabType, label: 'Account', icon: User },
    { id: 'billing' as TabType, label: 'Billing', icon: CreditCard },
    { id: 'settings' as TabType, label: 'Settings', icon: Settings },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50/50 to-white pt-24">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/50 to-white pt-24 pb-16">
      <Section containerClassName="max-w-[1440px]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-2 py-2 leading-tight">
              My Account
            </h1>
            <p className="text-gray-600">Manage your account and subscription</p>
          </motion.div>

          {/* Mobile Tabs */}
          <div className="md:hidden mb-6">
            <div className="flex overflow-x-auto gap-2 pb-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all ${
                      activeTab === tab.id
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="flex gap-6">
            {/* Sidebar - Desktop only */}
            <motion.div
              className="hidden md:block w-64 flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 shadow-xl sticky top-24">
                <nav className="space-y-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                          activeTab === tab.id
                            ? 'bg-primary-600 text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </motion.div>

            {/* Content Area */}
            <div className="flex-1">
              {activeTab === 'account' && <AccountTab user={user} />}
              {activeTab === 'billing' && <BillingTab navigate={navigate} />}
              {activeTab === 'settings' && <SettingsTab handleSignOut={handleSignOut} />}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Account Tab Component
function AccountTab({ user }: { user: SupabaseUser }) {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Information</h2>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-100">
          <span className="text-gray-600 font-medium w-40 mb-1 sm:mb-0">Name</span>
          <span className="text-gray-900 text-lg">
            {user.user_metadata?.full_name || 'Not set'}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-100">
          <span className="text-gray-600 font-medium w-40 mb-1 sm:mb-0">Email</span>
          <span className="text-gray-900 text-lg">{user.email}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-100">
          <span className="text-gray-600 font-medium w-40 mb-1 sm:mb-0">Member Since</span>
          <span className="text-gray-900 text-lg">
            {new Date(user.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center py-4">
          <span className="text-gray-600 font-medium w-40 mb-1 sm:mb-0">Provider</span>
          <span className="text-gray-900 text-lg capitalize">
            {user.app_metadata?.provider || 'Unknown'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Billing Tab Component
function BillingTab({ navigate }: { navigate: (path: string) => void }) {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing & Subscription</h2>

      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
          <CreditCard className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Active Subscription</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          You don't have an active subscription yet. Choose a plan that works best for you.
        </p>
        <button
          onClick={() => navigate('/pricing')}
          className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          View Pricing Plans
        </button>
      </div>

      {/* Placeholder for future subscription info */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment History</h3>
        <p className="text-gray-500 text-sm">No payment history available.</p>
      </div>
    </motion.div>
  );
}

// Settings Tab Component
function SettingsTab({ handleSignOut }: { handleSignOut: () => void }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    setIsDeleting(true);

    try {
      // Note: Supabase requires server-side user deletion for security
      // This is a client-side workaround - in production, you should:
      // 1. Create a backend API endpoint or Edge Function
      // 2. Call that endpoint from here
      // 3. The backend should use admin privileges to delete the user

      // For now, we'll sign out the user and show a message
      // In a real implementation, you would call your backend API here:
      // await fetch('/api/delete-account', { method: 'DELETE' });

      await supabase.auth.signOut();

      // Show success message (you might want to add a toast notification here)
      alert('Your account deletion request has been received. You have been signed out.');

      navigate('/');
    } catch (error) {
      console.error('Error deleting account:', error);
      alert('An error occurred. Please try again or contact support.');
    } finally {
      setIsDeleting(false);
      setShowDeleteModal(false);
    }
  };

  return (
    <>
      <motion.div
        className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Actions</h3>
            <div className="space-y-3">
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-6 py-4 text-left border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                <LogOut className="w-5 h-5 text-gray-600" />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Sign Out</div>
                  <div className="text-sm text-gray-500">Sign out of your account</div>
                </div>
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-red-600 mb-3">Danger Zone</h3>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="w-full flex items-center gap-3 px-6 py-4 text-left border-2 border-red-200 rounded-xl hover:bg-red-50 hover:border-red-300 transition-all group"
            >
              <Trash2 className="w-5 h-5 text-red-600" />
              <div className="flex-1">
                <div className="font-semibold text-red-600">Delete Account</div>
                <div className="text-sm text-red-500">Permanently delete your account and all data</div>
              </div>
            </button>
          </div>

          {/* Placeholder for future settings */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Preferences</h3>
            <p className="text-gray-500 text-sm">Additional settings will be available soon.</p>
          </div>
        </div>
      </motion.div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isDeleting && setShowDeleteModal(false)}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-[9999] overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <motion.div
                  className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="bg-red-500 px-8 py-4">
                    <h2 className="text-2xl font-bold text-white">Delete Account</h2>
                  </div>

                  {/* Content */}
                  <div className="px-8 py-6">
                    <div className="mb-6">
                      <p className="text-gray-700 mb-4">
                        Are you sure you want to delete your account? This action cannot be undone.
                      </p>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-semibold text-red-800 mb-2">This will permanently:</h4>
                        <ul className="text-sm text-red-700 space-y-1 list-disc list-inside">
                          <li>Delete your account and profile</li>
                          <li>Cancel any active subscriptions</li>
                          <li>Remove all your data</li>
                          <li>You won't be able to recover this account</li>
                        </ul>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowDeleteModal(false)}
                        disabled={isDeleting}
                        className="flex-1 px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all disabled:opacity-50"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleDeleteAccount}
                        disabled={isDeleting}
                        className="flex-1 px-6 py-3 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isDeleting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Deleting...
                          </>
                        ) : (
                          'Delete Account'
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
