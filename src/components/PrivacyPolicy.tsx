import React from "react";
import { motion } from "motion/react";
import { 
  Shield, 
  Lock, 
  Cloud, 
  Mail, 
  FileSearch, 
  Trash2, 
  ArrowLeft, 
  Fingerprint, 
  Database, 
  WifiOff, 
  Eye, 
  Smartphone,
  Server
} from "lucide-react";

interface PrivacyPolicyProps {
  onBack?: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-surface/50 pb-24"
    >
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-16 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Quay lại trang chủ</span>
        </button>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary text-xs font-black mb-8 border border-primary/20">
              <Shield size={16} />
              <span className="tracking-[0.2em] uppercase">Tài sản dữ liệu của bạn</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-primary mb-10 tracking-tighter leading-[1.1] drop-shadow-sm">
              Quyền riêng tư <br className="hidden md:block" /> là tuyệt đối.
            </h1>
            <p className="text-text-muted text-2xl italic leading-relaxed max-w-2xl font-light">
              Chúng tôi không chỉ lưu giữ dữ liệu, chúng tôi bảo vệ hành trình thấu hiểu bản thân của bạn khỏi mọi sự xâm phạm.
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              <div className="w-72 h-72 bg-primary/15 rounded-[4rem] group-hover:rotate-6 transition-transform duration-700 absolute inset-0 blur-3xl opacity-50" />
              <div className="w-72 h-72 bg-white rounded-[4rem] shadow-2xl flex items-center justify-center relative z-10 border border-gray-100 group-hover:-translate-y-4 transition-transform duration-500">
                <Fingerprint size={140} className="text-primary group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[
            { 
              icon: <Mail className="text-emerald-500" />, 
              title: "Email & Danh tính", 
              desc: "Chúng tôi thu thập Email để duy trì tài khoản và gửi chứng chỉ. Tên thật của bạn chỉ hiển thị trong hồ sơ nội bộ để phục vụ xác thực danh tính thực tế." 
            },
            { 
              icon: <Lock className="text-primary" />, 
              title: "Dữ liệu MBTI", 
              desc: "Phản hồi trắc nghiệm được mã hóa ngay khi nộp. Thuật toán phân tích chỉ xử lý các biến số ẩn danh để đưa ra đề xuất nghề nghiệp." 
            },
            { 
              icon: <Server className="text-indigo-500" />, 
              title: "Lưu trữ máy chủ", 
              desc: "Dữ liệu được lưu trữ tại trung tâm dữ liệu tiêu chuẩn Tier III, sao lưu 24/7 và mã hóa đa lớp (AES-256) trước khi xuống đĩa cứng." 
            },
            { 
              icon: <WifiOff className="text-orange-500" />, 
              title: "Quyền offline", 
              desc: "Mọi thông tin phiên làm việc tạm thời sẽ được xóa ngay khi trình duyệt đóng, đảm bảo không có dấu vết nếu bạn sử dụng máy tính công cộng." 
            },
            { 
              icon: <Smartphone className="text-blue-500" />, 
              title: "Thông báo đẩy", 
              desc: "Chúng mình chỉ gửi thông báo về kết quả chứng chỉ hoặc cuộc thi bạn đã đăng ký. Cam kết nói không với Mail rác và quảng cáo rác." 
            },
            { 
              icon: <Eye className="text-accent" />, 
              title: "Minh bạch tuyệt đối", 
              desc: "Bạn có thể xem nhật ký những lần dữ liệu của mình được truy xuất bời hệ thống trong phần cài đặt bảo mật của tài khoản." 
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif font-black text-text-dark mb-4">{item.title}</h3>
              <p className="text-text-muted text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Compliance Section */}
        <div className="space-y-12">
          <div className="bg-white rounded-[4rem] p-12 md:p-20 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
              <Database size={200} />
            </div>
            
            <h2 className="text-4xl font-serif font-black text-text-dark mb-16 text-center">Tiêu chuẩn tuân thủ & Quyền hạn</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
              <div className="space-y-8">
                <div className="flex gap-8 items-start">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600 font-black italic">DP</div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-text-dark mb-3">Quyền Trích xuất Dữ liệu</h4>
                    <p className="text-text-muted leading-relaxed">Người dùng có thể yêu cầu trích xuất toàn bộ lịch sử trắc nghiệm, điểm số bảng xếp hạng và chứng chỉ dưới dạng JSON hoặc PDF trong vòng 48h làm việc.</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-black italic">RT</div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-text-dark mb-3">Quyền Được Lãng Quên</h4>
                    <p className="text-text-muted leading-relaxed">Khi bạn đóng tài khoản, mọi bản ghi dữ liệu sẽ được ghi đè bằng giá trị rỗng trước khi xóa vĩnh viễn khỏi máy chủ vật lý, không thể phục hồi dưới bất kỳ hình thức nào.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-8 items-start">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-secondary font-black italic">LS</div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-text-dark mb-3">Lưu trữ Dữ liệu Bền vững</h4>
                    <p className="text-text-muted leading-relaxed">Chúng tôi lưu trữ thông tin của bạn trong 7 năm hoặc cho đến khi có yêu cầu xóa để đảm bảo bạn có thể khôi phục lại hồ sơ năng lực nếu quay trở lại platform.</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent font-black italic">UC</div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-text-dark mb-3">Thông báo thay đổi</h4>
                    <p className="text-text-muted leading-relaxed">Mọi thay đổi trong chính sách thu thập dữ liệu sẽ được thông báo qua Email trước ít nhất 30 ngày để người dùng có thời gian ra quyết định về quyền riêng tư của mình.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#104D31] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-emerald-400/10 rounded-full blur-[100px]" />
            <h3 className="text-2xl font-serif font-black mb-4 relative z-10">Báo cáo vi phạm bảo mật</h3>
            <p className="text-emerald-100/60 max-w-lg mx-auto mb-8 relative z-10">Nếu bạn phát hiện bất kỳ nguy cơ bảo mật nào, hãy báo ngay cho chúng tôi để nhận phần thưởng đóng góp cộng đồng.</p>
            <a href="mailto:security@chamnghe.vn" className="inline-block px-12 py-4 bg-emerald-400 text-[#104D31] font-black rounded-2xl hover:bg-white transition-all shadow-lg relative z-10">
              security@chamnghe.vn
            </a>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-text-muted text-sm opacity-40 uppercase font-black tracking-[0.5em]">Trust & Privacy Center</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
