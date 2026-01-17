import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function AuthCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Supabase SDK가 URL의 hash fragment(#access_token=...)를 자동으로 처리함
    // getSession()으로 세션 확인 후 리다이렉트
    const handleAuthCallback = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Auth error:', error);
      }

      if (session) {
        console.log('User signed in:', session.user);
      }

      navigate('/', { replace: true });
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
