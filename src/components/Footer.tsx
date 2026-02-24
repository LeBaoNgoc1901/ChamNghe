import { Mail, ArrowRight } from "lucide-react";

export function Footer({ navigate }: { navigate: (view: 'home' | 'quiz' | 'careers' | 'cases' | 'policy' | 'terms') => void }) {
    return (
        <footer className="bg-text-dark text-white pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
                    <div>
                        <h3 className="text-4xl font-serif mb-6">Chạm Nghề</h3>
                        <p className="text-gray-400 text-lg max-w-md mb-8">
                            Nền tảng thấu hiểu bản thân và định hướng nghề nghiệp hàng đầu cho Gen Z Việt Nam.
                        </p>
                        <div className="flex gap-4">
                            {['FB', 'IG', 'LN', 'TT'].map(social => (
                                <div key={social} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-xs font-bold hover:bg-white hover:text-black transition-all cursor-pointer">
                                    {social}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 rounded-[2.5rem] p-10 border border-white/10">
                        <h4 className="text-xl font-serif mb-2">Nhận bản tin định hướng</h4>
                        <p className="text-gray-400 text-sm mb-8">Cập nhật xu hướng ngành nghề và bài viết thấu hiểu bản thân mỗi tuần.</p>

                        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative flex-1">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="email"
                                    placeholder="Email của bạn..."
                                    className="w-full bg-white/10 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
                                Đăng ký
                                <ArrowRight size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                    <p>© 2026 Chạm Nghề. All rights reserved.</p>
                    <div className="flex gap-8">
                        <button
                            onClick={() => navigate('terms')}
                            className="hover:text-white transition-colors"
                        >
                            Điều khoản
                        </button>
                        <button
                            onClick={() => navigate('policy')}
                            className="hover:text-white transition-colors"
                        >
                            Bảo mật
                        </button>
                        <button
                            onClick={() => navigate('contact')}
                            className="hover:text-white transition-colors"
                        >
                            Liên hệ
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
