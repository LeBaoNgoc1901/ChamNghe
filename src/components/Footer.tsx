import React from "react";
import { Mail, Facebook, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";

interface FooterProps {
  onNavigate?: (view: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, view: string) => {
    e.preventDefault();
    if (onNavigate) onNavigate(view);
  };

  return (
    <footer className="bg-[#1A1A1A] border-t border-white/5 text-[#FDF6EC] pt-8 pb-6 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand & Social */}
          <div className="space-y-5">
            <h3 className="text-2xl font-serif font-black text-white tracking-tight">
              Chạm nghề
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs italic">
              "Thấu hiểu bản thân, khơi nguồn nội lực, kiến tạo tương lai."
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "Youtube" },
                { icon: Linkedin, label: "LinkedIn" }
              ].map((item) => (
                <a 
                  key={item.label} 
                  href="#" 
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-[#FF6F61] hover:border-[#FF6F61] transition-all duration-300 group"
                  aria-label={item.label}
                >
                  <item.icon size={18} className="group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Khám phá */}
          <div className="space-y-5">
            <h4 className="text-xl font-serif font-black tracking-tight">Khám phá</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" onClick={(e) => handleNav(e, 'quiz')} className="text-white/60 hover:text-[#FF6F61] text-sm transition-colors">Trắc nghiệm MBTI</a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNav(e, 'careers')} className="text-white/60 hover:text-[#FF6F61] text-sm transition-colors">Danh mục nghề nghiệp</a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNav(e, 'certificates')} className="text-white/60 hover:text-[#FF6F61] text-sm transition-colors">Dấu ấn bản sắc</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hỗ trợ */}
          <div className="space-y-5">
            <h4 className="text-xl font-serif font-black tracking-tight">Hỗ trợ</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" onClick={(e) => handleNav(e, 'terms')} className="text-white/60 hover:text-[#FF6F61] text-sm transition-colors">Điều khoản dịch vụ</a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNav(e, 'privacy')} className="text-white/60 hover:text-[#FF6F61] text-sm transition-colors">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNav(e, 'help')} className="text-white/60 hover:text-[#FF6F61] text-sm transition-colors">Trung tâm trợ giúp</a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNav(e, 'community')} className="text-white/60 hover:text-[#FF6F61] text-sm transition-colors">Quy tắc cộng đồng</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-5">
            <h4 className="text-xl font-serif font-black tracking-tight">Kết nối</h4>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
              <p className="text-white/60 text-xs mb-4 relative z-10">Cập nhật xu hướng mỗi tuần.</p>
              
              <form className="flex flex-col gap-3 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                  <input 
                    type="email" 
                    placeholder="Email của bạn..." 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-[#FF6F61] transition-all"
                  />
                </div>
                <button className="w-full py-3 bg-[#FF6F61] text-white rounded-xl font-black text-xs flex items-center justify-center gap-2 hover:bg-[#FF8A7A] transition-all">
                  Gửi ngay
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex items-center justify-center">
          <p className="text-[11px] font-medium text-white/30 tracking-widest uppercase">
            © 2024 Chạm Nghề. <span className="text-white/40">Kiến tạo bản sắc Việt.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

