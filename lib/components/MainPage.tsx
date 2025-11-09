
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


export function MainPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto text-center">
            <SlideInText text="NHÀ MÁY TÔN TÂM ĐỨC CƯỜNG" />
            <p className="text-muted-foreground mb-8 mt-4 font-medium">
              Tiết kiệm chi phí, có sẵn hàng đa quy cách: tôn lạnh/tôn màu, thép hình, thép hộp, xà gồ C/Z… <br />Cắt theo yêu cầu, giao nhanh tận công trình.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                Về Chúng Tôi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" >
                Nhận Báo Giá Nhanh
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* <div className="mb-8">
            <h2 className="mb-2">Danh mục</h2>
            <p className="text-muted-foreground">
              Tìm đúng vật tư cho hạng mục của bạn
            </p>
          </div> */}
          <Marquee speed={80} pauseOnHover className="rounded-2xl">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                {...category}
                // onClick={() => onCategoryClick?.(category.title)}
              />
            ))}
          </Marquee>


        </div>
      </section>

      {/* Vintage Showcase */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">Lĩnh Vực</span>
            </div>
            <h2 className="mb-4 text-amber-900">
              Khám Phá Nguồn Hàng Đa Dạng
            </h2>
            <p className="text-muted-foreground mb-6">
              Đảm bảo chất lượng - Uy tín hàng đầu - Giá thành hợp lý
            </p>
            {/* <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white"
              onClick={onVintageClick}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Browse Vintage Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border-2 border-amber-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="mb-2 text-amber-900">Sản phẩm đã xác thực</h4>
              <p className="text-sm text-muted-foreground">
                Mỗi món đồ cổ điển đều được kiểm định về tính xác thực và giá trị lịch sử.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-amber-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="mb-2 text-amber-900">Thương hiệu doanh nghiệp</h4>
              <p className="text-sm text-muted-foreground">
                Hơn 20 năm kinh nghiệm trong ngành xây dựng và cung cấp vật tư chất lượng.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-amber-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="mb-2 text-amber-900">Giá trị đầu tư</h4>
              <p className="text-sm text-muted-foreground">
                Giá cả hợp lý, mang lại giá trị vượt trội cho mọi dự án xây dựng.
              </p>
            </div>
          </div>





        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <div>
              <h2 className="mb-2 text-2xl md:text-5xl font-bold" style={{ color: "#ff914d" }}>Sản Phẩm</h2>
              <p className="text-muted-foreground">
                Vật tư xây dựng chất lượng cao, đa dạng quy cách, giá cả hợp lý
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div>
              <div className="relative h-56 rounded-xl border-2 border-amber-200 overflow-hidden hover:shadow-lg transition mb-4">
                <Image
                  src="/images/collection1.png"   // đổi đúng path ảnh của bạn
                  alt=""                            // decorative
                  fill
                  className="object-cover"
                  aria-hidden
                  priority
                />

              </div>
              <p className="text-center font-bold text-2xl">Sắt - Thép - Xà Gồ</p>
            </div>

            {/* Card 2 */}
            <div>
              <div className="relative h-56 rounded-xl border-2 border-amber-200 overflow-hidden hover:shadow-lg transition mb-4">
                <Image
                  src="/images/collection2.png"
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden
                />
              </div>
              <p className="text-center font-bold text-2xl">Tôn</p>
            </div>


            {/* Card 3 */}
            <div>
              <div className="relative h-56 rounded-xl border-2 border-amber-200 overflow-hidden hover:shadow-lg transition mb-4">
                <Image
                  src="/images/collection3.png"
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden
                />
              </div>
              <p className="text-center font-bold text-2xl">Tôn Theo Yêu Cầu</p>
            </div>

          </div>

          <Divider
            variant="dashed"
            thickness={2}
            className="my-8"
            children={<span className="text-muted-foreground">Liên Hệ Ngay</span>}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                    src="/images/map.png"

                    alt="Bản đồ"
                    width={600}
                    height={600}
                    className="object-contain"
                  />
            </div>

            <div>
              <h3 className="mb-4 font-bold">Giờ làm việc</h3>
              <ul className="space-y-2 text-muted-foreground text-md">
                <li>
                  Thứ Hai - Thứ Sáu: 7:00 - 17:00 (7:00 AM - 5:00 PM)
                </li>
                <li>
                  Thứ Bảy - Chủ Nhật: 7:00 - 12:00 (7:00 AM - 12:00 PM)
                </li>
              </ul>
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
                <a href="https://zalo.me/0918279361" className="animate-(--animation-pulse) ">
                  <Image
                    src="/images/zalo.png"

                    alt="Zalo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </a>

                <a href="https://zalo.me/0933770378" className="animate-(--animation-pulse) delay-2000">
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

            <div className="flex gap-2 flex-col md:flex-row mt-2" >
              <h4>Địa chỉ: </h4>
              <div>

                <p className="font-semibold">413 Đường Nguyễn Văn Tạo, Xã Long Thới, Huyện Nhà Bè, Thành phố Hồ Chí Minh (Cũ)</p>
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
