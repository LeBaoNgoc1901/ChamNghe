export interface Option {
  label: string;
  value: 'A' | 'B' | 'C' | 'D';
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  category: 'EI' | 'SN' | 'TF' | 'JP';
  categoryName: string;
}

export const MBTI_QUESTIONS: Question[] = [
  {
    //# CHẶNG 1 (Câu 1–20)
    id: 1,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Khi làm việc nhóm, bạn thường:',
    options: [
      { label: 'Chủ động điều hành và phân công rõ ràng', value: 'A' },
      { label: 'Đưa ra ý kiến định hướng', value: 'B' },
      { label: 'Làm tốt phần việc được giao', value: 'C' },
      { label: 'Im lặng làm việc một mình', value: 'D' }
    ]
  },
  {
    id: 2,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Khi có mâu thuẫn, bạn:',
    options: [
      { label: 'Đối mặt và giải quyết ngay', value: 'A' },
      { label: 'Thảo luận nhẹ nhàng', value: 'B' },
      { label: 'Né tránh nếu có thể', value: 'C' },
      { label: 'Im lặng và giữ trong lòng', value: 'D' }
    ]
  },
  {
    id: 3,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Bạn cảm thấy tràn đầy năng lượng khi:',
    options: [
      { label: 'Ở nơi đông người', value: 'A' },
      { label: 'Trò chuyện cùng nhóm nhỏ', value: 'B' },
      { label: 'Ở cạnh vài người thân', value: 'C' },
      { label: 'Ở một mình', value: 'D' }
    ]
  },
  {
    id: 4,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Khi quyết định điều quan trọng, bạn dựa vào:',
    options: [
      { label: 'Logic và dữ kiện', value: 'A' },
      { label: 'Phân tích tương đối kỹ', value: 'B' },
      { label: 'Cảm nhận cá nhân', value: 'C' },
      { label: 'Cảm xúc là chính', value: 'D' }
    ]
  },
  {
    id: 5,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Lịch trình lý tưởng của bạn:',
    options: [
      { label: 'Rõ ràng, chi tiết từng bước', value: 'A' },
      { label: 'Có kế hoạch cơ bản', value: 'B' },
      { label: 'Linh hoạt vừa phải', value: 'C' },
      { label: 'Tự do hoàn toàn', value: 'D' }
    ]
  },
  {
    id: 6,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Khi học điều mới, bạn thích:',
    options: [
      { label: 'Học qua thực hành ngay', value: 'A' },
      { label: 'Vừa học vừa thử', value: 'B' },
      { label: 'Đọc hiểu trước', value: 'C' },
      { label: 'Suy nghĩ thật kỹ rồi mới làm', value: 'D' }
    ]
  },
  {
    id: 7,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Bạn thường được nhận xét là:',
    options: [
      { label: 'Quyết đoán', value: 'A' },
      { label: 'Thẳng thắn', value: 'B' },
      { label: 'Nhẹ nhàng', value: 'C' },
      { label: 'Nhạy cảm', value: 'D' }
    ]
  },
  {
    id: 8,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Trong một buổi tiệc, bạn:',
    options: [
      { label: 'Bắt chuyện với nhiều người', value: 'A' },
      { label: 'Trò chuyện khi có cơ hội', value: 'B' },
      { label: 'Nói chuyện với người quen', value: 'C' },
      { label: 'Ngồi quan sát', value: 'D' }
    ]
  },
  {
    id: 9,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Khi gặp vấn đề khó, bạn:',
    options: [
      { label: 'Lập kế hoạch giải quyết ngay', value: 'A' },
      { label: 'Tìm lời khuyên', value: 'B' },
      { label: 'Suy nghĩ một mình', value: 'C' },
      { label: 'Chờ thời gian trôi qua', value: 'D' }
    ]
  },
  {
    id: 10,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Bạn tin tưởng vào:',
    options: [
      { label: 'Sự thật cụ thể', value: 'A' },
      { label: 'Kinh nghiệm thực tế', value: 'B' },
      { label: 'Trực giác', value: 'C' },
      { label: 'Linh cảm mạnh mẽ', value: 'D' }
    ]
  },
  {
    id: 11,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Bạn thích công việc:',
    options: [
      { label: 'Có mục tiêu rõ ràng', value: 'A' },
      { label: 'Có định hướng', value: 'B' },
      { label: 'Có sáng tạo', value: 'C' },
      { label: 'Hoàn toàn tự do', value: 'D' }
    ]
  },
  {
    id: 12,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Khi bị phê bình, bạn:',
    options: [
      { label: 'Phản biện lại', value: 'A' },
      { label: 'Giải thích quan điểm', value: 'B' },
      { label: 'Lắng nghe', value: 'C' },
      { label: 'Buồn và suy nghĩ lâu', value: 'D' }
    ]
  },
  {
    id: 13,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Trong lớp học, bạn thường:',
    options: [
      { label: 'Phát biểu nhiều', value: 'A' },
      { label: 'Phát biểu khi chắc chắn', value: 'B' },
      { label: 'Ít nói', value: 'C' },
      { label: 'Gần như không nói', value: 'D' }
    ]
  },
  {
    id: 14,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Khi lên kế hoạch du lịch, bạn:',
    options: [
      { label: 'Chuẩn bị kỹ từng chi tiết', value: 'A' },
      { label: 'Tìm hiểu trước cơ bản', value: 'B' },
      { label: 'Để tùy tình hình', value: 'C' },
      { label: 'Đi đến đâu hay đến đó', value: 'D' }
    ]
  },
  {
    id: 15,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Bạn đánh giá cao:',
    options: [
      { label: 'Hiệu quả', value: 'A' },
      { label: 'Kết quả', value: 'B' },
      { label: 'Sự hòa hợp', value: 'C' },
      { label: 'Cảm xúc', value: 'D' }
    ]
  },
  {
    id: 16,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Khi làm việc, bạn:',
    options: [
      { label: 'Tập trung cao độ', value: 'A' },
      { label: 'Làm theo tiến độ', value: 'B' },
      { label: 'Làm khi có cảm hứng', value: 'C' },
      { label: 'Làm tùy tâm trạng', value: 'D' }
    ]
  },
  {
    id: 17,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Bạn thích môi trường:',
    options: [
      { label: 'Cạnh tranh', value: 'A' },
      { label: 'Có mục tiêu chung', value: 'B' },
      { label: 'Thân thiện', value: 'C' },
      { label: 'Yên tĩnh', value: 'D' }
    ]
  },
  {
    id: 18,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Khi có thay đổi đột ngột:',
    options: [
      { label: 'Thích nghi nhanh', value: 'A' },
      { label: 'Điều chỉnh dần', value: 'B' },
      { label: 'Hơi lo lắng', value: 'C' },
      { label: 'Cảm thấy áp lực', value: 'D' }
    ]
  },
  {
    id: 19,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Bạn thường nhớ:',
    options: [
      { label: 'Con số và dữ kiện', value: 'A' },
      { label: 'Thông tin quan trọng', value: 'B' },
      { label: 'Ấn tượng chung', value: 'C' },
      { label: 'Cảm xúc lúc đó', value: 'D' }
    ]
  },
  {
    id: 20,
    category: 'EI',
    categoryName: 'Chặng 1',
    text: 'Khi hoàn thành nhiệm vụ:',
    options: [
      { label: 'Kiểm tra kỹ lưỡng', value: 'A' },
      { label: 'Soát lại cơ bản', value: 'B' },
      { label: 'Tin vào trực giác', value: 'C' },
      { label: 'Ít khi kiểm tra lại', value: 'D' }
    ]
  },
  //# CHẶNG 2 (Câu 21–40)
  {
    id: 21,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Khi có cơ hội mới, bạn:',
    options: [
      { label: 'Nắm bắt ngay', value: 'A' },
      { label: 'Cân nhắc nhanh', value: 'B' },
      { label: 'Suy nghĩ kỹ', value: 'C' },
      { label: 'Do dự lâu', value: 'D' }
    ]
  },
  {
    id: 22,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Bạn thích thảo luận về:',
    options: [
      { label: 'Sự kiện thực tế', value: 'A' },
      { label: 'Vấn đề hiện tại', value: 'B' },
      { label: 'Ý tưởng tương lai', value: 'C' },
      { label: 'Triết lý sâu xa', value: 'D' }
    ]
  },
  {
    id: 23,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Khi bị áp lực, bạn:',
    options: [
      { label: 'Tăng tốc làm việc', value: 'A' },
      { label: 'Cố gắng hoàn thành', value: 'B' },
      { label: 'Giảm nhịp độ', value: 'C' },
      { label: 'Tránh né', value: 'D' }
    ]
  },
  {
    id: 24,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Trong tranh luận, bạn:',
    options: [
      { label: 'Bảo vệ quan điểm mạnh mẽ', value: 'A' },
      { label: 'Lý giải bình tĩnh', value: 'B' },
      { label: 'Nhượng bộ nếu cần', value: 'C' },
      { label: 'Im lặng', value: 'D' }
    ]
  },
  {
    id: 25,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Bạn thấy mình là người:',
    options: [
      { label: 'Thực tế', value: 'A' },
      { label: 'Có tổ chức', value: 'B' },
      { label: 'Mơ mộng', value: 'C' },
      { label: 'Giàu tưởng tượng', value: 'D' }
    ]
  },
  {
    id: 26,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Khi được giao nhiệm vụ mới:',
    options: [
      { label: 'Làm ngay', value: 'A' },
      { label: 'Hỏi rõ yêu cầu', value: 'B' },
      { label: 'Quan sát trước', value: 'C' },
      { label: 'Chần chừ', value: 'D' }
    ]
  },
  {
    id: 27,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Bạn thường ra quyết định:',
    options: [
      { label: 'Nhanh chóng', value: 'A' },
      { label: 'Tương đối nhanh', value: 'B' },
      { label: 'Chậm rãi', value: 'C' },
      { label: 'Rất lâu', value: 'D' }
    ]
  },
  {
    id: 28,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Khi làm việc nhóm:',
    options: [
      { label: 'Dẫn dắt', value: 'A' },
      { label: 'Hỗ trợ tích cực', value: 'B' },
      { label: 'Làm tròn vai', value: 'C' },
      { label: 'Tách biệt', value: 'D' }
    ]
  },
  {
    id: 29,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Bạn cảm thấy thoải mái khi:',
    options: [
      { label: 'Lãnh đạo người khác', value: 'A' },
      { label: 'Điều phối công việc', value: 'B' },
      { label: 'Hợp tác', value: 'C' },
      { label: 'Làm độc lập', value: 'D' }
    ]
  },
  {
    id: 30,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Bạn thích kế hoạch:',
    options: [
      { label: 'Cố định', value: 'A' },
      { label: 'Có khung sẵn', value: 'B' },
      { label: 'Linh hoạt', value: 'C' },
      { label: 'Không kế hoạch', value: 'D' }
    ]
  },
  {
    id: 31,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Khi ai đó buồn, bạn:',
    options: [
      { label: 'Đưa lời khuyên thẳng thắn', value: 'A' },
      { label: 'Phân tích giúp họ', value: 'B' },
      { label: 'Lắng nghe', value: 'C' },
      { label: 'Đồng cảm sâu sắc', value: 'D' }
    ]
  },
  {
    id: 32,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Bạn ưu tiên:',
    options: [
      { label: 'Hiệu suất', value: 'A' },
      { label: 'Tốc độ', value: 'B' },
      { label: 'Chất lượng cảm xúc', value: 'C' },
      { label: 'Sự hài hòa', value: 'D' }
    ]
  },
  {
    id: 33,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Khi học, bạn:',
    options: [
      { label: 'Làm bài tập nhiều', value: 'A' },
      { label: 'Ôn tập có hệ thống', value: 'B' },
      { label: 'Suy ngẫm', value: 'C' },
      { label: 'Học theo cảm hứng', value: 'D' }
    ]
  },
  {
    id: 34,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Bạn thường chú ý đến:',
    options: [
      { label: 'Chi tiết cụ thể', value: 'A' },
      { label: 'Thông tin quan trọng', value: 'B' },
      { label: 'Ý nghĩa sâu xa', value: 'C' },
      { label: 'Khả năng tiềm ẩn', value: 'D' }
    ]
  },
  {
    id: 35,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Trong thời gian rảnh, bạn:',
    options: [
      { label: 'Tham gia hoạt động', value: 'A' },
      { label: 'Gặp gỡ bạn bè', value: 'B' },
      { label: 'Đọc hoặc xem một mình', value: 'C' },
      { label: 'Ở yên suy nghĩ', value: 'D' }
    ]
  },
  {
    id: 36,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Khi bị chỉ trích, bạn:',
    options: [
      { label: 'Sửa ngay', value: 'A' },
      { label: 'Điều chỉnh dần', value: 'B' },
      { label: 'Buồn nhưng tiếp thu', value: 'C' },
      { label: 'Tự trách mình', value: 'D' }
    ]
  },
  {
    id: 37,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Bạn tin rằng thành công đến từ:',
    options: [
      { label: 'Nỗ lực rõ ràng', value: 'A' },
      { label: 'Kế hoạch tốt', value: 'B' },
      { label: 'Đam mê', value: 'C' },
      { label: 'Cảm hứng', value: 'D' }
    ]
  },
  {
    id: 38,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Khi giải quyết vấn đề, bạn:',
    options: [
      { label: 'Theo quy trình', value: 'A' },
      { label: 'Theo kinh nghiệm', value: 'B' },
      { label: 'Theo linh cảm', value: 'C' },
      { label: 'Theo cảm xúc', value: 'D' }
    ]
  },
  {
    id: 39,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Bạn thích môi trường làm việc:',
    options: [
      { label: 'Cạnh tranh cao', value: 'A' },
      { label: 'Có mục tiêu', value: 'B' },
      { label: 'Sáng tạo', value: 'C' },
      { label: 'Yên bình', value: 'D' }
    ]
  },
  {
    id: 40,
    category: 'SN',
    categoryName: 'Chặng 2',
    text: 'Bạn thường nghĩ về:',
    options: [
      { label: 'Hiện tại', value: 'A' },
      { label: 'Gần tương lai', value: 'B' },
      { label: 'Tương lai xa', value: 'C' },
      { label: 'Những khả năng chưa rõ', value: 'D' }
    ]
  },
  //# CHẶNG 3 (Câu 41–60)
  {
    id: 41,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Khi nhận nhiệm vụ khó, bạn:',
    options: [
      { label: 'Hào hứng thử sức ngay', value: 'A' },
      { label: 'Sẵn sàng nhận thử thách', value: 'B' },
      { label: 'Cân nhắc khả năng bản thân', value: 'C' },
      { label: 'Lo lắng và chần chừ', value: 'D' }
    ]
  },
  {
    id: 42,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Khi học kỹ năng mới, bạn:',
    options: [
      { label: 'Thích thực hành trực tiếp', value: 'A' },
      { label: 'Làm theo hướng dẫn mẫu', value: 'B' },
      { label: 'Quan sát người khác trước', value: 'C' },
      { label: 'Tự suy nghĩ cách riêng', value: 'D' }
    ]
  },
  {
    id: 43,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Bạn thường đưa ra quyết định dựa trên:',
    options: [
      { label: 'Số liệu rõ ràng', value: 'A' },
      { label: 'Kinh nghiệm trước đây', value: 'B' },
      { label: 'Cảm nhận cá nhân', value: 'C' },
      { label: 'Linh cảm mạnh mẽ', value: 'D' }
    ]
  },
  {
    id: 44,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Trong một nhóm mới, bạn:',
    options: [
      { label: 'Chủ động làm quen mọi người', value: 'A' },
      { label: 'Bắt chuyện khi có cơ hội', value: 'B' },
      { label: 'Chờ người khác bắt chuyện', value: 'C' },
      { label: 'Giữ khoảng cách', value: 'D' }
    ]
  },
  {
    id: 45,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Khi có thay đổi kế hoạch phút chót, bạn:',
    options: [
      { label: 'Điều chỉnh ngay không do dự', value: 'A' },
      { label: 'Hơi khó chịu nhưng thích nghi', value: 'B' },
      { label: 'Cảm thấy bất an', value: 'C' },
      { label: 'Muốn giữ nguyên kế hoạch cũ', value: 'D' }
    ]
  },
  {
    id: 46,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Bạn thích được đánh giá là:',
    options: [
      { label: 'Hiệu quả và quyết đoán', value: 'A' },
      { label: 'Đáng tin cậy', value: 'B' },
      { label: 'Tinh tế', value: 'C' },
      { label: 'Nhạy cảm và sâu sắc', value: 'D' }
    ]
  },
  {
    id: 47,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Khi làm việc lâu dài, bạn:',
    options: [
      { label: 'Theo sát tiến độ từng ngày', value: 'A' },
      { label: 'Kiểm tra định kỳ', value: 'B' },
      { label: 'Làm theo cảm hứng từng giai đoạn', value: 'C' },
      { label: 'Để mọi thứ diễn ra tự nhiên', value: 'D' }
    ]
  },
  {
    id: 48,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Khi người khác mắc lỗi, bạn:',
    options: [
      { label: 'Góp ý thẳng thắn', value: 'A' },
      { label: 'Nhắc nhở nhẹ nhàng', value: 'B' },
      { label: 'Bỏ qua nếu không nghiêm trọng', value: 'C' },
      { label: 'Ngại góp ý', value: 'D' }
    ]
  },
  {
    id: 49,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Bạn thường tập trung vào:',
    options: [
      { label: 'Kết quả cuối cùng', value: 'A' },
      { label: 'Quá trình thực hiện', value: 'B' },
      { label: 'Trải nghiệm cảm xúc', value: 'C' },
      { label: 'Ý nghĩa sâu xa', value: 'D' }
    ]
  },
  {
    id: 50,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Khi tham gia hoạt động tập thể, bạn:',
    options: [
      { label: 'Muốn giữ vai trò chính', value: 'A' },
      { label: 'Sẵn sàng hỗ trợ', value: 'B' },
      { label: 'Làm theo phân công', value: 'C' },
      { label: 'Ít tham gia', value: 'D' }
    ]
  },
  {
    id: 51,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Bạn thích công việc:',
    options: [
      { label: 'Có quy trình rõ ràng', value: 'A' },
      { label: 'Có mục tiêu cụ thể', value: 'B' },
      { label: 'Có yếu tố sáng tạo', value: 'C' },
      { label: 'Hoàn toàn tự do ý tưởng', value: 'D' }
    ]
  },
  {
    id: 52,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Khi tranh luận, bạn ưu tiên:',
    options: [
      { label: 'Lập luận logic', value: 'A' },
      { label: 'Dẫn chứng thực tế', value: 'B' },
      { label: 'Sự thấu hiểu', value: 'C' },
      { label: 'Tránh gây tổn thương', value: 'D' }
    ]
  },
  {
    id: 53,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Khi nhớ lại một sự kiện, bạn nhớ rõ:',
    options: [
      { label: 'Diễn biến cụ thể', value: 'A' },
      { label: 'Những điểm chính', value: 'B' },
      { label: 'Cảm giác lúc đó', value: 'C' },
      { label: 'Ý nghĩa của nó', value: 'D' }
    ]
  },
  {
    id: 54,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Khi bắt đầu dự án mới, bạn:',
    options: [
      { label: 'Lên kế hoạch chi tiết', value: 'A' },
      { label: 'Phác thảo các bước chính', value: 'B' },
      { label: 'Bắt tay làm rồi điều chỉnh', value: 'C' },
      { label: 'Chờ cảm hứng đến', value: 'D' }
    ]
  },
  {
    id: 55,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Bạn cảm thấy thoải mái hơn khi:',
    options: [
      { label: 'Có quyền quyết định', value: 'A' },
      { label: 'Được giao trách nhiệm', value: 'B' },
      { label: 'Là thành viên trong nhóm', value: 'C' },
      { label: 'Làm việc một mình', value: 'D' }
    ]
  },
  {
    id: 56,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Khi nghe tin xấu, bạn:',
    options: [
      { label: 'Bình tĩnh xử lý', value: 'A' },
      { label: 'Suy nghĩ giải pháp', value: 'B' },
      { label: 'Buồn nhưng cố gắng ổn định', value: 'C' },
      { label: 'Dễ bị ảnh hưởng lâu', value: 'D' }
    ]
  },
  {
    id: 57,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Bạn thích học theo cách:',
    options: [
      { label: 'Thực hành liên tục', value: 'A' },
      { label: 'Có giáo trình rõ ràng', value: 'B' },
      { label: 'Tự tìm hiểu thêm', value: 'C' },
      { label: 'Học theo cảm xúc', value: 'D' }
    ]
  },
  {
    id: 58,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Trong công việc, bạn coi trọng:',
    options: [
      { label: 'Tính chính xác', value: 'A' },
      { label: 'Tính hiệu quả', value: 'B' },
      { label: 'Sự sáng tạo', value: 'C' },
      { label: 'Sự hòa hợp', value: 'D' }
    ]
  },
  {
    id: 59,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Khi có cơ hội lãnh đạo, bạn:',
    options: [
      { label: 'Rất muốn thử', value: 'A' },
      { label: 'Sẵn sàng nếu cần', value: 'B' },
      { label: 'Chỉ nhận khi không ai làm', value: 'C' },
      { label: 'Tránh vai trò đó', value: 'D' }
    ]
  },
  {
    id: 60,
    category: 'TF',
    categoryName: 'Chặng 3',
    text: 'Bạn thường suy nghĩ nhiều về:',
    options: [
      { label: 'Những việc cần làm', value: 'A' },
      { label: 'Kế hoạch sắp tới', value: 'B' },
      { label: 'Ý tưởng mới', value: 'C' },
      { label: 'Những điều chưa rõ ràng', value: 'D' }
    ]
  },
  // # CHẶNG 4 (Câu 61–80)
  {
    id: 61,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Khi phải quyết định nhanh, bạn:',
    options: [
      { label: 'Tin vào lý trí', value: 'A' },
      { label: 'Dựa trên kinh nghiệm', value: 'B' },
      { label: 'Tin vào cảm nhận', value: 'C' },
      { label: 'Làm theo linh cảm', value: 'D' }
    ]
  },
  {
    id: 62,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Khi tham gia cuộc họp, bạn:',
    options: [
      { label: 'Phát biểu thường xuyên', value: 'A' },
      { label: 'Nói khi cần thiết', value: 'B' },
      { label: 'Lắng nghe nhiều hơn', value: 'C' },
      { label: 'Gần như không nói', value: 'D' }
    ]
  },
  {
    id: 63,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Khi làm việc dài hạn, bạn:',
    options: [
      { label: 'Theo đúng kế hoạch ban đầu', value: 'A' },
      { label: 'Điều chỉnh vừa phải', value: 'B' },
      { label: 'Thay đổi khi thấy cần', value: 'C' },
      { label: 'Làm tùy hoàn cảnh', value: 'D' }
    ]
  },
  {
    id: 64,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Bạn thấy mình là người:',
    options: [
      { label: 'Quyết liệt', value: 'A' },
      { label: 'Thực tế', value: 'B' },
      { label: 'Nhẹ nhàng', value: 'C' },
      { label: 'Mơ mộng', value: 'D' }
    ]
  },
  {
    id: 65,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Khi giải quyết mâu thuẫn, bạn:',
    options: [
      { label: 'Trực tiếp nói rõ vấn đề', value: 'A' },
      { label: 'Thỏa thuận hợp lý', value: 'B' },
      { label: 'Nhường nhịn', value: 'C' },
      { label: 'Tránh đối đầu', value: 'D' }
    ]
  },
  {
    id: 66,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Khi bắt đầu ngày mới, bạn:',
    options: [
      { label: 'Lập danh sách việc làm', value: 'A' },
      { label: 'Có ý định sơ bộ', value: 'B' },
      { label: 'Làm theo tình hình', value: 'C' },
      { label: 'Không kế hoạch', value: 'D' }
    ]
  },
  {
    id: 67,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Bạn thường cảm thấy hài lòng khi:',
    options: [
      { label: 'Hoàn thành mục tiêu', value: 'A' },
      { label: 'Làm tốt nhiệm vụ', value: 'B' },
      { label: 'Giúp người khác vui', value: 'C' },
      { label: 'Được ở trong không gian riêng', value: 'D' }
    ]
  },
  {
    id: 68,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Khi nghe một ý tưởng mới, bạn:',
    options: [
      { label: 'Phân tích tính khả thi', value: 'A' },
      { label: 'Xem xét thực tế', value: 'B' },
      { label: 'Tưởng tượng khả năng', value: 'C' },
      { label: 'Bị cuốn theo cảm xúc', value: 'D' }
    ]
  },
  {
    id: 69,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Bạn thích môi trường học tập:',
    options: [
      { label: 'Kỷ luật', value: 'A' },
      { label: 'Có định hướng', value: 'B' },
      { label: 'Sáng tạo', value: 'C' },
      { label: 'Tự do', value: 'D' }
    ]
  },
  {
    id: 70,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Khi gặp người lạ, bạn:',
    options: [
      { label: 'Bắt chuyện ngay', value: 'A' },
      { label: 'Chào hỏi lịch sự', value: 'B' },
      { label: 'Chờ họ mở lời', value: 'C' },
      { label: 'Tránh giao tiếp', value: 'D' }
    ]
  },
  {
    id: 71,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Khi gặp thất bại, bạn:',
    options: [
      { label: 'Rút kinh nghiệm và làm lại ngay', value: 'A' },
      { label: 'Điều chỉnh chiến lược', value: 'B' },
      { label: 'Cần thời gian suy nghĩ', value: 'C' },
      { label: 'Dễ nản lòng', value: 'D' }
    ]
  },
  {
    id: 72,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Bạn thường đưa ra lời khuyên dựa trên:',
    options: [
      { label: 'Phân tích logic', value: 'A' },
      { label: 'Kinh nghiệm cá nhân', value: 'B' },
      { label: 'Sự thấu cảm', value: 'C' },
      { label: 'Cảm xúc', value: 'D' }
    ]
  },
  {
    id: 73,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Khi phải làm nhiều việc cùng lúc, bạn:',
    options: [
      { label: 'Sắp xếp thứ tự rõ ràng', value: 'A' },
      { label: 'Ưu tiên việc quan trọng', value: 'B' },
      { label: 'Làm theo cảm hứng', value: 'C' },
      { label: 'Dễ bị quá tải', value: 'D' }
    ]
  },
  {
    id: 74,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Bạn đánh giá cao ở người khác:',
    options: [
      { label: 'Năng lực', value: 'A' },
      { label: 'Trách nhiệm', value: 'B' },
      { label: 'Sự tinh tế', value: 'C' },
      { label: 'Lòng nhân hậu', value: 'D' }
    ]
  },
  {
    id: 75,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Khi đọc sách, bạn thích:',
    options: [
      { label: 'Nội dung thực tế', value: 'A' },
      { label: 'Kiến thức hữu ích', value: 'B' },
      { label: 'Ý tưởng sáng tạo', value: 'C' },
      { label: 'Câu chuyện cảm xúc', value: 'D' }
    ]
  },
  {
    id: 76,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Khi được khen, bạn:',
    options: [
      { label: 'Xem đó là động lực', value: 'A' },
      { label: 'Vui và cố gắng hơn', value: 'B' },
      { label: 'Ngại ngùng', value: 'C' },
      { label: 'Không quen với lời khen', value: 'D' }
    ]
  },
  {
    id: 77,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Khi tham gia hoạt động ngoại khóa, bạn:',
    options: [
      { label: 'Đứng ra tổ chức', value: 'A' },
      { label: 'Hỗ trợ điều phối', value: 'B' },
      { label: 'Tham gia vừa phải', value: 'C' },
      { label: 'Ít tham gia', value: 'D' }
    ]
  },
  {
    id: 78,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Khi phải chọn giữa lý trí và cảm xúc, bạn:',
    options: [
      { label: 'Luôn chọn lý trí', value: 'A' },
      { label: 'Thường nghiêng về lý trí', value: 'B' },
      { label: 'Thường nghiêng về cảm xúc', value: 'C' },
      { label: 'Luôn chọn cảm xúc', value: 'D' }
    ]
  },
  {
    id: 79,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Bạn thường suy nghĩ về tương lai theo cách:',
    options: [
      { label: 'Lập kế hoạch cụ thể', value: 'A' },
      { label: 'Dự định rõ ràng', value: 'B' },
      { label: 'Hình dung chung', value: 'C' },
      { label: 'Mơ mộng nhiều khả năng', value: 'D' }
    ]
  },
  {
    id: 80,
    category: 'SN',
    categoryName: 'Chặng 3',
    text: 'Khi hoàn thành một chặng đường dài, bạn:',
    options: [
      { label: 'Đánh giá lại kết quả', value: 'A' },
      { label: 'Xem mình đã học được gì', value: 'B' },
      { label: 'Cảm nhận hành trình', value: 'C' },
      { label: 'Chìm vào cảm xúc của trải nghiệm', value: 'D' }
    ]
  }
];