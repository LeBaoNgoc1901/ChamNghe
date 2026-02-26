import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  ChevronDown,
  MessageCircle,
  Mail,
  ArrowLeft,
  HelpCircle,
  Award,
  Briefcase,
  Trophy,
  Sparkles,
  Zap,
  BookOpen,
  Smartphone,
  ShieldCheck,
  UserPlus
} from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQCard: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className={`mb-6 rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${isOpen ? 'bg-primary/5 border-primary/30 shadow-2xl shadow-primary/10' : 'bg-white border-gray-100 hover:border-primary/20 hover:shadow-xl'}`}>
    <button
      onClick={onClick}
      className="w-full py-8 px-10 flex items-center justify-between gap-6 text-left group"
    >
      <span className={`text-xl font-serif font-black transition-colors leading-tight ${isOpen ? 'text-primary' : 'text-text-dark group-hover:text-primary'}`}>
        {question}
      </span>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen ? 'bg-primary text-white rotate-180 shadow-lg shadow-primary/30' : 'bg-gray-50 text-primary'}`}>
        <ChevronDown size={24} />
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "circOut" }}
        >
          <div className="px-10 pb-10 text-text-muted leading-relaxed border-t border-primary/10 pt-6 text-lg font-light">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

interface HelpCenterProps {
  onBack?: () => void;
}

const HelpCenter: React.FC<HelpCenterProps> = ({ onBack }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { icon: <HelpCircle className="text-secondary" />, title: "Khám phá bản thân", count: 18, desc: "MBTI, xu hướng tâm lý" },
    { icon: <Award className="text-primary" />, title: "Hành trình số hóa", count: 14, desc: "Chứng chỉ, Blockchain ID" },
    { icon: <Trophy className="text-accent" />, title: "Chạm & Khắc", count: 22, desc: "Cuộc thi, giải thưởng" },
    { icon: <Briefcase className="text-text-dark" />, title: "Kết nối tương lai", count: 20, desc: "Tuyển dụng, Portfolio" },
  ];

  const faqs = [
    {
      category: "MBTI",
      question: "Kết quả này có thay đổi theo thời gian không?",
      answer: "Trong tâm lý học, tính cách là một thực thể động. Khi bạn trải nghiệm môi trường làm việc mới, vượt qua thử thách hoặc thay đổi tư duy, các chỉ số MBTI có thể dịch chuyển. Chạm Nghề khuyến khích bạn thực hiện lại trắc nghiệm sau mỗi 6-12 tháng để nhận diện sự trưởng thành của bản thân."
    },
    {
      category: "Chứng chỉ",
      question: "Tôi có thể in chứng chỉ ra giấy hay chỉ dùng online?",
      answer: "Cả hai! Hệ thống cung cấp định dạng PDF Vector 300DPI hoàn hảo cho in ấn chuyên nghiệp trên các chất liệu giấy mỹ thuật. Đồng thời, mã QR trên chứng chỉ cho phép nhà tuyển dụng quét để truy xuất hồ sơ năng lực trực tuyến của bạn ngay lập tức."
    },
    {
      category: "Chứng chỉ",
      question: "Dữ liệu MBTI có dùng để ứng tuyển việc làm được không?",
      answer: "Hoàn toàn được. Hiện nay nhiều doanh nghiệp hiện đại sử dụng MBTI để sắp xếp nhân sự vào đúng vị trí thế mạnh. Bạn có thể đính kèm kết quả phân tích chi tiết của Chạm Nghề vào CV để chứng minh sự tự thấu hiểu và định hướng nghề nghiệp rõ ràng của mình."
    },
    {
      category: "Chứng chỉ",
      question: "Làm sao để share lên LinkedIn chuyên nghiệp nhất?",
      answer: "Trong mục 'Thành tựu', hãy nhấn vào nút LinkedIn. Hệ thống sẽ tự động chuyển hướng bạn đến form 'Add Licenses & Certifications' của LinkedIn với đầy đủ thông tin: Tên tổ chức (Chạm Nghề), Mã định danh xác thực và đường link kiểm chứng công khai."
    },
    {
      category: "Hợp tác",
      question: "Nếu tôi làm mất mã xác thực chứng chỉ thì sao?",
      answer: "Đừng lo lắng. Mã xác thực được liên kết vĩnh viễn với tài khoản của bạn. Bạn chỉ cần đăng nhập, vào mục 'Chứng chỉ của tôi' để lấy lại mã hoặc tải mới bản copy bất kỳ lúc nào."
    },
    {
      category: "Cuộc thi",
      question: "Tôi có thể tham gia nhiều cuộc thi cùng lúc không?",
      answer: "Bạn có thể đăng ký tham gia không giới hạn các cuộc thi Case Study đang mở. Tuy nhiên, chúng mình khuyến khích sự tập trung chuyên sâu để có kết quả tốt nhất và ghi điểm cao trên Bảng xếp hạng Mentor vinh danh."
    },
    {
      category: "Hệ thống",
      question: "Làm sao để xóa vĩnh viễn tài khoản của tôi?",
      answer: "Bạn có thể vào Cài đặt -> Bảo mật -> Yêu cầu xóa dữ liệu. Hệ thống sẽ có thời gian chờ 30 ngày để bạn suy nghĩ lại trước khi mọi dữ liệu trắc nghiệm và chứng chỉ bị xóa hoàn toàn khỏi máy chủ vật lý."
    },
    {
      category: "Hệ thống",
      question: "Chạm Nghề có ứng dụng di động không?",
      answer: "Hiện tại chúng mình ưu tiên trải nghiệm Web mượt mà trên mọi thiết bị. Tuy nhiên, phiên bản App cho iOS và Android đang được đội ngũ phát triển hoàn thiện và dự kiến ra mắt vào Quý IV năm 2024 với nhiều tính năng tương tác thực tế ảo hơn."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-surface/50 pb-24"
    >
      {/* Hero Section */}
      <div className="bg-[#0A2E1F] pt-20 pb-40 px-6 relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-16 group mx-auto"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-sm">Về trang chủ</span>
          </button>

          <h1 className="text-5xl md:text-8xl font-serif font-black text-primary mb-10 tracking-tighter leading-[1.1] italic">
            Chúng mình giúp được <br className="hidden md:block" /> gì cho bạn?
          </h1>

          <div className="relative max-w-2xl mx-auto shadow-3xl">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-primary" size={28} />
            <input
              type="text"
              placeholder="Nhập từ khóa về MBTI, Chứng chỉ, Cuộc thi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white rounded-[3rem] py-8 pl-20 pr-10 text-xl focus:outline-none focus:ring-8 focus:ring-primary/10 transition-all text-text-dark shadow-2xl border-2 border-primary/20"
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-white/40 text-sm">
            <span>Tìm kiếm phổ biến:</span>
            {['In chứng chỉ', 'LinkedIn', 'MBTI thay đổi', 'Hủy tài khoản'].map(tag => (
              <button key={tag} onClick={() => setSearchQuery(tag)} className="text-white hover:text-primary underline underline-offset-4 decoration-primary/30 transition-colors">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -translate-y-20 relative z-20">
        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group cursor-pointer hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                {React.cloneElement(cat.icon as React.ReactElement, { size: 36 })}
              </div>
              <h3 className="text-xl font-serif font-black text-text-dark mb-2 tracking-tight group-hover:text-primary transition-colors">{cat.title}</h3>
              <p className="text-text-muted text-sm mb-4">{cat.desc}</p>
              <div className="mt-auto px-4 py-1.5 rounded-full bg-gray-50 text-text-muted text-xs font-black uppercase tracking-widest group-hover:bg-primary group-hover:text-white transition-all">
                {cat.count} bài viết
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-serif font-black text-text-dark flex items-center gap-4 tracking-tighter">
              <Sparkles className="text-primary" size={40} />
              Câu hỏi phổ biến nhất
            </h2>
            <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent ml-8" />
          </div>

          <div className="space-y-2">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <FAQCard
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))
            ) : (
              <div className="text-center py-32 bg-white rounded-[4rem] border-2 border-dashed border-gray-200 shadow-inner">
                <Search size={64} className="mx-auto text-text-muted mb-6 opacity-10" />
                <p className="text-text-muted text-2xl font-serif italic">Rất tiếc, chúng mình không tìm thấy nội dung cần tìm...</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-6 text-primary font-black hover:underline underline-offset-4"
                >
                  Xem tất cả câu hỏi
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Deep Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-lg text-center">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-8 text-secondary">
              <MessageCircle size={32} />
            </div>
            <h4 className="text-2xl font-serif font-black mb-4 tracking-tight">Cộng đồng Gen Z</h4>
            <p className="text-text-muted text-sm leading-relaxed mb-6">Tham gia group hỗ trợ trên Facebook để thảo luận cùng 10,000+ thành viên khác.</p>
            <button className="font-black text-secondary hover:underline">Tham gia ngay →</button>
          </div>
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-lg text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary">
              <Zap size={32} />
            </div>
            <h4 className="text-2xl font-serif font-black mb-4 tracking-tight">Kỹ thuật & Bug</h4>
            <p className="text-text-muted text-sm leading-relaxed mb-6">Gặp lỗi khi làm trắc nghiệm hoặc thanh toán? Báo cáo ngay để nhận chứng chỉ Free.</p>
            <button className="font-black text-primary hover:underline">Báo lỗi hệ thống →</button>
          </div>
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-lg text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8 text-accent">
              <BookOpen size={32} />
            </div>
            <h4 className="text-2xl font-serif font-black mb-4 tracking-tight">Tài liệu hướng dẫn</h4>
            <p className="text-text-muted text-sm leading-relaxed mb-6">Thư viện tra cứu chi tiết về 16 nhóm tính cách và lộ trình thăng tiến sự nghiệp.</p>
            <button className="font-black text-accent hover:underline">Vào kho tài liệu →</button>
          </div>
        </div>

        {/* Connection Section */}
        <div className="bg-text-dark rounded-[5rem] p-16 md:p-24 border-4 border-primary/20 flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden ring-[20px] ring-white">
          <div className="absolute top-0 right-0 p-20 opacity-10 text-primary pointer-events-none">
            <Smartphone size={300} />
          </div>
          <div className="absolute bottom-0 left-0 p-20 opacity-10 text-emerald-500 pointer-events-none">
            <Zap size={250} />
          </div>

          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/20 text-primary text-sm font-black mb-8 border border-primary/30 uppercase tracking-widest">
              <UserPlus size={18} />
              Trợ giúp 1:1
            </div>
            <h3 className="text-5xl md:text-7xl font-serif font-black text-white mb-8 tracking-tighter leading-[1.1]">Vẫn còn băn khoăn?</h3>
            <p className="text-white/50 text-2xl mb-0 italic font-light leading-relaxed">Đội ngũ Mentor và Tutor của chúng mình luôn trực tuyến 20/7 để lắng nghe mọi câu chuyện của bạn.</p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-primary text-[#0A2E1F] rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 shadow-3xl shadow-primary/40 hover:brightness-110 transition-all border-b-8 border-primary-dark"
            >
              <MessageCircle size={32} />
              Chat với Tutor
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white/5 backdrop-blur-md text-white border-4 border-white/10 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 hover:bg-white/10 transition-all"
            >
              <Mail size={32} />
              Gửi Email hỗ trợ
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HelpCenter;
