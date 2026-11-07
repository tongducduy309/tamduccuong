export type ProductInfo = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  applications: string[];
  selectionPoints: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  buyingGuide?: string[];
  quoteChecklist?: string[];
  localSearchIntro?: string;
  relatedArticles?: string[];
};

export const products: ProductInfo[] = [
  {
    slug: "ton-lanh-ton-kem",
    name: "Tôn lạnh, tôn kẽm",
    shortDescription: "Tôn thép mạ dùng cho mái, vách và các hạng mục bao che công trình.",
    description: "Tôn lạnh và tôn kẽm là các dòng thép tấm mạ có lớp phủ bảo vệ bề mặt. Việc lựa chọn cần căn cứ loại lớp mạ, chiều dày thép nền, khổ tấm, biên dạng sóng và môi trường sử dụng; không nên chỉ dựa vào tên gọi thương mại.",
    applications: ["Mái và vách công trình dân dụng", "Nhà kho, nhà xưởng và công trình phụ trợ", "Gia công tấm theo chiều dài và biên dạng phù hợp"],
    selectionPoints: ["Xác định đúng loại lớp mạ và mục đích sử dụng", "Kiểm tra chiều dày thép nền, khổ hữu dụng và dung sai", "Chọn màu, biên dạng sóng và chiều dài theo bản vẽ", "Tính phụ kiện, vận chuyển và phương án bốc dỡ"],
    faqs: [
      { question: "Tôn lạnh và tôn kẽm có giống nhau không?", answer: "Đây là các loại tôn có hệ lớp mạ khác nhau. Cần kiểm tra tên sản phẩm, tiêu chuẩn và tài liệu kỹ thuật của từng mã hàng trước khi so sánh." },
      { question: "Cần cung cấp gì để nhận báo giá tôn?", answer: "Hãy gửi loại tôn, chiều dày, khổ hoặc biên dạng, chiều dài từng tấm, số lượng và địa điểm giao hàng." }
    ],
    relatedSlugs: ["ton-mau", "ton-pu-cach-nhiet"]
  },
  {
    slug: "ton-mau",
    name: "Tôn màu",
    shortDescription: "Tôn mạ màu với nhiều lựa chọn màu sắc và biên dạng cho mái, vách.",
    description: "Tôn màu là thép nền được mạ và sơn phủ màu, thường được lựa chọn theo yêu cầu thẩm mỹ, môi trường sử dụng và cấu tạo mái/vách. Độ bền thực tế phụ thuộc hệ lớp phủ, chất lượng nền, điều kiện môi trường và bảo trì.",
    applications: ["Mái nhà ở và công trình phụ", "Vách bao che nhà xưởng, nhà kho", "Mái che, nhà tiền chế và hạng mục kiến trúc"],
    selectionPoints: ["Chọn màu theo bảng màu thực tế của nhà sản xuất", "Kiểm tra lớp mạ, hệ sơn và chiều dày thép nền", "Xác định khổ hữu dụng, bước sóng và chiều dài", "Lưu ý môi trường ăn mòn và hướng dẫn bảo quản"],
    faqs: [
      { question: "Có thể đặt tôn màu theo chiều dài mái không?", answer: "Có thể trao đổi khả năng gia công theo chiều dài và điều kiện vận chuyển. Cần cung cấp kích thước mái và số lượng tấm." },
      { question: "Chọn màu tôn có ảnh hưởng đến công năng không?", answer: "Màu sắc có thể ảnh hưởng đến hấp thụ bức xạ và thẩm mỹ. Nên đối chiếu mã màu và thông số phản xạ nhiệt nếu đây là yêu cầu quan trọng." }
    ],
    relatedSlugs: ["ton-lanh-ton-kem", "ton-pu-cach-nhiet"]
  },
  {
    slug: "thep-hop",
    name: "Thép hộp",
    shortDescription: "Thép hộp vuông, chữ nhật phục vụ kết cấu, khung và gia công cơ khí.",
    description: "Thép hộp có tiết diện vuông hoặc chữ nhật, được sử dụng trong nhiều hạng mục kết cấu và gia công. Khi đặt mua cần xác định kích thước ngoài, chiều dày, chiều dài, mác thép và loại bề mặt phù hợp thiết kế.",
    applications: ["Khung, giàn và kết cấu phụ trợ", "Cửa, hàng rào và hạng mục cơ khí", "Các cấu kiện theo bản vẽ công trình"],
    selectionPoints: ["Xác định tiết diện vuông hay chữ nhật", "Đối chiếu kích thước và chiều dày theo hồ sơ", "Làm rõ thép đen hay mạ kẽm", "Kiểm tra chiều dài, số cây và yêu cầu chứng từ"],
    faqs: [
      { question: "Thép hộp đen và thép hộp mạ kẽm khác nhau thế nào?", answer: "Khác nhau ở lớp bảo vệ bề mặt và môi trường sử dụng phù hợp. Cần cân nhắc điều kiện trong nhà, ngoài trời và yêu cầu chống ăn mòn." },
      { question: "Báo giá thép hộp cần thông tin gì?", answer: "Cung cấp kích thước, chiều dày, chiều dài, loại bề mặt, số lượng và địa điểm giao hàng." }
    ],
    relatedSlugs: ["thep-hinh", "xa-go-c-z"]
  },
  {
    slug: "thep-hinh",
    name: "Thép hình I, H, U, V",
    shortDescription: "Các tiết diện thép hình dùng trong kết cấu và hạng mục gia công.",
    description: "Thép hình I, H, U và V có hình dạng tiết diện khác nhau, phục vụ các vai trò kết cấu hoặc liên kết khác nhau. Lựa chọn chủng loại và quy cách phải theo bản vẽ, tải trọng và tính toán của kỹ sư kết cấu.",
    applications: ["Kết cấu nhà thép và nhà xưởng", "Dầm, cột, khung và liên kết", "Gia công cơ khí và hạng mục công nghiệp"],
    selectionPoints: ["Xác định đúng loại tiết diện I, H, U hay V", "Đối chiếu kích thước, chiều dày và chiều dài", "Kiểm tra mác thép, tiêu chuẩn và chứng từ", "Không thay đổi tiết diện thiết kế khi chưa được chấp thuận"],
    faqs: [
      { question: "Thép hình I và H có thể thay thế cho nhau không?", answer: "Không nên tự thay thế. Hình dạng, kích thước và đặc tính tiết diện có thể khác nhau; việc thay đổi phải được kỹ sư thiết kế kiểm tra." },
      { question: "Làm sao yêu cầu báo giá thép hình chính xác?", answer: "Gửi loại thép, quy cách, chiều dài, số lượng, tiêu chuẩn hoặc mác thép và địa chỉ nhận hàng." }
    ],
    relatedSlugs: ["thep-hop", "xa-go-c-z"]
  },
  {
    slug: "xa-go-c-z",
    name: "Xà gồ C và Z",
    shortDescription: "Xà gồ thép tạo hệ đỡ mái, vách cho nhà xưởng và công trình.",
    description: "Xà gồ C và Z là cấu kiện thép thành mỏng thường dùng trong hệ mái và vách. Khả năng làm việc phụ thuộc tiết diện, chiều dày, nhịp, tải trọng, liên kết và cấu tạo nối; không thể chọn chỉ theo tên C hoặc Z.",
    applications: ["Hệ đỡ mái tôn nhà xưởng", "Khung phụ và vách bao che", "Công trình nhà thép tiền chế theo thiết kế"],
    selectionPoints: ["Xác định tiết diện C hay Z theo bản vẽ", "Cung cấp kích thước bụng, cánh, mép và chiều dày", "Kiểm tra mác thép, lớp mạ và chiều dài thanh", "Đối chiếu tải trọng, nhịp và chi tiết liên kết với kỹ sư"],
    faqs: [
      { question: "Xà gồ C và Z khác nhau thế nào?", answer: "Khác nhau chủ yếu ở hình dạng tiết diện và cách bố trí. Xà gồ Z có thể thuận lợi cho nối chồng trong một số hệ nhiều nhịp nếu được thiết kế phù hợp." },
      { question: "Có thể tự chọn xà gồ theo chiều dày không?", answer: "Không. Cần xét đồng thời kích thước tiết diện, mác thép, nhịp, tải trọng, khoảng cách và liên kết theo hồ sơ thiết kế." }
    ],
    relatedSlugs: ["thep-hinh", "ton-lanh-ton-kem"]
  },
  {
    slug: "ton-pu-cach-nhiet",
    name: "Tôn PU cách nhiệt",
    shortDescription: "Tấm mái nhiều lớp có lõi PU hỗ trợ giảm truyền nhiệt qua mái.",
    description: "Tôn PU cách nhiệt thường gồm lớp tôn bề mặt và lõi polyurethane, cùng lớp hoàn thiện mặt dưới tùy dòng sản phẩm. Hiệu quả sử dụng phụ thuộc độ dày lõi, cấu tạo tấm, mối nối, thông gió và chất lượng thi công toàn hệ mái.",
    applications: ["Mái nhà ở và công trình cần cải thiện tiện nghi nhiệt", "Nhà xưởng, kho và khu vực sản xuất", "Công trình cần tích hợp lớp cách nhiệt vào tấm mái"],
    selectionPoints: ["Kiểm tra độ dày tôn nền và lõi PU riêng biệt", "Làm rõ cấu tạo mặt dưới và khổ hữu dụng", "Yêu cầu tài liệu kỹ thuật về cách nhiệt và an toàn cháy", "Tính phụ kiện, xử lý mối nối và phương án vận chuyển"],
    faqs: [
      { question: "Tôn PU có chống nóng hoàn toàn không?", answer: "Không. Lõi PU hỗ trợ giảm truyền nhiệt qua tấm mái, nhưng nhiệt độ bên trong còn phụ thuộc hướng nắng, thông gió, diện tích mái và nguồn nhiệt." },
      { question: "Tôn PU có chống cháy không?", answer: "Không thể kết luận chỉ từ tên PU. Cần kiểm tra chứng từ, phân loại và thử nghiệm cháy của đúng sản phẩm được chào bán." }
    ],
    relatedSlugs: ["ton-lanh-ton-kem", "panel-pu-eps"]
  },
  {
    slug: "panel-pu-eps",
    name: "Tấm panel PU/EPS",
    shortDescription: "Tấm panel lõi cách nhiệt dùng cho vách, trần và một số hệ bao che.",
    description: "Panel PU/EPS là tấm cấu kiện nhiều lớp có lõi cách nhiệt và hai bề mặt bao che. Hai loại lõi có đặc tính khác nhau; cần lựa chọn theo yêu cầu nhiệt, tải trọng, vệ sinh, an toàn cháy và hồ sơ kỹ thuật của công trình.",
    applications: ["Vách ngăn và trần nhà xưởng", "Kho, phòng kỹ thuật và khu vực cần kiểm soát nhiệt", "Công trình lắp ghép và bao che"],
    selectionPoints: ["Chọn lõi PU hay EPS theo yêu cầu kỹ thuật", "Kiểm tra độ dày lõi, bề mặt và khổ hữu dụng", "Xác định kiểu ngàm, phụ kiện và chi tiết kín khít", "Yêu cầu hồ sơ kỹ thuật và thông tin an toàn cháy"],
    faqs: [
      { question: "Panel PU và EPS có giống nhau không?", answer: "Không. Chúng sử dụng vật liệu lõi khác nhau và có đặc tính kỹ thuật, chi phí khác nhau. Cần so sánh theo tài liệu của sản phẩm cụ thể." },
      { question: "Panel có thể dùng làm vách và trần không?", answer: "Có các dòng được thiết kế cho vách hoặc trần. Cần chọn đúng cấu tạo và tải trọng theo hướng dẫn nhà sản xuất." }
    ],
    relatedSlugs: ["ton-pu-cach-nhiet", "ton-lanh-ton-kem"]
  },
  {
    slug: "uon-vom-nhan-mang",
    name: "Uốn vòm và nhấn máng",
    shortDescription: "Dịch vụ gia công tấm theo hình dạng và kích thước công trình.",
    description: "Uốn vòm và nhấn máng là các công đoạn gia công phục vụ mái và hệ thống thoát nước. Khả năng gia công cần được xác nhận theo vật liệu, chiều dày, bán kính uốn, kích thước và bản vẽ thực tế.",
    applications: ["Mái vòm và mái che theo thiết kế", "Máng xối, diềm và chi tiết thoát nước", "Các chi tiết tôn gia công theo kích thước"],
    selectionPoints: ["Gửi bản vẽ hoặc kích thước chi tiết", "Xác định vật liệu, chiều dày và lớp phủ", "Làm rõ bán kính uốn, chiều dài và số lượng", "Xác nhận khả năng gia công trước khi chốt đơn"],
    faqs: [
      { question: "Có thể gia công theo bản vẽ riêng không?", answer: "Có thể gửi bản vẽ hoặc mẫu để đơn vị cung ứng kiểm tra khả năng gia công, dung sai và tiến độ trước khi xác nhận." },
      { question: "Cần chuẩn bị gì khi đặt nhấn máng?", answer: "Nên cung cấp mặt cắt, chiều dài, vật liệu, chiều dày, số lượng và vị trí lắp đặt." }
    ],
    relatedSlugs: ["ton-mau", "ton-lanh-ton-kem"]
  },
  {
    slug: "alu",
    name: "Tấm Alu",
    shortDescription: "Tấm nhôm nhựa dùng cho ốp trang trí và một số hạng mục hoàn thiện.",
    description: "Tấm Alu là vật liệu dạng composite gồm các lớp nhôm và lõi ở giữa. Việc lựa chọn cần xem xét độ dày tấm, độ dày lớp nhôm, loại lõi, lớp sơn phủ, vị trí sử dụng và yêu cầu an toàn của công trình.",
    applications: ["Ốp mặt dựng và bảng hiệu", "Trang trí nội ngoại thất", "Hạng mục hoàn thiện theo thiết kế"],
    selectionPoints: ["Xác định dùng trong nhà hay ngoài trời", "Kiểm tra độ dày tổng và lớp nhôm", "Làm rõ loại lõi, lớp phủ và màu sắc", "Tuân thủ yêu cầu chống cháy của công trình"],
    faqs: [
      { question: "Tấm Alu trong nhà và ngoài trời có giống nhau không?", answer: "Không nhất thiết. Hệ sơn phủ, lớp nhôm và cấu tạo cần phù hợp điều kiện thời tiết và yêu cầu sử dụng." },
      { question: "Có thể đặt Alu theo màu riêng không?", answer: "Cần đối chiếu bảng màu và quy cách của dòng sản phẩm hiện có trước khi xác nhận đơn hàng." }
    ],
    relatedSlugs: ["tam-nhua-poly", "panel-pu-eps"]
  },
  {
    slug: "tam-nhua-poly",
    name: "Tấm nhựa Poly",
    shortDescription: "Tấm lấy sáng dùng cho mái che, giếng trời và hạng mục kiến trúc.",
    description: "Tấm polycarbonate thường được sử dụng ở các vị trí cần lấy sáng. Sản phẩm có nhiều cấu tạo và độ dày; cần kiểm tra khả năng chống tia UV, kiểu tấm, bán kính uốn, khoảng cách đỡ và hướng dẫn lắp đặt.",
    applications: ["Mái che và nhà xe", "Giếng trời, mái lấy sáng", "Một số hạng mục kiến trúc cần ánh sáng tự nhiên"],
    selectionPoints: ["Chọn tấm đặc hay rỗng theo mục đích", "Kiểm tra độ dày và lớp chống UV", "Xác định màu sắc, khổ tấm và chiều dài", "Thiết kế khe co giãn, vít và phụ kiện đúng hướng dẫn"],
    faqs: [
      { question: "Tấm Poly có dùng ngoài trời được không?", answer: "Có dòng được thiết kế cho ngoài trời. Cần xác nhận lớp chống UV, mặt lắp đặt và hướng dẫn bảo hành của sản phẩm." },
      { question: "Nên chọn tấm Poly đặc hay rỗng?", answer: "Tùy yêu cầu lấy sáng, cách nhiệt, độ cứng, nhịp đỡ và ngân sách. Nên so sánh thông số của từng dòng." }
    ],
    relatedSlugs: ["alu", "ton-pu-cach-nhiet"]
  },
  {
    slug: "phu-kien-ton-thep",
    name: "Phụ kiện tôn thép",
    shortDescription: "Vít bắn tôn, keo và phụ kiện hoàn thiện hệ mái, vách.",
    description: "Phụ kiện phù hợp giúp hệ mái và vách được liên kết, chống thấm và hoàn thiện đúng kỹ thuật. Chủng loại cần tương thích với vật liệu nền, môi trường và cấu tạo của công trình.",
    applications: ["Lắp đặt mái và vách tôn", "Liên kết tấm với hệ xà gồ", "Hoàn thiện mép mái, úp nóc và vị trí xuyên mái"],
    selectionPoints: ["Chọn chiều dài và loại vít phù hợp nền liên kết", "Kiểm tra long đền và vật liệu chống ăn mòn", "Chọn keo tương thích với bề mặt và môi trường", "Xác định phụ kiện theo chi tiết cấu tạo mái"],
    faqs: [
      { question: "Dùng vít nào để bắn tôn?", answer: "Cần chọn vít theo vật liệu xà gồ, chiều dày lớp liên kết, môi trường và cấu tạo mái. Nên theo hướng dẫn của nhà sản xuất tôn và phụ kiện." },
      { question: "Có thể dùng một loại keo cho mọi vị trí không?", answer: "Không. Cần kiểm tra vật liệu nền, nhiệt độ, độ ẩm và mục đích trám kín để chọn đúng loại keo." }
    ],
    relatedSlugs: ["ton-lanh-ton-kem", "ton-mau"]
  }
];


const productEditorial: Record<string, Pick<ProductInfo, "buyingGuide" | "quoteChecklist" | "localSearchIntro" | "relatedArticles">> = {
  "ton-lanh-ton-kem": {
    "buyingGuide": [
      "Phân biệt tôn lạnh mạ hợp kim nhôm-kẽm và tôn mạ kẽm; yêu cầu ghi rõ dòng hàng trên báo giá.",
      "Đối chiếu BMT (độ dày thép nền), khổ hữu dụng, biên dạng sóng, lớp mạ và dung sai; không chỉ nhìn độ dày tổng.",
      "Tính chiều dài tấm theo hướng thoát nước, độ dốc và phương án vận chuyển; kiểm tra phụ kiện úp nóc, diềm và vít tương thích."
    ],
    "quoteChecklist": [
      "Tôn lạnh hay tôn kẽm; dạng cuộn hay tấm cán sóng",
      "BMT, khổ hữu dụng, biên dạng và chiều dài từng tấm",
      "Màu sắc/lớp phủ và tài liệu kỹ thuật cần đối chiếu",
      "Số lượng, địa chỉ giao nhận và yêu cầu bốc dỡ"
    ],
    "localSearchIntro": "Khách hàng tìm mua tôn lạnh hoặc tôn kẽm tại Hiệp Phước, TP.HCM có thể gửi quy cách mái, chiều dài tấm và số lượng để Tâm Đức Cường kiểm tra phương án cung ứng, gia công và báo giá theo yêu cầu.",
    "relatedArticles": [
      "cach-chon-ton-lop-mai-nha-phu-hop"
    ]
  },
  "ton-mau": {
    "buyingGuide": [
      "Chọn dòng tôn và mã màu theo bảng màu thực tế; màu hiển thị trên màn hình có thể khác màu sản phẩm.",
      "Kiểm tra BMT, lớp mạ, hệ sơn, khổ hữu dụng và biên dạng sóng theo môi trường sử dụng.",
      "Xác nhận chiều dài, hướng lợp, phụ kiện đồng màu nếu có và cách bảo quản tránh trầy xước lớp sơn."
    ],
    "quoteChecklist": [
      "Mã màu hoặc mẫu màu mong muốn",
      "BMT, khổ, biên dạng sóng và chiều dài tấm",
      "Số lượng và mục đích dùng cho mái hay vách",
      "Địa chỉ giao hàng và thời gian dự kiến"
    ],
    "localSearchIntro": "Nếu cần tìm tôn màu tại Hiệp Phước, TP.HCM, hãy chuẩn bị mã màu, quy cách và kích thước mái. Tâm Đức Cường sẽ tiếp nhận yêu cầu để kiểm tra dòng hàng và khả năng đáp ứng trước khi xác nhận.",
    "relatedArticles": [
      "cach-chon-ton-lop-mai-nha-phu-hop"
    ]
  },
  "thep-hop": {
    "buyingGuide": [
      "Chọn tiết diện vuông hay chữ nhật theo bản vẽ; không thay đổi kích thước hoặc chiều dày cấu kiện chịu lực khi chưa được kỹ sư chấp thuận.",
      "Ghi rõ kích thước ngoài, chiều dày thép nền, chiều dài cây, mác thép và loại bề mặt đen/mạ kẽm.",
      "So sánh báo giá theo cùng quy cách, dung sai, chứng từ và điều kiện giao nhận; làm rõ cách tính cây, kg hoặc tấn."
    ],
    "quoteChecklist": [
      "Thép hộp vuông hay chữ nhật; kích thước hai cạnh",
      "Chiều dày, chiều dài cây và số lượng",
      "Thép đen hay mạ kẽm; mác/tiêu chuẩn nếu có",
      "Địa chỉ giao nhận và yêu cầu chứng từ"
    ],
    "localSearchIntro": "Đối với nhu cầu mua thép hộp tại Hiệp Phước, TP.HCM, nên gửi bảng thống kê vật tư hoặc danh sách kích thước, chiều dày và số cây để đối chiếu đúng quy cách.",
    "relatedArticles": []
  },
  "thep-hinh": {
    "buyingGuide": [
      "Xác định đúng tiết diện I, H, U hoặc V và quy cách theo bản vẽ kết cấu.",
      "Kiểm tra kích thước, chiều dày cánh/bụng, chiều dài, mác thép, tiêu chuẩn và chứng từ đi kèm.",
      "Không tự ý thay thế thép hình khác quy cách vì khả năng chịu lực phụ thuộc đặc tính tiết diện và tính toán thiết kế."
    ],
    "quoteChecklist": [
      "Loại thép hình I/H/U/V và quy cách đầy đủ",
      "Chiều dài từng cây và số lượng",
      "Mác thép, tiêu chuẩn hoặc chứng từ yêu cầu",
      "Địa điểm công trình, phương án xe giao và bốc dỡ"
    ],
    "localSearchIntro": "Nhà thầu cần tìm thép hình I, H, U, V tại Hiệp Phước, TP.HCM nên gửi đúng ký hiệu quy cách, chiều dài và số lượng theo bản vẽ để kiểm tra khả năng cung ứng và phương án vận chuyển.",
    "relatedArticles": []
  },
  "xa-go-c-z": {
    "buyingGuide": [
      "Chọn tiết diện C hay Z theo sơ đồ kết cấu, nhịp, tải trọng và chi tiết liên kết; không chọn chỉ theo tên gọi.",
      "Cung cấp chiều cao bụng, cánh, mép tăng cứng, chiều dày thép nền, lớp phủ và chiều dài thanh.",
      "Với hệ nhiều nhịp hoặc nối chồng, phải theo chi tiết thiết kế; không tự quyết định chiều dài nối hoặc số lượng bu lông."
    ],
    "quoteChecklist": [
      "Xà gồ C hay Z và kích thước tiết diện",
      "Chiều dày, mác thép/lớp mạ và chiều dài thanh",
      "Số lượng theo từng chiều dài; bản vẽ hoặc bảng thống kê",
      "Địa chỉ công trình và yêu cầu xe giao"
    ],
    "localSearchIntro": "Công trình tại Hiệp Phước và TP.HCM cần xà gồ C/Z nên chuẩn bị bản vẽ mái, tiết diện, chiều dày và chiều dài từng thanh. Tâm Đức Cường có thể tiếp nhận thông tin để kiểm tra quy cách và báo giá theo danh mục thực tế.",
    "relatedArticles": []
  },
  "ton-pu-cach-nhiet": {
    "buyingGuide": [
      "Tách bạch độ dày tôn bề mặt và độ dày lõi PU; yêu cầu thể hiện riêng trên báo giá.",
      "Làm rõ cấu tạo mặt dưới, khổ hữu dụng, kiểu mối nối, chiều dài tấm và phụ kiện đồng bộ.",
      "Yêu cầu tài liệu kỹ thuật về cách nhiệt, khả năng chống cháy và bảo hành của đúng mã sản phẩm; không suy đoán từ tên PU."
    ],
    "quoteChecklist": [
      "Cấu tạo tấm và độ dày tôn bề mặt",
      "Độ dày lõi PU và vật liệu mặt dưới",
      "Khổ hữu dụng, chiều dài, màu sắc và số lượng",
      "Yêu cầu kỹ thuật, chứng từ và địa chỉ giao"
    ],
    "localSearchIntro": "Khi tìm tôn PU cách nhiệt tại Hiệp Phước, TP.HCM, hãy gửi diện tích mái, cấu tạo mong muốn, độ dày lõi và chiều dài tấm. Thông số cần được xác nhận theo đúng sản phẩm trước khi đặt hàng.",
    "relatedArticles": [
      "cach-chon-ton-lop-mai-nha-phu-hop"
    ]
  },
  "panel-pu-eps": {
    "buyingGuide": [
      "Xác định panel dùng làm vách, trần hay khoang cần kiểm soát nhiệt; chọn lõi PU/EPS theo yêu cầu thiết kế.",
      "Đối chiếu độ dày lõi, hai bề mặt, khổ hữu dụng, kiểu ngàm và phụ kiện hoàn thiện.",
      "Kiểm tra hồ sơ kỹ thuật, yêu cầu vệ sinh, tải trọng và an toàn cháy của đúng mã panel; không xem PU/EPS là thông số chống cháy mặc định."
    ],
    "quoteChecklist": [
      "Panel PU hay EPS; ứng dụng vách/trần",
      "Độ dày lõi, bề mặt và khổ hữu dụng",
      "Chiều dài, kiểu ngàm, phụ kiện và số lượng",
      "Yêu cầu kỹ thuật, địa chỉ công trình và lịch nhận"
    ],
    "localSearchIntro": "Đơn vị thi công cần panel PU/EPS tại Hiệp Phước, TP.HCM nên gửi mục đích sử dụng, độ dày lõi, kích thước tấm và bản vẽ bố trí để đối chiếu đúng loại panel.",
    "relatedArticles": []
  },
  "uon-vom-nhan-mang": {
    "buyingGuide": [
      "Chuẩn bị bản vẽ mặt cắt, bán kính uốn hoặc kích thước máng; ảnh hiện trạng giúp làm rõ vị trí lắp.",
      "Ghi rõ vật liệu đầu vào, chiều dày, lớp phủ, chiều dài chi tiết và dung sai cần đạt.",
      "Xác nhận khả năng gia công, số lượng, đóng gói và vận chuyển trước khi chốt tiến độ."
    ],
    "quoteChecklist": [
      "Bản vẽ/mặt cắt, bán kính uốn hoặc kích thước máng",
      "Loại tôn, chiều dày và lớp phủ",
      "Chiều dài, số lượng và dung sai",
      "Ảnh công trình, địa chỉ nhận và thời gian cần hàng"
    ],
    "localSearchIntro": "Khách hàng cần gia công uốn vòm hoặc nhấn máng tại Hiệp Phước, TP.HCM có thể gửi bản vẽ, kích thước và vật liệu để kiểm tra khả năng thực hiện trước khi xác nhận.",
    "relatedArticles": [
      "cach-chon-ton-lop-mai-nha-phu-hop"
    ]
  },
  "alu": {
    "buyingGuide": [
      "Xác định tấm Alu dùng trong nhà hay ngoài trời; điều kiện nắng mưa và yêu cầu công trình ảnh hưởng lựa chọn lớp phủ.",
      "Kiểm tra độ dày tổng, độ dày nhôm, loại lõi, lớp sơn, màu sắc và chứng từ kỹ thuật.",
      "Với mặt dựng hoặc khu vực yêu cầu chống cháy, cần hồ sơ phân loại và phê duyệt đúng hệ vật liệu."
    ],
    "quoteChecklist": [
      "Dòng Alu trong nhà/ngoài trời và màu sắc",
      "Độ dày tổng, lớp nhôm và loại lõi",
      "Khổ tấm, số lượng và phương án gia công",
      "Yêu cầu kỹ thuật, địa chỉ giao hàng"
    ],
    "localSearchIntro": "Nếu tìm mua tấm Alu tại Hiệp Phước, TP.HCM, hãy nêu rõ vị trí sử dụng, màu sắc, độ dày và yêu cầu lõi để kiểm tra đúng dòng sản phẩm.",
    "relatedArticles": []
  },
  "tam-nhua-poly": {
    "buyingGuide": [
      "Chọn tấm Poly đặc hay rỗng theo nhu cầu lấy sáng, độ cứng, cách nhiệt và nhịp đỡ.",
      "Kiểm tra độ dày, màu, lớp chống UV, khổ tấm và hướng lắp đặt theo hướng dẫn nhà sản xuất.",
      "Tính khe co giãn, vít, nẹp và phụ kiện tương thích; không siết vít làm biến dạng tấm."
    ],
    "quoteChecklist": [
      "Tấm Poly đặc hay rỗng; màu sắc",
      "Độ dày, khổ và chiều dài",
      "Yêu cầu lớp chống UV và phụ kiện",
      "Số lượng, vị trí giao và bản vẽ nếu có"
    ],
    "localSearchIntro": "Công trình cần tấm Poly lấy sáng tại Hiệp Phước, TP.HCM nên cung cấp loại tấm, độ dày, màu và kích thước mái che để kiểm tra quy cách phù hợp.",
    "relatedArticles": []
  },
  "phu-kien-ton-thep": {
    "buyingGuide": [
      "Chọn vít theo vật liệu xà gồ, chiều dài xuyên qua các lớp liên kết và môi trường sử dụng.",
      "Kiểm tra long đền, lớp phủ chống ăn mòn, loại keo và độ tương thích với bề mặt cần trám.",
      "Đối chiếu phụ kiện với cấu tạo mái, diềm, úp nóc, máng xối và vị trí xuyên mái."
    ],
    "quoteChecklist": [
      "Tên phụ kiện và mục đích sử dụng",
      "Kích thước, vật liệu hoặc mã hàng nếu có",
      "Số lượng và loại mái/vách đang thi công",
      "Địa chỉ giao hàng và thời gian cần"
    ],
    "localSearchIntro": "Để hỏi mua phụ kiện tôn thép tại Hiệp Phước, TP.HCM, hãy gửi hình ảnh hoặc tên phụ kiện, kích thước và số lượng để đối chiếu đúng loại.",
    "relatedArticles": [
      "cach-chon-ton-lop-mai-nha-phu-hop"
    ]
  }
};

for (const product of products) {
  Object.assign(product, productEditorial[product.slug]);
  product.relatedArticles = (product.relatedArticles ?? []).filter((article): article is string => typeof article === "string" && article.length > 0);
}

export function getProductBySlug(slug: string): ProductInfo | undefined {
  return products.find((product) => product.slug === slug);
}
