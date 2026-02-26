import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  TrendingUp,
  Sparkles,
  ArrowRight,
  BookOpen,
  Users,
  Cpu,
  Heart,
  Globe,
  Truck,
  Gavel,
  Sprout,
  Palmtree,
  Stethoscope,
  GraduationCap,
  Utensils,
  Camera,
  Factory,
  Scale,
  Zap,
  Search
} from "lucide-react";

// --- DATA STRUCTURE ---

interface Career {
  id: string;
  name: string;
  category: string;
  block: string;
  description: string;
  salary: string;
  tags: string[];
}

const CAREER_DATA: Career[] = [
  // KINH TẾ – QUẢN LÝ
  { id: "1-1", block: "Kinh tế – Quản lý", category: "Kinh doanh – Quản trị", name: "Quản trị doanh nghiệp", description: "Điều hành và hoạch định chiến lược phát triển cho tổ chức.", salary: "20 - 50tr", tags: ["Strategy", "Leadership"] },
  { id: "1-2", block: "Kinh tế – Quản lý", category: "Kinh doanh – Quản trị", name: "Quản trị nhân sự (HR)", description: "Quản lý nguồn nhân lực, tuyển dụng và phát triển văn hóa công ty.", salary: "15 - 35tr", tags: ["Recruitment", "Culture"] },
  { id: "1-3", block: "Kinh tế – Quản lý", category: "Kinh doanh – Quản trị", name: "Quản lý dự án", description: "Lập kế hoạch, thực hiện và giám sát các dự án chuyên nghiệp.", salary: "25 - 60tr", tags: ["Management", "Agile"] },
  { id: "1-4", block: "Kinh tế – Quản lý", category: "Kinh doanh – Quản trị", name: "Chuyên viên phát triển kinh doanh", description: "Tìm kiếm cơ hội mới và mở rộng mạng lưới đối tác.", salary: "18 - 45tr", tags: ["Sales", "Networking"] },
  { id: "1-5", block: "Kinh tế – Quản lý", category: "Kinh doanh – Quản trị", name: "Chuyên viên vận hành (Operations)", description: "Tối ưu hóa quy trình làm việc hiệu quả bên trong doanh nghiệp.", salary: "15 - 30tr", tags: ["Operations", "Efficiency"] },

  { id: "2-1", block: "Kinh tế – Quản lý", category: "Marketing – Truyền thông", name: "Digital Marketing", description: "Tiếp cận khách hàng thông qua các kênh kỹ thuật số.", salary: "12 - 40tr", tags: ["Digital", "Ads"] },
  { id: "2-2", block: "Kinh tế – Quản lý", category: "Marketing – Truyền thông", name: "SEO/SEM Specialist", description: "Tăng khả năng hiển thị của website trên công cụ tìm kiếm.", salary: "10 - 30tr", tags: ["SEO", "Google"] },
  { id: "2-3", block: "Kinh tế – Quản lý", category: "Marketing – Truyền thông", name: "Content Creator", description: "Sáng tạo nội dung thu hút trên các nền tảng mạng xã hội.", salary: "10 - 50tr", tags: ["Creative", "Social"] },
  { id: "2-4", block: "Kinh tế – Quản lý", category: "Marketing – Truyền thông", name: "Quản lý thương hiệu (Brand Manager)", description: "Xây dựng và bảo vệ hình ảnh thương hiệu trong lòng khách hàng.", salary: "25 - 70tr", tags: ["Branding", "Storytelling"] },
  { id: "2-5", block: "Kinh tế – Quản lý", category: "Marketing – Truyền thông", name: "PR – Quan hệ công chúng", description: "Quản lý thông tin và xây dựng mối quan hệ với báo chí, cộng đồng.", salary: "15 - 40tr", tags: ["PR", "Communication"] },

  { id: "3-1", block: "Kinh tế – Quản lý", category: "Tài chính – Ngân hàng – Bảo hiểm", name: "Giao dịch viên ngân hàng", description: "Hỗ trợ khách hàng thực hiện các giao dịch tài chính tại quầy.", salary: "8 - 15tr", tags: ["Service", "Banking"] },
  { id: "3-2", block: "Kinh tế – Quản lý", category: "Tài chính – Ngân hàng – Bảo hiểm", name: "Chuyên viên tín dụng", description: "Thẩm định hồ sơ vay vốn và tư vấn tài chính cho khách hàng.", salary: "10 - 25tr", tags: ["Credit", "Finance"] },
  { id: "3-3", block: "Kinh tế – Quản lý", category: "Tài chính – Ngân hàng – Bảo hiểm", name: "Phân tích tài chính", description: "Đánh giá dữ liệu tài chính để đưa ra các đề xuất đầu tư.", salary: "20 - 55tr", tags: ["Data", "Investing"] },
  { id: "3-4", block: "Kinh tế – Quản lý", category: "Tài chính – Ngân hàng – Bảo hiểm", name: "Môi giới chứng khoán", description: "Tư vấn và thực hiện lệnh mua bán cổ phiếu cho nhà đầu tư.", salary: "15 - 100tr", tags: ["Stock", "Trading"] },
  { id: "3-5", block: "Kinh tế – Quản lý", category: "Tài chính – Ngân hàng – Bảo hiểm", name: "Tư vấn bảo hiểm", description: "Gi giúp khách hàng lựa chọn các giải pháp bảo vệ rủi ro.", salary: "10 - 40tr", tags: ["Sales", "Protection"] },

  { id: "4-1", block: "Kinh tế – Quản lý", category: "Kế toán – Kiểm toán – Thuế", name: "Kế toán nội bộ", description: "Theo dõi và ghi chép các hoạt động tài chính trong công ty.", salary: "9 - 20tr", tags: ["Accounting", "Numbers"] },
  { id: "4-2", block: "Kinh tế – Quản lý", category: "Kế toán – Kiểm toán – Thuế", name: "Kiểm toán viên", description: "Kiểm tra và xác nhận tính trung thực của báo cáo tài chính.", salary: "12 - 45tr", tags: ["Audit", "Transparency"] },
  { id: "4-3", block: "Kinh tế – Quản lý", category: "Kế toán – Kiểm toán – Thuế", name: "Tư vấn thuế", description: "Giải quyết các thủ tục pháp lý về thuế cho cá nhân và tổ chức.", salary: "15 - 35tr", tags: ["Law", "Tax"] },
  { id: "4-4", block: "Kinh tế – Quản lý", category: "Kế toán – Kiểm toán – Thuế", name: "Kế toán trưởng", description: "Quản lý toàn bộ hệ thống kế toán và báo cáo cho ban giám đốc.", salary: "30 - 80tr", tags: ["Management", "Finance"] },

  // CÔNG NGHỆ – KỸ THUẬT
  { id: "5-1", block: "Công nghệ – Kỹ thuật", category: "Công nghệ thông tin", name: "Lập trình viên Front-end / Back-end", description: "Xây dựng và phát triển các ứng dụng web chuyên nghiệp.", salary: "15 - 60tr", tags: ["Coding", "Web"] },
  { id: "5-2", block: "Công nghệ – Kỹ thuật", category: "Công nghệ thông tin", name: "Phát triển ứng dụng di động", description: "Tạo ra các ứng dụng trên iOS và Android.", salary: "18 - 65tr", tags: ["Mobile", "App"] },
  { id: "5-3", block: "Công nghệ – Kỹ thuật", category: "Công nghệ thông tin", name: "Kỹ sư AI", description: "Nghiên cứu và phát triển trí tuệ nhân tạo.", salary: "30 - 100tr", tags: ["AI", "Python"] },
  { id: "5-4", block: "Công nghệ – Kỹ thuật", category: "Công nghệ thông tin", name: "Phân tích dữ liệu", description: "Trực quan hóa và tìm kiếm thông tin từ các tập dữ liệu lớn.", salary: "15 - 50tr", tags: ["Analysis", "SQL"] },
  { id: "5-5", block: "Công nghệ – Kỹ thuật", category: "Công nghệ thông tin", name: "An ninh mạng", description: "Bảo vệ hệ thống và dữ liệu trước các cuộc tấn công mạng.", salary: "20 - 70tr", tags: ["Security", "Linux"] },

  { id: "6-1", block: "Công nghệ – Kỹ thuật", category: "Kỹ thuật – Cơ khí – Điện", name: "Kỹ sư cơ khí", description: "Thiết kế và vận hành các hệ thống máy móc sản xuất.", salary: "12 - 35tr", tags: ["Mechanics", "Manufacturing"] },
  { id: "6-2", block: "Công nghệ – Kỹ thuật", category: "Kỹ thuật – Cơ khí – Điện", name: "Kỹ sư điện – điện tử", description: "Thiết kế mạch điện và các thiết bị điện tử gia dụng, công nghiệp.", salary: "12 - 40tr", tags: ["Electronics", "Circuits"] },
  { id: "6-3", block: "Công nghệ – Kỹ thuật", category: "Kỹ thuật – Cơ khí – Điện", name: "Kỹ sư tự động hóa", description: "Lập trình và vận hành cánh tay robot và dây chuyền tự động.", salary: "15 - 45tr", tags: ["Automation", "Robotics"] },
  { id: "6-4", block: "Công nghệ – Kỹ thuật", category: "Kỹ thuật – Cơ khí – Điện", name: "Bảo trì kỹ thuật", description: "Duy trì hoạt động ổn định của các thiết bị máy móc trong nhà máy.", salary: "10 - 25tr", tags: ["Maintenance", "Support"] },

  { id: "7-1", block: "Công nghệ – Kỹ thuật", category: "Xây dựng – Kiến trúc", name: "Kỹ sư xây dựng", description: "Quản lý và giám sát thi công các công trình dân dụng, hạ tầng.", salary: "12 - 35tr", tags: ["Construction", "Project"] },
  { id: "7-2", block: "Công nghệ – Kỹ thuật", category: "Xây dựng – Kiến trúc", name: "Kiến trúc sư", description: "Thiết kế không gian và hình thái cho các tòa nhà.", salary: "15 - 50tr", tags: ["Architecture", "Creative"] },
  { id: "7-3", block: "Công nghệ – Kỹ thuật", category: "Xây dựng – Kiến trúc", name: "Giám sát công trình", description: "Đảm bảo chất lượng và an toàn trong suốt quá trình thi công.", salary: "12 - 25tr", tags: ["Inspection", "Quality"] },
  { id: "7-4", block: "Công nghệ – Kỹ thuật", category: "Xây dựng – Kiến trúc", name: "Thiết kế nội thất", description: "Tổ chức không gian sống thẩm mỹ và tiện nghi.", salary: "10 - 45tr", tags: ["Interior", "Design"] },

  { id: "8-1", block: "Công nghệ – Kỹ thuật", category: "Công nghệ sinh học – Môi trường", name: "Kỹ sư môi trường", description: "Thiết kế giải pháp giảm thiểu tác động tiêu cực đến tự nhiên.", salary: "10 - 30tr", tags: ["Environment", "Green"] },
  { id: "8-2", block: "Công nghệ – Kỹ thuật", category: "Công nghệ sinh học – Môi trường", name: "Chuyên viên xử lý nước thải", description: "Quản lý hệ thống lọc và tái sử dụng nước cho công nghiệp.", salary: "9 - 20tr", tags: ["Water", "Chemical"] },
  { id: "8-3", block: "Công nghệ – Kỹ thuật", category: "Công nghệ sinh học – Môi trường", name: "Nghiên cứu sinh học", description: "Nghiên cứu về di truyền, vi sinh và ứng dụng trong y tế, nông nghiệp.", salary: "12 - 40tr", tags: ["Bio", "Research"] },
  { id: "8-4", block: "Công nghệ – Kỹ thuật", category: "Công nghệ sinh học – Môi trường", name: "Quản lý tài nguyên", description: "Quy hoạch và bảo tồn tài nguyên thiên nhiên.", salary: "10 - 25tr", tags: ["Resources", "Care"] },

  // CHĂM SÓC – XÃ HỘI
  { id: "9-1", block: "Chăm sóc – Xã hội", category: "Y tế – Dược", name: "Bác sĩ", description: "Chẩn đoán và điều trị bệnh lý cho bệnh nhân.", salary: "20 - 100tr", tags: ["Medicine", "Help"] },
  { id: "9-2", block: "Chăm sóc – Xã hội", category: "Y tế – Dược", name: "Điều dưỡng", description: "Chăm sóc và hỗ trợ bệnh nhân trong quá trình điều trị.", salary: "10 - 25tr", tags: ["Nursing", "Care"] },
  { id: "9-3", block: "Chăm sóc – Xã hội", category: "Y tế – Dược", name: "Dược sĩ", description: "Tư vấn và cấp phát thuốc theo đơn hoặc triệu chứng.", salary: "12 - 35tr", tags: ["Pharmacy", "Health"] },
  { id: "9-4", block: "Chăm sóc – Xã hội", category: "Y tế – Dược", name: "Kỹ thuật viên xét nghiệm", description: "Thực hiện các phân tích mẫu máu, mô để hỗ trợ chẩn đoán.", salary: "10 - 20tr", tags: ["Lab", "Tech"] },
  { id: "9-5", block: "Chăm sóc – Xã hội", category: "Y tế – Dược", name: "Chuyên viên vật lý trị liệu", description: "Hỗ trợ phục hồi chức năng vận động cho người bệnh.", salary: "12 - 30tr", tags: ["Physio", "Recovery"] },

  { id: "10-1", block: "Chăm sóc – Xã hội", category: "Giáo dục – Đào tạo", name: "Giáo viên mầm non", description: "Dạy dỗ và chăm sóc trẻ em ở độ tuổi nhỏ.", salary: "7 - 15tr", tags: ["Kids", "Preschool"] },
  { id: "10-2", block: "Chăm sóc – Xã hội", category: "Giáo dục – Đào tạo", name: "Giáo viên THCS – THPT", description: "Giảng dạy kiến thức nền tảng cho học sinh phổ thông.", salary: "8 - 25tr", tags: ["School", "Academic"] },
  { id: "10-3", block: "Chăm sóc – Xã hội", category: "Giáo dục – Đào tạo", name: "Giảng viên đại học", description: "Giảng dạy và nghiên cứu khoa học tại các trường cao đẳng, đại học.", salary: "15 - 50tr", tags: ["Higher Ed", "Research"] },
  { id: "10-4", block: "Chăm sóc – Xã hội", category: "Giáo dục – Đào tạo", name: "Chuyên viên đào tạo doanh nghiệp", description: "Xây dựng chương trình nâng cao kỹ năng cho nhân viên.", salary: "15 - 40tr", tags: ["Corporate", "Training"] },

  { id: "11-1", block: "Chăm sóc – Xã hội", category: "Tâm lý – Công tác xã hội", name: "Nhà tâm lý học", description: "Hỗ trợ và tham vấn sức khỏe tinh thần cho cộng đồng.", salary: "15 - 45tr", tags: ["Mental Health", "Empathy"] },
  { id: "11-2", block: "Chăm sóc – Xã hội", category: "Tâm lý – Công tác xã hội", name: "Tham vấn học đường", description: "Giải quyết các vấn đề tâm lý cho học sinh trong trường học.", salary: "10 - 25tr", tags: ["School", "Support"] },
  { id: "11-3", block: "Chăm sóc – Xã hội", category: "Tâm lý – Công tác xã hội", name: "Chuyên viên công tác xã hội", description: "Hỗ trợ các cá nhân và nhóm yếu thế trong xã hội.", salary: "8 - 18tr", tags: ["Social Work", "Help"] },
  { id: "11-4", block: "Chăm sóc – Xã hội", category: "Tâm lý – Công tác xã hội", name: "Tư vấn hướng nghiệp", description: "Giúp mọi người tìm ra đam mê và con đường sự nghiệp phù hợp.", salary: "12 - 35tr", tags: ["Career", "Advice"] },

  // DỊCH VỤ – DU LỊCH – GIẢI TRÍ
  { id: "12-1", block: "Dịch vụ – Du lịch – Giải trí", category: "Du lịch – Khách sạn", name: "Hướng dẫn viên du lịch", description: "Dẫn dắt và thuyết minh cho du khách tại các địa điểm tham quan.", salary: "12 - 30tr", tags: ["Travel", "Guide"] },
  { id: "12-2", block: "Dịch vụ – Du lịch – Giải trí", category: "Du lịch – Khách sạn", name: "Lễ tân khách sạn", description: "Tiếp đón và xử lý các yêu cầu của khách lưu trú.", salary: "8 - 15tr", tags: ["Service", "Hotel"] },
  { id: "12-3", block: "Dịch vụ – Du lịch – Giải trí", category: "Du lịch – Khách sạn", name: "Điều hành tour", description: "Lên kế hoạch và điều phối các dịch vụ trong chuyến đi.", salary: "10 - 25tr", tags: ["Tour", "Ops"] },
  { id: "12-4", block: "Dịch vụ – Du lịch – Giải trí", category: "Du lịch – Khách sạn", name: "Quản lý resort", description: "Vận hành toàn bộ hệ thống nghỉ dưỡng cao cấp.", salary: "30 - 100tr", tags: ["Resort", "Manager"] },

  { id: "13-1", block: "Dịch vụ – Du lịch – Giải trí", category: "Nhà hàng – Ẩm thực", name: "Đầu bếp", description: "Sáng tạo và chế biến các món ăn ngon cho thực khách.", salary: "12 - 60tr", tags: ["Chef", "Cooking"] },
  { id: "13-2", block: "Dịch vụ – Du lịch – Giải trí", category: "Nhà hàng – Ẩm thực", name: "Bartender", description: "Pha chế và phục vụ các loại đồ uống đồ cồn, mocktail.", salary: "10 - 25tr", tags: ["Drink", "Vibe"] },
  { id: "13-3", block: "Dịch vụ – Du lịch – Giải trí", category: "Nhà hàng – Ẩm thực", name: "Quản lý nhà hàng", description: "Điều phối nhân sự và đảm bảo chất lượng phục vụ tại nhà hàng.", salary: "15 - 40tr", tags: ["Manager", "Food"] },
  { id: "13-4", block: "Dịch vụ – Du lịch – Giải trí", category: "Nhà hàng – Ẩm thực", name: "Chuyên gia ẩm thực", description: "Nghiên cứu và đánh giá chất lượng món ăn, văn hóa ẩm thực.", salary: "15 - 45tr", tags: ["Expert", "Taste"] },

  { id: "14-1", block: "Dịch vụ – Du lịch – Giải trí", category: "Nghệ thuật – Sáng tạo", name: "Thiết kế đồ họa", description: "Truyền đạt thông điệp thông qua hình ảnh và bố cục.", salary: "12 - 40tr", tags: ["Graphic", "Visual"] },
  { id: "14-2", block: "Dịch vụ – Du lịch – Giải trí", category: "Nghệ thuật – Sáng tạo", name: "Nhiếp ảnh gia", description: "Bắt trọn khoảnh khắc thông qua lăng kính nghệ thuật.", salary: "10 - 50tr", tags: ["Photo", "Art"] },
  { id: "14-3", block: "Dịch vụ – Du lịch – Giải trí", category: "Nghệ thuật – Sáng tạo", name: "Diễn viên", description: "Hóa thân vào các nhân vật để truyền tải câu chuyện.", salary: "10 - 200tr", tags: ["Acting", "Stage"] },
  { id: "14-4", block: "Dịch vụ – Du lịch – Giải trí", category: "Nghệ thuật – Sáng tạo", name: "Biên tập viên", description: "Chỉnh sửa và hoàn thiện các nội dung văn bản, video.", salary: "12 - 35tr", tags: ["Editor", "Media"] },
  { id: "14-5", block: "Dịch vụ – Du lịch – Giải trí", category: "Nghệ thuật – Sáng tạo", name: "Animator", description: "Tạo ra các chuyển động cho nhân vật 2D/3D.", salary: "15 - 50tr", tags: ["Animation", "3D"] },

  // SẢN XUẤT – CÔNG NGHIỆP
  { id: "15-1", block: "Sản xuất – Công nghiệp", category: "Sản xuất – Quản lý chất lượng", name: "Quản lý nhà máy", description: "Vận hành và tối ưu hóa hệ thống sản xuất tại khu công nghiệp.", salary: "25 - 70tr", tags: ["Factory", "Ops"] },
  { id: "15-2", block: "Sản xuất – Công nghiệp", category: "Sản xuất – Quản lý chất lượng", name: "Kỹ sư sản xuất", description: "Thiết kế quy trình và giám sát máy móc trên dây chuyền.", salary: "15 - 40tr", tags: ["Engineer", "Process"] },
  { id: "15-3", block: "Sản xuất – Công nghiệp", category: "Sản xuất – Quản lý chất lượng", name: "Kiểm soát chất lượng (QC/QA)", description: "Đảm bảo sản phẩm đạt tiêu chuẩn trước khi ra thị trường.", salary: "12 - 30tr", tags: ["Quality", "Rules"] },

  { id: "16-1", block: "Sản xuất – Công nghiệp", category: "Logistics – Chuỗi cung ứng", name: "Quản lý kho", description: "Kiểm soát hàng hóa nhập xuất và tồn kho hiệu quả.", salary: "12 - 30tr", tags: ["Warehouse", "Inflow"] },
  { id: "16-2", block: "Sản xuất – Công nghiệp", category: "Logistics – Chuỗi cung ứng", name: "Điều phối vận tải", description: "Lập sơ đồ và quản lý lịch trình di chuyển của đội xe.", salary: "12 - 25tr", tags: ["Transport", "Fleet"] },
  { id: "16-3", block: "Sản xuất – Công nghiệp", category: "Logistics – Chuỗi cung ứng", name: "Xuất nhập khẩu", description: "Xử lý các thủ tục hải quan và giao nhận hàng quốc tế.", salary: "12 - 40tr", tags: ["Trade", "Border"] },
  { id: "16-4", block: "Sản xuất – Công nghiệp", category: "Logistics – Chuỗi cung ứng", name: "Supply Chain Analyst", description: "Phân tích và tối ưu hóa toàn bộ chuỗi cung ứng.", salary: "20 - 55tr", tags: ["Supply Chain", "Data"] },

  // PHÁP LÝ – HÀNH CHÍNH – CÔNG
  { id: "17-1", block: "Pháp lý – Hành chính – Công", category: "Luật – Pháp lý", name: "Luật sư", description: "Bảo vệ quyền lợi hợp pháp của khách hàng tại tòa.", salary: "15 - 150tr", tags: ["Justice", "Advice"] },
  { id: "17-2", block: "Pháp lý – Hành chính – Công", category: "Luật – Pháp lý", name: "Công chứng viên", description: "Chứng thực tính hợp pháp của các giao dịch, văn bản.", salary: "15 - 40tr", tags: ["Legal", "Paperwork"] },
  { id: "17-3", block: "Pháp lý – Hành chính – Công", category: "Luật – Pháp lý", name: "Chuyên viên pháp chế doanh nghiệp", description: "Đảm bảo mọi hoạt động của công ty tuân thủ đạo luật.", salary: "18 - 50tr", tags: ["Compliance", "Corporate"] },

  { id: "18-1", block: "Pháp lý – Hành chính – Công", category: "Hành chính – Nhà nước", name: "Cán bộ hành chính", description: "Quản lý hồ sơ và các công việc văn phòng trong cơ quan nhà nước.", salary: "7 - 15tr", tags: ["Office", "Public"] },
  { id: "18-2", block: "Pháp lý – Hành chính – Công", category: "Hành chính – Nhà nước", name: "Công chức", description: "Nhân sự làm việc trong bộ máy quản lý nhà nước các cấp.", salary: "Varies", tags: ["State", "Policy"] },
  { id: "18-3", block: "Pháp lý – Hành chính – Công", category: "Hành chính – Nhà nước", name: "Chuyên viên hoạch định chính sách", description: "Nghiên cứu và đề xuất các chính sách phát triển xã hội.", salary: "15 - 45tr", tags: ["Policy", "Strategy"] },

  // NÔNG NGHIỆP – TÀI NGUYÊN
  { id: "19-1", block: "Nông nghiệp – Tài nguyên", category: "Nông nghiệp công nghệ cao", name: "Kỹ sư nông nghiệp", description: "Ứng dụng khoa học vào trồng trọt để tăng năng suất.", salary: "12 - 35tr", tags: ["Agri", "Science"] },
  { id: "19-2", block: "Nông nghiệp – Tài nguyên", category: "Nông nghiệp công nghệ cao", name: "Quản lý trang trại", description: "Vận hành các hệ thống trang trại quy mô lớn.", salary: "15 - 40tr", tags: ["Farm", "Manager"] },
  { id: "19-3", block: "Nông nghiệp – Tài nguyên", category: "Nông nghiệp công nghệ cao", name: "Kỹ thuật viên trồng trọt", description: "Trực tiếp chăm sóc và theo dõi sức khỏe cây trồng.", salary: "8 - 18tr", tags: ["Plant", "Health"] },

  { id: "20-1", block: "Nông nghiệp – Tài nguyên", category: "Thủy sản – Lâm nghiệp", name: "Kỹ sư nuôi trồng thủy sản", description: "Phát triển công nghệ nuôi tôm, cá chất lượng cao.", salary: "12 - 35tr", tags: ["Water", "Aqua"] },
  { id: "20-2", block: "Nông nghiệp – Tài nguyên", category: "Thủy sản – Lâm nghiệp", name: "Quản lý rừng", description: "Bảo vệ và phát triển hệ sinh thái rừng bền vững.", salary: "10 - 25tr", tags: ["Forest", "Eco"] },
  { id: "20-3", block: "Nông nghiệp – Tài nguyên", category: "Thủy sản – Lâm nghiệp", name: "Chuyên viên bảo tồn", description: "Nghiên cứu và bảo vệ các loài động thực vật quý hiếm.", salary: "10 - 30tr", tags: ["Wildlife", "Protect"] },
];

const BLOCKS = [
  { id: "economic", title: "Kinh tế – Quản lý", icon: TrendingUp, color: "from-blue-500 to-amber-400", bg: "bg-blue-50" },
  { id: "tech", title: "Công nghệ – Kỹ thuật", icon: Cpu, color: "from-indigo-600 to-cyan-400", bg: "bg-indigo-50" },
  { id: "care", title: "Chăm sóc – Xã hội", icon: Heart, color: "from-rose-500 to-purple-500", bg: "bg-rose-50" },
  { id: "service", title: "Dịch vụ – Du lịch – Giải trí", icon: Palmtree, color: "from-orange-500 to-pink-500", bg: "bg-orange-50" },
  { id: "product", title: "Sản xuất – Công nghiệp", icon: Factory, color: "from-slate-600 to-slate-400", bg: "bg-slate-50" },
  { id: "law", title: "Pháp lý – Hành chính – Công", icon: Scale, color: "from-navy-800 to-amber-600", bg: "bg-gray-50" },
  { id: "agri", title: "Nông nghiệp – Tài nguyên", icon: Sprout, color: "from-green-600 to-emerald-400", bg: "bg-green-50" },
];

// --- COMPONENTS ---

interface CareerExplorationProps {
  hasTested?: boolean;
  mbtiResult?: string | null;
  onStartQuiz: () => void;
}

export default function CareerExploration({ hasTested, mbtiResult, onStartQuiz }: CareerExplorationProps) {
  const [activeBlockId, setActiveBlockId] = useState("economic");

  const currentBlock = useMemo(() => BLOCKS.find(b => b.id === activeBlockId)!, [activeBlockId]);

  const activeCategories = useMemo(() => {
    return Array.from(new Set(CAREER_DATA.filter(c => c.block === currentBlock.title).map(c => c.category)));
  }, [currentBlock]);

  const [activeCategory, setActiveCategory] = useState(activeCategories[0]);

  // Sync category when block changes
  useMemo(() => {
    setActiveCategory(activeCategories[0]);
  }, [activeCategories]);

  const filteredData = useMemo(() => {
    return CAREER_DATA.filter(c => {
      const matchBlock = c.block === currentBlock.title;
      const matchCat = c.category === activeCategory;
      return matchBlock && matchCat;
    });
  }, [currentBlock, activeCategory]);

  return (
    <div className="min-h-screen bg-[#FDF6EC] font-sans pb-24">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-primary/10 text-primary text-xs font-black uppercase tracking-widest">
            <Sparkles size={14} />
            Khám phá bản thân - Chạm tới tương lai
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-black text-[#8DB6A0] tracking-tighter leading-none">
            KHÁM PHÁ <br /> NGÀNH NGHỀ
          </h1>
          <p className="text-xl text-text-muted max-w-2xl font-medium">
            Tìm kiếm bến đỗ phù hợp với bản sắc riêng của bạn thông qua 7 khối ngành và 20 lĩnh vực chuyên sâu.
          </p>
          {hasTested && mbtiResult && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8DB6A0]/10 rounded-full border border-[#8DB6A0]/20 text-[#8DB6A0] text-sm font-bold mt-4">
              Nhóm tính cách của bạn: {mbtiResult}
            </div>
          )}
        </motion.div>
      </div>

      {/* MAIN TABS NAVIGATION (Compacted, Single Row) */}
      <div className="max-w-7xl mx-auto px-6 mb-0">
        <div className="flex gap-1.5 items-end justify-between bg-white/20 p-2 rounded-t-[40px] overflow-hidden">
          {BLOCKS.map((block) => (
            <button
              key={block.id}
              onClick={() => setActiveBlockId(block.id)}
              className={`relative flex-1 px-3 py-4 rounded-t-[24px] transition-all duration-500 group overflow-hidden ${activeBlockId === block.id
                ? "text-white shadow-lg translate-y-0"
                : "text-gray-400 bg-white/40 hover:bg-white/60 translate-y-1.5"
                }`}
            >
              {activeBlockId === block.id && (
                <motion.div
                  layoutId="active-block-bg"
                  className={`absolute inset-0 bg-gradient-to-br ${block.color}`}
                />
              )}
              <div className="relative flex flex-col items-center gap-1 z-10">
                <block.icon size={16} className={activeBlockId === block.id ? "text-white" : "text-gray-400"} />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-tight whitespace-nowrap">
                  {block.title.split(" – ")[0]}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* SUB-TABS (Bookmark Style) */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="relative">
          {/* Base line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />

          <div className="flex flex-wrap gap-2 px-6 pt-4 pb-0 bg-white/40 backdrop-blur-xl rounded-b-[40px] border-x border-b border-white/50 shadow-xl overflow-hidden">
            {activeCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-4 rounded-t-[2rem] font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 border-x border-t border-transparent ${activeCategory === cat
                  ? `bg-white text-gray-800 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.05)] border-gray-100 translate-y-0 z-10`
                  : "bg-gray-100/30 text-gray-400 hover:bg-white/50 translate-y-2 hover:translate-y-1"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RESULTS GRID */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8 px-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${currentBlock.color} flex items-center justify-center text-white shadow-lg`}>
              <currentBlock.icon size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-text-dark leading-none">{currentBlock.title}</h2>
              <p className="text-sm font-bold text-text-muted uppercase tracking-widest">
                {activeCategory === "All" ? "Toàn bộ lĩnh vực" : activeCategory}
              </p>
            </div>
          </div>
          <p className="text-sm font-black text-[#8DB6A0]">Tìm thấy {filteredData.length} kết quả</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeBlockId + activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredData.map((career, idx) => (
              <CareerCard key={career.id} career={career} color={currentBlock.color} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredData.length === 0 && (
          <div className="py-24 text-center bg-white/50 rounded-[50px] border-4 border-dashed border-gray-200">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-black text-gray-400">Không tìm thấy nghề nghiệp phù hợp</h3>
            <p className="text-gray-400 font-bold">Lĩnh vực này hiện chưa có dữ liệu cập nhật.</p>
          </div>
        )}
      </div>

      {/* CTA SECTION */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="relative rounded-[60px] overflow-hidden bg-white p-16 md:p-24 shadow-2xl border-4 border-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C1D8C3]/20 blur-3xl rounded-full" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="w-20 h-20 bg-[#C1D8C3] rounded-3xl flex items-center justify-center text-white shadow-xl rotate-3">
                <Zap size={40} />
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-black text-text-dark leading-tight tracking-tight">
                Vẫn còn đang <br />
                <span className="text-[#8DB6A0] italic">phân vân?</span>
              </h2>
              <p className="text-xl text-text-muted font-medium leading-relaxed">
                Đừng lo lắng, hành trình thấu hiểu bản thân luôn cần thời gian. Hãy để MBTI giúp bạn thu hẹp khoảng cách.
              </p>
              <button
                onClick={onStartQuiz}
                className="px-12 py-6 bg-primary text-white rounded-[30px] font-black text-lg shadow-2xl hover:bg-primary/90 hover:scale-105 transition-all flex items-center gap-4 group"
              >
                Làm MBTI Test ngay
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <StatCard label="600+" sub="Bản ghi nghề" icon={BookOpen} color="primary" />
                <StatCard label="150+" sub="Chuyên gia" icon={Users} color="secondary" />
              </div>
              <div className="space-y-6">
                <StatCard label="95%" sub="Độ chính xác" icon={Sparkles} color="accent" />
                <StatCard label="24/7" sub="Hỗ trợ" icon={Globe} color="cyan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CareerCardProps {
  career: Career;
  color: string;
  index: number;
  key?: any;
}

function CareerCard({ career, color, index }: CareerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group relative bg-white rounded-[40px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer"
    >
      {/* Background Decoration */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-700 blur-2xl`} />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <span className="px-4 py-1.5 bg-gray-50 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-widest border border-gray-100">
            {career.category}
          </span>
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white opacity-20 group-hover:opacity-100 transition-all duration-500 shadow-lg`}>
            <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
          </div>
        </div>

        <h3 className="text-2xl font-serif font-black text-text-dark mb-3 group-hover:text-[#8DB6A0] transition-colors line-clamp-2 leading-tight">
          {career.name}
        </h3>

        <p className="text-sm text-text-muted font-medium mb-6 line-clamp-3 flex-grow">
          {career.description}
        </p>

        <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Thu nhập ước tính</p>
            <p className="font-black text-lg text-green-600">💸 {career.salary}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {career.tags.map((tag, i) => (
              <div key={i} className="px-3 py-1 bg-gray-50 rounded-lg text-[10px] font-bold text-gray-400 border border-white">
                #{tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({ label, sub, icon: Icon, color }: { label: string, sub: string, icon: any, color: string }) {
  const colorClasses: Record<string, string> = {
    primary: "bg-primary text-white shadow-primary/20",
    secondary: "bg-secondary text-white shadow-secondary/20",
    accent: "bg-accent text-white shadow-accent/20",
    cyan: "bg-cyan-500 text-white shadow-cyan-500/20"
  };

  return (
    <div className="bg-white p-8 rounded-[35px] shadow-xl border border-gray-50 hover:scale-105 transition-transform">
      <div className={`w-12 h-12 rounded-2xl ${colorClasses[color]} flex items-center justify-center mb-4 shadow-lg`}>
        <Icon size={24} />
      </div>
      <p className="text-2xl font-black text-text-dark leading-none mb-1">{label}</p>
      <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{sub}</p>
    </div>
  );
}
