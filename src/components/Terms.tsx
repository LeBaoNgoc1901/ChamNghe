import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Shield, BookOpen, UserCheck, Trash2, Building2, Terminal,
    ShoppingCart, Users, Microscope, Zap, Calendar, Heart,
    ChevronDown, Info, Lock, Globe, Scale, MessageSquare
} from "lucide-react";

interface Section {
    id: number;
    title: string;
    icon: React.ReactNode;
    content?: string[];
    subsections?: { title: string; text: string }[];
    text?: string;
    fullText?: string;
}

export default function Terms() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const sections: Section[] = [
        {
            id: 1,
            title: "1. Giới thiệu và Phạm vi áp dụng",
            icon: <Info className="text-primary" size={24} />,
            text: "Điều khoản Dịch vụ này quy định các điều kiện sử dụng nền tảng Chạm Nghề.",
            fullText: "Chào mừng bạn đến với Chạm Nghề. Bằng việc truy cập hoặc sử dụng trang web, ứng dụng và các dịch vụ đi kèm (gọi chung là 'Dịch vụ'), bạn đồng ý tuân thủ và chịu sự ràng buộc bởi các Điều khoản Dịch vụ này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, vui lòng không sử dụng Dịch vụ của chúng tôi. Chạm Nghề có quyền thay đổi hoặc cập nhật các điều khoản này bất cứ lúc nào mà không cần thông báo trước."
        },
        {
            id: 2,
            title: "2. Chấp thuận các Điều khoản",
            icon: <UserCheck className="text-secondary" size={24} />,
            text: "Việc sử dụng Dịch vụ đồng nghĩa với việc bạn đã đọc và đồng ý với các điều khoản.",
            fullText: "Bạn khẳng định rằng bạn đã đủ tuổi trưởng thành theo quy định của pháp luật hoặc có sự đồng ý của cha mẹ/người giám hộ hợp pháp để tham gia vào các thỏa thuận này. Chúng tôi bảo lưu quyền từ chối cung cấp dịch vụ cho bất kỳ ai, bất cứ lúc nào vì bất kỳ lý do gì nếu chúng tôi tin rằng hành vi của họ vi phạm các giá trị cộng đồng hoặc quy định pháp luật hiện hành."
        },
        {
            id: 3,
            title: "3. Tài khoản và Bảo mật",
            icon: <Lock className="text-accent" size={24} />,
            text: "Bạn có trách nhiệm bảo mật thông tin tài khoản và mật khẩu của mình.",
            fullText: "Khi tạo tài khoản, bạn cam kết cung cấp thông tin chính xác, đầy đủ và cập nhật. Bạn chịu trách nhiệm hoàn toàn về mọi hoạt động diễn ra dưới tài khoản của mình. Vui lòng thông báo ngay cho chúng tôi nếu bạn phát hiện bất kỳ hành vi truy cập trái phép nào. Chạm Nghề không chịu trách nhiệm cho bất kỳ tổn thất nào phát sinh từ việc bạn không bảo mật thông tin tài khoản."
        },
        {
            id: 4,
            title: "4. Sử dụng Dịch vụ Hợp pháp",
            icon: <Globe className="text-primary" size={24} />,
            text: "Nghiêm cấm các hành vi sử dụng Dịch vụ vi phạm pháp luật hoặc gây hại cho người khác.",
            fullText: "Bạn đồng ý không sử dụng Dịch vụ để: (a) Đăng tải nội dung bất hợp pháp, đe dọa, hoặc phỉ báng; (b) Phát tán virus hoặc mã độc; (c) Thu thập thông tin người dùng khác trái phép; (d) Gây rối hoặc can thiệp vào hoạt động bình thường của hệ thống. Mọi hành vi vi phạm sẽ dẫn đến việc đình chỉ tài khoản ngay lập tức và có thể bị truy cứu trách nhiệm pháp luật."
        },
        {
            id: 5,
            title: "5. Quyền của Chủ thể dữ liệu",
            icon: <UserCheck className="text-secondary" size={24} />,
            content: [
                "Yêu cầu truy cập dữ liệu cá nhân.",
                "Yêu cầu chỉnh sửa hoặc xóa dữ liệu.",
                "Rút lại sự đồng ý xử lý dữ liệu.",
                "Khiếu nại về việc xử lý dữ liệu trái pháp luật."
            ],
            fullText: "Theo quy định về bảo vệ dữ liệu, bạn có quyền kiểm soát thông tin cá nhân của mình. Bạn có thể gửi yêu cầu xuất dữ liệu để xem những gì chúng tôi lưu trữ, hoặc yêu cầu xóa vĩnh viễn dữ liệu nếu không còn nhu cầu sử dụng. Chúng tôi cam kết phản hồi các yêu cầu của bạn trong vòng 30 ngày làm việc kể từ khi nhận được yêu cầu hợp lệ."
        },
        {
            id: 6,
            title: "6. Chấm dứt và Xóa dữ liệu",
            icon: <Trash2 className="text-accent" size={24} />,
            text: "Dữ liệu cá nhân sẽ được xóa an toàn sau khi chương trình kết thúc hoặc theo yêu cầu.",
            fullText: "Chúng tôi chỉ lưu trữ dữ liệu của bạn trong khoảng thời gian cần thiết để thực hiện các mục đích đã nêu trong Chính sách Bảo mật hoặc theo yêu cầu của pháp luật. Khi kết thúc chương trình preview hoặc khi bạn đóng tài khoản, dữ liệu cá nhân sẽ được xóa vĩnh viễn hoặc ẩn danh hóa sao cho không thể nhận dạng lại được người dùng."
        },
        {
            id: 7,
            title: "7. Thu thập và Xử lý Dữ liệu",
            icon: <Shield className="text-primary" size={24} />,
            text: "Chúng tôi thu thập dữ liệu để cải thiện trải nghiệm và cung cấp định hướng nghề nghiệp.",
            fullText: "Dữ liệu được thu thập bao gồm thông tin định danh (tên, email), dữ liệu hành vi (kết quả trắc nghiệm) và dữ liệu kỹ thuật (địa chỉ IP). Chúng tôi sử dụng các công nghệ tiên tiến để xử lý dữ liệu một cách an toàn, nhằm đưa ra những gợi ý nghề nghiệp chính xác nhất cho bạn. Chúng tôi không bao giờ bán dữ liệu của bạn cho bên thứ ba vì mục đích tiếp thị."
        },
        {
            id: 8,
            title: "8. ĐIỀU KHOẢN BỔ SUNG DÀNH CHO NHÀ TÀI TRỢ VÀ ĐỐI TÁC QUẢNG BÁ",
            icon: <Building2 className="text-secondary" size={24} />,
            subsections: [
                {
                    title: "Điều 1. Phạm vi áp dụng",
                    text: "Áp dụng cho mọi tổ chức ký kết thỏa thuận tài trợ với Chạm Nghề."
                },
                {
                    title: "Điều 2. Cam kết pháp lý",
                    text: "Tuân thủ Luật Quảng cáo Việt Nam và các quy định về giáo dục."
                }
            ],
            fullText: "Nhà tài trợ cam kết rằng mọi nội dung quảng bá đều trung thực, không gây hiểu lầm và phù hợp với thuần phong mỹ tục Việt Nam. Chạm Nghề có quyền đơn phương chấm dứt hợp tác nếu nội dung của Nhà tài trợ vi phạm các tiêu chuẩn đạo đức hoặc gây ảnh hưởng xấu đến người dùng trẻ tuổi của chúng tôi."
        },
        {
            id: 9,
            title: "9. THỎA THUẬN DÀNH CHO NHÀ PHÁT TRIỂN ĐÃ ĐĂNG KÝ",
            icon: <Terminal className="text-primary" size={24} />,
            subsections: [
                {
                    title: "Điều 1. Cấp quyền",
                    text: "Nhà phát triển được cấp quyền truy cập API sau khi được phê duyệt."
                },
                {
                    title: "Điều 2. Bảo mật",
                    text: "Bảo mật Khóa API và dữ liệu hệ thống là nghĩa vụ bắt buộc."
                }
            ],
            fullText: "Nhà phát triển không được phép sử dụng API của Chạm Nghề cho các mục đích cạnh tranh không lành mạnh hoặc khai thác dữ liệu trái phép. Mọi ứng dụng được phát triển dựa trên nền tảng của chúng tôi phải tuân thủ các hướng dẫn về thiết kế và bảo mật mà Chạm Nghề cung cấp."
        },
        {
            id: 10,
            title: "10. ĐIỀU KHOẢN DỊCH VỤ SÀN NỘI DUNG/MARKETPLACE",
            icon: <ShoppingCart className="text-accent" size={24} />,
            text: "Chạm Nghề đóng vai trò trung gian kết nối giữa người mua và người bán nội dung số.",
            fullText: "Các giao dịch trên Marketplace tuân thủ quy định về thương mại điện tử. Người bán chịu trách nhiệm hoàn toàn về bản quyền và chất lượng nội dung đăng tải. Người mua được cấp quyền sử dụng nội dung theo các giấy phép cụ thể được ghi rõ tại thời điểm mua hàng. Chạm Nghề không hoàn tiền cho các sản phẩm số đã được tải xuống thành công."
        },
        {
            id: 11,
            title: "11. THỎA THUẬN DÀNH CHO NHÀ CUNG CẤP NỘI DUNG",
            icon: <Users className="text-secondary" size={24} />,
            text: "Nhà cung cấp phải đảm bảo quyền sở hữu trí tuệ đối với mọi nội dung đăng tải.",
            fullText: "Bằng việc đăng tải nội dung, bạn cấp cho Chạm Nghề quyền không độc quyền để lưu trữ, hiển thị và phân phối nội dung đó trên nền tảng. Bạn cam kết rằng nội dung không vi phạm bản quyền, nhãn hiệu hoặc bất kỳ quyền sở hữu trí tuệ nào khác của bên thứ ba. Nếu có tranh chấp phát sinh, bạn đồng ý bồi thường cho Chạm Nghề mọi chi phí liên quan."
        },
        {
            id: 12,
            title: "12. ĐIỀU KHOẢN CHƯƠNG TRÌNH NGHIÊN CỨU VÀ PHÁT TRIỂN",
            icon: <Microscope className="text-primary" size={24} />,
            content: [
                "Tham gia hoàn toàn tự nguyện.",
                "Dữ liệu nghiên cứu được ẩn danh hóa.",
                "Sở hữu trí tuệ thuộc về Chạm Nghề."
            ],
            fullText: "Chúng tôi liên tục thực hiện các nghiên cứu để cải thiện thuật toán định hướng nghề nghiệp. Khi tham gia vào các khảo sát hoặc chương trình thử nghiệm, bạn đồng ý cung cấp thông tin trung thực. Kết quả từ các chương trình này sẽ được sử dụng để phát triển các tính năng mới phục vụ cộng đồng người dùng."
        },
        {
            id: 13,
            title: "13. ĐIỀU KHOẢN VÀ ĐIỀU KIỆN MÃ NGUỒN MỞ",
            icon: <BookOpen className="text-accent" size={24} />,
            text: "Các thành phần mã nguồn mở được sử dụng tuân theo giấy phép tương ứng (MIT, Apache, v.v.).",
            fullText: "Chạm Nghề trân trọng đóng góp của cộng đồng mã nguồn mở. Danh sách các thư viện và thành phần mã nguồn mở được sử dụng trong hệ thống cùng với thông tin giấy phép tương ứng luôn được công khai. Trong trường hợp có mâu thuẫn giữa điều khoản này và giấy phép mã nguồn mở, các giấy phép mã nguồn mở sẽ được ưu tiên."
        },
        {
            id: 14,
            title: "14. ĐIỀU KHOẢN THAM GIA SỰ KIỆN",
            icon: <Calendar className="text-secondary" size={24} />,
            text: "Người tham gia sự kiện phải tuân thủ nội quy và hướng dẫn của ban tổ chức.",
            fullText: "Đối với các sự kiện trực tiếp hoặc trực tuyến do Chạm Nghề tổ chức, người đăng ký phải cung cấp thông tin liên hệ chính xác. Vé tham gia không được chuyển nhượng trừ khi có sự đồng ý của chúng tôi. Chạm Nghề có quyền ghi hình, chụp ảnh tại sự kiện để sử dụng cho mục đích truyền thông và lưu trữ."
        },
        {
            id: 15,
            title: "15. BỘ QUY TẮC ỨNG XỬ TẠI SỰ KIỆN",
            icon: <Heart className="text-primary" size={24} />,
            text: "Tạo môi trường tôn trọng, thân thiện và không có hành vi quấy rối.",
            fullText: "Chúng tôi duy trì chính sách không khoan nhượng đối với bất kỳ hành vi quấy rối, phân biệt đối xử hoặc đe dọa nào dựa trên giới tính, xu hướng tính dục, khuyết tật, ngoại hình, chủng tộc hay tôn giáo. Người vi phạm có thể bị mời ra khỏi sự kiện và cấm tham gia các hoạt động trong tương lai mà không được hoàn tiền."
        },
        {
            id: 16,
            title: "16. Giới hạn Trách nhiệm",
            icon: <Scale className="text-accent" size={24} />,
            text: "Chạm Nghề không chịu trách nhiệm cho các quyết định cá nhân dựa trên kết quả gợi ý.",
            fullText: "Dịch vụ của chúng tôi mang tính chất định hướng và tham khảo. Chúng tôi không đảm bảo tính chính xác tuyệt đối hoặc sự thành công nghề nghiệp dựa trên các gợi ý của hệ thống. Trong mọi trường hợp, trách nhiệm tối đa của Chạm Nghề đối với bạn cho bất kỳ thiệt hại nào sẽ không vượt quá số tiền bạn đã thanh toán cho chúng tôi (nếu có) trong vòng 12 tháng trước đó."
        },
        {
            id: 17,
            title: "17. CHÍNH SÁCH NHÀ PHÁT TRIỂN AI/COPILOT",
            icon: <Zap className="text-accent" size={24} />,
            text: "Quy định về việc sử dụng công nghệ AI để hỗ trợ người dùng trên nền tảng.",
            fullText: "Chạm Nghề tích hợp công nghệ AI để cá nhân hóa lộ trình khám phá nghề nghiệp. Chúng tôi cam kết minh bạch về việc khi nào AI được sử dụng. Dữ liệu huấn luyện AI được xử lý theo tiêu chuẩn bảo mật cao nhất và không vi phạm quyền riêng tư của cá nhân. Người dùng có quyền từ chối các tính năng do AI đề xuất nếu muốn."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                    <Shield size={18} />
                    Chạm Nghề Legal
                </div>
                <h1 className="text-4xl md:text-5xl font-serif text-text-dark mb-6">Điều khoản Dịch vụ</h1>
                <p className="text-text-muted text-lg max-w-2xl mx-auto">
                    Các quy định pháp lý và thỏa thuận sử dụng nền tảng Chạm Nghề nhằm đảm bảo quyền lợi và sự an toàn cho cộng đồng.
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
                            ? "border-primary/30 shadow-lg ring-1 ring-primary/10"
                            : "border-primary/5 shadow-sm hover:shadow-md hover:border-primary/20"
                            }`}
                        onClick={() => setExpandedId(expandedId === section.id ? null : section.id)}
                    >
                        <div className="flex items-start gap-6 relative z-10 w-full">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${expandedId === section.id ? "bg-primary text-white" : "bg-background text-primary shadow-inner"
                                }`}>
                                {section.icon}
                            </div>
                            <div className="flex-1 text-left">
                                <div className="flex items-center justify-between gap-4">
                                    <h2 className={`text-xl font-bold transition-colors ${expandedId === section.id ? "text-primary" : "text-text-dark"
                                        }`}>
                                        {section.title}
                                    </h2>
                                    <motion.div
                                        animate={{ rotate: expandedId === section.id ? 180 : 0 }}
                                        className="text-text-muted/40 group-hover:text-primary transition-colors"
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
                                            <div className="pt-6 mt-6 border-t border-primary/10">
                                                <p className="text-text-dark leading-relaxed font-medium mb-4">
                                                    {section.fullText}
                                                </p>

                                                {section.content && (
                                                    <ul className="space-y-3 mb-4">
                                                        {section.content.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-3 text-text-muted text-sm">
                                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                                {section.subsections && (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {section.subsections.map((sub, i) => (
                                                            <div key={i} className="bg-background/50 p-4 rounded-2xl border border-primary/5">
                                                                <h3 className="text-sm font-bold text-primary mb-2">{sub.title}</h3>
                                                                <p className="text-xs text-text-muted leading-relaxed">{sub.text}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                <button className="mt-6 text-primary text-sm font-bold hover:underline">
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
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-primary/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32 group-hover:bg-secondary/20 transition-colors duration-500" />

                <div className="relative z-10">
                    <h3 className="text-3xl font-serif mb-4">Bạn cần hỗ trợ thêm?</h3>
                    <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">Nếu có bất kỳ thắc mắc nào về điều khoản, đừng ngần ngại liên hệ với chúng mình.</p>
                    <a
                        href="mailto:hotro@chamnghe.vn"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
                    >
                        <MessageSquare size={20} />
                        Gửi Email Hỗ Trợ
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
