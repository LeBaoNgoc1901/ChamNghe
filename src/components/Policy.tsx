import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Shield, Lock, Eye, Database, Share2, Bell, Cookie,
    HelpCircle, UserCheck, ChevronDown, Info, ShieldCheck,
    Server, Globe, HardDrive, MessageSquare
} from "lucide-react";

interface Section {
    id: number;
    title: string;
    icon: React.ReactNode;
    content?: string[];
    text?: string;
    fullText?: string;
}

export default function Policy() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const sections: Section[] = [
        {
            id: 1,
            title: "1. Thu thập thông tin",
            icon: <Database className="text-primary" size={24} />,
            content: [
                "Thông tin cá nhân: Tên, email, số điện thoại.",
                "Dữ liệu trắc nghiệm: Các câu trả lời và kết quả đánh giá.",
                "Dữ liệu kỹ thuật: Địa chỉ IP, cookies, thông tin thiết bị."
            ],
            fullText: "Chạm Nghề thu thập thông tin để cung cấp và cải thiện dịch vụ của chúng tôi. Thông tin cá nhân được thu thập khi bạn đăng ký tài khoản hoặc liên hệ với chúng tôi. Dữ liệu trắc nghiệm được thu thập khi bạn tham gia vào các bài đánh giá năng lực và tính cách. Dữ liệu kỹ thuật giúp chúng tôi tối ưu hóa hiệu suất trang web và bảo vệ hệ thống khỏi các mối đe dọa an ninh."
        },
        {
            id: 2,
            title: "2. Sử dụng thông tin",
            icon: <Eye className="text-secondary" size={24} />,
            content: [
                "Cá nhân hóa lộ trình định hướng nghề nghiệp.",
                "Cải thiện chất lượng thuật toán đề xuất.",
                "Gửi thông báo và cập nhật quan trọng.",
                "Phân tích dữ liệu ẩn danh cho mục đích nghiên cứu."
            ],
            fullText: "Chúng tôi sử dụng thông tin thu thập được để: (a) Đưa ra những gợi ý nghề nghiệp phù hợp nhất với bản sắc cá nhân của bạn; (b) Nâng cấp các tính năng của nền tảng; (c) Liên lạc với bạn về các thay đổi quan trọng; (d) Tạo ra các báo cáo tổng quan về xu hướng nghề nghiệp của Gen Z mà không làm lộ danh tính cá nhân của bất kỳ ai."
        },
        {
            id: 3,
            title: "3. Bảo mật dữ liệu",
            icon: <Lock className="text-accent" size={24} />,
            text: "Dữ liệu của bạn được bảo vệ bằng các công nghệ mã hóa tiên tiến nhất.",
            fullText: "Sự an toàn của thông tin bạn cung cấp là ưu tiên hàng đầu của chúng tôi. Chúng tôi sử dụng giao thức HTTPS để mã hóa dữ liệu trong quá trình truyền tải và lưu trữ dữ liệu trên các máy chủ đám mây an toàn với quy trình kiểm soát truy cập nghiêm ngặt. Chúng tôi thường xuyên thực hiện các đợt rà soát bảo mật để ngăn ngừa các nguy cơ rò rỉ thông tin."
        },
        {
            id: 4,
            title: "4. Chia sẻ thông tin với bên thứ ba",
            icon: <Share2 className="text-primary" size={24} />,
            text: "Chúng tôi cam kết không bán dữ liệu của bạn cho bất kỳ bên nào.",
            fullText: "Chúng tôi chỉ chia sẻ thông tin cá nhân của bạn trong các trường hợp sau: (a) Khi có sự đồng ý rõ ràng của bạn; (b) Với các đối tác cung cấp dịch vụ kỹ thuật (như dịch vụ lưu trữ) đi kèm với cam kết bảo mật chặt chẽ; (c) Để tuân thủ các nghĩa vụ pháp lý khi có yêu cầu từ cơ quan chức năng có thẩm quyền."
        },
        {
            id: 5,
            title: "5. Quyền của người dùng",
            icon: <UserCheck className="text-secondary" size={24} />,
            content: [
                "Quyền truy cập và xem dữ liệu cá nhân.",
                "Quyền chỉnh sửa thông tin không chính xác.",
                "Quyền yêu cầu xóa vĩnh viễn dữ liệu.",
                "Quyền từ chối nhận thông tin quảng cáo."
            ],
            fullText: "Tại Chạm Nghề, bạn có toàn quyền kiểm soát dữ liệu của mình. Bạn có thể cập nhật thông tin cá nhân trong phần cài đặt tài khoản bất cứ lúc nào. Nếu bạn muốn xóa hoàn toàn dữ liệu của mình khỏi hệ thống, bạn có thể gửi yêu cầu cho chúng tôi và dữ liệu sẽ được xóa sạch trong vòng 30 ngày."
        },
        {
            id: 6,
            title: "6. Cookies và Công nghệ theo dõi",
            icon: <Cookie className="text-accent" size={24} />,
            text: "Sử dụng cookies giúp nâng cao trải nghiệm và ghi nhớ sở thích của bạn.",
            fullText: "Cookies là những tệp nhỏ được lưu trữ trên thiết bị của bạn. Chúng giúp chúng tôi nhận diện bạn khi bạn quay lại và ghi nhớ các lựa chọn của bạn (như ngôn ngữ hoặc cài đặt hiển thị). Bạn có thể tắt cookies trong trình duyệt, tuy nhiên điều này có thể làm một số tính năng của Chạm Nghề không hoạt động ổn định."
        },
        {
            id: 7,
            title: "7. Thời gian lưu trữ dữ liệu",
            icon: <HardDrive className="text-primary" size={24} />,
            text: "Dữ liệu được lưu trữ trong thời gian cần thiết để thực hiện mục đích đã nêu.",
            fullText: "Chúng tôi lưu giữ thông tin tài khoản của bạn chừng nào tài khoản còn hoạt động. Các dữ liệu trắc nghiệm có thể được lưu trữ lâu hơn dưới dạng ẩn danh để phục vụ mục đích thống kê và nghiên cứu khoa học, giúp cộng đồng Chạm Nghề có những hiểu biết sâu sắc hơn về thế giới nghề nghiệp."
        },
        {
            id: 8,
            title: "8. Bảo vệ trẻ em",
            icon: <ShieldCheck className="text-secondary" size={24} />,
            text: "Chạm Nghề đặc biệt coi trọng quyền riêng tư của người dùng trẻ tuổi.",
            fullText: "Nếu bạn dưới 15 tuổi, chúng tôi khuyến khích bạn cần có sự giám sát của cha mẹ hoặc người giám hộ khi sử dụng dịch vụ. Chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em dưới độ tuổi quy định mà không có sự đồng ý của phụ huynh. Nếu phát hiện trường hợp như vậy, chúng tôi sẽ thực hiện các bước để xóa thông tin đó ngay lập tức."
        },
        {
            id: 9,
            title: "9. Chuyển dữ liệu quốc tế",
            icon: <Globe className="text-accent" size={24} />,
            text: "Dữ liệu có thể được xử lý tại các máy chủ nằm ngoài lãnh thổ Việt Nam.",
            fullText: "Để đảm bảo dịch vụ luôn sẵn sàng và ổn định, chúng tôi sử dụng hạ tầng của các nhà cung cấp đám mây toàn cầu. Điều này có nghĩa là dữ liệu của bạn có thể được truyền qua biên giới quốc gia. Tuy nhiên, chúng tôi luôn đảm bảo các biện pháp bảo vệ tương đương với tiêu chuẩn pháp luật Việt Nam bất kể dữ liệu được xử lý ở đâu."
        },
        {
            id: 10,
            title: "10. Thay đổi Chính sách Bảo mật",
            icon: <Bell className="text-primary" size={24} />,
            text: "Chúng tôi có thể cập nhật chính sách này để phù hợp với quy định mới của pháp luật.",
            fullText: "Khi có những thay đổi quan trọng trong cách chúng tôi xử lý thông tin, chúng tôi sẽ thông báo cho bạn qua email hoặc thông báo nổi bật trên trang web. Việc bạn tiếp tục sử dụng dịch vụ sau khi chính sách được cập nhật đồng nghĩa với việc bạn chấp thuận phiên bản mới nhất của Chính sách Bảo mật."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-4">
                    <Shield size={18} />
                    Chạm Nghề Privacy
                </div>
                <h1 className="text-4xl md:text-5xl font-serif text-text-dark mb-6">Chính sách Bảo mật</h1>
                <p className="text-text-muted text-lg max-w-2xl mx-auto">
                    Chúng tôi cam kết bảo vệ sự riêng tư và dữ liệu cá nhân của bạn khi tham gia hành trình khám phá bản thân tại Chạm Nghề.
                </p>
            </motion.div>

            <div className="space-y-6">
                {sections.map((section, idx) => (
                    <motion.section
                        key={section.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className={`bg-surface p-6 md:p-8 rounded-[2rem] border transition-all duration-300 overflow-hidden cursor-pointer group ${expandedId === section.id
                            ? "border-secondary/30 shadow-lg ring-1 ring-secondary/10"
                            : "border-primary/5 shadow-sm hover:shadow-md hover:border-secondary/20"
                            }`}
                        onClick={() => setExpandedId(expandedId === section.id ? null : section.id)}
                    >
                        <div className="flex items-start gap-6 relative z-10 w-full">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${expandedId === section.id ? "bg-secondary text-white" : "bg-background text-secondary shadow-inner"
                                }`}>
                                {section.icon}
                            </div>
                            <div className="flex-1 text-left">
                                <div className="flex items-center justify-between gap-4">
                                    <h2 className={`text-xl font-bold transition-colors ${expandedId === section.id ? "text-secondary" : "text-text-dark"
                                        }`}>
                                        {section.title}
                                    </h2>
                                    <motion.div
                                        animate={{ rotate: expandedId === section.id ? 180 : 0 }}
                                        className="text-text-muted/40 group-hover:text-secondary transition-colors"
                                    >
                                        <ChevronDown size={24} />
                                    </motion.div>
                                </div>

                                <p className="text-text-muted mt-2 leading-relaxed">
                                    {section.text}
                                </p>

                                <AnimatePresence>
                                    {expandedId === section.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-6 mt-6 border-t border-secondary/10">
                                                <p className="text-text-dark leading-relaxed font-medium mb-4">
                                                    {section.fullText}
                                                </p>

                                                {section.content && (
                                                    <ul className="space-y-3 mb-4">
                                                        {section.content.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-3 text-text-muted text-sm">
                                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                                <button className="mt-6 text-secondary text-sm font-bold hover:underline">
                                                    Thu gọn nội dung
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-20 p-10 bg-gradient-to-br from-text-dark to-slate-800 rounded-[3rem] text-white text-center relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-secondary/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32 group-hover:bg-primary/20 transition-colors duration-500" />

                <div className="relative z-10">
                    <HelpCircle className="mx-auto mb-6 text-secondary" size={48} />
                    <h3 className="text-3xl font-serif mb-4">Mọi thắc mắc về Bảo mật?</h3>
                    <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">Chúng tôi luôn sẵn sàng giải đáp các câu hỏi của bạn về cách thức bảo vệ dữ liệu và quyền riêng tư.</p>
                    <a
                        href="mailto:baomat@chamnghe.vn"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-white rounded-2xl font-bold hover:scale-105 hover:shadow-xl hover:shadow-secondary/20 transition-all active:scale-95"
                    >
                        <MessageSquare size={20} />
                        Liên hệ Bộ phận Bảo mật
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
