import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  ArrowRight, 
  BrainCircuit,
  Menu,
  X
} from "lucide-react";
import MBTIQuiz from "./components/MBTIQuiz";
import CareerExploration, { Footer } from "./components/CareerExploration";
import CaseStudy from "./components/CaseStudy";
import { Logo } from "./components/Logo";
import Certificates from "./components/Certificates";

type View = 'home' | 'quiz' | 'careers' | 'cases' | 'certificates' | 'profile';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [hasTested, setHasTested] = useState(false);
  const [mbtiResult, setMbtiResult] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuizComplete = (result: string) => {
    setHasTested(true);
    setMbtiResult(result);
    localStorage.setItem('mbti-result', result);
    // No immediate redirect, let user see results
  };

  useEffect(() => {
    const savedResult = localStorage.getItem('mbti-result');
    if (savedResult) {
      setHasTested(true);
      setMbtiResult(savedResult);
    }
  }, []);

  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'quiz', label: 'Trắc nghiệm MBTI' },
    { id: 'careers', label: 'Khám phá ngành nghề' },
    { id: 'cases', label: 'Thi đấu giải Case & BXH' },
    { id: 'certificates', label: 'Certificates' },
  ];

  const navigate = (target: View) => {
    setView(target);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    onClick={() => setIsLoggedIn(true)}
                    className="px-6 py-2.5 rounded-full border-2 border-primary text-primary text-sm font-bold hover:bg-primary/10 transition-all"
                  >
                    Đăng ký
                  </button>
                  <button
                    onClick={() => setIsLoggedIn(true)}
                    className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
                  >
                    Đăng nhập
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate('profile')}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary"
                >
                  <img
                    src="https://i.pravatar.cc/100"
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
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
                        onClick={() => setIsLoggedIn(true)}
                        className="w-full py-4 border-2 border-primary text-primary rounded-2xl font-bold"
                      >
                        Đăng ký
                      </button>
                      <button
                        onClick={() => setIsLoggedIn(true)}
                        className="w-full py-4 bg-primary text-white rounded-2xl font-bold"
                      >
                        Đăng nhập
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => navigate('profile')}
                      className="flex items-center gap-3"
                    >
                      <img
                        src="https://i.pravatar.cc/100"
                        alt="avatar"
                        className="w-12 h-12 rounded-full border-2 border-primary"
                      />
                      <span className="font-bold text-primary">Tài khoản của tôi</span>
                    </button>
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
                        src="https://picsum.photos/seed/genz-work/800/1000" 
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
                        Làm trắc nghiệm ngay
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

              {/* Quick Preview of Careers */}
              <CareerExploration 
                hasTested={hasTested} 
                mbtiResult={mbtiResult}
                onStartQuiz={() => navigate('quiz')} 
              />
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

          {view === 'profile' && (
            <motion.section
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 text-center"
            >
              <h2 className="text-4xl font-bold mb-4">Tài khoản cá nhân</h2>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="px-6 py-3 bg-red-500 text-white rounded-full font-bold"
              >
                Đăng xuất
              </button>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      <Footer />

      {/* Subtle background texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233E2C2C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
    </div>
  );
}
