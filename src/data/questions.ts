export interface Option {
  value: number;      // 1 -> 5
  label: string;      // Nội dung hiển thị
}

export interface Question {
  id: number;

  text: string;       // Nội dung câu hỏi

  axis: string;         // Trục đo (EI / SN / TF / JP)

  direction: string;
  // Câu hỏi nghiêng về chữ nào
  // Ví dụ: E nghĩa là nếu đồng ý thì tăng điểm E

  weight?: number;
  // Trọng số câu hỏi (mặc định = 1)
}

export const likertOptions: Option[] = [
  { value: 1, label: "Rất không đồng ý" },
  { value: 2, label: "Không đồng ý" },
  { value: 3, label: "Trung lập" },
  { value: 4, label: "Đồng ý" },
  { value: 5, label: "Rất đồng ý" }
];

export const questions: Question[] = [
  { id: 1, text: "Bạn cảm thấy tràn đầy năng lượng sau khi dành thời gian giao lưu với một nhóm bạn đông đúc.", axis: "EI", direction: "E" },
  { id: 2, text: "Bạn thường thích suy nghĩ kỹ mọi chuyện trong đầu trước khi bắt đầu lên tiếng.", axis: "EI", direction: "I" },
  { id: 3, text: "Trong các buổi tiệc, bạn là người chủ động làm quen với những người lạ.", axis: "EI", direction: "E" },
  { id: 4, text: "Bạn cảm thấy kiệt sức nếu phải ở cạnh người khác quá lâu và cần khoảng lặng để 'sạc pin'.", axis: "EI", direction: "I" },
  { id: 5, text: "Bạn thích làm việc trong một không gian mở có nhiều sự tương tác hơn là phòng riêng yên tĩnh.", axis: "EI", direction: "E" },
  { id: 6, text: "Bạn thường được bạn bè nhận xét là người kín tiếng và khó đoán.", axis: "EI", direction: "I" },
  { id: 7, text: "Khi gặp một vấn đề khó khăn, bạn có xu hướng thảo luận ngay với người khác để tìm giải pháp.", axis: "EI", direction: "E" },
  { id: 8, text: "Bạn thích có một vài người bạn cực kỳ thân thiết hơn là có một mạng lưới xã hội rộng lớn.", axis: "EI", direction: "I" },
  { id: 9, text: "Bạn cảm thấy thoải mái khi trở thành tâm điểm của sự chú ý trong một đám đông.", axis: "EI", direction: "E" },
  { id: 10, text: "Bạn thường viết ra suy nghĩ của mình dễ dàng hơn là nói trực tiếp ra bằng lời.", axis: "EI", direction: "I" },
  { id: 11, text: "Bạn có xu hướng hành động hoặc lên tiếng trước khi kịp suy nghĩ chi tiết.", axis: "EI", direction: "E" },
  { id: 12, text: "Việc phải gọi điện thoại cho người lạ khiến bạn cảm thấy ngần ngại hoặc lo lắng.", axis: "EI", direction: "I" },
  { id: 13, text: "Bạn thích không khí náo nhiệt của các sự kiện công cộng như lễ hội hoặc buổi hòa nhạc.", axis: "EI", direction: "E" },
  { id: 14, text: "Sau một ngày làm việc căng thẳng, bạn chỉ muốn ở nhà một mình và xem phim hoặc đọc sách.", axis: "EI", direction: "I" },
  { id: 15, text: "Bạn dễ dàng bắt chuyện với người ngồi cạnh mình trên xe buýt hoặc máy bay.", axis: "EI", direction: "E" },
  { id: 16, text: "Bạn thường đợi người khác tiếp cận mình trước thay vì chủ động làm quen.", axis: "EI", direction: "I" },
  { id: 17, text: "Bạn cảm thấy hưng phấn khi được làm việc nhóm và phối hợp cùng nhiều người.", axis: "EI", direction: "E" },
  { id: 18, text: "Bạn cần có nhiều thời gian riêng tư để tự chiêm nghiệm về những gì đã xảy ra trong ngày.", axis: "EI", direction: "I" },
  { id: 19, text: "Bạn thường bộc lộ cảm xúc và ý kiến của mình một cách công khai và nhanh chóng.", axis: "EI", direction: "E" },
  { id: 20, text: "Bạn thích quan sát mọi người xung quanh hơn là trực tiếp tham gia vào cuộc vui.", axis: "EI", direction: "I" },
  { id: 21, text: "Bạn thấy việc đi du lịch một mình là một thử thách buồn chán thay vì thú vị.", axis: "EI", direction: "E" },
  { id: 22, text: "Bạn thường cân nhắc kỹ lưỡng các từ ngữ mình định nói để tránh hiểu lầm.", axis: "EI", direction: "I" },
  { id: 23, text: "Bạn dễ dàng thích nghi với môi trường mới có nhiều người lạ.", axis: "EI", direction: "E" },
  { id: 24, text: "Bạn thường cảm thấy lúng túng khi phải tham gia vào những cuộc trò chuyện xã giao (small talk).", axis: "EI", direction: "I" },
  { id: 25, text: "Bạn là người thường xuyên khởi xướng các buổi đi chơi hoặc tụ tập bạn bè.", axis: "EI", direction: "E" },
  { id: 26, text: "Bạn thích tập trung vào những chi tiết cụ thể hơn là nhìn vào bức tranh tổng thể.", axis: "SN", direction: "S" },
  { id: 27, text: "Bạn thường bị thu hút bởi những ý tưởng trừu tượng và các lý thuyết triết học.", axis: "SN", direction: "N" },
  { id: 28, text: "Khi học một kỹ năng mới, bạn muốn biết chính xác các bước thực hiện thay vì hiểu nguyên lý sâu xa.", axis: "SN", direction: "S" },
  { id: 29, text: "Bạn thường xuyên mơ mộng về những khả năng xảy ra trong tương lai thay vì chú tâm vào hiện tại.", axis: "SN", direction: "N" },
  { id: 30, text: "Bạn tin tưởng vào những kinh nghiệm thực tế đã qua hơn là những linh cảm mơ hồ.", axis: "SN", direction: "S" },
  { id: 31, text: "Bạn thích tìm tòi những cách làm mới lạ cho một công việc quen thuộc.", axis: "SN", direction: "N" },
  { id: 32, text: "Bạn là người thực tế, luôn chú trọng vào những gì có thể thực hiện được ngay bây giờ.", axis: "SN", direction: "S" },
  { id: 33, text: "Bạn thường nhìn thấy các mối liên hệ ẩn giấu giữa những sự kiện dường như không liên quan.", axis: "SN", direction: "N" },
  { id: 34, text: "Bạn thích những hướng dẫn sử dụng rõ ràng, từng bước một khi làm việc với thiết bị mới.", axis: "SN", direction: "S" },
  { id: 35, text: "Bạn cảm thấy nhàm chán nếu phải lặp lại những công việc chi tiết và tỉ mỉ.", axis: "SN", direction: "N" },
  { id: 36, text: "Bạn có xu hướng mô tả sự việc một cách chính xác và đi thẳng vào sự thật.", axis: "SN", direction: "S" },
  { id: 37, text: "Bạn thích sử dụng những hình ảnh ẩn dụ và biểu tượng khi trò chuyện.", axis: "SN", direction: "N" },
  { id: 38, text: "Bạn ưu tiên việc giải quyết các vấn đề tồn đọng trước mắt hơn là lập kế hoạch cho 10 năm tới.", axis: "SN", direction: "S" },
  { id: 39, text: "Bạn thường xuyên tự hỏi 'Tại sao?' và 'Nếu như?' thay vì chấp nhận mọi thứ như vốn có.", axis: "SN", direction: "N" },
  { id: 40, text: "Bạn cảm thấy thoải mái hơn khi làm việc với dữ liệu con số và sự kiện thực tế.", axis: "SN", direction: "S" },
  { id: 41, text: "Bạn thích những bộ phim hoặc cuốn sách có kết thúc mở để tự mình suy tưởng.", axis: "SN", direction: "N" },
  { id: 42, text: "Bạn thường chú ý đến những thay đổi nhỏ trong môi trường xung quanh (như đồ vật bị di chuyển).", axis: "SN", direction: "S" },
  { id: 43, text: "Bạn đánh giá cao sự sáng tạo và đổi mới hơn là duy trì những truyền thống cũ.", axis: "SN", direction: "N" },
  { id: 44, text: "Bạn thích được giao những nhiệm vụ có kết quả hữu hình, có thể nhìn thấy và chạm vào được.", axis: "SN", direction: "S" },
  { id: 45, text: "Bạn thường xuyên dựa vào trực giác hoặc 'giác quan thứ sáu' để đưa ra quyết định.", axis: "SN", direction: "N" },
  { id: 46, text: "Bạn thường ghi nhớ tốt các chi tiết về khuôn mặt hoặc tên gọi của những người đã gặp.", axis: "SN", direction: "S" },
  { id: 47, text: "Bạn thấy thú vị khi tìm hiểu về các xu hướng phát triển của thế giới trong tương lai.", axis: "SN", direction: "N" },
  { id: 48, text: "Bạn thích làm những việc mang tính ứng dụng cao và có ích lợi ngay lập tức.", axis: "SN", direction: "S" },
  { id: 49, text: "Bạn thường cảm thấy mình là người có tư tưởng khác biệt hoặc 'trên mây' so với mọi người.", axis: "SN", direction: "N" },
  { id: 50, text: "Bạn thích tuân thủ các quy trình đã được chứng minh là hiệu quả thay vì mạo hiểm thử cái mới.", axis: "SN", direction: "S" },
  { id: 51, text: "Bạn ưu tiên sự thật khách quan hơn là việc làm hài lòng cảm xúc của người khác.", axis: "TF", direction: "T" },
  { id: 52, text: "Bạn thường đưa ra quyết định dựa trên tiếng gọi của trái tim và cảm xúc cá nhân.", axis: "TF", direction: "F" },
  { id: 53, text: "Trong một cuộc tranh luận, bạn tập trung vào việc tìm ra lỗ hổng logic hơn là xoa dịu bầu không khí.", axis: "TF", direction: "T" },
  { id: 54, text: "Bạn luôn cố gắng duy trì sự hòa hợp và tránh xung đột trong các mối quan hệ.", axis: "TF", direction: "F" },
  { id: 55, text: "Bạn đánh giá cao một người có năng lực làm việc giỏi hơn là một người có lòng tốt.", axis: "TF", direction: "T" },
  { id: 56, text: "Bạn dễ dàng cảm thông và thấu hiểu nỗi đau của người khác ngay cả khi chưa từng trải qua.", axis: "TF", direction: "F" },
  { id: 57, text: "Bạn tin rằng công bằng nghĩa là mọi người phải được đối xử nghiêm túc theo cùng một tiêu chuẩn.", axis: "TF", direction: "T" },
  { id: 58, text: "Bạn tin rằng công bằng nghĩa là cần xem xét hoàn cảnh riêng biệt của mỗi cá nhân.", axis: "TF", direction: "F" },
  { id: 59, text: "Bạn thường giữ cái đầu lạnh và giữ khoảng cách cảm xúc khi giải quyết công việc.", axis: "TF", direction: "T" },
  { id: 60, text: "Bạn cảm thấy rất khó chịu khi phải làm tổn thương cảm xúc của ai đó, dù là vì công việc.", axis: "TF", direction: "F" },
  { id: 61, text: "Bạn thích được khen ngợi về sự thông minh hoặc thành quả đạt được hơn là về lòng tốt.", axis: "TF", direction: "T" },
  { id: 62, text: "Bạn coi trọng sự tử tế và lòng trắc ẩn hơn là sự hiệu quả và năng suất.", axis: "TF", direction: "F" },
  { id: 63, text: "Bạn có xu hướng phân tích mọi thứ một cách máy móc để tìm ra nguyên nhân cốt lõi.", axis: "TF", direction: "T" },
  { id: 64, text: "Bạn thường xuyên giúp đỡ mọi người xung quanh ngay cả khi việc đó làm bạn mất thời gian.", axis: "TF", direction: "F" },
  { id: 65, text: "Bạn sẵn sàng chỉ ra lỗi sai của bạn bè để giúp họ tiến bộ thay vì im lặng để giữ hòa khí.", axis: "TF", direction: "T" },
  { id: 66, text: "Bạn đánh giá cao những giá trị đạo đức và niềm tin cá nhân khi xem xét một vấn đề.", axis: "TF", direction: "F" },
  { id: 67, text: "Bạn thường được nhận xét là người lý trí, cứng rắn và đôi khi có phần khô khan.", axis: "TF", direction: "T" },
  { id: 68, text: "Bạn là người ấm áp, nhạy cảm và dễ xúc động trước những câu chuyện đời thường.", axis: "TF", direction: "F" },
  { id: 69, text: "Bạn tin rằng các quyết định quan trọng nên dựa trên dữ liệu và bằng chứng xác thực.", axis: "TF", direction: "T" },
  { id: 70, text: "Bạn thường ưu tiên nhu cầu của người khác lên trên nhu cầu của chính mình.", axis: "TF", direction: "F" },
  { id: 71, text: "Bạn cảm thấy thoải mái khi đưa ra những nhận xét mang tính phê bình để cải thiện chất lượng công việc.", axis: "TF", direction: "T" },
  { id: 72, text: "Bạn thường tự hỏi hành động của mình sẽ ảnh hưởng như thế nào đến tâm trạng của mọi người.", axis: "TF", direction: "F" },
  { id: 73, text: "Bạn thích làm việc trong một môi trường đề cao tính chuyên nghiệp và sự phân minh.", axis: "TF", direction: "T" },
  { id: 74, text: "Bạn thích làm việc trong một môi trường mà mọi người hỗ trợ và yêu thương nhau như gia đình.", axis: "TF", direction: "F" },
  { id: 75, text: "Bạn hiếm khi để tình cảm cá nhân xen vào quá trình đánh giá một người nào đó.", axis: "TF", direction: "T" },
  { id: 76, text: "Bạn cảm thấy thoải mái nhất khi mọi thứ trong ngày được lên lịch trình cụ thể.", axis: "JP", direction: "J" },
  { id: 77, text: "Bạn thích để mọi thứ diễn ra tự nhiên và sẵn sàng thay đổi kế hoạch vào phút chót.", axis: "JP", direction: "P" },
  { id: 78, text: "Bạn thường hoàn thành công việc sớm hơn thời hạn để tránh áp lực vào cuối buổi.", axis: "JP", direction: "J" },
  { id: 79, text: "Bạn làm việc hiệu quả nhất khi có áp lực của thời hạn (deadline) sát nút.", axis: "JP", direction: "P" },
  { id: 80, text: "Bạn thích có một không gian làm việc gọn gàng và mọi thứ được sắp xếp đúng chỗ.", axis: "JP", direction: "J" },
  { id: 81, text: "Bạn không quá bận tâm nếu bàn làm việc hơi bừa bộn một chút.", axis: "JP", direction: "P" },
  { id: 82, text: "Bạn thường xuyên lập danh sách các việc cần làm (To-do list) mỗi ngày.", axis: "JP", direction: "J" },
  { id: 83, text: "Bạn cảm thấy bị gò bó nếu phải tuân theo một thời khóa biểu quá khắt khe.", axis: "JP", direction: "P" },
  { id: 84, text: "Bạn muốn đưa ra quyết định dứt khoát thay vì cứ cân nhắc mãi các lựa chọn.", axis: "JP", direction: "J" },
  { id: 85, text: "Bạn thích thu thập thêm thông tin và chờ đợi xem có phương án nào tốt hơn không.", axis: "JP", direction: "P" },
  { id: 86, text: "Trước khi đi du lịch, bạn thường đặt trước vé, phòng và lên lịch trình chi tiết.", axis: "JP", direction: "J" },
  { id: 87, text: "Bạn thích đi du lịch kiểu ngẫu hứng, tới đâu hay tới đó.", axis: "JP", direction: "P" },
  { id: 88, text: "Bạn cảm thấy khó chịu khi những kế hoạch đã định trước bị thay đổi đột ngột.", axis: "JP", direction: "J" },
  { id: 89, text: "Bạn xem sự thay đổi kế hoạch là một cơ hội thú vị để trải nghiệm điều mới.", axis: "JP", direction: "P" },
  { id: 90, text: "Bạn có xu hướng chuẩn bị kỹ lưỡng cho mọi tình huống có thể xảy ra.", axis: "JP", direction: "J" },
  { id: 91, text: "Bạn thường ứng biến linh hoạt với các tình huống phát sinh thay vì chuẩn bị trước.", axis: "JP", direction: "P" },
  { id: 92, text: "Bạn thích kết thúc một dự án hoàn toàn trước khi bắt đầu một việc mới.", axis: "JP", direction: "J" },
  { id: 93, text: "Bạn thường làm nhiều việc cùng một lúc và có xu hướng để dở dang một vài việc.", axis: "JP", direction: "P" },
  { id: 94, text: "Bạn coi trọng kỷ luật và sự đúng giờ trong mọi cuộc hẹn.", axis: "JP", direction: "J" },
  { id: 95, text: "Bạn thường đến muộn một vài phút hoặc coi thời gian hẹn chỉ mang tính tương đối.", axis: "JP", direction: "P" },
  { id: 96, text: "Bạn thích sự rõ ràng và muốn biết kỳ vọng của người khác đối với mình là gì.", axis: "JP", direction: "J" },
  { id: 97, text: "Bạn thích khám phá và thử nghiệm nhiều cách làm khác nhau thay vì theo một quy trình.", axis: "JP", direction: "P" },
  { id: 98, text: "Bạn thường dọn dẹp nhà cửa/phòng ốc định kỳ vào một thời gian cố định.", axis: "JP", direction: "J" },
  { id: 99, text: "Bạn chỉ dọn dẹp khi cảm thấy thực sự cần thiết hoặc khi có cảm hứng.", axis: "JP", direction: "P" },
  { id: 100, text: "Bạn cảm thấy hài lòng khi một vấn đề được giải quyết xong xuôi và chốt lại.", axis: "JP", direction: "J" }
];