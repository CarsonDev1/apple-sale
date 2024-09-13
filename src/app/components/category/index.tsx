/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Section from '../section'
import Container from '../container'
import { GoCheckCircle, GoStopwatch } from 'react-icons/go'
import { IoDiamondOutline } from 'react-icons/io5'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules'
import Link from 'next/link'

const Category = () => {
    const contentRefs = Array(6).fill(null).map(() => useRef<HTMLDivElement>(null))
    const tetAppleRef = useRef<HTMLHeadingElement>(null)
    const [showMore, setShowMore] = useState(Array(6).fill(false))
    const [activeTab, setActiveTab] = useState(0)
    const [loading, setLoading] = useState(false)

    const scrollToContent = (ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const renderCategoryButton = (text: string, index: number) => (
        <div className='py-2 px-5 md:px-10 bg-yellow-400 rounded-md cursor-pointer text-center' onClick={() => scrollToContent(contentRefs[index])}>
            <span className='text-sm md:text-base font-semibold text-white'>{text}</span>
        </div>
    )

    const renderPrivilegeItem = (text: string, iconSrc: string, iconSize: string, onClick?: () => void) => (
        <div className='text-center py-2 px-5 md:py-4 md:px-10 bg-yellow-400 rounded-md relative w-[calc(20%-0.6rem)] min-w-[150px] cursor-pointer' onClick={onClick}>
            <div className='flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Image src={iconSrc} alt='icon-privilege' width={30} height={30} className={iconSize} />
            </div>
            <span className='text-sm md:text-sm font-semibold text-white line-clamp-2 md:line-clamp-3' dangerouslySetInnerHTML={{ __html: text }} />
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
            {index === 0 && (
                <div className='mx-auto'>
                    <div className="flex flex-wrap items-center gap-4">
                        {['iPhone', 'iPad', 'Macbook', 'Watch', 'AirPods | PK', 'Máy 99%'].map((item, tabIndex) => (
                            <button
                                key={tabIndex}
                                className={`py-2 px-4 rounded-md ${activeTab === tabIndex ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-800'}`}
                                onClick={() => {
                                    setLoading(true);
                                    setTimeout(() => {
                                        setActiveTab(tabIndex);
                                        setLoading(false);
                                    }, 500);
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="w-16 h-16 border-4 border-t-4 border-t-yellow-400 border-gray-200 rounded-full animate-spin"></div>
                </div>
            ) : (
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
                            {renderSwiperSlides(activeTab * 10, showMore[index])}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='grid grid-cols-2 xs:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                            {renderSwiperSlides(activeTab * 10 + 10, showMore[index])}
                        </div>
                    </SwiperSlide>
                </Swiper>
            )}
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
                                    <Image src={'/clock.png'} alt='icon-lucky' width={30} height={30} className='size-4 md:size-5' />
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
                            <div className='text-center py-2 px-5 md:py-4 md:px-10 bg-yellow-400 rounded-md relative w-[calc(20%-0.6rem)] min-w-[150px] cursor-pointer' onClick={() => scrollToContent(tetAppleRef)}>
                                <div className='flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                    <Image src={'/lucky.png'} alt='icon-privilege' width={30} height={30} className='size-6 md:size-10' />
                                </div>
                                <span className='text-sm md:text-sm font-semibold text-white line-clamp-2 md:line-clamp-3' dangerouslySetInnerHTML={{ __html: 'Vòng quay may mắn Lì xì Tết Apple' }} />
                            </div>
                            <div className='text-center py-2 px-5 md:py-4 md:px-10 bg-yellow-400 rounded-md relative w-[calc(20%-0.6rem)] min-w-[150px] cursor-pointer'>
                                <Link href='https://bachlongmobile.com/tra-gop-0-lai-suat/'>
                                    <div className='flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                        <Image src={'/0.png'} alt='icon-privilege' width={30} height={30} className='size-6 md:size-10' />
                                    </div>
                                    <span className='text-sm md:text-sm font-semibold text-white line-clamp-2 md:line-clamp-3' dangerouslySetInnerHTML={{ __html: 'Trả góp <br /> lãi suất 0%' }} />
                                </Link>
                            </div>
                            <div className='text-center py-2 px-5 md:py-4 md:px-10 bg-yellow-400 rounded-md relative w-[calc(20%-0.6rem)] min-w-[150px] cursor-pointer'>
                                <Link href='https://bachlongmobile.com/renew/'>
                                    <div className='flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                        <Image src={'/trade.png'} alt='icon-privilege' width={30} height={30} className='size-6 md:size-10' />
                                    </div>
                                    <span className='text-sm md:text-sm font-semibold text-white line-clamp-2 md:line-clamp-3' dangerouslySetInnerHTML={{ __html: 'Thu cũ <br /> đổi mới' }} />
                                </Link>
                            </div>
                            <div className='text-center py-2 px-5 md:py-4 md:px-10 bg-yellow-400 rounded-md relative w-[calc(20%-0.6rem)] min-w-[150px] cursor-pointer'>
                                <Link href='https://bachlongmobile.com/bao-hanh-toan-dien-2024-loi-doi-moi/'>
                                    <div className='flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                        <Image src={'/60days.png'} alt='icon-privilege' width={30} height={30} className='size-6 md:size-10' />
                                    </div>
                                    <span className='text-sm md:text-sm font-semibold text-white line-clamp-2 md:line-clamp-3' dangerouslySetInnerHTML={{ __html: 'ngày đổi trả <br /> miễn phí' }} />
                                </Link>
                            </div>
                            <div className='text-center py-2 px-5 md:py-4 md:px-10 bg-yellow-400 rounded-md relative w-[calc(20%-0.6rem)] min-w-[150px] cursor-pointer'>
                                <Link href='#'>
                                    <div className='flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                        <Image src={'/shiel.png'} alt='icon-privilege' width={30} height={30} className='size-6 md:size-10' />
                                    </div>
                                    <span className='text-sm md:text-sm font-semibold text-white line-clamp-2 md:line-clamp-3' dangerouslySetInnerHTML={{ __html: 'Nhân đôi bảo hành toàn diện' }} />
                                </Link>
                            </div>
                        </div>
                        {Array.from({ length: 6 }).map((_, index) => renderSwiper(index))}
                        <div className="space-y-6 py-20 text-gray-800">
                            <h2 id="tet-apple" ref={tetAppleRef} className="text-3xl font-bold text-center text-red-600">TẾT APPLE - TẾT LỚN CHƠI LỚN - MÁY TRAO TAY NHẬN QUÀ NGAY</h2>
                            <p className="font-medium">- Thời gian bắt đầu chương trình:  Từ ngày 15/09 - 31/10/2024.</p>
                            <p className="font-medium">- Chi nhánh áp dụng: Áp dụng toàn bộ hệ thống Bạch Long Mobile.</p>
                            <h3 className="text-2xl font-bold text-red-500">1/ TẾT LỚN CHƠI LỚN – MÁY TRAO TAY NHẬN QUÀ NGAY</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li className='mb-1'>Mừng tết Apple ra mắt iPhone 16 Series, để lại thông tin đăng ký <Link className='underline text-blue-500 decoration-blue-500' href='https://bachlongmobile.com/iphone-16-series'>tại đây</Link> để được hỗ trợ nhanh nhất</li>
                                <li>Giảm giá tất cả các sản phẩm Apple MỚI - CŨ lên đến 50%</li>
                                <li className='flex flex-col gap-2'><div className='flex items-center gap-2'><GoCheckCircle className='text-green-500' /><span>Với hóa đơn mua iPHONE | iPAD | MACBOOK | WATCH từ 5.000.000 Đồng</span></div> <span className='font-medium text-red-500'>{'=>'} Tặng ngay 1 mũ bảo hiểm và 1 Phiếu hẹn tham gia vòng quay vật lý trúng thưởng iPhone 16 CHÍNH HÃNG trị giá hơn 21 TRIỆU ĐỒNG.</span></li>
                                <li className='flex flex-col gap-2'><div className='flex items-center gap-2'><GoCheckCircle className='text-green-500' /><span>Hóa đơn mua PHỤ KIỆN APPLE từ 300.000 Đồng</span></div> <span className='font-medium text-red-500'>{'=>'} Nhận 1 Phiếu hẹn tham gia vòng quay vật lý trúng thưởng Trạm sạc Pisen chính hãng trị giá 5 TRIỆU ĐỒNG.</span></li>
                                <li>Tất cả các khách hàng tham gia vòng quay may mắn đều trúng quà 100%</li>
                                <li>Thời gian diễn ra Vòng quay vật lý: 09h30, ngày 02/11/2024 tại Bạch Long Mobile, 251 - 253 Trần Hưng Đạo Q.1 TP.HCM</li>
                                <li className='flex flex-col gap-2'><div className='flex items-center gap-2'><GoCheckCircle className='text-green-500' /><span>Hoàn 100% chi phí di chuyển cho khách hàng trong nội thành TP.HCM đến tham quan mua sắm tại hệ thống Bạch Long Mobile bằng các hình thức xe công nghệ (tối đa 300.000Đ)</span></div></li>
                            </ul>
                            <h3 className="text-2xl font-bold text-red-500">2/ GIÁ RẺ MUỐN XỈUUU – NGÀNH HÀNG APPLE GIẢM ĐẾN 50%</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Bạch Long tung hàng loạt khuyến mãi như:</li>
                                <li>Giờ vàng giá sốc gồm 25 sản phẩm Apple hàng tuần giảm đến 50% và lì xì lên đến 300.000đ</li>
                                <li>Giảm đến 30% cho các sản phẩm Apple MỚI và lì xì lên đến 300.000đ khi mua iPhone | iPad | Macbook | Apple Watch | AirPods</li>
                                <li>Giảm đến 50% cho iPhone Likenew và lì xì lên đến 300.000đ</li>
                                <li>Phụ kiện Apple giảm đến 70%</li>
                                <li>Mua 1 tặng 1: Khi mua cường lực màn hình, ốp lưng,… sẽ được tặng 1 Camera Lens trị giá 350.000đ</li>
                                <li>Combo phụ kiện chính hãng giảm đến 50%</li>
                                <li>Combo 1: Ốp lưng và Cường lực chính hãng giá chỉ 640.000đ (Giá gốc 1.140.000đ)</li>
                                <li>Combo 2: Cường lực và Cốc sạc chính hãng giá chỉ 880.000đ (Giá gốc 1.410.000đ)</li>
                                <li>Combo 3: Ốp lưng, Cường lực và Camera lens chính hãng giá chỉ 890.000đ (Giá gốc 1.650.000đ)</li>
                                <li>Combo 4: Ốp lưng, Cường, Camera lens và Cốc sạc chính hãng giá chỉ 1.380.000đ (Giá gốc 2.470.000đ)</li>
                            </ul>
                            <h3 className="text-2xl font-bold text-red-500">3/ 5 ĐẶC QUYỀN KHI MUA HÀNG TẠI BẠCH LONG MOBILE.</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Vòng quay may mắn – Lì xì Tết Apple (Danh sách quà tặng liên hệ tại shop) //có gán link sau này</li>
                                <li>Trả góp siêu tốc với lãi suất 0% | 0% phụ phí | 0% lợi nhuận //có gán link sau này</li>
                                <li>Thu cũ đổi mới trợ giá đến 16.000.000 //có gán link sau này</li>
                                <li>60 Ngày đổi trả miễn phí //có gán link sau này</li>
                                <li>Nhân đôi (X2) bảo hành toàn diện //có gán link sau này</li>
                            </ul>
                            <h3 className="text-2xl font-bold text-red-500">4/ CÁC DỊCH VỤ ƯU ĐÃI THANH TOÁN, TRẢ GÓP, HOÀN TIỀN,GIAO HÀNG.</h3>
                            <p>Đến với hệ thống Bạch Long Mobile, quý khách hàng còn sẽ được tận hưởng các dịch vụ giá trị tiện ích cao cấp, giúp việc sở hữu siêu phẩm của quý khách trở nên dễ dàng hơn:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Trả góp HD Saison | Mcredit | Home credit | Shinhang | Homepaylater | Kredivo | mPos | Muadee : Giảm thêm đến 1.000.000** <Link className='underline text-blue-500 decoration-blue-500' href='https://bachlongmobile.com/promotion/'>tại đây</Link></li>
                                <li>Hoàn tiền 300K khi mua kèm BHTD + chuyển khoản 100% giá trị (áp dụng sản phẩm từ 15 triệu trở lên) //có gán link sau này</li>
                                <li>Cà thẻ MIỄN PHÍ 100% với Visa, MasterCard //có gán link sau này</li>
                                <li>Giao hàng Online tận nhà MIỄN PHÍ 100% cước vận chuyển //có gán link sau này</li>
                            </ul>
                            <p className="text-center font-bold">TIN KHUYẾN MÃI TỪ BẠCH LONG MOBILE  - HỆ THỐNG UỶ QUYỀN CHÍNH HÃNG APPLE</p>
                            <p className="text-center">***Mọi chi tiết thắc mắc  xin quý khách liên hệ: 1900.63.64.69 - 1900.63.69.81</p>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    )
}

export default Category