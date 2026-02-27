import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MBTI_QUESTIONS } from "../data/questions";
import QuizResult from "./QuizResult";
import { ChevronLeft } from "lucide-react";

interface MBTIQuizProps {
  onComplete: (result: string) => void;
  onExploreCareers: () => void;
}

type AnswerValue = 'A' | 'B' | 'C' | 'D';

/**
 * Tính điểm theo bảng:
 *  A → +2 điểm cho chữ ĐẦU (E / S / T / J)
 *  B → +1 điểm cho chữ ĐẦU
 *  C → +1 điểm cho chữ SAU (I / N / F / P)
 *  D → +2 điểm cho chữ SAU
 *
 * Kết quả: nếu điểm chữ đầu > điểm chữ sau → chọn chữ đầu, ngược lại → chọn chữ sau.
 */
function calculateMBTI(
  answers: (AnswerValue | undefined)[],
): string {
  // score[dim].first = điểm tích lũy cho chữ đầu của chiều đó
  // score[dim].second = điểm tích lũy cho chữ sau của chiều đó
  const score: Record<string, { first: number; second: number }> = {
    EI: { first: 0, second: 0 }, // E vs I
    SN: { first: 0, second: 0 }, // S vs N
    TF: { first: 0, second: 0 }, // T vs F
    JP: { first: 0, second: 0 }, // J vs P
  };

  MBTI_QUESTIONS.forEach((q, index) => {
    const answer = answers[index];
    if (!answer) return;

    const dim = q.category; // 'EI' | 'SN' | 'TF' | 'JP'
    if (answer === 'A') score[dim].first  += 2;
    if (answer === 'B') score[dim].first  += 1;
    if (answer === 'C') score[dim].second += 1;
    if (answer === 'D') score[dim].second += 2;
  });

  const pick = (dim: string, first: string, second: string) =>
    score[dim].first >= score[dim].second ? first : second;

  return (
    pick('EI', 'E', 'I') +
    pick('SN', 'S', 'N') +
    pick('TF', 'T', 'F') +
    pick('JP', 'J', 'P')
  );
}

export default function MBTIQuiz({ onComplete, onExploreCareers }: MBTIQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(AnswerValue | undefined)[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const currentQuestion = MBTI_QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / MBTI_QUESTIONS.length) * 100;

  const handleAnswer = (value: AnswerValue) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = value;
    setAnswers(newAnswers);

    if (currentIndex < MBTI_QUESTIONS.length - 1) {
      setDirection(1);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 200);
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
    setAnswers([]);
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

  // Nhãn hiển thị tương ứng với từng value
  const optionLabels: Record<AnswerValue, string> = { A: 'A', B: 'B', C: 'C', D: 'D' };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-3">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              {currentQuestion.categoryName}: {currentQuestion.category}
            </span>
            <h3 className="text-lg font-serif text-text-dark">
              Câu hỏi {currentIndex + 1} / {MBTI_QUESTIONS.length}
            </h3>
          </div>
          <span className="text-sm font-medium text-text-muted">{Math.round(progress)}%</span>
        </div>
        <div className="h-3 w-full bg-surface rounded-full overflow-hidden border border-primary/5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-accent"
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="relative min-h-[480px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-surface rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-primary/10"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-text-dark mb-10 leading-snug">
              {currentQuestion.text}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option) => {
                const isSelected = answers[currentIndex] === option.value;
                return (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(141, 182, 160, 0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option.value as AnswerValue)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center gap-4 group ${
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-primary/10 bg-background hover:border-primary/30"
                    }`}
                  >
                    {/* Nhãn A / B / C / D */}
                    <div
                      className={`shrink-0 w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-colors ${
                        isSelected
                          ? "border-primary bg-primary text-white"
                          : "border-primary/30 text-primary/60 group-hover:border-primary/60"
                      }`}
                    >
                      {optionLabels[option.value as AnswerValue]}
                    </div>

                    <span className="text-base md:text-lg text-text-dark group-hover:text-primary transition-colors flex-1">
                      {option.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-opacity ${
            currentIndex === 0 ? "opacity-0 pointer-events-none" : "text-text-muted hover:text-primary"
          }`}
        >
          <ChevronLeft size={18} />
          Quay lại
        </button>

        {/* Chặng dots */}
        <div className="flex gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / 20) === i ? "bg-primary" : "bg-primary/20"
              }`}
            />
          ))}
        </div>

        <div className="w-[100px]" /> {/* Spacer */}
      </div>
    </div>
  );
}
