import React from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  BrainCircuit
} from "lucide-react";
import { Logo } from "./Logo";

interface UserProfileProps {
  user: any;
  mbtiResult: string | null;
  navigate: (view: any) => void;
  logout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, mbtiResult, navigate, logout }) => {
  return (
    <motion.section
      key="profile"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full min-h-[80vh] py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12 scale-150 pointer-events-none hidden lg:block">
          <Logo />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16 lg:items-start relative z-10">
          {/* Avatar Section */}
          <div className="flex flex-col items-center lg:items-center space-y-6">
            <div className="relative group">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl shadow-primary/10 transition-transform group-hover:scale-[1.02]">
                <img
                  src={user?.avatar || "https://i.pravatar.cc/300"}
                  alt="Profile Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-5 rounded-[2.5rem] shadow-2xl border-4 border-white">
                <Sparkles size={32} />
              </div>
            </div>
            <div className="text-center">
              <span className="px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-black uppercase tracking-[0.2em]">
                Hội viên bản sắc
              </span>
            </div>
          </div>
          
          {/* Info Section */}
          <div className="flex-1 space-y-12">
            <div>
              <p className="text-base font-bold text-primary mb-2 uppercase tracking-[0.3em] opacity-60">Xin chào {user?.name}</p>
              <h2 className="text-6xl md:text-8xl font-serif font-black text-text-dark leading-tight tracking-tight">
                {user?.name || "Thành viên"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/40 backdrop-blur-md p-8 rounded-[3rem] border border-white/60 shadow-sm group hover:border-primary/20 transition-all">
                <p className="text-xs font-black uppercase tracking-widest text-text-muted mb-3 opacity-60">Tên tài khoản</p>
                <p className="text-text-dark font-black text-2xl truncate">{user?.name}</p>
              </div>
              <div className="bg-white/40 backdrop-blur-md p-8 rounded-[3rem] border border-white/60 shadow-sm group hover:border-primary/20 transition-all">
                <p className="text-xs font-black uppercase tracking-widest text-text-muted mb-3 opacity-60">Email hội viên</p>
                <p className="text-text-dark font-black text-2xl truncate">{user?.email}</p>
              </div>
              <div className="bg-white/40 backdrop-blur-md p-8 rounded-[3rem] border border-white/60 shadow-sm group hover:border-primary/20 transition-all md:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-text-muted mb-3 opacity-60">Kết quả MBTI</p>
                    <div className="flex items-center gap-3">
                      <span className="text-text-dark font-black text-3xl">
                        {mbtiResult || "Chưa có MBTI"}
                      </span>
                      {mbtiResult && (
                        <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-black uppercase rounded-full">Đạt chứng chỉ</span>
                      )}
                    </div>
                  </div>
                  {!mbtiResult && (
                    <button 
                      onClick={() => navigate('quiz')}
                      className="px-6 py-3 bg-secondary text-white rounded-2xl font-black text-sm shadow-xl shadow-secondary/20 hover:scale-105 transition-all"
                    >
                      Kiểm tra ngay
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              {mbtiResult && (
                <button 
                  onClick={() => navigate('certificates')}
                  className="px-12 py-5 bg-primary text-white rounded-[2.5rem] font-black text-lg shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                >
                  <Sparkles size={20} />
                  Dấu ấn của tôi
                </button>
              )}
              <button 
                onClick={logout}
                className="px-12 py-5 bg-white text-text-muted border-2 border-gray-100 rounded-[2.5rem] font-black text-lg hover:bg-red-50 hover:text-red-500 hover:border-red-100 active:scale-95 transition-all"
              >
                Đăng xuất khỏi hệ thống
              </button>
            </div>
          </div>
        </div>
        
        {/* Statistics Section */}
        <div className="mt-24 pt-16 border-t border-primary/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatBox value="01" label="Bài thi đấu" />
          <StatBox value="120" label="Kinh nghiệm" />
          <StatBox value="04" label="Huy chương" />
          <StatBox value="#1" label="Hạng MBTI" />
        </div>
      </div>
    </motion.section>
  );
};

const StatBox = ({ value, label }: { value: string; label: string }) => (
  <div className="p-8 rounded-[3.5rem] bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all border border-white/40 text-center">
    <p className="text-4xl font-black text-primary mb-2 leading-none">{value}</p>
    <p className="text-xs font-black text-text-muted uppercase tracking-[0.2em]">{label}</p>
  </div>
);

export default UserProfile;
