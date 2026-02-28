import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { questions, likertOptions } from "../data/questions";
import QuizResult from "./QuizResult";
import { ChevronLeft, Sparkles } from "lucide-react";

interface MBTIQuizProps {
  onComplete: (result: string) => void;
  onExploreCareers: () => void;
}

/**
 * Tính điểm MBTI 100 câu (Likert 1-5)
 */
function calculateMBTI(answers: Record<number, number>): string {
  const scores: Record<string, { first: number; second: number }> = {
    EI: { first: 0, second: 0 },
    SN: { first: 0, second: 0 },
    TF: { first: 0, second: 0 },
    JP: { first: 0, second: 0 },
  };

  const opposite: Record<string, string> = {
    E: "I", I: "E",
    S: "N", N: "S",
    T: "F", F: "T",
    J: "P", P: "J"
  };

  const dirToDim: Record<string, string> = {
    E: 'EI', I: 'EI',
    S: 'SN', N: 'SN',
    T: 'TF', F: 'TF',
    J: 'JP', P: 'JP'
  };

  const getPos = (dir: string) => {
    return (['E', 'S', 'T', 'J'].includes(dir)) ? 'first' : 'second';
  };

  questions.forEach((q) => {
    const answer = answers[q.id];
    if (answer === undefined) return;

    const v = answer - 3;
    const dim = dirToDim[q.direction];

    if (v > 0) {
      const pos = getPos(q.direction);
      scores[dim][pos] += v;
    } else if (v < 0) {
      const oppDir = opposite[q.direction];
      const pos = getPos(oppDir);
      scores[dim][pos] += Math.abs(v);
    }
  });

  const pick = (dim: string, first: string, second: string) => {
    const total = scores[dim].first + scores[dim].second;
    if (total === 0) return first;
    return scores[dim].first >= scores[dim].second ? first : second;
  };

  return (
    pick('EI', 'E', 'I') +
    pick('SN', 'S', 'N') +
    pick('TF', 'T', 'F') +
    pick('JP', 'J', 'P')
  );
}

export default function MBTIQuiz({ onComplete, onExploreCareers }: MBTIQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [direction, setDirection] = useState(1);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const currentChặng = Math.floor(currentIndex / 20);

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setDirection(1);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 300);
    } else {
      const result = calculateMBTI(newAnswers);
      setIsFinished(true);
      onComplete(result);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setAnswers({});
    setIsFinished(false);
    setDirection(1);
  };

  if (isFinished) {
    return (
      <QuizResult
        result={calculateMBTI(answers)}
        onRestart={restartQuiz}
        onExploreCareers={onExploreCareers}
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex justify-between items-end mb-3">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
              <Sparkles size={14} /> Chặng {currentChặng + 1} / 5
            </span>
            <h3 className="text-lg font-serif text-text-dark">
              Câu hỏi {currentIndex + 1} / {questions.length}
            </h3>
          </div>
          <span className="text-sm font-medium text-text-muted">{Math.round(progress)}%</span>
        </div>
        <div className="h-2.5 w-full bg-surface rounded-full overflow-hidden border border-primary/5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-primary"
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="bg-surface rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary/5 border border-primary/10"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-text-dark mb-12 text-center leading-snug">
              {currentQuestion.text}
            </h2>

            <div className="flex flex-col items-center">
              <div className="w-full flex justify-between items-center gap-2 md:gap-4 px-2">
                <span className="text-[10px] md:text-xs font-bold text-rose-400 uppercase tracking-tighter w-16 text-center leading-tight">Không đồng ý</span>

                <div className="flex-1 flex justify-between items-center max-w-md mx-auto">
                  {likertOptions.map((option) => {
                    const isSelected = answers[currentQuestion.id] === option.value;
                    const getRadioSize = (v: number) => {
                      if (v === 1 || v === 5) return 'w-14 h-14 md:w-16 md:h-16';
                      if (v === 2 || v === 4) return 'w-10 h-10 md:w-12 md:h-12';
                      return 'w-8 h-8 md:w-9 md:h-9';
                    };

                    return (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className={`relative rounded-full border-2 transition-all duration-300 flex items-center justify-center
                          ${getRadioSize(option.value)}
                          ${isSelected
                            ? "border-primary bg-primary/10 shadow-lg shadow-primary/20 scale-110"
                            : "border-primary/20 bg-background hover:border-primary/40 hover:scale-105"
                          }`}
                        title={option.label}
                      >
                        <div className={`rounded-full transition-all duration-300 
                          ${isSelected ? "w-1/2 h-1/2 bg-primary" : "w-0 h-0 bg-primary/20"}`}
                        />

                        {isSelected && (
                          <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-10 whitespace-nowrap text-[10px] font-bold text-primary uppercase tracking-widest"
                          >
                            {option.label}
                          </motion.span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-tighter w-16 text-center leading-tight">Rât đồng ý</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-20 flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all ${currentIndex === 0 ? "opacity-0 pointer-events-none" : "text-text-muted hover:text-primary hover:-translate-x-1"
            }`}
        >
          <ChevronLeft size={16} />
          Quay lại
        </button>

        <div className="flex gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${currentChặng === i ? "bg-primary w-6" : "bg-primary/20"
                }`}
            />
          ))}
        </div>

        <div className="w-[85px]" />
      </div>
    </div>
  );
}
