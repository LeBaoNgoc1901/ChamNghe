import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  AlertCircle,
  Github,
  Chrome,
  ChevronRight,
  ShieldCheck,
  RefreshCw,
  X,
  Facebook,
  Sparkles
} from "lucide-react";

interface AuthSystemProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (userData: any) => void;
  initialView?: "login" | "register";
}

const FormInput = ({ 
  label, 
  type, 
  id, 
  value, 
  onChange, 
  Icon, 
  placeholder,
  error,
  showPasswordToggle = false,
  onTogglePassword,
  isPasswordVisible = false
}: {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon: any;
  placeholder: string;
  error?: string;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void;
  isPasswordVisible?: boolean;
}) => {
  return (
    <div className="space-y-1.5 w-full text-left">
      <label htmlFor={id} className="block text-[13px] font-bold text-text-dark/80 ml-1">
        {label}
      </label>
      <div className="relative group">
        <input
          type={showPasswordToggle && isPasswordVisible ? 'text' : type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            w-full px-4 py-2.5 bg-background/40 border-2 rounded-xl outline-none transition-all duration-300 font-medium placeholder:text-text-muted/40 text-sm focus:bg-white/60
            ${error ? 'border-secondary/50 ring-4 ring-secondary/5' : 'border-transparent focus:border-primary/40 focus:ring-4 focus:ring-primary/5 focus:shadow-sm'}
          `}
        />

        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
          >
            {isPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && (
        <motion.p 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs text-secondary font-medium ml-2 flex items-center gap-1"
        >
          <AlertCircle size={12} />
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default function AuthSystem({ isOpen, onClose, onSuccess, initialView = "login" }: AuthSystemProps) {
  const [view, setView] = useState<"login" | "register">(initialView);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Sync internal view with prop
  useEffect(() => {
    setView(initialView);
  }, [initialView]);

  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const calculateStrength = (value: string) => {
    let strength = 0;
    if (value.length >= 6) strength++;
    if (value.length >= 10 && /[A-Z]/.test(value) && /[0-9]/.test(value)) strength = 3;
    else if (value.length >= 8) strength = 2;
    return strength;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Map internal names strictly
    let field = "";
    if (name.includes('fullName')) field = "fullName";
    else if (name.includes('email')) field = "email";
    else if (name.includes('password')) field = "password";
    
    if (field) {
      setFormData(prev => ({ ...prev, [field]: value }));
      
      if (errors[field]) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }

      if (field === 'email' && value && !value.includes('@')) {
        setErrors(prev => ({ ...prev, email: "Vui lòng nhập email hợp lệ" }));
      }

      if (field === 'password') {
        setPasswordStrength(calculateStrength(value));
      }
    }
  };

  const suggestPassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let pass = "";
    pass += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
    pass += "0123456789"[Math.floor(Math.random() * 10)];
    pass += "!@#$%^&*()"[Math.floor(Math.random() * 10)];
    
    for (let i = 0; i < 9; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    
    pass = pass.split('').sort(() => 0.5 - Math.random()).join('');
    
    setFormData(prev => ({ ...prev, password: pass }));
    setPasswordStrength(calculateStrength(pass));
    setShowPassword(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    const submitData = { ...formData }; // Capture current state
    
    if (!submitData.email) newErrors.email = "Email không được để trống";
    else if (!submitData.email.includes('@')) newErrors.email = "Email không hợp lệ";
    
    if (!submitData.password) newErrors.password = "Mật khẩu không được để trống";
    
    if (view === "register" && !submitData.fullName.trim()) {
      newErrors.fullName = "Tên tài khoản không được để trống";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (onSuccess) {
        // DERIVE NAME ONLY IF LOGGING IN WITH NO FULLNAME STORED
        let finalName = submitData.fullName.trim();
        
        if (!finalName && submitData.email) {
          const emailPart = submitData.email.split('@')[0];
          finalName = emailPart
            .split(/[._-]/)
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ');
        }
        
        onSuccess({
          name: finalName || "Thành viên Chạm Nghề",
          email: submitData.email,
          avatar: "https://i.pravatar.cc/150?u=" + (submitData.email || "user")
        });
      }
      onClose();
    }, 1200);
  };

  const toggleView = () => {
    setView(prev => prev === "login" ? "register" : "login");
    setErrors({});
    setFormData({ fullName: "", email: "", password: "" });
    setPasswordStrength(0);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#3E2C2C]/20 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-[400px] z-10 bg-surface/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden p-6 md:p-8 border border-white/60"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-6 z-[110] text-text-muted/60 hover:text-secondary transition-colors"
            >
              <X size={20} />
            </button>

            <AnimatePresence mode="wait">
              {view === "login" ? (
                <motion.div
                  key="login-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full text-center"
                >
                  <div className="mb-6">
                    <h2 className="text-[1.8rem] md:text-[2.2rem] font-serif font-black text-primary leading-tight">
                      Chào mừng bạn
                    </h2>
                    <p className="text-[13px] md:text-sm text-text-muted font-medium mt-1">
                      Tiếp tục hành trình bản sắc của riêng mình
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <FormInput 
                      label="Email"
                      type="email"
                      id="auth-email-login"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      Icon={Mail}
                      error={errors.email}
                    />

                    <FormInput 
                      label="Mật khẩu"
                      type="password"
                      id="auth-password-login"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleInputChange}
                      Icon={Lock}
                      error={errors.password}
                      showPasswordToggle
                      isPasswordVisible={showPassword}
                      onTogglePassword={() => setShowPassword(!showPassword)}
                    />

                    <div className="flex items-center justify-between text-[13px] px-1">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer transition-all" />
                        <span className="text-text-muted transition-colors font-medium">Ghi nhớ tôi</span>
                      </label>
                      <button type="button" className="text-secondary font-bold hover:underline transition-all">
                        Quên mật khẩu?
                      </button>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isLoading}
                      className="w-full py-3.5 bg-gradient-to-r from-primary to-[#7DA690] text-white rounded-xl font-black text-base transition-all flex items-center justify-center gap-2 relative overflow-hidden group shadow-xl shadow-primary/20"
                    >
                      <span className={`transition-all duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} flex items-center gap-2`}>
                        Đăng nhập
                        {!isLoading && <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                      </span>
                      
                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        </div>
                      )}
                    </motion.button>
                  </form>

                  <div className="mt-6 md:mt-7">
                    <div className="relative flex items-center justify-center">
                      <div className="border-t border-gray-200/60 w-full"></div>
                      <span className="bg-[#FAF7F2] px-3 text-[9px] font-black text-text-muted uppercase tracking-[0.25em] absolute">
                        Hoặc tiếp tục với
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 mt-5 md:mt-6">
                      <SocialButton icon={Chrome} label="Google" />
                      <SocialButton icon={Facebook} label="Facebook" />
                      <SocialButton icon={Github} label="Github" />
                    </div>
                  </div>

                  <p className="mt-8 text-text-muted font-medium text-sm">
                    Chưa có tài khoản?{" "}
                    <button onClick={toggleView} className="text-secondary font-black hover:underline cursor-pointer transition-all">
                      Đăng ký ngay
                    </button>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="register-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full text-center"
                >
                  <div className="mb-6">
                    <h2 className="text-[1.8rem] md:text-[2.2rem] font-serif font-black text-primary leading-tight">
                      Bắt đầu hành trình
                    </h2>
                    <p className="text-[13px] md:text-sm text-text-muted font-medium mt-1">
                      Tham gia cộng đồng "Chạm Nghề" ngay hôm nay
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                    <FormInput 
                      label="Tên tài khoản"
                      type="text"
                      id="auth-fullName"
                      placeholder="Lê Bảo Ngọc"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      Icon={User}
                      error={errors.fullName}
                    />

                    <FormInput 
                      label="Email"
                      type="email"
                      id="auth-email-register"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      Icon={Mail}
                      error={errors.email}
                    />

                    <div className="space-y-1.5">
                       <div className="relative">
                        <FormInput 
                          label="Mật khẩu"
                          type="password"
                          id="auth-password-register"
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={handleInputChange}
                          Icon={Lock}
                          error={errors.password}
                          showPasswordToggle
                          isPasswordVisible={showPassword}
                          onTogglePassword={() => setShowPassword(!showPassword)}
                        />
                         <button
                          type="button"
                          onClick={suggestPassword}
                          className="absolute -top-1.5 right-0 text-[9px] font-black uppercase tracking-widest text-secondary hover:text-secondary/70 transition-colors"
                        >
                          Gợi ý mật khẩu mạnh
                        </button>
                      </div>
                      
                      {/* Password Strength Meter */}
                      <div className="px-1 space-y-1">
                        <div className="flex gap-1 h-1">
                          <div className={`flex-1 rounded-full transition-all duration-500 ${passwordStrength >= 1 ? (passwordStrength === 1 ? 'bg-secondary' : passwordStrength === 2 ? 'bg-yellow-400' : 'bg-primary') : 'bg-gray-200'}`} />
                          <div className={`flex-1 rounded-full transition-all duration-500 ${passwordStrength >= 2 ? (passwordStrength === 2 ? 'bg-yellow-400' : 'bg-primary') : 'bg-gray-200'}`} />
                          <div className={`flex-1 rounded-full transition-all duration-500 ${passwordStrength >= 3 ? 'bg-primary' : 'bg-gray-200'}`} />
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isLoading}
                      className="w-full py-3.5 bg-gradient-to-r from-primary to-[#7DA690] text-white rounded-xl font-black text-base transition-all flex items-center justify-center gap-2 relative overflow-hidden group shadow-xl shadow-primary/20 mt-4"
                    >
                      <span className={`transition-all duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} flex items-center gap-2`}>
                        Tạo tài khoản
                        {!isLoading && <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                      </span>
                      
                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        </div>
                      )}
                    </motion.button>
                  </form>

                  <div className="mt-6 md:mt-7">
                    <div className="relative flex items-center justify-center">
                      <div className="border-t border-gray-200/60 w-full"></div>
                      <span className="bg-[#FAF7F2] px-3 text-[9px] font-black text-text-muted uppercase tracking-[0.25em] absolute">
                        Hoặc tiếp tục với
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 mt-5 md:mt-6">
                      <SocialButton icon={Chrome} label="Google" />
                      <SocialButton icon={Facebook} label="Facebook" />
                      <SocialButton icon={Github} label="Github" />
                    </div>
                  </div>

                  <p className="mt-8 text-text-muted font-medium text-sm">
                    Đã có tài khoản?{" "}
                    <button onClick={toggleView} className="text-secondary font-black hover:underline cursor-pointer transition-all">
                      Đăng nhập ngay
                    </button>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

const SocialButton = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <button className="flex items-center justify-center gap-1.5 py-2.5 px-1 rounded-2xl bg-background/30 border border-transparent hover:border-primary/20 hover:bg-background/50 transition-all font-bold text-[10px] md:text-xs text-text-dark group">
    <Icon size={14} className="md:size-[16px] transition-transform group-hover:scale-110" />
    <span className="hidden xs:inline">{label}</span>
  </button>
);
