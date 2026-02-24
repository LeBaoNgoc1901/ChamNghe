import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Lock, User, ArrowRight, Github, Chrome } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: "login" | "register";
}

export default function AuthModal({ isOpen, onClose, initialView = "login" }: AuthModalProps) {
  const [view, setView] = useState<"login" | "register">(initialView);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleView = () => setView(view === "login" ? "register" : "login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      if (view === "register") {
        setView("login");
      } else {
        // Handle successful login
        onClose();
      }
    }, 1500);
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
            className="absolute inset-0 bg-[#3E2C2C]/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-surface rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[550px]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/50 hover:bg-white text-text-dark transition-colors"
            >
              <X size={20} />
            </button>

            {/* Visual Panel (Left) */}
            <div className="hidden md:flex md:w-[40%] bg-primary relative overflow-hidden p-12 flex-col justify-between text-white">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
                  alt="Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent/50" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                  <User className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-serif font-black leading-tight mb-4">
                  {view === "login" ? "Chào mừng trở lại!" : "Khởi đầu hành trình mới"}
                </h2>
                <p className="text-white/80 font-medium">
                  {view === "login" 
                    ? "Đăng nhập để xem tiến độ và khám phá thêm các lộ trình nghề nghiệp mới."
                    : "Đăng ký ngay để cùng Chạm Nghề định hướng tương lai và xây dựng bản sắc riêng."}
                </p>
              </div>

              <div className="relative z-10 pt-8 border-t border-white/20">
                <p className="text-xs font-black uppercase tracking-widest text-white/60 mb-2">Đối tác tin cậy</p>
                <div className="flex gap-4 opacity-50 grayscale invert">
                  {/* Mock partner icons */}
                  <div className="w-8 h-8 rounded-full border border-white" />
                  <div className="w-8 h-8 rounded-full border border-white" />
                  <div className="w-8 h-8 rounded-full border border-white" />
                </div>
              </div>
            </div>

            {/* Form Panel (Right) */}
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-black text-text-dark mb-2">
                  {view === "login" ? "Đăng nhập" : "Đăng ký tài khoản"}
                </h3>
                <p className="text-text-muted text-sm">
                  {view === "login" ? "Nhập thông tin của bạn để tiếp tục" : "Điền thông tin bên dưới để bắt đầu"}
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {view === "register" && (
                  <div className="space-y-1">
                    <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-1">Họ và tên</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted/50" size={18} />
                      <input 
                        type="text" 
                        placeholder="Nguyễn Văn A"
                        className="w-full pl-12 pr-4 py-4 bg-background/50 border-2 border-transparent focus:border-primary/30 rounded-2xl outline-none transition-all font-bold placeholder:text-text-muted/30"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted/50" size={18} />
                    <input 
                      type="email" 
                      placeholder="you@email.com"
                      className="w-full pl-12 pr-4 py-4 bg-background/50 border-2 border-transparent focus:border-primary/30 rounded-2xl outline-none transition-all font-bold placeholder:text-text-muted/30"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-1">Mật khẩu</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted/50" size={18} />
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-4 bg-background/50 border-2 border-transparent focus:border-primary/30 rounded-2xl outline-none transition-all font-bold placeholder:text-text-muted/30"
                    />
                  </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {view === "login" ? "Đăng nhập" : "Tạo tài khoản"}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="my-8 flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs font-black text-text-muted uppercase tracking-widest">Hoặc</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-3 border-2 border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors font-bold text-sm text-text-dark">
                  <Chrome size={18} className="text-[#4285F4]" />
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 py-3 border-2 border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors font-bold text-sm text-text-dark">
                  <Github size={18} />
                  Github
                </button>
              </div>

              {/* Switch View */}
              <p className="text-center mt-8 text-sm font-medium text-text-muted">
                {view === "login" ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
                <button 
                  onClick={toggleView}
                  className="text-secondary font-black hover:underline underline-offset-4"
                >
                  {view === "login" ? "Đăng ký ngay" : "Đăng nhập"}
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
