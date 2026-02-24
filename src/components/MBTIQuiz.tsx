import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MBTI_QUESTIONS, Question } from "../data/questions";
import QuizResult from "./QuizResult";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface MBTIQuizProps {
  onComplete: (result: string) => void;
  onExploreCareers: () => void;
}

export default function MBTIQuiz({ onComplete, onExploreCareers }: MBTIQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<('A' | 'B')[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const currentQuestion = MBTI_QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / MBTI_QUESTIONS.length) * 100;

  const handleAnswer = (value: 'A' | 'B') => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = value;
    setAnswers(newAnswers);

    if (currentIndex < MBTI_QUESTIONS.length - 1) {
      setDirection(1);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 200);
    } else {
      setIsFinished(true);

      // Calculate result before calling onComplete
      const categories = {
        EI: { A: 0, B: 0 },
        SN: { A: 0, B: 0 },
        TF: { A: 0, B: 0 },
        JP: { A: 0, B: 0 }
      };

      MBTI_QUESTIONS.forEach((q, index) => {
        const answer = index === currentIndex ? value : answers[index];
        if (answer) {
          categories[q.category][answer]++;
        }
      });

      let result = "";
      result += categories.EI.A > 5 ? "E" : "I";
      result += categories.SN.A > 5 ? "S" : "N";
      result += categories.TF.A > 5 ? "T" : "F";
      result += categories.JP.A > 5 ? "J" : "P";

      onComplete(result);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const calculateResult = () => {
    const categories = {
      EI: { A: 0, B: 0 },
      SN: { A: 0, B: 0 },
      TF: { A: 0, B: 0 },
      JP: { A: 0, B: 0 }
    };

    MBTI_QUESTIONS.forEach((q, index) => {
      const answer = answers[index];
      if (answer) {
        categories[q.category][answer]++;
      }
    });

    let result = "";
    result += categories.EI.A > 5 ? "E" : "I";
    result += categories.SN.A > 5 ? "S" : "N";
    result += categories.TF.A > 5 ? "T" : "F";
    result += categories.JP.A > 5 ? "J" : "P";

    return result;
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setIsFinished(false);
    setDirection(1);
  };

  if (isFinished) {
    return <QuizResult result={calculateResult()} onRestart={restartQuiz} onExploreCareers={onExploreCareers} />;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-3">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Chặng {Math.floor(currentIndex / 10) + 1}: {currentQuestion.categoryName}</span>
            <h3 className="text-lg font-serif text-text-dark">Câu hỏi {currentIndex + 1} / {MBTI_QUESTIONS.length}</h3>
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
      <div className="relative min-h-[400px]">
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
            <h2 className="text-2xl md:text-3xl font-serif text-text-dark mb-4 leading-snug">
              {currentQuestion.text}
            </h2>

            {currentQuestion.source && (
              <p className="text-xs font-medium text-primary/60 italic mb-10">
                {currentQuestion.source}
              </p>
            )}

            <div className="space-y-4">
              {currentQuestion.options.map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(141, 182, 160, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all flex items-center justify-between group ${answers[currentIndex] === option.value
                      ? "border-primary bg-primary/5"
                      : "border-primary/10 bg-background hover:border-primary/30"
                    }`}
                >
                  <span className="text-lg text-text-dark group-hover:text-primary transition-colors">
                    {option.label}
                  </span>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${answers[currentIndex] === option.value
                      ? "border-primary bg-primary"
                      : "border-primary/20"
                    }`}>
                    {answers[currentIndex] === option.value && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-opacity ${currentIndex === 0 ? "opacity-0 pointer-events-none" : "text-text-muted hover:text-primary"
            }`}
        >
          <ChevronLeft size={18} />
          Quay lại
        </button>

        <div className="flex gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${Math.floor(currentIndex / 10) === i ? "bg-primary" : "bg-primary/20"
                }`}
            />
          ))}
        </div>

        <div className="w-[100px]" /> {/* Spacer for balance */}
      </div>
    </div>
  );
}
