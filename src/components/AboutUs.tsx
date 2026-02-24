import { motion } from "motion/react";

export default function AboutUs() {
    return (
        <section id="about" className="relative max-w-7xl mx-auto px-6 py-28 overflow-hidden">
            {/* Background Blur Elements */}
            <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-40" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] opacity-40" />

            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative text-center max-w-3xl mx-auto mb-24"
            >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6">
                    Về <span className="text-primary italic">Chạm Nghề</span>
                </h2>
                <p className="text-text-muted text-lg">
                    Một nền tảng được xây dựng để giúp người trẻ hiểu mình trước khi chọn nghề.
                </p>
            </motion.div>

            <div className="space-y-32 relative z-10">
                {/* BLOCK 1 */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="backdrop-blur-xl bg-surface/60 border border-white/10 p-10 rounded-3xl shadow-2xl"
                    >
                        <p className="text-lg text-text-muted leading-relaxed">
                            <span className="font-semibold text-text-dark">Chạm Nghề</span> là
                            <span className="font-semibold text-primary"> nền tảng hướng nghiệp hiện đại </span>
                            dành cho học sinh THPT và sinh viên đại học.
                            Chúng tôi giúp người trẻ
                            <span className="font-semibold text-secondary"> hiểu rõ chính mình</span>,
                            thay vì lựa chọn tương lai dựa trên xu hướng hay áp lực bên ngoài.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/10"
                    >
                        <img
                            src="/anh1.jpg"
                            alt="Career Guidance"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                {/* BLOCK 2 */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl border border-primary/10"
                    >
                        <img
                            src="/anh2.jpg"
                            alt="Personality"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="order-1 lg:order-2 backdrop-blur-xl bg-surface/60 border border-white/10 p-10 rounded-3xl shadow-2xl"
                    >
                        <p className="text-lg text-text-muted leading-relaxed">
                            Dựa trên
                            <span className="font-semibold text-primary"> tâm lý học về tính cách</span>,
                            chúng tôi giúp bạn khám phá
                            <span className="font-semibold text-secondary"> điểm mạnh, tư duy và tiềm năng</span>.
                            Từ đó kết nối bạn với những ngành nghề phù hợp cùng lộ trình phát triển thực tế.
                        </p>
                    </motion.div>
                </div>

                {/* BLOCK 3 */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="backdrop-blur-xl bg-surface/60 border border-white/10 p-10 rounded-3xl shadow-2xl"
                    >
                        <p className="text-lg text-text-muted leading-relaxed">
                            <span className="font-semibold text-text-dark">
                                Chúng tôi không chọn nghề thay bạn.
                            </span>
                            Chạm Nghề đóng vai trò như một
                            <span className="font-semibold text-primary"> người đồng hành</span>,
                            giúp bạn xây dựng
                            <span className="font-semibold text-secondary"> hệ sinh thái phát triển kỹ năng dài hạn</span>
                            để tự tin trưởng thành theo cách riêng.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/10"
                    >
                        <img
                            src="/anh3.jpg"
                            alt="Future"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
