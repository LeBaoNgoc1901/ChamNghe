/**
 * Standalone Competition SPA Logic
 */

// 1. MOCK DATA (3 Distinct Arrays)

const completedCompetitions = [
    {
        id: 'c1',
        title: "Startup Challenge 2026",
        host: "FTU Innovation Club",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
        progress: 100,
        ranking: "Hạng 1 - Quán quân",
        details: "Cuộc thi giải quyết các bài toán vận hành thực tế của các startup công nghệ. Bạn đã xuất sắc vượt qua 4 vòng thi nghẹt thở.",
        roadmap: [
            { step: "01", title: "Vòng Đơn", status: "completed", desc: "Nộp ý tưởng kinh doanh sơ bộ." },
            { step: "02", title: "Vòng Loại", status: "completed", desc: "Thuyết trình mô hình kinh doanh." },
            { step: "03", title: "Bán Kết", status: "completed", desc: "Phát triển MVP thực tế." },
            { step: "04", title: "Chung Kết", status: "completed", desc: "Pitching trực tiếp tại NIC." },
        ]
    },
    {
        id: 'c2',
        title: "Financial Planning Duel",
        host: "FinEdu League",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
        progress: 100,
        ranking: "Hạng 5 - Giải khuyến khích",
        details: "Đối đầu trực tiếp trong việc xây dựng kế hoạch tài chính cho các gia đình trẻ Việt Nam.",
        roadmap: [
            { step: "01", title: "Khai Mạc", status: "completed", desc: "Phổ biến luật chơi." },
            { step: "02", title: "Lập Kế Hoạch", status: "completed", desc: "Xây dựng chiến lược phân bổ tài sản." },
            { step: "03", title: "Thuyết Trình", status: "completed", desc: "Bảo vệ phương án trước hội đồng." },
        ]
    },
    {
        id: 'c3',
        title: "Case Study Marathon",
        host: "Hanoi Business School",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
        progress: 100,
        ranking: "Top 10 - Finalist",
        details: "Thử thách giải quyết 5 case study kinh điển trong vòng 24h liên tục.",
        roadmap: [
            { step: "01", title: "Vòng Sơ Loại", status: "completed", desc: "Bài test tư duy logic." },
            { step: "02", title: "Vòng Marathon", status: "completed", desc: "24h giải quyết tình huống đa ngành." },
            { step: "03", title: "Chung Kết", status: "completed", desc: "Tranh biện và bảo vệ giải pháp." },
        ]
    }
];

const ongoingCompetitions = [
    {
        id: 'o1',
        title: "Green Marketing Awards",
        host: "Eco Connect",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=800",
        progress: 30,
        ranking: "Hạng 12/200 (Vòng loại)",
        details: "Tìm kiếm các chiến dịch Marketing sáng tạo thúc đẩy lối sống bền vững và bảo vệ môi trường.",
        roadmap: [
            { step: "01", title: "Nộp Concept", status: "completed", desc: "Ý tưởng chủ đạo cho chiến dịch." },
            { step: "02", title: "Phát Triển", status: "active", desc: "Xây dựng chi tiết các kênh truyền thông." },
            { step: "03", title: "Chung Cuộc", status: "upcoming", desc: "Vinh danh các chiến dịch lan tỏa." },
        ]
    },
    {
        id: 'o2',
        title: "Supply Chain Excellence",
        host: "Logistics Hub",
        image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&q=80&w=800",
        progress: 75,
        ranking: "Hạng 2/50 (Bán kết)",
        details: "Tối ưu hóa chuỗi cung ứng thực tế cho doanh nghiệp xuất khẩu.",
        roadmap: [
            { step: "01", title: "Vòng Sơ Tuyển", status: "completed", desc: "Kiểm tra kiến thức Logistics." },
            { step: "02", title: "Phân Tích Cấu Trúc", status: "completed", desc: "Xây dựng mô hình chuỗi hiện tại." },
            { step: "03", title: "Đề Xuất Tối Ưu", status: "active", desc: "Thiết kế hệ thống vận hành mới." },
            { step: "04", title: "Pitching", status: "upcoming", desc: "Bảo vệ giải pháp tối ưu." },
        ]
    },
    {
        id: 'o3',
        title: "Hackathon: Smart Edu",
        host: "EdTech Vietnam",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        progress: 10,
        ranking: "Chưa cập nhật",
        details: "Kiến tạo các giải pháp công nghệ giáo dục đột phá cho tương lai.",
        roadmap: [
            { step: "01", title: "Thành Lập Đội", status: "completed", desc: "Tìm kiếm cộng sự và đăng ký ý tưởng." },
            { step: "02", title: "Coding Phase", status: "upcoming", desc: "48h phát triển sản phẩm demo." },
            { step: "03", title: "Final Pitch", status: "upcoming", desc: "Thuyết trình trước các quỹ EdTech." },
        ]
    }
];

const suggestedCompetitions = [
    // IT Category
    {
        id: 's1',
        title: "Cyber Security Duel",
        host: "VSEC Association",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        tag: "Công nghệ thông tin",
        category: ["NT", "SP"],
        details: "Đấu trường an ninh mạng đỉnh cao dành cho các tài năng Capture The Flag.",
        roadmap: [
            { step: "01", title: "Qualifiers", status: "upcoming", desc: "Bài thi CTF trực tuyến." },
            { step: "02", title: "Final Battle", status: "upcoming", desc: "Đấu đối kháng trực tiếp (Attack & Defense)." },
        ]
    },
    // Marketing/Media Category
    {
        id: 's2',
        title: "Creator Fest 2026",
        host: "Media Max",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800",
        tag: "Truyền thông",
        category: ["NF", "SP"],
        details: "Cơ hội cho các nhà sáng tạo nội dung thể hiện bản sắc qua video ngắn.",
        roadmap: [
            { step: "01", title: "Vòng Sáng Tạo", status: "upcoming", desc: "Sản xuất video theo chủ đề yêu cầu." },
            { step: "02", title: "Vòng Lan Tỏa", status: "upcoming", desc: "Đo lường mức độ tương tác từ cộng đồng." },
            { step: "03", title: "Gala Night", status: "upcoming", desc: "Vinh danh những nhà sáng tạo xuất sắc." },
        ]
    },
    // Economy/Business Category
    {
        id: 's3',
        title: "Global Trade Master",
        host: "World Trade Center",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
        tag: "Kinh tế",
        category: ["SJ", "NT"],
        details: "Mô phỏng đàm phán thương mại quốc tế và quản trị rủi ro xuất nhập khẩu.",
        roadmap: [
            { step: "01", title: "Training", status: "upcoming", desc: "Huấn luyện kỹ năng đàm phán quốc tế." },
            { step: "02", title: "Simulation", status: "upcoming", desc: "Thực hiện mô phỏng giao dịch thương mại." },
            { step: "03", title: "Review", status: "upcoming", desc: "Phân tích kết quả kinh doanh và rủi ro." },
        ]
    },
    {
        id: 's4',
        title: "UX Design Challenge",
        host: "Product Designers VN",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
        tag: "Thiết kế",
        category: ["NF", "NT"],
        details: "Giải quyết các bài toán UX phức tạp cho ứng dụng siêu ứng dụng (Super App).",
        roadmap: [
            { step: "01", title: "Research", status: "upcoming", desc: "Nghiên cứu hành vi người dùng thực tế." },
            { step: "02", title: "Ideation", status: "upcoming", desc: "Thiết kế giải pháp wireframe và prototype." },
            { step: "03", title: "Testing", status: "upcoming", desc: "Kiểm thử khả năng sử dụng và nhận phản hồi." },
        ]
    }
];

// 2. RENDERING LOGIC

function renderCard(item, type) {
    const isCompleted = type === 'completed';
    const isOngoing = type === 'ongoing';
    const isSuggested = type === 'suggested';

    return `
        <div class="card-competition p-8 rounded-[24px] flex flex-col h-full group">
            <div class="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-[24px]">
                <img src="${item.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="${item.title}">
                <div class="absolute top-4 right-4">
                    <span class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black ${isCompleted ? 'text-green-600' : isOngoing ? 'text-blue-600' : 'text-orange-600'} shadow-lg uppercase tracking-widest">
                        ${isCompleted ? 'DẤU ẤN' : isOngoing ? 'HÀNH TRÌNH' : 'CƠ HỘI'}
                    </span>
                </div>
            </div>

            <div class="mb-4">
                <div class="flex flex-col mb-1 capitalize">
                    <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Đơn vị tổ chức</span>
                    <p class="text-xs font-black text-[#F0A19D] uppercase">${item.host}</p>
                </div>
                <h3 class="text-2xl font-['Playfair_Display'] font-black leading-tight group-hover:text-[#F0A19D] transition-colors">${item.title}</h3>
                ${isSuggested ? `<span class="mt-2 inline-block px-3 py-1 bg-gray-100 rounded-lg text-[10px] font-bold text-gray-500 uppercase">${item.tag}</span>` : ''}
            </div>

            <div class="mb-8 flex-1">
                ${!isSuggested ? `
                    <div class="bg-white/60 p-4 rounded-2xl border border-white/50">
                        <div class="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 text-gray-500">
                            <span>Tiến độ</span>
                            <span class="text-[#F0A19D]">${item.progress}%</span>
                        </div>
                        <div class="w-full bg-[#F6E7D8] h-2 rounded-full overflow-hidden shadow-inner border border-black/5">
                            <div class="bg-[#F0A19D] h-full transition-all duration-1000 ease-out" style="width: ${item.progress}%"></div>
                        </div>
                    </div>
                ` : ''}
            </div>

            <button onclick="openModal('${item.id}', '${type}')" class="w-full py-4 bg-white/40 hover:bg-[#F0A19D] hover:text-white text-gray-700 font-bold rounded-2xl transition-all border border-black/5 active:scale-95">
                Xem chi tiết
            </button>
        </div>
    `;
}

function renderAll() {
    const completedContainer = document.getElementById('completed-section');
    const ongoingContainer = document.getElementById('ongoing-section');
    const suggestedContainer = document.getElementById('suggested-section');

    completedContainer.innerHTML = completedCompetitions.map(item => renderCard(item, 'completed')).join('');
    ongoingContainer.innerHTML = ongoingCompetitions.map(item => renderCard(item, 'ongoing')).join('');

    // Suggested logic based on MBTI
    const mbti = localStorage.getItem('mbti_result') || 'random';
    let suggestedToRender = [];

    if (mbti === 'random') {
        suggestedToRender = suggestedCompetitions.slice(0, 3);
    } else {
        const types = mbti.match(/.{1,2}/g) || []; // e.g. ["NF", "SJ"]
        suggestedToRender = suggestedCompetitions.filter(item =>
            item.category.some(cat => types.includes(cat))
        ).slice(0, 3);

        // Fallback if no match
        if (suggestedToRender.length === 0) suggestedToRender = suggestedCompetitions.slice(0, 3);
    }

    suggestedContainer.innerHTML = suggestedToRender.map(item => renderCard(item, 'suggested')).join('');

    // Refresh Lucide Icons
    lucide.createIcons();
}

// 3. MODAL LOGIC

window.openModal = function (id, type) {
    const allItems = [...completedCompetitions, ...ongoingCompetitions, ...suggestedCompetitions];
    const item = allItems.find(i => i.id === id);
    if (!item) return;

    const modalContainer = document.getElementById('modal-container');
    const modalContent = document.getElementById('modal-content');

    let buttonsHTML = '';
    if (type === 'completed') {
        buttonsHTML = `
            <div class="flex gap-4">
                <button class="flex-1 py-4 bg-[#F0A19D] text-white font-black rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">Certificates</button>
                <button class="flex-1 py-4 bg-white border-2 border-[#F0A19D] text-[#F0A19D] font-black rounded-2xl hover:bg-[#F0A19D]/5 transition-all active:scale-95">Ranking</button>
            </div>
        `;
    } else if (type === 'ongoing') {
        buttonsHTML = `
            <div class="flex gap-4">
                <button class="flex-1 py-4 bg-[#F0A19D] text-white font-black rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">Tiếp tục</button>
                <button class="flex-1 py-4 bg-white border-2 border-[#F0A19D] text-[#F0A19D] font-black rounded-2xl hover:bg-[#F0A19D]/5 transition-all active:scale-95">Ranking</button>
            </div>
        `;
    } else {
        buttonsHTML = `
            <button class="w-full py-4 bg-[#F0A19D] text-white font-black rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">Tham gia ngay</button>
        `;
    }

    modalContent.innerHTML = `
        <div class="md:flex gap-8 items-start">
            <div class="w-24 h-24 rounded-3xl bg-[#F0A19D]/10 flex items-center justify-center text-[#F0A19D] mb-6 md:mb-0">
                <i data-lucide="trophy" class="w-12 h-12"></i>
            </div>
            <div class="flex-1">
                <h2 class="text-4xl font-['Playfair_Display'] font-black leading-tight mb-2">${item.title}</h2>
                <div class="flex items-center gap-2 text-gray-500 text-sm font-bold uppercase tracking-widest">
                    <span>${item.host}</span>
                    ${item.ranking ? `<span class="px-2 py-0.5 bg-green-100 text-green-600 rounded-md">${item.ranking}</span>` : ''}
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section class="space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-[#F0A19D] text-white flex items-center justify-center font-black text-xs">01</div>
                    <h4 class="text-sm font-black text-gray-900 uppercase tracking-widest">Mô tả cuộc thi</h4>
                </div>
                <div class="bg-gray-50 p-6 rounded-[2rem] border-2 border-dashed border-gray-100 italic text-gray-600 font-medium">
                    ${item.details}
                </div>
            </section>

            <section class="space-y-6">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-[#8DB6A0] text-white flex items-center justify-center font-black text-xs">02</div>
                    <h4 class="text-sm font-black text-gray-900 uppercase tracking-widest">Lộ trình chi tiết</h4>
                </div>
                <div class="relative pl-8 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                    ${item.roadmap.map(step => `
                        <div class="relative">
                            <div class="absolute -left-[31px] top-1 w-6 h-6 rounded-full border-4 border-white z-10 shadow-sm ${step.status === 'completed' ? 'bg-[#F0A19D]' :
            step.status === 'active' ? 'bg-[#8DB6A0] animate-pulse' : 'bg-gray-200'
        }"></div>
                            <div class="bg-gray-50/50 p-4 rounded-2xl border border-gray-50">
                                <h5 class="font-black text-gray-800 text-sm mb-1">${step.title}</h5>
                                <p class="text-[10px] text-gray-500 font-medium">${step.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>

        <div class="pt-8 sticky bottom-0 bg-white/20 backdrop-blur-sm pb-2">
            ${buttonsHTML}
        </div>
    `;

    modalContainer.classList.remove('hidden');
    lucide.createIcons();
};

window.closeModal = function () {
    document.getElementById('modal-container').classList.add('hidden');
};

// 4. INITIALIZATION
document.addEventListener('DOMContentLoaded', renderAll);
