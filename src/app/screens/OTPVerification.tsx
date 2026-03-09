import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Shield, ArrowLeft } from 'lucide-react';

export function OTPVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all filled
    if (newOtp.every((digit) => digit !== '') && index === 5) {
      handleVerify();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    navigate('/app');
  };

  const handleResend = () => {
    setTimer(60);
    setOtp(['', '', '', '', '', '']);
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB] flex flex-col">
      <div className="px-6 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-[#6BCB77] to-[#2F6BFF] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <Shield className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-3xl text-gray-900 mb-2 text-center">Verify OTP</h1>
          <p className="text-gray-600 mb-8 text-center">
            Enter the 6-digit code sent to your phone
          </p>

          <div className="flex gap-3 mb-8 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-14 text-center text-xl bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6BFF] focus:border-transparent"
              />
            ))}
          </div>

          <button
            onClick={handleVerify}
            className="w-full bg-gradient-to-r from-[#6BCB77] to-[#2F6BFF] text-white py-4 rounded-xl hover:opacity-90 transition-opacity mb-4"
          >
            Verify
          </button>

          <div className="text-center">
            {timer > 0 ? (
              <p className="text-gray-600">
                Resend code in <span className="text-[#2F6BFF]">{timer}s</span>
              </p>
            ) : (
              <button onClick={handleResend} className="text-[#2F6BFF]">
                Resend Code
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
