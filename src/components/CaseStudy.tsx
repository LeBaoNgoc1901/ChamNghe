import { motion } from "motion/react";
import { Trophy, Target, Users, ArrowRight, Star, ChevronRight } from "lucide-react";

export default function CaseStudy() {
  const cases = [
    {
      id: 1,
      title: "Chiến dịch Marketing cho Gen Z",
      difficulty: "Trung bình",
      participants: 1240,
      reward: "500 XP",
      category: "Marketing"
    },
    {
      id: 2,
      title: "Tối ưu hóa trải nghiệm người dùng App",
      difficulty: "Khó",
      participants: 850,
      reward: "800 XP",
      category: "UI/UX"
    },
    {
      id: 3,
      title: "Lập kế hoạch tài chính cá nhân",
      difficulty: "Dễ",
      participants: 2100,
      reward: "300 XP",
      category: "Finance"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Minh Anh", score: 4500, avatar: "https://picsum.photos/seed/1/100/100" },
    { rank: 2, name: "Hoàng Nam", score: 4200, avatar: "https://picsum.photos/seed/2/100/100" },
    { rank: 3, name: "Linh Chi", score: 3900, avatar: "https://picsum.photos/seed/3/100/100" },
    { rank: 4, name: "Quốc Bảo", score: 3700, avatar: "https://picsum.photos/seed/4/100/100" },
    { rank: 5, name: "Thanh Hằng", score: 3500, avatar: "https://picsum.photos/seed/5/100/100" },
    { rank: 6, name: "Đức Phúc", score: 3300, avatar: "https://picsum.photos/seed/6/100/100" },
    { rank: 7, name: "Mai Phương", score: 3100, avatar: "https://picsum.photos/seed/7/100/100" },
    { rank: 8, name: "Tuấn Kiệt", score: 2900, avatar: "https://picsum.photos/seed/8/100/100" },
    { rank: 9, name: "Bảo Ngọc", score: 2700, avatar: "https://picsum.photos/seed/9/100/100" },
    { rank: 10, name: "Hữu Thắng", score: 2500, avatar: "https://picsum.photos/seed/10/100/100" },
  ];

  const timeline = [
    { step: "01", title: "Mở đơn đăng ký", date: "01/03 - 15/03", status: "completed", desc: "Cơ hội để các bạn trẻ lập đội và ghi danh thử thách." },
    { step: "02", title: "Vòng loại trực tuyến", date: "20/03 - 25/03", status: "active", desc: "Giải quyết các tình huống kinh doanh thực tế qua hệ thống." },
    { step: "03", title: "Vòng bán kết", date: "05/04", status: "upcoming", desc: "Top 20 đội xuất sắc nhất tranh tài trực tiếp." },
    { step: "04", title: "Chung kết vinh danh", date: "20/04", status: "upcoming", desc: "Đêm gala tìm ra quán quân Chạm Nghề 2026." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Case Studies & Timeline */}
        <div className="lg:col-span-2 space-y-16">
          {/* Case Studies Section */}
          <section>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-6xl font-serif font-black text-[#8DB6A0] mb-4">Giải Case Thực Tế</h2>
                <p className="text-text-muted text-xl font-sans">Thử thách bản thân với những bài toán thực tế từ doanh nghiệp.</p>
              </div>
              <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
                Xem tất cả <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {cases.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ x: 10 }}
                  className="bg-surface p-6 rounded-3xl border border-primary/10 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 cursor-pointer group"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Target size={32} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded-md mb-2 inline-block">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-text-dark">{item.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-xs text-text-muted">
                        <span className="flex items-center gap-1"><Star size={12} className="text-yellow-500" /> {item.difficulty}</span>
                        <span className="flex items-center gap-1"><Users size={12} /> {item.participants} người tham gia</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xs text-text-muted uppercase font-bold">Phần thưởng</p>
                      <p className="text-lg font-bold text-secondary">{item.reward}</p>
                    </div>
                    <button className="p-3 bg-background rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Vertical Timeline Section */}
          <section>
            <h2 className="text-3xl font-serif text-text-dark mb-12">Lộ trình giải đấu 2026</h2>
            <div className="relative pl-8 space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/10">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`absolute -left-[31px] top-1 w-6 h-6 rounded-full border-4 border-surface z-10 ${
                    item.status === 'completed' ? 'bg-primary' : 
                    item.status === 'active' ? 'bg-secondary animate-pulse' : 'bg-gray-200'
                  }`} />
                  <div className="bg-surface p-6 rounded-3xl border border-primary/5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">Giai đoạn {item.step}</span>
                      <span className="text-xs font-bold text-text-muted">{item.date}</span>
                    </div>
                    <h4 className="text-xl font-bold text-text-dark mb-2">{item.title}</h4>
                    <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Leaderboard */}
        <div className="space-y-8">
          <div className="bg-surface rounded-[3rem] p-8 border border-primary/10 shadow-xl h-fit sticky top-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600">
                <Trophy size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-text-dark">Bảng Xếp Hạng</h3>
            </div>

            <div className="space-y-6">
              {leaderboard.map((user) => (
                <div key={user.rank} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      user.rank === 1 ? "bg-yellow-400 text-white" : 
                      user.rank === 2 ? "bg-gray-300 text-white" :
                      user.rank === 3 ? "bg-orange-300 text-white" : "text-text-muted"
                    }`}>
                      {user.rank}
                    </div>
                    <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border-2 border-primary/10" referrerPolicy="no-referrer" />
                    <span className="font-bold text-text-dark group-hover:text-primary transition-colors">{user.name}</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-text-muted">{user.score} XP</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-10 py-4 border-2 border-primary/10 text-primary rounded-2xl font-bold hover:bg-primary hover:text-white transition-all">
              Xem bảng xếp hạng đầy đủ
            </button>
          </div>
          
          <div className="bg-secondary/5 rounded-[3rem] p-8 border border-secondary/10">
            <h4 className="text-lg font-bold text-text-dark mb-4">Bạn đang ở đâu?</h4>
            <p className="text-sm text-text-muted mb-6">Hoàn thành bài test và giải case đầu tiên để xuất hiện trên bảng vinh danh nhé!</p>
            <button className="w-full py-4 bg-secondary text-white rounded-2xl font-bold shadow-lg shadow-secondary/20">
              Bắt đầu ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

