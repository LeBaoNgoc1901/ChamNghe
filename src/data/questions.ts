export interface Option {
  label: string;
  value: 'A' | 'B';
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  category: 'EI' | 'SN' | 'TF' | 'JP';
  categoryName: string;
}

export const MBTI_QUESTIONS: Question[] = [
  // CHẶNG 1: TRẠM SẠC (E-I) - 10 câu
  {
    id: 1,
    category: 'EI',
    categoryName: 'Trạm sạc',
    text: 'Sau một tuần làm việc căng thẳng, bạn thường chọn cách nào để "sạc" lại năng lượng?',
    options: [
      { label: 'Đi chơi cùng bạn bè, tham gia các buổi tiệc sôi động.', value: 'A' },
      { label: 'Ở nhà đọc sách, xem phim hoặc làm những việc cá nhân một mình.', value: 'B' }
    ]
  },
  {
    id: 2,
    category: 'EI',
    categoryName: 'Trạm sạc',
    text: 'Trong một buổi tiệc, bạn thường là người:',
    options: [
      { label: 'Chủ động bắt chuyện với nhiều người, kể cả người lạ.', value: 'A' },
      { label: 'Chỉ trò chuyện với những người bạn đã quen biết từ trước.', value: 'B' }
    ]
  },
  {
    id: 3,
    category: 'EI',
    categoryName: 'Trạm sạc',
    text: 'Khi đối mặt với một vấn đề khó khăn, bạn thích:',
    options: [
      { label: 'Thảo luận ngay lập tức với người khác để tìm giải pháp.', value: 'A' },
      { label: 'Tự mình suy nghĩ thấu đáo trước khi chia sẻ với ai đó.', value: 'B' }
    ]
  },
  {
    id: 4,
    category: 'EI',
    categoryName: 'Trạm sạc',
    text: 'Bạn cảm thấy thoải mái nhất khi:',
    options: [
      { label: 'Được làm việc trong một môi trường mở, náo nhiệt.', value: 'A' },
      { label: 'Được làm việc trong không gian yên tĩnh, riêng tư.', value: 'B' }
    ]
  },
  {
    id: 5,
    category: 'EI',
    categoryName: 'Trạm sạc',
    text: 'Cách bạn kết bạn thường là:',
    options: [
      { label: 'Có rất nhiều bạn bè xã giao và dễ dàng làm quen người mới.', value: 'A' },
      { label: 'Có ít bạn nhưng mối quan hệ rất sâu sắc và bền chặt.', value: 'B' }
    ]
  },
  {
    id: 6,
    category: 'EI',
    categoryName: 'Trạm sạc',
    text: 'Sau khi tham gia một sự kiện đông người, bạn cảm thấy:',
    options: [
      { label: 'Hào hứng và tràn đầy năng lượng hơn.', value: 'A' },
      { label: 'Mệt mỏi và cần thời gian yên tĩnh để hồi phục.', value: 'B' }
    ]
  },
  {
    id: 7,
    category: 'EI',
    categoryName: 'Trạm sạc',
    text: 'Khi bắt đầu một công việc mới, bạn thường:',
    options: [
      { label: 'Hành động ngay và học hỏi thông qua trải nghiệm thực tế.', value: 'A' },
      { label: 'Quan sát kỹ lưỡng và lập kế hoạch trước khi bắt tay vào làm.', value: 'B' }
    ]
  },
  {
    id: 8,
    category: 'EI',
    categoryName: 'Trạm sạc',
    text: 'Bạn thích kiểu giao tiếp nào hơn?',
    options: [
      { label: 'Nói chuyện trực tiếp hoặc gọi điện thoại.', value: 'A' },
      { label: 'Nhắn tin hoặc gửi email để có thời gian trau chuốt câu chữ.', value: 'B' }
    ]
  },
  {
    id: 9,
    category: 'EI',
    categoryName: 'Trạm sạc',
    text: 'Mọi người thường nhận xét bạn là người:',
    options: [
      { label: 'Cởi mở, dễ gần và tràn đầy sức sống.', value: 'A' },
      { label: 'Kín đáo, điềm đạm và biết lắng nghe.', value: 'B' }
    ]
  },
  {
    id: 10,
    category: 'EI',
    categoryName: 'Trạm sạc',
    text: 'Trong các cuộc thảo luận nhóm, bạn thường:',
    options: [
      { label: 'Phát biểu ý kiến ngay khi suy nghĩ vừa lóe lên.', value: 'A' },
      { label: 'Lắng nghe ý kiến của mọi người rồi mới đưa ra nhận xét cuối cùng.', value: 'B' }
    ]
  },

  // CHẶNG 2: ỐNG KÍNH (S-N) - 10 câu
  {
    id: 11,
    category: 'SN',
    categoryName: 'Ống kính',
    text: 'Khi tiếp nhận thông tin mới, bạn quan tâm đến điều gì hơn?',
    options: [
      { label: 'Những chi tiết cụ thể, số liệu và thực tế hiện tại.', value: 'A' },
      { label: 'Những ý tưởng tổng quát, tiềm năng và ý nghĩa sâu xa.', value: 'B' }
    ]
  },
  {
    id: 12,
    category: 'SN',
    categoryName: 'Ống kính',
    text: 'Bạn tin tưởng vào điều gì hơn?',
    options: [
      { label: 'Kinh nghiệm thực tế và những gì mắt thấy tai nghe.', value: 'A' },
      { label: 'Trực giác và những linh cảm về tương lai.', value: 'B' }
    ]
  },
  {
    id: 13,
    category: 'SN',
    categoryName: 'Ống kính',
    text: 'Khi giải quyết một vấn đề, bạn thích sử dụng:',
    options: [
      { label: 'Những phương pháp đã được chứng minh là hiệu quả.', value: 'A' },
      { label: 'Những cách tiếp cận mới lạ và sáng tạo.', value: 'B' }
    ]
  },
  {
    id: 14,
    category: 'SN',
    categoryName: 'Ống kính',
    text: 'Mọi người thường nói bạn là người:',
    options: [
      { label: 'Thực tế và có đầu óc thực tiễn.', value: 'A' },
      { label: 'Giàu trí tưởng tượng và hay mơ mộng.', value: 'B' }
    ]
  },
  {
    id: 15,
    category: 'SN',
    categoryName: 'Ống kính',
    text: 'Khi đọc một cuốn sách, bạn chú ý đến:',
    options: [
      { label: 'Cốt truyện rõ ràng và các chi tiết miêu tả cụ thể.', value: 'A' },
      { label: 'Những ẩn dụ, biểu tượng và thông điệp của tác giả.', value: 'B' }
    ]
  },
  {
    id: 16,
    category: 'SN',
    categoryName: 'Ống kính',
    text: 'Bạn thích làm việc với:',
    options: [
      { label: 'Sự thật và những con số chính xác.', value: 'A' },
      { label: 'Các lý thuyết và mô hình trừu tượng.', value: 'B' }
    ]
  },
  {
    id: 17,
    category: 'SN',
    categoryName: 'Ống kính',
    text: 'Khi mô tả một sự kiện, bạn thường:',
    options: [
      { label: 'Kể lại chính xác những gì đã xảy ra theo trình tự.', value: 'A' },
      { label: 'Tập trung vào cảm nhận và những liên tưởng của mình.', value: 'B' }
    ]
  },
  {
    id: 18,
    category: 'SN',
    categoryName: 'Ống kính',
    text: 'Bạn cảm thấy khó chịu hơn với:',
    options: [
      { label: 'Những ý tưởng viển vông, thiếu thực tế.', value: 'A' },
      { label: 'Những công việc lặp đi lặp lại, thiếu sự đổi mới.', value: 'B' }
    ]
  },
  {
    id: 19,
    category: 'SN',
    categoryName: 'Ống kính',
    text: 'Trong học tập, bạn thích:',
    options: [
      { label: 'Học những kỹ năng có thể áp dụng ngay vào cuộc sống.', value: 'A' },
      { label: 'Học những khái niệm mới mẻ để mở rộng tư duy.', value: 'B' }
    ]
  },
  {
    id: 20,
    category: 'SN',
    categoryName: 'Ống kính',
    text: 'Bạn thường sống cho:',
    options: [
      { label: 'Hiện tại, tận hưởng những gì đang có.', value: 'A' },
      { label: 'Tương lai, chuẩn bị cho những gì sắp tới.', value: 'B' }
    ]
  },

  // CHẶNG 3: BỘ NÃO (T-F) - 10 câu
  {
    id: 21,
    category: 'TF',
    categoryName: 'Bộ não',
    text: 'Khi đưa ra một quyết định quan trọng, bạn dựa vào điều gì nhiều hơn?',
    options: [
      { label: 'Sự logic, khách quan và các tiêu chuẩn công bằng.', value: 'A' },
      { label: 'Cảm xúc cá nhân và sự ảnh hưởng đến những người xung quanh.', value: 'B' }
    ]
  },
  {
    id: 22,
    category: 'TF',
    categoryName: 'Bộ não',
    text: 'Trong một cuộc tranh luận, bạn ưu tiên:',
    options: [
      { label: 'Tìm ra sự thật, dù nó có thể gây mất lòng.', value: 'A' },
      { label: 'Duy trì sự hòa hợp và thấu hiểu lẫn nhau.', value: 'B' }
    ]
  },
  {
    id: 23,
    category: 'TF',
    categoryName: 'Bộ não',
    text: 'Bạn thường được nhận xét là người:',
    options: [
      { label: 'Cứng rắn, lý trí và thẳng thắn.', value: 'A' },
      { label: 'Nhẹ nhàng, tình cảm và tinh tế.', value: 'B' }
    ]
  },
  {
    id: 24,
    category: 'TF',
    categoryName: 'Bộ não',
    text: 'Khi giúp đỡ người khác, bạn thường:',
    options: [
      { label: 'Đưa ra những lời khuyên thực tế để giải quyết vấn đề.', value: 'A' },
      { label: 'Lắng nghe và chia sẻ cảm xúc để họ thấy được an ủi.', value: 'B' }
    ]
  },
  {
    id: 25,
    category: 'TF',
    categoryName: 'Bộ não',
    text: 'Bạn coi trọng điều gì hơn ở một nhà lãnh đạo?',
    options: [
      { label: 'Sự công minh và khả năng phân tích sắc bén.', value: 'A' },
      { label: 'Sự thấu cảm và khả năng truyền cảm hứng.', value: 'B' }
    ]
  },
  {
    id: 26,
    category: 'TF',
    categoryName: 'Bộ não',
    text: 'Cách bạn phê bình người khác thường là:',
    options: [
      { label: 'Trực tiếp chỉ ra lỗi sai để họ sửa đổi.', value: 'A' },
      { label: 'Góp ý khéo léo để tránh làm tổn thương họ.', value: 'B' }
    ]
  },
  {
    id: 27,
    category: 'TF',
    categoryName: 'Bộ não',
    text: 'Bạn cảm thấy tồi tệ hơn khi bị coi là:',
    options: [
      { label: 'Người thiếu năng lực hoặc vô lý.', value: 'A' },
      { label: 'Người vô tâm hoặc thiếu lòng trắc ẩn.', value: 'B' }
    ]
  },
  {
    id: 28,
    category: 'TF',
    categoryName: 'Bộ não',
    text: 'Khi xem một bộ phim buồn, bạn thường:',
    options: [
      { label: 'Phân tích tính logic của kịch bản.', value: 'A' },
      { label: 'Dễ dàng rơi nước mắt vì đồng cảm với nhân vật.', value: 'B' }
    ]
  },
  {
    id: 29,
    category: 'TF',
    categoryName: 'Bộ não',
    text: 'Trong công việc, bạn thích được đánh giá dựa trên:',
    options: [
      { label: 'Kết quả công việc và hiệu suất đạt được.', value: 'A' },
      { label: 'Sự nỗ lực và tinh thần đóng góp cho tập thể.', value: 'B' }
    ]
  },
  {
    id: 30,
    category: 'TF',
    categoryName: 'Bộ não',
    text: 'Bạn tin rằng thế giới sẽ tốt đẹp hơn nếu mọi người:',
    options: [
      { label: 'Hành động theo lý trí và các quy luật khách quan.', value: 'A' },
      { label: 'Biết yêu thương và quan tâm đến cảm xúc của nhau.', value: 'B' }
    ]
  },

  // CHẶNG 4: PHONG CÁCH (J-P) - 10 câu
  {
    id: 31,
    category: 'JP',
    categoryName: 'Phong cách',
    text: 'Cách bạn sắp xếp công việc hàng ngày thường là:',
    options: [
      { label: 'Lập danh sách việc cần làm và tuân thủ nghiêm ngặt.', value: 'A' },
      { label: 'Làm việc theo cảm hứng và linh hoạt thay đổi.', value: 'B' }
    ]
  },
  {
    id: 32,
    category: 'JP',
    categoryName: 'Phong cách',
    text: 'Khi chuẩn bị cho một chuyến đi, bạn thường:',
    options: [
      { label: 'Lên lịch trình chi tiết từ trước đó rất lâu.', value: 'A' },
      { label: 'Chỉ chuẩn bị những thứ cơ bản và để mọi thứ diễn ra tự nhiên.', value: 'B' }
    ]
  },
  {
    id: 33,
    category: 'JP',
    categoryName: 'Phong cách',
    text: 'Bạn cảm thấy thoải mái hơn khi:',
    options: [
      { label: 'Mọi thứ đã được quyết định và chốt phương án.', value: 'A' },
      { label: 'Mọi thứ vẫn còn đang bỏ ngỏ để có thêm lựa chọn.', value: 'B' }
    ]
  },
  {
    id: 34,
    category: 'JP',
    categoryName: 'Phong cách',
    text: 'Đối với thời hạn (deadline), bạn thường:',
    options: [
      { label: 'Hoàn thành công việc sớm để tránh áp lực phút chót.', value: 'A' },
      { label: 'Làm việc hiệu quả nhất khi thời hạn đã cận kề.', value: 'B' }
    ]
  },
  {
    id: 35,
    category: 'JP',
    categoryName: 'Phong cách',
    text: 'Không gian làm việc của bạn thường:',
    options: [
      { label: 'Gọn gàng, ngăn nắp và có trật tự.', value: 'A' },
      { label: 'Hơi bừa bộn nhưng bạn vẫn tìm thấy thứ mình cần.', value: 'B' }
    ]
  },
  {
    id: 36,
    category: 'JP',
    categoryName: 'Phong cách',
    text: 'Bạn thích kiểu cuộc sống nào hơn?',
    options: [
      { label: 'Ổn định, có kế hoạch và rõ ràng.', value: 'A' },
      { label: 'Tự do, ngẫu hứng và đầy bất ngờ.', value: 'B' }
    ]
  },
  {
    id: 37,
    category: 'JP',
    categoryName: 'Phong cách',
    text: 'Khi bắt đầu một dự án, bạn ưu tiên:',
    options: [
      { label: 'Xác định mục tiêu cuối cùng và các bước thực hiện.', value: 'A' },
      { label: 'Khám phá các khả năng và bắt đầu hành động ngay.', value: 'B' }
    ]
  },
  {
    id: 38,
    category: 'JP',
    categoryName: 'Phong cách',
    text: 'Mọi người thường nhận xét bạn là người:',
    options: [
      { label: 'Có kỷ luật và đáng tin cậy.', value: 'A' },
      { label: 'Dễ thích nghi và thoải mái.', value: 'B' }
    ]
  },
  {
    id: 39,
    category: 'JP',
    categoryName: 'Phong cách',
    text: 'Bạn cảm thấy khó chịu hơn khi:',
    options: [
      { label: 'Kế hoạch bị thay đổi đột ngột.', value: 'A' },
      { label: 'Bị gò bó trong một lịch trình quá cứng nhắc.', value: 'B' }
    ]
  },
  {
    id: 40,
    category: 'JP',
    categoryName: 'Phong cách',
    text: 'Khi mua sắm một món đồ lớn, bạn thường:',
    options: [
      { label: 'Tìm hiểu kỹ, so sánh giá và quyết định nhanh chóng.', value: 'A' },
      { label: 'Cân nhắc rất lâu và thường đợi đến khi thực sự cần thiết.', value: 'B' }
    ]
  }
];
