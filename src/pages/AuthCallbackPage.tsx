import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function AuthCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Extract the authorization code from URL
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if (!code) {
          console.error('No authorization code found in URL');
          navigate('/', { replace: true });
          return;
        }

        // Exchange the code for a session
        const { data, error } = await supabase.auth.exchangeCodeForSession(code);
        console.log('=== Exchange Result ===');
        console.log('data:', data);
        console.log('error:', error);

        if (error) {
          console.error('Auth error:', error);
          navigate('/', { replace: true });
          return;
        }

        if (data.session) {
          console.log('User signed in:', data.session.user);
          // Navigate and replace history to avoid keeping the callback URL
          navigate('/', { replace: true });
        } else {
          // No session, redirect to home
          navigate('/', { replace: true });
        }
      } catch (error) {
        console.error('Unexpected error:', error);
        navigate('/', { replace: true });
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50/50 to-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent mb-4"></div>
        <p className="text-gray-600">Signing you in...</p>
      </div>
    </div>
  );
}
