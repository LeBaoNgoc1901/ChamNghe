export type Field =
    | "KINH TẾ – QUẢN LÝ"
    | "CÔNG NGHỆ – KỸ THUẬT"
    | "CHĂM SÓC – XÃ HỘI"
    | "DỊCH VỤ – DU LỊCH – GIẢI TRÍ"
    | "SẢN XUẤT – CÔNG NGHIỆP"
    | "PHÁP LÝ – HÀNH CHÍNH – CÔNG"
    | "NÔNG NGHIỆP – TÀI NGUYÊN";

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
    field: Field;
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


export const MOCK_SUGGESTED: Record<string, Cert[]> = {
    NF: [
        {
            id: 15,
            title: "SHRM-CP (HR Professional)",
            field: "KINH TẾ – QUẢN LÝ",
            issuer: "SHRM",
            image: "https://images.unsplash.com/photo-1573161158524-7932bc973da3?q=80&w=800&auto=format&fit=crop",
            hot: true,
            xp: 900,
            duration: "120 days"
        },
        {
            id: 16,
            title: "Nonprofit Management",
            field: "KINH TẾ – QUẢN LÝ",
            issuer: "Northwestern University",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
            xp: 800,
            duration: "90 days"
        },
        {
            id: 17,
            title: "Google UX Design Professional",
            field: "CÔNG NGHỆ – KỸ THUẬT",
            issuer: "Google",
            image: "https://images.unsplash.com/photo-1541462608141-ad6019702965?q=80&w=800&auto=format&fit=crop",
            hot: true,
            xp: 850,
            duration: "180 days"
        },
        {
            id: 18,
            title: "Tech for Good Challenge",
            field: "CÔNG NGHỆ – KỸ THUẬT",
            issuer: "University of Geneva",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop",
            xp: 700,
            duration: "60 days"
        },
        {
            id: 19,
            title: "Mental Health First Aid",
            field: "CHĂM SÓC – XÃ HỘI",
            issuer: "National Council",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
            hot: true,
            xp: 600,
            duration: "14 days"
        },
        {
            id: 20,
            title: "Social Work Practice",
            field: "CHĂM SÓC – XÃ HỘI",
            issuer: "University of Michigan",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
            xp: 700,
            duration: "120 days"
        },
        {
            id: 21,
            title: "Sustainable Tourism",
            field: "DỊCH VỤ – DU LỊCH – GIẢI TRÍ",
            issuer: "Copenhagen Business School",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
            xp: 750,
            duration: "75 days"
        },
        {
            id: 22,
            title: "Event Design",
            field: "DỊCH VỤ – DU LỊCH – GIẢI TRÍ",
            issuer: "Event Design Collective",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
            xp: 650,
            duration: "45 days"
        },
        {
            id: 23,
            title: "Ethical Supply Chain",
            field: "SẢN XUẤT – CÔNG NGHIỆP",
            issuer: "University of London",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
            xp: 850,
            duration: "60 days"
        },
        {
            id: 24,
            title: "Occupational Safety (NEBOSH)",
            field: "SẢN XUẤT – CÔNG NGHIỆP",
            issuer: "NEBOSH",
            image: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=800&auto=format&fit=crop",
            xp: 1100,
            duration: "90 days"
        },
        {
            id: 25,
            title: "Human Rights Law",
            field: "PHÁP LÝ – HÀNH CHÍNH – CÔNG",
            issuer: "University of Oxford",
            image: "https://images.unsplash.com/photo-1589216532372-1c2a167966b1?q=80&w=800&auto=format&fit=crop",
            xp: 1200,
            duration: "150 days"
        },
        {
            id: 26,
            title: "Diplomacy and Governance",
            field: "PHÁP LÝ – HÀNH CHÍNH – CÔNG",
            issuer: "UNITAR",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2950215?q=80&w=800&auto=format&fit=crop",
            xp: 1000,
            duration: "120 days"
        },
        {
            id: 27,
            title: "Regenerative Agriculture",
            field: "NÔNG NGHIỆP – TÀI NGUYÊN",
            issuer: "Soil Health Academy",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
            xp: 950,
            duration: "60 days"
        },
        {
            id: 28,
            title: "Water Stewardship",
            field: "NÔNG NGHIỆP – TÀI NGUYÊN",
            issuer: "AWS Water",
            image: "https://images.unsplash.com/photo-1470053242084-24872243c324?q=80&w=800&auto=format&fit=crop",
            xp: 800,
            duration: "45 days"
        }
    ],
    NT: [
        {
            id: 1,
            title: "CFA (Chartered Financial Analyst)",
            field: "KINH TẾ – QUẢN LÝ",
            issuer: "CFA Institute",
            image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
            hot: true,
            value: "Tiêu chuẩn vàng trong phân tích đầu tư và quản trị tài chính.",
            xp: 2500,
            duration: "300+ hours"
        },
        {
            id: 2,
            title: "PMP (Project Management Professional)",
            field: "KINH TẾ – QUẢN LÝ",
            issuer: "PMI",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
            hot: true,
            xp: 1500,
            lessons: 35,
            duration: "180 days"
        },
        {
            id: 3,
            title: "AWS Certified Solutions Architect",
            field: "CÔNG NGHỆ – KỸ THUẬT",
            issuer: "Amazon Web Services",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
            hot: true,
            xp: 1200,
            duration: "90 days"
        },
        {
            id: 4,
            title: "Google Professional ML Engineer",
            field: "CÔNG NGHỆ – KỸ THUẬT",
            issuer: "Google Cloud",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
            xp: 1800,
            duration: "120 days"
        },
        {
            id: 5,
            title: "Health Data Analytics",
            field: "CHĂM SÓC – XÃ HỘI",
            issuer: "Harvard University",
            image: "https://images.unsplash.com/photo-1504868584819-f8e905263543?q=80&w=800&auto=format&fit=crop",
            xp: 900,
            duration: "150 days"
        },
        {
            id: 6,
            title: "Global Health Policy",
            field: "CHĂM SÓC – XÃ HỘI",
            issuer: "University of Tokyo",
            image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop",
            xp: 850,
            duration: "60 days"
        },
        {
            id: 7,
            title: "Revenue Management",
            field: "DỊCH VỤ – DU LỊCH – GIẢI TRÍ",
            issuer: "Cornell University",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
            xp: 1000,
            duration: "90 days"
        },
        {
            id: 8,
            title: "Digital Marketing Analytics",
            field: "DỊCH VỤ – DU LỊCH – GIẢI TRÍ",
            issuer: "MIT Sloan",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            xp: 950,
            duration: "45 days"
        },
        {
            id: 9,
            title: "Smart Manufacturing Leader",
            field: "SẢN XUẤT – CÔNG NGHIỆP",
            issuer: "MIT xPRO",
            image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop",
            xp: 1400,
            duration: "120 days"
        },
        {
            id: 10,
            title: "CPIM (Inventory Management)",
            field: "SẢN XUẤT – CÔNG NGHIỆP",
            issuer: "ASCM",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
            xp: 1100,
            duration: "180 days"
        },
        {
            id: 11,
            title: "CIPP/E (Data Privacy Law)",
            field: "PHÁP LÝ – HÀNH CHÍNH – CÔNG",
            issuer: "IAPP",
            image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
            hot: true,
            xp: 1300,
            duration: "90 days"
        },
        {
            id: 12,
            title: "Public Policy Analysis",
            field: "PHÁP LÝ – HÀNH CHÍNH – CÔNG",
            issuer: "LSE",
            image: "https://images.unsplash.com/photo-1541829070764-84a7d30dee71?q=80&w=800&auto=format&fit=crop",
            xp: 1200,
            duration: "70 days"
        },
        {
            id: 13,
            title: "SCR (Climate Risk)",
            field: "NÔNG NGHIỆP – TÀI NGUYÊN",
            issuer: "GARP",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
            hot: true,
            xp: 1400,
            duration: "100 days"
        },
        {
            id: 14,
            title: "Precision Agriculture",
            field: "NÔNG NGHIỆP – TÀI NGUYÊN",
            issuer: "University of Reading",
            image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop",
            xp: 900,
            duration: "60 days"
        }
    ],
    SJ: [
        {
            id: 29,
            title: "Internal Auditor (CIA)",
            field: "KINH TẾ – QUẢN LÝ",
            issuer: "IIA",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
            xp: 1400,
            duration: "200 days"
        },
        {
            id: 30,
            title: "Administrative Professional",
            field: "KINH TẾ – QUẢN LÝ",
            issuer: "IAAP",
            image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=800&auto=format&fit=crop",
            xp: 600,
            duration: "60 days"
        },
        {
            id: 31,
            title: "CompTIA Security+",
            field: "CÔNG NGHỆ – KỸ THUẬT",
            issuer: "CompTIA",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
            hot: true,
            xp: 900,
            duration: "60 days"
        },
        {
            id: 32,
            title: "ITIL 4 Foundation",
            field: "CÔNG NGHỆ – KỸ THUẬT",
            issuer: "Axelos",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
            xp: 750,
            duration: "30 days"
        },
        {
            id: 33,
            title: "Health Administration",
            field: "CHĂM SÓC – XÃ HỘI",
            issuer: "Doane University",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
            xp: 1000,
            duration: "120 days"
        },
        {
            id: 34,
            title: "Pharmacy Technician",
            field: "CHĂM SÓC – XÃ HỘI",
            issuer: "PTCB",
            image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=800&auto=format&fit=crop",
            xp: 700,
            duration: "90 days"
        },
        {
            id: 35,
            title: "Hotel Operations (CHM)",
            field: "DỊCH VỤ – DU LỊCH – GIẢI TRÍ",
            issuer: "AHLEI",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
            xp: 800,
            duration: "90 days"
        },
        {
            id: 36,
            title: "Food Safety Manager",
            field: "DỊCH VỤ – DU LỊCH – GIẢI TRÍ",
            issuer: "ServSafe",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
            xp: 500,
            duration: "15 days"
        },
        {
            id: 37,
            title: "Six Sigma Green Belt",
            field: "SẢN XUẤT – CÔNG NGHIỆP",
            issuer: "IASSC",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
            hot: true,
            xp: 1100,
            duration: "60 days"
        },
        {
            id: 38,
            title: "Quality Engineer (CQE)",
            field: "SẢN XUẤT – CÔNG NGHIỆP",
            issuer: "ASQ",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
            xp: 1200,
            duration: "150 days"
        },
        {
            id: 39,
            title: "Certified Paralegal",
            field: "PHÁP LÝ – HÀNH CHÍNH – CÔNG",
            issuer: "NALA",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
            xp: 900,
            duration: "120 days"
        },
        {
            id: 40,
            title: "Records Management",
            field: "PHÁP LÝ – HÀNH CHÍNH – CÔNG",
            issuer: "ICRM",
            image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800&auto=format&fit=crop",
            xp: 950,
            duration: "180 days"
        },
        {
            id: 41,
            title: "LEED Green Associate",
            field: "NÔNG NGHIỆP – TÀI NGUYÊN",
            issuer: "USGBC",
            image: "https://images.unsplash.com/photo-1518005020480-10f54070a92d?q=80&w=800&auto=format&fit=crop",
            hot: true,
            xp: 800,
            duration: "30 days"
        },
        {
            id: 42,
            title: "Land Surveying",
            field: "NÔNG NGHIỆP – TÀI NGUYÊN",
            issuer: "NSPS",
            image: "https://images.unsplash.com/photo-1503387762-59293a293b00?q=80&w=800&auto=format&fit=crop",
            xp: 850,
            duration: "120 days"
        }
    ],
    SP: [
        {
            id: 43,
            title: "Professional Scrum Master",
            field: "KINH TẾ – QUẢN LÝ",
            issuer: "Scrum.org",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
            xp: 700,
            duration: "14 days"
        },
        {
            id: 44,
            title: "Digital Sales",
            field: "KINH TẾ – QUẢN LÝ",
            issuer: "Google",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            xp: 500,
            duration: "40 hours"
        },
        {
            id: 45,
            title: "Meta Front-End Developer",
            field: "CÔNG NGHỆ – KỸ THUẬT",
            issuer: "Meta",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
            hot: true,
            xp: 1000,
            duration: "180 days"
        },
        {
            id: 46,
            title: "Cisco CCNA",
            field: "CÔNG NGHỆ – KỸ THUẬT",
            issuer: "Cisco",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop",
            xp: 950,
            duration: "90 days"
        },
        {
            id: 47,
            title: "Emergency Medical Tech",
            field: "CHĂM SÓC – XÃ HỘI",
            issuer: "NREMT",
            image: "https://images.unsplash.com/photo-1584432822001-ec96f30a4736?q=80&w=800&auto=format&fit=crop",
            hot: true,
            xp: 1200,
            duration: "120 days"
        },
        {
            id: 48,
            title: "Personal Trainer",
            field: "CHĂM SÓC – XÃ HỘI",
            issuer: "NASM",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
            xp: 700,
            duration: "60 days"
        },
        {
            id: 49,
            title: "Culinary Arts",
            field: "DỊCH VỤ – DU LỊCH – GIẢI TRÍ",
            issuer: "Rouxbe",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
            xp: 900,
            duration: "180 days"
        },
        {
            id: 50,
            title: "WSET Sommelier Level 2",
            field: "DỊCH VỤ – DU LỊCH – GIẢI TRÍ",
            issuer: "WSET",
            image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
            xp: 800,
            duration: "30 days"
        },
        {
            id: 51,
            title: "Certified Welder",
            field: "SẢN XUẤT – CÔNG NGHIỆP",
            issuer: "AWS Welding",
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
            xp: 900,
            duration: "90 days"
        },
        {
            id: 52,
            title: "AutoCAD Professional",
            field: "SẢN XUẤT – CÔNG NGHIỆP",
            issuer: "Autodesk",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
            xp: 850,
            duration: "45 days"
        },
        {
            id: 53,
            title: "Conflict Management",
            field: "PHÁP LÝ – HÀNH CHÍNH – CÔNG",
            issuer: "UC Irvine",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
            xp: 600,
            duration: "30 days"
        },
        {
            id: 54,
            title: "Notary Public",
            field: "PHÁP LÝ – HÀNH CHÍNH – CÔNG",
            issuer: "National Notary",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
            xp: 450,
            duration: "15 days"
        },
        {
            id: 55,
            title: "Permaculture Design",
            field: "NÔNG NGHIỆP – TÀI NGUYÊN",
            issuer: "PRI",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
            xp: 900,
            duration: "72 hours"
        },
        {
            id: 56,
            title: "Arborist Certification",
            field: "NÔNG NGHIỆP – TÀI NGUYÊN",
            issuer: "ISA",
            image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop",
            xp: 750,
            duration: "60 days"
        }
    ],
    default: [
        {
            id: 57,
            title: "IELTS Academic",
            field: "PHÁP LÝ – HÀNH CHÍNH – CÔNG",
            issuer: "British Council",
            image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop",
            hot: true,
            xp: 1500,
            duration: "180 days"
        },
        {
            id: 58,
            title: "Microsoft Office Specialist (MOS)",
            field: "PHÁP LÝ – HÀNH CHÍNH – CÔNG",
            issuer: "Microsoft",
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop",
            xp: 400,
            duration: "30 days"
        },
        {
            id: 101,
            title: "Tư duy Thiết kế (Design Thinking)",
            field: "CÔNG NGHỆ – KỸ THUẬT",
            issuer: "Chạm Nghề - Bloom Cert",
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
            hot: true,
            xp: 500,
            lessons: 10,
            duration: "15 hours"
        },
        {
            id: 102,
            title: "Kỹ năng Giao tiếp Hiệu quả",
            field: "CHĂM SÓC – XÃ HỘI",
            issuer: "Coursera",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
            xp: 300,
            lessons: 8,
            duration: "12 hours"
        },
        {
            id: 103,
            title: "Quản trị Dự án Cơ bản",
            field: "KINH TẾ – QUẢN LÝ",
            issuer: "Google",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
            xp: 800,
            lessons: 24,
            duration: "40 hours"
        }
    ]
};

export const MOCK_ACHIEVED: Cert[] = [];

export const MOCK_COURSES_ACHIEVED: any[] = [];

export const MOCK_COURSES_SUGGESTED: Record<string, any[]> = {
    NF: [
        {
            id: 301,
            title: "Tâm lý học Hành vi",
            field: "CHĂM SÓC – XÃ HỘI",
            issuer: "Yale University",
            image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop",
            xp: 600,
            duration: "30 hours"
        }
    ],
    NT: [
        {
            id: 302,
            title: "Trí tuệ Nhân tạo Cho Mọi Người",
            field: "CÔNG NGHỆ – KỸ THUẬT",
            issuer: "DeepLearning.AI",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
            xp: 750,
            duration: "20 hours"
        }
    ],
    SJ: [
        {
            id: 303,
            title: "Kế toán Tài chính Cơ bản",
            field: "KINH TẾ – QUẢN LÝ",
            issuer: "University of Virginia",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
            xp: 550,
            duration: "25 hours"
        }
    ],
    default: [
        {
            id: 300,
            title: "Kỹ năng Học tập Suốt đời",
            field: "CHĂM SÓC – XÃ HỘI",
            issuer: "Chạm Nghề",
            image: "https://images.unsplash.com/photo-1501503060809-54bc4151b9bd?q=80&w=800&auto=format&fit=crop",
            xp: 400,
            duration: "10 hours"
        },
        {
            id: 201,
            title: "Nhập môn Lập trình React",
            field: "CÔNG NGHỆ – KỸ THUẬT",
            issuer: "FreeCodeCamp",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
            xp: 450,
            lessons: 30,
            duration: "25 hours"
        },
        {
            id: 202,
            title: "Marketing Trên Mạng Xã Hội",
            field: "DỊCH VỤ – DU LỊCH – GIẢI TRÍ",
            issuer: "HubSpot",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
            xp: 350,
            lessons: 12,
            duration: "10 hours"
        }
    ]
};

export const MOCK_COMPETITIONS: Record<string, Competition[]> = {
    NF: [
        {
            id: "SOC-REAL-01",
            title: "Social Innovation Relay (SIR)",
            status: "suggested",
            host: "Junior Achievement Worldwide & NN Group",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Cuộc thi tìm kiếm các giải pháp sáng tạo cho vấn đề xã hội. Giải thưởng: Chuyến đi học tập tại Châu Âu.",
            field: "CHĂM SÓC – XÃ HỘI",
            xp: 1200,
            roadmap: [
                { step: "01", title: "Idea Submission", date: "Tháng 2 - Tháng 3", status: "upcoming", desc: "Nộp ý tưởng sơ bộ về giải pháp đổi mới xã hội.", xp: 300 },
                { step: "02", title: "Mentoring Phase", date: "Tháng 4", status: "upcoming", desc: "Hoàn thiện kế hoạch kinh doanh cùng chuyên gia.", xp: 400 },
                { step: "03", title: "Global Final", date: "Tháng 6", status: "upcoming", desc: "Pitching trực tuyến với các đội tuyển toàn cầu.", xp: 500 }
            ]
        },
        {
            id: "SOC-REAL-02",
            title: "Global Student Entrepreneur Awards (GSEA)",
            status: "suggested",
            host: "Entrepreneurs' Organization",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Cuộc thi dành cho sinh viên vừa học vừa vận hành doanh nghiệp xã hội. Giải thưởng: 50,000 USD tiền mặt.",
            field: "CHĂM SÓC – XÃ HỘI",
            xp: 1800,
            roadmap: [
                { step: "01", title: "Local Competition", date: "Tháng 11 - Tháng 1", status: "completed", desc: "Phỏng vấn và thuyết trình doanh nghiệp tại quốc gia.", xp: 500 },
                { step: "02", title: "Regional Semifinals", date: "Tháng 2 - Tháng 3", status: "active", desc: "Vượt qua vòng loại khu vực Đông Nam Á.", xp: 600 },
                { step: "03", title: "Global Finals", date: "Tháng 5", status: "upcoming", desc: "Thuyết trình tại sự kiện Global Finals hàng năm.", xp: 700 }
            ]
        },
        {
            id: "SOC-REAL-03",
            title: "World Summit Youth Award",
            status: "suggested",
            host: "World Summit Awards",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Tôn vinh các sản phẩm kỹ thuật số hỗ trợ mục tiêu phát triển bền vững. Giải thưởng: Vinh danh toàn cầu.",
            field: "CHĂM SÓC – XÃ HỘI",
            xp: 1400,
            roadmap: [
                { step: "01", title: "National Nomination", date: "Tháng 6 - Tháng 8", status: "upcoming", desc: "Được đề cử bởi đại diện WSA quốc gia.", xp: 400 },
                { step: "02", title: "Online Jury", date: "Tháng 10", status: "upcoming", desc: "Ban giám khảo quốc tế đánh giá sản phẩm.", xp: 500 },
                { step: "03", title: "WSA Global Congress", date: "Tháng 3 (năm sau)", status: "upcoming", desc: "Tham gia lễ trao giải tại Châu Âu.", xp: 500 }
            ]
        }
    ],
    NT: [
        {
            id: "ECO-REAL-01",
            title: "HSBC Business Case Competition 2026",
            status: "suggested",
            host: "HSBC & National University of Singapore",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Cuộc thi giải quyết tình huống kinh doanh lớn nhất khu vực. Giải thưởng: 10,000 USD và cơ hội thực tập quản trị tại HSBC.",
            field: "KINH TẾ – QUẢN LÝ",
            xp: 1500,
            roadmap: [
                { step: "01", title: "National Selection", date: "Tháng 3 - Tháng 4", status: "upcoming", desc: "Giải case study kín trong 6 giờ không internet.", xp: 300 },
                { step: "02", title: "National Grand Final", date: "Tháng 5", status: "upcoming", desc: "Thuyết trình trước hội đồng giám khảo cấp cao tại Việt Nam.", xp: 500 },
                { step: "03", title: "Global Finals in Hong Kong", date: "Tháng 6", status: "upcoming", desc: "Tranh tài cùng 20 đội tuyển xuất sắc nhất thế giới.", xp: 700 }
            ]
        },
        {
            id: "ECO-REAL-02",
            title: "Hult Prize Global Challenge 2026",
            status: "suggested",
            host: "Hult Prize Foundation & United Nations",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2950215?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Giải thưởng Nobel cho sinh viên khởi nghiệp xã hội. Giải thưởng: 1 triệu USD vốn hạt giống.",
            field: "KINH TẾ – QUẢN LÝ",
            xp: 2500,
            roadmap: [
                { step: "01", title: "On-Campus Programs", date: "Tháng 12 - Tháng 2", status: "completed", desc: "Vòng loại tại hơn 1.000 trường đại học toàn cầu.", xp: 500 },
                { step: "02", title: "Global Summits", date: "Tháng 6 - Tháng 7", status: "upcoming", desc: "Trình bày tại các thành phố lớn (Lisbon, Mumbai, Nairobi).", xp: 1000 },
                { step: "03", title: "Global Accelerator & Finals", date: "Tháng 9", status: "upcoming", desc: "Pitching tại London hoặc New York để nhận 1M USD.", xp: 1000 }
            ]
        },
        {
            id: "ECO-REAL-03",
            title: "CFA Institute Research Challenge",
            status: "suggested",
            host: "CFA Institute",
            image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Phân tích tài chính và định giá cổ phiếu thực tế. Giải thưởng: Chứng nhận danh giá từ CFA và tiền mặt.",
            field: "KINH TẾ – QUẢN LÝ",
            xp: 1800,
            roadmap: [
                { step: "01", title: "Local Analysis", date: "Tháng 10 - Tháng 1", status: "upcoming", desc: "Viết báo cáo phân tích một công ty niêm yết thực tế.", xp: 600 },
                { step: "02", title: "Sub-Regional Finals", date: "Tháng 3", status: "upcoming", desc: "Thuyết trình báo cáo trước các chuyên gia tài chính (Charterholders).", xp: 600 },
                { step: "03", title: "Global Final", date: "Tháng 5", status: "upcoming", desc: "Tranh tài tại Mỹ/Châu Âu.", xp: 600 }
            ]
        },
        {
            id: "TECH-REAL-01",
            title: "Microsoft Imagine Cup 2026",
            status: "suggested",
            host: "Microsoft",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Cuộc thi sáng tạo công nghệ dựa trên nền tảng Azure. Giải thưởng: 100,000 USD và buổi cố vấn với Satya Nadella.",
            field: "CÔNG NGHỆ – KỸ THUẬT",
            xp: 2200,
            roadmap: [
                { step: "01", title: "Qualifying Round", date: "Tháng 1", status: "completed", desc: "Nộp bản mô tả dự án và video demo sản phẩm.", xp: 500 },
                { step: "02", title: "National/Regional Finals", date: "Tháng 3", status: "active", desc: "Thuyết trình và demo trực tiếp giải pháp kỹ thuật.", xp: 700 },
                { step: "03", title: "World Championship", date: "Tháng 5", status: "upcoming", desc: "Tranh tài tại trụ sở Microsoft, Seattle.", xp: 1000 }
            ]
        },
        {
            id: "TECH-REAL-02",
            title: "Google Solution Challenge",
            status: "suggested",
            host: "Google Developers",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Sử dụng công nghệ Google để giải quyết 17 mục tiêu bền vững của LHQ. Giải thưởng: 3,000 USD/thành viên và cố vấn từ Google.",
            field: "CÔNG NGHỆ – KỸ THUẬT",
            xp: 1500,
            roadmap: [
                { step: "01", title: "Project Submission", date: "Tháng 3", status: "upcoming", desc: "Gửi dự án thực tế sử dụng tối thiểu 1 công nghệ Google.", xp: 400 },
                { step: "02", title: "Top 100 Selection", date: "Tháng 4", status: "upcoming", desc: "Được Google chuyên gia cố vấn trong 2 tháng.", xp: 500 },
                { step: "03", title: "Demo Day", date: "Tháng 6", status: "upcoming", desc: "Trình diễn trực tiếp trên kênh Google Developers toàn cầu.", xp: 600 }
            ]
        },
        {
            id: "TECH-REAL-03",
            title: "ACM-ICPC World Finals",
            status: "suggested",
            host: "ICPC Foundation",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Thế vận hội lập trình thuật toán cho sinh viên. Giải thưởng: Huy chương vàng và sự săn đón của Big Tech.",
            field: "CÔNG NGHỆ – KỸ THUẬT",
            xp: 2800,
            roadmap: [
                { step: "01", title: "National Contest", date: "Tháng 10 - Tháng 11", status: "upcoming", desc: "Lập trình nhóm 5 tiếng giải quyết 10-12 bài toán thuật toán.", xp: 800 },
                { step: "02", title: "Regional Contest", date: "Tháng 12", status: "upcoming", desc: "Thi đấu tại các điểm trường trong khu vực Châu Á.", xp: 1000 },
                { step: "03", title: "World Finals", date: "Tùy năm", status: "upcoming", desc: "Tập trung tại địa điểm đăng cai toàn cầu.", xp: 1000 }
            ]
        }
    ],
    SJ: [
        {
            id: "LAW-REAL-01",
            title: "Philip C. Jessup International Law Moot Court 2026",
            status: "suggested",
            host: "International Law Students Association (ILSA)",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Cuộc thi diễn án luật quốc tế lâu đời nhất. Giải thưởng: Cúp vô địch và thực tập tại các hãng luật quốc tế.",
            field: "PHÁP LÝ – HÀNH CHÍNH – CÔNG",
            xp: 2800,
            roadmap: [
                { step: "01", title: "Memorial Submission", date: "Tháng 1", status: "upcoming", desc: "Nộp 2 bản quan điểm pháp lý (nguyên đơn và bị đơn) cực kỳ chi tiết.", xp: 1000 },
                { step: "02", title: "National Rounds", date: "Tháng 2 - Tháng 3", status: "upcoming", desc: "Tranh luận trực tiếp trước các thẩm phán thực thụ.", xp: 800 },
                { step: "03", title: "International Rounds", date: "Tháng 4", status: "upcoming", desc: "Tranh tài tại Washington, D.C., Mỹ.", xp: 1000 }
            ]
        },
        {
            id: "LAW-REAL-02",
            title: "Willem C. Vis International Commercial Arbitration Moot",
            status: "suggested",
            host: "Association for the Organization of the Vis Moot",
            image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Cuộc thi trọng tài thương mại quốc tế uy tín nhất. Giải thưởng: Giải Eric Bergsten danh giá.",
            field: "PHÁP LÝ – HÀNH CHÍNH – CÔNG",
            xp: 2500,
            roadmap: [
                { step: "01", title: "Claimant Memorandum", date: "Tháng 12", status: "upcoming", desc: "Soạn thảo hồ sơ khởi kiện cho bên nguyên đơn.", xp: 800 },
                { step: "02", title: "Respondent Memorandum", date: "Tháng 1", status: "upcoming", desc: "Soạn thảo hồ sơ phản biện cho bên bị đơn.", xp: 800 },
                { step: "03", title: "Oral Arguments in Vienna", date: "Tháng 3 - Tháng 4", status: "upcoming", desc: "Tranh biện trực tiếp tại Vienna, Áo.", xp: 900 }
            ]
        },
        {
            id: "LAW-REAL-03",
            title: "Model United Nations (MUN) - World Finals",
            status: "suggested",
            host: "Harvard / NMUN",
            image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Mô phỏng hội nghị Liên Hợp Quốc cấp cao. Giải thưởng: Giải Best Delegate toàn cầu.",
            field: "PHÁP LÝ – HÀNH CHÍNH – CÔNG",
            xp: 1500,
            roadmap: [
                { step: "01", title: "Position Paper", date: "Tháng 12", status: "upcoming", desc: "Nộp bản tóm tắt quan điểm của quốc gia được giao.", xp: 400 },
                { step: "02", title: "Committee Session", date: "Tháng 3", status: "upcoming", desc: "Thảo luận và liên minh giải quyết vấn đề toàn cầu.", xp: 500 },
                { step: "03", title: "General Assembly Resolution", date: "Tháng 3", status: "upcoming", desc: "Thông qua nghị quyết và lễ trao giải.", xp: 600 }
            ]
        },
        {
            id: "IND-REAL-01",
            title: "Formula Student Germany / UK",
            status: "suggested",
            host: "Institution of Mechanical Engineers (IMechE)",
            image: "https://images.unsplash.com/photo-1547915713-399ca587747e?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Cuộc thi kỹ thuật danh giá nhất cho kỹ sư chế tạo xe đua. Giải thưởng: Sự nghiệp tại các đội F1.",
            field: "SẢN XUẤT – CÔNG NGHIỆP",
            xp: 2500,
            roadmap: [
                { step: "01", title: "Registration & Design Quiz", date: "Tháng 1", status: "upcoming", desc: "Vượt qua bài test kiến thức kỹ thuật khắt khe.", xp: 500 },
                { step: "02", title: "Vehicle Manufacturing", date: "Tháng 2 - Tháng 6", status: "upcoming", desc: "Chế tạo và kiểm thử xe đua tại xưởng.", xp: 1000 },
                { step: "03", title: "Dynamic Events", date: "Tháng 7", status: "upcoming", desc: "Đua xe và bảo vệ thiết kế tại Silverstone (UK) hoặc Hockenheim (Đức).", xp: 1000 }
            ]
        },
        {
            id: "IND-REAL-02",
            title: "Solar Decathlon Europe/Asia",
            status: "suggested",
            host: "U.S. Department of Energy",
            image: "https://images.unsplash.com/photo-1509391366360-fe5bb658582f?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Thiết kế và xây dựng nhà năng lượng mặt trời. Giải thưởng: Tài trợ xây dựng và vinh danh kỹ thuật.",
            field: "SẢN XUẤT – CÔNG NGHIỆP",
            xp: 2300,
            roadmap: [
                { step: "01", title: "Proposal Phase", date: "Tháng 5", status: "upcoming", desc: "Nộp hồ sơ thiết kế kiến trúc và mô phỏng năng lượng.", xp: 600 },
                { step: "02", title: "Engineering Documentation", date: "Tháng 11", status: "upcoming", desc: "Chi tiết hóa bản vẽ kỹ thuật và quy trình sản xuất.", xp: 700 },
                { step: "03", title: "Final Construction", date: "Tháng 6 (năm sau)", status: "upcoming", desc: "Xây dựng nhà thực tế tại 'Solar Village'.", xp: 1000 }
            ]
        },
        {
            id: "IND-REAL-03",
            title: "ASME Student Design Exposition",
            status: "suggested",
            host: "American Society of Mechanical Engineers",
            image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Thiết kế và chế tạo robot/thiết bị cơ khí theo đề bài. Giải thưởng: 5,000 USD.",
            field: "SẢN XUẤT – CÔNG NGHIỆP",
            xp: 1600,
            roadmap: [
                { step: "01", title: "Regional E-Fest", date: "Tháng 3 - Tháng 4", status: "upcoming", desc: "Thi đấu vòng loại khu vực Châu Á Thái Bình Dương.", xp: 500 },
                { step: "02", title: "Technical Video", date: "Tháng 5", status: "upcoming", desc: "Gửi báo cáo kỹ thuật và video vận hành robot.", xp: 500 },
                { step: "03", title: "IMECE Global Final", date: "Tháng 11", status: "upcoming", desc: "Tranh tài tại hội nghị cơ khí toàn cầu tại Mỹ.", xp: 600 }
            ]
        }
    ],
    SP: [
        {
            id: "TOUR-REAL-01",
            title: "Young Hotelier Summit (YHS) Global Challenge",
            status: "suggested",
            host: "EHL Hospitality Business School (Thụy Sĩ)",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Thách thức giải quyết bài toán thực tế cho các tập đoàn lớn như Marriott, Accor. Giải thưởng: Thực tập tại Thụy Sĩ/Paris.",
            field: "DỊCH VỤ – DU LỊCH – GIẢI TRÍ",
            xp: 1400,
            roadmap: [
                { step: "01", title: "Public Voting & Selection", date: "Tháng 12", status: "completed", desc: "Sơ loại dựa trên video và hồ sơ năng lực.", xp: 400 },
                { step: "02", title: "Ranking Phase", date: "Tháng 1 - Tháng 2", status: "active", desc: "Giải quyết bài toán chiến lược online.", xp: 500 },
                { step: "03", title: "Summit in Lausanne", date: "Tháng 3", status: "upcoming", desc: "Thuyết trình trực tiếp tại EHL campus, Thụy Sĩ.", xp: 500 }
            ]
        },
        {
            id: "TOUR-REAL-02",
            title: "WorldSkills Hospitality Services",
            status: "suggested",
            host: "WorldSkills International",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Kỳ thi kỹ năng nghề thế giới. Giải thưởng: Huy chương kỹ năng nghề quốc tế và danh tiếng sự nghiệp.",
            field: "DỊCH VỤ – DU LỊCH – GIẢI TRÍ",
            xp: 2000,
            roadmap: [
                { step: "01", title: "National Skill Contest", date: "Tùy quốc gia", status: "upcoming", desc: "Thi kỹ năng phục vụ bàn, lễ tân chuyên nghiệp.", xp: 600 },
                { step: "02", title: "Regional Contest", date: "Tháng 8", status: "upcoming", desc: "Thi đấu cấp khu vực ASEAN.", xp: 600 },
                { step: "03", title: "WorldSkills Final", date: "Tháng 10 (2 năm/lần)", status: "upcoming", desc: "Thi đấu chung kết tại địa điểm đăng cai (như Lyon, Thượng Hải).", xp: 800 }
            ]
        },
        {
            id: "TOUR-REAL-03",
            title: "UNWTO Students' League 2026",
            status: "suggested",
            host: "World Tourism Organization",
            image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Thử thách giải quyết vấn đề du lịch thực tế của LHQ. Giải thưởng: Khóa đào tạo chuyên sâu quốc tế.",
            field: "DỊCH VỤ – DU LỊCH – GIẢI TRÍ",
            xp: 1300,
            roadmap: [
                { step: "01", title: "Challenge Launch", date: "Tháng 2", status: "upcoming", desc: "Nhận đề bài thực tế từ một điểm đến du lịch toàn cầu.", xp: 400 },
                { step: "02", title: "Solution Development", date: "Tháng 4", status: "upcoming", desc: "Nộp kế hoạch hành động chi tiết.", xp: 400 },
                { step: "03", title: "Final Pitch", date: "Tháng 5", status: "upcoming", desc: "Thuyết trình trước đại diện UNWTO.", xp: 500 }
            ]
        },
        {
            id: "AGRI-REAL-01",
            title: "Thought For Food (TFF) Global Challenge",
            status: "suggested",
            host: "TFF Foundation",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Tìm kiếm giải pháp cho an ninh lương thực. Giải thưởng: 30,000 USD vốn đầu tư hạt giống.",
            field: "NÔNG NGHIỆP – TÀI NGUYÊN",
            xp: 1600,
            roadmap: [
                { step: "01", title: "Innovation Pitch", date: "Tháng 6 - Tháng 8", status: "upcoming", desc: "Nộp video giới thiệu giải pháp Agri-Tech sáng tạo.", xp: 500 },
                { step: "02", title: "TFF Academy", date: "Tháng 9 - Tháng 10", status: "upcoming", desc: "Chương trình tăng tốc khởi nghiệp cho Top 10 dự án.", xp: 500 },
                { step: "03", title: "TFF Global Summit", date: "Tháng 11", status: "upcoming", desc: "Trình bày dự án trước các quỹ đầu tư nông nghiệp toàn cầu.", xp: 600 }
            ]
        },
        {
            id: "AGRI-REAL-02",
            title: "Schneider Electric Go Green - Green Industry",
            status: "suggested",
            host: "Schneider Electric",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Giải pháp năng lượng và nông nghiệp xanh. Giải thưởng: Cơ hội làm việc chính thức tại Schneider toàn cầu.",
            field: "NÔNG NGHIỆP – TÀI NGUYÊN",
            xp: 1400,
            roadmap: [
                { step: "01", title: "Submission", date: "Tháng 12", status: "upcoming", desc: "Đề xuất giải pháp bền vững cho chuỗi cung ứng nông nghiệp.", xp: 400 },
                { step: "02", title: "Mentorship", date: "Tháng 2 - Tháng 3", status: "upcoming", desc: "Hoàn thiện dự án cùng chuyên gia kỹ thuật của hãng.", xp: 500 },
                { step: "03", title: "Global Finals", date: "Tháng 5", status: "upcoming", desc: "Pitching trực tuyến toàn thế giới.", xp: 500 }
            ]
        },
        {
            id: "AGRI-REAL-03",
            title: "International Soil Judging Contest",
            status: "suggested",
            host: "International Union of Soil Sciences (IUSS)",
            image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop",
            progress: 0,
            details: "Cuộc thi đánh giá và phân loại đất chuyên sâu cho các nhà khoa học trẻ. Giải thưởng: Chứng nhận chuyên gia quốc tế.",
            field: "NÔNG NGHIỆP – TÀI NGUYÊN",
            xp: 1200,
            roadmap: [
                { step: "01", title: "National Selection", date: "Tùy quốc gia", status: "upcoming", desc: "Thi phân tích tính chất lý hóa của đất tại hiện trường.", xp: 400 },
                { step: "02", title: "International Training", date: "Trước kỳ thi 5 ngày", status: "upcoming", desc: "Huấn luyện tại điểm thi thực tế toàn cầu.", xp: 400 },
                { step: "03", title: "Contest Day", date: "Cùng đại hội IUSS", status: "upcoming", desc: "Thi thực hành mô tả tầng đất và đánh giá tiềm năng sử dụng.", xp: 400 }
            ]
        }
    ]
};
