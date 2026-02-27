import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Trophy,
  Star,
  Target,
  Medal,
  Award,
  Heart,
  TrendingUp,
  History,
  Briefcase,
  Compass,
  BrainCircuit
} from "lucide-react";
import { Logo } from "./Logo";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import QuizResult from "./QuizResult";


interface UserProfileProps {
  user: any;
  mbtiResult: string | null;
  navigate: (view: any) => void;
  logout: () => void;
}


const mbtiData = [
  { subject: 'Hướng ngoại', A: 80, fullMark: 100 },
  { subject: 'Trực giác', A: 90, fullMark: 100 },
  { subject: 'Lý trí', A: 60, fullMark: 100 },
  { subject: 'Nguyên tắc', A: 85, fullMark: 100 },
  { subject: 'Cẩn trọng', A: 70, fullMark: 100 },
];


const skillData = [
  { subject: 'Marketing', A: 85, fullMark: 100 },
  { subject: 'Leadership', A: 75, fullMark: 100 },
  { subject: 'Sáng tạo', A: 90, fullMark: 100 },
  { subject: 'Phân tích', A: 65, fullMark: 100 },
  { subject: 'Giao tiếp', A: 80, fullMark: 100 },
];

export default function UserProfile({ user, mbtiResult, navigate, logout }: UserProfileProps) {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Trang cá nhân</h1>
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <img src={user?.avatar || "https://i.pravatar.cc/100"} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-primary/20" />
            <div>
              <h2 className="text-2xl font-bold">{user?.name || "Người dùng"}</h2>
              <p className="text-gray-500">{user?.email || "Chưa cập nhật email"}</p>
              {mbtiResult ? (
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold">
                  <Star size={16} /> Nhóm tính cách: {mbtiResult}
                </div>
              ) : (
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-400 rounded-full text-sm font-bold">
                  Chưa xác định nhóm tính cách
                </div>
              )}
            </div>
          </div>
          <button onClick={logout} className="px-6 py-2 bg-red-50 text-red-500 rounded-full font-bold hover:bg-red-100 transition-colors shrink-0">
            Đăng xuất
          </button>
        </div>

        {mbtiResult ? (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Kết quả bài trắc nghiệm</h2>
            <div className="bg-white rounded-3xl p-4 md:p-8 shadow-sm border border-gray-100">
               <QuizResult result={mbtiResult} onRestart={() => navigate('quiz')} onExploreCareers={() => navigate('careers')} />
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-10 text-center mb-8 border border-gray-100 shadow-sm flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
              <Compass size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-text-dark mb-4">Bạn chưa làm bài kiểm tra MBTI</h3>
            <p className="text-text-muted mb-8 max-w-lg">Hãy hoàn thành bài trắc nghiệm để khám phá nhóm tính cách và những định hướng nghề nghiệp phù hợp nhất với bạn nhé!</p>
            <button onClick={() => navigate('quiz')} className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2">
              <Sparkles size={18} />
              Làm bài test ngay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}