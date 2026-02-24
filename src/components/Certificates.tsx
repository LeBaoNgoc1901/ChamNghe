import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

type Field = "IT" | "Kinh tế" | "Truyền thông";

type Cert = {
  id: number;
  title: string;
  field: Field;
  issuer: string;
  image: string;
  date?: string;
  hot?: boolean;
  value?: string;
};

type RoadmapStep = {
  step: string;
  title: string;
  date: string;
  status: "completed" | "active" | "upcoming";
  desc: string;
};

type Competition = {
  id: number | string;
  title: string;
  status: string; // 'completed', 'active', 'suggested'
  host: string;
  image: string;
  progress: number;
  details: string;
  ranking?: string;
  tag?: string;
  category?: string[];
  roadmap: RoadmapStep[];
};

const CARD_COLORS = [
  "bg-blue-50",
  "bg-green-50",
  "bg-purple-50",
  "bg-amber-50",
  "bg-rose-50",
  "bg-cyan-50",
  "bg-indigo-50",
];

const MOCK_ACHIEVED: Cert[] = [
  {
    id: 1,
    title: "Google Data Analytics Professional",
    field: "IT",
    issuer: "Google / Coursera",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    date: "15/02/2026",
    hot: true,
    value: "Chứng chỉ này chứng minh khả năng phân tích dữ liệu chuyên nghiệp, cực kỳ có giá trị cho các vị trí Data Analyst."
  },
  {
    id: 2,
    title: "Digital Marketing Specialization",
    field: "Truyền thông",
    issuer: "Hubspot / Meta",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    date: "20/01/2026",
    value: "Nắm vững các công cụ quảng cáo số, chiến lược nội dung và tối ưu hóa chuyển đổi."
  },
];

const MOCK_SUGGESTED: Record<string, Cert[]> = {
  NF: [
    { id: 101, title: "Content Marketing Certification", field: "Truyền thông", issuer: "HubSpot Academy", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600", value: "Tăng khả năng sáng tạo nội dung chạm đến cảm xúc khách hàng." },
    { id: 102, title: "Social Media Strategy", field: "Truyền thông", issuer: "LinkedIn Learning", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600", value: "Xây dựng thương hiệu cá nhân và cộng đồng bền vững." },
  ],
  NT: [
    { id: 201, title: "Python for Data Science", field: "IT", issuer: "IBM", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600", hot: true, value: "Công cụ đắc lực cho phân tích logic và xử lý dữ liệu lớn." },
    { id: 202, title: "AWS Cloud Practitioner", field: "IT", issuer: "Amazon Web Services", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600", value: "Hiểu sâu về hạ tầng đám mây hiện đại nhất thế giới." },
  ],
  SJ: [
    { id: 301, title: "Financial Accounting Basics", field: "Kinh tế", issuer: "Harvard Business", image: "https://images.unsplash.com/photo-1454165833767-027ffea1e45b?auto=format&fit=crop&q=80&w=600", value: "Xây dựng nền tảng tài chính vững chắc và minh bạch." },
    { id: 302, title: "Supply Chain Management", field: "Kinh tế", issuer: "Coursera", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600", value: "Quy trình vận hành tối ưu cho các doanh nghiệp quy mô lớn." },
  ],
  SP: [
    { id: 401, title: "UX/UI Design Fundamentals", field: "IT", issuer: "Google", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600", value: "Sáng tạo trải nghiệm người dùng linh hoạt và bắt mắt." },
    { id: 402, title: "Event Planning Excellence", field: "Truyền thông", issuer: "Chạm Nghề Academy", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600", value: "Thực thi các sự kiện bùng nổ và đầy tính ngẫu hứng." },
  ],
  default: [
    { id: 501, title: "Critical Thinking", field: "Kinh tế", issuer: "University of Sydney", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600", value: "Kỹ năng nền tảng cho mọi ngành nghề trong tương lai." },
    { id: 502, title: "AI Basics for Everyone", field: "IT", issuer: "IBM", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600", value: "Hiểu về AI để không bị tụt hậu trong cuộc cách mạng 4.0." },
  ]
};

const MOCK_COMPETITIONS: Competition[] = [
  // ĐANG THAM GIA (Active / Ongoing)
  { 
    id: "o1", 
    title: "Green Marketing Awards", 
    status: "active", 
    host: "Eco Connect",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=800",
    progress: 30, 
    tag: "HÀNH TRÌNH",
    ranking: "Hạng 12/200 (Vòng loại)",
    details: "Tìm kiếm các chiến dịch Marketing sáng tạo thúc đẩy lối sống bền vững và bảo vệ môi trường.",
    roadmap: [
      { step: "01", title: "Nộp Concept", date: "01/03", status: "completed", desc: "Ý tưởng chủ đạo cho chiến dịch truyền thông xanh." },
      { step: "02", title: "Phát Triển", date: "10/03 - 20/03", status: "active", desc: "Xây dựng chi tiết các kênh và thông điệp truyền tải." },
      { step: "03", title: "Chung Cuộc", date: "30/03", status: "upcoming", desc: "Vinh danh các chiến dịch có sức lan tỏa nhất." },
    ]
  },
  {
    id: "o2",
    title: "Supply Chain Excellence",
    status: "active",
    host: "Logistics Hub",
    image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&q=80&w=800",
    progress: 75,
    tag: "HÀNH TRÌNH",
    ranking: "Hạng 2/50 (Bán kết)",
    details: "Tối ưu hóa chuỗi cung ứng thực tế cho doanh nghiệp xuất khẩu.",
    roadmap: [
      { step: "01", title: "Vòng Sơ Tuyển", date: "15/02", status: "completed", desc: "Kiểm tra kiến thức Logistics cơ bản." },
      { step: "02", title: "Phân Tích Cấu Trúc", date: "20/02", status: "completed", desc: "Xây dựng mô hình chuỗi hiện tại." },
      { step: "03", title: "Đề Xuất Tối Ưu", date: "25/02", status: "active", desc: "Thiết kế hệ thống vận hành mới đột phá." },
      { step: "04", title: "Pitching", date: "05/03", status: "upcoming", desc: "Bảo vệ giải pháp tối ưu trước hội đồng giám khảo." },
    ]
  },
  {
    id: "o3",
    title: "Hackathon: Smart Edu",
    status: "active",
    host: "EdTech Vietnam",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    progress: 10,
    tag: "HÀNH TRÌNH",
    ranking: "Chưa cập nhật",
    details: "Kiến tạo các giải pháp công nghệ giáo dục đột phá cho tương lai giáo dục Việt Nam.",
    roadmap: [
      { step: "01", title: "Thành Lập Đội", date: "20/02", status: "completed", desc: "Tìm kiếm cộng sự và đăng ký ý tưởng ban đầu." },
      { step: "02", title: "Coding Phase", date: "01/03 - 03/03", status: "upcoming", desc: "48h phát triển sản phẩm demo hoàn thiện." },
      { step: "03", title: "Final Pitch", date: "10/03", status: "upcoming", desc: "Thuyết trình trước các quỹ đầu tư EdTech hàng đầu." },
    ]
  },

  // ĐÃ THAM GIA (Completed)
  { 
    id: "c1", 
    title: "Startup Challenge 2026", 
    status: "completed", 
    host: "FTU Innovation Club",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    progress: 100, 
    tag: "DẤU ẤN",
    ranking: "Hạng 1 - Quán quân",
    details: "Cuộc thi giải quyết các bài toán vận hành thực tế của các startup công nghệ. Bạn đã xuất sắc vượt qua 4 vòng thi nghẹt thở.",
    roadmap: [
      { step: "01", title: "Vòng Đơn", date: "01/02", status: "completed", desc: "Nộp ý tưởng kinh doanh sơ bộ và hồ sơ năng lực." },
      { step: "02", title: "Vòng Loại", date: "10/02", status: "completed", desc: "Thuyết trình mô hình kinh doanh chi tiết." },
      { step: "03", title: "Bán Kết", date: "15/02", status: "completed", desc: "Phát triển MVP và chạy thử nghiệm thực tế." },
      { step: "04", title: "Chung Kết", date: "20/02", status: "completed", desc: "Pitching trực tiếp tại NIC và giành ngôi vị cao nhất." },
    ]
  },
  { 
    id: "c2", 
    title: "Financial Planning Duel", 
    status: "completed", 
    host: "FinEdu League",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    progress: 100, 
    tag: "DẤU ẤN",
    ranking: "Hạng 5 - Giải khuyến khích",
    details: "Đối đầu trực tiếp trong việc xây dựng kế hoạch tài chính cho các gia đình trẻ Việt Nam.",
    roadmap: [
      { step: "01", title: "Khai Mạc", date: "01/12/2025", status: "completed", desc: "Phổ biến luật chơi và công bố đề bài chính thức." },
      { step: "02", title: "Lập Kế Hoạch", date: "05/12/2025", status: "completed", desc: "Xây dựng chiến lược phân bỏ tài sản và quản trị rủi ro." },
      { step: "03", title: "Thuyết Trình", date: "10/12/2025", status: "completed", desc: "Bảo vệ phương án trước hội đồng tài chính chuyên nghiệp." },
    ]
  },
  { 
    id: "c3", 
    title: "Case Study Marathon", 
    status: "completed", 
    host: "Hanoi Business School",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    progress: 100, 
    tag: "DẤU ẤN",
    ranking: "Top 10 - Finalist",
    details: "Thử thách giải quyết 5 case study kinh điển trong vòng 24h liên tục. Kiểm tra sức bền và tư duy phân tích sắc bén.",
    roadmap: [
      { step: "01", title: "Vòng Sơ Loại", date: "10/01", status: "completed", desc: "Bài test tư duy logic và phân tích dữ liệu cơ bản." },
      { step: "02", title: "Vòng Marathon", date: "15/01", status: "completed", desc: "24h giải quyết tình huống kinh doanh đa ngành." },
      { step: "03", title: "Chung Kết", date: "20/01", status: "completed", desc: "Tranh biện và bảo vệ giải pháp trước các CEO tập đoàn." },
    ]
  },

  // ĐỀ XUẤT (Suggested)
  { 
    id: "s1", 
    title: "Cyber Security Duel", 
    status: "suggested", 
    host: "VSEC Association",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    tag: "Công nghệ thông tin",
    category: ["NT", "SP"],
    progress: 0, 
    details: "Đấu trường an ninh mạng đỉnh cao dành cho các tài năng Capture The Flag. Thử thách kỹ năng bảo mật và tấn công mạng thực chiến.",
    roadmap: [
      { step: "01", title: "Qualifiers", date: "05/04", status: "upcoming", desc: "Bài thi CTF trực tuyến để lựa chọn các đội xuất sắc nhất." },
      { step: "02", title: "Final Battle", date: "15/04", status: "upcoming", desc: "Đấu đối kháng trực tiếp (Attack & Defense) tại vòng chung kết." },
    ]
  },
  { 
    id: "s2", 
    title: "Creator Fest 2026", 
    status: "suggested", 
    host: "Media Max",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800",
    tag: "Truyền thông",
    category: ["NF", "SP"],
    progress: 0, 
    details: "Cơ hội cho các nhà sáng tạo nội dung thể hiện bản sắc qua video ngắn. Tỏa sáng và lan tỏa thông điệp tích cực đến cộng đồng.",
    roadmap: [
      { step: "01", title: "Vòng Sáng Tạo", date: "10/05", status: "upcoming", desc: "Sản xuất video theo chủ đề yêu cầu từ ban tổ chức." },
      { step: "02", title: "Vòng Lan Tỏa", date: "20/05", status: "upcoming", desc: "Đo lường mức độ tương tác và ảnh hưởng thực tế từ cộng đồng." },
      { step: "03", title: "Gala Night", date: "30/05", status: "upcoming", desc: "Vinh danh những nhà sáng tạo xuất sắc nhất đêm chung khảo." },
    ]
  },
  { 
    id: "s3", 
    title: "Global Trade Master", 
    status: "suggested", 
    host: "World Trade Center",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    tag: "Kinh tế",
    category: ["SJ", "NT"],
    progress: 0, 
    details: "Mô phỏng đàm phán thương mại quốc tế và quản trị rủi ro xuất nhập khẩu. Trải nghiệm môi trường kinh doanh toàn cầu thực thụ.",
    roadmap: [
      { step: "01", title: "Training", date: "01/06", status: "upcoming", desc: "Huấn luyện chuyên sâu về kỹ năng đàm phán và luật thương mại quốc tế." },
      { step: "02", title: "Simulation", date: "10/06", status: "upcoming", desc: "Thực hiện mô phỏng các giao dịch thương mại với đối tác nước ngoài." },
      { step: "03", title: "Review", date: "20/06", status: "upcoming", desc: "Phân tích kết quả kinh doanh và các chiến lược quản trị rủi ro." },
    ]
  },
  { 
    id: "s4", 
    title: "UX Design Challenge", 
    status: "suggested", 
    host: "Product Designers VN",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
    tag: "Thiết kế",
    category: ["NF", "NT"],
    progress: 0, 
    details: "Giải quyết các bài toán UX phức tạp cho ứng dụng siêu ứng dụng (Super App). Nâng tầm trải nghiệm người dùng bằng tư duy thiết kế đột phá.",
    roadmap: [
      { step: "01", title: "Research", date: "15/07", status: "upcoming", desc: "Nghiên cứu sâu về hành vi và nhu cầu thực tế của người dùng." },
      { step: "02", title: "Ideation", date: "25/07", status: "upcoming", desc: "Thiết kế các giải pháp wireframe và prototype cho các tính năng mới." },
      { step: "03", title: "Testing", date: "05/08", status: "upcoming", desc: "Kiểm thử khả năng sử dụng và nhận phản hồi trực tiếp từ người dùng." },
    ]
  }
];

export default function Certificates() {
  const [tab, setTab] = useState("achieved");
  const [compSubTab, setCompSubTab] = useState("active"); // 'completed', 'active', 'suggested'
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [modal, setModal] = useState<any>(null); // Changed to any to support competition objects
  const [expandedComp, setExpandedComp] = useState<number | null>(null);
  const [mbti, setMbti] = useState<string | null>(null);

  useEffect(() => {
    const result = localStorage.getItem("mbti_result");
    if (result) {
      // Logic to categorize MBTI (simplified)
      if (result.includes("N") && result.includes("F")) setMbti("NF");
      else if (result.includes("N") && result.includes("T")) setMbti("NT");
      else if (result.includes("S") && result.includes("J")) setMbti("SJ");
      else if (result.includes("S") && result.includes("P")) setMbti("SP");
    }
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedComp(expandedComp === id ? null : id);
  };

  const getSuggestedCerts = () => {
    if (!mbti) return MOCK_SUGGESTED.default;
    return MOCK_SUGGESTED[mbti] || MOCK_SUGGESTED.default;
  };

  const currentData: any[] = useMemo(() => {
    if (tab === "achieved") return MOCK_ACHIEVED;
    if (tab === "suggested") return getSuggestedCerts();
    if (tab === "competition") {
      return MOCK_COMPETITIONS.filter(c => c.status === compSubTab);
    }
    return [];
  }, [tab, compSubTab, mbti]);

  const filtered = useMemo(() => {
    return currentData.filter(
      (item: any) =>
        (filter === "All" || item.field === filter || tab === "competition") &&
        (item.title || "").toLowerCase().includes(search.toLowerCase())
    );
  }, [currentData, filter, search, tab]);

  const getActiveColor = () => {
    if (tab === "achieved") return "bg-[#FFD9D1]"; // Darker Pink
    if (tab === "suggested") return "bg-[#D1E9FF]"; // Darker Blue
    return "bg-[#D1E6DB]"; // Darker Green
  };

  return (
    <div className="min-h-screen bg-[#F6E7D8] font-sans text-gray-800">
      
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-10 pt-24 pb-12">
        <h1 className="text-6xl font-serif font-black text-[#8DB6A0] mb-4 tracking-tighter">DẤU ẤN BẢN SẮC</h1>
        <p className="text-xl text-text-muted font-normal max-w-2xl leading-relaxed font-sans">
          Đừng để profile của bạn chỉ là những dòng chữ khô khan. Hãy để bộ sưu tập này lên tiếng về tư duy và năng lực độc bản của riêng bạn.
        </p>
      </div>

      {/* BINDER/BOOKMARK TABS SECTION */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex w-full items-end">
          {[
            { key: "achieved", label: "Certificates của bạn", color: "bg-[#FF6F61]", textColor: "text-white" },
            { key: "suggested", label: "Certificates đề xuất", color: "bg-[#60A5FA]", textColor: "text-white" },
            { key: "competition", label: "Cuộc thi", color: "bg-[#8DB6A0]", textColor: "text-white" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => { setTab(t.key); setFilter("All"); }}
              className={`flex-1 py-6 text-xl font-bold transition-all duration-300 relative
              ${
                tab === t.key
                  ? `${t.color} ${t.textColor} z-20 rounded-t-[40px] shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.15)] translate-y-[2px]`
                  : "bg-white/40 text-gray-500 hover:bg-white/60 rounded-t-[32px] mb-[-4px]"
              }`}
            >
              <span className={tab === t.key ? "inline-block transform" : ""}>
                {t.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT AREA CONNECTED TO TABS */}
      <div className={`${getActiveColor()} transition-colors duration-500 rounded-b-[48px] shadow-2xl relative z-10 border-t border-transparent`}>
        {/* Seamless connection for active tab */}
        <div className="absolute -top-[2px] left-0 right-0 h-[2px] overflow-hidden">
             {/* This div helps hide the border line under the active tab if needed, 
                 but the getActiveColor on parent + the active tab border-x focus works well */}
        </div>
        
        <div className="max-w-7xl mx-auto px-10 pt-16">
          {/* SEARCH + FILTER BAR */}
          <div className="flex flex-wrap gap-6 items-center mb-12">
            <div className="relative group flex-1 max-w-md">
              <input
                placeholder="Tìm kiếm chứng chỉ..."
                className="w-full px-10 py-5 rounded-full bg-white border-none shadow-sm focus:ring-4 focus:ring-black/5 outline-none transition-all placeholder:text-gray-300"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="relative">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="appearance-none px-10 py-5 rounded-full bg-white border-none shadow-sm outline-none transition-all cursor-pointer font-bold text-gray-700 min-w-[200px]"
              >
                <option value="All">Tất cả lĩnh vực</option>
                <option value="IT">IT</option>
                <option value="Kinh tế">Kinh tế</option>
                <option value="Truyền thông">Truyền thông</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            {tab === "suggested" && mbti && (
              <div className="bg-white/50 backdrop-blur-md px-8 py-5 rounded-full border-2 border-white/50 font-black text-sm text-[#8DB6A0] uppercase tracking-widest flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#8DB6A0] animate-ping" />
                GỢI Ý THEO MBTI: {mbti}
              </div>
            )}
          </div>

          {/* COMPETITION SUB-TABS */}
          {tab === "competition" && (
            <div className="flex gap-4 mb-12">
              {[
                { key: "active", label: "Đang tham gia" },
                { key: "completed", label: "Đã tham gia" },
                { key: "suggested", label: "Đề xuất" },
              ].map((st) => (
                <button
                  key={st.key}
                  onClick={() => setCompSubTab(st.key)}
                  className={`px-8 py-4 rounded-full font-bold transition-all ${
                    compSubTab === st.key
                      ? "bg-[#8DB6A0] text-white shadow-lg"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>
          )}

        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white/20 rounded-[40px] border-2 border-dashed border-gray-300">
            <p className="text-2xl text-gray-400 font-medium">Không tìm thấy thông tin phù hợp.</p>
          </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="contents"
                >
                  {filtered.map((item: any, index: number) => {
                    const cardColor = CARD_COLORS[index % CARD_COLORS.length];
                    
                    if (tab === "competition") {
                      const comp = item as Competition;
                      const isExpanded = expandedComp === comp.id;
                      
                      return (
                        <div 
                          key={comp.id}
                          className={`${cardColor} p-8 rounded-b-[24px] rounded-tr-[24px] shadow-lg hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-4 transition-all duration-500 flex flex-col relative mt-6 group overflow-hidden`}
                        >
                          {/* Bookmark Tab */}
                          <div className="absolute -top-6 left-0 h-6 w-32 bg-inherit rounded-t-xl flex items-center justify-center shadow-[-5px_-5px_10px_-5px_rgba(0,0,0,0.1)]">
                             <div className="w-12 h-1 bg-white/40 rounded-full" />
                          </div>

                          <div className="relative h-40 -mx-8 -mt-8 mb-6 overflow-hidden">
                            <img src={comp.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={comp.title} />
                            <div className="absolute top-4 right-4">
                              <span className={`bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black shadow-lg uppercase tracking-widest ${comp.tag === 'DẤU ẤN' ? 'text-green-600' : 'text-[#FF6F61]'}`}>
                                {comp.tag || (comp.status === 'active' ? 'LIVE' : comp.status === 'completed' ? 'DONE' : 'NEW')}
                              </span>
                            </div>
                          </div>

                          <div className="flex justify-between items-start mb-6">
                            <div>
                               <div className="flex flex-col mb-1">
                                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Đơn vị tổ chức</span>
                                 <p className="text-xs font-black text-[#FF6F61] uppercase">{comp.host}</p>
                               </div>
                               <h3 className="text-2xl font-serif font-black leading-tight group-hover:text-[#FF6F61] transition-colors">{comp.title}</h3>
                               {comp.tag && (
                                 <span className="mt-2 inline-block px-3 py-1 bg-white/50 rounded-lg text-[10px] font-bold text-gray-500 uppercase tracking-tight">
                                   {comp.tag}
                                 </span>
                               )}
                               {comp.ranking && (
                                 <div className="mt-2 flex items-center gap-2">
                                   <span className="px-2 py-0.5 bg-green-100/80 text-green-700 rounded-md text-[10px] font-black uppercase tracking-tighter shadow-sm">
                                      {comp.ranking}
                                   </span>
                                 </div>
                               )}
                            </div>
                          </div>

                          <div className="mb-6 flex-1">
                            {comp.status !== 'suggested' && (
                              <div className="bg-white/30 p-4 rounded-2xl border border-white/50 group-hover:bg-white/50 transition-colors">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 text-gray-500">
                                  <span>Tiến độ</span>
                                  <span className="text-[#FF6F61]">{comp.progress}%</span>
                                </div>
                                <div className="w-full bg-white/50 h-2 rounded-full overflow-hidden shadow-inner">
                                  <div 
                                    className="bg-[#FF6F61] h-full transition-all duration-1000 ease-out"
                                    style={{ width: `${comp.progress}%` }}
                                  />
                                </div>
                              </div>
                            )}
                          </div>

                          <button 
                            onClick={() => setModal(comp)}
                            className="w-full py-4 bg-white/20 hover:bg-[#FF6F61] hover:text-white text-gray-800 font-bold rounded-2xl transition-all border-2 border-white group-hover:shadow-xl mt-auto"
                          >
                            Xem chi tiết
                          </button>
                        </div>
                      );
                    }

                    const cert = item as Cert;
                    return (
                      <div
                        key={cert.id}
                        className={`${cardColor} rounded-b-[32px] rounded-tr-[32px] overflow-hidden group hover:-translate-y-6 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-[0_50px_80px_-20px_rgba(0,0,0,0.35)] border border-transparent hover:border-white relative mt-8`}
                        onClick={() => setModal(cert)}
                      >
                        {/* Bookmark Tab */}
                        <div className="absolute -top-8 left-0 h-8 w-40 bg-inherit rounded-t-2xl flex items-center px-6 shadow-[-10px_-10px_20px_-10px_rgba(0,0,0,0.15)]">
                          <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{cert.field}</span>
                        </div>

                        <div className="relative h-60 overflow-hidden">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                          />
                          {cert.hot && (
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-[0_10px_20px_-5px_rgba(249,115,22,0.5)] animate-bounce uppercase tracking-tighter flex items-center gap-1">
                              <span>🔥</span> Hot thị trường 2026
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <p className="text-white font-bold text-sm">Xem chi tiết tài liệu →</p>
                          </div>
                        </div>

                        <div className="p-8 bg-white/60 backdrop-blur-sm group-hover:bg-white transition-colors h-full">
                          <p className="text-[10px] font-black text-[#8DB6A0] mb-2 uppercase tracking-widest">{cert.issuer}</p>
                          <h3 className="text-2xl font-serif font-black mb-4 leading-tight group-hover:text-[#8DB6A0] transition-colors line-clamp-2">
                            {cert.title}
                          </h3>

                          {cert.date && (
                            <p className="text-sm text-gray-500 mb-8 flex items-center gap-2 font-medium">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#8DB6A0] shadow-[0_0_8px_rgba(141,182,160,0.6)] animate-pulse"></span>
                              Đã xác thực: {cert.date}
                            </p>
                          )}

                          <div className="flex gap-4">
                            <button className="flex-1 py-4 rounded-2xl bg-gray-900 text-white font-black text-xs uppercase tracking-widest shadow-lg hover:bg-[#8DB6A0] transition-colors">
                              {tab === "achieved" ? "Bản gốc" : "Tìm hiểu"}
                            </button>
                            {tab === "achieved" && (
                              <button className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-gray-400 hover:text-[#FF6F61] hover:shadow-inner transition-all border border-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
        )}
      </div>
    </div>

    {/* MODAL - CERTIFICATE DETAILS */}
      {modal && (
        <div className="fixed inset-0 bg-[#F6E7D8]/90 backdrop-blur-xl flex items-center justify-center z-50 p-6 animate-fadeIn">
          <div className="bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] max-w-2xl w-full overflow-hidden relative border-8 border-white">
            <button 
              onClick={() => setModal(null)}
              className="absolute top-6 right-6 z-10 p-3 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-black hover:rotate-90 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-full relative">
                <img
                  src={modal.image}
                  className="w-full h-full object-cover"
                  alt={modal.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:hidden">
                   <div className="flex flex-col">
                      <h2 className="text-white text-3xl font-black">{modal.title}</h2>
                      {modal.ranking && (
                        <span className="mt-2 inline-block w-fit px-2 py-0.5 bg-green-100 text-green-600 rounded-md text-[10px] font-black uppercase tracking-widest">
                          {modal.ranking}
                        </span>
                      )}
                   </div>
                </div>
              </div>

              <div className="p-10 flex flex-col justify-center">
                <div className="hidden md:block mb-6">
                  <span className="text-xs font-black text-[#FF6F61] uppercase tracking-[0.2em] mb-2 block">Chi tiết</span>
                  <h2 className="text-3xl font-black leading-tight mb-2">{modal.title}</h2>
                  {modal.ranking && (
                    <span className="inline-block px-2 py-0.5 bg-green-100 text-green-600 rounded-md text-[10px] font-black uppercase tracking-widest">
                       {modal.ranking}
                    </span>
                  )}
                </div>

                <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-4 custom-scrollbar">
                  {modal.status ? (
                    // COMPETITION MODAL CONTENT
                    <>
                      <div className="grid grid-cols-2 gap-6 bg-gray-50 p-6 rounded-[2rem]">
                        <div>
                          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Đơn vị tổ chức</h4>
                          <p className="font-black text-lg text-gray-900">{modal.host}</p>
                        </div>
                        {modal.status !== 'suggested' && (
                          <div>
                            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Tiến độ</h4>
                            <p className="font-black text-lg text-[#FF6F61]">{modal.progress}%</p>
                          </div>
                        )}
                      </div>

                      <section className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#FF6F61] text-white flex items-center justify-center font-black text-xs">01</div>
                          <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">Mô tả cuộc thi</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed font-bold bg-gray-50 p-8 rounded-[2rem] border-2 border-dashed border-gray-200">
                          {modal.details}
                        </p>
                      </section>

                      {modal.roadmap && (
                        <section className="space-y-6">
                           <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#8DB6A0] text-white flex items-center justify-center font-black text-xs">02</div>
                            <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">Lộ trình chi tiết</h4>
                          </div>
                          <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                            {modal.roadmap.map((step: RoadmapStep, i: number) => (
                              <div key={i} className="relative">
                                <div className={`absolute -left-[31px] top-1 w-6 h-6 rounded-full border-4 border-white z-10 shadow-sm ${
                                  step.status === 'completed' ? 'bg-[#FF6F61]' : 
                                  step.status === 'active' ? 'bg-[#8DB6A0] animate-pulse' : 'bg-gray-200'
                                }`} />
                                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                  <div className="flex justify-between items-start mb-1">
                                    <span className="text-[10px] font-black text-[#FF6F61] uppercase tracking-widest">Giai đoạn {step.step}</span>
                                    <span className="text-[10px] font-bold text-gray-400">{step.date}</span>
                                  </div>
                                  <h5 className="font-black text-gray-900 mb-1">{step.title}</h5>
                                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}

                      <div className="pt-8 flex flex-wrap gap-4 sticky bottom-0 bg-white pb-2 shadow-[0_-20px_20px_-20px_white]">
                        {modal.status === 'completed' && (
                          <>
                            <button className="flex-1 py-4 bg-[#FF6F61] text-white font-black rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">Certificates</button>
                            <button className="flex-1 py-4 bg-white border-2 border-[#FF6F61] text-[#FF6F61] font-black rounded-2xl hover:bg-[#FF6F61]/5 transition-all active:scale-95">Ranking</button>
                          </>
                        )}
                        {modal.status === 'active' && (
                          <>
                            <button className="flex-1 py-4 bg-[#FF6F61] text-white font-black rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">Tiếp tục</button>
                            <button className="flex-1 py-4 bg-white border-2 border-[#FF6F61] text-[#FF6F61] font-black rounded-2xl hover:bg-[#FF6F61]/5 transition-all active:scale-95">Ranking</button>
                          </>
                        )}
                        {modal.status === 'suggested' && (
                          <button className="w-full py-4 bg-[#FF6F61] text-white font-black rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">Tham gia ngay</button>
                        )}
                      </div>
                    </>
                  ) : (
                    // CERTIFICATE MODAL CONTENT
                    <>
                      <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 space-y-6">
                        <div>
                          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Nhà cung cấp</h4>
                          <p className="font-black text-lg text-gray-900">{modal.issuer}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Giá trị thị trường</h4>
                          <p className="text-gray-600 leading-relaxed italic font-medium">
                            {modal.value || "Chứng chỉ này đang rất được săn đón bởi các nhà tuyển dụng hàng đầu trong năm 2026."}
                          </p>
                        </div>
                      </div>

                      <div className="pt-6">
                        <button
                          onClick={() => setModal(null)}
                          className="w-full py-5 bg-[#FF6F61] text-white font-black rounded-2xl shadow-lg shadow-[#FF6F61]/30 hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95"
                        >
                          Xác nhận
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CUSTOM ANIMATIONS */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #eee;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ddd;
        }
      `}</style>
    </div>
  );
}
