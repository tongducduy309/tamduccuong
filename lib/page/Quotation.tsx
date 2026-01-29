
"use client"

import Layout from "../layouts/(layout)/layout";




export function QuotationPage() {
    return (
        <Layout>
            <ul className="space-y-2 list-disc list-inside text-base text-zinc-700 dark:text-zinc-300">
            <li>Vui lòng liên hệ với chúng tôi (<><a className="text-blue-500" href="tel:0933770378">0933.770.378</a></>) để nhận bảng báo giá chi tiết và ưu đãi tốt nhất cho các sản phẩm thép và vật liệu xây dựng mà bạn quan tâm.</li>
            <li>Chúng tôi cam kết cung cấp dịch vụ khách hàng xuất sắc và hỗ trợ bạn trong việc lựa chọn sản phẩm phù hợp với nhu cầu của bạn.</li>
            <li>Hãy gọi điện hoặc gửi email (<><a className="text-blue-500" href="mailto:tongducduyy@gmail.com">tongducduyy@gmail.com</a></>) cho chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá nhanh chóng!</li>
        </ul>
        </Layout>
    );
}
