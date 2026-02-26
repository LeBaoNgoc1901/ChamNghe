import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  ArrowRight, 
  BrainCircuit,
  Menu,
  X,
  AlertTriangle,
  Compass,
  Layers,
  ChevronDown
} from "lucide-react";
import MBTIQuiz from "./components/MBTIQuiz";
import CareerExploration from "./components/CareerExploration";
import { Footer } from "./components/Footer";
import CaseStudy from "./components/CaseStudy";
import { Logo } from "./components/Logo";
import Certificates from "./components/Certificates";
import AuthSystem from "./components/AuthSystem";
import UserProfile from "./components/UserProfile";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import HelpCenter from "./components/HelpCenter";
import CommunityRules from "./components/CommunityRules";

type View = 'home' | 'quiz' | 'careers' | 'cases' | 'certificates' | 'profile' | 'terms' | 'privacy' | 'help' | 'community';

function useCountUp(target: number, start: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let rafId: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const next = Math.floor(progress * target);
      setValue(next);
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [start, target, duration]);

  return value;
}

export default function App() {
  const [view, setView] = useState<View>('home');
  const [hasTested, setHasTested] = useState(false);
  const [mbtiResult, setMbtiResult] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const socialRef = useRef<HTMLElement | null>(null);
  const [socialInView, setSocialInView] = useState(false);
  const [openSolutionStep, setOpenSolutionStep] = useState<number | null>(0);
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Minh Anh",
      role: "Quán quân Case Study 2025",
      quote:
        "Chạm Nghề giống như một chiếc gương soi lại bản sắc của mình, rồi nhẹ nhàng đẩy mình bước tới những trải nghiệm lớn hơn.",
      avatar: "https://i.pravatar.cc/150?u=chamnghe1",
      accent: "primary",
    },
    {
      name: "Khánh Linh",
      role: "Intern Marketing @ Agency",
      quote:
        "Từ một người chỉ “nghe theo bạn bè”, mình đã tự tin nói về con đường riêng khi có trong tay cả insight MBTI lẫn chứng chỉ Bloom.",
      avatar: "https://i.pravatar.cc/150?u=chamnghe2",
      accent: "secondary",
    },
    {
      name: "Hoàng Long",
      role: "Sinh viên năm 3, ĐH Kinh tế QG",
      quote:
        "Những mini case trên Chạm Nghề cho mình cảm giác được thử – sai – sửa trong môi trường an toàn, trước khi đối mặt với các cuộc thi lớn.",
      avatar: "https://i.pravatar.cc/150?u=chamnghe3",
      accent: "accent",
    },
  ] as const;

  const studentsCount = useCountUp(10000, socialInView);
  const awardsCount = useCountUp(500, socialInView);
  const partnersCount = useCountUp(30, socialInView);
  const mentorsCount = useCountUp(150, socialInView);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!socialRef.current || socialInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSocialInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(socialRef.current);

    return () => observer.disconnect();
  }, [socialInView]);

  const handleQuizComplete = (result: string) => {
    setHasTested(true);
    setMbtiResult(result);
    localStorage.setItem('mbti-result', result);
  };

  useEffect(() => {
    const savedResult = localStorage.getItem('mbti-result');
    if (savedResult) {
      setHasTested(true);
      setMbtiResult(savedResult);
    }
  }, []);

  useEffect(() => {
    const savedUser = Cookies.get('user_account');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsLoggedIn(true);
      } catch (e) {
        console.error("Failed to parse user cookie", e);
      }
    }
  }, []);

  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'quiz', label: 'Trắc nghiệm MBTI' },
    { id: 'careers', label: 'Khám phá ngành nghề' },
    { id: 'cases', label: 'Thi đấu giải Case & BXH' },
    { id: 'certificates', label: 'Dấu ấn bản sắc' },
  ];

  const navigate = (target: View) => {
    setView(target);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleLoginSuccess = (userData: any) => {
    setUser(userData);
    setIsLoggedIn(true);
    // Persist login state
    Cookies.set('user_account', JSON.stringify(userData), { expires: 7 });
  };

  const logout = () => {
    Cookies.remove('user_account');
    setUser(null);
    setIsLoggedIn(false);
    navigate('home');
  };

  return (
    <div className="min-h-screen bg-background selection:bg-secondary/30">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 ${
        scrolled ? "bg-surface/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-3"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div 
            className="cursor-pointer"
            onClick={() => navigate('home')}
          >
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-10 text-sm font-bold text-text-dark">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id as View)}
                className={`transition-all hover:text-primary relative py-2 ${
                  view === item.id ? "text-primary" : "text-text-muted"
                }`}
              >
                {item.label}
                {view === item.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              {!isLoggedIn ? (
                <>
                  <button
                    onClick={() => openAuth('register')}
                    className="px-6 py-2.5 rounded-full border-2 border-primary text-primary text-sm font-bold hover:bg-primary/10 transition-all"
                  >
                    Đăng ký
                  </button>
                  <button
                    onClick={() => openAuth('login')}
                    className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
                  >
                    Đăng nhập
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate('profile')}
                  className={`flex items-center gap-3 px-4 py-2 rounded-full border-2 transition-all group ${
                    view === 'profile' ? "border-primary bg-primary/5" : "border-transparent hover:bg-gray-50"
                  }`}
                >
                  <span className="text-sm font-bold text-text-dark hidden md:inline">
                    <span className="text-text-muted font-medium">Xin chào</span> {user?.name}
                  </span>
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary relative">
                    <img
                      src={user?.avatar || "https://i.pravatar.cc/100"}
                      alt="avatar"
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              )}
            </div>
            <button 
              className="lg:hidden p-2 text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
              />
              {/* Menu Content */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background/95 backdrop-blur-xl z-50 lg:hidden shadow-2xl flex flex-col p-8"
              >
                <div className="flex justify-between items-center mb-12">
                  <Logo />
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-primary"
                  >
                    <X size={28} />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigate(item.id as View)}
                      className={`text-left text-xl font-bold py-2 transition-colors ${
                        view === item.id ? "text-primary" : "text-text-dark"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-primary/10">
                  {!isLoggedIn ? (
                    <>
                      <button
                        onClick={() => openAuth('register')}
                        className="w-full py-4 border-2 border-primary text-primary rounded-2xl font-bold"
                      >
                        Đăng ký
                      </button>
                      <button
                        onClick={() => openAuth('login')}
                        className="w-full py-4 bg-primary text-white rounded-2xl font-bold"
                      >
                        Đăng nhập
                      </button>
                    </>
                  ) : (
                    <div className="flex flex-col gap-4 w-full">
                      <button
                        onClick={() => navigate('profile')}
                        className="flex items-center gap-4 w-full p-4 bg-primary/5 rounded-2xl border-2 border-primary/20"
                      >
                        <img
                          src={user?.avatar || "https://i.pravatar.cc/100"}
                          alt="avatar"
                          className="w-14 h-14 rounded-full border-2 border-primary"
                        />
                        <div className="text-left">
                          <span className="font-black text-text-dark block text-lg leading-tight">Xin chào {user?.name || "Thành viên"}</span>
                        </div>
                      </button>
                      <button
                        onClick={logout}
                        className="w-full py-4 bg-white text-text-muted border-2 border-gray-100 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all"
                      >
                        <X size={18} />
                        Đăng xuất
                      </button>
                    </div>
                  )}
                  <p className="text-center text-sm text-text-muted mt-6">
                    Hỗ trợ: hotro@chamnghe.vn
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content Sections */}
      <div className="pt-16">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              {/* Hero Section */}
              <section id="home" className="relative overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto px-6 pt-8 pb-12 md:pt-12 md:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Right Column (Image) - Appears first on Mobile */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative order-1 lg:order-2"
                  >
                    <div className="relative z-10 rounded-[24px] overflow-hidden shadow-2xl border-4 border-accent/30 p-2 bg-surface">
                      <img 
                        src="/hero.png" 
                        alt="Gen Z Creative Team" 
                        className="w-full h-auto object-cover aspect-[4/5] rounded-[18px]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </motion.div>

                  {/* Left Column (Content) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 order-2 lg:order-1"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-primary/20 text-primary text-xs font-semibold mb-4">
                      <Sparkles size={14} />
                      <span>Khám phá bản thân, chạm tới tương lai</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-serif text-text-dark leading-[1.3] mb-6 tracking-tight text-shadow-soft-3d">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 flex-wrap"
                      >
                        <span className="font-bold italic">Chạm</span>
                        <span className="text-secondary font-serif italic font-bold">
                          bản sắc
                        </span>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center gap-4 flex-wrap mt-2"
                      >
                        <span className="text-text-muted/50 font-light">—</span>
                        <span className="font-bold italic">Khắc</span>
                        <span className="text-secondary font-serif italic font-bold">
                          tương lai
                        </span>
                      </motion.div>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-text-muted font-light mb-8 max-w-lg leading-relaxed">
                      Đừng chỉ chọn nghề, <span className="font-medium text-text-dark">Hãy chọn đam mê</span>. <br />
                      Hành trình thấu hiểu bản thân bắt đầu từ một lần chạm.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button 
                        whileHover={{ y: -4, filter: "brightness(1.1)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate('quiz')}
                        className="px-10 py-4 bg-secondary text-white rounded-[50px] font-bold shadow-lg shadow-secondary/20 flex items-center justify-center gap-2 group transition-all"
                      >
                        Làm trắc nghiệm MBTI ngay
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                      
                      <motion.button 
                        whileHover={{ y: -4, filter: "brightness(1.1)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate('careers')}
                        className="px-10 py-4 border-2 border-primary text-primary rounded-[50px] font-bold bg-transparent transition-all hover:bg-primary/5"
                      >
                        Khám phá ngành nghề
                      </motion.button>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <img 
                            key={i}
                            src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                            alt="User" 
                            className="w-10 h-10 rounded-full border-2 border-surface object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-text-muted">
                        <span className="font-bold text-text-dark">2,000+</span> bạn trẻ đã tìm thấy hướng đi
                      </p>
                    </div>
                  </motion.div>
                </div>
              </section>
              
              {/* About Us Section - The Human Behind the Craft */}
              <section className="relative max-w-7xl mx-auto px-6 py-28 overflow-hidden bg-background">
                {/* Background Watercolor Effects */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C1D8C3]/20 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FDF6EC]/60 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />

                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
                  {/* Left Column: Mission & Typography Masking */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 
                        className="text-[6rem] md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-tighter leading-none mb-4 pb-4 md:pb-8"
                        style={{ 
                          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundAttachment: "fixed",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"
                        }}
                      >
                        CHẠM
                      </h2>
                    </div>
                    <div className="space-y-6">
                      {/* Card 1: Khơi nguồn bản sắc */}
                      <div className="relative p-6 rounded-3xl bg-white/40 backdrop-blur-md border border-white/40 shadow-xl group hover:bg-white/60 transition-colors">
                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-primary rounded-full" />
                        <h3 className="text-xl font-bold text-[#4A7C59] mb-2">1. Sứ mệnh: Khơi nguồn bản sắc</h3>
                        <p className="text-sm text-text-muted leading-relaxed">
                          Chạm Nghề không chỉ là một nền tảng cấp chứng chỉ. Chúng tôi ra đời với một niềm tin đơn giản: Mỗi cá nhân là một bản thể độc bản. Chúng tôi tồn tại để giúp bạn bóc tách những lớp "mơ hồ" về tương lai, dùng dữ liệu khoa học (MBTI) và trải nghiệm thực chiến để định vị chính xác vị trí bạn thuộc về trong thế giới nghề nghiệp rộng lớn.
                        </p>
                      </div>

                      {/* Card 2: Câu chuyện */}
                      <div className="relative p-6 rounded-3xl bg-white/40 backdrop-blur-md border border-white/40 shadow-xl group hover:bg-white/60 transition-colors">
                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-secondary rounded-full" />
                        <h3 className="text-xl font-bold text-secondary mb-2">2. Câu chuyện: Từ những "người lạc lối" đi tìm ánh sáng</h3>
                        <p className="text-sm text-text-muted leading-relaxed">
                          Đội ngũ sáng lập Chạm Nghề cũng từng là những sinh viên đứng trước ngưỡng cửa sự nghiệp với sự hoang mang tột độ. Chúng tôi hiểu cảm giác chọn một ngành vì xu hướng nhưng tâm hồn lại thuộc về một lối đi khác. Đó là lý do Chạm Nghề được xây dựng – như một "trạm dừng chân" để bạn hiểu mình trước khi dấn thân.
                        </p>
                      </div>

                      {/* Card 3: Đội ngũ Mentor */}
                      <div className="relative p-6 rounded-3xl bg-white/40 backdrop-blur-md border border-white/40 shadow-xl group hover:bg-white/60 transition-colors">
                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-accent rounded-full" />
                        <h3 className="text-xl font-bold text-[#3D5A80] mb-2">3. Đội ngũ Mentor: Những người "truyền lửa" tử tế</h3>
                        <p className="text-sm text-text-muted leading-relaxed">
                          Phần "Người" nhất tại Chạm Nghề chính là đội ngũ dẫn dắt. Họ không chỉ là những chuyên gia có 10+ năm kinh nghiệm tại các tập đoàn lớn (VinFast, Shopee, FPT...), mà còn là những người thấu hiểu tâm lý Gen Z.
                        </p>
                      </div>
                      
                      {/* Bold Highlight Quote */}
                      <div className="pt-4 px-2">
                        <h3 
                          className="text-2xl md:text-3xl font-serif font-black leading-tight text-secondary drop-shadow-sm" 
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          Chúng tôi không chỉ xây dựng công cụ, chúng tôi xây dựng sự thấu cảm.
                        </h3>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Column: Mentors Collage (Masonry Layout) */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative"
                  >
                    <div className="grid grid-cols-2 gap-4 md:gap-8 relative">
                      {/* Left Column Stack */}
                      <div className="flex flex-col gap-16">
                        {/* Mentor 1 - Top Left */}
                        <div className="flex flex-col relative group z-20">
                          <div className="aspect-[4/5] mx-auto w-full md:w-[90%] rounded-[32px] overflow-hidden relative shadow-xl transform transition-transform duration-500 group-hover:-translate-y-2 border-4 border-white">
                            <img 
                              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                              alt="Mentor Coach" 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-text-dark/90 via-text-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                              <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-1">ENFJ</span>
                              <span className="text-white font-medium">Mentor Lan - Chuyên gia Hướng nghiệp</span>
                            </div>
                          </div>
                          <div className="absolute -bottom-8 right-0 z-30 bg-[#FDF6EC]/95 backdrop-blur-sm p-4 md:p-5 rounded-2xl shadow-xl border border-primary/10 w-[90%] rotate-3 group-hover:rotate-0 transition-transform">
                            <p className="font-medium text-text-dark text-[15px] leading-snug" style={{ fontFamily: "'Caveat', cursive, serif", letterSpacing: "0.5px" }}>
                              "Đừng tìm kiếm nghề nghiệp, hãy tìm kiếm chính mình."
                            </p>
                          </div>
                        </div>

                        {/* Mentor 3 - Overlaying Center Bottom */}
                        <div className="flex flex-col relative group z-30">
                          <div className="aspect-[16/10] w-full rounded-[32px] overflow-hidden relative shadow-2xl border-[6px] border-background transform transition-transform duration-500 group-hover:scale-105">
                            <img 
                              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                              alt="Cộng đồng Mentor" 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-text-dark/90 via-text-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                              <span className="text-primary font-bold text-[10px] tracking-wider uppercase mb-1">150+ MENTORS</span>
                              <span className="text-white font-medium text-sm">Chạm bản sắc - Khắc tương lai</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column Stack */}
                      <div className="flex flex-col gap-16 mt-16 md:mt-24">
                        {/* Mentor 2 - Bottom Right */}
                        <div className="flex flex-col relative group z-10">
                          <div className="aspect-[3/4] mx-auto w-full md:w-[90%] rounded-[32px] overflow-hidden relative shadow-xl transform transition-transform duration-500 group-hover:-translate-y-2 border-4 border-[#C1D8C3]/50">
                            <img 
                              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" 
                              alt="Mentor Marketing" 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-text-dark/90 via-text-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                              <span className="text-accent font-bold text-sm tracking-wider uppercase mb-1">ENTP</span>
                              <span className="text-white font-medium">Mentor Nam - Người truyền lửa Marketing</span>
                            </div>
                          </div>
                          <div className="absolute -bottom-8 left-0 z-30 bg-[#C1D8C3]/95 backdrop-blur-sm p-4 md:p-5 rounded-2xl shadow-xl border border-primary/10 w-[90%] -rotate-6 group-hover:rotate-0 transition-transform">
                            <p className="font-medium text-text-dark text-[15px] leading-snug" style={{ fontFamily: "'Caveat', cursive, serif", letterSpacing: "0.5px" }}>
                              "Cứ đi rồi sẽ đến, cứ gõ cửa sẽ mở."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Social Proof Section - Redesigned */}
              <section ref={socialRef as React.RefObject<HTMLElement>} className="relative border-y border-primary/5 bg-warm-beige-noise overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20 space-y-14">
                  {/* Header */}
                  <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">
                      Bằng chứng xã hội
                    </p>
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Được tin tưởng bởi cộng đồng & đối tác
                    </h3>
                    <p className="text-sm md:text-base text-text-muted">
                      Từ trường học, câu lạc bộ đến doanh nghiệp, Chạm Nghề đã đồng hành cùng hàng nghìn bạn trẻ trong hành trình định hình bản sắc nghề nghiệp.
                    </p>
                  </div>

                  {/* Bento Box - Statistics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-fr">
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.6, delay: 0 }}
                      className="soft-ui-shadow soft-ui-shadow-hover rounded-[28px] p-6 md:p-8 bg-gradient-to-br from-primary/20 to-primary/5 transition-all duration-300 hover:-translate-y-1 col-span-2 md:row-span-2 flex flex-col justify-center"
                    >
                      <p className="text-4xl md:text-5xl font-black text-primary mb-2">
                        {studentsCount.toLocaleString("vi-VN")}+
                      </p>
                      <p className="text-sm md:text-base text-text-muted font-medium">Sinh viên & học sinh đã trải nghiệm</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="soft-ui-shadow soft-ui-shadow-hover rounded-[28px] p-6 bg-gradient-to-br from-secondary/25 to-secondary/10 transition-all duration-300 hover:-translate-y-1"
                    >
                      <p className="text-3xl md:text-4xl font-black text-secondary mb-1">
                        {awardsCount.toLocaleString("vi-VN")}+
                      </p>
                      <p className="text-xs md:text-sm text-text-muted">Giải thưởng & chứng chỉ đã trao</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="soft-ui-shadow soft-ui-shadow-hover rounded-[28px] p-6 bg-gradient-to-br from-accent/20 to-accent/5 transition-all duration-300 hover:-translate-y-1"
                    >
                      <p className="text-3xl md:text-4xl font-black text-accent mb-1">
                        {partnersCount.toLocaleString("vi-VN")}+
                      </p>
                      <p className="text-xs md:text-sm text-text-muted">Đối tác trường học & CLB</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.6, delay: 0.45 }}
                      className="soft-ui-shadow soft-ui-shadow-hover rounded-[28px] p-6 md:p-8 bg-gradient-to-br from-text-dark/15 to-text-dark/5 transition-all duration-300 hover:-translate-y-1 col-span-2"
                    >
                      <p className="text-3xl md:text-4xl font-black text-text-dark mb-1">
                        {mentorsCount.toLocaleString("vi-VN")}+
                      </p>
                      <p className="text-xs md:text-sm text-text-muted">Mentor & chuyên gia đồng hành</p>
                    </motion.div>
                  </div>

                  {/* Infinite Slider - Partner logos (text labels) */}
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#F6E7D8] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#F6E7D8] to-transparent z-10 pointer-events-none" />
                    <div className="overflow-hidden">
                      <div className="flex w-max animate-social-proof-slide gap-6 md:gap-10 py-4">
                        {[...Array(2)].map((_, copy) => (
                          <div key={copy} className="flex items-center gap-6 md:gap-10 shrink-0">
                            {[
                              "ĐH Kinh tế QG",
                              "ĐH Bách Khoa Hà Nội",
                              "FPT Education",
                              "VinFast",
                              "Coursera",
                              "Udemy",
                              "Google for Education",
                              "Shopee Uni",
                            ].map((label) => (
                              <motion.div
                                key={`${copy}-${label}`}
                                className="shrink-0 px-5 py-2.5 rounded-2xl bg-white/70 text-text-muted text-sm font-semibold border border-white/80 shadow-sm backdrop-blur-sm"
                                whileHover={{ y: -4, scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                              >
                                {label}
                              </motion.div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Problem & Solution Section - Redesigned */}
              <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-6 space-y-14">
                  {/* Problem / Pain Points */}
                  <div className="space-y-8">
                    {/* Desktop Split Screen */}
                    <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
                      <div className="space-y-5">
                        <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                          Vấn đề bạn đang gặp phải
                        </p>
                        <h3 className="text-4xl xl:text-5xl font-serif font-bold leading-tight bg-gradient-to-r from-text-dark to-secondary bg-clip-text text-transparent">
                          Bạn đang lạc lối giữa vô số lựa chọn nghề nghiệp?
                        </h3>
                        <p className="text-sm md:text-base text-text-muted max-w-xl">
                          Chọn ngành theo xu hướng, theo lời khuyên của người khác nhưng vẫn thấy mơ hồ về chính mình – đó là câu chuyện chung của rất nhiều bạn Gen Z.
                        </p>
                      </div>

                      <div className="relative h-full">
                        {[
                          {
                            title: "Không rõ mình mạnh ở đâu",
                            desc: "Bạn khó diễn tả điểm mạnh, điểm khác biệt của bản thân khi viết CV hoặc trả lời phỏng vấn.",
                            icon: <BrainCircuit className="text-primary" size={26} />,
                          },
                          {
                            title: "Quá nhiều lựa chọn, quá ít trải nghiệm",
                            desc: "Danh sách ngành nghề dài vô tận nhưng bạn chưa có cơ hội thử để biết thật sự hợp với điều gì.",
                            icon: <Compass className="text-secondary" size={26} />,
                          },
                          {
                            title: "Sợ chọn sai sẽ phải làm lại từ đầu",
                            desc: "Nỗi lo “lỡ chọn sai ngành” khiến bạn chần chừ, thiếu tự tin bước tiếp.",
                            icon: <AlertTriangle className="text-accent" size={26} />,
                          },
                        ].map((card, index) => (
                          <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            className={`absolute right-0 left-6 rounded-3xl bg-background border border-primary/10 shadow-xl p-5 flex gap-4 items-start ${
                              index === 0 ? "-top-4" : index === 1 ? "top-20" : "top-44"
                            }`}
                          >
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-md">
                              {card.icon}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-text-dark mb-1">{card.title}</p>
                              <p className="text-xs text-text-muted leading-relaxed">{card.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Mobile Card Stack / Swipe */}
                    <div className="lg:hidden space-y-4">
                      <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                        Vấn đề bạn đang gặp phải
                      </p>
                      <h3 className="text-3xl font-serif font-bold leading-tight bg-gradient-to-r from-text-dark to-secondary bg-clip-text text-transparent mb-3">
                        Bạn đang lạc lối giữa vô số lựa chọn nghề nghiệp?
                      </h3>
                      <p className="text-sm text-text-muted mb-2">
                        Vuốt sang trái/phải để xem những nỗi lo quen thuộc của cộng đồng Chạm Nghề.
                      </p>
                      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
                        {[
                          {
                            title: "Không rõ mình mạnh ở đâu",
                            desc: "Khó mô tả bản thân trong CV hay phỏng vấn, chỉ biết “thích nhiều thứ”.",
                            icon: <BrainCircuit className="text-primary" size={26} />,
                          },
                          {
                            title: "Choáng ngợp vì quá nhiều ngành",
                            desc: "Mỗi nơi nói một kiểu, bạn không biết nên tin vào nguồn thông tin nào.",
                            icon: <Compass className="text-secondary" size={26} />,
                          },
                          {
                            title: "Sợ chọn sai đường",
                            desc: "Nỗi sợ tốn thời gian, công sức và tiền bạc nếu phải “học lại từ đầu”.",
                            icon: <AlertTriangle className="text-accent" size={26} />,
                          },
                        ].map((card) => (
                          <div
                            key={card.title}
                            className="snap-center min-w-[260px] max-w-[280px] rounded-3xl bg-background border border-primary/15 shadow-lg p-5 flex flex-col gap-3"
                          >
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-md">
                              {card.icon}
                            </div>
                            <p className="text-sm font-semibold text-text-dark">{card.title}</p>
                            <p className="text-xs text-text-muted leading-relaxed flex-1">{card.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Solution / How it works */}
                  <div className="space-y-8">
                    <div className="text-center md:text-left max-w-3xl">
                      <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
                        Giải pháp từ Chạm Nghề
                      </p>
                      <h4
                        className="text-3xl md:text-4xl font-serif font-bold text-secondary tracking-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Lộ trình 4.0: từ “mơ hồ” đến “có lộ trình”
                      </h4>
                    </div>

                    {/* Desktop: Horizontal timeline */}
                    <div className="hidden md:block relative">
                      <div className="absolute left-4 right-4 top-1/2 border-t border-dashed border-primary/30 -z-10" />
                      <div className="flex justify-between gap-4">
                        {[
                          {
                            step: "01",
                            title: "Thấu hiểu bản thân",
                            desc: "Làm bài MBTI, nhận bản đồ tính cách & insight về cách bạn làm việc, ra quyết định.",
                            action: () => navigate('quiz'),
                          },
                          {
                            step: "02",
                            title: "Khám phá ngành nghề",
                            desc: "AI gợi ý nhóm ngành, vai trò và tài nguyên học tập phù hợp với hồ sơ của bạn.",
                            action: () => navigate('careers'),
                          },
                          {
                            step: "03",
                            title: "Trải nghiệm thực chiến",
                            desc: "Tham gia Case Study, project mô phỏng do doanh nghiệp & mentor thiết kế.",
                            action: () => navigate('cases'),
                          },
                          {
                            step: "04",
                            title: "Nhận chứng chỉ Bloom",
                            desc: "Tích lũy chứng chỉ & câu chuyện thật để đưa vào CV, portfolio, phỏng vấn.",
                            action: () => navigate('certificates'),
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={item.step}
                            whileHover={{ scale: 1.03, translateY: -6 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="flex-1 max-w-[260px] rounded-3xl bg-surface border border-primary/15 px-5 py-6 cursor-default hover:bg-primary/10 transition-colors"
                          >
                            <div className="mb-3 flex items-center gap-2">
                              <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                                {item.step}
                              </div>
                              <span className="text-[11px] uppercase tracking-[0.18em] text-text-muted">
                                Bước {index + 1}
                              </span>
                            </div>
                            <p className="text-sm font-semibold text-text-dark mb-1">{item.title}</p>
                            <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                            <button
                              type="button"
                              onClick={item.action}
                              className="mt-3 inline-flex items-center gap-1 rounded-full bg-primary/90 text-white px-4 py-1.5 text-[11px] font-semibold glow-hover"
                            >
                              Thử ngay
                              <ArrowRight size={14} />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Mobile: Accordion vertical */}
                    <div className="md:hidden space-y-3">
                      {[
                        {
                          step: "01",
                          title: "Thấu hiểu bản thân",
                          desc: "Làm bài MBTI, nhận bản đồ tính cách & insight về cách bạn làm việc, ra quyết định.",
                          cta: "Làm trắc nghiệm MBTI",
                          action: () => navigate('quiz'),
                        },
                        {
                          step: "02",
                          title: "Khám phá ngành nghề",
                          desc: "AI gợi ý nhóm ngành, vai trò và tài nguyên học tập phù hợp với hồ sơ của bạn.",
                          cta: "Khám phá ngành nghề",
                          action: () => navigate('careers'),
                        },
                        {
                          step: "03",
                          title: "Trải nghiệm thực chiến",
                          desc: "Tham gia Case Study, project mô phỏng do doanh nghiệp & mentor thiết kế.",
                          cta: "Xem các Case Study",
                          action: () => navigate('cases'),
                        },
                        {
                          step: "04",
                          title: "Nhận chứng chỉ Bloom",
                          desc: "Tích lũy chứng chỉ & câu chuyện thật để đưa vào CV, portfolio, phỏng vấn.",
                          cta: "Xem bộ chứng chỉ",
                          action: () => navigate('certificates'),
                        },
                      ].map((item, index) => {
                        const isOpen = openSolutionStep === index;
                        return (
                          <div
                            key={item.step}
                            className="rounded-3xl bg-background border border-primary/10 px-4 py-3"
                          >
                            <button
                              type="button"
                              onClick={() => setOpenSolutionStep(isOpen ? null : index)}
                              className="flex w-full items-center justify-between gap-3"
                            >
                              <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                                  {item.step}
                                </div>
                                <span className="text-sm font-semibold text-text-dark text-left">
                                  {item.title}
                                </span>
                              </div>
                              <ChevronDown
                                size={18}
                                className={`text-text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                              />
                            </button>
                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  key="content"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.25, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-3 space-y-3 text-xs text-text-muted">
                                    <p>{item.desc}</p>
                                    <button
                                      type="button"
                                      onClick={item.action}
                                      className="inline-flex items-center gap-1 rounded-full bg-primary text-white px-4 py-1.5 text-[11px] font-semibold"
                                    >
                                      {item.cta}
                                      <ArrowRight size={14} />
                                    </button>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>

              {/* Featured Content Section */}
              <section className="py-20 bg-[#FDF6EC]">
                <div className="max-w-7xl mx-auto px-6 space-y-14">
                  {/* Spotlight Grid */}
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
                          Nội dung tiêu biểu
                        </p>
                        <h3
                          className="text-3xl md:text-4xl font-serif font-extrabold text-secondary tracking-tight"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          Trải nghiệm nổi bật trong tháng
                        </h3>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Hot competition spotlight */}
                      <motion.article
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 220, damping: 22 }}
                        className="md:col-span-2 relative overflow-hidden rounded-[32px] bg-gradient-to-br from-text-dark/90 to-text-dark shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer"
                      >
                        <div
                          className="absolute inset-0 opacity-60"
                          style={{
                            backgroundImage:
                              "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1800&auto=format&fit=crop')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
                        <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between text-white">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-secondary text-white tracking-[0.16em] uppercase">
                              Hot
                            </span>
                            <span className="text-xs text-white/70">
                              Cuộc thi Case Study tháng này
                            </span>
                          </div>
                          <div className="space-y-4 max-w-xl">
                            <h4 className="text-2xl md:text-3xl font-serif font-bold">
                              Bloom Branding Challenge 2026
                            </h4>
                            <p className="text-sm md:text-base text-white/80">
                              Định vị lại thương hiệu cho một startup Việt Nam, cùng mentor từ các agency hàng đầu.
                            </p>
                          </div>
                          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/75">
                            <span className="px-3 py-1 rounded-full border border-white/30 bg-white/10">
                              Creative & Marketing
                            </span>
                            <span>⏱ Đăng ký đến: 30/03/2026</span>
                          </div>
                        </div>
                      </motion.article>

                      {/* New certificates & combined card */}
                      {[
                        {
                          title: "Bloom Certificate: Creative Thinking",
                          desc: "Chứng nhận khả năng tư duy sáng tạo & giải quyết vấn đề qua các bài tập thực chiến.",
                          image:
                            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
                        },
                        {
                          title: "Bloom Certificate: Career Explorer",
                          desc: "Dành cho những bạn đã hoàn thành hành trình khám phá ngành nghề cùng Chạm Nghề.",
                          image:
                            "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
                        },
                        {
                          title: "Track cuộc thi & chứng chỉ",
                          desc: "Xem nhanh những cuộc thi đang mở và chứng chỉ bạn đã tích lũy trong một bảng điều khiển trực quan.",
                          image:
                            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
                        },
                      ].map((item) => (
                        <motion.article
                          key={item.title}
                          whileHover={{ y: -8 }}
                          transition={{ type: "spring", stiffness: 220, damping: 22 }}
                          className="rounded-[28px] bg-white/90 border border-primary/15 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col overflow-hidden"
                        >
                          <div className="aspect-[4/3] w-full overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <div className="p-5 flex flex-col gap-3 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <div className="h-9 w-9 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <Layers size={20} />
                              </div>
                              <span className="text-[11px] font-semibold text-primary uppercase tracking-[0.18em]">
                                Chứng chỉ & hành trình
                              </span>
                            </div>
                            <h4 className="text-sm md:text-base font-semibold text-text-dark">
                              {item.title}
                            </h4>
                            <p className="text-xs text-text-muted leading-relaxed flex-1">
                              {item.desc}
                            </p>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  </div>

                  {/* Blog Section */}
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
                          Bài viết tuyển chọn
                        </p>
                        <h3
                          className="text-3xl md:text-4xl font-serif font-extrabold text-secondary tracking-tight"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          Góc nhìn Chạm Nghề
                        </h3>
                      </div>
                    </div>

                    <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible pb-2">
                      {[
                        {
                          title: "Bản sắc cá nhân trong kỷ nguyên AI",
                          excerpt: "Giữ vững “chất riêng” khi AI đang dần làm thay con người.",
                          tag: "Bản sắc cá nhân",
                          image:
                            "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
                          detail:
                            "Chúng ta nói nhiều về AI, nhưng ít khi dừng lại để hỏi: điều gì khiến một con người vẫn trở nên đặc biệt? Bài viết phân tích 3 lớp bản sắc cá nhân – giá trị, câu chuyện và dấu ấn nghề nghiệp – mà máy móc không thể sao chép.",
                        },
                        {
                          title: "Kỹ năng thực chiến vs Bằng cấp",
                          excerpt: "Điều gì thực sự thuyết phục nhà tuyển dụng trong năm 2026?",
                          tag: "Career Talk",
                          image:
                            "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
                          detail:
                            "Từ góc nhìn HR và mentor doanh nghiệp, bài viết mổ xẻ sự khác nhau giữa “bằng cấp đẹp” và “năng lực thực tế”, đi kèm các gợi ý cụ thể để bạn cân bằng cả hai trên CV.",
                        },
                        {
                          title: "Hành trình từ sinh viên đến quán quân",
                          excerpt: "Case study một chặng đường đổi hướng đầy bất ngờ.",
                          tag: "Câu chuyện thật",
                          image:
                            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop",
                          detail:
                            "Nhân vật chính xuất phát là một sinh viên “mơ hồ”, từng muốn bỏ cuộc giữa chừng. Nhờ thử sức với các mini case trên Chạm Nghề, bạn ấy dần tích lũy kinh nghiệm và cuối cùng giành quán quân tại một cuộc thi toàn quốc.",
                        },
                      ].map((post, index) => (
                        <article
                          key={post.title}
                          className="snap-center min-w-[260px] max-w-xs md:min-w-0 md:max-w-none rounded-[24px] bg-white/90 border border-primary/10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col overflow-hidden"
                        >
                          {/* Golden-ratio style layout */}
                          <div style={{ aspectRatio: "16/10" }} className="w-full relative shrink-0">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                            <span className="absolute z-10 left-4 top-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
                              {post.tag}
                            </span>
                          </div>
                          <div className="flex-1 p-5 flex flex-col gap-2">
                            <h4 className="text-sm md:text-base font-semibold text-text-dark">
                              {post.title}
                            </h4>
                            <p className="text-xs text-text-muted leading-relaxed line-clamp-1">
                              {post.excerpt}
                            </p>
                            <button
                              type="button"
                              onClick={() => setExpandedPost(expandedPost === index ? null : index)}
                              className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:underline self-start"
                            >
                              Đọc chi tiết
                              <ArrowRight size={14} />
                            </button>
                            <AnimatePresence initial={false}>
                              {expandedPost === index && (
                                <motion.p
                                  key="detail"
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 8 }}
                                  transition={{ duration: 0.25, ease: "easeInOut" }}
                                  className="mt-2 text-xs text-text-muted leading-relaxed border-t border-primary/10 pt-2"
                                >
                                  {post.detail}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Testimonials - The Voice of Identity */}
              <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-6 space-y-10">
                  <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">
                      Cảm nhận khách hàng
                    </p>
                    <h3
                      className="text-3xl md:text-4xl font-serif font-extrabold text-secondary tracking-tight mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      The Voice of Identity
                    </h3>
                    <p className="text-sm md:text-base text-text-muted">
                      Những tiếng nói chân thật từ hành trình chạm nghề – nơi mỗi câu chuyện đều mang một màu sắc riêng.
                    </p>
                  </div>

                  {/* Desktop / Tablet layout */}
                  <div className="hidden md:grid grid-cols-3 gap-8">
                    {testimonials.map((t, index) => {
                      const clips = [
                        "polygon(0% 18%, 95% 5%, 100% 80%, 10% 100%)",
                        "polygon(5% 0%, 100% 12%, 90% 100%, 0% 85%)",
                        "polygon(0% 10%, 100% 0%, 95% 90%, 8% 100%)",
                      ];
                      return (
                        <motion.div
                          key={t.name}
                          style={{ clipPath: clips[index] }}
                          className="relative bg-surface border border-primary/10 px-7 py-8 shadow-lg overflow-hidden"
                        >
                          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl opacity-70" />
                          <div className="relative flex flex-col gap-5">
                            <div className="flex items-center gap-4">
                              <div
                                className={`h-14 w-14 rounded-full border-2 ${
                                  t.accent === "primary"
                                    ? "border-primary"
                                    : t.accent === "secondary"
                                    ? "border-secondary"
                                    : "border-accent"
                                } overflow-hidden`}
                              >
                                <img src={t.avatar} alt={t.name} className="h-full w-full object-cover" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-text-dark">{t.name}</p>
                                <p className="text-xs text-text-muted">{t.role}</p>
                              </div>
                            </div>
                            <p
                              className="text-sm md:text-base italic text-text-dark leading-relaxed"
                              style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                              “{t.quote}”
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Mobile floating cards carousel */}
                  <div className="md:hidden">
                    <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-3">
                      {testimonials.map((t, index) => (
                        <motion.div
                          key={t.name}
                          className="snap-center min-w-[260px] max-w-xs bg-surface border border-primary/10 rounded-[32px] px-6 py-7 shadow-lg relative overflow-hidden"
                        >
                          <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-secondary/10 blur-3xl opacity-70" />
                          <div className="relative flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                              <div
                                className={`h-12 w-12 rounded-full border-2 ${
                                  t.accent === "primary"
                                    ? "border-primary"
                                    : t.accent === "secondary"
                                    ? "border-secondary"
                                    : "border-accent"
                                } overflow-hidden`}
                              >
                                <img src={t.avatar} alt={t.name} className="h-full w-full object-cover" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-text-dark">{t.name}</p>
                                <p className="text-[11px] text-text-muted">{t.role}</p>
                              </div>
                            </div>
                            <p
                              className="text-sm italic text-text-dark leading-relaxed"
                              style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                              “{t.quote}”
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <p className="mt-1 text-[11px] text-center text-text-muted">
                      Vuốt nhẹ để lắng nghe thêm những “giọng nói bản sắc” khác.
                    </p>
                  </div>
                </div>
              </section>


            </motion.div>
          )}

          {view === 'quiz' && (
            <motion.section 
              key="quiz"
              id="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="py-12"
            >
              <MBTIQuiz 
                onComplete={handleQuizComplete} 
                onExploreCareers={() => navigate('careers')}
              />
            </motion.section>
          )}

          {view === 'careers' && (
            <motion.section 
              key="careers"
              id="careers"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12"
            >
              <CareerExploration 
                hasTested={hasTested} 
                mbtiResult={mbtiResult}
                onStartQuiz={() => navigate('quiz')} 
              />
            </motion.section>
          )}

          {view === 'cases' && (
            <motion.section 
              key="cases"
              id="cases"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12"
            >
              <CaseStudy />
            </motion.section>
          )}

          {view === 'certificates' && (
            <motion.section
              key="certificates"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12"
            >
              <Certificates />
            </motion.section>
          )}

          {view === 'profile' && isLoggedIn && (
            <UserProfile 
              user={user} 
              mbtiResult={mbtiResult} 
              navigate={navigate} 
              logout={logout} 
            />
          )}

          {view === 'terms' && (
            <motion.section
              key="terms"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TermsOfService onBack={() => navigate('home')} />
            </motion.section>
          )}

          {view === 'privacy' && (
            <motion.section
              key="privacy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <PrivacyPolicy onBack={() => navigate('home')} />
            </motion.section>
          )}

          {view === 'help' && (
            <motion.section
              key="help"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HelpCenter onBack={() => navigate('home')} />
            </motion.section>
          )}

          {view === 'community' && (
            <motion.section
              key="community"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CommunityRules onBack={() => navigate('home')} />
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      <Footer onNavigate={navigate} />

      <AuthSystem 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onSuccess={handleLoginSuccess}
        initialView={authMode}
      />

      {/* Subtle background texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233E2C2C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
    </div>
  );
}