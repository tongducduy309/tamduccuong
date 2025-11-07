
import { CategoryCard } from "./CategoryCard";
import { Button } from "./ui/button";
import Image from "next/image";
import {
    Layers,
    Home,
    ArrowRight,
    Sparkles,
    Bolt,
    Boxes,
    Building2,
    PaintBucket,
    SunSnow,
    Award,
    PhoneCall,
} from "lucide-react";
import { SlideInText } from "./slideIn";
import Marquee from "./marquee";
import Divider from "./ui/divider";

const categories = [
    { icon: Layers, title: "Tôn Lạnh / Tôn Kẽm", subtitle: "cuộn, tấm – nhiều độ dày" },
    { icon: PaintBucket, title: "Tôn Màu", subtitle: "AZ/Z, bảng màu đa dạng" },
    { icon: Boxes, title: "Thép Hộp", subtitle: "đa kích thước, mác thép" },
    { icon: Building2, title: "Thép Hình (I / H / U / V)", subtitle: "tiêu chuẩn JIS/ASTM" },
    { icon: SunSnow, title: "Chống Nóng", subtitle: "mát mẻ, sạch sẽ" },
    { icon: Bolt, title: "Phụ Kiện", subtitle: "vít bắn tôn, keo" },

];


export function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto text-center">
                        <SlideInText text="LIÊN HỆ" />
                        <p className="text-muted-foreground mb-8 mt-4 font-medium">
                            Liên hệ với chúng tôi để được tư vấn và hỗ trợ nhanh chóng!
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button onClick={() => (window.location.href = "tel:0933770378")}>Gọi Ngay <PhoneCall /></Button>
                        </div>
                    </div>
                </div>
            </section>





            {/* Featured Listings */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">



                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="flex flex-col items-center gap-4">
                            <Image
                                src="/images/map.png"

                                alt="Bản đồ"
                                width={600}
                                height={600}
                                className="object-contain"
                            />
                            <Button onClick={() => (window.location.href = "https://maps.app.goo.gl/hN7QZhWvf8tazzkR6")}>
                                Tìm Đường <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                        <div className="col-span-2">
                            <h3 className="mb-4 font-bold">Giờ làm việc</h3>
                            <ul className="space-y-2 text-muted-foreground text-md">
                                <li>
                                    Thứ Hai - Thứ Sáu: 7:00 - 17:00 (7:00 AM - 5:00 PM)
                                </li>
                                <li>
                                    Thứ Bảy - Chủ Nhật: 7:00 - 12:00 (7:00 AM - 12:00 PM)
                                </li>
                            </ul>

                            <Divider />

                            <h4 className="font-semibold">Mã số thuế: <span className="font-normal">0305971408</span></h4>
                            <h4 className="font-semibold">Di động: <a className="font-normal" href="tel:0918279361">0918.279.361</a> | <a className="font-normal" href="tel:0933770378">0933.770.378</a></h4>

                            <div className="flex gap-2 flex-col md:flex-row mt-2">
                                <h4 className="font-semibold whitespace-nowrap">Địa chỉ: </h4>
                                <div>

                                    <p>413 Đường Nguyễn Văn Tạo, Xã Long Thới, Huyện Nhà Bè, Thành phố Hồ Chí Minh (Cũ)</p>
                                    <p>413 Đường Nguyễn Văn Tạo, Xã Hiệp Phước, Thành phố Hồ Chí Minh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>



            {/* CTA Section */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4">
                    <div className="mx-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-bold text-lg">CÔNG TY TNHH MỘT THÀNH VIÊN DỊCH VỤ TÔN THÉP TÂM ĐỨC CƯỜNG</h2>
                            <div className="flex gap-4">
                                <a href="https://zalo.me/0918279361">
                                    <Image
                                        src="/images/zalo.png"

                                        alt="Zalo"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </a>

                                <a href="https://zalo.me/0933770378">
                                    <Image
                                        src="/images/zalo.png"

                                        alt="Zalo"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </a>
                            </div>
                        </div>

                        <h4>Mã số thuế: <span className="font-semibold">0305971408</span></h4>
                        <h4>Di động: <a className="font-semibold" href="tel:0918279361">0918.279.361</a> | <a className="font-semibold" href="tel:0933770378">0933.770.378</a></h4>

                        <div className="flex gap-2 flex-col md:flex-row mt-2">
                            <h4>Địa chỉ: </h4>
                            <div>

                                <span className="font-semibold">413 Đường Nguyễn Văn Tạo, Xã Long Thới, Huyện Nhà Bè, Thành phố Hồ Chí Minh (Cũ)</span>
                                <p className="font-semibold">413 Đường Nguyễn Văn Tạo, Xã Hiệp Phước, Thành phố Hồ Chí Minh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-muted/50 py-12 border-t">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h4 className="mb-4">Thông Tin</h4>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                <li>
                                    <a href="#" className="hover:text-foreground">
                                        Về Chúng Tôi
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4">Dịch vụ</h4>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                <li>
                                    <a href="#" className="hover:text-foreground">
                                        Nhận Bảng Báo Giá
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4">Hỗ Trợ</h4>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                <li>
                                    <a href="#" className="hover:text-foreground">
                                        Liên Hệ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-foreground">
                                        Câu hỏi thường gặp
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center pt-8 border-t border-border">
                        <p className="text-muted-foreground text-sm">
                            © 2025 TDC. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
