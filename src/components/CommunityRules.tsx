import React from "react";
import { motion } from "motion/react";
import {
  Users,
  Heart,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
  Scale,
  MessageSquareOff,
  HandHeart,
  CheckCircle2,
  Flag,
  UserPlus
} from "lucide-react";

interface CommunityRulesProps {
  onBack?: () => void;
}

const CommunityRules: React.FC<CommunityRulesProps> = ({ onBack }) => {
  const rules = [
    {
      icon: <Heart className="text-secondary" size={24} />,
      title: "Ứng xử văn minh & Tử tế",
      content: "Chúng mình là một gia đình Gen Z đa sắc màu. Hãy luôn giữ thái độ lịch sự, xây dựng và cởi mở. Mọi hình thức công kích cá nhân, phân biệt đối xử hay dùng ngôn từ tiêu chuẩn kép đều hoàn toàn không được chấp nhận tại Chạm Nghề.",
      example: "Nên: Góp ý chân thành dưới bài dự thi của bạn khác. | Không nên: Chê bai thô bạo hoặc dùng từ ngữ nhạy cảm."
    },
    {
      icon: <Sparkles className="text-primary" size={24} />,
      title: "Tôn trọng Bản sắc độc bản",
      content: "Mỗi nghề nghiệp đều có giá trị riêng biệt. Từ Thiết kế, Code đến Tâm lý hay Đầu bếp - không có nghề nào cao quý hơn nghề nào. Hãy tôn trọng trí tuệ và lựa chọn khác biệt của những người xung quanh bạn như cách bạn yêu bản ngã của mình.",
      example: "Nên: Tìm hiểu về các ngành nghề lạ lẫm. | Không nên: Áp đặt định kiến 'nghề này nghèo', 'nghề kia lỗi thời'."
    },
    {
      icon: <Scale className="text-accent" size={24} />,
      title: "Trí tuệ Trung thực (Integrity)",
      content: "Nói không tuyệt đối với mọi hành vi gian lận. Thành tựu chỉ thực sự rạng rỡ khi nó đến từ năng lực tự thân. Đừng để một chứng chỉ 'ảo' làm mất đi giá trị 'thật' trong con người nghề nghiệp tương lai của bạn.",
      example: "Nên: Tự mình thực hiện trắc nghiệm & Case Study. | Không nên: Sao chép ý tưởng hoặc sử dụng bot để gian lận điểm số."
    },
    {
      icon: <MessageSquareOff className="text-red-400" size={24} />,
      title: "Chống tin giả & Bảo mật",
      content: "Tránh chia sẻ các thông tin chưa kiểm chứng hoặc các nội dung quảng cáo rác (Spam). Đồng thời, hãy bảo vệ thông tin cá nhân của người khác như cách chúng mình bảo vệ dữ liệu của bạn.",
      example: "Nên: Chia sẻ kinh nghiệm thực đạt. | Không nên: Quảng bá các dịch vụ trái phép hoặc leak thông tin bạn bè."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-surface/50 pb-24"
    >
      <div className="max-w-5xl mx-auto px-6 pt-16">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-16 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Quay lại trang chủ</span>
        </button>

        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black mb-8 border border-emerald-100 shadow-sm">
            <Users size={18} />
            <span className="tracking-[0.3em] uppercase">Văn hóa Gen Z Việt</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-black text-primary mb-10 tracking-tighter leading-[1.1] italic drop-shadow-sm">
            Quy tắc cộng đồng
          </h1>
          <p className="text-text-muted text-2xl max-w-3xl mx-auto italic leading-relaxed font-light">
            Chúng mình xây dựng một hệ sinh thái sáng tạo, nơi sự trung thực và lòng tử tế được đặt lên hàng đầu.
          </p>
        </div>

        <div className="space-y-8 mb-24">
          {rules.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", damping: 20 }}
              className="bg-white rounded-[4rem] p-10 md:p-14 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12 items-center lg:items-start group hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-700"
            >
              <div className="w-24 h-24 rounded-3xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:rotate-12 transition-all duration-700 shadow-inner">
                {rule.icon && React.cloneElement(rule.icon as React.ReactElement, { size: 48 })}
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-serif font-black text-text-dark mb-6 tracking-tight group-hover:text-primary transition-colors">{rule.title}</h2>
                <p className="text-text-muted leading-relaxed text-xl mb-8 font-light italic">{rule.content}</p>
                <div className="bg-primary/5 rounded-2xl p-6 border-l-8 border-primary inline-block text-left relative overflow-hidden">
                  <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs mb-2">
                    <CheckCircle2 size={14} />
                    Ví dụ thực tế
                  </div>
                  <p className="text-text-dark font-medium leading-relaxed">{rule.example}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reporting System */}
        <div className="bg-white rounded-[5rem] p-16 md:p-24 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-16 opacity-[0.03]">
            <Flag size={200} />
          </div>

          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1">
              <h3 className="text-4xl font-serif font-black text-text-dark mb-8 tracking-tighter">Hệ thống báo cáo & Giám sát</h3>
              <p className="text-text-muted text-lg leading-relaxed mb-10">
                Nếu bạn thấy bất kỳ bài đăng, bình luận hoặc hành vi nào vi phạm các quy tắc trên, hãy sử dụng tính năng "Báo cáo" ngay tại nội dung đó. Đội ngũ Admin sẽ xử lý trong vòng 12h làm việc để bảo vệ không gian an toàn cho bạn.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gray-50 rounded-full text-xs font-black uppercase text-text-muted border border-gray-100">Xử lý 24/7</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full text-xs font-black uppercase text-text-muted border border-gray-100">Bảo mật danh tính</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full text-xs font-black uppercase text-text-muted border border-gray-100">Quyền kháng nghị</span>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <div className="bg-primary p-12 rounded-[4rem] text-white shadow-2xl shadow-primary/30 relative group overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <HandHeart size={64} className="mb-6 mx-auto group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-xl font-serif font-black mb-2 text-center">Đã xử lý</h4>
                <div className="text-5xl font-black text-center mb-4 leading-none">1,240+</div>
                <p className="text-white/60 text-xs uppercase tracking-widest text-center">vụ vi phạm văn hóa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 p-16 bg-text-dark rounded-[4rem] text-center text-white relative overflow-hidden group">
          <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-[2s]" />
          <div className="relative z-10 flex flex-col items-center">
            <UserPlus size={48} className="text-primary mb-8" />
            <p className="text-3xl font-serif italic mb-4">"Cùng Chạm Nghề xây dựng văn hóa nghề nghiệp tử tế."</p>
            <div className="flex items-center gap-4 text-white/30 text-sm font-black uppercase tracking-[0.4em]">
              <div className="w-12 h-px bg-white/20" />
              Chạm Nghề Safety Team
              <div className="w-12 h-px bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CommunityRules;
