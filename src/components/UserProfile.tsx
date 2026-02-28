import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "motion/react";
import html2canvas from "html2canvas";
import {
  Sparkles,
  Trophy,
  Medal,
  Activity,
  Award,
  BookOpen,
  Crown,
  Heart,
  Compass,
  Edit,
  Share2,
  X,
  CheckCircle,
  BrainCircuit,
  ArrowRight,
  Download,
  Mail,
  User as UserIcon,
  Upload
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { CAREER_DATA, BLOCKS } from "./CareerExploration";
import QuizResult from "./QuizResult";
import { MBTIScores } from "./MBTIQuiz";

interface UserProfileProps {
  user: any;
  mbtiResult: string | null;
  mbtiScores: MBTIScores | null;
  navigate: (view: string) => void;
  logout: () => void;
  onUpdateUser: (user: any) => void;
}

const getMbtiTraits = (mbti: string, scores: MBTIScores | null) => {
  if (scores) {
    return [
      { subject: 'Hướng ngoại', A: scores.EI.E, fullMark: 100 },
      { subject: 'Sáng tạo', A: scores.SN.N, fullMark: 100 },
      { subject: 'Lý trí', A: scores.TF.T, fullMark: 100 },
      { subject: 'Nguyên tắc', A: scores.JP.J, fullMark: 100 },
      { subject: 'Thích nghi', A: scores.JP.P, fullMark: 100 },
    ];
  }

  const isE = mbti.includes('E');
  const isN = mbti.includes('N');
  const isT = mbti.includes('T');
  const isJ = mbti.includes('J');

  return [
    { subject: 'Hướng ngoại', A: isE ? 85 : 30, fullMark: 100 },
    { subject: 'Sáng tạo', A: isN ? 90 : 60, fullMark: 100 },
    { subject: 'Lý trí', A: isT ? 85 : 40, fullMark: 100 },
    { subject: 'Nguyên tắc', A: isJ ? 85 : 45, fullMark: 100 },
    { subject: 'Thích nghi', A: !isJ ? 90 : 50, fullMark: 100 },
  ];
};

const DimensionBar = ({ labelL, labelR, pL, pR, activeL }: any) => (
  <div className="space-y-2">
    <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-gray-400">
      <span className={activeL ? "text-[#8DB6A0]" : ""}>{labelL} {pL}%</span>
      <span className={!activeL ? "text-[#8DB6A0]" : ""}>{pR}% {labelR}</span>
    </div>
    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex border border-white/5">
      <div
        style={{ width: `${pL}%` }}
        className={`h-full transition-all duration-1000 ${activeL ? 'bg-[#8DB6A0]' : 'bg-[#8DB6A0]/20'}`}
      />
      <div
        style={{ width: `${pR}%` }}
        className={`h-full transition-all duration-1000 ${!activeL ? 'bg-[#8DB6A0]' : 'bg-[#8DB6A0]/20'}`}
      />
    </div>
  </div>
);

const getMascotInfo = (mbti: string) => {
  if (mbti.includes('NF')) return { group: 'Nhóm Người Lý Tưởng', icon: '✨', mood: 'Trái tim ấm áp' };
  if (mbti.includes('NT')) return { group: 'Nhóm Người Lý Luận', icon: '🧠', mood: 'Trí tuệ sắc bén' };
  if (mbti.includes('SJ')) return { group: 'Nhóm Người Bảo Hộ', icon: '🛡️', mood: 'Sự tận tâm' };
  if (mbti.includes('SP')) return { group: 'Nhóm Người Nghệ Nhân', icon: '🎨', mood: 'Sự linh hoạt' };
  return { group: 'Nhóm Tiên Phong', icon: '🌟', mood: 'Năng động' };
};

export default function UserProfile({ user, mbtiResult, mbtiScores, navigate, logout, onUpdateUser }: UserProfileProps) {

  // EP Points (Logic based on actions)
  const baseEP = 0;
  const mbtiEP = mbtiResult ? 300 : 0;
  const certsEP = 0;
  const compEP = 0;
  const totalEP = baseEP + mbtiEP + certsEP + compEP;

  // Edit Modal State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editName, setEditName] = useState(user?.name || "");
  const [editEmail, setEditEmail] = useState(user?.email || "user@chamnghe.vn");
  const [editAvatar, setEditAvatar] = useState(user?.avatar || "");
  const [editBio, setEditBio] = useState(user?.bio || "Đang trên hành trình khám phá bản thân.");

  // Toast
  const [toast, setToast] = useState<string | null>(null);

  // Identity Expanded State
  const [isIdentityExpanded, setIsIdentityExpanded] = useState(false);
  const [showQuizResultModal, setShowQuizResultModal] = useState(false);

  // Career Wishlist State
  const [interestedCareers, setInterestedCareers] = useState<string[]>([]);
  useEffect(() => {
    const saved = localStorage.getItem("interestedCareers");
    if (saved) {
      setInterestedCareers(JSON.parse(saved));
    }
  }, []);

  const handleSaveProfile = () => {
    const updatedUser = { ...user, name: editName, email: editEmail, avatar: editAvatar, bio: editBio };
    onUpdateUser(updatedUser);
    setIsEditModalOpen(false);
    showToast("Đã lưu hồ sơ thành công!");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        showToast("Dung lượng ảnh quá lớn (tối đa 2MB)");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const passportRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPassport = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Ngăn việc bấm tải làm thu nhỏ the passport
    if (!passportRef.current || isDownloading) return;
    setIsDownloading(true);
    try {
      // Để tránh lỗi scale với radar chart trên mobile, set scale: 2 thay vì quá to
      const canvas = await html2canvas(passportRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#1C2025',
      });
      canvas.toBlob((blob) => {
        if (!blob) throw new Error("Canvas is empty");
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `ChạmNghề_Passport_${user.name}.png`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        showToast('Tải Passport thành công!');
      }, 'image/png');
    } catch (error) {
      console.error(error);
      showToast('Không thể tải ảnh. Vui lòng thử lại!');
    } finally {
      setIsDownloading(false);
    }
  };

  const wishlistCareers = CAREER_DATA.filter(c => interestedCareers.includes(c.id));
  const mascotInfo = mbtiResult ? getMascotInfo(mbtiResult) : null;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-background selection:bg-primary/20 relative">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Header - Summary Card */}
        <div className="bg-white rounded-[2rem] p-6 shadow-xl border border-primary/10 overflow-hidden relative isolate">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-[1]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-[1]" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary to-accent shadow-lg shrink-0">
              <img crossOrigin="anonymous" src={user?.avatar || "https://i.pravatar.cc/100"} alt="Avatar" className="w-full h-full rounded-full border-4 border-white object-cover" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-black font-serif text-text-dark mb-1">{user?.name}</h1>
              <p className="text-sm font-medium text-text-muted mb-4">{user?.bio || "Đang trên hành trình hiểu mình, chọn việc."}</p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
                <div className="px-4 py-1.5 bg-secondary/10 text-secondary border border-secondary/20 rounded-full flex items-center gap-1.5 font-bold shadow-sm">
                  <Sparkles size={16} />
                  <span>{totalEP.toLocaleString()} EP</span>
                </div>
                {mbtiResult && (
                  <div className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full flex items-center gap-1.5 font-bold shadow-sm">
                    <Compass size={16} />
                    <span>{mbtiResult}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-row md:flex-col gap-3 shrink-0">
              <button onClick={() => setIsEditModalOpen(true)} className="px-5 py-2.5 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
                <Edit size={16} /> Sửa
              </button>
              <button onClick={logout} className="px-5 py-2.5 bg-red-50 text-red-500 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-red-100 transition-all">
                Đăng xuất
              </button>
            </div>
          </div>
        </div>

        {/* Activity Stats */}
        <div>
          <h2 className="text-xl font-bold text-text-dark mb-4 drop-shadow-sm flex items-center gap-2">
            <Activity className="text-secondary" /> Bảng chỉ số hoạt động
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-[2rem] border border-amber-100 flex items-center gap-4 transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-200 text-amber-700 rounded-2xl flex items-center justify-center shrink-0">
                <Crown size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-amber-600/80 uppercase">Thứ hạng cao nhất</p>
                <p className="text-lg font-black text-amber-900">Hạt giống tiềm năng</p>
              </div>
            </div>

            <button onClick={() => navigate('certificates')} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-[2rem] border border-blue-100 flex items-center gap-4 transition-transform hover:-translate-y-1 text-left group">
              <div className="w-12 h-12 bg-blue-200 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-300 transition-colors">
                <BookOpen size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-600/80 uppercase">Số chứng chỉ đã có</p>
                <p className="text-lg font-black text-blue-900">0 Chứng chỉ</p>
              </div>
            </button>

            <button onClick={() => {
              // Deep link to completed competitions
              localStorage.setItem('certTab', 'competition');
              localStorage.setItem('compSubTab', 'completed');
              navigate('certificates');
            }} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-[2rem] border border-green-100 flex items-center gap-4 transition-transform hover:-translate-y-1 text-left group">
              <div className="w-12 h-12 bg-green-200 text-green-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-300 transition-colors">
                <Trophy size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-green-600/80 uppercase">Cuộc thi tham gia</p>
                <p className="text-lg font-black text-green-900">0 Cuộc thi</p>
              </div>
            </button>
          </div>
        </div>

        {/* Badge System */}
        <div>
          <h2 className="text-xl font-bold text-text-dark mb-4 drop-shadow-sm flex items-center gap-2">
            <Medal className="text-accent" /> Hệ thống danh hiệu
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mbtiResult && (
              <div className="bg-white p-5 rounded-[1.5rem] border-2 border-primary/20 flex flex-col items-center text-center group hover:border-primary transition-colors">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <BrainCircuit size={28} className="text-primary" />
                </div>
                <h4 className="font-bold text-sm text-text-dark">Người thấu cảm</h4>
                <p className="text-[10px] text-text-muted mt-1 uppercase">Hoàn thành MBTI</p>
              </div>
            )}
            <div className="bg-gray-50 p-5 rounded-[1.5rem] border-2 border-gray-100 flex flex-col items-center text-center opacity-60 grayscale cursor-not-allowed text-gray-400">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                <Award size={28} />
              </div>
              <h4 className="font-bold text-sm">Kẻ chinh phục</h4>
              <p className="text-[10px] mt-1 uppercase">Tham gia cuộc thi đầu tiên</p>
            </div>
            {/* Locked Badges */}
            <div className="bg-gray-50 p-5 rounded-[1.5rem] border-2 border-gray-100 flex flex-col items-center text-center opacity-60 grayscale cursor-not-allowed text-gray-400">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                <BookOpen size={28} />
              </div>
              <h4 className="font-bold text-sm">Chuyên gia số</h4>
              <p className="text-[10px] mt-1 uppercase">Đạt 5 chứng chỉ</p>
            </div>
          </div>
        </div>

        {/* Personal Identity (MBTI) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h2 className="text-xl font-bold text-text-dark drop-shadow-sm flex items-center gap-2">
              <FingerprintIcon className="text-primary" /> Bản sắc cá nhân
            </h2>
            {mbtiResult && (
              <button onClick={() => setShowQuizResultModal(true)} className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 font-bold rounded-xl flex items-center justify-center gap-2 transition-all text-sm w-fit shadow-sm">
                Xem Thẻ Kết Quả MBTI Cuối <ArrowRight size={16} />
              </button>
            )}
          </div>

          {mbtiResult && mascotInfo ? (
            <div
              ref={passportRef}
              className={`bg-gradient-to-br from-[#1C2025] to-[#2B323A] rounded-[2.5rem] border-[6px] border-[#2A313C] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-500 cursor-pointer ${isIdentityExpanded ? 'pb-8' : ''}`}
              onClick={() => setIsIdentityExpanded(!isIdentityExpanded)}
            >
              {/* Header the Passport */}
              <div className="p-6 md:p-8 flex justify-between items-start group relative">
                {/* Logo Chạm Nghề Mờ Mờ */}
                <div className="absolute right-8 top-8 opacity-5 text-8xl font-serif font-black select-none pointer-events-none">
                  CN.
                </div>

                <div className="flex gap-6 items-start z-10 w-full relative">
                  <div className="relative">
                    <img crossOrigin="anonymous" src={user?.avatar || "https://i.pravatar.cc/100"} alt="Avatar" className="w-24 h-24 rounded-2xl border-4 border-[#3A4350] object-cover shadow-lg" />
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xs ring-4 ring-[#1C2025]">
                      {mbtiResult}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="text-white text-2xl font-black font-serif tracking-tight">{user?.name}</h3>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2 mt-1">
                          PERSONALITY PASSPORT
                        </p>
                      </div>

                      {/* Logo Chạm Nghề in Header */}
                      <div className="hidden md:flex flex-col items-end">
                        <span className="text-[#8DB6A0] font-black font-serif text-xl leading-none">Chạm Nghề</span>
                        <span className="text-gray-500 text-[9px] uppercase tracking-widest font-bold">Identity Card</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 mt-3 text-sm text-gray-300">
                      <p className="flex items-center gap-2"><Mail size={14} className="text-gray-500" /> {user?.email}</p>
                      <p className="flex items-center gap-2 italic text-gray-400">"{user?.bio}"</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MBTI Mascot and Info section */}
              <div className="px-6 md:px-8 pb-6 flex items-center justify-between z-10 relative">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{mascotInfo.icon}</div>
                  <div>
                    <p className="text-white font-black text-lg">{mascotInfo.group}</p>
                    <p className="text-[#8DB6A0] font-bold text-xs uppercase tracking-widest">{mascotInfo.mood}</p>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  {/* Nút chỉ hiển thị khi mở rộng và không trong quá trình tải */}
                  <AnimatePresence>
                    {isIdentityExpanded && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={handleDownloadPassport}
                        disabled={isDownloading}
                        className="mr-4 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-white font-bold text-sm shadow-sm transition-all flex items-center gap-2"
                      >
                        {isDownloading ? <span className="animate-pulse">Đang tải...</span> : <><Download size={16} /> Lưu thẻ</>}
                      </motion.button>
                    )}
                  </AnimatePresence>

                  <div className="text-gray-500 hover:text-white transition-colors">
                    {isIdentityExpanded ? <X size={24} /> : <div className="text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full cursor-pointer hover:bg-white/20">Chạm để mở rộng</div>}
                  </div>
                </div>
              </div>

              {/* Radar Chart (Expandable) */}
              <AnimatePresence>
                {isIdentityExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 md:px-8 overflow-hidden relative z-10"
                  >
                    <div className="h-px w-full bg-[#3A4350]" />
                    <div className="flex flex-col md:flex-row gap-8 items-center mt-6">
                      <div className="w-full md:w-1/2 h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                          {/* Key is used to fore re-render if needed, but not necessary here */}
                          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={getMbtiTraits(mbtiResult, mbtiScores)}>
                            <PolarGrid stroke="#ffffff30" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#A3B0C1', fontSize: 12, fontWeight: 'bold' }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                            <Radar name="Chỉ số" dataKey="A" stroke="#8DB6A0" fill="#8DB6A0" fillOpacity={0.6} />
                            <Tooltip contentStyle={{ backgroundColor: '#1C2025', border: '1px solid #3A4350', borderRadius: '12px', color: '#fff' }} />
                          </RadarChart>
                        </ResponsiveContainer>
                      </div>

                      <div className="w-full md:w-1/2 space-y-4 text-gray-300">
                        <p className="text-sm leading-relaxed border-l-2 border-[#8DB6A0] pl-4">
                          Dựa trên phân tích MBTI, bạn có thiên hướng mạnh mẽ về <strong>{getMbtiTraits(mbtiResult, mbtiScores).reduce((prev, current) => (prev.A > current.A) ? prev : current).subject}</strong>. Điều này cho thấy bạn xử lý thông tin và ra quyết định một cách rất đặc trưng và khác biệt so với số đông.
                        </p>
                        {mbtiScores && (
                          <div className="space-y-4 pt-4">
                            <DimensionBar
                              labelL="E" labelR="I" pL={mbtiScores.EI.E} pR={mbtiScores.EI.I}
                              activeL={mbtiResult.includes('E')}
                            />
                            <DimensionBar
                              labelL="S" labelR="N" pL={mbtiScores.SN.S} pR={mbtiScores.SN.N}
                              activeL={mbtiResult.includes('S')}
                            />
                            <DimensionBar
                              labelL="T" labelR="F" pL={mbtiScores.TF.T} pR={mbtiScores.TF.F}
                              activeL={mbtiResult.includes('T')}
                            />
                            <DimensionBar
                              labelL="J" labelR="P" pL={mbtiScores.JP.J} pR={mbtiScores.JP.P}
                              activeL={mbtiResult.includes('J')}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="bg-white rounded-[2rem] p-8 text-center mb-8 border border-gray-100 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Compass size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-text-dark mb-2">Chưa có dữ liệu bản sắc</h3>
              <p className="text-sm text-text-muted mb-6">Bạn cần hoàn thành bài trắc nghiệm MBTI để tạo thẻ Passport cá nhân.</p>
              <button onClick={() => navigate('quiz')} className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-md hover:bg-primary/90 transition-all flex items-center gap-2 text-sm">
                Làm bài test ngay
              </button>
            </div>
          )}
        </div>

        {/* Career Wishlist */}
        {interestedCareers.length > 0 && wishlistCareers.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-text-dark mb-4 drop-shadow-sm flex items-center gap-2">
              <Heart className="text-red-400 fill-red-400" /> Nghề nghiệp quan tâm
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {wishlistCareers.map((c, idx) => {
                const blockInfo = BLOCKS.find(b => b.title === c.block);
                return (
                  <div key={idx} onClick={() => navigate('careers')} className="cursor-pointer group">
                    <div className="p-5 bg-white rounded-2xl border border-primary/10 hover:border-primary/30 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${blockInfo?.color || "from-gray-300 to-gray-400"} flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform shadow-inner`}>
                        {c.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-text-dark line-clamp-1 group-hover:text-primary transition-colors">{c.name}</h4>
                        <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{c.block}</span>
                      </div>
                      <ArrowRight size={18} className="text-gray-300 group-hover:text-primary transition-colors group-hover:translate-x-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Edit Profile Modal */}
      <AnimatePresence>
        {isEditModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsEditModalOpen(false)} />
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className="bg-white rounded-[2rem] p-8 w-full max-w-md relative z-10 shadow-2xl">
              <button onClick={() => setIsEditModalOpen(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-text-dark bg-gray-50 rounded-full"><X size={20} /></button>
              <h3 className="text-2xl font-bold font-serif text-text-dark mb-6">Chỉnh sửa hồ sơ</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Tên người dùng</label>
                  <input type="text" value={editName} onChange={e => setEditName(e.target.value)} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white font-medium text-text-dark transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Email</label>
                  <input type="email" value={editEmail} onChange={e => setEditEmail(e.target.value)} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white font-medium text-text-dark transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Ảnh đại diện</label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 bg-gray-50 shrink-0">
                      <img src={editAvatar || "https://i.pravatar.cc/100"} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                    <label className="flex-1 flex flex-col items-center justify-center px-4 py-4 bg-gray-50 text-primary rounded-xl border-2 border-dashed border-primary/20 cursor-pointer hover:bg-primary/5 transition-all">
                      <Upload size={20} className="mb-1" />
                      <span className="text-xs font-bold uppercase tracking-wider">Tải ảnh lên</span>
                      <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Vài dòng giới thiệu (Bio)</label>
                  <textarea value={editBio} onChange={e => setEditBio(e.target.value)} rows={3} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white font-medium text-text-dark transition-all resize-none" />
                </div>
              </div>

              <div className="mt-8">
                <button onClick={handleSaveProfile} className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all">
                  Lưu thay đổi
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showQuizResultModal && mbtiResult && (
          <div className="fixed inset-0 z-[110] bg-black/60 overflow-y-auto flex justify-center p-4 pt-20">
            <button onClick={() => setShowQuizResultModal(false)} className="fixed top-6 right-6 lg:top-8 lg:right-8 text-white bg-white/20 p-3 rounded-full hover:bg-white/40 z-[120] shadow-lg"><X size={28} /></button>
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className="relative w-full max-w-4xl h-fit pb-20">
              <QuizResult result={mbtiResult} scores={mbtiScores || undefined} onRestart={() => navigate('quiz')} onExploreCareers={() => navigate('careers')} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[120] px-6 py-3 bg-text-dark text-white rounded-full shadow-2xl font-bold text-sm flex items-center gap-2">
            <CheckCircle size={18} className="text-green-400" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// Inline fallback icon to prevent import issues
const FingerprintIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
    <path d="M15.29 9.17a3.02 3.02 0 0 0-4.07-.11" />
    <path d="M12.02 5c2.6 0 4.96 1.06 6.64 2.76" />
    <path d="M4.68 11.45c-.47 1.9-.38 4.25-.09 6.55" />
    <path d="M7 15.65c-.17-1.14-.38-2.6-.32-4.04" />
    <path d="M18.82 14.5c.2-.74.38-1.5.5-2.22" />
    <path d="M20 18c-.46-1.53-.94-2.8-1.5-3.5" />
    <path d="M9.86 16c.38-1.12.87-2.73 1.1-4.23" />
    <path d="M13.63 18.06c-.46-1-.87-2.3-1.07-3.72" />
    <path d="M16 11c-.32 1.4-.82 2.65-1.5 3.5" />
    <path d="M7.74 12A7 7 0 0 1 12 5.5" />
  </svg>
)