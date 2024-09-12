/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Section from '../section'
import Container from '../container'
import { GoStopwatch } from 'react-icons/go'
import { IoDiamondOutline } from 'react-icons/io5'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules'

const Category = () => {
    const contentRefs = Array(6).fill(null).map(() => useRef<HTMLDivElement>(null))
    const tetAppleRef = useRef<HTMLHeadingElement>(null)
    const [showMore, setShowMore] = useState(Array(6).fill(false))

    const scrollToContent = (ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const renderCategoryButton = (text: string, index: number) => (
        <div className='py-2 px-5 md:px-10 bg-yellow-400 rounded-md cursor-pointer' onClick={() => scrollToContent(contentRefs[index])}>
            <span className='text-sm md:text-base font-semibold text-white'>{text}</span>
        </div>
    )

    const renderPrivilegeItem = (text: string, iconSrc: string, iconSize: string, onClick?: () => void) => (
        <div className='text-center py-2 px-5 md:py-4 md:px-10 bg-yellow-400 rounded-md relative w-[calc(20%-0.6rem)] min-w-[150px] cursor-pointer' onClick={onClick}>
            <div className='flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Image src={iconSrc} alt='icon-privilege' width={30} height={30} className={iconSize} />
            </div>
            <span className='text-sm md:text-sm font-semibold text-white line-clamp-3' dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    )

    const renderSwiperSlides = (startIndex: number, showMore: boolean) => (
        Array.from({ length: showMore ? 10 : 5 }).map((_, index) => (
            <div key={index + startIndex} className='bg-white rounded-lg shadow-md p-4 h-full flex flex-col justify-between transition-transform duration-1000 ease-in-out'>
                <div className='relative pb-40'>
                    <Image src={`/product.webp`} alt={`iPhone ${index + startIndex + 1}`} width={500} height={500} className='w-full h-full absolute top-0 left-0 object-cover rounded-md' />
                </div>
                <div>
                    <h3 className='text-lg font-semibold mt-2'>iPhone 16 Pro Max</h3>
                    <p className='text-red-500 font-bold text-xl'>29,990,000 VND</p>
                </div>
            </div>
        ))
    )

    const renderSwiper = (index: number) => (
        <div ref={contentRefs[index]} className='w-full flex flex-col gap-4'>
            <div className={`relative ${index === 2 ? 'pt-[calc(250/1250*100%)]' : 'pt-[calc(160/1250*100%)]'} w-full h-full`}>
                <Image src={`/content-0${index + 1}.png`} alt={`content-0${index + 1}`} width={1820} height={1200} className='w-full h-full absolute top-0 left-0 object-cover rounded-md' />
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                className='w-full'
                speed={1000}
                navigation={true}
                modules={[Navigation]}
            >
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <SwiperSlide>
                    <div className='grid grid-cols-2 xs:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                        {renderSwiperSlides(0, showMore[index])}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-2 xs:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                        {renderSwiperSlides(10, showMore[index])}
                    </div>
                </SwiperSlide>
            </Swiper>
            {!showMore[index] && (
                <button className='py-2 px-5 w-max mx-auto bg-yellow-400 rounded-md text-white font-semibold' onClick={() => setShowMore(prev => {
                    const newShowMore = [...prev]
                    newShowMore[index] = true
                    return newShowMore
                })}>
                    Xem thêm
                </button>
            )}
        </div>
    )

    return (
        <div>
            <Section>
                <div className='bg-[#b22e2d] py-2 md:py-5 lg:py-7 mb-5 md:mb-8 lg:mb-10'>
                    <Container>
                        <div className='flex items-center justify-center'>
                            <h3 className='text-white text-xl md:text-2xl lg:text-3xl font-semibold'>Chương trình khuyến mãi</h3>
                        </div>
                    </Container>
                </div>
                <Container>
                    <div className='flex flex-col gap-4 md:gap-7 lg:gap-10 items-center'>
                        <div className='flex items-center flex-wrap gap-3'>
                            <div className='py-2 pl-5 md:pl-10 pr-2 bg-red-500 rounded-md relative cursor-pointer' onClick={() => scrollToContent(contentRefs[0])}>
                                <div className='flex items-center justify-center py-2 px-3 bg-yellow-400 rounded-md absolute top-1/2 -left-2 -translate-y-1/2'>
                                    <GoStopwatch className='text-xl text-white' />
                                </div>
                                <div className='absolute -top-2 -left-2 -translate-y-1/2 text-yellow-400 bg-red-500 p-1 rounded-md text-[8px]'>09H - 12H</div>
                                <span className='text-sm md:text-base font-semibold text-yellow-400 ml-5 md:ml-0'>Giờ vàng giá sốc</span>
                            </div>
                            {['iPhone', 'iPad', 'Macbook', 'Watch', 'AirPods | PK'].map((item, index) => renderCategoryButton(item, index + 1))}
                        </div>
                        <div className='flex gap-2 text-yellow-400'>
                            <IoDiamondOutline className='text-5xl' />
                            <h3 className='text-xl md:text-2xl lg:text-3xl font-medium text-center w-fit'>"5 ĐẶC QUYỀN TỪ MUA HÀNG TẠI BẠCH LONG MOBILE</h3>
                        </div>
                        <div className='flex items-center flex-wrap justify-center gap-3'>
                            {[
                                { text: 'Vòng quay may mắn Lì xì Tết Apple', icon: '/lucky.png', iconSize: 'size-10', onClick: () => scrollToContent(tetAppleRef) },
                                { text: 'Trả góp <br /> lãi suất 0%', icon: '/0.png', iconSize: 'size-10' },
                                { text: 'Thu cũ <br /> đổi mới', icon: '/trade.png', iconSize: 'size-10' },
                                { text: 'ngày đổi trả <br /> miễn phí', icon: '/60days.png', iconSize: 'size-10' },
                                { text: 'Nhân đôi bảo hành toàn diện', icon: '/shiel.png', iconSize: 'size-10' }
                            ].map(item => renderPrivilegeItem(item.text, item.icon, item.iconSize, item.onClick))}
                        </div>
                        {Array.from({ length: 6 }).map((_, index) => renderSwiper(index))}
                        <div className="space-y-6 py-20 text-gray-800">
                            <h2 id="tet-apple" ref={tetAppleRef} className="text-3xl font-bold text-center text-red-600">THỂ LỆ</h2>
                            <p className="text-xl font-semibold text-center text-yellow-500">THỂ LỆ MUA SẮM</p>

                            <div className="space-y-2">
                                <p className="font-medium">- Thời gian bắt đầu chương trình: Từ ngày 03 - 30/08/2024.</p>
                                <p className="font-medium">- Chi nhánh áp dụng: Áp dụng toàn bộ hệ thống Bạch Long Mobile.</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-red-500">1/ 18 DEAL SHOCK. MEGA SALE MỪNG SINH NHẬT</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Mừng sinh nhật Bạch Long Mobile 18 năm, sẽ có 18 sản phẩm giá cực shock được tung ra để chiêu đãi khách hàng.</li>
                                    <li>Cùng với hàng loạt sản phẩm hot sẽ được sale tưng bừng mừng sinh nhật.</li>
                                    <li>Số lượng sản phẩm có hạn, có thể thay đổi theo từng thời điểm chương trình.</li>
                                    <li>Được áp dụng tất cả các chương trình khuyến mãi hiện đang có tại hệ thống.</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-red-500">2/ MỪNG SINH NHẬT: 100% MUA LÀ CÓ QUÀ.</h3>
                                <p>Tất cả các khách hàng đến tham quan mua sắm trong chương trình với tổng hóa đơn từ 5.000.000 sẽ nhận được 1 phần quà sinh nhật cùng với Bạch Long Mobile:</p>
                                <p className="font-medium">Tặng ngay 1 nón bảo hiểm cao cấp kỷ niệm Bạch Long Mobile 18 năm.</p>
                                <p className="italic">Số lượng quà tặng có hạn, quý khách hàng hãy nhanh chân đến Bạch Long nhận quà nhé.</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-red-500">3/ MỪNG SINH NHẬT: MIỄN PHÍ DI CHUYỂN ĐẾN BẠCH LONG MUA SẮM.</h3>
                                <p>Duy nhất và độc quyền trong sự kiện sinh nhật lần này, tất cả các khách hàng trong nội thành TP.HCM đến tham quan mua sắm tại hệ thống Bạch Long Mobile di chuyển bằng các hình thức xe công nghệ có hóa đơn thể hiện lộ trình đến cửa hàng Bạch Long Mobile gần nhất, sẽ nhận được ưu đãi:</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Hoàn 100% chi phí di chuyển cho khách hàng (tối đã 300.000Đ)</li>
                                    <li>Áp dụng hoàn tiền cho khách hàng có tổng hóa đơn mua sắm từ 5.000.000</li>
                                    <li>Quý khách vui lòng cung cấp chứng từ hóa đơn di chuyển có thể hiện điểm đến là Bạch Long Mobile gần nhất để được hoàn tiền.</li>
                                    <li>Mỗi khách hàng chỉ được hoàn tiền 1 lần trong suốt thời gian chương trình diễn ra.</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-red-500">4/ MỪNG SINH NHẬT: TRÚNG SIÊU PHẨM GẬP VÀ TRẠM SẠC CAO CẤP</h3>
                                <p>Duy nhất và độc quyền trong sự kiện sinh nhật lần này, tất cả các khách hàng đến tham quan mua sắm tại hệ thống Bạch Long Mobile có hóa đơn theo thể lệ sau đây:</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Hóa đơn mua MÁY từ 5.000.000 {'=>'} Nhận 1 Phiếu Hẹn tham gia vòng quay vật lý trúng thưởng Galaxy Z Flip6 256GB chính hãng.</li>
                                    <li>Hóa đơn mua PHỤ KIỆN từ 300.000 {'=>'} Nhận 1 Phiếu Hẹn tham gia vòng quay vật lý trúng thưởng Trạm sạc Pisen chính hãng.</li>
                                    <li>Mỗi số điện thoại khách hàng chỉ được tham gia 1 lần cho 1 giải thưởng.</li>
                                    <li>Số điện thoại tham gia phải là chính chủ và có mặt tại buổi quay thưởng.</li>
                                    <li>Thời gian diễn ra Vòng quay vật lý: 09h30, ngày 31/08/2024 tại Bạch Long Mobile Trần Hưng Đạo Q.1 TP.HCM</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-red-500">5/ DỊCH VỤ HOÀN HẢO: THU CŨ TRỢ GIÁ 5.000.000 | TRẢ GÓP SIÊU TỐC.</h3>
                                <p className="font-medium">• Đến với hệ thống Bạch Long Mobile, quý khách hàng còn sẽ được tận hưởng các dịch vụ giá trị tiện ích cao cấp, giúp việc sở hữu siêu phẩm của quý khách trở nên dễ dàng hơn:</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>TRADE-IN THU CŨ ĐỔI MỚI GIÁ CAO NHẤT trợ giá đến 5.000.000</li>
                                    <li>TRẢ GÓP SIÊU TỐC. LÃI SUẤT 0% nhận máy nhanh. gọn. lẹ</li>
                                    <li>Trả góp Homepaylater: Giảm thêm 1.250.000</li>
                                    <li>Trả góp Kredivo: Giảm thêm 700.000</li>
                                    <li>Trả góp mPos: Giảm thêm 500.000</li>
                                    <li>Trả góp Muadee: Giảm thêm 150.000</li>
                                    <li>Thanh toán chuyển khoản 100%: Giảm thêm 300.000</li>
                                    <li>Giao hàng tận nơi miễn phí</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    )
}

export default Category