import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronRight, 
  Search, 
  Cpu, 
  Megaphone, 
  TrendingUp,
  Mail,
  ArrowRight,
  Sparkles,
  Zap,
  Heart,
  Target,
  ShieldCheck,
  Palette,
  Compass,
  CheckCircle2,
  Briefcase
} from "lucide-react";

interface Career {
  id: number;
  title: string;
  income: string;
  skills: string[];
  category: string;
  whyYou: string;
  dailyTasks: string[];
  icon: any;
  color: string;
}

const CAREER_GROUPS: Record<string, Career[]> = {
  'NF': [
    { 
      id: 1, title: 'Tâm lý học', income: '15 - 35tr', skills: ['#Empathy', '#Active_Listening', '#Ethics'], category: 'Xã hội',
      whyYou: 'Vì bạn có trái tim ấm áp và khả năng thấu cảm sâu sắc với nỗi đau của người khác.',
      dailyTasks: ['Lắng nghe thân chủ', 'Phân tích hành vi', 'Xây dựng lộ trình chữa lành'],
      icon: Heart, color: 'text-accent bg-accent/10'
    },
    { 
      id: 2, title: 'Biên kịch', income: '12 - 40tr', skills: ['#Storytelling', '#Creativity', '#Persistence'], category: 'Nghệ thuật',
      whyYou: 'Vì bạn có trí tưởng tượng phong phú và khao khát kể những câu chuyện chạm đến cảm xúc.',
      dailyTasks: ['Xây dựng kịch bản', 'Phát triển nhân vật', 'Thảo luận cùng đạo diễn'],
      icon: Palette, color: 'text-accent bg-accent/10'
    },
    { 
      id: 3, title: 'Quản lý NGO', income: '10 - 25tr', skills: ['#Leadership', '#Planning', '#Social_Impact'], category: 'Xã hội',
      whyYou: 'Vì bạn luôn khao khát tạo ra những giá trị tích cực và bền vững cho cộng đồng.',
      dailyTasks: ['Lập kế hoạch dự án', 'Gây quỹ từ thiện', 'Kết nối các tình nguyện viên'],
      icon: Sparkles, color: 'text-accent bg-accent/10'
    },
    { 
      id: 4, title: 'Content Creator', income: '10 - 50tr', skills: ['#Digital_Marketing', '#Editing', '#Branding'], category: 'Truyền thông',
      whyYou: 'Vì bạn yêu thích việc chia sẻ góc nhìn cá nhân và lan tỏa năng lượng tích cực.',
      dailyTasks: ['Lên ý tưởng video', 'Quay dựng nội dung', 'Tương tác cùng followers'],
      icon: Megaphone, color: 'text-accent bg-accent/10'
    },
  ],
  'SJ': [
    { 
      id: 5, title: 'Kiểm toán', income: '15 - 45tr', skills: ['#Attention_to_Detail', '#Integrity', '#SQL'], category: 'Kinh tế',
      whyYou: 'Vì bạn là người cực kỳ tỉ mỉ, trung thực và coi trọng sự minh bạch.',
      dailyTasks: ['Kiểm tra sổ sách', 'Xác minh số liệu', 'Lập báo cáo tài chính'],
      icon: ShieldCheck, color: 'text-primary bg-primary/10'
    },
    { 
      id: 6, title: 'Quản lý dự án', income: '20 - 60tr', skills: ['#Organization', '#Communication', '#Agile'], category: 'Kinh tế',
      whyYou: 'Vì bạn có khả năng tổ chức tuyệt vời và luôn đảm bảo mọi thứ đi đúng quỹ đạo.',
      dailyTasks: ['Phân bổ nguồn lực', 'Theo dõi tiến độ', 'Giải quyết các rủi ro'],
      icon: Target, color: 'text-primary bg-primary/10'
    },
    { 
      id: 7, title: 'Luật sư', income: '15 - 80tr', skills: ['#Critical_Thinking', '#Research', '#Persuasion'], category: 'Xã hội',
      whyYou: 'Vì bạn có tư duy sắc bén và ý thức trách nhiệm cao trong việc bảo vệ công lý.',
      dailyTasks: ['Nghiên cứu hồ sơ', 'Tư vấn pháp lý', 'Tranh tụng tại tòa'],
      icon: ShieldCheck, color: 'text-primary bg-primary/10'
    },
    { 
      id: 8, title: 'Logistics', income: '12 - 35tr', skills: ['#Supply_Chain', '#Planning', '#Problem_Solving'], category: 'Kinh tế',
      whyYou: 'Vì bạn giỏi trong việc điều phối và tối ưu hóa các quy trình vận hành.',
      dailyTasks: ['Quản lý kho bãi', 'Điều phối vận chuyển', 'Tối ưu chi phí'],
      icon: TrendingUp, color: 'text-primary bg-primary/10'
    },
  ],
  'SP': [
    { 
      id: 9, title: 'Thiết kế thời trang', income: '10 - 40tr', skills: ['#Aesthetics', '#Sewing', '#Trend_Analysis'], category: 'Nghệ thuật',
      whyYou: 'Vì bạn có óc thẩm mỹ độc đáo và đôi bàn tay khéo léo để biến ý tưởng thành hiện thực.',
      dailyTasks: ['Vẽ phác thảo', 'Chọn lựa chất liệu', 'Giám sát sản xuất'],
      icon: Palette, color: 'text-secondary bg-secondary/10'
    },
    { 
      id: 10, title: 'Đầu bếp', income: '12 - 50tr', skills: ['#Culinary_Arts', '#Creativity', '#Resilience'], category: 'Dịch vụ',
      whyYou: 'Vì bạn yêu thích việc sáng tạo ra những hương vị mới và làm hài lòng thực khách.',
      dailyTasks: ['Sáng tạo thực đơn', 'Chế biến món ăn', 'Quản lý bếp'],
      icon: Zap, color: 'text-secondary bg-secondary/10'
    },
    { 
      id: 11, title: 'Nhiếp ảnh gia', income: '10 - 45tr', skills: ['#Composition', '#Lighting', '#Retouching'], category: 'Nghệ thuật',
      whyYou: 'Vì bạn có khả năng bắt trọn những khoảnh khắc đẹp nhất qua ống kính.',
      dailyTasks: ['Lên concept chụp', 'Thực hiện buổi chụp', 'Hậu kỳ hình ảnh'],
      icon: Compass, color: 'text-secondary bg-secondary/10'
    },
    { 
      id: 12, title: 'Kỹ sư hiện trường', income: '15 - 40tr', skills: ['#Technical_Skills', '#Safety', '#Teamwork'], category: 'Kỹ thuật',
      whyYou: 'Vì bạn là người thực tế, năng động và không ngại đối mặt với thử thách tại công trường.',
      dailyTasks: ['Giám sát thi công', 'Kiểm tra kỹ thuật', 'Đảm bảo an toàn'],
      icon: Cpu, color: 'text-secondary bg-secondary/10'
    },
  ],
  'NT': [
    { 
      id: 13, title: 'Lập trình viên AI', income: '25 - 70tr', skills: ['#Python', '#Machine_Learning', '#Math'], category: 'IT',
      whyYou: 'Vì bạn có tư duy logic cực mạnh và khao khát giải mã những công nghệ tương lai.',
      dailyTasks: ['Xây dựng mô hình', 'Xử lý dữ liệu', 'Tối ưu thuật toán'],
      icon: Cpu, color: 'text-primary bg-primary/10'
    },
    { 
      id: 14, title: 'Chuyên gia bảo mật', income: '20 - 60tr', skills: ['#Networking', '#Cybersecurity', '#Linux'], category: 'IT',
      whyYou: 'Vì bạn luôn cảnh giác, tỉ mỉ và có khả năng phân tích các lỗ hổng hệ thống.',
      dailyTasks: ['Kiểm tra bảo mật', 'Xử lý sự cố', 'Xây dựng tường lửa'],
      icon: ShieldCheck, color: 'text-primary bg-primary/10'
    },
    { 
      id: 15, title: 'Phân tích dữ liệu', income: '18 - 50tr', skills: ['#SQL', '#Statistics', '#Visualization'], category: 'IT',
      whyYou: 'Vì bạn yêu thích việc tìm ra những quy luật ẩn giấu đằng sau những con số khô khan.',
      dailyTasks: ['Thu thập dữ liệu', 'Phân tích xu hướng', 'Lập báo cáo trực quan'],
      icon: TrendingUp, color: 'text-primary bg-primary/10'
    },
    { 
      id: 16, title: 'Tư vấn chiến lược', income: '25 - 100tr', skills: ['#Strategy', '#Analysis', '#Presentation'], category: 'Kinh tế',
      whyYou: 'Vì bạn có tầm nhìn xa trông rộng và khả năng hoạch định những bước đi vĩ đại.',
      dailyTasks: ['Phân tích thị trường', 'Xây dựng chiến lược', 'Tư vấn cho doanh nghiệp'],
      icon: Target, color: 'text-primary bg-primary/10'
    },
  ],
};

interface CareerExplorationProps {
  hasTested: boolean;
  mbtiResult: string | null;
  onStartQuiz: () => void;
}

export default function CareerExploration({ hasTested, mbtiResult, onStartQuiz }: CareerExplorationProps) {
  const [activeTab, setActiveTab] = useState('IT');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const getGroup = (type: string | null) => {
    if (!type) return 'NF';
    if (type.includes('NF')) return 'NF';
    if (type.includes('NT')) return 'NT';
    if (type.includes('SJ')) return 'SJ';
    if (type.includes('SP')) return 'SP';
    if (type.includes('N') && type.includes('F')) return 'NF';
    if (type.includes('N') && type.includes('T')) return 'NT';
    if (type.includes('S') && type.includes('J')) return 'SJ';
    if (type.includes('S') && type.includes('P')) return 'SP';
    return 'NF';
  };

  const groupKey = getGroup(mbtiResult);
  const careers = hasTested ? CAREER_GROUPS[groupKey] : [];

  // Filter careers by category if not tested, or just show the group's careers
  const displayCareers = hasTested 
    ? careers 
    : Object.values(CAREER_GROUPS).flat().filter(c => c.category === activeTab).slice(0, 6);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-12 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
        <div className="max-w-2xl">
          <h2 className="text-6xl font-serif font-black text-[#8DB6A0] mb-4">
            {hasTested ? `Gợi ý cho nhóm ${mbtiResult}` : "Khám phá ngành nghề"}
          </h2>
          <p className="text-text-muted text-xl font-sans">
            {hasTested 
              ? `Dựa trên bản sắc ${groupKey}, đây là những bến đỗ hứa hẹn dành cho bạn.` 
              : "Tìm kiếm bến đỗ phù hợp với bản sắc riêng của bạn."}
          </p>
        </div>
        
        {!hasTested && (
          <div className="flex bg-surface p-1.5 rounded-2xl border border-primary/10">
            {['IT', 'Truyền thông', 'Kinh tế'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === tab 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-text-muted hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>

      {!hasTested ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface rounded-[3rem] p-8 text-center border border-primary/10 shadow-xl relative overflow-hidden mb-12"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-secondary" />
          <div className="max-w-xl mx-auto">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search size={40} className="text-primary" />
            </div>
            <h3 className="text-3xl font-serif text-text-dark mb-4">Soi rõ bản thân trước khi chọn lối</h3>
            <p className="text-text-muted mb-10 text-lg">
              Làm bài trắc nghiệm MBTI để chúng mình có thể gợi ý những ngành nghề "sinh ra là dành cho bạn" nhé!
            </p>
            <button 
              onClick={onStartQuiz}
              className="px-10 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
            >
              Làm bài test ngay
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 gap-6 mb-16">
          {displayCareers.map((career) => (
            <motion.div
              key={career.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-surface rounded-[2rem] border transition-all overflow-hidden cursor-pointer ${
                expandedId === career.id 
                  ? "border-primary shadow-2xl ring-1 ring-primary/20" 
                  : "border-primary/5 shadow-md hover:shadow-lg hover:-translate-y-1"
              }`}
              onClick={() => toggleExpand(career.id)}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${career.color}`}>
                      <career.icon size={32} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-serif text-text-dark group-hover:text-primary transition-colors">
                        {career.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-bold text-text-muted uppercase tracking-wider">{career.category}</span>
                        <span className="w-1 h-1 rounded-full bg-text-muted/30" />
                        <div className="flex items-center gap-1 text-xs font-bold text-green-600">
                          <span>💸 {career.income}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                    expandedId === career.id 
                      ? "bg-primary text-white" 
                      : "bg-background text-text-dark hover:bg-primary/10 hover:text-primary"
                  }`}>
                    {expandedId === career.id ? "Thu gọn" : "Xem chi tiết"}
                  </button>
                </div>

                <AnimatePresence>
                  {expandedId === career.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="pt-8 mt-8 border-t border-primary/10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                          <div>
                            <h5 className="text-sm font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                              <Sparkles size={16} />
                              Why you?
                            </h5>
                            <p className="text-lg text-text-dark font-light leading-relaxed italic">
                              "{career.whyYou}"
                            </p>
                          </div>

                          <div>
                            <h5 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4 flex items-center gap-2">
                              <Zap size={16} />
                              Kỹ năng cần "Level up"
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {career.skills.map(skill => (
                                <span key={skill} className="px-4 py-2 bg-background rounded-xl text-xs font-bold text-text-muted border border-primary/5">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="bg-background/50 rounded-3xl p-8 border border-primary/5">
                          <h5 className="text-sm font-bold text-text-dark uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Briefcase size={16} className="text-primary" />
                            Công việc mỗi ngày
                          </h5>
                          <ul className="space-y-4">
                            {career.dailyTasks.map((task, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                <span className="text-text-muted leading-relaxed">{task}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <button className="w-full mt-8 py-4 bg-white border-2 border-primary/10 text-primary rounded-2xl font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                            <CheckCircle2 size={18} />
                            Test kiến thức ngành
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Career Map Section (Optional visual) */}
      {!hasTested && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayCareers.map((career, index) => (
            <motion.div
              key={career.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface rounded-[2.5rem] p-8 border border-primary/5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${career.color}`}>
                  <career.icon size={28} />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-background rounded-full text-xs font-bold text-text-muted border border-primary/5">
                  <span>💸 {career.income}</span>
                </div>
              </div>

              <h4 className="text-2xl font-serif text-text-dark mb-4 group-hover:text-primary transition-colors">{career.title}</h4>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {career.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-background rounded-lg text-[10px] font-bold uppercase tracking-wider text-text-muted border border-primary/5">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={onStartQuiz}
                  className="flex-1 py-3 bg-primary/5 text-primary rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all"
                >
                  Test thử mình
                </button>
                <button className="flex-1 py-3 border border-primary/10 text-text-dark rounded-xl text-xs font-bold hover:bg-background transition-all">
                  Chi tiết
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

