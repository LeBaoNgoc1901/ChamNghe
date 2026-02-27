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
            "Quản trị doanh nghiệp là bộ não điều hành của một tổ chức — từ việc vạch ra tầm nhìn chiến lược, phân bổ nguồn lực đến đảm bảo mọi phòng ban hoạt động nhịp nhàng hướng đến mục tiêu chung. Đây là vai trò có tầm ảnh hưởng cực lớn đến sự sống còn và tăng trưởng của doanh nghiệp.",
        workEnvironment:
            "Chủ yếu làm việc tại văn phòng, phòng họp cấp cao. Thường xuyên di chuyển để gặp gỡ đối tác, khách hàng hoặc tham dự các sự kiện kinh doanh, hội thảo trong và ngoài nước.",

        responsibilities: [
            "Xây dựng và thực thi chiến lược kinh doanh ngắn hạn và dài hạn.",
            "Quản trị nguồn lực: nhân sự, tài chính, công nghệ và vốn.",
            "Đánh giá rủi ro thị trường, điều chỉnh kế hoạch kịp thời.",
            "Xây dựng văn hóa doanh nghiệp và quản trị mối quan hệ với đối tác chiến lược.",
            "Báo cáo và chịu trách nhiệm trước Hội đồng quản trị / Cổ đông.",
        ],
        skills: ["Lãnh đạo & Truyền cảm hứng", "Tư duy chiến lược", "Quản trị rủi ro", "Đàm phán", "Ra quyết định dưới áp lực", "Tài chính doanh nghiệp"],
        subjectStrengths: ["Toán", "Kinh tế", "Tiếng Anh", "Địa lý kinh tế"],
        mbtiMatch: ["ENTJ", "ESTJ", "INTJ", "ENTP"],
        healthRequirements: "Không có yêu cầu đặc biệt, nhưng cần sức khỏe tốt để chịu được áp lực và lịch làm việc dày đặc.",


        educationPath: {
            majors: ["Quản trị Kinh doanh (BBA/MBA)", "Kinh tế học", "Tài chính – Ngân hàng", "Quản lý Công nghiệp"],
            examGroups: ["A00 (Toán, Lý, Hóa)", "A01 (Toán, Lý, Anh)", "D01 (Toán, Văn, Anh)"],
            studyAbroad: "Mỹ (Harvard, Wharton), Singapore (NUS Business School), Anh (London Business School) là những trung tâm đào tạo MBA hàng đầu.",
        },

        jobMarket: {
            employmentRate: "Dễ xin việc ở cấp thực tập / Junior. Cấp quản lý cạnh tranh cao hơn nhưng nhu cầu luôn ổn định.",
            competition: "Cao — vị trí cấp cao luôn đòi hỏi thành tích thực tế và mạng lưới quan hệ rộng.",
            trend5to10years: "Doanh nghiệp ngày càng cần nhà quản trị hiểu công nghệ và chuyển đổi số. Kỹ năng Data-driven leadership và ESG (môi trường, xã hội, quản trị) sẽ là lợi thế cạnh tranh lớn.",
        },

        salaryBreakdown: {
            entry: "10 – 18 triệu/tháng (Management Trainee)",
            afterThreeToFiveYears: "25 – 60 triệu/tháng (Trưởng phòng / Quản lý)",
            senior: "80 – 300+ triệu/tháng (Giám đốc / CEO tùy quy mô công ty)",
        },

        pros: [
            "Quyền lực và tầm ảnh hưởng lớn đến tổ chức và cộng đồng.",
            "Thu nhập cao và nhiều quyền lợi phụ (xe, thưởng, cổ phần).",
            "Cơ hội mở rộng mạng lưới với những người xuất sắc nhất trong ngành.",
            "Công việc luôn đa dạng, thử thách — không bao giờ nhàm chán.",
        ],
        cons: [
            "Áp lực khổng lồ từ Hội đồng quản trị, cổ đông và toàn bộ nhân viên.",
            "Thời gian làm việc không cố định, thường vượt 10 tiếng/ngày.",
            "Mọi quyết định sai lầm đều có tác động dây chuyền lên hàng trăm người.",
            "Mất nhiều năm mới leo đến vị trí thực sự có quyền lực.",
        ],
        reasonsPeopleQuit:
            "Kiệt sức (burnout) vì áp lực liên tục, mất cân bằng cuộc sống – công việc, hoặc nhận ra mình không phù hợp với văn hóa cạnh tranh quyết liệt.",

        requirements: [
            "Bằng cử nhân/thạc sĩ Quản trị kinh doanh (MBA) hoặc ngành liên quan.",
            "Tư duy hệ thống và khả năng phân tích vĩ mô.",
            "Kỹ năng lãnh đạo và giải quyết vấn đề phức tạp.",
        ],
    },

    // ─────────────────────────────────────────────────────
    // Khối 2: Công nghệ – Kỹ thuật
    // ─────────────────────────────────────────────────────
    "5-1": {
        id: "5-1",
        name: "Lập trình viên Front-end / Back-end",

        overview:
            "Lập trình viên là người xây dựng 'thế giới kỹ thuật số' — từ giao diện người dùng đẹp mắt (Front-end) đến những hệ thống xử lý dữ liệu phức tạp bên dưới (Back-end). Mọi ứng dụng, website, nền tảng bạn dùng hằng ngày đều được tạo ra bởi những người này.",
        workEnvironment:
            "Chủ yếu là văn phòng (hoặc làm việc remote 100%). Môi trường thường thoải mái, linh hoạt — nhiều công ty IT không yêu cầu giờ hành chính cứng nhắc. Một số dự án outsource cho phép làm từ xa hoàn toàn.",

        responsibilities: [
            "Viết code sạch, tối ưu và dễ bảo trì theo spec của Product Manager.",
            "Phối hợp với Designer để xây dựng giao diện đáp ứng (Responsive UI).",
            "Thiết kế kiến trúc hệ thống, API RESTful và cơ sở dữ liệu (Back-end).",
            "Debug, kiểm thử và tối ưu hiệu năng ứng dụng.",
            "Tham gia sprint planning và daily standup theo quy trình Agile/Scrum.",
        ],
        skills: ["JavaScript / TypeScript", "React / Vue / Node.js", "Thiết kế hệ thống & API", "Git & DevOps cơ bản", "Tư duy giải thuật", "Làm việc nhóm (Agile)"],
        subjectStrengths: ["Toán (đặc biệt Toán rời rạc, Giải tích)", "Tin học", "Tiếng Anh (đọc tài liệu kỹ thuật)"],
        mbtiMatch: ["INTP", "INTJ", "ISTP", "ENTP"],
        healthRequirements: "Chú ý sức khỏe mắt và cột sống do ngồi làm việc nhiều giờ liên tục.",

        educationPath: {
            majors: ["Khoa học Máy tính (CNTT)", "Kỹ thuật Phần mềm", "Hệ thống Thông tin", "Trí tuệ Nhân tạo"],
            examGroups: ["A00 (Toán, Lý, Hóa)", "A01 (Toán, Lý, Anh)", "D90 (Toán, Lý, Tin)"],
            studyAbroad: "Mỹ (MIT, Stanford, Carnegie Mellon), Hàn Quốc (KAIST), Singapore (NTU/NUS) — các trung tâm CS hàng đầu thế giới.",
        },

        jobMarket: {
            employmentRate: "Rất dễ xin việc — nhu cầu lập trình viên ở Việt Nam và toàn cầu luôn vượt cung.",
            competition: "Medium — seniors cạnh tranh ở tầm quốc tế nhưng mức lương cũng tăng theo.",
            trend5to10years: "AI, Cloud và Web3 đang định hình lại ngành. Lập trình viên giỏi AI/ML integration và Cloud-native sẽ dẫn đầu. Tuy nhiên AI cũng sẽ tự động hóa các task coding đơn giản.",
        },

        salaryBreakdown: {
            entry: "12 – 20 triệu/tháng (Junior Developer)",
            afterThreeToFiveYears: "35 – 60 triệu/tháng (Senior Developer)",
            senior: "70 – 150+ triệu/tháng (Tech Lead / Architect, đặc biệt với remote job nước ngoài)",
        },

        pros: [
            "Nhu cầu tuyển dụng cực kỳ cao — gần như không lo thất nghiệp.",
            "Mức lương cao ngay từ sớm so với nhiều ngành khác.",
            "Cơ hội làm remote và hợp tác với công ty nước ngoài.",
            "Tác phẩm của mình được hàng triệu người dùng sử dụng mỗi ngày.",
        ],
        cons: [
            "Công nghệ thay đổi cực nhanh — phải học liên tục để không bị lỗi thời.",
            "Deadline gấp rút và bug production có thể gây stress cao.",
            "Công việc đòi hỏi sự tập trung cao độ trong thời gian dài.",
            "Dễ bị cô lập xã hội nếu làm remote mà không chủ động kết nối.",
        ],
        reasonsPeopleQuit:
            "Burnout vì deadline liên tục và áp lực kỹ thuật, hoặc nhận ra mình không thích ngồi một mình code cả ngày — muốn tương tác con người nhiều hơn.",

        requirements: [
            "Nắm vững ít nhất 1–2 ngôn ngữ lập trình chính (JS, Python, Java...).",
            "Tư duy logic tốt và khả năng tự học công nghệ mới liên tục.",
            "Hiểu cấu trúc dữ liệu và giải thuật cơ bản.",
        ],
    },

    // ─────────────────────────────────────────────────────
    // Khối 3: Chăm sóc – Xã hội
    // ─────────────────────────────────────────────────────
    "9-1": {
        id: "9-1",
        name: "Bác sĩ",

        overview:
            "Bác sĩ là người bảo vệ sức khỏe và tính mạng con người — thực hiện chẩn đoán, điều trị bệnh và tư vấn phòng ngừa. Đây là một trong những nghề cao quý và đầy trách nhiệm nhất xã hội, đòi hỏi kiến thức y khoa sâu rộng và khả năng chịu áp lực tinh thần cực lớn.",
        workEnvironment:
            "Bệnh viện, phòng khám tư, trung tâm y tế. Môi trường có thể căng thẳng với ca trực đêm, tiếp xúc với môi trường dịch bệnh. Bác sĩ chuyên khoa sâu có thể làm trong phòng phẫu thuật, ICU hoặc phòng khám chuyên biệt.",

        responsibilities: [
            "Thăm khám, khai thác bệnh sử và chỉ định xét nghiệm / chẩn đoán hình ảnh.",
            "Chẩn đoán bệnh và lập phác đồ điều trị phù hợp với từng bệnh nhân.",
            "Thực hiện thủ thuật y tế, phẫu thuật (tùy chuyên khoa).",
            "Theo dõi, đánh giá tiến triển bệnh và điều chỉnh điều trị.",
            "Tư vấn bệnh nhân và người nhà về bệnh lý và cách phòng ngừa.",
        ],
        skills: ["Chẩn đoán lâm sàng", "Kỹ năng thủ thuật / phẫu thuật", "Giao tiếp với bệnh nhân", "Ra quyết định nhanh dưới áp lực", "Làm việc nhóm đa ngành", "Cập nhật y văn liên tục"],
        subjectStrengths: ["Sinh học", "Hóa học", "Toán (thống kê y học)", "Tiếng Anh (y văn)"],
        mbtiMatch: ["ISTJ", "ISFJ", "ESTJ", "INTJ"],
        healthRequirements: "Cần sức khỏe tốt, có khả năng chịu đựng ca trực dài và môi trường áp lực cao. Đặc thù một số chuyên khoa yêu cầu khéo léo tay và thị lực tốt (phẫu thuật, nội soi).",

        educationPath: {
            majors: ["Y khoa (6 năm + 2 năm nội trú)", "Răng – Hàm – Mặt", "Y học cổ truyền"],
            examGroups: ["B00 (Toán, Hóa, Sinh)", "B08 (Toán, Sinh, Anh)"],
            studyAbroad: "Nga, Ukraine, Hungary có chương trình y khoa bằng tiếng Anh chi phí thấp hơn. Mỹ, Đức, Nhật Bản là đích đến của các bác sĩ muốn chuyên sâu nghiên cứu.",
        },

        jobMarket: {
            employmentRate: "Rất cao — thiếu bác sĩ là vấn đề của mọi quốc gia, đặc biệt ở tuyến cơ sở và vùng sâu.",
            competition: "Vị trí tại bệnh viện lớn như Bạch Mai, Chợ Rẫy cạnh tranh gay gắt. Tuy nhiên hệ thống tư nhân và phòng khám gia đình đang mở rộng nhanh.",
            trend5to10years: "Y tế số (Telemedicine), AI hỗ trợ chẩn đoán và y học cá thể hóa (Precision Medicine) sẽ là xu hướng chủ đạo. Bác sĩ cần làm quen với công nghệ để tối ưu điều trị.",
        },

        salaryBreakdown: {
            entry: "8 – 15 triệu/tháng (Bác sĩ mới ra trường tại cơ sở nhà nước)",
            afterThreeToFiveYears: "20 – 50 triệu/tháng (Có chuyên khoa, kết hợp làm thêm tư nhân)",
            senior: "80 – 200+ triệu/tháng (Bác sĩ chuyên sâu, giáo sư đầu ngành, phòng khám tư nhân)",
        },

        pros: [
            "Nghề được xã hội tôn trọng và đề cao ở mọi nền văn hóa.",
            "Công việc có ý nghĩa sâu sắc — trực tiếp cứu người và cải thiện chất lượng sống.",
            "Thu nhập rất cao ở giai đoạn chuyên sâu, đặc biệt tại cơ sở tư nhân.",
            "Cơ hội học tập và nghiên cứu khoa học suốt đời.",
        ],
        cons: [
            "Thời gian đào tạo cực dài (8+ năm) trước khi hành nghề độc lập.",
            "Áp lực pháp lý và trách nhiệm sinh mệnh rất cao — một sai sót có thể gây hậu quả nghiêm trọng.",
            "Ca trực đêm, cuối tuần và lễ tết — ít thời gian cho gia đình.",
            "Lương khởi điểm nhà nước khá thấp so với thời gian đào tạo đã bỏ ra.",
        ],
        reasonsPeopleQuit:
            "Kiệt sức cả thể xác lẫn tinh thần (\"compassion fatigue\") sau nhiều năm chứng kiến bệnh nhân mất, cộng với thu nhập hệ thống công thấp và áp lực kiện tụng y tế ngày càng tăng.",

        requirements: [
            "Hoàn thành 6 năm đào tạo y khoa + 18 tháng thực hành nội trú.",
            "Chứng chỉ hành nghề do Bộ Y tế cấp.",
            "Cập nhật kiến thức y khoa và CME (Continuing Medical Education) liên tục.",
        ],
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
    "14-1": {
        id: "14-1",
        name: "Thiết kế đồ họa",

        overview:
            "Nhà thiết kế đồ họa là người \"nói chuyện\" bằng hình ảnh — biến các thông điệp trừu tượng thành logo, poster, bao bì, ấn phẩm hay giao diện số có khả năng kết nối cảm xúc với người xem. Đây là sự giao thoa giữa nghệ thuật và tư duy chiến lược truyền thông.",
        workEnvironment:
            "Studio thiết kế, văn phòng agency hoặc freelance tại nhà / quán cà phê. Môi trường sáng tạo, năng động nhưng đôi khi áp lực deadline cao. Nhiều designer thành công chọn làm freelance toàn thời gian.",

        responsibilities: [
            "Thiết kế bộ nhận diện thương hiệu (logo, màu sắc, typography) theo brief khách hàng.",
            "Tạo ấn phẩm truyền thông: poster, banner, brochure, bao bì sản phẩm.",
            "Thiết kế nội dung mạng xã hội (Social Media Assets) theo lịch đăng bài.",
            "Phối hợp với copywriter và marketing để đảm bảo thông điệp nhất quán.",
            "Chuẩn bị file gốc (Artworks) đúng chuẩn in ấn hoặc kỹ thuật số.",
        ],
        skills: ["Adobe Creative Suite (Ai, Ps, Id)", "Tư duy thị giác (Visual Thinking)", "Typography & Color Theory", "Hiểu biết về Brand Identity", "Giao tiếp & trình bày ý tưởng", "Quản lý thời gian với nhiều deadline"],
        subjectStrengths: ["Mỹ thuật", "Thiết kế", "Tiếng Anh (đọc trend quốc tế)"],
        mbtiMatch: ["INFP", "ISFP", "ENFP", "INTP"],

        educationPath: {
            majors: ["Thiết kế Đồ họa", "Thiết kế Truyền thông Đa phương tiện", "Mỹ thuật Ứng dụng", "Kiến trúc"],
            examGroups: ["H00 (Toán, Vẽ hình họa, Vẽ trang trí)", "V00 (Toán, Vật lý, Vẽ)", "N00 (Văn, Sử, Vẽ)"],
            studyAbroad: "Hàn Quốc (Seoul National University), Anh (Royal College of Art), Mỹ (Parsons, Pratt) nổi tiếng về đào tạo thiết kế sáng tạo đẳng cấp thế giới.",
        },

        jobMarket: {
            employmentRate: "Khá cao — nhu cầu tuyển designer ổn định từ agency, doanh nghiệp, đến startup.",
            competition: "Cao — thị trường có nhiều designer nên portfolio mạnh là yếu tố sống còn để nổi bật.",
            trend5to10years: "Motion Design, 3D và Generative AI (Midjourney, Adobe Firefly) đang thay đổi ngành. Designer tương lai cần biết kết hợp AI với tư duy sáng tạo để tạo ra tác phẩm độc đáo.",
        },

        salaryBreakdown: {
            entry: "8 – 12 triệu/tháng (Junior Designer)",
            afterThreeToFiveYears: "18 – 35 triệu/tháng (Senior Designer / Art Director)",
            senior: "40 – 80+ triệu/tháng (Creative Director / Freelance with international clients)",
        },

        pros: [
            "Công việc sáng tạo, tác phẩm xuất hiện trong cuộc sống hằng ngày của mọi người.",
            "Linh hoạt giờ làm và cơ hội freelance không giới hạn thu nhập.",
            "Cổng vào ngành không quá khắt khe — portfolio tốt quan trọng hơn bằng cấp.",
            "Đa dạng lĩnh vực: branding, UX/UI, motion, game, film...",
        ],
        cons: [
            "Mức lương khởi điểm khá thấp so với IT hay tài chính.",
            "Phải xử lý feedback chủ quan từ khách hàng liên tục — đôi khi bất hợp lý.",
            "Áp lực deadline cao và phải \"giết\" nhiều ý tưởng mình yêu thích.",
            "AI đang tự động hóa một số công việc thiết kế đơn giản.",
        ],
        reasonsPeopleQuit:
            "Mất dần cảm hứng sáng tạo vì phải làm đi làm lại những brief nhàm chán, hoặc kiệt sức vì sửa đổi không hồi kết theo ý khách hàng mà không được trân trọng.",

        requirements: [
            "Portfolio thiết kế mạnh, thể hiện được phong cách và tư duy.",
            "Thành thạo ít nhất Adobe Illustrator và Photoshop.",
            "Khả năng lắng nghe brief và dịch yêu cầu thành hình ảnh trực quan.",
        ],
    },

    // ─────────────────────────────────────────────────────
    // Khối 5: Pháp lý – Hành chính – Công
    // ─────────────────────────────────────────────────────
    "17-1": {
        id: "17-1",
        name: "Luật sư",

        overview:
            "Luật sư là người bảo vệ quyền và lợi ích hợp pháp của cá nhân, tổ chức — từ tranh tụng trước tòa án đến tư vấn trong các thương vụ kinh doanh tỷ đô. Đây là nghề đòi hỏi kiến thức pháp lý uyên bác, khả năng lập luận sắc bén và bản lĩnh tâm lý vững chắc.",
        workEnvironment:
            "Văn phòng luật sư, tòa án, phòng họp doanh nghiệp, trại giam (trong các vụ hình sự). Công việc đan xen giữa nghiên cứu tài liệu trong văn phòng yên tĩnh và tranh tụng trong phòng xét xử căng thẳng.",

        responsibilities: [
            "Nghiên cứu văn bản pháp luật và tình huống pháp lý của từng vụ việc.",
            "Soạn thảo hợp đồng, văn bản pháp lý và tài liệu tố tụng.",
            "Đại diện và bào chữa cho thân chủ tại tòa án hay cơ quan nhà nước.",
            "Tư vấn pháp lý cho doanh nghiệp về tuân thủ pháp luật và rủi ro giao dịch.",
            "Đàm phán thương lượng để giải quyết tranh chấp ngoài tòa (Settlement).",
        ],
        skills: ["Phân tích pháp lý", "Lập luận và phản biện", "Kỹ năng viết (soạn thảo văn bản)", "Đàm phán & Thuyết phục", "Nghiên cứu án lệ", "Quản lý thời gian nhiều vụ cùng lúc"],
        subjectStrengths: ["Văn học (tư duy ngôn ngữ)", "Lịch sử", "Giáo dục công dân", "Tiếng Anh (Luật quốc tế)"],
        mbtiMatch: ["ENTJ", "ESTJ", "INTJ", "ENTP"],

        educationPath: {
            majors: ["Luật (4 năm) + Đào tạo nghề Luật sư 12 tháng + Tập sự 12 tháng", "Luật Kinh tế", "Luật Quốc tế"],
            examGroups: ["C00 (Văn, Sử, Địa)", "D01 (Toán, Văn, Anh)", "D14 (Văn, Sử, Anh)"],
            studyAbroad: "Anh (Oxford, Cambridge, LSE), Mỹ (Yale, Harvard Law School) và Pháp danh tiếng về đào tạo luật. Bằng LLM (Thạc sĩ Luật quốc tế) rất có giá trị cho hành nghề ở các hãng luật đa quốc gia.",
        },

        jobMarket: {
            employmentRate: "Ổn định — nhu cầu tư vấn pháp lý tăng theo sự phát triển kinh tế và đầu tư nước ngoài.",
            competition: "Khá cao — thị trường luật sư tại Việt Nam đang dần bão hòa ở mảng hình sự truyền thống; nhưng luật sư doanh nghiệp (M&A, FDI, Fintech) vẫn khan hiếm.",
            trend5to10years: "Luật Dữ liệu cá nhân, Sở hữu trí tuệ trong thời đại AI, và Luật Môi trường (ESG Compliance) sẽ là các chuyên khoa tăng trưởng mạnh nhất trong 10 năm tới.",
        },

        salaryBreakdown: {
            entry: "8 – 15 triệu/tháng (Luật sư tập sự / Intern tại hãng luật)",
            afterThreeToFiveYears: "20 – 60 triệu/tháng (Luật sư điều hành vụ việc độc lập, tùy hãng)",
            senior: "70 – 300+ triệu/tháng (Luật sư thành viên Big Law / Partner / Luật sư ngôi sao)",
        },

        pros: [
            "Vị thế xã hội cao và được tôn trọng.",
            "Thu nhập ở cấp Partner của hãng luật lớn thuộc top cao nhất mọi ngành.",
            "Mỗi vụ việc là một thách thức trí tuệ khác nhau — không bao giờ nhàm.",
            "Kiến thức pháp lý giúp bảo vệ lợi ích bản thân và gia đình trong cuộc sống.",
        ],
        cons: [
            "Thời gian đào tạo dài và tốn kém trước khi hành nghề độc lập.",
            "Áp lực cực cao khi kết quả vụ án ảnh hưởng trực tiếp đến cuộc đời thân chủ.",
            "Giờ làm việc thất thường — deadline nộp hồ sơ và phiên tòa không chờ đợi.",
            "Gánh nặng tinh thần khi xử lý các vụ án hình sự hay ly hôn đau lòng.",
        ],
        reasonsPeopleQuit:
            "Mất đức tin vào hệ thống pháp lý khi chứng kiến sự bất công, hoặc kiệt sức vì áp lực billable hours (giờ tính phí) và văn hóa làm thêm giờ tại các hãng luật lớn.",

        requirements: [
            "Bằng cử nhân Luật và chứng chỉ đào tạo nghề luật sư (Học viện Tư pháp).",
            "Hành nghề dưới sự giám sát 12 tháng tại tổ chức hành nghề có luật sư hướng dẫn.",
            "Cập nhật pháp luật thường xuyên vì hệ thống pháp luật thay đổi liên tục.",
        ],
    },
};
