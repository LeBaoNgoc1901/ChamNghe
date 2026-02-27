// ===================================================
// CAREER DETAILS DATA
// 5 đại diện: 1 ngành / khối lớn
// ===================================================

export interface CareerDetail {
    id: string;
    name: string;

    // 1. Tổng quan
    overview: string;
    workEnvironment: string;

    // 2. Công việc cụ thể
    responsibilities: string[];

    // 3. Năng lực – Phẩm chất
    skills: string[];
    subjectStrengths: string[];
    mbtiMatch: string[];
    healthRequirements?: string;

    // 4. Con đường học tập
    educationPath: {
        majors: string[];
        examGroups: string[];
        studyAbroad?: string;
    };

    // 5. Cơ hội việc làm & xu hướng
    jobMarket: {
        employmentRate: string;
        competition: string;
        trend5to10years: string;
    };

    // 6. Thu nhập & thăng tiến
    salaryBreakdown: {
        entry: string;
        afterThreeToFiveYears: string;
        senior: string;
    };

    // 7. Ưu – Nhược điểm
    pros: string[];
    cons: string[];
    reasonsPeopleQuit: string;

    // Dữ liệu bổ sung
    requirements: string[];
}

export const CAREER_DETAILS: Record<string, CareerDetail> = {

    // ─────────────────────────────────────────────────────
    // Khối 1: Kinh tế – Quản lý
    // ─────────────────────────────────────────────────────
    "1-1": {
        id: "1-1",
        name: "Quản trị doanh nghiệp",

        overview:
            "Quản trị doanh nghiệp là hoạt động điều hành tổng thể một tổ chức, bao gồm chiến lược, nhân sự, tài chính và vận hành. Người làm lĩnh vực này đảm bảo doanh nghiệp phát triển bền vững và đạt mục tiêu kinh doanh dài hạn.",
        workEnvironment:
            "Làm việc chủ yếu tại văn phòng, phòng họp chiến lược hoặc môi trường doanh nghiệp lớn. Thường xuyên tương tác với nhiều phòng ban và đối tác bên ngoài.",

        responsibilities: [
            "Xây dựng và triển khai chiến lược kinh doanh.",
            "Quản lý nguồn lực: tài chính, nhân sự và công nghệ.",
            "Theo dõi hiệu suất hoạt động của doanh nghiệp.",
            "Phối hợp giữa các phòng ban để đạt mục tiêu chung.",
            "Báo cáo kết quả hoạt động cho lãnh đạo hoặc cổ đông.",
        ],
        skills: [
            "Lãnh đạo",
            "Tư duy chiến lược",
            "Phân tích dữ liệu kinh doanh",
            "Quản lý rủi ro",
            "Đàm phán",
            "Ra quyết định"
        ],
        subjectStrengths: ["Toán", "Kinh tế", "Tiếng Anh"],
        mbtiMatch: ["ENTJ", "ESTJ", "INTJ", "ENTP"],
        healthRequirements:
            "Cần khả năng chịu áp lực cao và làm việc với cường độ lớn.",

        educationPath: {
            majors: [
                "Quản trị Kinh doanh",
                "Kinh tế học",
                "Tài chính – Ngân hàng",
                "Quản lý công nghiệp"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)",
                "D01 (Toán, Văn, Anh)"
            ],
            studyAbroad:
                "Các chương trình MBA tại Mỹ, Anh, Singapore hoặc Úc thường rất mạnh về quản trị doanh nghiệp.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao ở các vị trí junior và quản trị viên tập sự.",
            competition:
                "Cao ở cấp quản lý vì yêu cầu kinh nghiệm thực tế.",
            trend5to10years:
                "Quản trị gắn với chuyển đổi số, phân tích dữ liệu và quản trị bền vững sẽ trở nên quan trọng.",
        },

        salaryBreakdown: {
            entry: "10 – 18 triệu/tháng",
            afterThreeToFiveYears: "25 – 60 triệu/tháng",
            senior: "80 – 300+ triệu/tháng",
        },

        pros: [
            "Cơ hội thăng tiến cao.",
            "Ảnh hưởng lớn đến hoạt động doanh nghiệp.",
            "Thu nhập tốt khi đạt cấp quản lý.",
            "Mở rộng mạng lưới quan hệ."
        ],
        cons: [
            "Áp lực trách nhiệm lớn.",
            "Cạnh tranh cao.",
            "Thời gian làm việc dài.",
            "Cần nhiều kinh nghiệm mới thăng tiến."
        ],
        reasonsPeopleQuit:
            "Áp lực quản lý, khối lượng công việc lớn hoặc chuyển sang khởi nghiệp.",

        requirements: [
            "Bằng cử nhân ngành liên quan.",
            "Kỹ năng lãnh đạo.",
            "Tư duy chiến lược và phân tích."
        ],
    },
    "1-2": {
        id: "1-2",
        name: "Quản trị nhân sự (HR)",

        overview:
            "Quản trị nhân sự tập trung vào việc tuyển dụng, phát triển và giữ chân nhân tài trong doanh nghiệp. Đây là bộ phận đảm bảo tổ chức có đội ngũ phù hợp để đạt mục tiêu.",
        workEnvironment:
            "Làm việc trong phòng nhân sự của doanh nghiệp hoặc công ty tư vấn nhân lực.",

        responsibilities: [
            "Tuyển dụng và phỏng vấn ứng viên.",
            "Xây dựng chính sách nhân sự và phúc lợi.",
            "Đào tạo và phát triển nhân viên.",
            "Giải quyết xung đột nội bộ.",
            "Quản lý hồ sơ và dữ liệu nhân sự."
        ],
        skills: [
            "Giao tiếp",
            "Đánh giá con người",
            "Đàm phán",
            "Quản lý xung đột",
            "Tổ chức",
            "Phân tích dữ liệu nhân sự"
        ],
        subjectStrengths: ["Ngữ văn", "Tâm lý học", "Kinh tế", "Tiếng Anh"],
        mbtiMatch: ["ENFJ", "ESFJ", "ENFP", "ISFJ"],
        healthRequirements:
            "Không yêu cầu đặc biệt nhưng cần khả năng giao tiếp tốt và xử lý áp lực con người.",

        educationPath: {
            majors: [
                "Quản trị nhân lực",
                "Quản trị kinh doanh",
                "Tâm lý học",
                "Luật lao động"
            ],
            examGroups: [
                "D01 (Toán, Văn, Anh)",
                "A01 (Toán, Lý, Anh)",
                "C00 (Văn, Sử, Địa)"
            ],
            studyAbroad:
                "Các chương trình HRM tại Anh, Úc và Singapore khá phát triển.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu ổn định vì doanh nghiệp nào cũng cần HR.",
            competition:
                "Trung bình, nhưng cạnh tranh cao ở các công ty lớn.",
            trend5to10years:
                "HR sẽ chuyển sang People Analytics và quản trị nhân sự bằng dữ liệu.",
        },

        salaryBreakdown: {
            entry: "8 – 15 triệu/tháng",
            afterThreeToFiveYears: "18 – 40 triệu/tháng",
            senior: "50 – 120+ triệu/tháng",
        },

        pros: [
            "Hiểu sâu về con người và tổ chức.",
            "Cơ hội làm việc ở nhiều ngành khác nhau.",
            "Vai trò quan trọng trong văn hóa doanh nghiệp."
        ],
        cons: [
            "Xử lý nhiều vấn đề nhạy cảm.",
            "Áp lực khi tuyển dụng gấp.",
            "Đôi khi bị xem là bộ phận hỗ trợ."
        ],
        reasonsPeopleQuit:
            "Áp lực từ cả nhân viên và lãnh đạo, khối lượng công việc hành chính lớn.",

        requirements: [
            "Kiến thức về quản trị nhân lực.",
            "Kỹ năng giao tiếp và xử lý tình huống.",
            "Khả năng đánh giá và phát triển nhân tài."
        ],
    },
    "1-3": {
        id: "1-3",
        name: "Quản lý dự án",

        overview:
            "Quản lý dự án chịu trách nhiệm lập kế hoạch, điều phối và hoàn thành dự án đúng thời hạn, ngân sách và mục tiêu đề ra.",
        workEnvironment:
            "Làm việc trong doanh nghiệp công nghệ, xây dựng, marketing hoặc các công ty tư vấn.",

        responsibilities: [
            "Lập kế hoạch dự án.",
            "Phân công công việc cho nhóm.",
            "Theo dõi tiến độ và ngân sách.",
            "Quản lý rủi ro dự án.",
            "Báo cáo tiến độ với cấp trên."
        ],
        skills: [
            "Lập kế hoạch",
            "Quản lý thời gian",
            "Giao tiếp",
            "Phân tích rủi ro",
            "Lãnh đạo nhóm"
        ],
        subjectStrengths: ["Toán", "Tin học", "Kinh tế"],
        mbtiMatch: ["ENTJ", "ESTJ", "INTJ"],
        healthRequirements:
            "Cần khả năng làm việc dưới áp lực deadline.",

        educationPath: {
            majors: [
                "Quản trị kinh doanh",
                "Quản lý dự án",
                "Công nghệ thông tin",
                "Kỹ thuật công nghiệp"
            ],
            examGroups: [
                "A00",
                "A01",
                "D01"
            ],
            studyAbroad:
                "Chứng chỉ PMP hoặc các chương trình quản lý dự án quốc tế rất có giá trị.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao trong các ngành công nghệ và startup.",
            competition:
                "Trung bình đến cao tùy lĩnh vực.",
            trend5to10years:
                "Agile và quản lý dự án công nghệ sẽ phát triển mạnh.",
        },

        salaryBreakdown: {
            entry: "12 – 20 triệu/tháng",
            afterThreeToFiveYears: "30 – 70 triệu/tháng",
            senior: "80 – 200+ triệu/tháng",
        },

        pros: [
            "Công việc năng động.",
            "Cơ hội làm việc với nhiều lĩnh vực.",
            "Thu nhập tốt khi có kinh nghiệm."
        ],
        cons: [
            "Áp lực deadline.",
            "Phải xử lý nhiều vấn đề phát sinh.",
            "Trách nhiệm lớn với kết quả dự án."
        ],
        reasonsPeopleQuit:
            "Áp lực tiến độ dự án và quản lý nhiều bên liên quan.",

        requirements: [
            "Kỹ năng tổ chức công việc.",
            "Khả năng lãnh đạo nhóm.",
            "Hiểu quy trình dự án."
        ],
    },
    "1-4": {
        id: "1-4",
        name: "Chuyên viên phát triển kinh doanh (Business Development)",

        overview:
            "Business Development tập trung vào việc tìm kiếm cơ hội tăng trưởng mới cho doanh nghiệp thông qua khách hàng, thị trường hoặc đối tác.",
        workEnvironment:
            "Làm việc trong doanh nghiệp, startup hoặc công ty thương mại.",

        responsibilities: [
            "Tìm kiếm khách hàng và thị trường mới.",
            "Xây dựng quan hệ đối tác.",
            "Phân tích cơ hội kinh doanh.",
            "Đàm phán hợp đồng.",
            "Hỗ trợ chiến lược mở rộng doanh nghiệp."
        ],
        skills: [
            "Bán hàng",
            "Đàm phán",
            "Phân tích thị trường",
            "Networking",
            "Thuyết trình"
        ],
        subjectStrengths: ["Kinh tế", "Tiếng Anh", "Toán"],
        mbtiMatch: ["ENTP", "ENFP", "ENTJ"],
        healthRequirements:
            "Cần năng lượng cao vì di chuyển và gặp gỡ nhiều.",

        educationPath: {
            majors: [
                "Marketing",
                "Quản trị kinh doanh",
                "Kinh doanh quốc tế"
            ],
            examGroups: [
                "D01",
                "A01",
                "A00"
            ],
            studyAbroad:
                "Các chương trình kinh doanh quốc tế ở Mỹ, Anh và Singapore khá phù hợp.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao tại startup và doanh nghiệp đang mở rộng.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Kỹ năng phân tích dữ liệu khách hàng và growth strategy sẽ rất quan trọng.",
        },

        salaryBreakdown: {
            entry: "10 – 18 triệu/tháng + thưởng",
            afterThreeToFiveYears: "25 – 50 triệu/tháng + bonus",
            senior: "60 – 150+ triệu/tháng",
        },

        pros: [
            "Thu nhập tăng nhanh nhờ thưởng.",
            "Mở rộng quan hệ rộng.",
            "Cơ hội thăng tiến sang quản lý."
        ],
        cons: [
            "Áp lực doanh số.",
            "Cạnh tranh cao.",
            "Phải gặp nhiều khách hàng."
        ],
        reasonsPeopleQuit:
            "Áp lực KPI và doanh số kéo dài.",

        requirements: [
            "Kỹ năng giao tiếp tốt.",
            "Tư duy kinh doanh.",
            "Khả năng xây dựng mối quan hệ."
        ],
    },
    "1-5": {
        id: "1-5",
        name: "Chuyên viên vận hành (Operations)",

        overview:
            "Chuyên viên vận hành đảm bảo các quy trình nội bộ của doanh nghiệp hoạt động trơn tru, hiệu quả và tối ưu chi phí.",
        workEnvironment:
            "Làm việc tại văn phòng, kho vận, công ty công nghệ hoặc thương mại điện tử.",

        responsibilities: [
            "Theo dõi quy trình vận hành.",
            "Tối ưu hiệu suất làm việc.",
            "Phối hợp giữa các bộ phận.",
            "Giải quyết sự cố vận hành.",
            "Phân tích dữ liệu hoạt động."
        ],
        skills: [
            "Phân tích dữ liệu",
            "Quản lý quy trình",
            "Tổ chức công việc",
            "Giải quyết vấn đề",
            "Tư duy hệ thống"
        ],
        subjectStrengths: ["Toán", "Tin học", "Kinh tế"],
        mbtiMatch: ["ISTJ", "ESTJ", "INTJ"],
        healthRequirements:
            "Cần khả năng làm việc ổn định và tập trung cao.",

        educationPath: {
            majors: [
                "Quản trị kinh doanh",
                "Quản lý chuỗi cung ứng",
                "Kinh tế",
                "Hệ thống thông tin quản lý"
            ],
            examGroups: [
                "A00",
                "A01",
                "D01"
            ],
            studyAbroad:
                "Các chương trình Supply Chain hoặc Operations Management rất phù hợp.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao trong thương mại điện tử và logistics.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Automation và phân tích dữ liệu vận hành sẽ rất quan trọng.",
        },

        salaryBreakdown: {
            entry: "9 – 16 triệu/tháng",
            afterThreeToFiveYears: "20 – 45 triệu/tháng",
            senior: "50 – 120+ triệu/tháng",
        },

        pros: [
            "Ổn định.",
            "Nhu cầu tuyển dụng cao.",
            "Có thể chuyển sang quản lý."
        ],
        cons: [
            "Công việc nhiều quy trình.",
            "Ít sáng tạo hơn một số ngành khác.",
            "Áp lực hiệu suất."
        ],
        reasonsPeopleQuit:
            "Công việc lặp lại hoặc muốn chuyển sang vai trò chiến lược hơn.",

        requirements: [
            "Khả năng phân tích.",
            "Tư duy hệ thống.",
            "Kỹ năng quản lý quy trình."
        ],
    },
    "2-1": {
        id: "2-1",
        name: "Digital Marketing",

        overview:
            "Digital Marketing là lĩnh vực tiếp thị sản phẩm và dịch vụ thông qua các kênh số như mạng xã hội, công cụ tìm kiếm, email và quảng cáo trực tuyến. Mục tiêu là thu hút khách hàng, tăng nhận diện thương hiệu và thúc đẩy doanh thu.",
        workEnvironment:
            "Làm việc tại công ty marketing, doanh nghiệp, startup hoặc agency quảng cáo. Chủ yếu làm việc trên máy tính và các nền tảng quảng cáo trực tuyến.",

        responsibilities: [
            "Lập kế hoạch chiến dịch marketing online.",
            "Quản lý quảng cáo trên các nền tảng số.",
            "Phân tích dữ liệu và hiệu quả chiến dịch.",
            "Tối ưu chi phí quảng cáo.",
            "Phối hợp với team content và thiết kế."
        ],
        skills: [
            "Phân tích dữ liệu",
            "Quảng cáo số",
            "Tư duy marketing",
            "Sử dụng công cụ marketing",
            "Sáng tạo",
            "Hiểu hành vi người dùng"
        ],
        subjectStrengths: ["Kinh tế", "Tiếng Anh", "Tin học"],
        mbtiMatch: ["ENTP", "ENFP", "ENTJ"],
        healthRequirements:
            "Không yêu cầu đặc biệt nhưng cần khả năng làm việc với cường độ cao trong các chiến dịch lớn.",

        educationPath: {
            majors: [
                "Marketing",
                "Quản trị kinh doanh",
                "Truyền thông",
                "Thương mại điện tử"
            ],
            examGroups: [
                "D01 (Toán, Văn, Anh)",
                "A01 (Toán, Lý, Anh)",
                "C00 (Văn, Sử, Địa)"
            ],
            studyAbroad:
                "Các chương trình Digital Marketing tại Anh, Úc và Singapore khá phát triển.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao do doanh nghiệp chuyển dịch sang kinh doanh online.",
            competition:
                "Trung bình đến cao tùy kỹ năng và kinh nghiệm.",
            trend5to10years:
                "AI Marketing, dữ liệu khách hàng và marketing tự động hóa sẽ phát triển mạnh.",
        },

        salaryBreakdown: {
            entry: "8 – 15 triệu/tháng",
            afterThreeToFiveYears: "20 – 45 triệu/tháng",
            senior: "50 – 150+ triệu/tháng",
        },

        pros: [
            "Ngành phát triển nhanh.",
            "Cơ hội sáng tạo.",
            "Dễ học thông qua thực hành.",
            "Có thể làm freelance."
        ],
        cons: [
            "Áp lực KPI marketing.",
            "Cần cập nhật xu hướng liên tục.",
            "Thị trường cạnh tranh."
        ],
        reasonsPeopleQuit:
            "Áp lực hiệu suất chiến dịch hoặc chuyển sang kinh doanh riêng.",

        requirements: [
            "Hiểu nền tảng quảng cáo số.",
            "Khả năng phân tích dữ liệu.",
            "Tư duy marketing."
        ],
    },
    "2-2": {
        id: "2-2",
        name: "SEO/SEM Specialist",

        overview:
            "SEO/SEM Specialist tập trung vào việc tối ưu website và quảng cáo trên công cụ tìm kiếm để tăng lượng truy cập và khách hàng tiềm năng.",
        workEnvironment:
            "Làm việc tại agency marketing, công ty công nghệ hoặc doanh nghiệp có website lớn.",

        responsibilities: [
            "Nghiên cứu từ khóa.",
            "Tối ưu nội dung và cấu trúc website.",
            "Quản lý quảng cáo tìm kiếm.",
            "Theo dõi thứ hạng từ khóa.",
            "Phân tích dữ liệu traffic."
        ],
        skills: [
            "SEO kỹ thuật",
            "Phân tích dữ liệu",
            "Nghiên cứu từ khóa",
            "Tối ưu website",
            "Hiểu thuật toán tìm kiếm"
        ],
        subjectStrengths: ["Tin học", "Toán", "Tiếng Anh"],
        mbtiMatch: ["INTJ", "ISTJ", "ENTJ"],
        healthRequirements:
            "Cần khả năng tập trung và làm việc lâu với dữ liệu.",

        educationPath: {
            majors: [
                "Marketing",
                "Công nghệ thông tin",
                "Thương mại điện tử"
            ],
            examGroups: [
                "A01",
                "D01",
                "A00"
            ],
            studyAbroad:
                "Các chương trình Marketing Analytics hoặc Digital Strategy rất phù hợp.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu ổn định vì doanh nghiệp cần traffic từ tìm kiếm.",
            competition:
                "Trung bình.",
            trend5to10years:
                "SEO sẽ gắn với AI search, dữ liệu người dùng và nội dung chất lượng cao.",
        },

        salaryBreakdown: {
            entry: "8 – 14 triệu/tháng",
            afterThreeToFiveYears: "20 – 40 triệu/tháng",
            senior: "45 – 120+ triệu/tháng",
        },

        pros: [
            "Kỹ năng có giá trị lâu dài.",
            "Có thể làm freelance.",
            "Thu nhập tốt khi có kinh nghiệm."
        ],
        cons: [
            "Kết quả cần thời gian.",
            "Thuật toán thay đổi liên tục.",
            "Công việc khá kỹ thuật."
        ],
        reasonsPeopleQuit:
            "Áp lực kết quả SEO hoặc chuyển sang Digital Marketing tổng thể.",

        requirements: [
            "Hiểu cấu trúc website.",
            "Khả năng phân tích dữ liệu.",
            "Tư duy logic."
        ],
    },
    "2-3": {
        id: "2-3",
        name: "Content Creator",

        overview:
            "Content Creator là người sản xuất nội dung sáng tạo như video, bài viết, podcast hoặc hình ảnh để thu hút và xây dựng cộng đồng khán giả.",
        workEnvironment:
            "Làm việc tự do, tại agency, công ty truyền thông hoặc xây dựng thương hiệu cá nhân trên nền tảng mạng xã hội.",

        responsibilities: [
            "Lên ý tưởng nội dung.",
            "Sản xuất và chỉnh sửa nội dung.",
            "Quản lý kênh mạng xã hội.",
            "Tương tác với cộng đồng.",
            "Phân tích hiệu quả nội dung."
        ],
        skills: [
            "Sáng tạo nội dung",
            "Kể chuyện",
            "Quay dựng video",
            "Viết lách",
            "Hiểu thuật toán mạng xã hội"
        ],
        subjectStrengths: ["Ngữ văn", "Mỹ thuật", "Truyền thông"],
        mbtiMatch: ["ENFP", "ESFP", "ENTP"],
        healthRequirements:
            "Cần năng lượng sáng tạo và khả năng làm việc linh hoạt.",

        educationPath: {
            majors: [
                "Truyền thông đa phương tiện",
                "Marketing",
                "Báo chí",
                "Thiết kế"
            ],
            examGroups: [
                "D01",
                "C00",
                "H00"
            ],
            studyAbroad:
                "Các chương trình Media hoặc Creative Industry rất phù hợp.",
        },

        jobMarket: {
            employmentRate:
                "Cơ hội lớn nhờ sự phát triển của nền tảng số.",
            competition:
                "Rất cao vì ai cũng có thể tham gia.",
            trend5to10years:
                "Creator Economy sẽ tiếp tục phát triển mạnh.",
        },

        salaryBreakdown: {
            entry: "7 – 15 triệu/tháng",
            afterThreeToFiveYears: "20 – 50 triệu/tháng",
            senior: "Thu nhập rất biến động tùy thương hiệu cá nhân",
        },

        pros: [
            "Tự do sáng tạo.",
            "Có thể xây dựng thương hiệu cá nhân.",
            "Cơ hội kiếm tiền từ nhiều nguồn."
        ],
        cons: [
            "Thu nhập không ổn định ban đầu.",
            "Cạnh tranh rất cao.",
            "Áp lực duy trì nội dung liên tục."
        ],
        reasonsPeopleQuit:
            "Khó duy trì tăng trưởng hoặc chuyển sang marketing chuyên nghiệp.",

        requirements: [
            "Khả năng sáng tạo.",
            "Kỹ năng sản xuất nội dung.",
            "Hiểu nền tảng mạng xã hội."
        ],
    },
    "2-4": {
        id: "2-4",
        name: "Quản lý thương hiệu (Brand Manager)",

        overview:
            "Brand Manager chịu trách nhiệm xây dựng hình ảnh, định vị và giá trị thương hiệu trong tâm trí khách hàng.",
        workEnvironment:
            "Làm việc tại doanh nghiệp lớn, công ty FMCG, startup hoặc agency branding.",

        responsibilities: [
            "Xây dựng chiến lược thương hiệu.",
            "Quản lý chiến dịch marketing.",
            "Theo dõi hình ảnh thương hiệu trên thị trường.",
            "Phân tích hành vi khách hàng.",
            "Phối hợp với đội marketing và sáng tạo."
        ],
        skills: [
            "Chiến lược thương hiệu",
            "Phân tích thị trường",
            "Sáng tạo marketing",
            "Quản lý dự án",
            "Giao tiếp"
        ],
        subjectStrengths: ["Kinh tế", "Ngữ văn", "Tiếng Anh"],
        mbtiMatch: ["ENTJ", "ENFJ", "ENFP"],
        healthRequirements:
            "Cần khả năng làm việc dưới áp lực chiến dịch marketing.",

        educationPath: {
            majors: [
                "Marketing",
                "Quản trị kinh doanh",
                "Truyền thông"
            ],
            examGroups: [
                "D01",
                "A01",
                "C00"
            ],
            studyAbroad:
                "Các chương trình Brand Management tại Anh và Mỹ khá nổi tiếng.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao tại các doanh nghiệp lớn.",
            competition:
                "Cao vì vị trí thường ít và yêu cầu kinh nghiệm.",
            trend5to10years:
                "Thương hiệu gắn với trải nghiệm khách hàng và digital branding.",
        },

        salaryBreakdown: {
            entry: "12 – 20 triệu/tháng",
            afterThreeToFiveYears: "35 – 70 triệu/tháng",
            senior: "80 – 200+ triệu/tháng",
        },

        pros: [
            "Vai trò chiến lược trong marketing.",
            "Thu nhập cao.",
            "Ảnh hưởng lớn đến hình ảnh thương hiệu."
        ],
        cons: [
            "Áp lực kết quả chiến dịch.",
            "Cạnh tranh cao.",
            "Cần nhiều kinh nghiệm."
        ],
        reasonsPeopleQuit:
            "Áp lực chiến dịch hoặc chuyển sang vị trí lãnh đạo marketing.",

        requirements: [
            "Tư duy chiến lược.",
            "Hiểu thị trường.",
            "Kỹ năng quản lý chiến dịch."
        ],
    },
    "2-5": {
        id: "2-5",
        name: "PR – Quan hệ công chúng",

        overview:
            "PR tập trung xây dựng hình ảnh tích cực của tổ chức trước công chúng, truyền thông và cộng đồng.",
        workEnvironment:
            "Làm việc tại agency PR, doanh nghiệp, tổ chức truyền thông hoặc tổ chức phi lợi nhuận.",

        responsibilities: [
            "Xây dựng chiến lược truyền thông.",
            "Viết thông cáo báo chí.",
            "Quản lý khủng hoảng truyền thông.",
            "Quan hệ với báo chí.",
            "Tổ chức sự kiện truyền thông."
        ],
        skills: [
            "Giao tiếp",
            "Viết lách",
            "Xử lý khủng hoảng",
            "Quan hệ truyền thông",
            "Tổ chức sự kiện"
        ],
        subjectStrengths: ["Ngữ văn", "Xã hội học", "Tiếng Anh"],
        mbtiMatch: ["ENFJ", "ENFP", "ESFJ"],
        healthRequirements:
            "Cần năng lượng cao và khả năng giao tiếp thường xuyên.",

        educationPath: {
            majors: [
                "Quan hệ công chúng",
                "Truyền thông",
                "Báo chí",
                "Marketing"
            ],
            examGroups: [
                "D01",
                "C00",
                "A01"
            ],
            studyAbroad:
                "Các chương trình Communication và Public Relations rất phổ biến tại Mỹ và Úc.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu ổn định trong doanh nghiệp và tổ chức.",
            competition:
                "Trung bình.",
            trend5to10years:
                "PR sẽ gắn chặt với truyền thông số và quản lý hình ảnh online.",
        },

        salaryBreakdown: {
            entry: "8 – 15 triệu/tháng",
            afterThreeToFiveYears: "20 – 45 triệu/tháng",
            senior: "50 – 130+ triệu/tháng",
        },

        pros: [
            "Công việc năng động.",
            "Mở rộng mối quan hệ rộng.",
            "Cơ hội làm việc với truyền thông lớn."
        ],
        cons: [
            "Áp lực truyền thông.",
            "Phải phản ứng nhanh khi khủng hoảng.",
            "Thời gian làm việc linh hoạt."
        ],
        reasonsPeopleQuit:
            "Áp lực công việc truyền thông và lịch làm việc dày đặc.",

        requirements: [
            "Kỹ năng giao tiếp tốt.",
            "Khả năng viết và truyền đạt.",
            "Hiểu truyền thông và báo chí."
        ],
    },
    "3-1": {
        id: "3-1",
        name: "Giao dịch viên ngân hàng",

        overview:
            "Giao dịch viên ngân hàng là người trực tiếp làm việc với khách hàng tại quầy, thực hiện các giao dịch tài chính như gửi tiền, rút tiền, chuyển khoản và hỗ trợ các dịch vụ ngân hàng.",
        workEnvironment:
            "Làm việc tại chi nhánh ngân hàng, phòng giao dịch hoặc trung tâm tài chính.",

        responsibilities: [
            "Thực hiện giao dịch tiền gửi, rút tiền và chuyển khoản.",
            "Hướng dẫn khách hàng sử dụng dịch vụ ngân hàng.",
            "Xác minh thông tin và giấy tờ khách hàng.",
            "Quản lý tiền mặt và chứng từ giao dịch.",
            "Giải đáp thắc mắc của khách hàng."
        ],
        skills: [
            "Giao tiếp khách hàng",
            "Cẩn thận và chính xác",
            "Xử lý giao dịch tài chính",
            "Quản lý thời gian",
            "Kiến thức ngân hàng"
        ],
        subjectStrengths: ["Toán", "Kinh tế", "Tiếng Anh"],
        mbtiMatch: ["ESFJ", "ISFJ", "ESTJ"],
        healthRequirements:
            "Cần sự tập trung cao và làm việc ổn định trong môi trường giao dịch.",

        educationPath: {
            majors: [
                "Tài chính – Ngân hàng",
                "Kế toán",
                "Quản trị kinh doanh",
                "Kinh tế"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)",
                "D01 (Toán, Văn, Anh)"
            ],
            studyAbroad:
                "Các chương trình Banking & Finance tại Anh, Úc và Singapore khá phổ biến.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu ổn định tại các ngân hàng thương mại.",
            competition:
                "Trung bình do nhiều ứng viên ngành tài chính.",
            trend5to10years:
                "Ngân hàng số và tự động hóa có thể giảm số lượng vị trí giao dịch truyền thống.",
        },

        salaryBreakdown: {
            entry: "8 – 14 triệu/tháng",
            afterThreeToFiveYears: "15 – 25 triệu/tháng",
            senior: "25 – 40+ triệu/tháng",
        },

        pros: [
            "Công việc ổn định.",
            "Môi trường chuyên nghiệp.",
            "Có lộ trình phát triển trong ngành ngân hàng."
        ],
        cons: [
            "Công việc lặp lại.",
            "Áp lực chỉ tiêu dịch vụ.",
            "Ít sáng tạo."
        ],
        reasonsPeopleQuit:
            "Muốn chuyển sang vị trí tín dụng hoặc tài chính có thu nhập cao hơn.",

        requirements: [
            "Bằng cử nhân ngành liên quan.",
            "Kỹ năng giao tiếp tốt.",
            "Cẩn thận trong xử lý tiền và chứng từ."
        ],
    },
    "3-2": {
        id: "3-2",
        name: "Chuyên viên tín dụng",

        overview:
            "Chuyên viên tín dụng đánh giá hồ sơ vay vốn của khách hàng và đề xuất quyết định cho vay nhằm đảm bảo an toàn tài chính cho ngân hàng.",
        workEnvironment:
            "Làm việc tại ngân hàng, tổ chức tài chính hoặc công ty cho vay.",

        responsibilities: [
            "Thẩm định hồ sơ vay vốn.",
            "Phân tích khả năng tài chính của khách hàng.",
            "Quản lý danh mục khoản vay.",
            "Theo dõi rủi ro tín dụng.",
            "Phát triển khách hàng vay mới."
        ],
        skills: [
            "Phân tích tài chính",
            "Đánh giá rủi ro",
            "Đàm phán",
            "Giao tiếp khách hàng",
            "Tư duy logic"
        ],
        subjectStrengths: ["Toán", "Kinh tế", "Tài chính"],
        mbtiMatch: ["ESTJ", "ISTJ", "ENTJ"],
        healthRequirements:
            "Cần khả năng di chuyển gặp khách hàng và làm việc với hồ sơ tài chính.",

        educationPath: {
            majors: [
                "Tài chính – Ngân hàng",
                "Kế toán",
                "Kinh tế"
            ],
            examGroups: [
                "A00",
                "A01",
                "D01"
            ],
            studyAbroad:
                "Các chương trình Finance và Risk Management khá phù hợp.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao tại các ngân hàng và công ty tài chính.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Phân tích dữ liệu tín dụng và fintech sẽ ảnh hưởng mạnh đến lĩnh vực này.",
        },

        salaryBreakdown: {
            entry: "10 – 18 triệu/tháng + thưởng",
            afterThreeToFiveYears: "25 – 50 triệu/tháng",
            senior: "60 – 150+ triệu/tháng",
        },

        pros: [
            "Thu nhập tốt nhờ thưởng.",
            "Cơ hội thăng tiến trong ngân hàng.",
            "Hiểu sâu về tài chính doanh nghiệp."
        ],
        cons: [
            "Áp lực chỉ tiêu.",
            "Rủi ro khi đánh giá sai khách hàng.",
            "Khối lượng hồ sơ lớn."
        ],
        reasonsPeopleQuit:
            "Áp lực doanh số hoặc chuyển sang lĩnh vực đầu tư.",

        requirements: [
            "Kiến thức tài chính.",
            "Khả năng phân tích hồ sơ.",
            "Kỹ năng giao tiếp."
        ],
    },
    "3-3": {
        id: "3-3",
        name: "Phân tích tài chính",

        overview:
            "Chuyên viên phân tích tài chính đánh giá tình hình tài chính của doanh nghiệp hoặc dự án để hỗ trợ quyết định đầu tư và quản lý vốn.",
        workEnvironment:
            "Làm việc tại ngân hàng, công ty đầu tư, quỹ tài chính hoặc doanh nghiệp lớn.",

        responsibilities: [
            "Phân tích báo cáo tài chính.",
            "Dự báo tài chính và lợi nhuận.",
            "Đánh giá hiệu quả đầu tư.",
            "Theo dõi thị trường tài chính.",
            "Báo cáo cho lãnh đạo hoặc nhà đầu tư."
        ],
        skills: [
            "Phân tích dữ liệu",
            "Mô hình tài chính",
            "Tư duy logic",
            "Sử dụng Excel/Financial tools",
            "Hiểu thị trường"
        ],
        subjectStrengths: ["Toán", "Kinh tế", "Tin học"],
        mbtiMatch: ["INTJ", "ISTJ", "ENTJ"],
        healthRequirements:
            "Cần khả năng làm việc lâu với dữ liệu và báo cáo.",

        educationPath: {
            majors: [
                "Tài chính",
                "Kinh tế",
                "Kế toán",
                "Đầu tư"
            ],
            examGroups: [
                "A00",
                "A01",
                "D01"
            ],
            studyAbroad:
                "Các chương trình Finance, Investment hoặc CFA pathway rất phổ biến.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao trong các công ty tài chính và đầu tư.",
            competition:
                "Cao vì yêu cầu kỹ năng chuyên sâu.",
            trend5to10years:
                "Phân tích dữ liệu lớn và AI tài chính sẽ ngày càng quan trọng.",
        },

        salaryBreakdown: {
            entry: "12 – 20 triệu/tháng",
            afterThreeToFiveYears: "30 – 70 triệu/tháng",
            senior: "80 – 250+ triệu/tháng",
        },

        pros: [
            "Thu nhập cao khi có kinh nghiệm.",
            "Cơ hội làm việc trong lĩnh vực đầu tư.",
            "Phát triển kỹ năng phân tích mạnh."
        ],
        cons: [
            "Áp lực độ chính xác cao.",
            "Khối lượng dữ liệu lớn.",
            "Cạnh tranh cao."
        ],
        reasonsPeopleQuit:
            "Áp lực công việc hoặc chuyển sang quản lý đầu tư.",

        requirements: [
            "Kiến thức tài chính vững.",
            "Kỹ năng phân tích dữ liệu.",
            "Tư duy logic."
        ],
    },
    "3-4": {
        id: "3-4",
        name: "Môi giới chứng khoán",

        overview:
            "Môi giới chứng khoán hỗ trợ nhà đầu tư mua bán cổ phiếu và cung cấp thông tin thị trường để đưa ra quyết định đầu tư.",
        workEnvironment:
            "Làm việc tại công ty chứng khoán, sàn giao dịch hoặc tổ chức tài chính.",

        responsibilities: [
            "Tư vấn đầu tư cho khách hàng.",
            "Theo dõi thị trường chứng khoán.",
            "Thực hiện giao dịch cổ phiếu.",
            "Xây dựng mạng lưới khách hàng.",
            "Phân tích cơ hội đầu tư."
        ],
        skills: [
            "Phân tích thị trường",
            "Bán hàng tài chính",
            "Giao tiếp",
            "Quản lý khách hàng",
            "Tư duy nhanh"
        ],
        subjectStrengths: ["Toán", "Kinh tế", "Tiếng Anh"],
        mbtiMatch: ["ENTP", "ENTJ", "ESTP"],
        healthRequirements:
            "Cần phản ứng nhanh và chịu áp lực cao.",

        educationPath: {
            majors: [
                "Tài chính",
                "Kinh tế",
                "Đầu tư",
                "Ngân hàng"
            ],
            examGroups: [
                "A00",
                "A01",
                "D01"
            ],
            studyAbroad:
                "Các chương trình Investment và Finance rất phù hợp.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu tăng khi thị trường chứng khoán phát triển.",
            competition:
                "Trung bình đến cao.",
            trend5to10years:
                "Đầu tư cá nhân và nền tảng giao dịch số sẽ tiếp tục mở rộng.",
        },

        salaryBreakdown: {
            entry: "8 – 15 triệu/tháng + hoa hồng",
            afterThreeToFiveYears: "30 – 80 triệu/tháng",
            senior: "100 – 300+ triệu/tháng",
        },

        pros: [
            "Thu nhập cao nếu có khách hàng lớn.",
            "Công việc năng động.",
            "Hiểu sâu thị trường tài chính."
        ],
        cons: [
            "Thu nhập biến động.",
            "Áp lực thị trường.",
            "Phụ thuộc vào khách hàng."
        ],
        reasonsPeopleQuit:
            "Biến động thu nhập hoặc chuyển sang đầu tư cá nhân.",

        requirements: [
            "Chứng chỉ hành nghề chứng khoán.",
            "Hiểu thị trường tài chính.",
            "Kỹ năng tư vấn."
        ],
    },
    "3-5": {
        id: "3-5",
        name: "Tư vấn bảo hiểm",

        overview:
            "Tư vấn bảo hiểm giúp khách hàng lựa chọn sản phẩm bảo hiểm phù hợp để bảo vệ tài chính và giảm thiểu rủi ro.",
        workEnvironment:
            "Làm việc tại công ty bảo hiểm, đại lý bảo hiểm hoặc làm việc tự do.",

        responsibilities: [
            "Tư vấn sản phẩm bảo hiểm.",
            "Tìm kiếm khách hàng.",
            "Giải thích quyền lợi và hợp đồng.",
            "Chăm sóc khách hàng sau bán.",
            "Xây dựng mạng lưới khách hàng."
        ],
        skills: [
            "Bán hàng",
            "Giao tiếp",
            "Thuyết phục",
            "Xây dựng quan hệ",
            "Hiểu sản phẩm tài chính"
        ],
        subjectStrengths: ["Kinh tế", "Ngữ văn", "Tiếng Anh"],
        mbtiMatch: ["ENFJ", "ESFJ", "ENFP"],
        healthRequirements:
            "Cần năng lượng cao vì thường xuyên gặp gỡ khách hàng.",

        educationPath: {
            majors: [
                "Tài chính",
                "Quản trị kinh doanh",
                "Kinh tế"
            ],
            examGroups: [
                "D01",
                "A01",
                "A00"
            ],
            studyAbroad:
                "Các chương trình Financial Planning và Insurance khá phù hợp.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao vì thị trường bảo hiểm đang mở rộng.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Bảo hiểm số và tư vấn tài chính cá nhân sẽ phát triển mạnh.",
        },

        salaryBreakdown: {
            entry: "6 – 12 triệu/tháng + hoa hồng",
            afterThreeToFiveYears: "20 – 60 triệu/tháng",
            senior: "80 – 200+ triệu/tháng",
        },

        pros: [
            "Thu nhập không giới hạn.",
            "Linh hoạt thời gian.",
            "Cơ hội xây dựng mạng lưới lớn."
        ],
        cons: [
            "Áp lực doanh số.",
            "Thu nhập ban đầu không ổn định.",
            "Cần kỹ năng bán hàng mạnh."
        ],
        reasonsPeopleQuit:
            "Khó xây dựng tệp khách hàng ban đầu.",

        requirements: [
            "Kỹ năng giao tiếp tốt.",
            "Hiểu sản phẩm bảo hiểm.",
            "Khả năng thuyết phục."
        ],
    },
    "4-1": {
        id: "4-1",
        name: "Kế toán nội bộ",

        overview:
            "Kế toán nội bộ chịu trách nhiệm ghi nhận, quản lý và kiểm soát các hoạt động tài chính bên trong doanh nghiệp nhằm đảm bảo minh bạch và chính xác.",
        workEnvironment:
            "Làm việc tại phòng kế toán của doanh nghiệp, công ty sản xuất, thương mại hoặc dịch vụ.",

        responsibilities: [
            "Ghi nhận và quản lý chứng từ kế toán.",
            "Theo dõi thu – chi và công nợ.",
            "Lập báo cáo tài chính nội bộ.",
            "Kiểm tra tính hợp lệ của hóa đơn và chứng từ.",
            "Phối hợp với các bộ phận khác trong doanh nghiệp."
        ],
        skills: [
            "Nghiệp vụ kế toán",
            "Cẩn thận và chính xác",
            "Sử dụng phần mềm kế toán",
            "Quản lý dữ liệu tài chính",
            "Tổ chức công việc"
        ],
        subjectStrengths: ["Toán", "Kinh tế", "Tin học"],
        mbtiMatch: ["ISTJ", "ISFJ", "ESTJ"],
        healthRequirements:
            "Cần khả năng tập trung cao và làm việc với số liệu trong thời gian dài.",

        educationPath: {
            majors: [
                "Kế toán",
                "Kiểm toán",
                "Tài chính – Ngân hàng",
                "Kinh tế"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)",
                "D01 (Toán, Văn, Anh)"
            ],
            studyAbroad:
                "Các chương trình Accounting tại Anh, Úc và Singapore khá phổ biến.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao vì hầu hết doanh nghiệp đều cần kế toán.",
            competition:
                "Trung bình do số lượng sinh viên ngành kế toán lớn.",
            trend5to10years:
                "Phần mềm kế toán và tự động hóa sẽ thay đổi cách làm việc nhưng nhu cầu vẫn ổn định.",
        },

        salaryBreakdown: {
            entry: "7 – 12 triệu/tháng",
            afterThreeToFiveYears: "15 – 30 triệu/tháng",
            senior: "35 – 60+ triệu/tháng",
        },

        pros: [
            "Công việc ổn định.",
            "Nhu cầu tuyển dụng rộng.",
            "Có thể làm trong nhiều ngành khác nhau."
        ],
        cons: [
            "Công việc lặp lại.",
            "Áp lực vào kỳ quyết toán.",
            "Ít sáng tạo."
        ],
        reasonsPeopleQuit:
            "Áp lực sổ sách và mong muốn chuyển sang tài chính hoặc kiểm toán.",

        requirements: [
            "Hiểu chuẩn mực kế toán.",
            "Cẩn thận và chính xác.",
            "Sử dụng phần mềm kế toán."
        ],
    },
    "4-2": {
        id: "4-2",
        name: "Kiểm toán viên",

        overview:
            "Kiểm toán viên kiểm tra và đánh giá báo cáo tài chính của doanh nghiệp để đảm bảo tính minh bạch và tuân thủ quy định pháp luật.",
        workEnvironment:
            "Làm việc tại công ty kiểm toán, công ty tư vấn tài chính hoặc bộ phận kiểm toán nội bộ của doanh nghiệp.",

        responsibilities: [
            "Kiểm tra báo cáo tài chính.",
            "Đánh giá hệ thống kiểm soát nội bộ.",
            "Phát hiện sai sót và rủi ro tài chính.",
            "Lập báo cáo kiểm toán.",
            "Làm việc với khách hàng doanh nghiệp."
        ],
        skills: [
            "Phân tích tài chính",
            "Tư duy logic",
            "Hiểu chuẩn mực kiểm toán",
            "Quản lý thời gian",
            "Kỹ năng báo cáo"
        ],
        subjectStrengths: ["Toán", "Kinh tế", "Tiếng Anh"],
        mbtiMatch: ["ISTJ", "INTJ", "ENTJ"],
        healthRequirements:
            "Cần sức khỏe tốt vì có thể phải làm việc cường độ cao vào mùa kiểm toán.",

        educationPath: {
            majors: [
                "Kiểm toán",
                "Kế toán",
                "Tài chính",
                "Kinh tế"
            ],
            examGroups: [
                "A00",
                "A01",
                "D01"
            ],
            studyAbroad:
                "Các chương trình Accounting & Auditing tại Anh, Úc và Mỹ rất phát triển.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao tại các công ty kiểm toán và doanh nghiệp lớn.",
            competition:
                "Cao tại các công ty kiểm toán lớn.",
            trend5to10years:
                "Kiểm toán dữ liệu và kiểm toán công nghệ sẽ trở nên quan trọng.",
        },

        salaryBreakdown: {
            entry: "10 – 16 triệu/tháng",
            afterThreeToFiveYears: "25 – 55 triệu/tháng",
            senior: "70 – 200+ triệu/tháng",
        },

        pros: [
            "Học hỏi nhanh về tài chính doanh nghiệp.",
            "Cơ hội thăng tiến tốt.",
            "Môi trường chuyên nghiệp."
        ],
        cons: [
            "Làm việc nhiều giờ trong mùa kiểm toán.",
            "Áp lực deadline.",
            "Di chuyển nhiều."
        ],
        reasonsPeopleQuit:
            "Áp lực công việc cao hoặc chuyển sang tài chính doanh nghiệp.",

        requirements: [
            "Kiến thức kế toán và kiểm toán.",
            "Tư duy phân tích.",
            "Kỹ năng làm việc với dữ liệu."
        ],
    },
    "4-3": {
        id: "4-3",
        name: "Tư vấn thuế",

        overview:
            "Tư vấn thuế hỗ trợ doanh nghiệp và cá nhân trong việc tuân thủ luật thuế và tối ưu nghĩa vụ thuế hợp pháp.",
        workEnvironment:
            "Làm việc tại công ty tư vấn tài chính, công ty kiểm toán hoặc doanh nghiệp lớn.",

        responsibilities: [
            "Tư vấn chiến lược thuế cho doanh nghiệp.",
            "Chuẩn bị hồ sơ khai thuế.",
            "Cập nhật quy định thuế mới.",
            "Hỗ trợ doanh nghiệp làm việc với cơ quan thuế.",
            "Phân tích rủi ro thuế."
        ],
        skills: [
            "Hiểu luật thuế",
            "Phân tích tài chính",
            "Nghiên cứu quy định",
            "Giao tiếp chuyên nghiệp",
            "Giải quyết vấn đề"
        ],
        subjectStrengths: ["Kinh tế", "Toán", "Luật"],
        mbtiMatch: ["INTJ", "ISTJ", "ENTJ"],
        healthRequirements:
            "Cần khả năng tập trung và cập nhật kiến thức liên tục.",

        educationPath: {
            majors: [
                "Kế toán",
                "Kiểm toán",
                "Tài chính",
                "Luật kinh tế"
            ],
            examGroups: [
                "A00",
                "A01",
                "D01",
                "C00"
            ],
            studyAbroad:
                "Các chương trình Taxation và Accounting khá phổ biến tại các nước phát triển.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu ổn định vì doanh nghiệp luôn cần tư vấn thuế.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Luật thuế quốc tế và thuế thương mại điện tử sẽ phát triển mạnh.",
        },

        salaryBreakdown: {
            entry: "10 – 18 triệu/tháng",
            afterThreeToFiveYears: "25 – 60 triệu/tháng",
            senior: "70 – 180+ triệu/tháng",
        },

        pros: [
            "Thu nhập tốt.",
            "Vai trò quan trọng trong doanh nghiệp.",
            "Chuyên môn cao."
        ],
        cons: [
            "Phải cập nhật luật liên tục.",
            "Áp lực chính xác cao.",
            "Công việc khá chuyên môn."
        ],
        reasonsPeopleQuit:
            "Khối lượng công việc lớn hoặc chuyển sang quản lý tài chính.",

        requirements: [
            "Hiểu luật thuế.",
            "Kỹ năng phân tích.",
            "Cẩn thận trong hồ sơ."
        ],
    },
    "4-4": {
        id: "4-4",
        name: "Kế toán trưởng",

        overview:
            "Kế toán trưởng là người quản lý toàn bộ hoạt động kế toán của doanh nghiệp và chịu trách nhiệm về tính chính xác của báo cáo tài chính.",
        workEnvironment:
            "Làm việc tại doanh nghiệp, tập đoàn hoặc tổ chức tài chính.",

        responsibilities: [
            "Quản lý đội ngũ kế toán.",
            "Kiểm soát báo cáo tài chính.",
            "Đảm bảo tuân thủ quy định kế toán và thuế.",
            "Tư vấn tài chính cho lãnh đạo.",
            "Phối hợp với kiểm toán và cơ quan thuế."
        ],
        skills: [
            "Quản lý tài chính",
            "Lãnh đạo đội nhóm",
            "Hiểu chuẩn mực kế toán",
            "Phân tích tài chính",
            "Quản lý rủi ro"
        ],
        subjectStrengths: ["Toán", "Kinh tế", "Quản trị"],
        mbtiMatch: ["ENTJ", "ESTJ", "ISTJ"],
        healthRequirements:
            "Cần khả năng chịu áp lực và quản lý khối lượng công việc lớn.",

        educationPath: {
            majors: [
                "Kế toán",
                "Kiểm toán",
                "Tài chính",
                "Kinh tế"
            ],
            examGroups: [
                "A00",
                "A01",
                "D01"
            ],
            studyAbroad:
                "Các chương trình Accounting hoặc Finance nâng cao rất phù hợp.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu ổn định tại doanh nghiệp lớn.",
            competition:
                "Cao vì yêu cầu nhiều năm kinh nghiệm.",
            trend5to10years:
                "Kế toán trưởng cần hiểu công nghệ và hệ thống ERP.",
        },

        salaryBreakdown: {
            entry: "Thường cần kinh nghiệm trước khi đảm nhận vị trí",
            afterThreeToFiveYears: "30 – 60 triệu/tháng",
            senior: "70 – 200+ triệu/tháng",
        },

        pros: [
            "Vị trí quản lý quan trọng.",
            "Thu nhập cao.",
            "Ảnh hưởng lớn đến tài chính doanh nghiệp."
        ],
        cons: [
            "Áp lực trách nhiệm cao.",
            "Cần nhiều năm kinh nghiệm.",
            "Khối lượng công việc lớn."
        ],
        reasonsPeopleQuit:
            "Áp lực quản lý và trách nhiệm pháp lý.",

        requirements: [
            "Kinh nghiệm kế toán nhiều năm.",
            "Chứng chỉ kế toán trưởng.",
            "Kỹ năng quản lý tài chính."
        ],
    },
    // ─────────────────────────────────────────────────────
    // Khối 2: Công nghệ – Kỹ thuật
    // ─────────────────────────────────────────────────────
    "5-1": {
        id: "5-1",
        name: "Lập trình viên Front-end / Back-end",

        overview:
            "Lập trình viên xây dựng và phát triển hệ thống phần mềm hoặc website. Front-end tập trung vào giao diện người dùng, còn Back-end xử lý logic, dữ liệu và hệ thống phía máy chủ.",
        workEnvironment:
            "Làm việc tại công ty công nghệ, startup, doanh nghiệp phần mềm hoặc làm việc từ xa.",

        responsibilities: [
            "Phát triển website hoặc hệ thống phần mềm.",
            "Viết và tối ưu code.",
            "Phối hợp với designer và các lập trình viên khác.",
            "Sửa lỗi và nâng cấp hệ thống.",
            "Kiểm thử và triển khai sản phẩm."
        ],
        skills: [
            "Lập trình",
            "Tư duy logic",
            "Giải quyết vấn đề",
            "Làm việc nhóm",
            "Hiểu hệ thống phần mềm"
        ],
        subjectStrengths: ["Toán", "Tin học", "Tiếng Anh"],
        mbtiMatch: ["INTJ", "ISTJ", "INTP", "ENTP"],
        healthRequirements:
            "Cần khả năng làm việc lâu với máy tính và tập trung cao.",

        educationPath: {
            majors: [
                "Công nghệ thông tin",
                "Khoa học máy tính",
                "Kỹ thuật phần mềm",
                "Hệ thống thông tin"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)",
                "D01 (Toán, Văn, Anh)"
            ],
            studyAbroad:
                "Các chương trình Computer Science tại Mỹ, Canada, Singapore rất phát triển.",
        },

        jobMarket: {
            employmentRate:
                "Rất cao do nhu cầu nhân lực công nghệ lớn.",
            competition:
                "Trung bình đến cao tùy kỹ năng thực tế.",
            trend5to10years:
                "Phát triển web, cloud và hệ thống lớn sẽ tiếp tục tăng mạnh.",
        },

        salaryBreakdown: {
            entry: "10 – 18 triệu/tháng",
            afterThreeToFiveYears: "25 – 60 triệu/tháng",
            senior: "70 – 200+ triệu/tháng",
        },

        pros: [
            "Nhu cầu tuyển dụng cao.",
            "Có thể làm remote.",
            "Thu nhập tốt.",
            "Cơ hội làm việc quốc tế."
        ],
        cons: [
            "Cần học liên tục.",
            "Áp lực deadline.",
            "Ngồi máy tính nhiều."
        ],
        reasonsPeopleQuit:
            "Burnout hoặc chuyển sang vị trí quản lý hoặc sản phẩm.",

        requirements: [
            "Thành thạo ít nhất một ngôn ngữ lập trình.",
            "Hiểu cấu trúc dữ liệu và thuật toán.",
            "Kinh nghiệm dự án thực tế."
        ],
    },
    "5-2": {
        id: "5-2",
        name: "Phát triển ứng dụng di động",

        overview:
            "Lập trình viên mobile phát triển ứng dụng chạy trên điện thoại thông minh như Android và iOS.",
        workEnvironment:
            "Làm việc tại công ty công nghệ, startup hoặc phát triển ứng dụng riêng.",

        responsibilities: [
            "Phát triển ứng dụng di động.",
            "Tối ưu hiệu năng ứng dụng.",
            "Kiểm thử và sửa lỗi.",
            "Cập nhật tính năng mới.",
            "Đảm bảo trải nghiệm người dùng."
        ],
        skills: [
            "Lập trình mobile",
            "Thiết kế ứng dụng",
            "Tư duy logic",
            "Debug",
            "Hiểu UX/UI"
        ],
        subjectStrengths: ["Toán", "Tin học", "Tiếng Anh"],
        mbtiMatch: ["INTP", "INTJ", "ISTJ"],
        healthRequirements:
            "Cần tập trung cao và làm việc lâu với thiết bị công nghệ.",

        educationPath: {
            majors: [
                "Công nghệ thông tin",
                "Kỹ thuật phần mềm",
                "Khoa học máy tính"
            ],
            examGroups: [
                "A00",
                "A01",
                "D01"
            ],
            studyAbroad:
                "Các chương trình Software Engineering hoặc Mobile Computing phù hợp.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao vì ứng dụng di động phát triển mạnh.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Ứng dụng AI và mobile app sẽ tiếp tục tăng trưởng.",
        },

        salaryBreakdown: {
            entry: "10 – 18 triệu/tháng",
            afterThreeToFiveYears: "25 – 55 triệu/tháng",
            senior: "65 – 180+ triệu/tháng",
        },

        pros: [
            "Nhu cầu cao.",
            "Có thể phát triển sản phẩm riêng.",
            "Thu nhập tốt."
        ],
        cons: [
            "Cập nhật công nghệ liên tục.",
            "Nhiều thiết bị cần kiểm thử.",
            "Áp lực deadline."
        ],
        reasonsPeopleQuit:
            "Chuyển sang phát triển hệ thống hoặc startup riêng.",

        requirements: [
            "Thành thạo framework mobile.",
            "Hiểu hệ điều hành di động.",
            "Kinh nghiệm phát triển ứng dụng."
        ],
    },
    "5-3": {
        id: "5-3",
        name: "Kỹ sư AI",

        overview:
            "Kỹ sư AI phát triển các hệ thống trí tuệ nhân tạo như machine learning, chatbot, nhận diện hình ảnh hoặc xử lý ngôn ngữ tự nhiên.",
        workEnvironment:
            "Làm việc tại công ty công nghệ, phòng nghiên cứu, startup AI hoặc tập đoàn lớn.",

        responsibilities: [
            "Xây dựng mô hình machine learning.",
            "Xử lý và phân tích dữ liệu lớn.",
            "Triển khai hệ thống AI.",
            "Nghiên cứu thuật toán mới.",
            "Tối ưu mô hình."
        ],
        skills: [
            "Machine learning",
            "Toán và xác suất",
            "Lập trình Python",
            "Phân tích dữ liệu",
            "Tư duy nghiên cứu"
        ],
        subjectStrengths: ["Toán", "Tin học", "Thống kê"],
        mbtiMatch: ["INTJ", "INTP", "ENTJ"],
        healthRequirements:
            "Cần khả năng tập trung và nghiên cứu chuyên sâu.",

        educationPath: {
            majors: [
                "Trí tuệ nhân tạo",
                "Khoa học máy tính",
                "Khoa học dữ liệu",
                "Toán ứng dụng"
            ],
            examGroups: [
                "A00",
                "A01",
                "D01"
            ],
            studyAbroad:
                "Các chương trình AI và Data Science tại Mỹ, Canada và châu Âu rất phát triển.",
        },

        jobMarket: {
            employmentRate:
                "Rất cao do AI đang phát triển mạnh.",
            competition:
                "Cao vì yêu cầu chuyên môn sâu.",
            trend5to10years:
                "AI sẽ là một trong những lĩnh vực quan trọng nhất của công nghệ.",
        },

        salaryBreakdown: {
            entry: "15 – 25 triệu/tháng",
            afterThreeToFiveYears: "40 – 100 triệu/tháng",
            senior: "120 – 300+ triệu/tháng",
        },

        pros: [
            "Thu nhập rất cao.",
            "Ngành công nghệ tiên tiến.",
            "Cơ hội làm việc quốc tế."
        ],
        cons: [
            "Học khá khó.",
            "Yêu cầu toán và thuật toán mạnh.",
            "Cạnh tranh cao."
        ],
        reasonsPeopleQuit:
            "Khó theo kịp nghiên cứu hoặc chuyển sang kỹ sư phần mềm.",

        requirements: [
            "Kiến thức toán và machine learning.",
            "Kinh nghiệm lập trình.",
            "Hiểu mô hình AI."
        ],
    },
    "5-4": {
        id: "5-4",
        name: "Phân tích dữ liệu",

        overview:
            "Chuyên viên phân tích dữ liệu thu thập, xử lý và phân tích dữ liệu để giúp doanh nghiệp đưa ra quyết định dựa trên dữ liệu.",
        workEnvironment:
            "Làm việc tại doanh nghiệp công nghệ, ngân hàng, thương mại điện tử hoặc startup.",

        responsibilities: [
            "Thu thập và xử lý dữ liệu.",
            "Phân tích dữ liệu kinh doanh.",
            "Xây dựng báo cáo và dashboard.",
            "Hỗ trợ quyết định kinh doanh.",
            "Trực quan hóa dữ liệu."
        ],
        skills: [
            "Phân tích dữ liệu",
            "SQL",
            "Thống kê",
            "Trực quan hóa dữ liệu",
            "Tư duy logic"
        ],
        subjectStrengths: ["Toán", "Tin học", "Thống kê"],
        mbtiMatch: ["INTJ", "ISTJ", "INTP"],
        healthRequirements:
            "Cần khả năng làm việc lâu với dữ liệu và phân tích.",

        educationPath: {
            majors: [
                "Khoa học dữ liệu",
                "Công nghệ thông tin",
                "Thống kê",
                "Kinh tế dữ liệu"
            ],
            examGroups: [
                "A00",
                "A01",
                "D01"
            ],
            studyAbroad:
                "Các chương trình Data Science rất phát triển tại Mỹ và châu Âu.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao do doanh nghiệp dựa vào dữ liệu nhiều hơn.",
            competition:
                "Trung bình đến cao.",
            trend5to10years:
                "Data-driven business sẽ tiếp tục mở rộng mạnh.",
        },

        salaryBreakdown: {
            entry: "12 – 20 triệu/tháng",
            afterThreeToFiveYears: "30 – 70 triệu/tháng",
            senior: "80 – 220+ triệu/tháng",
        },

        pros: [
            "Ngành phát triển nhanh.",
            "Thu nhập tốt.",
            "Áp dụng nhiều lĩnh vực."
        ],
        cons: [
            "Cần kỹ năng phân tích mạnh.",
            "Làm việc với dữ liệu lớn.",
            "Phải học nhiều công cụ."
        ],
        reasonsPeopleQuit:
            "Chuyển sang Data Scientist hoặc AI Engineer.",

        requirements: [
            "Hiểu thống kê.",
            "Kỹ năng xử lý dữ liệu.",
            "Tư duy logic."
        ],
    },
    "5-5": {
        id: "5-5",
        name: "An ninh mạng",

        overview:
            "Chuyên gia an ninh mạng bảo vệ hệ thống máy tính, dữ liệu và mạng khỏi các cuộc tấn công mạng.",
        workEnvironment:
            "Làm việc tại công ty công nghệ, ngân hàng, tổ chức chính phủ hoặc doanh nghiệp lớn.",

        responsibilities: [
            "Phát hiện và ngăn chặn tấn công mạng.",
            "Kiểm tra lỗ hổng hệ thống.",
            "Bảo vệ dữ liệu doanh nghiệp.",
            "Xây dựng hệ thống bảo mật.",
            "Phân tích sự cố an ninh."
        ],
        skills: [
            "Bảo mật hệ thống",
            "Mạng máy tính",
            "Phân tích rủi ro",
            "Tư duy kỹ thuật",
            "Xử lý sự cố"
        ],
        subjectStrengths: ["Tin học", "Toán", "Công nghệ"],
        mbtiMatch: ["INTJ", "ISTP", "ISTJ"],
        healthRequirements:
            "Cần khả năng tập trung cao và phản ứng nhanh khi xảy ra sự cố.",

        educationPath: {
            majors: [
                "An toàn thông tin",
                "Công nghệ thông tin",
                "Khoa học máy tính"
            ],
            examGroups: [
                "A00",
                "A01",
                "D01"
            ],
            studyAbroad:
                "Các chương trình Cybersecurity rất phổ biến tại Mỹ và châu Âu.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu rất cao vì rủi ro an ninh mạng ngày càng tăng.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Bảo mật dữ liệu và hệ thống sẽ trở thành ưu tiên hàng đầu của doanh nghiệp.",
        },

        salaryBreakdown: {
            entry: "12 – 20 triệu/tháng",
            afterThreeToFiveYears: "35 – 80 triệu/tháng",
            senior: "90 – 250+ triệu/tháng",
        },

        pros: [
            "Nhu cầu nhân lực cao.",
            "Thu nhập tốt.",
            "Vai trò quan trọng trong doanh nghiệp."
        ],
        cons: [
            "Áp lực xử lý sự cố bảo mật.",
            "Cần học chuyên sâu.",
            "Công việc đòi hỏi kỹ thuật cao."
        ],
        reasonsPeopleQuit:
            "Chuyển sang tư vấn bảo mật hoặc quản lý hệ thống.",

        requirements: [
            "Kiến thức bảo mật mạng.",
            "Hiểu hệ thống máy tính.",
            "Kỹ năng phân tích sự cố."
        ],
    },
    "6-1": {
        id: "6-1",
        name: "Kỹ sư cơ khí",

        overview:
            "Kỹ sư cơ khí thiết kế, chế tạo, cải tiến và bảo trì các hệ thống máy móc và thiết bị cơ khí trong công nghiệp. Họ đóng vai trò quan trọng trong sản xuất, chế tạo và phát triển công nghệ cơ khí.",
        workEnvironment:
            "Làm việc tại nhà máy, xưởng sản xuất, công ty kỹ thuật hoặc trung tâm R&D. Có thể kết hợp giữa văn phòng thiết kế và khu vực sản xuất.",

        responsibilities: [
            "Thiết kế và phát triển máy móc hoặc thiết bị cơ khí.",
            "Phân tích bản vẽ kỹ thuật và mô phỏng hệ thống.",
            "Giám sát quá trình chế tạo và lắp ráp.",
            "Cải tiến hiệu suất và độ bền của máy móc.",
            "Phối hợp với các bộ phận sản xuất và kỹ thuật khác."
        ],
        skills: [
            "Thiết kế kỹ thuật",
            "CAD/CAM",
            "Phân tích kỹ thuật",
            "Giải quyết vấn đề",
            "Tư duy hệ thống",
            "Quản lý dự án kỹ thuật"
        ],
        subjectStrengths: ["Toán", "Vật lý", "Tin học"],
        mbtiMatch: ["INTJ", "ISTJ", "ENTJ", "ISTP"],
        healthRequirements:
            "Cần sức khỏe tốt, có thể làm việc tại nhà máy và môi trường kỹ thuật.",

        educationPath: {
            majors: [
                "Kỹ thuật cơ khí",
                "Cơ điện tử",
                "Kỹ thuật chế tạo máy",
                "Kỹ thuật công nghiệp"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)"
            ],
            studyAbroad:
                "Các nước mạnh về cơ khí như Đức, Nhật Bản, Hàn Quốc và Mỹ có nhiều chương trình đào tạo chất lượng cao."
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu ổn định trong các ngành sản xuất, chế tạo và công nghiệp.",
            competition:
                "Trung bình, nhưng yêu cầu kỹ năng thực hành và kinh nghiệm dự án.",
            trend5to10years:
                "Cơ khí thông minh, robot công nghiệp và sản xuất tự động sẽ phát triển mạnh."
        },

        salaryBreakdown: {
            entry: "9 – 16 triệu/tháng",
            afterThreeToFiveYears: "18 – 40 triệu/tháng",
            senior: "45 – 120+ triệu/tháng"
        },

        pros: [
            "Nhu cầu nhân lực ổn định.",
            "Ứng dụng rộng trong nhiều ngành công nghiệp.",
            "Cơ hội làm việc tại các tập đoàn sản xuất lớn.",
            "Có thể tham gia các dự án kỹ thuật lớn."
        ],
        cons: [
            "Có thể làm việc trong môi trường nhà máy.",
            "Áp lực tiến độ dự án.",
            "Yêu cầu kiến thức kỹ thuật chuyên sâu.",
            "Cần cập nhật công nghệ liên tục."
        ],
        reasonsPeopleQuit:
            "Môi trường công nghiệp áp lực hoặc chuyển sang quản lý kỹ thuật hoặc kinh doanh kỹ thuật.",

        requirements: [
            "Bằng cử nhân kỹ thuật cơ khí hoặc liên quan.",
            "Thành thạo phần mềm thiết kế kỹ thuật.",
            "Kiến thức về hệ thống máy móc và sản xuất."
        ]
    },
    "6-2": {
        id: "6-2",
        name: "Kỹ sư điện – điện tử",

        overview:
            "Kỹ sư điện – điện tử thiết kế, phát triển và quản lý các hệ thống điện, mạch điện tử và thiết bị điện tử trong công nghiệp và đời sống.",
        workEnvironment:
            "Làm việc tại công ty công nghệ, nhà máy sản xuất điện tử, trung tâm nghiên cứu hoặc công trình kỹ thuật.",

        responsibilities: [
            "Thiết kế mạch điện và hệ thống điện.",
            "Kiểm tra và thử nghiệm thiết bị điện tử.",
            "Phát triển sản phẩm điện tử mới.",
            "Phân tích lỗi hệ thống điện.",
            "Đảm bảo hệ thống điện vận hành an toàn."
        ],
        skills: [
            "Phân tích mạch điện",
            "Thiết kế PCB",
            "Lập trình nhúng",
            "Giải quyết sự cố kỹ thuật",
            "Tư duy logic",
            "Đọc bản vẽ kỹ thuật"
        ],
        subjectStrengths: ["Toán", "Vật lý", "Tin học"],
        mbtiMatch: ["INTP", "ISTJ", "ENTJ", "INTJ"],
        healthRequirements:
            "Cần sự tập trung cao và khả năng làm việc với thiết bị điện.",

        educationPath: {
            majors: [
                "Kỹ thuật điện",
                "Kỹ thuật điện tử",
                "Kỹ thuật điện – điện tử",
                "Kỹ thuật viễn thông"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)"
            ],
            studyAbroad:
                "Mỹ, Hàn Quốc, Đài Loan và Nhật Bản có nhiều chương trình mạnh về điện tử và bán dẫn."
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao trong các ngành công nghệ, năng lượng và sản xuất điện tử.",
            competition:
                "Trung bình đến cao ở các công ty công nghệ lớn.",
            trend5to10years:
                "Phát triển mạnh trong lĩnh vực bán dẫn, IoT và năng lượng thông minh."
        },

        salaryBreakdown: {
            entry: "10 – 18 triệu/tháng",
            afterThreeToFiveYears: "20 – 45 triệu/tháng",
            senior: "50 – 150+ triệu/tháng"
        },

        pros: [
            "Cơ hội làm việc trong ngành công nghệ cao.",
            "Nhu cầu nhân lực lớn.",
            "Có thể tham gia phát triển sản phẩm công nghệ.",
            "Mức lương tăng nhanh theo kinh nghiệm."
        ],
        cons: [
            "Yêu cầu kiến thức kỹ thuật sâu.",
            "Công việc có thể áp lực dự án.",
            "Cần học công nghệ mới liên tục.",
            "Đôi khi phải xử lý sự cố khẩn cấp."
        ],
        reasonsPeopleQuit:
            "Áp lực kỹ thuật cao hoặc chuyển sang lĩnh vực công nghệ phần mềm.",

        requirements: [
            "Bằng cử nhân ngành điện – điện tử hoặc liên quan.",
            "Hiểu biết về hệ thống điện và mạch điện.",
            "Kỹ năng phân tích và thiết kế kỹ thuật."
        ]
    },
    "6-3": {
        id: "6-3",
        name: "Kỹ sư tự động hóa",

        overview:
            "Kỹ sư tự động hóa phát triển và triển khai các hệ thống tự động trong sản xuất và công nghiệp, giúp tối ưu hóa quy trình và giảm sự phụ thuộc vào lao động thủ công.",
        workEnvironment:
            "Làm việc tại nhà máy thông minh, công ty công nghệ công nghiệp hoặc dự án sản xuất tự động.",

        responsibilities: [
            "Thiết kế hệ thống điều khiển tự động.",
            "Lập trình PLC và hệ thống điều khiển.",
            "Tối ưu hóa dây chuyền sản xuất.",
            "Giám sát và cải tiến hệ thống tự động.",
            "Phối hợp với đội kỹ thuật và sản xuất."
        ],
        skills: [
            "Lập trình PLC",
            "Hệ thống điều khiển",
            "Phân tích hệ thống",
            "Robot công nghiệp",
            "Giải quyết vấn đề kỹ thuật",
            "Tư duy logic"
        ],
        subjectStrengths: ["Toán", "Vật lý", "Tin học"],
        mbtiMatch: ["INTJ", "ISTP", "ENTP", "ENTJ"],
        healthRequirements:
            "Cần khả năng làm việc tại môi trường nhà máy và di chuyển theo dự án.",

        educationPath: {
            majors: [
                "Kỹ thuật điều khiển và tự động hóa",
                "Cơ điện tử",
                "Kỹ thuật điện",
                "Robot và hệ thống thông minh"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)"
            ],
            studyAbroad:
                "Đức, Nhật Bản và Hàn Quốc là những quốc gia dẫn đầu về tự động hóa công nghiệp."
        },

        jobMarket: {
            employmentRate:
                "Rất cao trong bối cảnh chuyển đổi sang nhà máy thông minh.",
            competition:
                "Trung bình, nhưng cần kỹ năng thực tế và kinh nghiệm dự án.",
            trend5to10years:
                "Tự động hóa, AI trong sản xuất và robot công nghiệp sẽ tăng trưởng mạnh."
        },

        salaryBreakdown: {
            entry: "12 – 20 triệu/tháng",
            afterThreeToFiveYears: "25 – 55 triệu/tháng",
            senior: "60 – 180+ triệu/tháng"
        },

        pros: [
            "Ngành đang phát triển nhanh.",
            "Nhu cầu nhân lực cao.",
            "Công việc liên quan đến công nghệ hiện đại.",
            "Cơ hội tham gia các dự án lớn."
        ],
        cons: [
            "Yêu cầu kiến thức đa lĩnh vực.",
            "Áp lực khi triển khai hệ thống thực tế.",
            "Cần học công nghệ mới liên tục.",
            "Có thể phải đi công tác."
        ],
        reasonsPeopleQuit:
            "Khối lượng công việc dự án lớn hoặc chuyển sang quản lý kỹ thuật.",

        requirements: [
            "Bằng cử nhân kỹ thuật tự động hóa hoặc liên quan.",
            "Kiến thức về hệ thống điều khiển.",
            "Kỹ năng lập trình kỹ thuật."
        ]
    },
    "6-4": {
        id: "6-4",
        name: "Bảo trì kỹ thuật",

        overview:
            "Nhân sự bảo trì kỹ thuật đảm bảo máy móc và hệ thống trong nhà máy hoặc doanh nghiệp hoạt động ổn định bằng cách kiểm tra, sửa chữa và bảo trì định kỳ.",
        workEnvironment:
            "Làm việc tại nhà máy, khu công nghiệp hoặc các hệ thống vận hành kỹ thuật.",

        responsibilities: [
            "Kiểm tra tình trạng thiết bị và máy móc.",
            "Thực hiện bảo trì định kỳ.",
            "Sửa chữa khi hệ thống gặp sự cố.",
            "Ghi chép và báo cáo tình trạng thiết bị.",
            "Đề xuất cải tiến để giảm hỏng hóc."
        ],
        skills: [
            "Chẩn đoán kỹ thuật",
            "Sửa chữa máy móc",
            "Hiểu hệ thống điện và cơ khí",
            "Giải quyết sự cố",
            "Làm việc thực tế",
            "Kỹ năng an toàn lao động"
        ],
        subjectStrengths: ["Vật lý", "Công nghệ", "Toán"],
        mbtiMatch: ["ISTP", "ISTJ", "ESTP", "ISFJ"],
        healthRequirements:
            "Cần sức khỏe tốt và khả năng làm việc trong môi trường kỹ thuật.",

        educationPath: {
            majors: [
                "Công nghệ kỹ thuật cơ khí",
                "Công nghệ kỹ thuật điện – điện tử",
                "Bảo trì công nghiệp",
                "Kỹ thuật cơ điện"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)"
            ],
            studyAbroad:
                "Các chương trình đào tạo nghề tại Đức, Nhật Bản rất mạnh về bảo trì công nghiệp."
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu ổn định trong hầu hết các nhà máy và khu công nghiệp.",
            competition:
                "Không quá cao nhưng yêu cầu tay nghề thực tế.",
            trend5to10years:
                "Bảo trì thông minh và bảo trì dự đoán (predictive maintenance) sẽ phát triển."
        },

        salaryBreakdown: {
            entry: "8 – 14 triệu/tháng",
            afterThreeToFiveYears: "15 – 30 triệu/tháng",
            senior: "35 – 70+ triệu/tháng"
        },

        pros: [
            "Nhu cầu ổn định.",
            "Dễ tìm việc trong khu công nghiệp.",
            "Có thể phát triển lên quản lý kỹ thuật.",
            "Công việc thực tế, ít lý thuyết."
        ],
        cons: [
            "Có thể làm việc theo ca.",
            "Môi trường nhà máy.",
            "Áp lực khi hệ thống gặp sự cố.",
            "Công việc đôi khi nặng về thể chất."
        ],
        reasonsPeopleQuit:
            "Làm việc theo ca hoặc chuyển sang vị trí kỹ sư hoặc quản lý kỹ thuật.",

        requirements: [
            "Bằng cao đẳng hoặc đại học ngành kỹ thuật liên quan.",
            "Kỹ năng sửa chữa và bảo trì thiết bị.",
            "Hiểu quy trình vận hành máy móc."
        ]
    },
    "7-1": {
        id: "7-1",
        name: "Kỹ sư xây dựng",

        overview:
            "Kỹ sư xây dựng thiết kế, tính toán và quản lý việc thi công các công trình như nhà ở, cầu đường, tòa nhà và hạ tầng kỹ thuật. Họ đảm bảo công trình an toàn, đúng kỹ thuật và đúng tiến độ.",
        workEnvironment:
            "Làm việc tại công trường xây dựng, văn phòng kỹ thuật hoặc công ty xây dựng. Thường xuyên di chuyển giữa công trường và văn phòng.",

        responsibilities: [
            "Thiết kế và tính toán kết cấu công trình.",
            "Lập kế hoạch thi công.",
            "Giám sát tiến độ và chất lượng công trình.",
            "Phối hợp với kiến trúc sư và nhà thầu.",
            "Đảm bảo công trình tuân thủ tiêu chuẩn kỹ thuật."
        ],
        skills: [
            "Phân tích kết cấu",
            "Đọc bản vẽ kỹ thuật",
            "Quản lý công trình",
            "Phần mềm kỹ thuật xây dựng",
            "Giải quyết vấn đề",
            "Làm việc nhóm"
        ],
        subjectStrengths: ["Toán", "Vật lý", "Công nghệ"],
        mbtiMatch: ["ISTJ", "ESTJ", "INTJ", "ENTJ"],
        healthRequirements:
            "Cần sức khỏe tốt để làm việc tại công trường và môi trường ngoài trời.",

        educationPath: {
            majors: [
                "Kỹ thuật xây dựng",
                "Xây dựng dân dụng và công nghiệp",
                "Kỹ thuật công trình",
                "Kỹ thuật hạ tầng"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)"
            ],
            studyAbroad:
                "Úc, Canada, Nhật Bản và Hàn Quốc có nhiều chương trình mạnh về kỹ thuật xây dựng."
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao trong lĩnh vực phát triển đô thị và hạ tầng.",
            competition:
                "Trung bình, nhưng yêu cầu kinh nghiệm thực tế tại công trường.",
            trend5to10years:
                "Xây dựng xanh, công trình thông minh và BIM sẽ trở nên phổ biến."
        },

        salaryBreakdown: {
            entry: "9 – 16 triệu/tháng",
            afterThreeToFiveYears: "18 – 40 triệu/tháng",
            senior: "45 – 120+ triệu/tháng"
        },

        pros: [
            "Nhu cầu nhân lực lớn.",
            "Cơ hội tham gia các dự án lớn.",
            "Có thể phát triển lên quản lý dự án.",
            "Thu nhập tăng theo kinh nghiệm."
        ],
        cons: [
            "Làm việc tại công trường.",
            "Áp lực tiến độ dự án.",
            "Di chuyển nhiều.",
            "Điều kiện làm việc đôi khi khắc nghiệt."
        ],
        reasonsPeopleQuit:
            "Áp lực công trường hoặc chuyển sang quản lý dự án hoặc kinh doanh xây dựng.",

        requirements: [
            "Bằng cử nhân kỹ thuật xây dựng hoặc liên quan.",
            "Hiểu bản vẽ và kết cấu công trình.",
            "Kỹ năng quản lý và giám sát thi công."
        ]
    },
    "7-2": {
        id: "7-2",
        name: "Kiến trúc sư",

        overview:
            "Kiến trúc sư thiết kế không gian và công trình xây dựng, đảm bảo tính thẩm mỹ, công năng và phù hợp với môi trường sử dụng.",
        workEnvironment:
            "Làm việc tại văn phòng thiết kế, công ty kiến trúc hoặc studio sáng tạo. Đôi khi khảo sát công trình thực tế.",

        responsibilities: [
            "Thiết kế ý tưởng kiến trúc.",
            "Phát triển bản vẽ công trình.",
            "Làm việc với khách hàng để hiểu nhu cầu.",
            "Phối hợp với kỹ sư xây dựng.",
            "Giám sát việc triển khai thiết kế."
        ],
        skills: [
            "Thiết kế kiến trúc",
            "Tư duy sáng tạo",
            "Phần mềm thiết kế (CAD, 3D)",
            "Trình bày ý tưởng",
            "Phân tích không gian",
            "Thẩm mỹ kiến trúc"
        ],
        subjectStrengths: ["Mỹ thuật", "Toán", "Vật lý"],
        mbtiMatch: ["INFP", "INTJ", "ENTP", "ISFP"],
        healthRequirements:
            "Cần khả năng tập trung và làm việc lâu với thiết kế.",

        educationPath: {
            majors: [
                "Kiến trúc",
                "Kiến trúc công trình",
                "Thiết kế đô thị",
                "Quy hoạch đô thị"
            ],
            examGroups: [
                "V00 (Toán, Lý, Vẽ)",
                "V01 (Toán, Văn, Vẽ)",
                "A01 (Toán, Lý, Anh)"
            ],
            studyAbroad:
                "Ý, Nhật Bản, Hàn Quốc và Úc có nhiều chương trình kiến trúc nổi tiếng."
        },

        jobMarket: {
            employmentRate:
                "Ổn định tại các công ty kiến trúc, bất động sản và xây dựng.",
            competition:
                "Khá cao trong các công ty thiết kế lớn.",
            trend5to10years:
                "Thiết kế bền vững và kiến trúc xanh sẽ trở nên quan trọng."
        },

        salaryBreakdown: {
            entry: "8 – 15 triệu/tháng",
            afterThreeToFiveYears: "18 – 35 triệu/tháng",
            senior: "40 – 100+ triệu/tháng"
        },

        pros: [
            "Công việc sáng tạo.",
            "Có thể tạo dấu ấn cá nhân trong thiết kế.",
            "Cơ hội làm việc trong các dự án lớn.",
            "Môi trường làm việc sáng tạo."
        ],
        cons: [
            "Thời gian làm việc dài khi chạy dự án.",
            "Cạnh tranh cao.",
            "Yêu cầu kỹ năng thiết kế tốt.",
            "Áp lực từ khách hàng và deadline."
        ],
        reasonsPeopleQuit:
            "Áp lực dự án hoặc chuyển sang kinh doanh thiết kế riêng.",

        requirements: [
            "Bằng cử nhân kiến trúc.",
            "Kỹ năng thiết kế và sáng tạo.",
            "Thành thạo phần mềm thiết kế."
        ]
    },
    "7-3": {
        id: "7-3",
        name: "Giám sát công trình",

        overview:
            "Giám sát công trình đảm bảo quá trình thi công xây dựng diễn ra đúng thiết kế, tiêu chuẩn kỹ thuật và tiến độ đã đề ra.",
        workEnvironment:
            "Làm việc chủ yếu tại công trường xây dựng và phối hợp với nhà thầu, kỹ sư và quản lý dự án.",

        responsibilities: [
            "Theo dõi tiến độ thi công.",
            "Kiểm tra chất lượng công trình.",
            "Đảm bảo an toàn lao động.",
            "Báo cáo tiến độ cho quản lý dự án.",
            "Phối hợp giải quyết vấn đề tại công trường."
        ],
        skills: [
            "Quản lý công trình",
            "Đọc bản vẽ xây dựng",
            "Kiểm soát chất lượng",
            "Giải quyết sự cố",
            "Kỹ năng giao tiếp",
            "Quản lý thời gian"
        ],
        subjectStrengths: ["Toán", "Vật lý", "Công nghệ"],
        mbtiMatch: ["ESTJ", "ISTJ", "ENTJ", "ESTP"],
        healthRequirements:
            "Cần sức khỏe tốt để làm việc tại công trường và di chuyển nhiều.",

        educationPath: {
            majors: [
                "Kỹ thuật xây dựng",
                "Quản lý xây dựng",
                "Kỹ thuật công trình",
                "Xây dựng dân dụng"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)"
            ],
            studyAbroad:
                "Các chương trình quản lý xây dựng tại Úc, Canada và Singapore khá phát triển."
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu ổn định trong ngành xây dựng.",
            competition:
                "Không quá cao nhưng yêu cầu kinh nghiệm thực tế.",
            trend5to10years:
                "Quản lý công trình bằng công nghệ số và BIM sẽ tăng."
        },

        salaryBreakdown: {
            entry: "9 – 15 triệu/tháng",
            afterThreeToFiveYears: "18 – 35 triệu/tháng",
            senior: "40 – 90+ triệu/tháng"
        },

        pros: [
            "Nhu cầu ổn định.",
            "Vai trò quan trọng trong dự án.",
            "Cơ hội phát triển lên quản lý dự án.",
            "Thu nhập tăng theo kinh nghiệm."
        ],
        cons: [
            "Làm việc ngoài công trường.",
            "Áp lực tiến độ.",
            "Đi công tác nhiều.",
            "Môi trường làm việc đôi khi khắc nghiệt."
        ],
        reasonsPeopleQuit:
            "Áp lực công trường hoặc chuyển sang quản lý dự án.",

        requirements: [
            "Bằng cử nhân ngành xây dựng hoặc liên quan.",
            "Kinh nghiệm công trường.",
            "Kỹ năng giám sát và quản lý."
        ]
    },
    "7-4": {
        id: "7-4",
        name: "Thiết kế nội thất",

        overview:
            "Nhà thiết kế nội thất tạo ra không gian bên trong công trình vừa thẩm mỹ vừa phù hợp với nhu cầu sử dụng của khách hàng.",
        workEnvironment:
            "Làm việc tại studio thiết kế, công ty nội thất hoặc làm freelance. Có thể khảo sát công trình thực tế.",

        responsibilities: [
            "Thiết kế không gian nội thất.",
            "Lên concept và phong cách thiết kế.",
            "Phối hợp với khách hàng và nhà thầu.",
            "Chọn vật liệu và đồ nội thất.",
            "Theo dõi quá trình thi công nội thất."
        ],
        skills: [
            "Thiết kế không gian",
            "Tư duy thẩm mỹ",
            "Phần mềm thiết kế 3D",
            "Trình bày ý tưởng",
            "Hiểu vật liệu nội thất",
            "Sáng tạo"
        ],
        subjectStrengths: ["Mỹ thuật", "Công nghệ", "Toán"],
        mbtiMatch: ["ISFP", "INFP", "ENFP", "INTJ"],
        healthRequirements:
            "Cần khả năng tập trung và làm việc với thiết kế trong thời gian dài.",

        educationPath: {
            majors: [
                "Thiết kế nội thất",
                "Thiết kế không gian",
                "Mỹ thuật ứng dụng",
                "Kiến trúc nội thất"
            ],
            examGroups: [
                "V00 (Toán, Lý, Vẽ)",
                "V01 (Toán, Văn, Vẽ)",
                "H00 (Văn, Vẽ, Vẽ sáng tạo)"
            ],
            studyAbroad:
                "Ý, Hàn Quốc và Anh nổi tiếng về đào tạo thiết kế và nội thất."
        },

        jobMarket: {
            employmentRate:
                "Tăng trưởng tốt nhờ ngành bất động sản và thiết kế nhà ở.",
            competition:
                "Khá cao vì nhiều người theo ngành sáng tạo.",
            trend5to10years:
                "Thiết kế không gian thông minh và nội thất bền vững sẽ phát triển."
        },

        salaryBreakdown: {
            entry: "7 – 14 triệu/tháng",
            afterThreeToFiveYears: "15 – 35 triệu/tháng",
            senior: "40 – 90+ triệu/tháng"
        },

        pros: [
            "Công việc sáng tạo.",
            "Có thể làm freelance.",
            "Nhiều cơ hội dự án cá nhân.",
            "Môi trường làm việc linh hoạt."
        ],
        cons: [
            "Thu nhập ban đầu có thể thấp.",
            "Cạnh tranh cao.",
            "Áp lực deadline dự án.",
            "Phụ thuộc vào khách hàng."
        ],
        reasonsPeopleQuit:
            "Khó tìm khách hàng ổn định hoặc chuyển sang kinh doanh nội thất.",

        requirements: [
            "Bằng cử nhân thiết kế nội thất hoặc liên quan.",
            "Kỹ năng thiết kế và thẩm mỹ.",
            "Thành thạo phần mềm thiết kế."
        ]
    },
    "8-1": {
        id: "8-1",
        name: "Kỹ sư môi trường",

        overview:
            "Kỹ sư môi trường nghiên cứu, thiết kế và triển khai các giải pháp nhằm giảm ô nhiễm và bảo vệ môi trường trong công nghiệp và đô thị.",
        workEnvironment:
            "Làm việc tại công ty môi trường, nhà máy, cơ quan quản lý môi trường hoặc dự án xử lý môi trường.",

        responsibilities: [
            "Đánh giá tác động môi trường.",
            "Thiết kế hệ thống xử lý chất thải.",
            "Giám sát các chỉ số môi trường.",
            "Đề xuất giải pháp bảo vệ môi trường.",
            "Làm việc với các cơ quan quản lý và doanh nghiệp."
        ],
        skills: [
            "Phân tích môi trường",
            "Đánh giá tác động môi trường (EIA)",
            "Quản lý dự án",
            "Phân tích dữ liệu",
            "Hiểu luật môi trường",
            "Giải quyết vấn đề"
        ],
        subjectStrengths: ["Sinh học", "Hóa học", "Địa lý"],
        mbtiMatch: ["INTJ", "ISTJ", "ENTJ", "INFP"],
        healthRequirements:
            "Cần khả năng làm việc ngoài hiện trường và khảo sát môi trường.",

        educationPath: {
            majors: [
                "Kỹ thuật môi trường",
                "Khoa học môi trường",
                "Quản lý tài nguyên môi trường",
                "Công nghệ môi trường"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "B00 (Toán, Hóa, Sinh)",
                "D07 (Toán, Hóa, Anh)"
            ],
            studyAbroad:
                "Úc, Canada và Hà Lan có nhiều chương trình đào tạo mạnh về môi trường và phát triển bền vững."
        },

        jobMarket: {
            employmentRate:
                "Tăng trưởng nhờ nhu cầu xử lý ô nhiễm và phát triển bền vững.",
            competition:
                "Trung bình, nhưng cần chuyên môn kỹ thuật.",
            trend5to10years:
                "Công nghệ xử lý môi trường và năng lượng xanh sẽ phát triển mạnh."
        },

        salaryBreakdown: {
            entry: "8 – 14 triệu/tháng",
            afterThreeToFiveYears: "15 – 30 triệu/tháng",
            senior: "35 – 80+ triệu/tháng"
        },

        pros: [
            "Đóng góp cho bảo vệ môi trường.",
            "Nhu cầu ngày càng tăng.",
            "Cơ hội làm việc trong nhiều ngành.",
            "Có thể tham gia các dự án quốc tế."
        ],
        cons: [
            "Có thể làm việc ngoài hiện trường.",
            "Thu nhập ban đầu không quá cao.",
            "Yêu cầu kiến thức chuyên ngành.",
            "Áp lực khi xử lý sự cố môi trường."
        ],
        reasonsPeopleQuit:
            "Chuyển sang lĩnh vực quản lý dự án môi trường hoặc phát triển bền vững.",

        requirements: [
            "Bằng cử nhân ngành môi trường hoặc liên quan.",
            "Hiểu các hệ thống xử lý môi trường.",
            "Kỹ năng phân tích và đánh giá."
        ]
    },
    "8-2": {
        id: "8-2",
        name: "Chuyên viên xử lý nước thải",

        overview:
            "Chuyên viên xử lý nước thải vận hành, kiểm soát và tối ưu các hệ thống xử lý nước thải nhằm đảm bảo nước thải đạt tiêu chuẩn trước khi thải ra môi trường.",
        workEnvironment:
            "Làm việc tại nhà máy xử lý nước thải, khu công nghiệp, công ty môi trường hoặc cơ quan quản lý môi trường.",

        responsibilities: [
            "Vận hành hệ thống xử lý nước thải.",
            "Theo dõi và kiểm tra chất lượng nước.",
            "Phân tích mẫu nước trong phòng thí nghiệm.",
            "Bảo trì thiết bị xử lý nước.",
            "Đảm bảo tuân thủ quy định môi trường."
        ],
        skills: [
            "Phân tích hóa học môi trường",
            "Vận hành hệ thống xử lý nước",
            "Giám sát kỹ thuật",
            "Xử lý sự cố",
            "Hiểu quy trình xử lý nước",
            "An toàn lao động"
        ],
        subjectStrengths: ["Hóa học", "Sinh học", "Toán"],
        mbtiMatch: ["ISTJ", "ISFJ", "ISTP", "INTJ"],
        healthRequirements:
            "Cần sức khỏe tốt để làm việc tại nhà máy và môi trường kỹ thuật.",

        educationPath: {
            majors: [
                "Kỹ thuật môi trường",
                "Công nghệ kỹ thuật môi trường",
                "Công nghệ xử lý nước",
                "Khoa học môi trường"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "B00 (Toán, Hóa, Sinh)",
                "D07 (Toán, Hóa, Anh)"
            ],
            studyAbroad:
                "Các chương trình môi trường tại Đức và Hà Lan rất mạnh về xử lý nước."
        },

        jobMarket: {
            employmentRate:
                "Ổn định trong các khu công nghiệp và đô thị.",
            competition:
                "Không quá cao nhưng cần tay nghề thực tế.",
            trend5to10years:
                "Công nghệ xử lý nước tiên tiến và tái sử dụng nước sẽ phát triển."
        },

        salaryBreakdown: {
            entry: "7 – 12 triệu/tháng",
            afterThreeToFiveYears: "13 – 25 triệu/tháng",
            senior: "30 – 60+ triệu/tháng"
        },

        pros: [
            "Nhu cầu ổn định.",
            "Dễ tìm việc tại khu công nghiệp.",
            "Công việc mang tính thực tế.",
            "Có thể phát triển lên quản lý hệ thống."
        ],
        cons: [
            "Có thể làm việc theo ca.",
            "Môi trường làm việc kỹ thuật.",
            "Tiếp xúc với nước thải và hóa chất.",
            "Áp lực vận hành hệ thống liên tục."
        ],
        reasonsPeopleQuit:
            "Điều kiện làm việc hoặc chuyển sang vị trí kỹ sư môi trường.",

        requirements: [
            "Bằng cao đẳng hoặc đại học ngành liên quan.",
            "Hiểu quy trình xử lý nước.",
            "Kỹ năng vận hành hệ thống kỹ thuật."
        ]
    },
    "8-3": {
        id: "8-3",
        name: "Nghiên cứu sinh học",

        overview:
            "Nhà nghiên cứu sinh học thực hiện các nghiên cứu khoa học về sinh vật, công nghệ sinh học hoặc y sinh nhằm phát triển kiến thức và ứng dụng mới.",
        workEnvironment:
            "Làm việc tại phòng thí nghiệm, viện nghiên cứu, trường đại học hoặc công ty công nghệ sinh học.",

        responsibilities: [
            "Thiết kế và thực hiện thí nghiệm sinh học.",
            "Phân tích dữ liệu nghiên cứu.",
            "Viết báo cáo khoa học.",
            "Phát triển ứng dụng sinh học mới.",
            "Hợp tác với các nhóm nghiên cứu."
        ],
        skills: [
            "Nghiên cứu khoa học",
            "Phân tích dữ liệu sinh học",
            "Kỹ thuật phòng thí nghiệm",
            "Tư duy phân tích",
            "Viết báo cáo khoa học",
            "Kiên nhẫn"
        ],
        subjectStrengths: ["Sinh học", "Hóa học", "Toán"],
        mbtiMatch: ["INTP", "INTJ", "INFP", "ISTJ"],
        healthRequirements:
            "Cần sự tập trung cao và làm việc trong môi trường phòng thí nghiệm.",

        educationPath: {
            majors: [
                "Công nghệ sinh học",
                "Sinh học",
                "Sinh học phân tử",
                "Sinh học ứng dụng"
            ],
            examGroups: [
                "B00 (Toán, Hóa, Sinh)",
                "A00 (Toán, Lý, Hóa)",
                "D08 (Toán, Sinh, Anh)"
            ],
            studyAbroad:
                "Mỹ, Nhật Bản, Singapore và Đức có nhiều chương trình nghiên cứu sinh học tiên tiến."
        },

        jobMarket: {
            employmentRate:
                "Tốt trong các viện nghiên cứu, trường đại học và công ty biotech.",
            competition:
                "Khá cao vì yêu cầu trình độ học vấn cao.",
            trend5to10years:
                "Công nghệ sinh học, y sinh và nông nghiệp công nghệ cao sẽ phát triển mạnh."
        },

        salaryBreakdown: {
            entry: "7 – 12 triệu/tháng",
            afterThreeToFiveYears: "15 – 30 triệu/tháng",
            senior: "35 – 90+ triệu/tháng"
        },

        pros: [
            "Công việc nghiên cứu chuyên sâu.",
            "Đóng góp cho khoa học và công nghệ.",
            "Cơ hội học lên cao.",
            "Có thể làm việc quốc tế."
        ],
        cons: [
            "Yêu cầu học vấn cao.",
            "Thu nhập ban đầu thấp.",
            "Thời gian nghiên cứu dài.",
            "Áp lực công bố nghiên cứu."
        ],
        reasonsPeopleQuit:
            "Chuyển sang ngành công nghiệp biotech hoặc giảng dạy.",

        requirements: [
            "Bằng cử nhân hoặc cao hơn ngành sinh học.",
            "Kỹ năng nghiên cứu và thí nghiệm.",
            "Tư duy phân tích khoa học."
        ]
    },
    "8-4": {
        id: "8-4",
        name: "Quản lý tài nguyên",

        overview:
            "Chuyên gia quản lý tài nguyên nghiên cứu và quản lý việc sử dụng các tài nguyên thiên nhiên như đất, nước, rừng và khoáng sản một cách bền vững.",
        workEnvironment:
            "Làm việc tại cơ quan nhà nước, tổ chức môi trường, dự án phát triển bền vững hoặc tổ chức quốc tế.",

        responsibilities: [
            "Đánh giá và quản lý tài nguyên thiên nhiên.",
            "Lập kế hoạch sử dụng tài nguyên bền vững.",
            "Nghiên cứu tác động môi trường.",
            "Phối hợp với chính quyền và tổ chức.",
            "Giám sát các dự án phát triển."
        ],
        skills: [
            "Phân tích môi trường",
            "Quản lý dự án",
            "Nghiên cứu tài nguyên",
            "Phân tích dữ liệu",
            "Lập kế hoạch",
            "Hiểu chính sách môi trường"
        ],
        subjectStrengths: ["Địa lý", "Sinh học", "Kinh tế"],
        mbtiMatch: ["INTJ", "INFJ", "ENTJ", "ISTJ"],
        healthRequirements:
            "Cần khả năng khảo sát thực địa và làm việc với nhiều tổ chức.",

        educationPath: {
            majors: [
                "Quản lý tài nguyên và môi trường",
                "Khoa học môi trường",
                "Quản lý đất đai",
                "Phát triển bền vững"
            ],
            examGroups: [
                "B00 (Toán, Hóa, Sinh)",
                "C00 (Văn, Sử, Địa)",
                "D01 (Toán, Văn, Anh)"
            ],
            studyAbroad:
                "Canada, Hà Lan và Thụy Điển có nhiều chương trình mạnh về quản lý tài nguyên."
        },

        jobMarket: {
            employmentRate:
                "Ổn định trong cơ quan quản lý và tổ chức môi trường.",
            competition:
                "Trung bình, nhưng yêu cầu kiến thức liên ngành.",
            trend5to10years:
                "Quản lý tài nguyên gắn với biến đổi khí hậu và phát triển bền vững sẽ tăng."
        },

        salaryBreakdown: {
            entry: "7 – 12 triệu/tháng",
            afterThreeToFiveYears: "14 – 28 triệu/tháng",
            senior: "30 – 70+ triệu/tháng"
        },

        pros: [
            "Đóng góp cho phát triển bền vững.",
            "Cơ hội làm việc trong các tổ chức quốc tế.",
            "Công việc mang ý nghĩa xã hội.",
            "Lĩnh vực đang được quan tâm toàn cầu."
        ],
        cons: [
            "Thu nhập ban đầu thấp.",
            "Yêu cầu kiến thức liên ngành.",
            "Có thể làm việc ngoài hiện trường.",
            "Phụ thuộc vào chính sách và dự án."
        ],
        reasonsPeopleQuit:
            "Chuyển sang lĩnh vực phát triển bền vững hoặc tư vấn môi trường.",

        requirements: [
            "Bằng cử nhân ngành liên quan.",
            "Hiểu quản lý tài nguyên và môi trường.",
            "Kỹ năng phân tích và lập kế hoạch."
        ]
    },
    // ─────────────────────────────────────────────────────
    // Khối 3: Chăm sóc – Xã hội
    // ─────────────────────────────────────────────────────
    "9-1": {
        id: "9-1",
        name: "Bác sĩ",

        overview:
            "Bác sĩ chẩn đoán, điều trị và phòng ngừa bệnh tật cho bệnh nhân, đóng vai trò quan trọng trong hệ thống chăm sóc sức khỏe.",
        workEnvironment:
            "Làm việc tại bệnh viện, phòng khám, trung tâm y tế hoặc viện nghiên cứu y học.",

        responsibilities: [
            "Khám và chẩn đoán bệnh cho bệnh nhân.",
            "Đề xuất và thực hiện phương pháp điều trị.",
            "Theo dõi quá trình hồi phục của bệnh nhân.",
            "Tư vấn sức khỏe và phòng bệnh.",
            "Hợp tác với các nhân viên y tế khác."
        ],
        skills: [
            "Chẩn đoán y khoa",
            "Giao tiếp với bệnh nhân",
            "Ra quyết định nhanh",
            "Phân tích lâm sàng",
            "Kiến thức y học",
            "Làm việc dưới áp lực"
        ],
        subjectStrengths: ["Sinh học", "Hóa học", "Toán"],
        mbtiMatch: ["ENTJ", "INFJ", "ISTJ", "ENFJ"],
        healthRequirements:
            "Cần sức khỏe tốt và khả năng làm việc với cường độ cao.",

        educationPath: {
            majors: [
                "Y đa khoa",
                "Y học dự phòng",
                "Y học cổ truyền",
                "Răng – Hàm – Mặt"
            ],
            examGroups: [
                "B00 (Toán, Hóa, Sinh)",
                "A00 (Toán, Lý, Hóa)"
            ],
            studyAbroad:
                "Mỹ, Nhật Bản, Hàn Quốc và Úc có nhiều chương trình đào tạo y khoa chất lượng cao."
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao trong hệ thống bệnh viện và chăm sóc sức khỏe.",
            competition:
                "Cao do yêu cầu đào tạo dài và tiêu chuẩn chuyên môn khắt khe.",
            trend5to10years:
                "Y học số, telemedicine và công nghệ y tế sẽ phát triển mạnh."
        },

        salaryBreakdown: {
            entry: "10 – 18 triệu/tháng",
            afterThreeToFiveYears: "20 – 45 triệu/tháng",
            senior: "50 – 200+ triệu/tháng"
        },

        pros: [
            "Công việc có ý nghĩa xã hội cao.",
            "Nhu cầu nhân lực ổn định.",
            "Cơ hội chuyên môn sâu.",
            "Thu nhập tăng theo kinh nghiệm."
        ],
        cons: [
            "Thời gian đào tạo dài.",
            "Áp lực công việc cao.",
            "Làm việc theo ca.",
            "Trách nhiệm lớn."
        ],
        reasonsPeopleQuit:
            "Áp lực nghề nghiệp cao hoặc chuyển sang nghiên cứu hoặc quản lý y tế.",

        requirements: [
            "Bằng đại học y khoa.",
            "Chứng chỉ hành nghề y.",
            "Kiến thức và kỹ năng lâm sàng."
        ]
    },
    "9-2": {
        id: "9-2",
        name: "Điều dưỡng",

        overview:
            "Điều dưỡng hỗ trợ bác sĩ và chăm sóc bệnh nhân trong quá trình điều trị, đảm bảo bệnh nhân được theo dõi và chăm sóc đúng quy trình y tế.",
        workEnvironment:
            "Làm việc tại bệnh viện, phòng khám, trung tâm chăm sóc sức khỏe hoặc viện dưỡng lão.",

        responsibilities: [
            "Chăm sóc bệnh nhân.",
            "Theo dõi tình trạng sức khỏe.",
            "Hỗ trợ bác sĩ trong điều trị.",
            "Quản lý hồ sơ bệnh án.",
            "Hướng dẫn bệnh nhân chăm sóc sức khỏe."
        ],
        skills: [
            "Chăm sóc bệnh nhân",
            "Giao tiếp y tế",
            "Làm việc nhóm",
            "Kiên nhẫn",
            "Xử lý tình huống",
            "Quản lý thời gian"
        ],
        subjectStrengths: ["Sinh học", "Hóa học", "Tâm lý học"],
        mbtiMatch: ["ISFJ", "ESFJ", "INFJ", "ENFJ"],
        healthRequirements:
            "Cần sức khỏe tốt và khả năng làm việc theo ca.",

        educationPath: {
            majors: [
                "Điều dưỡng",
                "Điều dưỡng đa khoa",
                "Chăm sóc sức khỏe"
            ],
            examGroups: [
                "B00 (Toán, Hóa, Sinh)",
                "D07 (Toán, Hóa, Anh)"
            ],
            studyAbroad:
                "Nhật Bản, Đức và Canada có nhu cầu lớn về điều dưỡng viên."
        },

        jobMarket: {
            employmentRate:
                "Rất cao do nhu cầu chăm sóc sức khỏe tăng.",
            competition:
                "Không quá cao, cơ hội việc làm rộng.",
            trend5to10years:
                "Nhu cầu điều dưỡng quốc tế và chăm sóc người cao tuổi tăng mạnh."
        },

        salaryBreakdown: {
            entry: "7 – 12 triệu/tháng",
            afterThreeToFiveYears: "13 – 25 triệu/tháng",
            senior: "30 – 60+ triệu/tháng"
        },

        pros: [
            "Dễ tìm việc.",
            "Nhu cầu cao trong và ngoài nước.",
            "Công việc ý nghĩa.",
            "Cơ hội làm việc quốc tế."
        ],
        cons: [
            "Làm việc theo ca.",
            "Áp lực công việc.",
            "Thu nhập ban đầu không cao.",
            "Cường độ làm việc lớn."
        ],
        reasonsPeopleQuit:
            "Áp lực công việc hoặc chuyển sang lĩnh vực chăm sóc sức khỏe khác.",

        requirements: [
            "Bằng cao đẳng hoặc đại học điều dưỡng.",
            "Chứng chỉ hành nghề.",
            "Kỹ năng chăm sóc bệnh nhân."
        ]
    },
    "9-3": {
        id: "9-3",
        name: "Dược sĩ",

        overview:
            "Dược sĩ nghiên cứu, sản xuất, kiểm tra chất lượng và phân phối thuốc nhằm đảm bảo an toàn và hiệu quả cho người sử dụng.",
        workEnvironment:
            "Làm việc tại nhà thuốc, bệnh viện, công ty dược phẩm hoặc phòng nghiên cứu.",

        responsibilities: [
            "Tư vấn sử dụng thuốc.",
            "Kiểm tra và phân phối thuốc.",
            "Nghiên cứu và phát triển dược phẩm.",
            "Quản lý kho thuốc.",
            "Đảm bảo tuân thủ quy định dược."
        ],
        skills: [
            "Kiến thức dược học",
            "Tư vấn y tế",
            "Quản lý thuốc",
            "Phân tích hóa học",
            "Cẩn thận",
            "Giao tiếp"
        ],
        subjectStrengths: ["Hóa học", "Sinh học", "Toán"],
        mbtiMatch: ["ISTJ", "ISFJ", "INTJ", "INFJ"],
        healthRequirements:
            "Cần sự chính xác và tập trung cao.",

        educationPath: {
            majors: [
                "Dược học",
                "Công nghệ dược phẩm",
                "Hóa dược"
            ],
            examGroups: [
                "B00 (Toán, Hóa, Sinh)",
                "A00 (Toán, Lý, Hóa)",
                "D07 (Toán, Hóa, Anh)"
            ],
            studyAbroad:
                "Mỹ, Anh và Úc có nhiều chương trình đào tạo dược phẩm tiên tiến."
        },

        jobMarket: {
            employmentRate:
                "Ổn định trong ngành dược và chăm sóc sức khỏe.",
            competition:
                "Khá cao ở các công ty dược lớn.",
            trend5to10years:
                "Công nghệ dược sinh học và sản xuất thuốc mới sẽ phát triển."
        },

        salaryBreakdown: {
            entry: "8 – 14 triệu/tháng",
            afterThreeToFiveYears: "15 – 30 triệu/tháng",
            senior: "35 – 90+ triệu/tháng"
        },

        pros: [
            "Nhu cầu ổn định.",
            "Cơ hội làm việc đa dạng.",
            "Môi trường làm việc ổn định.",
            "Có thể mở nhà thuốc riêng."
        ],
        cons: [
            "Yêu cầu kiến thức chuyên sâu.",
            "Áp lực trách nhiệm cao.",
            "Cạnh tranh trong ngành.",
            "Cần tuân thủ quy định nghiêm ngặt."
        ],
        reasonsPeopleQuit:
            "Chuyển sang kinh doanh dược phẩm hoặc lĩnh vực chăm sóc sức khỏe khác.",

        requirements: [
            "Bằng đại học dược.",
            "Chứng chỉ hành nghề dược.",
            "Hiểu biết về dược phẩm và quy định ngành."
        ]
    },
    "9-4": {
        id: "9-4",
        name: "Kỹ thuật viên xét nghiệm",

        overview:
            "Kỹ thuật viên xét nghiệm thực hiện các xét nghiệm y học để hỗ trợ bác sĩ chẩn đoán và theo dõi bệnh.",
        workEnvironment:
            "Làm việc tại phòng xét nghiệm bệnh viện, trung tâm y tế hoặc phòng lab y khoa.",

        responsibilities: [
            "Thực hiện xét nghiệm mẫu bệnh phẩm.",
            "Vận hành thiết bị xét nghiệm.",
            "Phân tích kết quả xét nghiệm.",
            "Đảm bảo quy trình an toàn phòng thí nghiệm.",
            "Báo cáo kết quả cho bác sĩ."
        ],
        skills: [
            "Kỹ thuật phòng thí nghiệm",
            "Phân tích mẫu",
            "Sử dụng thiết bị y tế",
            "Cẩn thận",
            "Tuân thủ quy trình",
            "Quản lý dữ liệu xét nghiệm"
        ],
        subjectStrengths: ["Sinh học", "Hóa học", "Toán"],
        mbtiMatch: ["ISTJ", "INTJ", "ISFJ", "INTP"],
        healthRequirements:
            "Cần sự tỉ mỉ và khả năng làm việc trong phòng thí nghiệm.",

        educationPath: {
            majors: [
                "Kỹ thuật xét nghiệm y học",
                "Xét nghiệm y học",
                "Công nghệ sinh học y học"
            ],
            examGroups: [
                "B00 (Toán, Hóa, Sinh)",
                "D07 (Toán, Hóa, Anh)"
            ],
            studyAbroad:
                "Nhật Bản, Hàn Quốc và Singapore có nhiều chương trình đào tạo xét nghiệm y học."
        },

        jobMarket: {
            employmentRate:
                "Ổn định tại bệnh viện và trung tâm xét nghiệm.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Công nghệ xét nghiệm tự động và y học chính xác sẽ phát triển."
        },

        salaryBreakdown: {
            entry: "7 – 11 triệu/tháng",
            afterThreeToFiveYears: "12 – 22 triệu/tháng",
            senior: "25 – 55+ triệu/tháng"
        },

        pros: [
            "Nhu cầu ổn định.",
            "Môi trường làm việc chuyên môn.",
            "Vai trò quan trọng trong chẩn đoán.",
            "Có thể chuyên sâu nhiều lĩnh vực xét nghiệm."
        ],
        cons: [
            "Công việc lặp lại.",
            "Áp lực độ chính xác cao.",
            "Làm việc trong phòng lab.",
            "Thu nhập ban đầu không cao."
        ],
        reasonsPeopleQuit:
            "Chuyển sang nghiên cứu hoặc lĩnh vực công nghệ sinh học.",

        requirements: [
            "Bằng cao đẳng hoặc đại học ngành xét nghiệm.",
            "Kỹ năng phòng thí nghiệm.",
            "Tuân thủ quy trình y tế."
        ]
    },
    "9-5": {
        id: "9-5",
        name: "Chuyên viên vật lý trị liệu",

        overview:
            "Chuyên viên vật lý trị liệu giúp bệnh nhân phục hồi chức năng vận động sau chấn thương, phẫu thuật hoặc bệnh lý. Công việc tập trung vào cải thiện khả năng vận động, giảm đau và nâng cao chất lượng cuộc sống cho người bệnh.",
        workEnvironment:
            "Làm việc tại bệnh viện, trung tâm phục hồi chức năng, phòng khám hoặc cơ sở y tế. Thường xuyên tiếp xúc trực tiếp với bệnh nhân và phối hợp với bác sĩ, điều dưỡng.",

        responsibilities: [
            "Đánh giá tình trạng vận động và chức năng cơ thể của bệnh nhân.",
            "Xây dựng chương trình phục hồi chức năng phù hợp.",
            "Hướng dẫn bệnh nhân thực hiện các bài tập trị liệu.",
            "Sử dụng thiết bị hỗ trợ vật lý trị liệu.",
            "Theo dõi tiến trình phục hồi và điều chỉnh phương pháp điều trị."
        ],
        skills: [
            "Kiến thức giải phẫu học",
            "Kỹ năng quan sát và đánh giá",
            "Giao tiếp với bệnh nhân",
            "Kiên nhẫn",
            "Kỹ năng hướng dẫn và trị liệu vận động",
            "Làm việc nhóm với nhân viên y tế"
        ],
        subjectStrengths: ["Sinh học", "Thể dục", "Tiếng Anh"],
        mbtiMatch: ["ISFJ", "ESFJ", "ENFJ", "INFJ"],
        healthRequirements:
            "Cần sức khỏe tốt, khả năng vận động linh hoạt và làm việc trực tiếp với bệnh nhân trong thời gian dài.",

        educationPath: {
            majors: [
                "Vật lý trị liệu",
                "Phục hồi chức năng",
                "Khoa học sức khỏe"
            ],
            examGroups: [
                "B00 (Toán, Hóa, Sinh)",
                "B08 (Toán, Sinh, Anh)",
                "A00 (Toán, Lý, Hóa)"
            ],
            studyAbroad:
                "Các chương trình phục hồi chức năng và vật lý trị liệu tại Úc, Canada và Nhật Bản khá phát triển.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu tăng do dân số già hóa và nhu cầu phục hồi chức năng sau chấn thương, tai nạn.",
            competition:
                "Mức cạnh tranh trung bình, nhưng yêu cầu tay nghề thực hành tốt.",
            trend5to10years:
                "Ngành phục hồi chức năng sẽ phát triển mạnh cùng với y học hiện đại và chăm sóc sức khỏe dài hạn.",
        },

        salaryBreakdown: {
            entry: "8 – 15 triệu/tháng",
            afterThreeToFiveYears: "15 – 30 triệu/tháng",
            senior: "35 – 70+ triệu/tháng",
        },

        pros: [
            "Ý nghĩa xã hội cao khi giúp bệnh nhân hồi phục.",
            "Nhu cầu ngày càng tăng.",
            "Có thể làm việc ở nhiều cơ sở y tế.",
            "Có thể mở phòng trị liệu riêng khi có kinh nghiệm."
        ],
        cons: [
            "Công việc đòi hỏi sức lực.",
            "Tiếp xúc với bệnh nhân thường xuyên.",
            "Cần kiên nhẫn trong quá trình điều trị dài.",
            "Áp lực khi bệnh nhân phục hồi chậm."
        ],
        reasonsPeopleQuit:
            "Áp lực công việc, yêu cầu thể lực cao hoặc chuyển sang mở phòng khám riêng.",

        requirements: [
            "Bằng cử nhân vật lý trị liệu hoặc phục hồi chức năng.",
            "Chứng chỉ hành nghề theo quy định.",
            "Kỹ năng làm việc với bệnh nhân."
        ],
    },
    "10-1": {
        id: "10-1",
        name: "Giáo viên mầm non",

        overview:
            "Giáo viên mầm non chăm sóc, giáo dục và phát triển kỹ năng cơ bản cho trẻ nhỏ trong giai đoạn đầu đời.",
        workEnvironment:
            "Làm việc tại trường mầm non, trung tâm giáo dục sớm hoặc cơ sở chăm sóc trẻ em.",

        responsibilities: [
            "Chăm sóc và đảm bảo an toàn cho trẻ.",
            "Tổ chức hoạt động học tập và vui chơi.",
            "Phát triển kỹ năng giao tiếp và xã hội cho trẻ.",
            "Theo dõi sự phát triển của trẻ.",
            "Phối hợp với phụ huynh."
        ],
        skills: [
            "Sư phạm mầm non",
            "Giao tiếp với trẻ",
            "Kiên nhẫn",
            "Tổ chức hoạt động",
            "Quan sát và đánh giá",
            "Sáng tạo"
        ],
        subjectStrengths: ["Văn", "Tâm lý học", "Mỹ thuật"],
        mbtiMatch: ["ESFJ", "ENFJ", "ISFJ", "ENFP"],
        healthRequirements:
            "Cần sức khỏe tốt và khả năng chăm sóc trẻ nhỏ.",

        educationPath: {
            majors: [
                "Giáo dục mầm non",
                "Sư phạm mầm non",
                "Giáo dục học"
            ],
            examGroups: [
                "C00 (Văn, Sử, Địa)",
                "D01 (Toán, Văn, Anh)",
                "M00 (Văn, Toán, Năng khiếu)"
            ],
            studyAbroad:
                "Nhật Bản, Hàn Quốc và Canada có nhiều chương trình giáo dục mầm non."
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu ổn định tại các trường mầm non và trung tâm giáo dục.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Giáo dục sớm và phát triển kỹ năng cho trẻ ngày càng được chú trọng."
        },

        salaryBreakdown: {
            entry: "6 – 9 triệu/tháng",
            afterThreeToFiveYears: "10 – 16 triệu/tháng",
            senior: "18 – 30+ triệu/tháng"
        },

        pros: [
            "Công việc ý nghĩa.",
            "Môi trường làm việc thân thiện.",
            "Ổn định.",
            "Được làm việc với trẻ em."
        ],
        cons: [
            "Áp lực chăm sóc trẻ.",
            "Thu nhập ban đầu thấp.",
            "Yêu cầu kiên nhẫn cao.",
            "Công việc đòi hỏi nhiều năng lượng."
        ],
        reasonsPeopleQuit:
            "Áp lực công việc hoặc chuyển sang quản lý giáo dục.",

        requirements: [
            "Bằng cao đẳng hoặc đại học giáo dục mầm non.",
            "Kỹ năng chăm sóc và giáo dục trẻ.",
            "Tình yêu với trẻ em."
        ]
    },

    "10-2": {
        id: "10-2",
        name: "Giáo viên THCS – THPT",

        overview:
            "Giáo viên THCS – THPT giảng dạy các môn học cho học sinh cấp trung học, giúp học sinh phát triển kiến thức và kỹ năng học tập.",
        workEnvironment:
            "Làm việc tại trường trung học cơ sở, trung học phổ thông hoặc trung tâm giáo dục.",

        responsibilities: [
            "Giảng dạy môn học chuyên môn.",
            "Chuẩn bị giáo án và tài liệu học tập.",
            "Đánh giá kết quả học tập của học sinh.",
            "Hướng dẫn và hỗ trợ học sinh.",
            "Tham gia hoạt động giáo dục của trường."
        ],
        skills: [
            "Kỹ năng giảng dạy",
            "Truyền đạt kiến thức",
            "Quản lý lớp học",
            "Giao tiếp",
            "Lập kế hoạch bài giảng",
            "Đánh giá học sinh"
        ],
        subjectStrengths: ["Văn", "Toán", "Ngoại ngữ"],
        mbtiMatch: ["ENFJ", "ESFJ", "INFJ", "INTJ"],
        healthRequirements:
            "Cần khả năng làm việc ổn định và giao tiếp với học sinh.",

        educationPath: {
            majors: [
                "Sư phạm Toán",
                "Sư phạm Ngữ văn",
                "Sư phạm Tiếng Anh",
                "Sư phạm Vật lý"
            ],
            examGroups: [
                "C00 (Văn, Sử, Địa)",
                "A00 (Toán, Lý, Hóa)",
                "D01 (Toán, Văn, Anh)"
            ],
            studyAbroad:
                "Phần Lan, Úc và Canada nổi tiếng với các chương trình đào tạo giáo viên."
        },

        jobMarket: {
            employmentRate:
                "Ổn định trong hệ thống giáo dục.",
            competition:
                "Trung bình đến cao tùy khu vực.",
            trend5to10years:
                "Giáo dục số và phương pháp học hiện đại sẽ phát triển."
        },

        salaryBreakdown: {
            entry: "7 – 10 triệu/tháng",
            afterThreeToFiveYears: "11 – 18 triệu/tháng",
            senior: "20 – 35+ triệu/tháng"
        },

        pros: [
            "Công việc ổn định.",
            "Ý nghĩa giáo dục xã hội.",
            "Lịch làm việc tương đối ổn định.",
            "Cơ hội phát triển chuyên môn."
        ],
        cons: [
            "Thu nhập ban đầu không cao.",
            "Áp lực từ chương trình học.",
            "Quản lý lớp học khó khăn.",
            "Khối lượng công việc ngoài giờ."
        ],
        reasonsPeopleQuit:
            "Áp lực công việc hoặc chuyển sang lĩnh vực đào tạo khác.",

        requirements: [
            "Bằng đại học sư phạm.",
            "Chứng chỉ nghiệp vụ sư phạm.",
            "Kỹ năng giảng dạy."
        ]
    },

    "10-3": {
        id: "10-3",
        name: "Giảng viên đại học",

        overview:
            "Giảng viên đại học giảng dạy, nghiên cứu và hướng dẫn sinh viên trong các lĩnh vực chuyên môn tại các trường đại học.",
        workEnvironment:
            "Làm việc tại trường đại học, viện nghiên cứu hoặc tổ chức giáo dục.",

        responsibilities: [
            "Giảng dạy sinh viên.",
            "Nghiên cứu khoa học.",
            "Hướng dẫn luận văn và nghiên cứu.",
            "Xây dựng chương trình đào tạo.",
            "Tham gia hội thảo và dự án nghiên cứu."
        ],
        skills: [
            "Giảng dạy chuyên sâu",
            "Nghiên cứu khoa học",
            "Phân tích học thuật",
            "Viết học thuật",
            "Thuyết trình",
            "Tư duy phản biện"
        ],
        subjectStrengths: ["Tùy chuyên ngành", "Ngoại ngữ", "Tư duy phân tích"],
        mbtiMatch: ["INTJ", "INTP", "INFJ", "ENTP"],
        healthRequirements:
            "Cần khả năng nghiên cứu và làm việc học thuật lâu dài.",

        educationPath: {
            majors: [
                "Chuyên ngành học thuật liên quan",
                "Giáo dục học",
                "Nghiên cứu chuyên ngành"
            ],
            examGroups: [
                "Tùy theo ngành học"
            ],
            studyAbroad:
                "Mỹ, Anh, Đức và Singapore có nhiều chương trình đào tạo sau đại học mạnh."
        },

        jobMarket: {
            employmentRate:
                "Ổn định nhưng yêu cầu trình độ cao.",
            competition:
                "Cao do yêu cầu bằng thạc sĩ hoặc tiến sĩ.",
            trend5to10years:
                "Nghiên cứu liên ngành và giáo dục trực tuyến sẽ tăng."
        },

        salaryBreakdown: {
            entry: "10 – 15 triệu/tháng",
            afterThreeToFiveYears: "18 – 30 triệu/tháng",
            senior: "35 – 80+ triệu/tháng"
        },

        pros: [
            "Công việc học thuật.",
            "Cơ hội nghiên cứu.",
            "Môi trường tri thức.",
            "Cơ hội hợp tác quốc tế."
        ],
        cons: [
            "Yêu cầu học vấn cao.",
            "Áp lực nghiên cứu.",
            "Cạnh tranh trong học thuật.",
            "Thu nhập ban đầu trung bình."
        ],
        reasonsPeopleQuit:
            "Chuyển sang nghiên cứu hoặc làm việc trong doanh nghiệp.",

        requirements: [
            "Bằng thạc sĩ hoặc tiến sĩ.",
            "Kỹ năng nghiên cứu.",
            "Khả năng giảng dạy."
        ]
    },

    "10-4": {
        id: "10-4",
        name: "Chuyên viên đào tạo doanh nghiệp",

        overview:
            "Chuyên viên đào tạo doanh nghiệp xây dựng và triển khai các chương trình đào tạo giúp nhân viên phát triển kỹ năng và nâng cao hiệu suất làm việc.",
        workEnvironment:
            "Làm việc tại phòng nhân sự của doanh nghiệp, trung tâm đào tạo hoặc công ty tư vấn.",

        responsibilities: [
            "Xây dựng chương trình đào tạo.",
            "Tổ chức khóa học cho nhân viên.",
            "Đánh giá hiệu quả đào tạo.",
            "Phát triển kỹ năng cho đội ngũ.",
            "Phối hợp với các phòng ban."
        ],
        skills: [
            "Thiết kế chương trình đào tạo",
            "Thuyết trình",
            "Giao tiếp",
            "Phân tích nhu cầu đào tạo",
            "Quản lý dự án",
            "Đánh giá hiệu quả"
        ],
        subjectStrengths: ["Kinh tế", "Tâm lý học", "Ngoại ngữ"],
        mbtiMatch: ["ENFJ", "ENTJ", "ENFP", "ESFJ"],
        healthRequirements:
            "Cần khả năng giao tiếp và làm việc với nhiều nhóm người.",

        educationPath: {
            majors: [
                "Quản trị nhân lực",
                "Giáo dục học",
                "Quản trị kinh doanh",
                "Tâm lý học"
            ],
            examGroups: [
                "A01 (Toán, Lý, Anh)",
                "D01 (Toán, Văn, Anh)",
                "C00 (Văn, Sử, Địa)"
            ],
            studyAbroad:
                "Singapore, Úc và Mỹ có nhiều chương trình đào tạo nhân sự và quản lý."
        },

        jobMarket: {
            employmentRate:
                "Tăng trưởng theo nhu cầu phát triển nhân lực doanh nghiệp.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Đào tạo kỹ năng số và học tập trực tuyến sẽ phát triển."
        },

        salaryBreakdown: {
            entry: "8 – 14 triệu/tháng",
            afterThreeToFiveYears: "15 – 30 triệu/tháng",
            senior: "35 – 80+ triệu/tháng"
        },

        pros: [
            "Cơ hội làm việc trong doanh nghiệp lớn.",
            "Phát triển kỹ năng con người.",
            "Môi trường năng động.",
            "Cơ hội thăng tiến."
        ],
        cons: [
            "Áp lực hiệu quả đào tạo.",
            "Cần kỹ năng giao tiếp tốt.",
            "Phải cập nhật kiến thức liên tục.",
            "Phụ thuộc vào nhu cầu doanh nghiệp."
        ],
        reasonsPeopleQuit:
            "Chuyển sang quản lý nhân sự hoặc tư vấn đào tạo.",

        requirements: [
            "Bằng cử nhân ngành liên quan.",
            "Kỹ năng đào tạo và thuyết trình.",
            "Hiểu quản lý nhân sự."
        ]
    },
    "11-1": {
        id: "11-1",
        name: "Nhà tâm lý học",

        overview:
            "Nhà tâm lý học là chuyên gia nghiên cứu và can thiệp vào hành vi, cảm xúc và nhận thức của con người. Họ hỗ trợ cá nhân vượt qua khủng hoảng tinh thần, rối loạn cảm xúc và cải thiện chất lượng cuộc sống thông qua liệu pháp tâm lý và đánh giá chuyên môn.",

        workEnvironment:
            "Làm việc tại bệnh viện, phòng khám tâm lý, trường học, trung tâm nghiên cứu hoặc mở phòng tham vấn riêng. Môi trường yên tĩnh, riêng tư và yêu cầu bảo mật cao.",

        responsibilities: [
            "Đánh giá và chẩn đoán các vấn đề tâm lý.",
            "Thực hiện liệu pháp cá nhân, nhóm hoặc gia đình.",
            "Nghiên cứu hành vi và phát triển công cụ đánh giá tâm lý.",
            "Viết báo cáo chuyên môn và phối hợp với bác sĩ khi cần thiết.",
            "Tư vấn phòng ngừa và nâng cao sức khỏe tinh thần cộng đồng.",
        ],

        skills: [
            "Lắng nghe chủ động",
            "Thấu cảm",
            "Phân tích hành vi",
            "Kiểm soát cảm xúc cá nhân",
            "Bảo mật thông tin",
            "Kỹ năng trị liệu",
        ],

        subjectStrengths: ["Sinh học", "Ngữ văn", "Giáo dục công dân", "Tiếng Anh"],

        mbtiMatch: ["INFJ", "INFP", "ENFJ", "ISFJ"],

        healthRequirements:
            "Tâm lý ổn định, khả năng chịu áp lực cảm xúc cao và không bị ảnh hưởng tiêu cực bởi câu chuyện của thân chủ.",

        educationPath: {
            majors: [
                "Tâm lý học",
                "Tâm lý học lâm sàng",
                "Tâm lý học giáo dục",
            ],
            examGroups: [
                "C00 (Văn, Sử, Địa)",
                "D01 (Toán, Văn, Anh)",
                "B00 (Toán, Hóa, Sinh)",
            ],
            studyAbroad:
                "Mỹ, Úc, Canada và Anh là các quốc gia có chương trình đào tạo Tâm lý học và Tâm lý lâm sàng phát triển mạnh.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu tăng nhanh do xã hội ngày càng quan tâm đến sức khỏe tinh thần.",
            competition:
                "Trung bình — yêu cầu bằng cấp cao và chứng chỉ hành nghề.",
            trend5to10years:
                "Tâm lý trị liệu online và chăm sóc sức khỏe tinh thần học đường sẽ tiếp tục phát triển mạnh.",
        },

        salaryBreakdown: {
            entry: "8 – 15 triệu/tháng",
            afterThreeToFiveYears: "15 – 30 triệu/tháng",
            senior: "40 – 80+ triệu/tháng (mở phòng riêng hoặc chuyên gia cao cấp)",
        },

        pros: [
            "Giúp đỡ người khác vượt qua khủng hoảng.",
            "Nhu cầu xã hội ngày càng cao.",
            "Có thể mở phòng tư vấn riêng.",
        ],

        cons: [
            "Áp lực cảm xúc lớn.",
            "Thời gian đào tạo dài.",
            "Thu nhập ban đầu chưa cao.",
        ],

        reasonsPeopleQuit:
            "Kiệt sức cảm xúc hoặc không chịu được áp lực từ các ca tâm lý phức tạp.",

        requirements: [
            "Bằng cử nhân Tâm lý học trở lên.",
            "Chứng chỉ hành nghề theo quy định.",
            "Kỹ năng trị liệu và đạo đức nghề nghiệp cao.",
        ],
    },
    "11-2": {
        id: "11-2",
        name: "Tham vấn học đường",

        overview:
            "Tham vấn học đường là chuyên viên hỗ trợ tâm lý cho học sinh trong môi trường trường học, giúp các em vượt qua khó khăn về học tập, cảm xúc, quan hệ bạn bè và định hướng phát triển cá nhân.",

        workEnvironment:
            "Làm việc tại trường tiểu học, THCS, THPT hoặc trung tâm giáo dục. Môi trường năng động, tiếp xúc thường xuyên với học sinh và giáo viên.",

        responsibilities: [
            "Tư vấn tâm lý cá nhân cho học sinh.",
            "Tổ chức workshop kỹ năng sống.",
            "Phối hợp với phụ huynh và giáo viên để hỗ trợ học sinh.",
            "Phòng ngừa bạo lực học đường và khủng hoảng tâm lý.",
            "Xây dựng chương trình giáo dục cảm xúc xã hội (SEL).",
        ],

        skills: [
            "Giao tiếp với trẻ em và thanh thiếu niên",
            "Lắng nghe",
            "Kiên nhẫn",
            "Giải quyết xung đột",
            "Tổ chức hoạt động nhóm",
        ],

        subjectStrengths: ["Ngữ văn", "Sinh học", "Giáo dục công dân"],

        mbtiMatch: ["ENFJ", "INFJ", "ESFJ", "ISFJ"],

        healthRequirements:
            "Tinh thần tích cực, yêu trẻ và có khả năng xử lý tình huống khẩn cấp bình tĩnh.",

        educationPath: {
            majors: [
                "Tâm lý học giáo dục",
                "Tâm lý học",
                "Công tác xã hội",
            ],
            examGroups: [
                "C00 (Văn, Sử, Địa)",
                "D01 (Toán, Văn, Anh)",
            ],
            studyAbroad:
                "Singapore, Úc và Canada có chương trình đào tạo Counseling in Education chất lượng.",
        },

        jobMarket: {
            employmentRate:
                "Tăng mạnh do yêu cầu bắt buộc có phòng tham vấn trong trường học.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Giáo dục cảm xúc xã hội và sức khỏe tinh thần học sinh sẽ là xu hướng trọng tâm.",
        },

        salaryBreakdown: {
            entry: "7 – 12 triệu/tháng",
            afterThreeToFiveYears: "12 – 20 triệu/tháng",
            senior: "25 – 40 triệu/tháng",
        },

        pros: [
            "Môi trường giáo dục tích cực.",
            "Tác động trực tiếp đến sự phát triển của học sinh.",
        ],

        cons: [
            "Thu nhập chưa cao.",
            "Phải xử lý các tình huống nhạy cảm.",
        ],

        reasonsPeopleQuit:
            "Áp lực từ phụ huynh hoặc thiếu sự ủng hộ từ nhà trường.",

        requirements: [
            "Bằng chuyên ngành Tâm lý hoặc Công tác xã hội.",
            "Kỹ năng làm việc với trẻ em.",
        ],
    },
    "11-3": {
        id: "11-3",
        name: "Chuyên viên công tác xã hội",

        overview:
            "Chuyên viên công tác xã hội hỗ trợ cá nhân, gia đình và cộng đồng yếu thế vượt qua khó khăn về kinh tế, tâm lý và xã hội. Họ là cầu nối giữa người dân và các dịch vụ hỗ trợ.",

        workEnvironment:
            "Làm việc tại trung tâm bảo trợ xã hội, bệnh viện, tổ chức phi chính phủ (NGO) hoặc cơ quan nhà nước. Thường xuyên đi thực địa.",

        responsibilities: [
            "Đánh giá hoàn cảnh và nhu cầu hỗ trợ.",
            "Kết nối người dân với nguồn lực xã hội.",
            "Can thiệp khủng hoảng gia đình.",
            "Tổ chức chương trình hỗ trợ cộng đồng.",
            "Bảo vệ quyền lợi nhóm yếu thế.",
        ],

        skills: [
            "Giao tiếp cộng đồng",
            "Đồng cảm",
            "Xử lý tình huống",
            "Làm việc thực địa",
            "Kiến thức pháp luật cơ bản",
        ],

        subjectStrengths: ["Ngữ văn", "Giáo dục công dân", "Lịch sử"],

        mbtiMatch: ["ENFP", "ESFJ", "INFJ", "ISFP"],

        healthRequirements:
            "Sức khỏe tốt để đi thực địa, tinh thần vững vàng khi làm việc với hoàn cảnh khó khăn.",

        educationPath: {
            majors: ["Công tác xã hội", "Xã hội học", "Phát triển cộng đồng"],
            examGroups: ["C00", "D01"],
            studyAbroad:
                "Úc, Canada và các nước Bắc Âu có hệ thống đào tạo Social Work phát triển.",
        },

        jobMarket: {
            employmentRate:
                "Ổn định trong khu vực nhà nước và NGO.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Tăng nhu cầu trong lĩnh vực bảo vệ trẻ em và an sinh xã hội.",
        },

        salaryBreakdown: {
            entry: "6 – 10 triệu/tháng",
            afterThreeToFiveYears: "10 – 18 triệu/tháng",
            senior: "20 – 35 triệu/tháng",
        },

        pros: [
            "Ý nghĩa xã hội cao.",
            "Tác động trực tiếp đến cộng đồng.",
        ],

        cons: [
            "Thu nhập không cao.",
            "Áp lực khi xử lý hoàn cảnh khó khăn.",
        ],

        reasonsPeopleQuit:
            "Kiệt sức vì khối lượng công việc lớn và đãi ngộ hạn chế.",

        requirements: [
            "Bằng cử nhân Công tác xã hội.",
            "Kỹ năng giao tiếp và hiểu biết pháp luật.",
        ],
    },
    "11-4": {
        id: "11-4",
        name: "Tư vấn hướng nghiệp",

        overview:
            "Tư vấn hướng nghiệp giúp học sinh, sinh viên và người đi làm xác định ngành nghề phù hợp dựa trên năng lực, tính cách và xu hướng thị trường lao động.",

        workEnvironment:
            "Làm việc tại trường học, trung tâm đào tạo, công ty nhân sự hoặc tổ chức giáo dục. Có thể làm online.",

        responsibilities: [
            "Phân tích tính cách và năng lực cá nhân.",
            "Cung cấp thông tin thị trường lao động.",
            "Tổ chức workshop định hướng nghề nghiệp.",
            "Hỗ trợ xây dựng lộ trình học tập và phát triển kỹ năng.",
            "Kết nối học viên với cơ hội thực tập và việc làm.",
        ],

        skills: [
            "Phân tích tính cách",
            "Hiểu thị trường lao động",
            "Giao tiếp truyền cảm hứng",
            "Tư duy chiến lược cá nhân",
        ],

        subjectStrengths: ["Ngữ văn", "Kinh tế", "Tiếng Anh"],

        mbtiMatch: ["ENFJ", "ENTP", "INFJ", "ENFP"],

        healthRequirements:
            "Không yêu cầu đặc biệt, nhưng cần năng lượng tích cực và khả năng giao tiếp tốt.",

        educationPath: {
            majors: [
                "Tâm lý học",
                "Quản trị nhân sự",
                "Giáo dục học",
            ],
            examGroups: ["C00", "D01", "A01"],
            studyAbroad:
                "Mỹ, Úc, Singapore có chương trình Career Counseling chuyên sâu.",
        },

        jobMarket: {
            employmentRate:
                "Tăng nhanh do nhu cầu định hướng nghề nghiệp sớm.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Hướng nghiệp kết hợp AI và phân tích dữ liệu sẽ là xu hướng lớn.",
        },

        salaryBreakdown: {
            entry: "8 – 15 triệu/tháng",
            afterThreeToFiveYears: "15 – 30 triệu/tháng",
            senior: "35 – 70+ triệu/tháng (chuyên gia độc lập)",
        },

        pros: [
            "Tạo ảnh hưởng tích cực đến tương lai người trẻ.",
            "Có thể làm độc lập hoặc xây dựng thương hiệu cá nhân.",
        ],

        cons: [
            "Cần cập nhật liên tục thông tin thị trường.",
            "Phụ thuộc vào uy tín cá nhân.",
        ],

        reasonsPeopleQuit:
            "Thiếu nguồn khách hàng ổn định hoặc áp lực doanh số tại trung tâm tư vấn.",

        requirements: [
            "Bằng chuyên ngành liên quan (Tâm lý, Nhân sự, Giáo dục).",
            "Kỹ năng đánh giá và phân tích cá nhân.",
        ],
    },
    // ─────────────────────────────────────────────────────
    // Khối 4: Dịch vụ – Du lịch – Giải trí
    // ─────────────────────────────────────────────────────
    "12-1": {
        id: "12-1",
        name: "Hướng dẫn viên du lịch",

        overview:
            "Hướng dẫn viên du lịch là người tổ chức, dẫn đoàn và cung cấp thông tin về điểm đến, văn hóa, lịch sử cho du khách. Công việc yêu cầu khả năng giao tiếp tốt, kiến thức địa lý – văn hóa và xử lý tình huống linh hoạt.",
        workEnvironment:
            "Làm việc ngoài hiện trường tại các điểm du lịch, di chuyển thường xuyên giữa nhiều địa phương hoặc quốc gia. Có thể làm việc cho công ty du lịch hoặc tự do.",

        responsibilities: [
            "Dẫn đoàn khách tham quan theo lịch trình.",
            "Thuyết minh về lịch sử, văn hóa và địa danh.",
            "Hỗ trợ du khách trong suốt chuyến đi.",
            "Xử lý các tình huống phát sinh trong tour.",
            "Phối hợp với công ty du lịch và các đối tác dịch vụ."
        ],
        skills: [
            "Giao tiếp",
            "Ngoại ngữ",
            "Thuyết trình",
            "Xử lý tình huống",
            "Tổ chức lịch trình",
            "Kiến thức văn hóa – địa lý"
        ],
        subjectStrengths: ["Địa lý", "Lịch sử", "Tiếng Anh"],
        mbtiMatch: ["ENFP", "ESFP", "ENFJ", "ENTP"],
        healthRequirements:
            "Cần sức khỏe tốt, khả năng di chuyển nhiều và làm việc ngoài trời.",

        educationPath: {
            majors: [
                "Quản trị du lịch và lữ hành",
                "Du lịch",
                "Việt Nam học (hướng du lịch)"
            ],
            examGroups: [
                "D01 (Toán, Văn, Anh)",
                "C00 (Văn, Sử, Địa)",
                "D14 (Văn, Sử, Anh)"
            ],
            studyAbroad:
                "Các chương trình du lịch – khách sạn tại Thái Lan, Singapore hoặc Thụy Sĩ khá nổi bật.",
        },

        jobMarket: {
            employmentRate:
                "Phụ thuộc vào sự phát triển của ngành du lịch và mùa du lịch.",
            competition:
                "Trung bình, nhưng yêu cầu ngoại ngữ và kỹ năng tốt.",
            trend5to10years:
                "Du lịch quốc tế và du lịch trải nghiệm sẽ tăng mạnh, cần hướng dẫn viên chuyên nghiệp.",
        },

        salaryBreakdown: {
            entry: "7 – 12 triệu/tháng",
            afterThreeToFiveYears: "12 – 25 triệu/tháng",
            senior: "30 – 60+ triệu/tháng",
        },

        pros: [
            "Được đi nhiều nơi.",
            "Môi trường năng động.",
            "Gặp gỡ nhiều người.",
            "Có cơ hội làm việc quốc tế."
        ],
        cons: [
            "Di chuyển nhiều, ít ổn định.",
            "Áp lực khi quản lý đoàn.",
            "Thu nhập có thể theo mùa.",
            "Thời gian làm việc không cố định."
        ],
        reasonsPeopleQuit:
            "Lịch trình dày đặc, di chuyển nhiều hoặc chuyển sang quản lý du lịch.",

        requirements: [
            "Bằng cấp liên quan đến du lịch.",
            "Thẻ hướng dẫn viên du lịch.",
            "Ngoại ngữ tốt."
        ],
    },
    "12-2": {
        id: "12-2",
        name: "Lễ tân khách sạn",

        overview:
            "Lễ tân khách sạn là người tiếp đón, hỗ trợ và giải quyết các yêu cầu của khách khi lưu trú. Đây là vị trí đại diện hình ảnh của khách sạn và đóng vai trò quan trọng trong trải nghiệm khách hàng.",
        workEnvironment:
            "Làm việc tại quầy lễ tân của khách sạn hoặc khu nghỉ dưỡng. Thường làm theo ca, bao gồm ca tối và cuối tuần.",

        responsibilities: [
            "Đón tiếp và làm thủ tục nhận – trả phòng cho khách.",
            "Giải đáp thắc mắc và hỗ trợ dịch vụ cho khách.",
            "Quản lý đặt phòng.",
            "Phối hợp với các bộ phận trong khách sạn.",
            "Xử lý phản hồi và khiếu nại của khách."
        ],
        skills: [
            "Giao tiếp",
            "Ngoại ngữ",
            "Chăm sóc khách hàng",
            "Xử lý tình huống",
            "Tổ chức công việc",
            "Thái độ chuyên nghiệp"
        ],
        subjectStrengths: ["Tiếng Anh", "Ngữ văn", "Kinh tế"],
        mbtiMatch: ["ESFJ", "ENFJ", "ISFJ", "ESFP"],
        healthRequirements:
            "Cần ngoại hình gọn gàng, sức khỏe ổn định và khả năng làm việc theo ca.",

        educationPath: {
            majors: [
                "Quản trị khách sạn",
                "Quản trị du lịch",
                "Quản trị dịch vụ"
            ],
            examGroups: [
                "D01 (Toán, Văn, Anh)",
                "A01 (Toán, Lý, Anh)",
                "C00 (Văn, Sử, Địa)"
            ],
            studyAbroad:
                "Các chương trình quản trị khách sạn tại Thụy Sĩ, Úc và Singapore rất nổi tiếng.",
        },

        jobMarket: {
            employmentRate:
                "Cao tại các thành phố du lịch và khu nghỉ dưỡng.",
            competition:
                "Trung bình, ưu tiên ứng viên có ngoại ngữ tốt.",
            trend5to10years:
                "Ngành khách sạn phát triển theo du lịch và dịch vụ cao cấp.",
        },

        salaryBreakdown: {
            entry: "6 – 10 triệu/tháng",
            afterThreeToFiveYears: "10 – 20 triệu/tháng",
            senior: "25 – 45+ triệu/tháng",
        },

        pros: [
            "Môi trường làm việc chuyên nghiệp.",
            "Cơ hội thăng tiến trong ngành khách sạn.",
            "Phát triển kỹ năng giao tiếp.",
            "Có thể làm việc tại khách sạn quốc tế."
        ],
        cons: [
            "Làm việc theo ca.",
            "Áp lực phục vụ khách hàng.",
            "Thu nhập ban đầu không cao.",
            "Cần ngoại ngữ tốt."
        ],
        reasonsPeopleQuit:
            "Áp lực dịch vụ khách hàng hoặc chuyển sang vị trí quản lý.",

        requirements: [
            "Bằng cấp ngành du lịch – khách sạn.",
            "Kỹ năng giao tiếp tốt.",
            "Ngoại ngữ."
        ],
    },
    "12-3": {
        id: "12-3",
        name: "Điều hành tour",

        overview:
            "Điều hành tour là người thiết kế, tổ chức và quản lý các chương trình du lịch. Họ đảm bảo tour diễn ra đúng kế hoạch và phối hợp giữa khách hàng, hướng dẫn viên và các nhà cung cấp dịch vụ.",
        workEnvironment:
            "Làm việc tại văn phòng công ty du lịch, thường xuyên liên lạc với đối tác, khách hàng và hướng dẫn viên.",

        responsibilities: [
            "Thiết kế chương trình du lịch.",
            "Đặt dịch vụ: khách sạn, xe, vé tham quan.",
            "Quản lý lịch trình tour.",
            "Hỗ trợ hướng dẫn viên và khách hàng.",
            "Giải quyết các vấn đề phát sinh trong tour."
        ],
        skills: [
            "Tổ chức và lập kế hoạch",
            "Giao tiếp",
            "Đàm phán",
            "Quản lý thời gian",
            "Phân tích chi phí",
            "Ngoại ngữ"
        ],
        subjectStrengths: ["Toán", "Địa lý", "Tiếng Anh"],
        mbtiMatch: ["ENTJ", "ESTJ", "ENFP", "INTJ"],
        healthRequirements:
            "Cần khả năng làm việc dưới áp lực và xử lý nhiều công việc cùng lúc.",

        educationPath: {
            majors: [
                "Quản trị du lịch và lữ hành",
                "Quản trị kinh doanh du lịch",
                "Du lịch"
            ],
            examGroups: [
                "D01 (Toán, Văn, Anh)",
                "A01 (Toán, Lý, Anh)",
                "C00 (Văn, Sử, Địa)"
            ],
            studyAbroad:
                "Các chương trình quản trị du lịch quốc tế tại Singapore và Úc khá phổ biến.",
        },

        jobMarket: {
            employmentRate:
                "Tốt khi ngành du lịch phát triển.",
            competition:
                "Trung bình đến cao tại các công ty lớn.",
            trend5to10years:
                "Tour cá nhân hóa và du lịch trải nghiệm sẽ tăng mạnh.",
        },

        salaryBreakdown: {
            entry: "8 – 14 triệu/tháng",
            afterThreeToFiveYears: "15 – 30 triệu/tháng",
            senior: "35 – 70+ triệu/tháng",
        },

        pros: [
            "Công việc năng động.",
            "Có cơ hội phát triển lên quản lý du lịch.",
            "Hiểu sâu về ngành du lịch.",
            "Mở rộng mạng lưới đối tác."
        ],
        cons: [
            "Áp lực tổ chức tour.",
            "Xử lý nhiều vấn đề phát sinh.",
            "Mùa cao điểm rất bận.",
            "Cần kỹ năng quản lý tốt."
        ],
        reasonsPeopleQuit:
            "Áp lực công việc hoặc chuyển sang kinh doanh du lịch riêng.",

        requirements: [
            "Bằng cấp ngành du lịch.",
            "Kỹ năng tổ chức và giao tiếp.",
            "Hiểu biết về thị trường du lịch."
        ],
    },
    "12-4": {
        id: "12-4",
        name: "Quản lý resort",

        overview:
            "Quản lý resort chịu trách nhiệm điều hành toàn bộ hoạt động của khu nghỉ dưỡng, bao gồm dịch vụ lưu trú, nhân sự, tài chính và trải nghiệm khách hàng.",
        workEnvironment:
            "Làm việc tại resort hoặc khu nghỉ dưỡng cao cấp, thường ở các địa điểm du lịch.",

        responsibilities: [
            "Quản lý hoạt động vận hành của resort.",
            "Giám sát nhân sự và chất lượng dịch vụ.",
            "Quản lý doanh thu và chi phí.",
            "Xây dựng chiến lược phát triển dịch vụ.",
            "Đảm bảo trải nghiệm khách hàng."
        ],
        skills: [
            "Lãnh đạo",
            "Quản lý vận hành",
            "Tài chính cơ bản",
            "Chăm sóc khách hàng",
            "Giao tiếp",
            "Ngoại ngữ"
        ],
        subjectStrengths: ["Kinh tế", "Tiếng Anh", "Toán"],
        mbtiMatch: ["ENTJ", "ESTJ", "ENFJ", "INTJ"],
        healthRequirements:
            "Cần khả năng làm việc cường độ cao và quản lý nhiều bộ phận.",

        educationPath: {
            majors: [
                "Quản trị khách sạn",
                "Quản trị du lịch",
                "Quản trị kinh doanh"
            ],
            examGroups: [
                "D01 (Toán, Văn, Anh)",
                "A01 (Toán, Lý, Anh)",
                "C00 (Văn, Sử, Địa)"
            ],
            studyAbroad:
                "Các chương trình quản trị khách sạn quốc tế tại Thụy Sĩ, Úc và Anh rất mạnh.",
        },

        jobMarket: {
            employmentRate:
                "Cao tại các khu du lịch phát triển.",
            competition:
                "Cao ở vị trí quản lý cấp cao.",
            trend5to10years:
                "Resort cao cấp và du lịch nghỉ dưỡng sẽ tiếp tục tăng trưởng.",
        },

        salaryBreakdown: {
            entry: "12 – 20 triệu/tháng",
            afterThreeToFiveYears: "30 – 70 triệu/tháng",
            senior: "80 – 250+ triệu/tháng",
        },

        pros: [
            "Thu nhập cao ở cấp quản lý.",
            "Môi trường làm việc quốc tế.",
            "Cơ hội phát triển nhanh.",
            "Mạng lưới quan hệ rộng."
        ],
        cons: [
            "Áp lực quản lý lớn.",
            "Thời gian làm việc dài.",
            "Yêu cầu kinh nghiệm thực tế.",
            "Cạnh tranh cao."
        ],
        reasonsPeopleQuit:
            "Áp lực quản lý hoặc chuyển sang kinh doanh khách sạn riêng.",

        requirements: [
            "Bằng cử nhân ngành liên quan.",
            "Kinh nghiệm trong ngành khách sạn.",
            "Kỹ năng lãnh đạo."
        ],
    },
    "13-1": {
        id: "13-1",
        name: "Đầu bếp",

        overview:
            "Đầu bếp là người trực tiếp chế biến món ăn trong nhà hàng, khách sạn hoặc cơ sở ẩm thực. Công việc bao gồm sáng tạo món ăn, đảm bảo chất lượng và quản lý quy trình nấu nướng.",

        workEnvironment:
            "Làm việc tại bếp nhà hàng, khách sạn, khu nghỉ dưỡng hoặc bếp công nghiệp. Môi trường làm việc năng động, áp lực cao vào giờ cao điểm.",

        responsibilities: [
            "Chuẩn bị và chế biến món ăn.",
            "Xây dựng thực đơn.",
            "Kiểm soát chất lượng nguyên liệu.",
            "Quản lý khu vực bếp và vệ sinh an toàn thực phẩm.",
            "Phối hợp với đội ngũ bếp và phục vụ."
        ],

        skills: [
            "Kỹ năng nấu ăn",
            "Sáng tạo món ăn",
            "Quản lý thời gian",
            "Làm việc nhóm",
            "Kiểm soát chất lượng",
            "Tổ chức bếp"
        ],

        subjectStrengths: ["Sinh học", "Hóa học", "Mỹ thuật"],
        mbtiMatch: ["ESFP", "ESTP", "ISFP", "ENTP"],

        healthRequirements:
            "Cần sức khỏe tốt, khả năng đứng lâu và làm việc trong môi trường nhiệt độ cao.",

        educationPath: {
            majors: [
                "Kỹ thuật chế biến món ăn",
                "Quản trị bếp và ẩm thực",
                "Quản trị nhà hàng – khách sạn"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "C00 (Văn, Sử, Địa)",
                "D01 (Toán, Văn, Anh)"
            ],
            studyAbroad:
                "Các trường đào tạo ẩm thực tại Pháp, Ý hoặc Thụy Sĩ nổi tiếng về đào tạo đầu bếp chuyên nghiệp."
        },

        jobMarket: {
            employmentRate:
                "Cao do ngành dịch vụ và du lịch phát triển.",
            competition:
                "Trung bình, nhưng đầu bếp giỏi và sáng tạo luôn được săn đón.",
            trend5to10years:
                "Ẩm thực quốc tế, ẩm thực sáng tạo và ẩm thực lành mạnh sẽ phát triển mạnh."
        },

        salaryBreakdown: {
            entry: "7 – 12 triệu/tháng",
            afterThreeToFiveYears: "15 – 35 triệu/tháng",
            senior: "40 – 100+ triệu/tháng"
        },

        pros: [
            "Cơ hội làm việc ở nhiều quốc gia.",
            "Công việc sáng tạo.",
            "Nhu cầu tuyển dụng ổn định.",
            "Có thể mở nhà hàng riêng."
        ],

        cons: [
            "Làm việc giờ giấc không cố định.",
            "Áp lực cao vào giờ cao điểm.",
            "Môi trường nóng và bận rộn."
        ],

        reasonsPeopleQuit:
            "Áp lực công việc cao hoặc chuyển sang kinh doanh ẩm thực.",

        requirements: [
            "Đào tạo nghề hoặc bằng chuyên ngành ẩm thực.",
            "Kỹ năng nấu ăn tốt.",
            "Kinh nghiệm làm việc trong bếp."
        ],
    },
    "13-2": {
        id: "13-2",
        name: "Bartender",

        overview:
            "Bartender là người pha chế đồ uống tại quầy bar, bao gồm cocktail, mocktail và các loại đồ uống khác, đồng thời tạo trải nghiệm cho khách hàng.",

        workEnvironment:
            "Làm việc tại quầy bar trong nhà hàng, khách sạn, quán bar hoặc khu giải trí. Môi trường năng động và giao tiếp nhiều với khách.",

        responsibilities: [
            "Pha chế đồ uống theo thực đơn.",
            "Sáng tạo đồ uống mới.",
            "Chuẩn bị nguyên liệu pha chế.",
            "Phục vụ và giao tiếp với khách hàng.",
            "Giữ quầy bar sạch sẽ và gọn gàng."
        ],

        skills: [
            "Pha chế đồ uống",
            "Giao tiếp",
            "Biểu diễn pha chế",
            "Sáng tạo",
            "Quản lý nguyên liệu",
            "Dịch vụ khách hàng"
        ],

        subjectStrengths: ["Tiếng Anh", "Mỹ thuật", "Hóa học"],
        mbtiMatch: ["ESFP", "ENFP", "ESTP", "ESFJ"],

        healthRequirements:
            "Cần sức khỏe tốt, có thể làm việc ban đêm và đứng lâu.",

        educationPath: {
            majors: [
                "Quản trị nhà hàng – khách sạn",
                "Nghệ thuật pha chế",
                "Dịch vụ du lịch"
            ],
            examGroups: [
                "D01 (Toán, Văn, Anh)",
                "C00 (Văn, Sử, Địa)"
            ],
            studyAbroad:
                "Các khóa đào tạo bartender tại Singapore hoặc châu Âu có tiêu chuẩn quốc tế."
        },

        jobMarket: {
            employmentRate:
                "Tăng do ngành du lịch và giải trí phát triển.",
            competition:
                "Trung bình, bartender có kỹ năng biểu diễn sẽ có lợi thế.",
            trend5to10years:
                "Cocktail sáng tạo và trải nghiệm khách hàng sẽ trở thành xu hướng."
        },

        salaryBreakdown: {
            entry: "6 – 10 triệu/tháng",
            afterThreeToFiveYears: "12 – 25 triệu/tháng",
            senior: "30 – 60+ triệu/tháng"
        },

        pros: [
            "Môi trường làm việc năng động.",
            "Cơ hội giao tiếp quốc tế.",
            "Có thể phát triển thành chuyên gia pha chế.",
            "Thu nhập tăng theo kinh nghiệm."
        ],

        cons: [
            "Làm việc ca đêm.",
            "Áp lực giờ cao điểm.",
            "Phải phục vụ nhiều khách cùng lúc."
        ],

        reasonsPeopleQuit:
            "Giờ làm việc không ổn định hoặc chuyển sang quản lý nhà hàng.",

        requirements: [
            "Đào tạo pha chế chuyên nghiệp.",
            "Kỹ năng giao tiếp tốt.",
            "Khả năng làm việc nhanh và chính xác."
        ],
    },
    "13-3": {
        id: "13-3",
        name: "Quản lý nhà hàng",

        overview:
            "Quản lý nhà hàng là người điều hành hoạt động kinh doanh của nhà hàng, bao gồm nhân sự, dịch vụ khách hàng, tài chính và vận hành.",

        workEnvironment:
            "Làm việc tại nhà hàng, khách sạn hoặc chuỗi nhà hàng. Thường xuyên tương tác với nhân viên và khách hàng.",

        responsibilities: [
            "Quản lý hoạt động hàng ngày của nhà hàng.",
            "Quản lý nhân viên.",
            "Đảm bảo chất lượng dịch vụ.",
            "Kiểm soát chi phí và doanh thu.",
            "Giải quyết phản hồi của khách hàng."
        ],

        skills: [
            "Lãnh đạo",
            "Quản lý vận hành",
            "Giao tiếp",
            "Giải quyết vấn đề",
            "Quản lý tài chính cơ bản",
            "Dịch vụ khách hàng"
        ],

        subjectStrengths: ["Kinh tế", "Toán", "Tiếng Anh"],
        mbtiMatch: ["ENTJ", "ESTJ", "ENFJ", "ESFJ"],

        healthRequirements:
            "Cần khả năng làm việc lâu dài và chịu áp lực vận hành.",

        educationPath: {
            majors: [
                "Quản trị nhà hàng – khách sạn",
                "Quản trị du lịch",
                "Quản trị kinh doanh"
            ],
            examGroups: [
                "A01 (Toán, Lý, Anh)",
                "D01 (Toán, Văn, Anh)",
                "C00 (Văn, Sử, Địa)"
            ],
            studyAbroad:
                "Các chương trình Hospitality Management tại Thụy Sĩ và Úc rất nổi tiếng."
        },

        jobMarket: {
            employmentRate:
                "Cao trong các thành phố du lịch và chuỗi nhà hàng.",
            competition:
                "Trung bình đến cao ở các thương hiệu lớn.",
            trend5to10years:
                "Quản lý nhà hàng kết hợp công nghệ và dịch vụ trải nghiệm khách hàng sẽ phát triển mạnh."
        },

        salaryBreakdown: {
            entry: "10 – 18 triệu/tháng",
            afterThreeToFiveYears: "25 – 50 triệu/tháng",
            senior: "60 – 120+ triệu/tháng"
        },

        pros: [
            "Cơ hội thăng tiến cao.",
            "Thu nhập tốt khi quản lý nhà hàng lớn.",
            "Môi trường năng động.",
            "Phát triển kỹ năng lãnh đạo."
        ],

        cons: [
            "Áp lực vận hành lớn.",
            "Làm việc nhiều giờ.",
            "Phải xử lý nhiều vấn đề phát sinh."
        ],

        reasonsPeopleQuit:
            "Áp lực quản lý cao hoặc chuyển sang mở nhà hàng riêng.",

        requirements: [
            "Bằng cử nhân ngành liên quan.",
            "Kỹ năng quản lý.",
            "Kinh nghiệm làm việc trong nhà hàng."
        ],
    },
    "13-4": {
        id: "13-4",
        name: "Chuyên gia ẩm thực",

        overview:
            "Chuyên gia ẩm thực là người nghiên cứu, đánh giá và phát triển các xu hướng ẩm thực, có thể làm việc trong truyền thông, tư vấn nhà hàng hoặc sáng tạo nội dung ẩm thực.",

        workEnvironment:
            "Làm việc trong nhà hàng cao cấp, công ty thực phẩm, truyền thông hoặc hoạt động độc lập như food critic hoặc food consultant.",

        responsibilities: [
            "Nghiên cứu và đánh giá món ăn.",
            "Phát triển thực đơn mới.",
            "Tư vấn chiến lược ẩm thực cho nhà hàng.",
            "Viết bài hoặc tạo nội dung về ẩm thực.",
            "Phân tích xu hướng ẩm thực."
        ],

        skills: [
            "Kiến thức ẩm thực sâu rộng",
            "Phân tích và đánh giá món ăn",
            "Viết và truyền thông",
            "Sáng tạo",
            "Nghiên cứu thị trường",
            "Giao tiếp"
        ],

        subjectStrengths: ["Ngữ văn", "Mỹ thuật", "Sinh học"],
        mbtiMatch: ["ENFP", "INFJ", "ENTP", "ISFP"],

        healthRequirements:
            "Cần sức khỏe tốt và khả năng di chuyển nhiều để trải nghiệm ẩm thực.",

        educationPath: {
            majors: [
                "Quản trị ẩm thực",
                "Quản trị nhà hàng – khách sạn",
                "Truyền thông",
                "Du lịch"
            ],
            examGroups: [
                "D01 (Toán, Văn, Anh)",
                "C00 (Văn, Sử, Địa)"
            ],
            studyAbroad:
                "Các chương trình ẩm thực và hospitality tại Pháp, Ý và Thụy Sĩ rất nổi tiếng."
        },

        jobMarket: {
            employmentRate:
                "Đang tăng nhờ sự phát triển của truyền thông và du lịch ẩm thực.",
            competition:
                "Khá cao vì yêu cầu kinh nghiệm và kiến thức sâu rộng.",
            trend5to10years:
                "Nội dung ẩm thực, đánh giá nhà hàng và tư vấn thương hiệu ẩm thực sẽ phát triển mạnh."
        },

        salaryBreakdown: {
            entry: "10 – 18 triệu/tháng",
            afterThreeToFiveYears: "25 – 60 triệu/tháng",
            senior: "70 – 150+ triệu/tháng"
        },

        pros: [
            "Công việc sáng tạo và thú vị.",
            "Cơ hội trải nghiệm nhiều nền ẩm thực.",
            "Có thể xây dựng thương hiệu cá nhân.",
            "Làm việc linh hoạt."
        ],

        cons: [
            "Cạnh tranh cao.",
            "Thu nhập phụ thuộc danh tiếng.",
            "Cần nhiều kinh nghiệm thực tế."
        ],

        reasonsPeopleQuit:
            "Khó xây dựng thương hiệu cá nhân hoặc chuyển sang kinh doanh ẩm thực.",

        requirements: [
            "Kiến thức ẩm thực chuyên sâu.",
            "Kỹ năng đánh giá và phân tích.",
            "Kinh nghiệm trong ngành nhà hàng."
        ],
    },
    "14-1": {
        id: "14-1",
        name: "Thiết kế đồ họa",

        overview:
            "Thiết kế đồ họa là lĩnh vực sáng tạo hình ảnh phục vụ truyền thông, quảng cáo, thương hiệu và sản phẩm số. Công việc kết hợp nghệ thuật thị giác với công nghệ thiết kế.",
        workEnvironment:
            "Làm việc tại công ty truyền thông, marketing, studio thiết kế hoặc làm freelancer.",

        responsibilities: [
            "Thiết kế logo, poster, banner và ấn phẩm truyền thông.",
            "Xây dựng nhận diện thương hiệu.",
            "Phối hợp với đội marketing và nội dung.",
            "Chỉnh sửa và tối ưu thiết kế theo yêu cầu.",
            "Sử dụng phần mềm thiết kế chuyên nghiệp."
        ],
        skills: [
            "Sáng tạo",
            "Thẩm mỹ",
            "Thiết kế số",
            "Tư duy hình ảnh",
            "Phần mềm thiết kế",
            "Giao tiếp"
        ],
        subjectStrengths: ["Mỹ thuật", "Tin học", "Tiếng Anh"],
        mbtiMatch: ["INFP", "ISFP", "ENFP", "INTP"],
        healthRequirements:
            "Có thể làm việc nhiều giờ trước máy tính.",

        educationPath: {
            majors: [
                "Thiết kế đồ họa",
                "Mỹ thuật ứng dụng",
                "Truyền thông đa phương tiện"
            ],
            examGroups: [
                "H00 (Văn, Vẽ, Vẽ)",
                "V00 (Toán, Lý, Vẽ)",
                "D01 (Toán, Văn, Anh)"
            ],
            studyAbroad:
                "Các chương trình thiết kế tại Anh, Hàn Quốc và Mỹ khá phát triển.",
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao trong marketing và truyền thông số.",
            competition:
                "Cao do nhiều người theo học ngành sáng tạo.",
            trend5to10years:
                "Thiết kế cho sản phẩm số, UI/UX và thương hiệu sẽ tăng mạnh.",
        },

        salaryBreakdown: {
            entry: "8 – 15 triệu/tháng",
            afterThreeToFiveYears: "18 – 35 triệu/tháng",
            senior: "40 – 90+ triệu/tháng",
        },

        pros: [
            "Công việc sáng tạo.",
            "Có thể làm freelancer.",
            "Nhu cầu thị trường cao.",
            "Cơ hội làm việc quốc tế."
        ],
        cons: [
            "Cạnh tranh cao.",
            "Deadline gấp.",
            "Cần cập nhật xu hướng liên tục.",
            "Áp lực khách hàng."
        ],
        reasonsPeopleQuit:
            "Áp lực sáng tạo hoặc chuyển sang UI/UX hoặc marketing.",

        requirements: [
            "Portfolio thiết kế.",
            "Kỹ năng phần mềm thiết kế.",
            "Tư duy sáng tạo."
        ],
    },
    "14-2": {
        id: "14-2",
        name: "Nhiếp ảnh gia",

        overview:
            "Nhiếp ảnh gia chuyên chụp ảnh nghệ thuật, thương mại hoặc sự kiện, tạo ra hình ảnh phục vụ truyền thông và lưu giữ khoảnh khắc.",
        workEnvironment:
            "Làm việc tại studio, sự kiện, ngoài trời hoặc làm việc tự do.",

        responsibilities: [
            "Chụp ảnh theo yêu cầu dự án.",
            "Chuẩn bị thiết bị và bối cảnh.",
            "Chỉnh sửa ảnh sau khi chụp.",
            "Làm việc với khách hàng hoặc đội sáng tạo.",
            "Quản lý thư viện hình ảnh."
        ],
        skills: [
            "Sáng tạo hình ảnh",
            "Kỹ thuật chụp ảnh",
            "Chỉnh sửa ảnh",
            "Thẩm mỹ",
            "Quan sát",
            "Giao tiếp khách hàng"
        ],
        subjectStrengths: ["Mỹ thuật", "Tin học", "Ngữ văn"],
        mbtiMatch: ["ISFP", "INFP", "ENFP", "ISTP"],
        healthRequirements:
            "Cần khả năng di chuyển và làm việc linh hoạt.",

        educationPath: {
            majors: [
                "Nhiếp ảnh",
                "Truyền thông đa phương tiện",
                "Mỹ thuật ứng dụng"
            ],
            examGroups: [
                "H00 (Văn, Vẽ, Vẽ)",
                "D01 (Toán, Văn, Anh)",
                "V00 (Toán, Lý, Vẽ)"
            ],
            studyAbroad:
                "Các trường nghệ thuật tại Mỹ và châu Âu nổi bật về nhiếp ảnh.",
        },

        jobMarket: {
            employmentRate:
                "Ổn định trong quảng cáo, truyền thông và sự kiện.",
            competition:
                "Khá cao.",
            trend5to10years:
                "Nội dung hình ảnh cho mạng xã hội tiếp tục tăng.",
        },

        salaryBreakdown: {
            entry: "7 – 12 triệu/tháng",
            afterThreeToFiveYears: "15 – 30 triệu/tháng",
            senior: "40 – 100+ triệu/tháng",
        },

        pros: [
            "Tự do sáng tạo.",
            "Có thể làm freelance.",
            "Cơ hội làm việc đa lĩnh vực.",
            "Phát triển thương hiệu cá nhân."
        ],
        cons: [
            "Thu nhập không ổn định ban đầu.",
            "Cạnh tranh cao.",
            "Cần đầu tư thiết bị.",
            "Áp lực khách hàng."
        ],
        reasonsPeopleQuit:
            "Thu nhập không ổn định hoặc chuyển sang sản xuất nội dung.",

        requirements: [
            "Kỹ năng chụp ảnh.",
            "Portfolio.",
            "Hiểu thiết bị và ánh sáng."
        ],
    },
    "14-3": {
        id: "14-3",
        name: "Diễn viên",

        overview:
            "Diễn viên thể hiện nhân vật trong phim, sân khấu hoặc quảng cáo, mang lại cảm xúc và câu chuyện cho khán giả.",
        workEnvironment:
            "Làm việc tại phim trường, sân khấu, studio hoặc địa điểm quay.",

        responsibilities: [
            "Thể hiện vai diễn theo kịch bản.",
            "Luyện tập và diễn xuất.",
            "Hợp tác với đạo diễn và đoàn phim.",
            "Tham gia casting.",
            "Quảng bá sản phẩm nghệ thuật."
        ],
        skills: [
            "Diễn xuất",
            "Biểu cảm",
            "Giao tiếp",
            "Ghi nhớ kịch bản",
            "Sáng tạo",
            "Làm việc nhóm"
        ],
        subjectStrengths: ["Ngữ văn", "Mỹ thuật", "Âm nhạc"],
        mbtiMatch: ["ENFP", "ESFP", "ENFJ", "INFP"],
        healthRequirements:
            "Cần thể lực, khả năng làm việc theo lịch quay dày.",

        educationPath: {
            majors: [
                "Diễn xuất",
                "Nghệ thuật sân khấu",
                "Điện ảnh"
            ],
            examGroups: [
                "N00 (Văn, Năng khiếu)",
                "H00 (Văn, Vẽ, Vẽ)",
                "D01 (Toán, Văn, Anh)"
            ],
            studyAbroad:
                "Các học viện điện ảnh tại Mỹ, Hàn Quốc và Anh rất nổi tiếng.",
        },

        jobMarket: {
            employmentRate:
                "Phụ thuộc vào cơ hội casting.",
            competition:
                "Rất cao.",
            trend5to10years:
                "Nền tảng streaming và nội dung số tạo thêm cơ hội.",
        },

        salaryBreakdown: {
            entry: "5 – 12 triệu/tháng",
            afterThreeToFiveYears: "20 – 60 triệu/tháng",
            senior: "100 – 500+ triệu/tháng",
        },

        pros: [
            "Cơ hội nổi tiếng.",
            "Công việc sáng tạo.",
            "Thu nhập cao nếu thành công.",
            "Làm việc trong ngành giải trí."
        ],
        cons: [
            "Cạnh tranh cực cao.",
            "Thu nhập không ổn định.",
            "Áp lực truyền thông.",
            "Lịch làm việc thất thường."
        ],
        reasonsPeopleQuit:
            "Khó tìm vai diễn ổn định.",

        requirements: [
            "Kỹ năng diễn xuất.",
            "Đào tạo nghệ thuật.",
            "Khả năng biểu cảm."
        ],
    },
    "14-4": {
        id: "14-4",
        name: "Biên tập viên",

        overview:
            "Biên tập viên chỉnh sửa, kiểm duyệt và hoàn thiện nội dung trước khi xuất bản trên báo chí, truyền hình hoặc nền tảng số.",
        workEnvironment:
            "Làm việc tại tòa soạn, công ty truyền thông hoặc nền tảng nội dung số.",

        responsibilities: [
            "Chỉnh sửa nội dung.",
            "Kiểm tra thông tin.",
            "Làm việc với tác giả.",
            "Định hướng nội dung.",
            "Quản lý lịch xuất bản."
        ],
        skills: [
            "Viết và chỉnh sửa",
            "Phân tích nội dung",
            "Ngôn ngữ",
            "Tư duy logic",
            "Quản lý thời gian",
            "Nghiên cứu"
        ],
        subjectStrengths: ["Ngữ văn", "Lịch sử", "Tiếng Anh"],
        mbtiMatch: ["INTJ", "INFJ", "ISTJ", "INFP"],
        healthRequirements:
            "Có thể làm việc nhiều giờ với nội dung và máy tính.",

        educationPath: {
            majors: [
                "Báo chí",
                "Truyền thông",
                "Ngữ văn"
            ],
            examGroups: [
                "C00 (Văn, Sử, Địa)",
                "D01 (Toán, Văn, Anh)",
                "D14 (Văn, Sử, Anh)"
            ],
            studyAbroad:
                "Các chương trình báo chí và truyền thông tại Anh, Mỹ khá nổi bật.",
        },

        jobMarket: {
            employmentRate:
                "Ổn định trong truyền thông và xuất bản.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Nội dung số và báo chí đa nền tảng tăng mạnh.",
        },

        salaryBreakdown: {
            entry: "7 – 12 triệu/tháng",
            afterThreeToFiveYears: "15 – 30 triệu/tháng",
            senior: "35 – 70+ triệu/tháng",
        },

        pros: [
            "Phát triển tư duy nội dung.",
            "Làm việc trong ngành truyền thông.",
            "Cơ hội phát triển lên quản lý nội dung.",
            "Môi trường sáng tạo."
        ],
        cons: [
            "Deadline nhiều.",
            "Áp lực kiểm duyệt nội dung.",
            "Thu nhập đầu trung bình.",
            "Cần cập nhật xu hướng."
        ],
        reasonsPeopleQuit:
            "Áp lực deadline hoặc chuyển sang sáng tạo nội dung.",

        requirements: [
            "Kỹ năng viết tốt.",
            "Khả năng phân tích.",
            "Hiểu truyền thông."
        ],
    },
    "14-5": {
        id: "14-5",
        name: "Animator",

        overview:
            "Animator tạo ra các chuyển động và nhân vật hoạt hình cho phim, game, quảng cáo và nội dung số.",
        workEnvironment:
            "Làm việc tại studio hoạt hình, công ty game hoặc công ty sản xuất nội dung.",

        responsibilities: [
            "Thiết kế chuyển động nhân vật.",
            "Tạo hoạt ảnh 2D hoặc 3D.",
            "Phối hợp với đội thiết kế và lập trình.",
            "Chỉnh sửa và tối ưu hoạt ảnh.",
            "Tham gia sản xuất dự án hoạt hình."
        ],
        skills: [
            "Vẽ và thiết kế",
            "Tư duy chuyển động",
            "Phần mềm animation",
            "Sáng tạo",
            "Kiên nhẫn",
            "Làm việc nhóm"
        ],
        subjectStrengths: ["Mỹ thuật", "Tin học", "Toán"],
        mbtiMatch: ["INFP", "INTP", "ISFP", "ENTP"],
        healthRequirements:
            "Làm việc lâu với máy tính và dự án dài hạn.",

        educationPath: {
            majors: [
                "Hoạt hình",
                "Thiết kế đa phương tiện",
                "Game art"
            ],
            examGroups: [
                "H00 (Văn, Vẽ, Vẽ)",
                "V00 (Toán, Lý, Vẽ)",
                "D01 (Toán, Văn, Anh)"
            ],
            studyAbroad:
                "Các chương trình animation mạnh tại Nhật Bản, Hàn Quốc và Mỹ.",
        },

        jobMarket: {
            employmentRate:
                "Tăng nhanh nhờ ngành game và phim hoạt hình.",
            competition:
                "Trung bình đến cao.",
            trend5to10years:
                "Animation cho game, phim và nội dung số sẽ phát triển mạnh.",
        },

        salaryBreakdown: {
            entry: "10 – 18 triệu/tháng",
            afterThreeToFiveYears: "20 – 40 triệu/tháng",
            senior: "50 – 120+ triệu/tháng",
        },

        pros: [
            "Công việc sáng tạo cao.",
            "Nhu cầu tăng trong ngành game.",
            "Cơ hội làm việc quốc tế.",
            "Dự án thú vị."
        ],
        cons: [
            "Dự án dài và deadline gấp.",
            "Cần kỹ năng chuyên sâu.",
            "Cạnh tranh.",
            "Áp lực sản xuất."
        ],
        reasonsPeopleQuit:
            "Áp lực dự án lớn hoặc chuyển sang ngành game.",

        requirements: [
            "Kỹ năng animation.",
            "Portfolio dự án.",
            "Thành thạo phần mềm."
        ],
    },
    // ─────────────────────────────────────────────────────
    // Khối 5: Sản xuất – Công nghiệp
    // ─────────────────────────────────────────────────────
    "15-1": {
        id: "15-1",
        name: "Quản lý nhà máy",

        overview:
            "Quản lý nhà máy chịu trách nhiệm điều hành toàn bộ hoạt động sản xuất trong nhà máy, bao gồm nhân sự, quy trình, thiết bị và hiệu suất vận hành.",
        workEnvironment:
            "Làm việc tại nhà máy hoặc khu công nghiệp, thường xuyên di chuyển giữa khu vực sản xuất và văn phòng quản lý.",

        responsibilities: [
            "Quản lý hoạt động sản xuất hàng ngày.",
            "Giám sát nhân sự và quy trình vận hành.",
            "Đảm bảo sản lượng và chất lượng sản phẩm.",
            "Quản lý chi phí và hiệu quả sản xuất.",
            "Cải tiến quy trình và tối ưu vận hành."
        ],
        skills: [
            "Lãnh đạo",
            "Quản lý vận hành",
            "Phân tích dữ liệu sản xuất",
            "Quản lý rủi ro",
            "Giải quyết vấn đề",
            "Quản lý nhân sự"
        ],
        subjectStrengths: ["Toán", "Vật lý", "Kinh tế"],
        mbtiMatch: ["ENTJ", "ESTJ", "INTJ", "ISTJ"],
        healthRequirements:
            "Cần khả năng làm việc trong môi trường công nghiệp và chịu áp lực quản lý cao.",

        educationPath: {
            majors: [
                "Quản lý công nghiệp",
                "Kỹ thuật công nghiệp",
                "Quản trị sản xuất"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)",
                "D01 (Toán, Văn, Anh)"
            ],
            studyAbroad:
                "Các chương trình quản lý sản xuất và vận hành tại Đức, Nhật Bản và Singapore rất mạnh.",
        },

        jobMarket: {
            employmentRate:
                "Cao tại các khu công nghiệp và doanh nghiệp sản xuất.",
            competition:
                "Cao ở cấp quản lý.",
            trend5to10years:
                "Nhà máy thông minh và tự động hóa sẽ thay đổi cách quản lý sản xuất.",
        },

        salaryBreakdown: {
            entry: "15 – 25 triệu/tháng",
            afterThreeToFiveYears: "35 – 80 triệu/tháng",
            senior: "90 – 250+ triệu/tháng",
        },

        pros: [
            "Thu nhập cao ở cấp quản lý.",
            "Ảnh hưởng lớn đến hoạt động doanh nghiệp.",
            "Cơ hội thăng tiến tốt.",
            "Nhu cầu ổn định."
        ],
        cons: [
            "Áp lực trách nhiệm cao.",
            "Thời gian làm việc dài.",
            "Môi trường công nghiệp.",
            "Yêu cầu kinh nghiệm thực tế."
        ],
        reasonsPeopleQuit:
            "Áp lực quản lý hoặc chuyển sang vị trí điều hành cấp cao.",

        requirements: [
            "Bằng cử nhân ngành liên quan.",
            "Kinh nghiệm sản xuất.",
            "Kỹ năng lãnh đạo."
        ],
    },
    "15-2": {
        id: "15-2",
        name: "Kỹ sư sản xuất",

        overview:
            "Kỹ sư sản xuất thiết kế, cải tiến và tối ưu quy trình sản xuất nhằm tăng hiệu quả, giảm chi phí và nâng cao chất lượng sản phẩm.",
        workEnvironment:
            "Làm việc tại nhà máy, dây chuyền sản xuất hoặc phòng kỹ thuật.",

        responsibilities: [
            "Thiết kế và cải tiến quy trình sản xuất.",
            "Phân tích hiệu suất dây chuyền.",
            "Giải quyết sự cố kỹ thuật.",
            "Tối ưu chi phí sản xuất.",
            "Phối hợp với bộ phận chất lượng và bảo trì."
        ],
        skills: [
            "Phân tích kỹ thuật",
            "Giải quyết vấn đề",
            "Quản lý quy trình",
            "Tư duy hệ thống",
            "Phân tích dữ liệu",
            "Làm việc nhóm"
        ],
        subjectStrengths: ["Toán", "Vật lý", "Công nghệ"],
        mbtiMatch: ["INTJ", "ISTJ", "ENTJ", "INTP"],
        healthRequirements:
            "Có thể làm việc trong môi trường sản xuất và di chuyển trong nhà máy.",

        educationPath: {
            majors: [
                "Kỹ thuật công nghiệp",
                "Kỹ thuật cơ khí",
                "Kỹ thuật sản xuất"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)",
                "B00 (Toán, Hóa, Sinh)"
            ],
            studyAbroad:
                "Các chương trình kỹ thuật sản xuất tại Đức, Nhật Bản và Hàn Quốc rất phát triển.",
        },

        jobMarket: {
            employmentRate:
                "Cao trong các ngành sản xuất và công nghiệp.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Tự động hóa và sản xuất thông minh sẽ tăng nhu cầu kỹ sư sản xuất.",
        },

        salaryBreakdown: {
            entry: "10 – 18 triệu/tháng",
            afterThreeToFiveYears: "20 – 40 triệu/tháng",
            senior: "45 – 100+ triệu/tháng",
        },

        pros: [
            "Nhu cầu tuyển dụng ổn định.",
            "Cơ hội làm việc tại doanh nghiệp lớn.",
            "Phát triển chuyên môn kỹ thuật.",
            "Có lộ trình lên quản lý."
        ],
        cons: [
            "Môi trường công nghiệp.",
            "Áp lực tiến độ sản xuất.",
            "Yêu cầu kỹ thuật cao.",
            "Cần cập nhật công nghệ."
        ],
        reasonsPeopleQuit:
            "Chuyển sang quản lý sản xuất hoặc tư vấn kỹ thuật.",

        requirements: [
            "Bằng kỹ sư ngành liên quan.",
            "Hiểu quy trình sản xuất.",
            "Kỹ năng phân tích kỹ thuật."
        ],
    },
    "15-3": {
        id: "15-3",
        name: "Kiểm soát chất lượng (QC/QA)",

        overview:
            "Nhân sự QC/QA đảm bảo sản phẩm và quy trình sản xuất đáp ứng các tiêu chuẩn chất lượng trước khi đưa ra thị trường.",
        workEnvironment:
            "Làm việc tại nhà máy, phòng kiểm định chất lượng hoặc phòng thí nghiệm.",

        responsibilities: [
            "Kiểm tra chất lượng sản phẩm.",
            "Đánh giá quy trình sản xuất.",
            "Phát hiện và xử lý lỗi.",
            "Lập báo cáo chất lượng.",
            "Đề xuất cải tiến quy trình."
        ],
        skills: [
            "Phân tích chi tiết",
            "Kiểm tra kỹ thuật",
            "Tư duy logic",
            "Quản lý quy trình",
            "Kiến thức tiêu chuẩn chất lượng",
            "Lập báo cáo"
        ],
        subjectStrengths: ["Hóa học", "Toán", "Vật lý"],
        mbtiMatch: ["ISTJ", "INTJ", "ISFJ", "ISTP"],
        healthRequirements:
            "Cẩn thận, tập trung cao và làm việc trong môi trường sản xuất.",

        educationPath: {
            majors: [
                "Quản lý chất lượng",
                "Kỹ thuật công nghiệp",
                "Công nghệ sản xuất"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)",
                "B00 (Toán, Hóa, Sinh)"
            ],
            studyAbroad:
                "Các chương trình quản lý chất lượng và sản xuất tại Nhật Bản và Đức khá nổi bật.",
        },

        jobMarket: {
            employmentRate:
                "Cao vì hầu hết doanh nghiệp sản xuất đều cần QC/QA.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Tiêu chuẩn chất lượng và kiểm soát tự động sẽ phát triển mạnh.",
        },

        salaryBreakdown: {
            entry: "8 – 14 triệu/tháng",
            afterThreeToFiveYears: "15 – 30 triệu/tháng",
            senior: "35 – 70+ triệu/tháng",
        },

        pros: [
            "Nhu cầu ổn định.",
            "Vai trò quan trọng trong doanh nghiệp.",
            "Phát triển chuyên môn kỹ thuật.",
            "Có thể thăng tiến lên quản lý chất lượng."
        ],
        cons: [
            "Công việc chi tiết và áp lực.",
            "Môi trường nhà máy.",
            "Trách nhiệm cao về lỗi sản phẩm.",
            "Cần tuân thủ quy trình nghiêm ngặt."
        ],
        reasonsPeopleQuit:
            "Áp lực kiểm soát chất lượng hoặc chuyển sang quản lý sản xuất.",

        requirements: [
            "Bằng ngành kỹ thuật liên quan.",
            "Hiểu tiêu chuẩn chất lượng.",
            "Tính cẩn thận cao."
        ],
    },
    "16-1": {
        id: "16-1",
        name: "Quản lý kho",

        overview:
            "Quản lý kho là công việc tổ chức, kiểm soát và tối ưu hóa hoạt động lưu trữ hàng hóa trong kho. Mục tiêu là đảm bảo hàng hóa được nhập, lưu trữ và xuất kho chính xác, nhanh chóng và tiết kiệm chi phí.",

        workEnvironment:
            "Làm việc tại kho hàng, trung tâm phân phối hoặc nhà máy sản xuất. Có thể sử dụng phần mềm quản lý kho và phối hợp với bộ phận vận tải, mua hàng và bán hàng.",

        responsibilities: [
            "Quản lý nhập kho và xuất kho hàng hóa.",
            "Kiểm soát tồn kho và đảm bảo số liệu chính xác.",
            "Sắp xếp và tối ưu không gian lưu trữ.",
            "Giám sát nhân viên kho.",
            "Áp dụng hệ thống quản lý kho (WMS)."
        ],

        skills: [
            "Quản lý tổ chức",
            "Phân tích tồn kho",
            "Sử dụng phần mềm quản lý kho",
            "Lập kế hoạch",
            "Giải quyết vấn đề",
            "Giao tiếp nội bộ"
        ],

        subjectStrengths: ["Toán", "Tin học", "Kinh tế"],
        mbtiMatch: ["ESTJ", "ISTJ", "ENTJ", "INTJ"],

        healthRequirements:
            "Cần sức khỏe tốt, có thể di chuyển nhiều trong kho và làm việc theo ca.",

        educationPath: {
            majors: [
                "Logistics và Quản lý chuỗi cung ứng",
                "Quản trị Kinh doanh",
                "Quản lý công nghiệp",
                "Thương mại"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)",
                "D01 (Toán, Văn, Anh)"
            ],
            studyAbroad:
                "Các chương trình về Supply Chain Management tại Singapore, Úc hoặc Hà Lan có thế mạnh trong đào tạo logistics."
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao do sự phát triển của thương mại điện tử và hệ thống kho vận.",
            competition:
                "Trung bình, nhưng vị trí quản lý cấp cao yêu cầu kinh nghiệm.",
            trend5to10years:
                "Kho thông minh, tự động hóa và quản lý bằng dữ liệu sẽ trở nên phổ biến."
        },

        salaryBreakdown: {
            entry: "8 – 15 triệu/tháng",
            afterThreeToFiveYears: "18 – 35 triệu/tháng",
            senior: "40 – 80+ triệu/tháng"
        },

        pros: [
            "Nhu cầu nhân lực ổn định.",
            "Cơ hội làm việc trong nhiều ngành.",
            "Có thể thăng tiến lên quản lý chuỗi cung ứng.",
            "Tiếp cận công nghệ quản lý hiện đại."
        ],

        cons: [
            "Áp lực kiểm soát hàng hóa chính xác.",
            "Có thể làm việc theo ca.",
            "Môi trường kho đôi khi căng thẳng."
        ],

        reasonsPeopleQuit:
            "Áp lực tồn kho, thời gian làm việc kéo dài hoặc chuyển sang vị trí quản lý cấp cao hơn.",

        requirements: [
            "Bằng cử nhân ngành liên quan.",
            "Kỹ năng quản lý và tổ chức.",
            "Hiểu biết về hệ thống quản lý kho."
        ],
    },
    "16-2": {
        id: "16-2",
        name: "Điều phối vận tải",

        overview:
            "Điều phối vận tải là công việc lập kế hoạch và quản lý quá trình vận chuyển hàng hóa từ điểm xuất phát đến điểm giao hàng, đảm bảo đúng thời gian và tối ưu chi phí.",

        workEnvironment:
            "Làm việc tại văn phòng logistics, công ty vận tải hoặc trung tâm điều hành vận chuyển. Thường xuyên liên lạc với tài xế, đối tác vận chuyển và khách hàng.",

        responsibilities: [
            "Lập kế hoạch vận chuyển hàng hóa.",
            "Theo dõi hành trình vận tải.",
            "Xử lý sự cố trong quá trình giao hàng.",
            "Tối ưu chi phí vận chuyển.",
            "Phối hợp với kho và bộ phận bán hàng."
        ],

        skills: [
            "Lập kế hoạch",
            "Quản lý thời gian",
            "Giao tiếp",
            "Phân tích dữ liệu vận tải",
            "Giải quyết vấn đề",
            "Sử dụng phần mềm logistics"
        ],

        subjectStrengths: ["Toán", "Địa lý", "Tiếng Anh"],
        mbtiMatch: ["ESTJ", "ENTJ", "ESFJ", "ISTJ"],

        healthRequirements:
            "Cần khả năng làm việc dưới áp lực và xử lý nhiều công việc cùng lúc.",

        educationPath: {
            majors: [
                "Logistics và Quản lý chuỗi cung ứng",
                "Quản trị Kinh doanh",
                "Kinh tế vận tải",
                "Thương mại quốc tế"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)",
                "D01 (Toán, Văn, Anh)"
            ],
            studyAbroad:
                "Các chương trình logistics tại Đức, Hà Lan hoặc Singapore rất nổi tiếng về quản lý vận tải."
        },

        jobMarket: {
            employmentRate:
                "Nhu cầu cao trong các công ty vận tải, thương mại điện tử và xuất nhập khẩu.",
            competition:
                "Trung bình, nhưng cần kỹ năng xử lý tình huống tốt.",
            trend5to10years:
                "Ứng dụng AI và dữ liệu lớn trong tối ưu tuyến đường sẽ phát triển mạnh."
        },

        salaryBreakdown: {
            entry: "9 – 16 triệu/tháng",
            afterThreeToFiveYears: "20 – 40 triệu/tháng",
            senior: "45 – 90+ triệu/tháng"
        },

        pros: [
            "Công việc năng động.",
            "Nhu cầu tuyển dụng cao.",
            "Có thể phát triển lên quản lý logistics.",
            "Tiếp cận hệ thống vận tải quốc tế."
        ],

        cons: [
            "Áp lực thời gian giao hàng.",
            "Phải xử lý sự cố liên tục.",
            "Làm việc ngoài giờ khi cần."
        ],

        reasonsPeopleQuit:
            "Áp lực deadline và khối lượng công việc lớn.",

        requirements: [
            "Bằng cử nhân ngành liên quan.",
            "Kỹ năng tổ chức và điều phối.",
            "Khả năng giao tiếp tốt."
        ],
    },
    "16-3": {
        id: "16-3",
        name: "Xuất nhập khẩu",

        overview:
            "Xuất nhập khẩu là lĩnh vực quản lý hoạt động giao thương hàng hóa giữa các quốc gia, bao gồm thủ tục hải quan, chứng từ thương mại và vận chuyển quốc tế.",

        workEnvironment:
            "Làm việc tại công ty xuất nhập khẩu, doanh nghiệp sản xuất, hãng tàu hoặc công ty logistics quốc tế.",

        responsibilities: [
            "Chuẩn bị và kiểm tra chứng từ xuất nhập khẩu.",
            "Làm việc với hải quan và đối tác quốc tế.",
            "Theo dõi đơn hàng quốc tế.",
            "Quản lý hợp đồng thương mại.",
            "Tính toán chi phí và thuế."
        ],

        skills: [
            "Tiếng Anh thương mại",
            "Hiểu biết luật thương mại quốc tế",
            "Phân tích chứng từ",
            "Đàm phán",
            "Quản lý quy trình",
            "Giao tiếp quốc tế"
        ],

        subjectStrengths: ["Tiếng Anh", "Kinh tế", "Địa lý"],
        mbtiMatch: ["ENTJ", "ENFJ", "ESTJ", "INTJ"],

        healthRequirements:
            "Cần khả năng làm việc chính xác và chịu áp lực deadline.",

        educationPath: {
            majors: [
                "Kinh doanh quốc tế",
                "Logistics và Quản lý chuỗi cung ứng",
                "Thương mại quốc tế",
                "Kinh tế đối ngoại"
            ],
            examGroups: [
                "A01 (Toán, Lý, Anh)",
                "D01 (Toán, Văn, Anh)",
                "D07 (Toán, Hóa, Anh)"
            ],
            studyAbroad:
                "Các chương trình thương mại quốc tế tại Anh, Singapore hoặc Hồng Kông rất mạnh."
        },

        jobMarket: {
            employmentRate:
                "Rất cao do thương mại quốc tế phát triển mạnh.",
            competition:
                "Trung bình đến cao ở các công ty lớn.",
            trend5to10years:
                "Thương mại điện tử xuyên biên giới và logistics quốc tế sẽ tăng mạnh."
        },

        salaryBreakdown: {
            entry: "9 – 17 triệu/tháng",
            afterThreeToFiveYears: "22 – 45 triệu/tháng",
            senior: "50 – 100+ triệu/tháng"
        },

        pros: [
            "Cơ hội làm việc quốc tế.",
            "Phát triển kỹ năng ngoại ngữ.",
            "Mạng lưới quan hệ rộng.",
            "Thu nhập tốt khi có kinh nghiệm."
        ],

        cons: [
            "Thủ tục phức tạp.",
            "Áp lực thời gian và chứng từ.",
            "Phụ thuộc quy định quốc tế."
        ],

        reasonsPeopleQuit:
            "Áp lực giấy tờ, quy định thay đổi và khối lượng công việc cao.",

        requirements: [
            "Bằng cử nhân ngành liên quan.",
            "Tiếng Anh tốt.",
            "Hiểu quy trình xuất nhập khẩu."
        ],
    },
    "16-4": {
        id: "16-4",
        name: "Supply Chain Analyst",

        overview:
            "Supply Chain Analyst là chuyên gia phân tích dữ liệu trong chuỗi cung ứng nhằm tối ưu tồn kho, vận chuyển, chi phí và hiệu quả hoạt động.",

        workEnvironment:
            "Làm việc tại văn phòng doanh nghiệp lớn, tập đoàn sản xuất, thương mại điện tử hoặc công ty logistics.",

        responsibilities: [
            "Phân tích dữ liệu chuỗi cung ứng.",
            "Dự báo nhu cầu hàng hóa.",
            "Tối ưu tồn kho và vận chuyển.",
            "Xây dựng báo cáo và dashboard.",
            "Đề xuất cải tiến quy trình."
        ],

        skills: [
            "Phân tích dữ liệu",
            "Excel / SQL / BI tools",
            "Tư duy logic",
            "Thống kê",
            "Giải quyết vấn đề",
            "Hiểu hệ thống chuỗi cung ứng"
        ],

        subjectStrengths: ["Toán", "Tin học", "Kinh tế"],
        mbtiMatch: ["INTJ", "ENTJ", "INTP", "ISTJ"],

        healthRequirements:
            "Cần khả năng tập trung cao và làm việc với dữ liệu trong thời gian dài.",

        educationPath: {
            majors: [
                "Logistics và Quản lý chuỗi cung ứng",
                "Phân tích dữ liệu",
                "Kinh tế",
                "Hệ thống thông tin quản lý"
            ],
            examGroups: [
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)",
                "D01 (Toán, Văn, Anh)"
            ],
            studyAbroad:
                "Các chương trình Supply Chain Analytics tại Mỹ, Canada và Úc đang rất phát triển."
        },

        jobMarket: {
            employmentRate:
                "Tăng nhanh do doanh nghiệp cần tối ưu dữ liệu logistics.",
            competition:
                "Cao ở các công ty lớn yêu cầu kỹ năng phân tích mạnh.",
            trend5to10years:
                "Phân tích dữ liệu, AI và tự động hóa chuỗi cung ứng sẽ bùng nổ."
        },

        salaryBreakdown: {
            entry: "12 – 22 triệu/tháng",
            afterThreeToFiveYears: "30 – 65 triệu/tháng",
            senior: "70 – 150+ triệu/tháng"
        },

        pros: [
            "Thu nhập tốt.",
            "Nhu cầu nhân lực tăng nhanh.",
            "Ứng dụng công nghệ và dữ liệu.",
            "Cơ hội làm việc quốc tế."
        ],

        cons: [
            "Yêu cầu kỹ năng phân tích cao.",
            "Cần học thêm công cụ dữ liệu.",
            "Áp lực tối ưu hiệu suất."
        ],

        reasonsPeopleQuit:
            "Khối lượng phân tích lớn hoặc chuyển sang vị trí quản lý dữ liệu cao cấp.",

        requirements: [
            "Bằng cử nhân ngành liên quan.",
            "Kỹ năng phân tích dữ liệu.",
            "Hiểu hoạt động chuỗi cung ứng."
        ],
    },
    // ─────────────────────────────────────────────────────
    // Khối 6: Pháp lý – Hành chính – Công
    // ─────────────────────────────────────────────────────
    "17-1": {
        id: "17-1",
        name: "Luật sư",

        overview:
            "Luật sư là người cung cấp dịch vụ pháp lý, tư vấn luật và đại diện cho khách hàng trong các vụ việc pháp lý như tranh chấp dân sự, hình sự, kinh doanh hoặc hành chính.",

        workEnvironment:
            "Làm việc tại văn phòng luật, công ty luật, tòa án hoặc làm việc độc lập. Thường xuyên làm việc với khách hàng, cơ quan pháp luật và hồ sơ pháp lý.",

        responsibilities: [
            "Tư vấn pháp luật cho cá nhân và doanh nghiệp.",
            "Tham gia tranh tụng tại tòa án.",
            "Soạn thảo hợp đồng và văn bản pháp lý.",
            "Nghiên cứu luật và tiền lệ pháp.",
            "Bảo vệ quyền và lợi ích hợp pháp của khách hàng."
        ],

        skills: [
            "Lập luận pháp lý",
            "Phân tích luật",
            "Đàm phán",
            "Nghiên cứu pháp luật",
            "Giao tiếp",
            "Tranh tụng"
        ],

        subjectStrengths: ["Ngữ văn", "Giáo dục công dân", "Tiếng Anh"],
        mbtiMatch: ["ENTJ", "INTJ", "ESTJ", "ENFJ"],

        healthRequirements:
            "Cần khả năng chịu áp lực cao và làm việc với khối lượng hồ sơ lớn.",

        educationPath: {
            majors: [
                "Luật",
                "Luật Kinh tế",
                "Luật Thương mại quốc tế"
            ],
            examGroups: [
                "C00 (Văn, Sử, Địa)",
                "D01 (Toán, Văn, Anh)",
                "A01 (Toán, Lý, Anh)"
            ],
            studyAbroad:
                "Các chương trình luật tại Anh, Mỹ hoặc Úc rất mạnh về đào tạo luật sư quốc tế."
        },

        jobMarket: {
            employmentRate:
                "Ổn định, nhu cầu cao ở lĩnh vực doanh nghiệp và tư vấn pháp lý.",
            competition:
                "Cao do yêu cầu kinh nghiệm và chứng chỉ hành nghề.",
            trend5to10years:
                "Luật thương mại, công nghệ và sở hữu trí tuệ sẽ phát triển mạnh."
        },

        salaryBreakdown: {
            entry: "10 – 18 triệu/tháng",
            afterThreeToFiveYears: "25 – 70 triệu/tháng",
            senior: "80 – 300+ triệu/tháng"
        },

        pros: [
            "Thu nhập cao khi có kinh nghiệm.",
            "Uy tín nghề nghiệp lớn.",
            "Cơ hội làm việc quốc tế.",
            "Đa dạng lĩnh vực chuyên môn."
        ],

        cons: [
            "Quá trình đào tạo dài.",
            "Áp lực công việc cao.",
            "Cạnh tranh lớn."
        ],

        reasonsPeopleQuit:
            "Áp lực nghề nghiệp, thời gian làm việc dài hoặc chuyển sang lĩnh vực tư vấn doanh nghiệp.",

        requirements: [
            "Bằng cử nhân luật.",
            "Chứng chỉ hành nghề luật sư.",
            "Kỹ năng lập luận và phân tích pháp lý."
        ],
    },
    "17-2": {
        id: "17-2",
        name: "Công chứng viên",

        overview:
            "Công chứng viên là người xác nhận tính hợp pháp của hợp đồng, giao dịch và giấy tờ theo quy định pháp luật nhằm đảm bảo tính pháp lý và phòng ngừa tranh chấp.",

        workEnvironment:
            "Làm việc tại văn phòng công chứng hoặc phòng công chứng nhà nước. Chủ yếu làm việc với hồ sơ pháp lý và khách hàng cá nhân hoặc doanh nghiệp.",

        responsibilities: [
            "Kiểm tra tính hợp pháp của hồ sơ và giấy tờ.",
            "Công chứng hợp đồng và giao dịch.",
            "Tư vấn pháp lý liên quan đến thủ tục công chứng.",
            "Lưu trữ hồ sơ công chứng.",
            "Đảm bảo quy trình công chứng đúng quy định pháp luật."
        ],

        skills: [
            "Phân tích pháp lý",
            "Cẩn thận và chính xác",
            "Quản lý hồ sơ",
            "Giao tiếp",
            "Hiểu luật dân sự",
            "Trách nhiệm cao"
        ],

        subjectStrengths: ["Ngữ văn", "Giáo dục công dân", "Lịch sử"],
        mbtiMatch: ["ISTJ", "ESTJ", "INTJ", "ISFJ"],

        healthRequirements:
            "Cần khả năng tập trung cao và làm việc với hồ sơ chi tiết.",

        educationPath: {
            majors: [
                "Luật",
                "Luật Kinh tế",
                "Luật Dân sự"
            ],
            examGroups: [
                "C00 (Văn, Sử, Địa)",
                "D01 (Toán, Văn, Anh)"
            ],
            studyAbroad:
                "Một số chương trình luật tại châu Âu có đào tạo chuyên sâu về công chứng và luật dân sự."
        },

        jobMarket: {
            employmentRate:
                "Ổn định do nhu cầu công chứng giao dịch luôn tồn tại.",
            competition:
                "Trung bình, nhưng yêu cầu kinh nghiệm pháp lý.",
            trend5to10years:
                "Chuyển đổi số trong quản lý hồ sơ và công chứng điện tử sẽ phát triển."
        },

        salaryBreakdown: {
            entry: "12 – 20 triệu/tháng",
            afterThreeToFiveYears: "30 – 60 triệu/tháng",
            senior: "70 – 150+ triệu/tháng"
        },

        pros: [
            "Công việc ổn định.",
            "Thu nhập tốt khi có kinh nghiệm.",
            "Uy tín nghề nghiệp cao.",
            "Ít phải di chuyển."
        ],

        cons: [
            "Yêu cầu pháp lý nghiêm ngặt.",
            "Trách nhiệm pháp lý lớn.",
            "Cần nhiều kinh nghiệm trước khi hành nghề."
        ],

        reasonsPeopleQuit:
            "Quy trình pháp lý phức tạp hoặc chuyển sang lĩnh vực luật sư và tư vấn pháp lý.",

        requirements: [
            "Bằng cử nhân luật.",
            "Chứng chỉ hành nghề công chứng.",
            "Kinh nghiệm pháp lý theo quy định."
        ],
    },
    "17-3": {
        id: "17-3",
        name: "Chuyên viên pháp chế doanh nghiệp",

        overview:
            "Chuyên viên pháp chế doanh nghiệp là người đảm bảo các hoạt động của công ty tuân thủ pháp luật, đồng thời tư vấn pháp lý cho ban lãnh đạo trong hoạt động kinh doanh.",

        workEnvironment:
            "Làm việc tại phòng pháp chế của doanh nghiệp, tập đoàn hoặc công ty lớn. Phối hợp với các phòng ban như tài chính, nhân sự và kinh doanh.",

        responsibilities: [
            "Tư vấn pháp lý cho hoạt động kinh doanh.",
            "Soạn thảo và kiểm tra hợp đồng.",
            "Đảm bảo doanh nghiệp tuân thủ pháp luật.",
            "Quản lý rủi ro pháp lý.",
            "Làm việc với cơ quan nhà nước khi cần."
        ],

        skills: [
            "Phân tích pháp lý",
            "Soạn thảo hợp đồng",
            "Quản lý rủi ro",
            "Tư duy chiến lược",
            "Đàm phán",
            "Hiểu luật doanh nghiệp"
        ],

        subjectStrengths: ["Ngữ văn", "Kinh tế", "Tiếng Anh"],
        mbtiMatch: ["INTJ", "ENTJ", "ISTJ", "ESTJ"],

        healthRequirements:
            "Cần khả năng làm việc dưới áp lực và xử lý nhiều hồ sơ pháp lý.",

        educationPath: {
            majors: [
                "Luật",
                "Luật Kinh tế",
                "Luật Thương mại"
            ],
            examGroups: [
                "D01 (Toán, Văn, Anh)",
                "C00 (Văn, Sử, Địa)",
                "A01 (Toán, Lý, Anh)"
            ],
            studyAbroad:
                "Các chương trình luật kinh doanh tại Singapore, Anh và Úc được nhiều doanh nghiệp đánh giá cao."
        },

        jobMarket: {
            employmentRate:
                "Cao do doanh nghiệp cần bộ phận pháp chế nội bộ.",
            competition:
                "Trung bình đến cao tại các tập đoàn lớn.",
            trend5to10years:
                "Pháp lý liên quan đến công nghệ, dữ liệu và thương mại điện tử sẽ tăng mạnh."
        },

        salaryBreakdown: {
            entry: "12 – 20 triệu/tháng",
            afterThreeToFiveYears: "30 – 65 triệu/tháng",
            senior: "70 – 150+ triệu/tháng"
        },

        pros: [
            "Làm việc ổn định trong doanh nghiệp.",
            "Ít phải tranh tụng tại tòa.",
            "Thu nhập tốt khi có kinh nghiệm.",
            "Cơ hội thăng tiến lên quản lý pháp chế."
        ],

        cons: [
            "Áp lực trách nhiệm pháp lý.",
            "Phải cập nhật luật thường xuyên.",
            "Khối lượng hợp đồng lớn."
        ],

        reasonsPeopleQuit:
            "Áp lực tuân thủ pháp luật hoặc chuyển sang luật sư hoặc quản lý cấp cao.",

        requirements: [
            "Bằng cử nhân luật.",
            "Hiểu luật doanh nghiệp.",
            "Kỹ năng soạn thảo hợp đồng."
        ],
    },
    "18-1": {
        id: "18-1",
        name: "Cán bộ hành chính",

        overview:
            "Cán bộ hành chính là lực lượng làm việc trong các cơ quan Đảng, Nhà nước, tổ chức chính trị – xã hội, chịu trách nhiệm triển khai và quản lý các hoạt động hành chính nhằm đảm bảo bộ máy nhà nước vận hành hiệu quả.",
        workEnvironment:
            "Làm việc tại cơ quan nhà nước, ủy ban nhân dân, sở ban ngành hoặc tổ chức chính trị – xã hội. Môi trường làm việc có tính kỷ luật cao, quy trình rõ ràng và ổn định.",

        responsibilities: [
            "Thực hiện các công việc hành chính, quản lý hồ sơ và văn bản của cơ quan.",
            "Hỗ trợ lãnh đạo trong việc triển khai kế hoạch và chính sách.",
            "Phối hợp với các phòng ban để đảm bảo hoạt động hành chính diễn ra trôi chảy.",
            "Tổ chức các cuộc họp, sự kiện và hoạt động nội bộ.",
            "Theo dõi và báo cáo tiến độ công việc theo quy định.",
        ],

        skills: [
            "Tổ chức công việc",
            "Quản lý hồ sơ và văn bản",
            "Giao tiếp hành chính",
            "Kỹ năng làm việc với quy trình",
            "Tin học văn phòng",
            "Kỷ luật và trách nhiệm",
        ],

        subjectStrengths: ["Ngữ văn", "Giáo dục công dân", "Lịch sử", "Tin học"],

        mbtiMatch: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],

        healthRequirements:
            "Không yêu cầu đặc biệt. Cần khả năng làm việc ổn định, tập trung lâu với hồ sơ và giấy tờ.",

        educationPath: {
            majors: [
                "Quản lý nhà nước",
                "Hành chính công",
                "Luật",
                "Quản trị văn phòng",
            ],
            examGroups: [
                "C00 (Văn, Sử, Địa)",
                "D01 (Toán, Văn, Anh)",
                "A01 (Toán, Lý, Anh)",
            ],
            studyAbroad:
                "Một số quốc gia như Singapore, Úc hoặc Pháp có các chương trình Public Administration giúp hiểu rõ mô hình quản trị nhà nước hiện đại.",
        },

        jobMarket: {
            employmentRate:
                "Ổn định nhưng cần vượt qua các kỳ thi tuyển công chức hoặc xét tuyển theo quy định.",
            competition:
                "Trung bình đến cao tùy vị trí và địa phương.",
            trend5to10years:
                "Chuyển đổi số trong quản lý nhà nước đang tăng mạnh, yêu cầu cán bộ thành thạo công nghệ và quản lý dữ liệu hành chính.",
        },

        salaryBreakdown: {
            entry: "5 – 8 triệu/tháng (theo hệ số lương khởi điểm)",
            afterThreeToFiveYears: "8 – 15 triệu/tháng",
            senior: "15 – 30+ triệu/tháng (tùy chức vụ và phụ cấp)",
        },

        pros: [
            "Công việc ổn định, ít biến động.",
            "Chế độ phúc lợi và bảo hiểm đầy đủ.",
            "Có cơ hội phục vụ cộng đồng và xã hội.",
            "Môi trường làm việc rõ ràng, có quy định cụ thể.",
        ],

        cons: [
            "Thu nhập tăng chậm so với khu vực tư nhân.",
            "Quy trình làm việc nhiều thủ tục.",
            "Cơ hội thăng tiến phụ thuộc vào hệ thống và thời gian công tác.",
            "Ít đổi mới nếu không chủ động học hỏi.",
        ],

        reasonsPeopleQuit:
            "Thu nhập chưa đáp ứng kỳ vọng hoặc mong muốn môi trường năng động hơn trong khu vực tư nhân.",

        requirements: [
            "Tốt nghiệp đại học chuyên ngành liên quan.",
            "Đáp ứng tiêu chuẩn tuyển dụng của cơ quan nhà nước.",
            "Kỹ năng hành chính và làm việc theo quy trình.",
        ],
    },
    "18-2": {
        id: "18-2",
        name: "Công chức",

        overview:
            "Công chức là những người làm việc trong cơ quan nhà nước và được tuyển dụng thông qua kỳ thi hoặc xét tuyển theo quy định pháp luật. Họ chịu trách nhiệm thực thi chính sách, quản lý nhà nước và phục vụ người dân.",
        workEnvironment:
            "Làm việc tại các bộ, sở, ban, ngành, cơ quan chính phủ hoặc ủy ban nhân dân các cấp. Môi trường chuyên nghiệp, có tính pháp lý và kỷ luật cao.",

        responsibilities: [
            "Thực thi các chính sách và quy định của Nhà nước.",
            "Tiếp nhận, xử lý hồ sơ và giải quyết thủ tục hành chính cho người dân và doanh nghiệp.",
            "Soạn thảo văn bản pháp lý và báo cáo quản lý.",
            "Tham gia xây dựng và cải tiến quy trình hành chính.",
            "Phối hợp với các cơ quan khác để triển khai nhiệm vụ nhà nước.",
        ],

        skills: [
            "Hiểu biết pháp luật",
            "Phân tích chính sách",
            "Quản lý hồ sơ",
            "Giao tiếp với người dân",
            "Tư duy hệ thống",
            "Tin học và quản lý dữ liệu",
        ],

        subjectStrengths: ["Ngữ văn", "Luật học cơ bản", "Lịch sử", "Tiếng Anh"],

        mbtiMatch: ["ISTJ", "INTJ", "ESTJ", "INFJ"],

        healthRequirements:
            "Không yêu cầu đặc biệt, nhưng cần sự ổn định, tập trung và khả năng làm việc lâu dài trong môi trường hành chính.",

        educationPath: {
            majors: [
                "Luật",
                "Hành chính công",
                "Quản lý nhà nước",
                "Chính sách công",
            ],
            examGroups: [
                "C00 (Văn, Sử, Địa)",
                "D01 (Toán, Văn, Anh)",
                "A01 (Toán, Lý, Anh)",
            ],
            studyAbroad:
                "Các chương trình Public Policy hoặc Public Administration tại Mỹ, Úc, Anh giúp nâng cao hiểu biết về quản trị nhà nước hiện đại.",
        },

        jobMarket: {
            employmentRate:
                "Phụ thuộc vào kỳ thi tuyển công chức của Nhà nước và chỉ tiêu tuyển dụng từng năm.",
            competition:
                "Khá cao do số lượng người dự thi lớn.",
            trend5to10years:
                "Chính phủ điện tử và dữ liệu số sẽ làm thay đổi cách công chức làm việc, yêu cầu kỹ năng công nghệ ngày càng cao.",
        },

        salaryBreakdown: {
            entry: "5 – 9 triệu/tháng",
            afterThreeToFiveYears: "9 – 18 triệu/tháng",
            senior: "18 – 35+ triệu/tháng (kèm phụ cấp chức vụ)",
        },

        pros: [
            "Công việc ổn định lâu dài.",
            "Được đào tạo và bồi dưỡng chuyên môn thường xuyên.",
            "Có cơ hội tham gia xây dựng chính sách quốc gia.",
            "Chế độ phúc lợi rõ ràng.",
        ],

        cons: [
            "Áp lực từ trách nhiệm pháp lý và quy định chặt chẽ.",
            "Thu nhập không quá cao so với doanh nghiệp lớn.",
            "Quy trình công việc đôi khi chậm do thủ tục.",
            "Cạnh tranh cao khi thi tuyển.",
        ],

        reasonsPeopleQuit:
            "Muốn chuyển sang khu vực tư nhân có thu nhập cao hơn hoặc môi trường linh hoạt hơn.",

        requirements: [
            "Vượt qua kỳ thi tuyển công chức theo quy định.",
            "Tốt nghiệp đại học phù hợp với vị trí tuyển dụng.",
            "Hiểu biết pháp luật và kỹ năng hành chính tốt.",
        ],
    },
    "18-3": {
        id: "18-3",
        name: "Chuyên viên hoạch định chính sách",

        overview:
            "Chuyên viên hoạch định chính sách là người nghiên cứu, phân tích dữ liệu kinh tế – xã hội và đề xuất các chính sách phát triển quốc gia hoặc địa phương. Đây là vị trí có ảnh hưởng lớn đến định hướng phát triển lâu dài của xã hội.",
        workEnvironment:
            "Làm việc tại bộ ngành trung ương, viện nghiên cứu, tổ chức chính phủ hoặc tổ chức quốc tế. Thường xuyên tham gia nghiên cứu, hội thảo và làm việc với dữ liệu lớn.",

        responsibilities: [
            "Nghiên cứu các vấn đề kinh tế – xã hội và xu hướng phát triển.",
            "Phân tích dữ liệu và đánh giá tác động chính sách.",
            "Đề xuất và xây dựng dự thảo chính sách.",
            "Tham vấn chuyên gia và các bên liên quan.",
            "Theo dõi và đánh giá hiệu quả sau khi chính sách được triển khai.",
        ],

        skills: [
            "Phân tích dữ liệu",
            "Nghiên cứu chính sách",
            "Tư duy chiến lược",
            "Viết báo cáo chuyên sâu",
            "Kinh tế học ứng dụng",
            "Thuyết trình và tranh luận học thuật",
        ],

        subjectStrengths: ["Toán", "Kinh tế", "Lịch sử", "Tiếng Anh"],

        mbtiMatch: ["INTJ", "ENTJ", "INFJ", "INTP"],

        healthRequirements:
            "Không yêu cầu đặc biệt. Cần khả năng tập trung cao và làm việc nhiều với nghiên cứu và tài liệu.",

        educationPath: {
            majors: [
                "Chính sách công",
                "Kinh tế học",
                "Quan hệ quốc tế",
                "Quản lý nhà nước",
            ],
            examGroups: [
                "A01 (Toán, Lý, Anh)",
                "D01 (Toán, Văn, Anh)",
                "C00 (Văn, Sử, Địa)",
            ],
            studyAbroad:
                "Các chương trình Public Policy tại Mỹ, Anh, Singapore hoặc châu Âu là lựa chọn phổ biến cho lĩnh vực này.",
        },

        jobMarket: {
            employmentRate:
                "Không quá nhiều vị trí nhưng nhu cầu ổn định ở các cơ quan trung ương và tổ chức quốc tế.",
            competition:
                "Cao vì yêu cầu học vấn và năng lực phân tích mạnh.",
            trend5to10years:
                "Nhu cầu hoạch định chính sách dựa trên dữ liệu (data-driven policy) và phát triển bền vững sẽ tăng mạnh.",
        },

        salaryBreakdown: {
            entry: "8 – 15 triệu/tháng",
            afterThreeToFiveYears: "15 – 30 triệu/tháng",
            senior: "30 – 70+ triệu/tháng (hoặc cao hơn tại tổ chức quốc tế)",
        },

        pros: [
            "Ảnh hưởng trực tiếp đến sự phát triển của xã hội.",
            "Công việc mang tính trí tuệ cao.",
            "Cơ hội làm việc với chuyên gia và tổ chức lớn.",
            "Có thể tham gia các dự án quốc gia hoặc quốc tế.",
        ],

        cons: [
            "Yêu cầu trình độ học vấn cao.",
            "Áp lực từ trách nhiệm chính sách.",
            "Công việc nghiên cứu nhiều, đôi khi ít thực hành thực tế.",
            "Cạnh tranh cao ở cấp trung ương.",
        ],

        reasonsPeopleQuit:
            "Chuyển sang lĩnh vực tư vấn, nghiên cứu quốc tế hoặc tổ chức phát triển để có môi trường linh hoạt hơn.",

        requirements: [
            "Tốt nghiệp đại học hoặc sau đại học về chính sách, kinh tế hoặc quản lý.",
            "Khả năng nghiên cứu và phân tích dữ liệu mạnh.",
            "Tư duy chiến lược và hiểu biết về xã hội.",
        ],
    },
    // ─────────────────────────────────────────────────────
    // Khối 7: Nông nghiệp - Tài nguyên
    // ─────────────────────────────────────────────────────
    "19-1": {
        id: "19-1",
        name: "Kỹ sư nông nghiệp",

        overview:
            "Kỹ sư nông nghiệp ứng dụng khoa học và công nghệ vào sản xuất nông nghiệp nhằm tăng năng suất, tối ưu tài nguyên và phát triển nông nghiệp bền vững. Trong nông nghiệp công nghệ cao, họ làm việc với hệ thống tự động hóa, cảm biến môi trường, dữ liệu canh tác và giống cây trồng cải tiến.",
        workEnvironment:
            "Làm việc tại doanh nghiệp nông nghiệp, khu nông nghiệp công nghệ cao, viện nghiên cứu hoặc trang trại lớn. Công việc kết hợp giữa thực địa và phân tích dữ liệu trong văn phòng hoặc phòng thí nghiệm.",

        responsibilities: [
            "Thiết kế và triển khai mô hình nông nghiệp công nghệ cao.",
            "Phân tích dữ liệu đất, nước, khí hậu để tối ưu sản xuất.",
            "Ứng dụng IoT, tự động hóa hoặc nhà kính thông minh.",
            "Nghiên cứu và thử nghiệm giống cây trồng mới.",
            "Hỗ trợ kỹ thuật cho nông dân hoặc doanh nghiệp.",
        ],

        skills: [
            "Khoa học cây trồng",
            "Phân tích dữ liệu",
            "Công nghệ nông nghiệp",
            "Giải quyết vấn đề thực địa",
            "Nghiên cứu và thử nghiệm",
            "Quản lý hệ thống sản xuất",
        ],

        subjectStrengths: ["Sinh học", "Hóa học", "Toán", "Công nghệ"],

        mbtiMatch: ["INTJ", "ISTJ", "ENTJ", "INTP"],

        healthRequirements:
            "Cần sức khỏe tốt để khảo sát thực địa và làm việc tại trang trại hoặc môi trường tự nhiên.",

        educationPath: {
            majors: [
                "Nông học",
                "Khoa học cây trồng",
                "Công nghệ sinh học nông nghiệp",
                "Nông nghiệp công nghệ cao",
            ],
            examGroups: [
                "B00 (Toán, Hóa, Sinh)",
                "A00 (Toán, Lý, Hóa)",
                "A01 (Toán, Lý, Anh)",
            ],
            studyAbroad:
                "Hà Lan, Israel, Úc và Nhật Bản nổi tiếng về đào tạo nông nghiệp công nghệ cao và nông nghiệp thông minh.",
        },

        jobMarket: {
            employmentRate:
                "Đang tăng nhanh do xu hướng hiện đại hóa nông nghiệp.",
            competition:
                "Trung bình, nhưng người có kỹ năng công nghệ sẽ có lợi thế.",
            trend5to10years:
                "Precision agriculture, AI và dữ liệu nông nghiệp sẽ trở thành xu hướng chủ đạo.",
        },

        salaryBreakdown: {
            entry: "8 – 15 triệu/tháng",
            afterThreeToFiveYears: "15 – 30 triệu/tháng",
            senior: "30 – 70+ triệu/tháng",
        },

        pros: [
            "Ngành có tiềm năng phát triển lớn.",
            "Kết hợp công nghệ và khoa học tự nhiên.",
            "Có thể tham gia các dự án nông nghiệp quy mô lớn.",
            "Đóng góp cho phát triển bền vững.",
        ],

        cons: [
            "Một phần công việc ngoài trời.",
            "Cần cập nhật công nghệ liên tục.",
            "Thu nhập ban đầu chưa quá cao.",
            "Phụ thuộc điều kiện môi trường.",
        ],

        reasonsPeopleQuit:
            "Chuyển sang kinh doanh nông nghiệp hoặc lĩnh vực công nghệ liên quan.",

        requirements: [
            "Tốt nghiệp đại học ngành nông nghiệp hoặc liên quan.",
            "Hiểu biết về công nghệ sản xuất nông nghiệp.",
            "Kỹ năng phân tích và thực hành thực địa.",
        ],
    },
    "19-2": {
        id: "19-2",
        name: "Quản lý trang trại",

        overview:
            "Quản lý trang trại chịu trách nhiệm điều hành toàn bộ hoạt động sản xuất nông nghiệp từ nhân sự, sản xuất đến tài chính. Trong nông nghiệp công nghệ cao, họ còn quản lý hệ thống dữ liệu, tự động hóa và chuỗi cung ứng nông sản.",
        workEnvironment:
            "Làm việc tại trang trại quy mô vừa hoặc lớn, doanh nghiệp nông nghiệp hoặc khu nông nghiệp công nghệ cao.",

        responsibilities: [
            "Lập kế hoạch sản xuất theo mùa vụ.",
            "Quản lý nhân sự và hoạt động trang trại.",
            "Theo dõi năng suất và chi phí sản xuất.",
            "Ứng dụng công nghệ vào quản lý trang trại.",
            "Kết nối với thị trường và đối tác tiêu thụ.",
        ],

        skills: [
            "Quản lý vận hành",
            "Lãnh đạo đội nhóm",
            "Kinh doanh nông nghiệp",
            "Lập kế hoạch sản xuất",
            "Phân tích chi phí",
            "Hiểu biết công nghệ nông nghiệp",
        ],

        subjectStrengths: ["Sinh học", "Toán", "Kinh tế", "Công nghệ"],

        mbtiMatch: ["ESTJ", "ENTJ", "ISTJ", "ESFJ"],

        healthRequirements:
            "Cần sức khỏe tốt để làm việc và giám sát trực tiếp tại trang trại.",

        educationPath: {
            majors: [
                "Quản lý nông nghiệp",
                "Kinh doanh nông nghiệp",
                "Nông học",
                "Phát triển nông thôn",
            ],
            examGroups: [
                "B00 (Toán, Hóa, Sinh)",
                "A00 (Toán, Lý, Hóa)",
                "D01 (Toán, Văn, Anh)",
            ],
            studyAbroad:
                "Úc, New Zealand, Canada và Hà Lan có nhiều chương trình đào tạo quản lý nông nghiệp hiện đại.",
        },

        jobMarket: {
            employmentRate:
                "Tăng theo sự phát triển của nông nghiệp doanh nghiệp.",
            competition:
                "Trung bình, ưu tiên người có kinh nghiệm thực tế.",
            trend5to10years:
                "Trang trại thông minh và chuỗi cung ứng nông sản hiện đại sẽ phát triển mạnh.",
        },

        salaryBreakdown: {
            entry: "9 – 16 triệu/tháng",
            afterThreeToFiveYears: "16 – 35 triệu/tháng",
            senior: "35 – 80+ triệu/tháng",
        },

        pros: [
            "Có thể quản lý mô hình sản xuất lớn.",
            "Thu nhập tốt khi trang trại hoạt động hiệu quả.",
            "Công việc năng động.",
            "Có thể phát triển thành chủ trang trại.",
        ],

        cons: [
            "Áp lực từ năng suất và thị trường.",
            "Phải làm việc thực địa nhiều.",
            "Rủi ro từ thời tiết và giá nông sản.",
            "Thời gian làm việc linh hoạt theo mùa vụ.",
        ],

        reasonsPeopleQuit:
            "Chuyển sang khởi nghiệp nông nghiệp hoặc kinh doanh riêng.",

        requirements: [
            "Kiến thức sản xuất nông nghiệp.",
            "Kỹ năng quản lý và lập kế hoạch.",
            "Kinh nghiệm thực tế tại trang trại.",
        ],
    },
    "19-3": {
        id: "19-3",
        name: "Kỹ thuật viên trồng trọt",

        overview:
            "Kỹ thuật viên trồng trọt trực tiếp theo dõi và chăm sóc cây trồng trong trang trại hoặc khu nông nghiệp công nghệ cao, đảm bảo cây phát triển đúng quy trình kỹ thuật và đạt năng suất tối ưu.",
        workEnvironment:
            "Làm việc tại nhà kính, trang trại nông nghiệp công nghệ cao hoặc trung tâm nghiên cứu giống cây trồng.",

        responsibilities: [
            "Theo dõi sự phát triển của cây trồng.",
            "Vận hành hệ thống tưới và dinh dưỡng.",
            "Phát hiện và xử lý sâu bệnh.",
            "Ghi chép dữ liệu sản xuất.",
            "Hỗ trợ triển khai kỹ thuật trồng trọt mới.",
        ],

        skills: [
            "Chăm sóc cây trồng",
            "Quan sát và đánh giá cây",
            "Vận hành thiết bị nông nghiệp",
            "Tuân thủ quy trình kỹ thuật",
            "Ghi chép dữ liệu",
            "Làm việc nhóm",
        ],

        subjectStrengths: ["Sinh học", "Công nghệ", "Hóa học", "Địa lý"],

        mbtiMatch: ["ISFJ", "ISTJ", "ESFJ", "ISFP"],

        healthRequirements:
            "Cần sức khỏe tốt để làm việc ngoài trời hoặc trong nhà kính.",

        educationPath: {
            majors: [
                "Khoa học cây trồng",
                "Trồng trọt",
                "Bảo vệ thực vật",
                "Nông nghiệp công nghệ cao",
            ],
            examGroups: [
                "B00 (Toán, Hóa, Sinh)",
                "A00 (Toán, Lý, Hóa)",
                "D01 (Toán, Văn, Anh)",
            ],
            studyAbroad:
                "Israel và Hà Lan nổi tiếng với đào tạo thực hành về nông nghiệp công nghệ cao.",
        },

        jobMarket: {
            employmentRate:
                "Khá tốt do nhu cầu nhân lực kỹ thuật trong nông nghiệp hiện đại.",
            competition:
                "Không quá cao.",
            trend5to10years:
                "Trang trại thông minh và tự động hóa sẽ làm tăng nhu cầu kỹ thuật viên có kỹ năng công nghệ.",
        },

        salaryBreakdown: {
            entry: "6 – 10 triệu/tháng",
            afterThreeToFiveYears: "10 – 18 triệu/tháng",
            senior: "18 – 30+ triệu/tháng",
        },

        pros: [
            "Dễ tiếp cận nghề.",
            "Nhu cầu ổn định.",
            "Học hỏi thực tế nhanh.",
            "Có thể phát triển lên kỹ sư hoặc quản lý.",
        ],

        cons: [
            "Công việc thực địa nhiều.",
            "Thu nhập ban đầu chưa cao.",
            "Phụ thuộc mùa vụ.",
            "Cần tuân thủ quy trình nghiêm ngặt.",
        ],

        reasonsPeopleQuit:
            "Học lên cao hơn hoặc chuyển sang quản lý trang trại.",

        requirements: [
            "Tốt nghiệp trung cấp, cao đẳng hoặc đại học ngành nông nghiệp.",
            "Có kỹ năng thực hành trồng trọt.",
            "Chăm chỉ và tuân thủ quy trình kỹ thuật.",
        ],
    },
    "20-1": {
        id: "20-1",
        name: "Kỹ sư nuôi trồng thủy sản",

        overview:
            "Kỹ sư nuôi trồng thủy sản nghiên cứu và quản lý các hệ thống nuôi cá, tôm và sinh vật thủy sinh nhằm tối ưu năng suất, chất lượng và tính bền vững của ngành thủy sản.",
        workEnvironment:
            "Làm việc tại trang trại nuôi thủy sản, doanh nghiệp xuất khẩu thủy sản, viện nghiên cứu hoặc khu nuôi trồng ven biển, sông và hồ.",

        responsibilities: [
            "Thiết kế và quản lý hệ thống nuôi trồng thủy sản.",
            "Theo dõi chất lượng nước và môi trường nuôi.",
            "Phòng và kiểm soát dịch bệnh.",
            "Tối ưu quy trình cho ăn và tăng trưởng.",
            "Phân tích dữ liệu sản xuất để cải thiện năng suất.",
        ],

        skills: [
            "Sinh học thủy sản",
            "Phân tích môi trường nước",
            "Quản lý hệ thống nuôi",
            "Nghiên cứu và thử nghiệm",
            "Giải quyết vấn đề thực địa",
            "Quản lý sản xuất",
        ],

        subjectStrengths: ["Sinh học", "Hóa học", "Toán", "Địa lý"],

        mbtiMatch: ["ISTJ", "INTJ", "ENTJ", "INTP"],

        healthRequirements:
            "Cần sức khỏe tốt để làm việc tại khu nuôi trồng ngoài trời hoặc vùng ven biển.",

        educationPath: {
            majors: [
                "Nuôi trồng thủy sản",
                "Khoa học thủy sản",
                "Bệnh học thủy sản",
                "Quản lý nguồn lợi thủy sản",
            ],
            examGroups: [
                "B00 (Toán, Hóa, Sinh)",
                "A00 (Toán, Lý, Hóa)",
                "D01 (Toán, Văn, Anh)",
            ],
            studyAbroad:
                "Na Uy, Nhật Bản, Úc và Canada có các chương trình đào tạo thủy sản hiện đại.",
        },

        jobMarket: {
            employmentRate:
                "Tốt tại các vùng phát triển thủy sản và doanh nghiệp xuất khẩu.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Nuôi trồng thủy sản bền vững và ứng dụng công nghệ giám sát môi trường sẽ phát triển mạnh.",
        },

        salaryBreakdown: {
            entry: "8 – 14 triệu/tháng",
            afterThreeToFiveYears: "14 – 28 triệu/tháng",
            senior: "28 – 60+ triệu/tháng",
        },

        pros: [
            "Ngành xuất khẩu lớn của Việt Nam.",
            "Nhu cầu nhân lực ổn định.",
            "Có cơ hội làm việc tại doanh nghiệp lớn.",
            "Có thể phát triển thành quản lý trang trại thủy sản.",
        ],

        cons: [
            "Làm việc nhiều ngoài thực địa.",
            "Phụ thuộc môi trường và thời tiết.",
            "Rủi ro dịch bệnh.",
            "Áp lực năng suất.",
        ],

        reasonsPeopleQuit:
            "Chuyển sang kinh doanh thủy sản hoặc ngành liên quan.",

        requirements: [
            "Tốt nghiệp ngành thủy sản hoặc liên quan.",
            "Hiểu môi trường nước và sinh học thủy sinh.",
            "Kỹ năng thực địa và quản lý sản xuất.",
        ],
    },
    "20-2": {
        id: "20-2",
        name: "Quản lý rừng",

        overview:
            "Quản lý rừng chịu trách nhiệm bảo vệ, phát triển và khai thác bền vững tài nguyên rừng, đảm bảo cân bằng giữa kinh tế, môi trường và đa dạng sinh học.",
        workEnvironment:
            "Làm việc tại vườn quốc gia, khu bảo tồn thiên nhiên, cơ quan lâm nghiệp hoặc doanh nghiệp lâm nghiệp. Công việc thường xuyên tại hiện trường rừng.",

        responsibilities: [
            "Giám sát và bảo vệ tài nguyên rừng.",
            "Lập kế hoạch quản lý và phát triển rừng.",
            "Kiểm soát khai thác lâm sản.",
            "Phòng chống cháy rừng.",
            "Phối hợp với cộng đồng địa phương bảo vệ rừng.",
        ],

        skills: [
            "Quản lý tài nguyên rừng",
            "Đánh giá hệ sinh thái",
            "Kỹ năng thực địa",
            "Lập kế hoạch môi trường",
            "Quản lý dự án",
            "Phân tích dữ liệu môi trường",
        ],

        subjectStrengths: ["Sinh học", "Địa lý", "Hóa học", "Toán"],

        mbtiMatch: ["ISTJ", "ISFJ", "INTJ", "INFJ"],

        healthRequirements:
            "Cần sức khỏe tốt để làm việc trong môi trường rừng và địa hình phức tạp.",

        educationPath: {
            majors: [
                "Lâm nghiệp",
                "Quản lý tài nguyên rừng",
                "Sinh thái học",
                "Bảo tồn thiên nhiên",
            ],
            examGroups: [
                "B00 (Toán, Hóa, Sinh)",
                "C00 (Văn, Sử, Địa)",
                "A00 (Toán, Lý, Hóa)",
            ],
            studyAbroad:
                "Canada, Đức, Phần Lan và Úc có nhiều chương trình đào tạo lâm nghiệp bền vững.",
        },

        jobMarket: {
            employmentRate:
                "Ổn định trong cơ quan nhà nước và dự án môi trường.",
            competition:
                "Trung bình.",
            trend5to10years:
                "Bảo vệ rừng, tín chỉ carbon và phát triển rừng bền vững sẽ được chú trọng hơn.",
        },

        salaryBreakdown: {
            entry: "7 – 12 triệu/tháng",
            afterThreeToFiveYears: "12 – 22 triệu/tháng",
            senior: "22 – 45+ triệu/tháng",
        },

        pros: [
            "Công việc có ý nghĩa bảo vệ môi trường.",
            "Gắn với thiên nhiên.",
            "Nhu cầu ổn định.",
            "Có thể tham gia dự án quốc tế.",
        ],

        cons: [
            "Làm việc xa khu đô thị.",
            "Điều kiện làm việc khó khăn.",
            "Thu nhập ban đầu không cao.",
            "Di chuyển nhiều.",
        ],

        reasonsPeopleQuit:
            "Chuyển sang lĩnh vực môi trường hoặc nghiên cứu.",

        requirements: [
            "Tốt nghiệp ngành lâm nghiệp hoặc liên quan.",
            "Hiểu hệ sinh thái rừng.",
            "Sức khỏe tốt và kỹ năng thực địa.",
        ],
    },
    "20-3": {
        id: "20-3",
        name: "Chuyên viên bảo tồn",

        overview:
            "Chuyên viên bảo tồn làm việc nhằm bảo vệ đa dạng sinh học và hệ sinh thái tự nhiên thông qua nghiên cứu, quản lý và triển khai các chương trình bảo tồn.",
        workEnvironment:
            "Làm việc tại tổ chức môi trường, vườn quốc gia, NGO hoặc các dự án bảo tồn quốc tế.",

        responsibilities: [
            "Nghiên cứu hệ sinh thái và các loài cần bảo tồn.",
            "Xây dựng chương trình bảo tồn.",
            "Theo dõi đa dạng sinh học.",
            "Làm việc với cộng đồng địa phương.",
            "Báo cáo và đề xuất giải pháp bảo vệ môi trường.",
        ],

        skills: [
            "Sinh thái học",
            "Nghiên cứu môi trường",
            "Phân tích dữ liệu sinh học",
            "Quản lý dự án bảo tồn",
            "Làm việc cộng đồng",
            "Viết báo cáo khoa học",
        ],

        subjectStrengths: ["Sinh học", "Địa lý", "Hóa học", "Tiếng Anh"],

        mbtiMatch: ["INFJ", "INTJ", "INFP", "ISFP"],

        healthRequirements:
            "Cần sức khỏe tốt để khảo sát thực địa tại rừng hoặc khu bảo tồn.",

        educationPath: {
            majors: [
                "Sinh thái học",
                "Bảo tồn thiên nhiên",
                "Khoa học môi trường",
                "Quản lý tài nguyên thiên nhiên",
            ],
            examGroups: [
                "B00 (Toán, Hóa, Sinh)",
                "C00 (Văn, Sử, Địa)",
                "D01 (Toán, Văn, Anh)",
            ],
            studyAbroad:
                "Anh, Úc, Mỹ và Hà Lan có nhiều chương trình đào tạo về bảo tồn thiên nhiên.",
        },

        jobMarket: {
            employmentRate:
                "Không quá nhiều vị trí nhưng nhu cầu ổn định.",
            competition:
                "Khá cao trong các tổ chức quốc tế.",
            trend5to10years:
                "Biến đổi khí hậu và bảo tồn đa dạng sinh học sẽ làm tăng nhu cầu chuyên gia.",
        },

        salaryBreakdown: {
            entry: "8 – 14 triệu/tháng",
            afterThreeToFiveYears: "14 – 30 triệu/tháng",
            senior: "30 – 65+ triệu/tháng",
        },

        pros: [
            "Công việc có ý nghĩa lớn với môi trường.",
            "Có cơ hội làm việc quốc tế.",
            "Tham gia các dự án nghiên cứu lớn.",
            "Gắn với thiên nhiên.",
        ],

        cons: [
            "Ít vị trí tuyển dụng.",
            "Yêu cầu chuyên môn cao.",
            "Công việc thực địa nhiều.",
            "Thu nhập ban đầu chưa cao.",
        ],

        reasonsPeopleQuit:
            "Chuyển sang nghiên cứu học thuật hoặc lĩnh vực môi trường khác.",

        requirements: [
            "Tốt nghiệp ngành môi trường, sinh thái hoặc liên quan.",
            "Kỹ năng nghiên cứu và phân tích dữ liệu.",
            "Khả năng làm việc thực địa.",
        ],
    },
};
