import React, { useState } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "motion/react";
import {
    Mail,
    Lock,
    User,
    ArrowRight,
    Github,
    Chrome,
    Eye,
    EyeOff,
    X,
    AlertCircle,
    CheckCircle2,
    Facebook
} from "lucide-react";
import { auth, googleProvider, facebookProvider, githubProvider } from "../lib/firebase";
import { signInWithPopup } from "firebase/auth";

interface AuthProps {
    isOpen?: boolean;
    initialMode?: 'login' | 'register';
    onSuccess?: (user: UserData) => void;
    onClose?: () => void;
}

export interface UserData {
    email: string;
    name: string;
    avatar: string;
    isLoggedIn: boolean;
    timestamp: string;
    mbtiResult?: string;
    mbtiScores?: Record<string, number>;
    mbtiDate?: string;
    xp?: number;
    achievedCertIds?: number[];
}

interface Account {
    name: string;
    password: string;
    mbtiResult?: string;
    mbtiScores?: Record<string, number>;
    mbtiDate?: string;
    xp?: number;
    achievedCertIds?: number[];
}

// Helper: get avatar URL from email (deterministic)
function getAvatar(email: string) {
    const seed = encodeURIComponent(email);
    return `https://api.dicebear.com/8.x/thumbs/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;
}

// Storage helpers
function getAccounts(): Record<string, Account> {
    try {
        return JSON.parse(localStorage.getItem('cham_nghe_accounts') || '{}');
    } catch {
        return {};
    }
}

function saveAccount(email: string, name: string, password: string, mbtiResult?: string, mbtiDate?: string, xp: number = 0, achievedCertIds: number[] = []) {
    const accounts = getAccounts();
    accounts[email] = {
        name,
        password,
        ...(mbtiResult ? { mbtiResult, mbtiDate } : {}),
        xp,
        achievedCertIds
    };
    localStorage.setItem('cham_nghe_accounts', JSON.stringify(accounts));
}

export function updateAccountMbti(email: string, mbtiResult: string, mbtiScores?: Record<string, number>) {
    const accounts = getAccounts();
    if (accounts[email]) {
        accounts[email].mbtiResult = mbtiResult;
        accounts[email].mbtiScores = mbtiScores;
        accounts[email].mbtiDate = new Date().toISOString();
        localStorage.setItem('cham_nghe_accounts', JSON.stringify(accounts));

        // Also update current cookie session if it matches
        const session = Cookies.get('user_session');
        if (session) {
            const user = JSON.parse(session);
            if (user.email === email) {
                user.mbtiResult = accounts[email].mbtiResult;
                user.mbtiScores = accounts[email].mbtiScores;
                user.mbtiDate = accounts[email].mbtiDate;
                Cookies.set('user_session', JSON.stringify(user), { expires: 7 });
            }
        }
    }
}

export function updateAccountXP(email: string, xp: number) {
    const accounts = getAccounts();
    if (accounts[email]) {
        accounts[email].xp = xp;
        localStorage.setItem('cham_nghe_accounts', JSON.stringify(accounts));

        // Also update current cookie session if it matches
        const session = Cookies.get('user_session');
        if (session) {
            const user = JSON.parse(session);
            if (user.email === email) {
                user.xp = xp;
                Cookies.set('user_session', JSON.stringify(user), { expires: 7 });
            }
        }
    }
}

export function updateAccountCertificates(email: string, certIds: number[]) {
    const accounts = getAccounts();
    if (accounts[email]) {
        accounts[email].achievedCertIds = certIds;
        localStorage.setItem('cham_nghe_accounts', JSON.stringify(accounts));

        const session = Cookies.get('user_session');
        if (session) {
            const user = JSON.parse(session);
            if (user.email === email) {
                user.achievedCertIds = certIds;
                Cookies.set('user_session', JSON.stringify(user), { expires: 7 });
            }
        }
    }
}

export default function Auth({ isOpen = false, initialMode = 'login', onSuccess, onClose }: AuthProps) {
    const [mode, setMode] = useState<'login' | 'register'>(initialMode);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Reset form & mode every time the modal opens
    React.useEffect(() => {
        if (isOpen) {
            setMode(initialMode);
            setError("");
            setSuccess("");
            setEmail("");
            setPassword("");
            setName("");
            setShowPassword(false);
        }
    }, [isOpen, initialMode]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setSuccess("");

        const accounts = getAccounts();

        if (mode === 'register') {
            if (accounts[email]) {
                setError("Email này đã được đăng ký. Vui lòng đăng nhập.");
                return;
            }
            if (password.length < 6) {
                setError("Mật khẩu phải có ít nhất 6 ký tự.");
                return;
            }

            // Check if there's a guest result to sync
            const guestMbti = localStorage.getItem('mbti-result');

            // Save new account
            saveAccount(email, name, password, guestMbti || undefined, guestMbti ? new Date().toISOString() : undefined, 0, []);
            setSuccess("Tạo tài khoản thành công! Đang đăng nhập...");

            const userData: UserData = {
                email,
                name,
                avatar: getAvatar(email),
                isLoggedIn: true,
                timestamp: new Date().toISOString(),
                mbtiResult: guestMbti || undefined,
                mbtiDate: guestMbti ? new Date().toISOString() : undefined
            };
            Cookies.set(`user_session`, JSON.stringify(userData), { expires: 7 });
            setTimeout(() => { if (onSuccess) onSuccess(userData); }, 800);

        } else {
            // Login
            const account = accounts[email];
            if (!account) {
                setError("Email chưa được đăng ký. Hãy tạo tài khoản mới.");
                return;
            }
            if (account.password !== password) {
                setError("Mật khẩu không đúng. Vui lòng thử lại.");
                return;
            }

            // Sync guest result if account doesn't have one?
            // Actually, let's prioritize account result, but if empty and guest exists, sync.
            const guestMbti = localStorage.getItem('mbti-result');
            let mbtiToUse = account.mbtiResult;
            let dateToUse = account.mbtiDate;

            if (!mbtiToUse && guestMbti) {
                mbtiToUse = guestMbti;
                dateToUse = new Date().toISOString();
                // Persist it back to account storage
                updateAccountMbti(email, guestMbti);
            }

            const userData: UserData = {
                email,
                name: account.name,
                avatar: getAvatar(email),
                isLoggedIn: true,
                timestamp: new Date().toISOString(),
                mbtiResult: mbtiToUse,
                mbtiDate: dateToUse,
                xp: account.xp || 0,
                achievedCertIds: account.achievedCertIds || []
            };
            Cookies.set(`user_session`, JSON.stringify(userData), { expires: 7 });
            setSuccess(`Chào mừng trở lại, ${account.name}!`);
            setTimeout(() => { if (onSuccess) onSuccess(userData); }, 800);
        }
    }

    async function handleSocialLogin(providerName: 'google' | 'facebook' | 'github') {
        setError("");
        setSuccess("");

        let provider;
        if (providerName === 'google') provider = googleProvider;
        else if (providerName === 'facebook') provider = facebookProvider;
        else provider = githubProvider;

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Check if account already has MBTI result in our local storage
            const accounts = getAccounts();
            const existingAccount = accounts[user.email || ''];

            const guestMbti = localStorage.getItem('mbti-result');
            let mbtiToUse = existingAccount?.mbtiResult || guestMbti || undefined;
            let mbtiDateToUse = existingAccount?.mbtiDate || (guestMbti ? new Date().toISOString() : undefined);

            const userData: UserData = {
                email: user.email || '',
                name: user.displayName || 'User',
                avatar: user.photoURL || getAvatar(user.email || ''),
                isLoggedIn: true,
                timestamp: new Date().toISOString(),
                mbtiResult: mbtiToUse,
                mbtiDate: mbtiDateToUse,
                xp: existingAccount?.xp || 0,
                achievedCertIds: existingAccount?.achievedCertIds || []
            };

            // Save/Update account in local storage to keep it in sync
            saveAccount(userData.email, userData.name, "SOCIAL_AUTH_PASSTHROUGH", mbtiToUse, mbtiDateToUse, userData.xp, userData.achievedCertIds);

            Cookies.set(`user_session`, JSON.stringify(userData), { expires: 7 });
            setSuccess(`Chào mừng ${userData.name}!`);
            setTimeout(() => { if (onSuccess) onSuccess(userData); }, 800);

        } catch (err: any) {
            console.error("Social Login Error:", err);
            if (err.code === 'auth/popup-closed-by-user') {
                setError("Cửa sổ đăng nhập đã bị đóng.");
            } else if (err.code === 'auth/operation-not-allowed') {
                setError("Phương thức đăng nhập này chưa được kích hoạt trong Firebase Console.");
            } else {
                setError("Đã có lỗi xảy ra khi đăng nhập bằng mạng xã hội.");
            }
        }
    }

    function toggleMode() {
        setMode(mode === 'login' ? 'register' : 'login');
        setError("");
        setSuccess("");
    }

    return (
        <AnimatePresence>
        {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            <motion.div
                layoutId="auth-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-sm bg-surface px-6 py-5 rounded-[20px] shadow-2xl border border-primary/10 relative overflow-hidden"
            >
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -ml-16 -mb-16" />

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-1.5 text-text-muted hover:text-text-dark transition-colors z-20"
                >
                    <X size={20} />
                </button>

                <div className="relative z-10">
                    <div className="text-center mb-4">
                        <h2 className="text-2xl font-serif font-bold text-text-dark mb-1">
                            {mode === 'login' ? 'Chào mừng trở lại' : 'Bắt đầu hành trình'}
                        </h2>
                        <p className="text-text-muted text-xs">
                            {mode === 'login'
                                ? 'Đăng nhập để tiếp tục khám phá bản thân'
                                : 'Tham gia cộng đồng "Chạm Nghề" ngay hôm nay'}
                        </p>
                    </div>

                    {/* Error / Success messages */}
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-2 mb-3 px-3 py-2 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600"
                            >
                                <AlertCircle size={14} className="shrink-0" />
                                {error}
                            </motion.div>
                        )}
                        {success && (
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-2 mb-3 px-3 py-2 bg-green-50 border border-green-200 rounded-xl text-xs text-green-600"
                            >
                                <CheckCircle2 size={14} className="shrink-0" />
                                {success}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        <AnimatePresence mode="wait">
                            {mode === 'register' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-1"
                                >
                                    <label className="text-xs font-bold text-text-dark ml-1">Họ và tên</label>
                                    <div className="relative group">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" size={16} />
                                        <input
                                            type="text"
                                            placeholder="Nguyễn Văn A"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full pl-9 pr-4 py-2.5 bg-background border border-primary/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-dark text-sm"
                                            required
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-text-dark ml-1">Email</label>
                            <div className="relative group">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" size={16} />
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2.5 bg-background border border-primary/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-dark text-sm"
                                    required
                                />
                            </div>
                            {email.length > 0 && !email.includes('@') && (
                                <p className="text-xs text-red-500 ml-1">
                                    Email phải có ký tự "@"
                                </p>
                            )}
                        </div>

                        <div className="space-y-1">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-xs font-bold text-text-dark">Mật khẩu</label>
                                {mode === 'login' && (
                                    <button type="button" className="text-xs text-primary hover:underline font-medium"> Quên mật khẩu? </button>
                                )}
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" size={16} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-9 pr-10 py-2.5 bg-background border border-primary/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-dark text-sm"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-dark transition-colors"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                            {password.length > 0 && password.length < 6 && (
                                <p className="text-xs text-red-500 ml-1">
                                    Mật khẩu phải có ít nhất 6 ký tự ({password.length}/6)
                                </p>
                            )}
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-2.5 bg-primary text-white rounded-xl font-bold shadow-md shadow-primary/20 flex items-center justify-center gap-2 mt-1 hover:bg-primary/90 transition-all text-sm"
                        >
                            {mode === 'login' ? 'Đăng nhập' : 'Tạo tài khoản'}
                            <ArrowRight size={17} />
                        </motion.button>
                    </form>

                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-primary/10"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-surface px-3 text-text-muted font-medium">Hoặc tiếp tục với</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <button
                            type="button"
                            onClick={() => handleSocialLogin('google')}
                            className="flex items-center justify-center gap-1.5 py-2 px-1 bg-background border border-primary/10 rounded-xl hover:bg-primary/5 transition-colors text-xs font-bold text-text-dark"
                        >
                            <Chrome size={15} className="text-secondary" />
                            Google
                        </button>
                        <button
                            type="button"
                            onClick={() => handleSocialLogin('facebook')}
                            className="flex items-center justify-center gap-1.5 py-2 px-1 bg-background border border-primary/10 rounded-xl hover:bg-primary/5 transition-colors text-xs font-bold text-text-dark"
                        >
                            <Facebook size={15} className="text-blue-600" />
                            Facebook
                        </button>
                        <button
                            type="button"
                            onClick={() => handleSocialLogin('github')}
                            className="flex items-center justify-center gap-1.5 py-2 px-1 bg-background border border-primary/10 rounded-xl hover:bg-primary/5 transition-colors text-xs font-bold text-text-dark"
                        >
                            <Github size={15} />
                            Github
                        </button>
                    </div>

                    <p className="text-center mt-4 text-text-muted text-xs">
                        {mode === 'login' ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}
                        <button
                            onClick={toggleMode}
                            className="ml-1.5 text-primary font-bold hover:underline"
                        >
                            {mode === 'login' ? 'Đăng ký ngay' : 'Đăng nhập ngay'}
                        </button>
                    </p>
                </div>
            </motion.div>
        </div>
        )}
        </AnimatePresence>
    );
}
