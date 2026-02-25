import React from "react";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Award, 
  Users, 
  AlertCircle, 
  ArrowLeft, 
  BookOpen, 
  UserCheck, 
  Globe, 
  Scale,
  Handshake,
  FileLock
} from "lucide-react";

interface TermsOfServiceProps {
  onBack?: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  const sections = [
    {
      id: "01",
      title: "Quản lý Tài khoản & Định danh",
      icon: <UserCheck className="text-secondary" size={24} />,
      content: "Người dùng chịu trách nhiệm duy nhất về tính bảo mật của thông tin đăng nhập. Mọi hoạt động được thực hiện dưới tên tài khoản của bạn sẽ được coi là do chính bạn thực hiện. Chúng tôi khuyến khích việc sử dụng mật khẩu mạnh và không chia sẻ tài khoản để đảm bảo tính toàn vẹn của kết quả trắc nghiệm cá nhân."
    },
    {
      id: "02",
      title: "Quyền sở hữu & Xác thực chứng chỉ",
      icon: <Award className="text-primary" size={24} />,
      content: "Chứng chỉ 'Dấu ấn bản sắc' là tài sản tinh thần và bằng chứng năng lực cá nhân. Tuy nhiên, mã định danh duy nhất (Certificate Hash) thuộc quyền quản lý của Chạm Nghề để phục vụ việc xác thực 24/7 từ phía nhà tuyển dụng. Hành vi chỉnh sửa thông tin trên chứng chỉ kỹ thuật số sẽ dẫn đến việc hủy bỏ chứng chỉ vĩnh viễn."
    },
    {
      id: "03",
      title: "Quy chế cuộc thi & Tài sản sáng tạo",
      icon: <Globe className="text-accent" size={24} />,
      content: "Khi tham gia các cuộc thi Case Study, bạn giữ bản quyền đối với ý tưởng gốc của mình. Chạm Nghề giữ quyền vinh danh, triển lãm và sử dụng các sản phẩm dự thi cho mục đích giáo dục, truyền thông cộng đồng mà không cần chi trả phí bản quyền thêm, nhằm lan tỏa giá trị tri thức cho thế hệ trẻ Việt."
    },
    {
      id: "04",
      title: "Quy tắc ứng xử và Trách nhiệm",
      icon: <Handshake className="text-emerald-500" size={24} />,
      content: "Luôn ứng xử văn minh, tôn trọng bản sắc nghề nghiệp riêng biệt của mỗi cá nhân và nói không với mọi hành vi gian lận. Chúng tôi có quyền tạm khóa hoặc xóa tài khoản nếu phát hiện các hành vi công kích cá nhân, đánh cắp ý tưởng hoặc gian lận hệ thống."
    },
    {
      id: "05",
      title: "Giới hạn Trách nhiệm pháp lý",
      icon: <Scale className="text-gray-700" size={24} />,
      content: "Các kết quả trắc nghiệm và đề xuất nghề nghiệp mang tính chất tham khảo, tư vấn hướng nghiệp. Chạm Nghề không chịu trách nhiệm cho bất kỳ thiệt hại trực tiếp hay gián tiếp nào phát sinh từ các quyết định cá nhân dựa trên các thông tin được cung cấp trên nền tảng."
    },
    {
      id: "06",
      title: "Bảo lưu quyền & Thay đổi điều khoản",
      icon: <FileLock className="text-orange-500" size={24} />,
      content: "Chạm Nghề nắm giữ quyền xác thực chứng chỉ và bảo lưu quyền vinh danh các sản phẩm dự thi xuất sắc. Chúng tôi có quyền sửa đổi hoặc thay thế các điều khoản này vào bất kỳ lúc nào để phản ánh đúng hơn sự phát triển của hệ sinh thái giáo dục."
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
          className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Quay lại trang chủ</span>
        </button>

        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black mb-8">
            <BookOpen size={16} />
            <span className="tracking-[0.2em] uppercase">Hợp đồng pháp lý</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-primary mb-8 tracking-tighter leading-[1.2] drop-shadow-sm">
            Điều khoản dịch vụ
          </h1>
          <p className="text-text-muted text-xl max-w-3xl mx-auto italic leading-relaxed font-light">
            Chào mừng bạn đến với cộng đồng "Chạm Nghề". Hãy dành ít phút để đọc kỹ bản thỏa thuận này để bảo vệ quyền lợi của chính bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-b-4 border-b-transparent hover:border-b-primary"
            >
              <div className="absolute top-0 right-0 p-8">
                <span className="text-9xl font-serif font-black text-gray-50 group-hover:text-primary/5 transition-colors select-none leading-none">
                  {section.id}
                </span>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-white group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-serif font-black text-text-dark mb-6 tracking-tight">
                  {section.title}
                </h2>
                <p className="text-text-muted leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deep Detail Section */}
        <div className="mt-24 space-y-16">
          <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-sm border border-gray-100">
            <h3 className="text-3xl font-serif font-black text-text-dark mb-10 text-center">Cam kết của chúng tôi</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl font-serif font-black text-primary mb-4 italic">Bản sắc</div>
                <p className="text-text-muted text-sm leading-relaxed">Chúng tôi cam kết tôn trọng mọi xu hướng nghề nghiệp và sự khác biệt cá nhân trong cộng đồng.</p>
              </div>
              <div>
                <div className="text-4xl font-serif font-black text-secondary mb-4 italic">Công bằng</div>
                <p className="text-text-muted text-sm leading-relaxed">Mọi cuộc thi và bảng xếp hạng đều được vận hành bởi thuật toán khách quan, không chịu sự can thiệp cá nhân.</p>
              </div>
              <div>
                <div className="text-4xl font-serif font-black text-accent mb-4 italic">Đồng hành</div>
                <p className="text-text-muted text-sm leading-relaxed">Chạm Nghề không chỉ cung cấp công cụ, chúng tôi là người bạn đồng hành trong suốt hành trình sự nghiệp.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-between p-12 bg-primary/5 rounded-[3rem] border-2 border-primary/10 border-dashed">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary shadow-lg ring-8 ring-primary/5">
                <AlertCircle size={40} />
              </div>
              <div>
                <h4 className="text-xl font-serif font-black text-text-dark mb-1">Cần bản PDF chính thức?</h4>
                <p className="text-text-muted">Tải về bản Điều khoản dịch vụ có đóng dấu mộc cho mục đích pháp lý.</p>
              </div>
            </div>
            <button className="px-10 py-5 bg-text-dark text-white rounded-2xl font-black hover:bg-black transition-all shadow-xl">
              Tải bản PDF
            </button>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-text-muted text-sm mb-2 uppercase tracking-[0.4em] font-medium opacity-50">© 2024 Chạm Nghề Platform</p>
          <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
