export interface CareerSalary {
    entry: string;
    midLevel: string;
    senior: string;
}

export interface CareerRoadmapStep {
    step: string;
    title: string;
    description: string;
}

export interface CareerDetail {
    id: string; // Map with the id from CAREER_DATA in CareerExploration.tsx
    name: string;
    overview: string;
    salaryBreakdown: CareerSalary;
    responsibilities: string[];
    requirements: string[];
    skills: string[];
    roadmap: CareerRoadmapStep[];
    companies: string[];
    relatedCareers: string[];
}

export const CAREER_DETAILS: Record<string, CareerDetail> = {
    // Kinh tế – Quản lý
    "1-1": {
        id: "1-1",
        name: "Quản trị doanh nghiệp",
        overview: "Vai trò nòng cốt trong việc điều hành, định hướng và hoạch định chiến lược phát triển cho toàn bộ tổ chức. Người làm Quản trị doanh nghiệp cần có cái nhìn tổng quan về mọi phòng ban từ Nhân sự, Tài chính đến Marketing.",
        salaryBreakdown: {
            entry: "10 - 15 triệu/tháng",
            midLevel: "20 - 50 triệu/tháng",
            senior: "50 - 150+ triệu/tháng (Tùy quy mô công ty)"
        },
        responsibilities: [
            "Xây dựng và thực thi các chiến lược kinh doanh ngắn hạn và dài hạn.",
            "Quản trị và phân bổ nguồn lực (nhân sự, tài chính, công nghệ).",
            "Đánh giá rủi ro và điều chỉnh kế hoạch để thích ứng với thị trường.",
            "Xây dựng văn hóa doanh nghiệp và duy trì mối quan hệ với các đối tác lớn."
        ],
        requirements: [
            "Bằng Cử nhân/Thạc sĩ Quản trị Kinh doanh (MBA) hoặc các ngành liên quan.",
            "Tư duy hệ thống và khả năng phân tích dữ liệu vĩ mô.",
            "Kỹ năng lãnh đạo, giải quyết vấn đề và ra quyết định dưới áp lực cao."
        ],
        skills: ["Lãnh đạo", "Tư duy chiến lược", "Quản trị rủi ro", "Đàm phán", "Tài chính doanh nghiệp"],
        roadmap: [
            { step: "Năm 1-2", title: "Management Trainee / Executive", description: "Làm quen với các phòng ban, học hỏi quy trình vận hành thực tế." },
            { step: "Năm 3-5", title: "Trưởng nhóm / Quản lý cấp trung", description: "Bắt đầu dẫn dắt một đội ngũ nhỏ, chịu trách nhiệm KPI cụ thể." },
            { step: "Năm 5-8", title: "Giám đốc chức năng (C-level)", description: "Hoạch định chiến lược cho toàn bộ một mảng (Ví dụ: CMO, CFO, COO)." },
            { step: "Năm 10+", title: "CEO / Founder", description: "Điều hành toàn bộ doanh nghiệp hoặc khởi nghiệp riêng." }
        ],
        companies: ["MNCs (Unilever, P&G)", "Tập đoàn công nghệ (FPT, VNG)", "Các Startup kỳ lân"],
        relatedCareers: ["Quản lý dự án", "Tư vấn chiến lược", "Chuyên viên vận hành"]
    },

    "2-1": {
        id: "2-1",
        name: "Digital Marketing",
        overview: "Cầu nối thiết yếu giữa thương hiệu và khách hàng trong kỷ nguyên số. Công việc đòi hỏi sự nhạy bén với các xu hướng trên mạng xã hội và khả năng đọc hiểu dữ liệu (Data-driven) để tối ưu hóa quảng cáo.",
        salaryBreakdown: {
            entry: "8 - 12 triệu/tháng",
            midLevel: "15 - 30 triệu/tháng",
            senior: "35 - 70+ triệu/tháng"
        },
        responsibilities: [
            "Lập kế hoạch và triển khai các chiến dịch quảng cáo trên Facebook, Google, Tiktok...",
            "Phân tích dữ liệu người dùng để tối ưu hóa tỷ lệ chuyển đổi (CRO).",
            "Phối hợp cùng đội ngũ Content và Design để tạo ra các thông điệp truyền thông hấp dẫn.",
            "Theo dõi ngân sách báo cáo hiệu suất (ROI) định kỳ."
        ],
        requirements: [
            "Am hiểu sâu sắc về các nền tảng kỹ thuật số và thuật toán quảng cáo.",
            "Khả năng sáng tạo kết hợp với tư duy phân tích số liệu logic.",
            "Kỹ năng sử dụng các công cụ tracking như Google Analytics, Tag Manager."
        ],
        skills: ["Performance Marketing", "SEO/SEM", "Phân tích dữ liệu", "Sáng tạo nội dung", "Quản lý ngân sách"],
        roadmap: [
            { step: "Năm 1-2", title: "Digital Marketing Executive", description: "Thực thi các chiến dịch quảng cáo lẻ, học cách sử dụng công cụ và thiết lập tracking." },
            { step: "Năm 3-4", title: "Digital Specialist / Leader", description: "Tự chủ việc lên kế hoạch đa kênh (Omnichannel), quản lý ngân sách lớn." },
            { step: "Năm 5-7", title: "Digital Marketing Manager", description: "Quản lý toàn bộ team Digital, xây dựng chiến lược số cho thương hiệu." },
            { step: "Năm 8+", title: "CMO (Chief Marketing Officer)", description: "Giám đốc Marketing điều hành mọi mặt truyền thông của doanh nghiệp." }
        ],
        companies: ["Các Agency truyền thông (Ogilvy, Dentsu)", "Doanh nghiệp thương mại điện tử (Shopee, Tiki)", "Các nhãn hàng FMCG"],
        relatedCareers: ["SEO/SEM Specialist", "Content Creator", "Quản lý thương hiệu"]
    },

    "5-1": {
        id: "5-1",
        name: "Lập trình viên Front-end / Back-end",
        overview: "Người tạo ra các sản phẩm công nghệ (website, phần mềm) từ những dòng code. Frontend tập trung vào giao diện và trải nghiệm người dùng, trong khi Backend xử lý logic và cơ sở dữ liệu đằng sau.",
        salaryBreakdown: {
            entry: "10 - 20 triệu/tháng",
            midLevel: "25 - 50 triệu/tháng",
            senior: "60 - 100+ triệu/tháng"
        },
        responsibilities: [
            "Viết mã nguồn sạch, tối ưu hóa và có khả năng bảo trì cao.",
            "Thiết kế kiến trúc hệ thống, API và cơ sở dữ liệu (Backend).",
            "Phối hợp với UI/UX Designer để xây dựng giao diện tương tác (Frontend).",
            "Sửa lỗi (Debug) và cải thiện hiệu năng (Performance Tuning) cho ứng dụng."
        ],
        requirements: [
            "Bằng cấp về Khoa học Máy tính hoặc các chứng chỉ lập trình tư đương.",
            "Nắm vững các ngôn ngữ như JavaScript/TypeScript (Frontend) hoặc Java, Python, Node.js (Backend).",
            "Tư duy logic tốt, khả năng tự học công nghệ mới liên tục."
        ],
        skills: ["Coding", "Giải thuật", "Thiết kế hệ thống", "Làm việc nhóm (Agile/Scrum)", "Gỡ lỗi"],
        roadmap: [
            { step: "Năm 1-2", title: "Junior Developer", description: "Code các tính năng nhỏ theo spec có sẵn, học hỏi quy trình làm việc nhóm." },
            { step: "Năm 3-5", title: "Middle/Senior Developer", description: "Đảm nhận các module phức tạp, bắt đầu hướng dẫn các bạn Junior." },
            { step: "Năm 6-8", title: "Tech Lead / Solution Architect", description: "Thiết kế tổng thể hệ thống, lựa chọn công nghệ và dẫn dắt đội ngũ kỹ thuật." },
            { step: "Năm 10+", title: "CTO (Chief Technology Officer)", description: "Giám đốc công nghệ định hướng chiến lược kỹ thuật cho doanh nghiệp." }
        ],
        companies: ["Tập đoàn công nghệ (VNG, FPT, Viettel)", "Kỳ lân công nghệ (VNPAY, Momo)", "Các công ty Product/Outsource nước ngoài"],
        relatedCareers: ["Kỹ sư AI", "Phân tích dữ liệu", "Chuyên gia An ninh mạng"]
    },

    // Bạn có thể tiếp tục thêm dữ liệu cho hơn 25 ngành nghề khác tại đây...
};
