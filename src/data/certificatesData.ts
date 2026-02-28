export type Field = "IT" | "Kinh tế" | "Truyền thông";

export type RoadmapStep = {
    step: string;
    title: string;
    date?: string;
    status: "completed" | "active" | "upcoming";
    desc: string;
    image?: string;
    xp?: number;
};

export type Cert = {
    id: number;
    title: string;
    field: Field;
    issuer: string;
    image: string;
    date?: string;
    hot?: boolean;
    value?: string;
    xp?: number;
    roadmap?: RoadmapStep[];
    lessons?: number;
    duration?: string;
};

export type Competition = {
    id: number | string;
    title: string;
    status: string; // 'completed', 'active', 'suggested'
    host: string;
    image: string;
    progress: number;
    details: string;
    ranking?: string;
    tag?: string;
    category?: string[];
    roadmap: RoadmapStep[];
    xp?: number;
};

export const CARD_COLORS = [
    "bg-blue-50",
    "bg-green-50",
    "bg-purple-50",
    "bg-amber-50",
    "bg-rose-50",
    "bg-cyan-50",
    "bg-indigo-50",
];

export const MOCK_ACHIEVED: Cert[] = [];

export const MOCK_SUGGESTED: Record<string, Cert[]> = {
    NF: [
        {
            id: 101,
            title: "Content Marketing Certification",
            field: "Truyền thông",
            issuer: "HubSpot Academy",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66646?auto=format&fit=crop&q=80&w=600",
            value: "Tăng khả năng sáng tạo nội dung chạm đến cảm xúc khách hàng.",
            xp: 450,
            roadmap: [
                { step: "01", title: "Storytelling Basics", status: "active", desc: "Học cách xây dựng cấu trúc câu chuyện thu hút.", xp: 100, image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=300" },
                { step: "02", title: "Content Strategy", status: "upcoming", desc: "Lập kế hoạch phân phối nội dung đa kênh.", xp: 150, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300" },
                { step: "03", title: "Final Project", status: "upcoming", desc: "Triển khai một chiến dịch nội dung thực tế.", xp: 200, image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&q=80&w=300" },
            ]
        },
        { id: 102, title: "Social Media Strategy", field: "Truyền thông", issuer: "LinkedIn Learning", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e112?auto=format&fit=crop&q=80&w=600", value: "Xây dựng thương hiệu cá nhân và cộng đồng bền vững.", xp: 350 },
        { id: 103, title: "Creative Writing Mastery", field: "Truyền thông", issuer: "MasterClass", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600", value: "Đánh thức tiềm năng kể chuyện và tư duy sáng tạo vô hạn.", xp: 600 },
    ],
    NT: [
        {
            id: 201,
            title: "Python for Data Science",
            field: "IT",
            issuer: "IBM",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c4?auto=format&fit=crop&q=80&w=600",
            hot: true,
            value: "Công cụ đắc lực cho phân tích logic và xử lý dữ liệu lớn.",
            xp: 900,
            roadmap: [
                { step: "01", title: "Python Fundamentals", status: "active", desc: "Nắm vững cú pháp và cấu trúc dữ liệu cơ bản.", xp: 200, image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c4?auto=format&fit=crop&q=80&w=300" },
                { step: "02", title: "Pandas & Numpy", status: "upcoming", desc: "Xử lý và tính toán trên các tập dữ liệu lớn.", xp: 300, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300" },
                { step: "03", title: "Data Visualization", status: "upcoming", desc: "Trực quan hóa dữ liệu bằng Matplotlib và Seaborn.", xp: 400, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300" },
            ]
        },
        { id: 202, title: "AWS Cloud Practitioner", field: "IT", issuer: "Amazon Web Services", image: "https://images.unsplash.com/photo-1451187580459-43490279c0f9?auto=format&fit=crop&q=80&w=600", value: "Hiểu sâu về hạ tầng đám mây hiện đại nhất thế giới.", xp: 750 },
        { id: 203, title: "Machine Learning Concepts", field: "IT", issuer: "Stanford Online", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=600", value: "Nền tảng về thuật toán học máy và trí tuệ nhân tạo.", xp: 1100 },
    ],
    SJ: [
        { id: 301, title: "Financial Accounting Basics", field: "Kinh tế", issuer: "Harvard Business", image: "https://images.unsplash.com/photo-1454165833767-027ffea1e45a?auto=format&fit=crop&q=80&w=600", value: "Xây dựng nền tảng tài chính vững chắc và minh bạch.", xp: 600 },
        { id: 302, title: "Supply Chain Management", field: "Kinh tế", issuer: "Coursera", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310c?auto=format&fit=crop&q=80&w=600", value: "Quy trình vận hành tối ưu cho các doanh nghiệp quy mô lớn.", xp: 550 },
        { id: 303, title: "Project Management Professional", field: "Kinh tế", issuer: "PMI", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600", value: "Bộ kỹ năng quản trị dự án chuẩn quốc tế.", xp: 950 },
    ],
    SP: [
        {
            id: 401,
            title: "UX/UI Design Fundamentals",
            field: "IT",
            issuer: "Google",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600",
            value: "Sáng tạo trải nghiệm người dùng linh hoạt và bắt mắt.",
            xp: 500,
            roadmap: [
                { step: "01", title: "User Research", status: "active", desc: "Phỏng vấn người dùng và xây dựng persona.", xp: 150, image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=300" },
                { step: "02", title: "Wireframing", status: "upcoming", desc: "Thiết kế khung xương cho ứng dụng di động.", xp: 150, image: "https://images.unsplash.com/photo-1541462608141-ad511a7ee596?auto=format&fit=crop&q=80&w=300" },
                { step: "03", title: "Prototyping", status: "upcoming", desc: "Tạo bản mẫu tương tác thực tế.", xp: 200, image: "https://images.unsplash.com/photo-1581291417004-6e7411a842f1?auto=format&fit=crop&q=80&w=300" },
            ]
        },
        { id: 402, title: "Event Planning Excellence", field: "Truyền thông", issuer: "Chạm Nghề Academy", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61621?auto=format&fit=crop&q=80&w=600", value: "Thực thi các sự kiện bùng nổ và đầy tính ngẫu hứng.", xp: 400 },
        { id: 403, title: "Advanced Stock Trading", field: "Kinh tế", issuer: "Trading Academy", image: "https://images.unsplash.com/photo-1611974714023-3c220c38863f?auto=format&fit=crop&q=80&w=600", value: "Nắm bắt quy luật thị trường và tối ưu hóa lợi nhuận thực chiến.", xp: 700 },
    ],
    default: [
        {
            id: 501,
            title: "Critical Thinking",
            field: "Kinh tế",
            issuer: "University of Sydney",
            image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
            value: "Kỹ năng nền tảng cho mọi ngành nghề trong tương lai.",
            xp: 300,
            roadmap: [
                { step: "01", title: "Analysis Skills", status: "active", desc: "Phân biệt sự thật và ý kiến chủ quan.", xp: 100, image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=300" },
                { step: "02", title: "Bias Detection", status: "upcoming", desc: "Nhận diện các định kiến trong tư duy.", xp: 100, image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=300" },
                { step: "03", title: "Decision Making", status: "upcoming", desc: "Quy trình đưa ra quyết định dựa trên bằng chứng.", xp: 100, image: "https://images.unsplash.com/photo-1454165833767-027ffea1e45a?auto=format&fit=crop&q=80&w=300" },
            ]
        },
        { id: 502, title: "AI Basics for Everyone", field: "IT", issuer: "IBM", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80", value: "Hiểu về AI để không bị tụt hậu trong cuộc cách mạng 4.0.", xp: 200 },
        {
            id: 503,
            title: "Google Data Analytics Professional",
            field: "IT",
            issuer: "Google / Coursera",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
            hot: true,
            value: "Chứng chỉ này chứng minh khả năng phân tích dữ liệu chuyên nghiệp.",
            xp: 1200
        },
        {
            id: 504,
            title: "Digital Marketing Specialization",
            field: "Truyền thông",
            issuer: "Hubspot / Meta",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
            value: "Nắm vững các công cụ quảng cáo số.",
            xp: 800
        }
    ]
};

export const MOCK_COURSES_ACHIEVED: Cert[] = [];

export const MOCK_COURSES_SUGGESTED: Record<string, Cert[]> = {
    default: [
        {
            id: 951,
            title: "Generative AI Masterclass",
            field: "IT",
            issuer: "Microsoft / Chạm Nghề",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
            value: "Làm chủ các công cụ AI tạo nội dung và tự động hóa quy trình.",
            xp: 1800,
            roadmap: [
                { step: "01", title: "Prompt Engineering", status: "active", desc: "Học cách viết prompt tối ưu để điều khiển AI.", xp: 300, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=300" },
                { step: "02", title: "AI Image Generation", status: "upcoming", desc: "Sử dụng Midjourney và DALL-E cho thiết kế.", xp: 500, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300" },
                { step: "03", title: "Automating Workflow", status: "upcoming", desc: "Tích hợp AI vào các tác vụ công việc hàng ngày.", xp: 1000, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300" }
            ]
        },
        {
            id: 952,
            title: "Emotional Intelligence at Work",
            field: "Truyền thông",
            issuer: "LinkedIn Learning",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
            value: "Phát triển tư duy đồng cảm và khả năng quản trị cảm xúc đỉnh cao.",
            xp: 1200
        },
        {
            id: 953,
            title: "Fullstack Web Development",
            field: "IT",
            issuer: "Udemy / Chạm Nghề",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
            value: "Chương trình chuyên sâu về React, Node.js và SQL.",
            xp: 2500
        },
        {
            id: 954,
            title: "Business Communication Expert",
            field: "Kinh tế",
            issuer: "Coursera",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600",
            value: "Nâng tầm kỹ năng thuyết trình và đàm phán.",
            xp: 1500
        }
    ]
};

export const MOCK_COMPETITIONS: Competition[] = [
    // TẤT CẢ ĐỀ XUẤT (Suggested)
    {
        id: "o1",
        title: "Green Marketing Awards",
        status: "suggested",
        host: "Eco Connect",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
        progress: 0,
        tag: "Truyền thông",
        details: "Tìm kiếm các chiến dịch Marketing sáng tạo thúc đẩy lối sống bền vững và bảo vệ môi trường.",
        xp: 2850,
        roadmap: [
            { step: "01", title: "Nộp Concept", date: "01/03", status: "upcoming", desc: "Ý tưởng chủ đạo cho chiến dịch truyền thông xanh." },
            { step: "02", title: "Phát Triển", date: "10/03 - 20/03", status: "upcoming", desc: "Xây dựng chi tiết các kênh và thông điệp truyền tải." },
            { step: "03", title: "Chung Cuộc", date: "30/03", status: "upcoming", desc: "Vinh danh các chiến dịch có sức lan tỏa nhất." },
        ]
    },
    {
        id: "o2",
        title: "Supply Chain Excellence",
        status: "suggested",
        host: "Logistics Hub",
        image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&q=80&w=800",
        progress: 0,
        tag: "Kinh tế",
        details: "Tối ưu hóa chuỗi cung ứng thực tế cho doanh nghiệp xuất khẩu.",
        xp: 3200,
        roadmap: [
            { step: "01", title: "Vòng Sơ Tuyển", date: "15/02", status: "upcoming", desc: "Kiểm tra kiến thức Logistics cơ bản." },
            { step: "02", title: "Phân Tích Cấu Trúc", date: "20/02", status: "upcoming", desc: "Xây dựng mô hình chuỗi hiện tại." },
            { step: "03", title: "Đề Xuất Tối Ưu", date: "25/02", status: "upcoming", desc: "Thiết kế hệ thống vận hành mới đột phá." },
            { step: "04", title: "Pitching", date: "05/03", status: "upcoming", desc: "Bảo vệ giải pháp tối ưu trước hội đồng giám khảo." },
        ]
    },
    {
        id: "o3",
        title: "Hackathon: Smart Edu",
        status: "suggested",
        host: "EdTech Vietnam",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        progress: 0,
        tag: "Công nghệ thông tin",
        details: "Kiến tạo các giải pháp công nghệ giáo dục đột phá cho tương lai giáo dục Việt Nam.",
        xp: 4800,
        roadmap: [
            { step: "01", title: "Thành Lập Đội", date: "20/02", status: "upcoming", desc: "Tìm kiếm cộng sự và đăng ký ý tưởng ban đầu." },
            { step: "02", title: "Coding Phase", date: "01/03 - 03/03", status: "upcoming", desc: "48h phát triển sản phẩm demo hoàn thiện." },
            { step: "03", title: "Final Pitch", date: "10/03", status: "upcoming", desc: "Thuyết trình trước các quỹ đầu tư EdTech hàng đầu." },
        ]
    },
    {
        id: "c1",
        title: "Startup Challenge 2026",
        status: "suggested",
        host: "FTU Innovation Club",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
        progress: 0,
        tag: "Kinh tế",
        details: "Cuộc thi giải quyết các bài toán vận hành thực tế của các startup công nghệ.",
        xp: 10000,
        roadmap: [
            { step: "01", title: "Vòng Đơn", date: "01/02", status: "upcoming", desc: "Nộp ý tưởng kinh doanh sơ bộ và hồ sơ năng lực." },
            { step: "02", title: "Vòng Loại", date: "10/02", status: "upcoming", desc: "Thuyết trình mô hình kinh doanh chi tiết." },
            { step: "03", title: "Bán Kết", date: "15/02", status: "upcoming", desc: "Phát triển MVP và chạy thử nghiệm thực tế." },
            { step: "04", title: "Chung Kết", date: "20/02", status: "upcoming", desc: "Pitching trực tiếp tại NIC và giành ngôi vị cao nhất." },
        ]
    },
    {
        id: "c2",
        title: "Financial Planning Duel",
        status: "suggested",
        host: "FinEdu League",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
        progress: 0,
        tag: "Kinh tế",
        details: "Đối đầu trực tiếp trong việc xây dựng kế hoạch tài chính cho các gia đình trẻ Việt Nam.",
        xp: 4500,
        roadmap: [
            { step: "01", title: "Khai Mạc", date: "01/12/2025", status: "upcoming", desc: "Phổ biến luật chơi và công bố đề bài chính thức." },
            { step: "02", title: "Lập Kế Hoạch", date: "05/12/2025", status: "upcoming", desc: "Xây dựng chiến lược phân bỏ tài sản và quản trị rủi ro." },
            { step: "03", title: "Thuyết Trình", date: "10/12/2025", status: "upcoming", desc: "Bảo vệ phương án trước hội đồng tài chính chuyên nghiệp." },
        ]
    },
    {
        id: "c3",
        title: "Case Study Marathon",
        status: "suggested",
        host: "Hanoi Business School",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
        progress: 0,
        tag: "Kinh tế",
        details: "Thử thách giải quyết 5 case study kinh điển trong vòng 24h liên tục.",
        xp: 3500,
        roadmap: [
            { step: "01", title: "Vòng Sơ Loại", date: "10/01", status: "upcoming", desc: "Bài test tư duy logic và phân tích dữ liệu cơ bản." },
            { step: "02", title: "Vòng Marathon", date: "15/01", status: "upcoming", desc: "24h giải quyết tình huống kinh doanh đa ngành." },
            { step: "03", title: "Chung Kết", date: "20/01", status: "upcoming", desc: "Tranh biện và bảo vệ giải pháp trước các CEO tập đoàn." },
        ]
    },
    {
        id: "s1",
        title: "Cyber Security Duel",
        status: "suggested",
        host: "VSEC Association",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        tag: "Công nghệ thông tin",
        category: ["NT", "SP"],
        progress: 0,
        details: "Đấu trường an ninh mạng đỉnh cao dành cho các tài năng Capture The Flag. Thử thách kỹ năng bảo mật và tấn công mạng thực chiến.",
        xp: 1500,
        roadmap: [
            { step: "01", title: "Qualifiers", date: "05/04", status: "upcoming", desc: "Bài thi CTF trực tuyến để lựa chọn các đội xuất sắc nhất." },
            { step: "02", title: "Final Battle", date: "15/04", status: "upcoming", desc: "Đấu đối kháng trực tiếp (Attack & Defense) tại vòng chung kết." },
        ]
    },
    {
        id: "s2",
        title: "Creator Fest 2026",
        status: "suggested",
        host: "Media Max",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
        tag: "Truyền thông",
        category: ["NF", "SP"],
        progress: 0,
        details: "Cơ hội cho các nhà sáng tạo nội dung thể hiện bản sắc qua video ngắn. Tỏa sáng và lan tỏa thông điệp tích cực đến cộng đồng.",
        xp: 2000,
        roadmap: [
            { step: "01", title: "Vòng Sáng Tạo", date: "10/05", status: "upcoming", desc: "Sản xuất video theo chủ đề yêu cầu từ ban tổ chức." },
            { step: "02", title: "Vòng Lan Tỏa", date: "20/05", status: "upcoming", desc: "Đo lường mức độ tương tác và ảnh hưởng thực tế từ cộng đồng." },
            { step: "03", title: "Gala Night", date: "30/05", status: "upcoming", desc: "Vinh danh những nhà sáng tạo xuất sắc nhất đêm chung khảo." },
        ]
    },
    {
        id: "s3",
        title: "Global Trade Master",
        status: "suggested",
        host: "World Trade Center",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
        tag: "Kinh tế",
        category: ["SJ", "NT"],
        progress: 0,
        details: "Mô phỏng đàm phán thương mại quốc tế và quản trị rủi ro xuất nhập khẩu. Trải nghiệm môi trường kinh doanh toàn cầu thực thụ.",
        xp: 1800,
        roadmap: [
            { step: "01", title: "Training", date: "01/06", status: "upcoming", desc: "Huấn luyện chuyên sâu về kỹ năng đàm phán và luật thương mại quốc tế." },
            { step: "02", title: "Simulation", date: "10/06", status: "upcoming", desc: "Thực hiện mô phỏng các giao dịch thương mại với đối tác nước ngoài." },
            { step: "03", title: "Review", date: "20/06", status: "upcoming", desc: "Phân tích kết quả kinh doanh và các chiến lược quản trị rủi ro." },
        ]
    },
    {
        id: "s4",
        title: "UX/UI Design Challenge",
        status: "suggested",
        host: "Product Designers VN",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        tag: "Thiết kế",
        category: ["NF", "NT"],
        progress: 0,
        details: "Giải quyết các bài toán UX phức tạp cho ứng dụng siêu ứng dụng (Super App). Nâng tầm trải nghiệm người dùng bằng tư duy thiết kế đột phá.",
        xp: 2200,
        roadmap: [
            { step: "01", title: "Research", date: "15/07", status: "upcoming", desc: "Nghiên cứu sâu về hành vi và nhu cầu thực tế của người dùng." },
            { step: "02", title: "Ideation", date: "25/07", status: "upcoming", desc: "Thiết kế các giải pháp wireframe và prototype cho các tính năng mới." },
            { step: "03", title: "Testing", date: "05/08", status: "upcoming", desc: "Kiểm thử khả năng sử dụng và nhận phản hồi trực tiếp từ người dùng." },
        ]
    },
    {
        id: "s5",
        title: "AI Innovation Marathon",
        status: "suggested",
        host: "Future Tech Incubator",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        tag: "Công nghệ thông tin",
        category: ["NT"],
        progress: 0,
        details: "Thử thách phát triển các ứng dụng AI tạo sinh giải quyết nhu cầu đời sống thường nhật.",
        xp: 3500,
        roadmap: [
            { step: "01", title: "Idea Phase", date: "01/08", status: "upcoming", desc: "Xác định bài toán và phương án tiếp cận bằng công cụ AI." },
            { step: "02", title: "MVP Development", date: "15/08", status: "upcoming", desc: "Xây dựng bản mẫu ứng dụng hoạt động cơ bản." },
            { step: "03", title: "Pitch Day", date: "30/08", status: "upcoming", desc: "Trình diễn sản phẩm trước các chuyên gia AI hàng đầu." },
        ]
    }
];
