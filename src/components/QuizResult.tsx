import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Download, 
  Share2, 
  Sparkles, 
  Zap, 
  Compass, 
  Palette, 
  Cpu, 
  ShieldCheck,
  Heart,
  Lightbulb,
  Target,
  Users,
  ArrowRight
} from "lucide-react";

interface QuizResultProps {
  result: string;
  onRestart: () => void;
  onExploreCareers: () => void;
}

interface GroupData {
  groupName: string;
  title: string;
  mood: string;
  strengths: string[];
  weaknesses: string[];
  careers: { icon: any; label: string }[];
  colorClass: string;
  accentClass: string;
}

const GROUP_CONTENT: Record<string, GroupData> = {
  'NF': {
    groupName: 'Nhóm Người Lý Tưởng',
    title: 'Trái tim ấm áp & Tầm nhìn xa',
    mood: 'Chào bạn, tâm hồn nhạy cảm và đầy lý tưởng. Bạn như một làn gió mát lành mang đến sự thấu cảm cho thế giới này. Đừng bao giờ nghi ngờ giá trị của những giấc mơ bạn đang ấp ủ nhé, vì chính chúng sẽ thắp sáng con đường bạn đi.',
    strengths: ['Thấu cảm sâu sắc', 'Sáng tạo không giới hạn', 'Truyền cảm hứng'],
    weaknesses: ['Dễ bị quá tải cảm xúc', 'Khó từ chối người khác', 'Hay lý tưởng hóa quá mức'],
    careers: [
      { icon: Heart, label: 'Tâm lý học' },
      { icon: Palette, label: 'Nghệ thuật' },
      { icon: Users, label: 'Giáo dục' }
    ],
    colorClass: 'bg-accent/20 text-accent-foreground',
    accentClass: 'text-accent'
  },
  'NT': {
    groupName: 'Nhóm Người Lý Luận',
    title: 'Trí tuệ sắc bén & Tư duy chiến lược',
    mood: 'Chào nhà thông thái tương lai! Thế giới trong mắt bạn là một chuỗi những quy luật và tiềm năng cần được giải mã. Sự tò mò và khao khát kiến thức của bạn chính là chìa khóa mở ra những cánh cửa vĩ đại.',
    strengths: ['Tư duy logic', 'Độc lập & Quyết đoán', 'Giải quyết vấn đề'],
    weaknesses: ['Đôi khi quá khắt khe', 'Khó bày tỏ cảm xúc', 'Dễ sa vào chi tiết'],
    careers: [
      { icon: Cpu, label: 'Công nghệ' },
      { icon: Target, label: 'Chiến lược' },
      { icon: Lightbulb, label: 'Nghiên cứu' }
    ],
    colorClass: 'bg-primary/20 text-primary-foreground',
    accentClass: 'text-primary'
  },
  'SJ': {
    groupName: 'Nhóm Người Bảo Hộ',
    title: 'Sự tận tâm & Nền tảng vững chãi',
    mood: 'Bạn là điểm tựa đáng tin cậy nhất mà bất kỳ ai cũng mong muốn có được. Sự tỉ mỉ, trách nhiệm và lòng trung thành của bạn tạo nên một thế giới ổn định và trật tự. Cảm ơn bạn vì đã luôn là "mỏ neo" vững chắc.',
    strengths: ['Trách nhiệm cao', 'Tổ chức tốt', 'Đáng tin cậy'],
    weaknesses: ['Ngại thay đổi đột ngột', 'Dễ bị stress vì công việc', 'Quá cầu toàn'],
    careers: [
      { icon: ShieldCheck, label: 'Quản lý' },
      { icon: Target, label: 'Tài chính' },
      { icon: Users, label: 'Dịch vụ' }
    ],
    colorClass: 'bg-primary/10 text-text-dark',
    accentClass: 'text-primary'
  },
  'SP': {
    groupName: 'Nhóm Người Nghệ Nhân',
    title: 'Sự linh hoạt & Trải nghiệm thực tế',
    mood: 'Chào người bạn đầy năng lượng! Cuộc sống với bạn là một cuộc phiêu lưu không hồi kết. Khả năng thích nghi và óc quan sát thực tế giúp bạn luôn tỏa sáng theo cách riêng, dù ở bất kỳ đâu.',
    strengths: ['Thích nghi nhanh', 'Óc thẩm mỹ tốt', 'Thực tế & Năng động'],
    weaknesses: ['Dễ nhanh chán', 'Khó tập trung dài hạn', 'Hay trì hoãn'],
    careers: [
      { icon: Palette, label: 'Thiết kế' },
      { icon: Compass, label: 'Du lịch' },
      { icon: Zap, label: 'Sự kiện' }
    ],
    colorClass: 'bg-secondary/20 text-secondary-foreground',
    accentClass: 'text-secondary'
  }
};

interface CareerDetail {
  title: string;
  fact: string;
  match: number;
}

const DETAILED_CAREERS: Record<string, CareerDetail[]> = {
  'NF': [
    { title: 'Tâm lý học', fact: 'Thấu hiểu những góc khuất tâm hồn để chữa lành.', match: 95 },
    { title: 'Biên kịch', fact: 'Dùng ngòi bút vẽ nên những thế giới đầy cảm hứng.', match: 90 },
    { title: 'Quản lý NGO', fact: 'Kiến tạo giá trị bền vững cho cộng đồng.', match: 88 },
    { title: 'Content Creator', fact: 'Lan tỏa thông điệp tích cực qua lăng kính cá nhân.', match: 92 },
  ],
  'SJ': [
    { title: 'Kiểm toán', fact: 'Người gác cổng sự minh bạch và trật tự.', match: 94 },
    { title: 'Quản lý dự án', fact: 'Nhạc trưởng điều phối mọi nguồn lực về đích.', match: 91 },
    { title: 'Luật sư', fact: 'Bảo vệ công lý bằng tư duy sắc bén và trách nhiệm.', match: 89 },
    { title: 'Logistics', fact: 'Mạch máu vận hành dòng chảy của thế giới.', match: 87 },
  ],
  'SP': [
    { title: 'Thiết kế thời trang', fact: 'Biến vải vóc thành ngôn ngữ của cái tôi.', match: 93 },
    { title: 'Đầu bếp', fact: 'Nghệ sĩ sáng tạo trên từng hương vị thực tế.', match: 89 },
    { title: 'Nhiếp ảnh gia', fact: 'Bắt trọn khoảnh khắc bằng con mắt tinh tường.', match: 91 },
    { title: 'Kỹ sư hiện trường', fact: 'Làm chủ không gian và những cỗ máy khổng lồ.', match: 86 },
  ],
  'NT': [
    { title: 'Lập trình viên AI', fact: 'Không chỉ là code, mà là dạy máy tính cách tư duy.', match: 96 },
    { title: 'Chuyên gia bảo mật', fact: 'Lá chắn thép trong kỷ nguyên số.', match: 92 },
    { title: 'Phân tích dữ liệu', fact: 'Giải mã những "lời thì thầm" của con số.', match: 94 },
    { title: 'Tư vấn chiến lược', fact: 'Kiến trúc sư cho những bước đi vĩ đại.', match: 90 },
  ],
};

export default function QuizResult({ result, onRestart, onExploreCareers }: QuizResultProps) {
  const [showDetails, setShowDetails] = useState(false);

  const getGroup = (type: string) => {
    if (type.includes('NF')) return 'NF';
    if (type.includes('NT')) return 'NT';
    if (type.includes('SJ')) return 'SJ';
    if (type.includes('SP')) return 'SP';
    // Fallback logic for mixed types
    if (type.includes('N') && type.includes('F')) return 'NF';
    if (type.includes('N') && type.includes('T')) return 'NT';
    if (type.includes('S') && type.includes('J')) return 'SJ';
    if (type.includes('S') && type.includes('P')) return 'SP';
    return 'NF';
  };

  const groupKey = getGroup(result);
  const data = GROUP_CONTENT[groupKey];
  const detailedCareers = DETAILED_CAREERS[groupKey];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <div id="result-card" className="bg-surface rounded-[3rem] overflow-hidden shadow-2xl border border-primary/10 relative">
        {/* Header Background Decoration */}
        <div className={`absolute top-0 left-0 w-full h-48 ${data.colorClass} opacity-50 blur-3xl -z-10`} />
        
        <div className="p-8 md:p-12">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 text-xs font-bold uppercase tracking-widest text-text-muted mb-4">
                <Sparkles size={14} className={data.accentClass} />
                <span>{data.groupName}</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-black text-text-dark mb-2 tracking-tighter">
                {result}
              </h1>
              <h2 className={`text-2xl md:text-3xl font-serif italic ${data.accentClass}`}>
                {data.title}
              </h2>
            </div>
            <div className="hidden md:block">
              <div className={`w-32 h-32 rounded-3xl rotate-12 flex items-center justify-center ${data.colorClass} border-2 border-white shadow-xl`}>
                <span className="text-4xl font-serif font-bold">#1</span>
              </div>
            </div>
          </div>

          {/* Mood Message */}
          <div className="bg-background/50 rounded-3xl p-8 mb-12 border border-primary/5">
            <p className="text-lg md:text-xl text-text-dark font-light leading-relaxed italic">
              "{data.mood}"
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm font-bold text-primary">
              — Your Chạm Nghề Tutor
            </div>
          </div>

          {/* Self-Understanding Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-text-dark uppercase tracking-wider">
                <Zap size={20} className="text-primary" />
                Điểm chạm tỏa sáng
              </h3>
              <div className="space-y-3">
                {data.strengths.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-primary/5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-text-muted font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-text-dark uppercase tracking-wider">
                <Target size={20} className="text-secondary" />
                Nút thắt cần gỡ
              </h3>
              <div className="space-y-3">
                {data.weaknesses.map((w, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-secondary/5">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-text-muted font-medium">{w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Career Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <h3 className="flex items-center gap-2 text-lg font-bold text-text-dark uppercase tracking-wider">
                <Compass size={20} className={data.accentClass} />
                Định hướng nghề nghiệp
              </h3>
              <button 
                onClick={() => setShowDetails(true)}
                className={`text-sm font-bold ${data.accentClass} hover:underline flex items-center gap-1`}
              >
                Khám phá chi tiết <ArrowRight size={14} />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data.careers.map((c, i) => (
                <div key={i} className="group p-6 bg-background rounded-[2rem] border border-primary/5 hover:border-primary/20 transition-all text-center">
                  <div className={`w-12 h-12 mx-auto rounded-2xl flex items-center justify-center mb-4 ${data.colorClass} group-hover:scale-110 transition-transform`}>
                    <c.icon size={24} />
                  </div>
                  <span className="text-sm font-bold text-text-dark">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-primary/10">
            <button 
              onClick={() => window.print()}
              className="flex-1 px-5 py-2.5 bg-text-dark text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-black transition-colors"
            >
              <Download size={16} />
              Lưu kết quả
            </button>

          <div className="flex gap-3 flex-1">
            <button 
              onClick={onExploreCareers}
              className={`flex-1 px-4 py-2.5 ${data.colorClass} ${data.accentClass} rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-80 transition-all`}
            >
              Khám phá
              <ArrowRight size={16} />
            </button>

            <button 
              className="px-4 py-2.5 bg-white border border-primary/10 text-text-dark rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-background transition-colors"
            >
              <Share2 size={16} />
            </button>

            <button 
              onClick={onRestart}
              className="px-4 py-2.5 bg-background text-primary rounded-xl text-sm font-semibold hover:bg-primary/5 transition-colors"
            >
              Làm lại
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sheet for Detailed Careers */}
      <AnimatePresence>
        {showDetails && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDetails(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />
            {/* Sheet */}
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-surface rounded-t-[3rem] z-50 max-h-[85vh] overflow-y-auto shadow-2xl border-t border-primary/10"
            >
              <div className="sticky top-0 bg-surface/80 backdrop-blur-md p-6 flex justify-between items-center border-b border-primary/5">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${data.colorClass}`}>
                    <Compass size={24} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-text-dark">Lộ trình chi tiết cho {result}</h3>
                </div>
                <button 
                  onClick={() => setShowDetails(false)}
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <ArrowRight size={20} className="rotate-90" />
                </button>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {detailedCareers.map((career, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-[2rem] border border-primary/5 shadow-sm hover:shadow-md transition-all group"
                  >
                    <h4 className="text-xl font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
                      {career.title}
                    </h4>
                    <p className="text-sm text-text-muted italic mb-6">
                      "{career.fact}"
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-text-muted">
                        <span>Độ phù hợp</span>
                        <span className={data.accentClass}>{career.match}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${career.match}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-accent"
                        />
                      </div>
                    </div>

                    <button className="mt-6 text-xs font-bold text-text-dark underline underline-offset-4 hover:text-primary transition-colors flex items-center gap-1">
                      Tìm hiểu lộ trình <ArrowRight size={12} />
                    </button>
                  </motion.div>
                ))}
              </div>
              
              <div className="p-8 pt-0 text-center">
                <p className="text-sm text-text-muted mb-8">
                  Bạn muốn tìm hiểu kỹ hơn về cách bắt đầu với những ngành này?
                </p>
                <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20">
                  Nhận tư vấn 1:1 miễn phí
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      <p className="text-center mt-8 text-text-muted text-sm">
        Kết quả này chỉ mang tính chất tham khảo. Hãy lắng nghe bản thân mình nhiều hơn nhé! ✨
      </p>
    </motion.div>
  );
}

