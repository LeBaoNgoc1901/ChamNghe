import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  Field,
  RoadmapStep,
  Cert,
  Competition,
  CARD_COLORS,
  MOCK_ACHIEVED,
  MOCK_SUGGESTED,
  MOCK_COURSES_ACHIEVED,
  MOCK_COURSES_SUGGESTED,
  MOCK_COMPETITIONS
} from "../data/certificatesData";



export default function Certificates() {
  const [tab, setTab] = useState(() => localStorage.getItem("certTab") || "certificates");
  const [certSubTab, setCertSubTab] = useState("achieved");
  const [courseSubTab, setCourseSubTab] = useState("achieved");
  const [compSubTab, setCompSubTab] = useState(() => localStorage.getItem("compSubTab") || "active");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [modal, setModal] = useState<any>(null); // Changed to any to support competition objects
  const [expandedComp, setExpandedComp] = useState<number | null>(null);
  const [mbti, setMbti] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showRanking, setShowRanking] = useState(false);

  const filterOptions = [
    { value: "All", label: "Tất cả lĩnh vực" },
    { value: "IT", label: "IT" },
    { value: "Kinh tế", label: "Kinh tế" },
    { value: "Truyền thông", label: "Truyền thông" },
  ];

  useEffect(() => {
    const result = localStorage.getItem("mbti_result");
    if (result) {
      if (result.includes("N") && result.includes("F")) setMbti("NF");
      else if (result.includes("N") && result.includes("T")) setMbti("NT");
      else if (result.includes("S") && result.includes("J")) setMbti("SJ");
      else if (result.includes("S") && result.includes("P")) setMbti("SP");
    }

    // Clear the deep link state so it doesn't get stuck on refresh
    localStorage.removeItem("certTab");
    localStorage.removeItem("compSubTab");
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedComp(expandedComp === id ? null : id);
  };

  const getSuggestedCerts = () => {
    if (!mbti) return MOCK_SUGGESTED.default;
    return MOCK_SUGGESTED[mbti] || MOCK_SUGGESTED.default;
  };

  const currentData: any[] = useMemo(() => {
    if (tab === "certificates") {
      return certSubTab === "achieved" ? MOCK_ACHIEVED : getSuggestedCerts();
    }
    if (tab === "courses") {
      return courseSubTab === "achieved" ? MOCK_COURSES_ACHIEVED : (MOCK_COURSES_SUGGESTED[mbti || 'default'] || MOCK_COURSES_SUGGESTED.default);
    }
    if (tab === "competition") {
      return MOCK_COMPETITIONS.filter(c => c.status === compSubTab);
    }
    return [];
  }, [tab, certSubTab, courseSubTab, compSubTab, mbti, getSuggestedCerts]);

  const filtered = useMemo(() => {
    return currentData.filter(
      (item: any) =>
        (filter === "All" || item.field === filter || tab === "competition") &&
        (item.title || "").toLowerCase().includes(search.toLowerCase())
    );
  }, [currentData, filter, search, tab]);

  const getActiveColor = () => {
    if (tab === "certificates") return "bg-[#FFD9D1]";
    if (tab === "courses") return "bg-[#D1E9FF]";
    return "bg-[#D1E6DB]"; // Competition
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
            { key: "certificates", label: "Chứng chỉ", color: "bg-[#FF6F61]", textColor: "text-white" },
            { key: "competition", label: "Cuộc thi", color: "bg-[#8DB6A0]", textColor: "text-white" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => { setTab(t.key); setFilter("All"); }}
              className={`flex-1 py-8 text-2xl font-black transition-all duration-500 relative
              ${tab === t.key
                  ? `${t.color} ${t.textColor} z-20 rounded-t-[50px] shadow-[0_-15px_40px_-5px_rgba(0,0,0,0.15)] translate-y-[2px]`
                  : "bg-white/40 text-gray-500 hover:bg-white/60 rounded-t-[40px] mb-[-4px]"
                }`}
            >
              <span className="inline-block tracking-tight">
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
            <div className="relative group flex-[2] max-w-2xl">
              <input
                placeholder="Tìm kiếm chứng chỉ..."
                className="w-full px-12 py-6 rounded-full bg-white/60 backdrop-blur-xl border border-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] focus:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] focus:bg-white/90 outline-none transition-all duration-500 placeholder:text-gray-400 font-medium text-lg"
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
            </div>

            <div className="relative flex-1">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="pl-12 pr-20 py-6 rounded-full bg-white/60 backdrop-blur-xl border border-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:bg-white/90 outline-none transition-all duration-500 cursor-pointer font-bold text-gray-700 min-w-[320px] text-lg flex items-center justify-between group"
              >
                <span>{filterOptions.find(opt => opt.value === filter)?.label}</span>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none transition-transform group-hover:translate-x-1">
                  <svg className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 right-0 mt-4 bg-white/70 backdrop-blur-2xl border border-white rounded-[32px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden z-[100]"
                  >
                    {filterOptions.map((opt) => (
                      <div
                        key={opt.value}
                        onClick={() => {
                          setFilter(opt.value);
                          setIsDropdownOpen(false);
                        }}
                        className={`px-12 py-5 cursor-pointer transition-colors font-bold text-lg ${filter === opt.value
                          ? "bg-[#8DB6A0] text-white"
                          : "hover:bg-white/50 text-gray-700"
                          }`}
                      >
                        {opt.label}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {tab === "certificates" && certSubTab === "suggested" && mbti && (
              <div className="bg-white/40 backdrop-blur-md px-8 py-5 rounded-full border border-white shadow-sm font-black text-sm text-[#FF6F61] uppercase tracking-widest flex items-center gap-3 animate-fadeIn ml-auto">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6F61] shadow-[0_0_10px_rgba(255,111,97,0.8)]" />
                GỢI Ý THEO MBTI: {mbti}
              </div>
            )}
          </div>

          {/* CERTIFICATES SUB-TABS Styled as Secondary Bookmarks */}
          {tab === "certificates" && (
            <div className="flex gap-2 mb-12 border-b-2 border-white/20 pb-0">
              {[
                { key: "achieved", label: "Của bạn" },
                { key: "suggested", label: "Đề xuất" },
              ].map((s) => (
                <button
                  key={s.key}
                  onClick={() => setCertSubTab(s.key)}
                  className={`px-10 py-4 rounded-t-[2rem] font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${certSubTab === s.key
                    ? "bg-white text-[#FF6F61] shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.05)] translate-y-0"
                    : "bg-white/30 text-white/70 hover:bg-white/50 translate-y-2 hover:translate-y-1"
                    }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}

          {/* COURSES SUB-TABS Styled as Secondary Bookmarks */}
          {tab === "courses" && (
            <div className="flex gap-2 mb-12 border-b-2 border-white/20 pb-0">
              {[
                { key: "achieved", label: "Của bạn" },
                { key: "suggested", label: "Đề xuất" },
              ].map((s) => (
                <button
                  key={s.key}
                  onClick={() => setCourseSubTab(s.key)}
                  className={`px-10 py-4 rounded-t-[2rem] font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${courseSubTab === s.key
                    ? "bg-white text-[#60A5FA] shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.05)] translate-y-0"
                    : "bg-white/30 text-white/70 hover:bg-white/50 translate-y-2 hover:translate-y-1"
                    }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}

          {/* COMPETITION SUB-TABS Styled as Secondary Bookmarks */}
          {tab === "competition" && (
            <div className="flex gap-2 mb-12 border-b-2 border-white/20 pb-0">
              {[
                { key: "active", label: "Đang tham gia" },
                { key: "completed", label: "Đã tham gia" },
                { key: "suggested", label: "Đề xuất" },
              ].map((st) => (
                <button
                  key={st.key}
                  onClick={() => setCompSubTab(st.key)}
                  className={`px-10 py-4 rounded-t-[2rem] font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${compSubTab === st.key
                    ? "bg-white text-[#8DB6A0] shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.05)] translate-y-0"
                    : "bg-white/30 text-white/70 hover:bg-white/50 translate-y-2 hover:translate-y-1"
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
                              {comp.xp && (
                                <div className="mt-3 flex items-center gap-1.5">
                                  <div className="flex items-center gap-1.5 bg-[#FFF9E5] text-[#D35400] px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm border border-[#FFEAA7] group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-sm">✨</span> THƯỞNG {comp.xp} XP
                                  </div>
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
                            <div className="flex flex-col gap-2 mb-6">
                              <p className="text-sm text-gray-500 flex items-center gap-2 font-medium">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#8DB6A0] shadow-[0_0_8px_rgba(141,182,160,0.6)] animate-pulse"></span>
                                Đã xác thực: {cert.date}
                              </p>
                              <div className="flex gap-4 text-xs font-bold text-gray-500 mt-1">
                                <div className="flex items-center gap-1.5">
                                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                  {cert.lessons || 12} bài giảng
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                  {cert.duration || "24h học"}
                                </div>
                              </div>
                              {cert.xp && (
                                <div className="flex items-center gap-1.5 mt-2">
                                  <div className="flex items-center gap-1.5 bg-[#FFF9E5] text-[#D35400] px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm border border-[#FFEAA7] group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-sm">✨</span> THƯỞNG {cert.xp} XP
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          {!cert.date && (
                            <div className="flex flex-col gap-2 mb-6">
                              <div className="flex gap-4 text-xs font-bold text-gray-500 mt-1">
                                <div className="flex items-center gap-1.5">
                                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                  {cert.lessons || 12} bài giảng
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                  {cert.duration || "24h học"}
                                </div>
                              </div>
                              {cert.xp && (
                                <div className="flex items-center gap-1.5 mt-2">
                                  <div className="flex items-center gap-1.5 bg-[#FFF9E5] text-[#D35400] px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm border border-[#FFEAA7] group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-sm">✨</span> THƯỞNG {cert.xp} XP
                                  </div>
                                </div>
                              )}
                            </div>
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
        <div className="fixed inset-0 bg-[#F6E7D8]/90 backdrop-blur-3xl flex items-center justify-center z-50 p-4 md:p-8 animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)] max-w-6xl w-full overflow-hidden relative border-8 border-white/50 transition-all duration-500 my-auto">
            <button
              onClick={() => { setModal(null); setShowRanking(false); }}
              className="absolute top-8 right-8 z-20 p-4 bg-white/60 hover:bg-white backdrop-blur-md rounded-full text-gray-400 hover:text-black hover:rotate-90 transition-all duration-500 shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-12 min-h-[85vh]">
              {/* Image Section - Takes 5 cols */}
              <div className="md:col-span-5 relative overflow-hidden group">
                <img
                  src={modal.image}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt={modal.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
                  <div className="flex flex-col gap-4">
                    <span className="w-fit px-4 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                      {modal.issuer || modal.host}
                    </span>
                    <h2 className="text-white text-4xl md:text-5xl font-black leading-tight drop-shadow-2xl">{modal.title}</h2>
                    {modal.ranking && (
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-[#8DB6A0] text-white rounded-lg text-xs font-black uppercase tracking-widest shadow-lg">
                          {modal.ranking}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Content Section - Takes 7 cols */}
              <div className="md:col-span-7 p-10 md:p-16 bg-white overflow-y-auto custom-scrollbar max-h-[85vh]">
                {/* Header for content */}
                <div className="flex justify-between items-center mb-10 pb-8 border-b border-gray-100">
                  <div>
                    <span className="text-[10px] font-black text-[#FF6F61] uppercase tracking-[0.3em] mb-2 block">Tổng quan Chi tiết</span>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-8 bg-[#FF6F61] rounded-full" />
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-widest italic">{modal.field || modal.tag || "Nghề nghiệp"}</span>
                    </div>
                  </div>
                  {modal.xp && (
                    <div className="bg-[#FFF9E5] px-6 py-3 rounded-2xl border border-[#FFEAA7] flex flex-col items-end">
                      <span className="text-[9px] font-black text-[#D35400] uppercase tracking-tighter mb-1">Thưởng</span>
                      <span className="font-black text-2xl text-[#D35400]">✨ {modal.xp} XP</span>
                    </div>
                  )}
                </div>

                <div className="space-y-12">
                  {modal.status ? (
                    // COMPETITION MODAL CONTENT
                    <>
                      <div className="grid grid-cols-2 gap-8 bg-gray-50/50 p-8 rounded-[2.5rem] border border-gray-100 shadow-inner">
                        <div className="space-y-2">
                          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Đơn vị tổ chức</h4>
                          <p className="font-black text-2xl text-gray-900 leading-none">{modal.host}</p>
                          <p className="text-[10px] text-gray-400 font-bold italic">Bảo trợ bởi Chạm Nghề Network</p>
                        </div>
                        {modal.status !== 'suggested' && (
                          <div className="space-y-2">
                            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Tiến độ hiện tại</h4>
                            <div className="flex items-center gap-3">
                              <p className="font-black text-3xl text-[#FF6F61] leading-none">{modal.progress}%</p>
                              <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="bg-[#FF6F61] h-full" style={{ width: `${modal.progress}%` }} />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {modal.status !== 'suggested' && modal.xp && (
                        <div className="bg-[#FFF9E5] p-4 rounded-2xl border border-[#FFEAA7] flex items-center justify-between">
                          <span className="text-[10px] font-black text-[#D35400] uppercase tracking-widest">Phần thưởng XP hoàn thành</span>
                          <span className="font-black text-[#D35400]">✨ {modal.xp} XP</span>
                        </div>
                      )}

                      {showRanking && (
                        <div className="bg-white p-6 rounded-3xl border-2 border-[#8DB6A0] shadow-xl animate-fadeIn mb-8 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-2 h-full bg-[#8DB6A0]" />
                          <h4 className="text-xl font-black text-[#8DB6A0] uppercase tracking-widest mb-4 flex items-center gap-2">
                            <span>🏆</span> BẢNG XẾP HẠNG
                          </h4>
                          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex justify-between items-center mb-4">
                            <div className="flex flex-col">
                              <span className="text-[10px] uppercase font-black text-gray-400">Hạng của bạn</span>
                              <span className="font-black text-[#FF6F61]">{modal.ranking || "Chưa có"}</span>
                            </div>
                            {modal.xp && (
                              <div className="flex flex-col items-end">
                                <span className="text-[10px] uppercase font-black text-gray-400">Phần thưởng (Dự kiến)</span>
                                <span className="font-black text-[#D35400]">✨ {modal.xp} XP</span>
                              </div>
                            )}
                          </div>
                          <div className="space-y-3">
                            {[
                              { rank: 1, name: "Nguyễn Văn A", score: "98/100" },
                              { rank: 2, name: "Trần Thị B", score: "95/100" },
                              { rank: 3, name: "Lê Văn C", score: "92/100" },
                            ].map((user) => (
                              <div key={user.rank} className="flex justify-between items-center p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                                <div className="flex flex-row items-center gap-3">
                                  <span className={`w-8 h-8 flex items-center justify-center rounded-full font-black text-sm ${user.rank === 1 ? 'bg-yellow-100 text-yellow-600' : user.rank === 2 ? 'bg-gray-100 text-gray-500' : 'bg-orange-50 text-orange-400'}`}>{user.rank}</span>
                                  <span className="font-bold text-gray-700">{user.name}</span>
                                </div>
                                <span className="font-black text-gray-400">{user.score}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <section className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#FF6F61] text-white flex items-center justify-center font-black text-xs">01</div>
                          <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">Mô tả cuộc thi</h4>
                        </div>
                        <div className="space-y-6">
                          <p className="text-gray-600 leading-relaxed font-bold bg-gray-50 p-8 rounded-[2rem] border-2 border-dashed border-gray-200">
                            {modal.details}
                          </p>

                          {/* COMPETITION SKILLS */}
                          <div className="space-y-3 px-2">
                            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Kỹ năng rèn luyện</h4>
                            <div className="flex flex-wrap gap-2">
                              {["Teamwork", "Public Speaking", "Strategic Planning", "Networking"].map((skill, i) => (
                                <span key={i} className="px-3 py-1.5 bg-[#FF6F61]/5 text-[#FF6F61] rounded-lg text-xs font-bold border border-[#FF6F61]/10 uppercase tracking-tighter">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
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
                                <div className={`absolute -left-[31px] top-1 w-6 h-6 rounded-full border-4 border-white z-10 shadow-sm ${step.status === 'completed' ? 'bg-[#FF6F61]' :
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
                            <button
                              onClick={() => setShowRanking(!showRanking)}
                              className="flex-1 py-4 bg-white border-2 border-[#FF6F61] text-[#FF6F61] font-black rounded-2xl hover:bg-[#FF6F61]/5 transition-all active:scale-95"
                            >
                              {showRanking ? "Ẩn Ranking" : "Ranking"}
                            </button>
                          </>
                        )}
                        {modal.status === 'active' && (
                          <>
                            <button className="flex-1 py-4 bg-[#FF6F61] text-white font-black rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">Tiếp tục</button>
                            <button
                              onClick={() => setShowRanking(!showRanking)}
                              className="flex-1 py-4 bg-white border-2 border-[#FF6F61] text-[#FF6F61] font-black rounded-2xl hover:bg-[#FF6F61]/5 transition-all active:scale-95"
                            >
                              {showRanking ? "Ẩn Ranking" : "Ranking"}
                            </button>
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
                          <p className="font-black text-xl text-gray-900 leading-none">{modal.issuer}</p>
                          <p className="text-[10px] text-gray-400 font-bold italic mt-1">Đối tác chiến lược Chạm Nghề</p>
                        </div>

                        <div>
                          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Giá trị thị trường</h4>
                          <div className="bg-green-50/50 p-6 rounded-[2rem] border border-green-100/50 flex items-center gap-6">
                            <div className="flex-1">
                              <p className="text-gray-600 leading-relaxed italic font-medium text-sm mb-2">
                                {modal.value || "Chứng chỉ này đang rất được săn đón bởi các nhà tuyển dụng hàng đầu trong năm 2026."}
                              </p>
                              <div className="flex items-center gap-2">
                                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                  <div className="bg-[#8DB6A0] h-full w-[85%]" />
                                </div>
                                <span className="text-[10px] font-black text-[#8DB6A0]">CAO</span>
                              </div>
                            </div>
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                              <span className="text-3xl">📈</span>
                            </div>
                          </div>
                        </div>

                        {/* SKILLS SECTION */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#8DB6A0]" />
                            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Kỹ năng cốt lõi nhận được</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {["Logic Thinking", "Problem Solving", "Professional Ethics", "Cloud Computing"].map((skill, i) => (
                              <span key={i} className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-600 shadow-sm hover:border-[#8DB6A0] hover:text-[#8DB6A0] transition-colors cursor-default">
                                #{skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {modal.xp && (
                          <div className="bg-[#FFF9E5] p-6 rounded-[2rem] border border-[#FFEAA7] flex items-center justify-between shadow-lg shadow-amber-900/5">
                            <div className="flex flex-col">
                              <span className="text-[10px] font-black text-[#D35400] uppercase tracking-widest mb-1">Tổng điểm kinh nghiệm</span>
                              <p className="text-xs text-[#D35400]/70 font-bold">Dùng để thăng hạng profile Chạm Nghề.</p>
                            </div>
                            <span className="font-black text-3xl text-[#D35400] whitespace-nowrap">✨ {modal.xp} <span className="text-sm">XP</span></span>
                          </div>
                        )}
                      </div>

                      {modal.roadmap && (
                        <section className="mt-12 space-y-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-2xl bg-[#8DB6A0] text-white flex items-center justify-center font-black text-sm shadow-lg shadow-[#8DB6A0]/20">TASKS</div>
                              <h4 className="text-lg font-black text-gray-900 uppercase tracking-widest">Lộ trình hoàn thành</h4>
                            </div>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{modal.roadmap.length} GIAI ĐOẠN</span>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {modal.roadmap.map((step: RoadmapStep, i: number) => (
                              <div key={i} className="group/task bg-white border border-gray-100 rounded-[2rem] p-6 hover:border-[#8DB6A0] hover:shadow-2xl hover:shadow-[#8DB6A0]/10 transition-all duration-500 relative overflow-hidden">
                                <div className="flex gap-5">
                                  {step.image && (
                                    <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-md border border-gray-50 bg-gray-50">
                                      <img src={step.image} className="w-full h-full object-cover grayscale-[40%] group-hover/task:grayscale-0 group-hover/task:scale-110 transition-all duration-700" alt={step.title} />
                                    </div>
                                  )}
                                  <div className="flex-1 flex flex-col justify-center">
                                    <div className="flex justify-between items-start mb-2">
                                      <h5 className="font-black text-gray-900 group-hover/task:text-[#8DB6A0] transition-colors text-base">{step.title}</h5>
                                      {step.xp && (
                                        <span className="bg-[#FFF9E5] text-[#D35400] px-3 py-1 rounded-xl text-[10px] font-black border border-[#FFEAA7] shadow-sm">+{step.xp} XP</span>
                                      )}
                                    </div>
                                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4">{step.desc}</p>
                                    <div className="flex items-center gap-3">
                                      <div className={`h-2 flex-1 rounded-full overflow-hidden ${step.status === 'completed' ? 'bg-[#8DB6A0]' : 'bg-gray-100 shadow-inner'}`}>
                                        <div className={`h-full ${step.status === 'active' ? 'bg-[#8DB6A0] w-1/2 animate-pulse' : step.status === 'completed' ? 'w-full' : 'w-0'}`} />
                                      </div>
                                      <span className={`text-[10px] font-black uppercase tracking-tighter shrink-0 ${step.status === 'active' ? 'text-[#8DB6A0]' : step.status === 'completed' ? 'text-gray-400' : 'text-gray-300'}`}>
                                        {step.status === 'active' ? 'Đang chạy' : step.status === 'completed' ? 'Xong' : 'Chưa mở'}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}

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
