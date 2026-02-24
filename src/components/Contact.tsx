import { motion } from "motion/react";
import {
    Mail, Phone, MapPin, Globe, MessageSquare,
    Facebook, Instagram, Linkedin, Twitter, Clock
} from "lucide-react";

export default function Contact() {
    const contactInfo = [
        {
            icon: <Mail className="text-primary" size={24} />,
            label: "Email",
            value: "hotro@chamnghe.vn",
            link: "mailto:hotro@chamnghe.vn"
        },
        {
            icon: <Phone className="text-secondary" size={24} />,
            label: "Hotline",
            value: "090-XXXX-XXXX",
            link: "tel:090XXXXXXXX"
        },
        {
            icon: <MapPin className="text-accent" size={24} />,
            label: "Văn phòng",
            value: "Toà nhà Innovation, Công viên phần mềm Quang Trung, Quận 12, TP.HCM",
            link: "#"
        },
        {
            icon: <Clock className="text-primary" size={24} />,
            label: "Giờ làm việc",
            value: "Thứ 2 - Thứ 6: 8:00 - 17:30",
            link: "#"
        }
    ];

    const socials = [
        { icon: <Facebook />, label: "Facebook", link: "#" },
        { icon: <Instagram />, label: "Instagram", link: "#" },
        { icon: <Linkedin />, label: "LinkedIn", link: "#" },
        { icon: <Twitter />, label: "Twitter", link: "#" }
    ];

    return (
        <div className="max-w-5xl mx-auto px-6 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-serif text-text-dark mb-6">Liên hệ với Chạm Nghề</h1>
                <p className="text-text-muted text-xl max-w-2xl mx-auto leading-relaxed">
                    Chúng mình luôn sẵn sàng lắng nghe mọi góp ý, câu hỏi hoặc lời mời hợp tác từ bạn.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-surface p-10 rounded-[3rem] border border-primary/5 shadow-sm">
                        <h2 className="text-2xl font-bold text-text-dark mb-8">Thông tin chi tiết</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {contactInfo.map((info, idx) => (
                                <div key={idx} className="flex gap-5 group">
                                    <div className="w-12 h-12 bg-background border border-primary/5 rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">{info.label}</p>
                                        <a
                                            href={info.link}
                                            className="text-text-dark font-medium hover:text-primary transition-colors block leading-relaxed"
                                        >
                                            {info.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-surface p-10 rounded-[3rem] border border-primary/5 shadow-sm">
                        <h2 className="text-2xl font-bold text-text-dark mb-6">Kết nối mạng xã hội</h2>
                        <div className="flex flex-wrap gap-4">
                            {socials.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    className="flex items-center gap-3 px-6 py-3 bg-background border border-primary/5 rounded-2xl hover:bg-primary hover:text-white transition-all group"
                                >
                                    <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                                    <span className="font-bold">{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-10 rounded-[3rem] border border-white/50 shadow-xl flex flex-col justify-center text-center">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg mx-auto mb-8">
                        <Globe className="text-primary animate-spin-slow" size={40} />
                    </div>
                    <h3 className="text-2xl font-serif text-text-dark mb-4">Mở rộng kết nối</h3>
                    <p className="text-text-muted mb-8 leading-relaxed">
                        Chạm Nghề không chỉ là một ứng dụng, đó là một hệ sinh thái. Hãy cùng chúng mình xây dựng tương lai cho Gen Z Việt Nam.
                    </p>
                    <button className="w-full py-5 bg-text-dark text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-black/10">
                        Hợp tác cùng chúng mình
                    </button>
                </div>
            </div>

            {/* Premium Support Box */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="p-10 bg-gradient-to-br from-text-dark to-slate-800 rounded-[3rem] text-white text-center relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-primary/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -ml-32 -mb-32 group-hover:bg-secondary/30 transition-colors duration-500" />

                <div className="relative z-10">
                    <MessageSquare className="mx-auto mb-6 text-primary" size={48} />
                    <h3 className="text-3xl font-serif mb-4">Gửi tin nhắn trực tiếp?</h3>
                    <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">Nếu bạn có bất kỳ thắc mắc cụ thể nào, hãy gửi email ngay cho đội ngũ hỗ trợ của Chạm Nghề.</p>
                    <a
                        href="mailto:hotro@chamnghe.vn"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
                    >
                        <Mail size={20} />
                        Gửi Email Cho Chúng Mình
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
