import React from 'react'
import '../../styles/footer.css'
import logo1 from '../../assets/newimage/Group 6990.png'
import logo2 from '../../assets/newimage/_WhatsApp.png'
import logo3 from '../../assets/newimage/_Telegram.png'
import logo4 from '../../assets/newimage/_Linkedin.png'
import img1 from '../../assets/newimage/Group 5914.png'
import img2 from '../../assets/newimage/Group 5913.png'
import asan1 from '../../assets/newimage/Group 7105.png'

import {HiOutlineMail,HiOutlineLocationMarker} from 'react-icons/hi'
import {BiPhoneCall} from 'react-icons/bi'
function Footer() {
    
  return (
    <div className='footer'>       
        {/*part 1 */}
        <div className='footer1'>
            {/*part1  */}
            <div className='footer_1'>
            <div className='footer_1_left'>
            <button className='footer_1_btn'>ثبت</button>
                <div className='footer_1_inputall'>
                    <HiOutlineMail className='footer_1_inputall_icon'/>
                    |
                <input type="text" placeholder=' آدرس ایمیل' className='footer_1_input'/>
                </div>
            </div>
            <div className='footer_1_right'>
                <p className='footer_1_right_p'>با ثبت ایمیل از آخرین تخفیف ها با خبر شوید</p>
                </div>

            </div>
            {/*part2 */}
            <div className='footer_2'>
                <div className='footer_logo'>
                    <span className='footer_logo_span'>
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                        <img src={logo4} alt="" />

                    </span>
                </div>
                <div className='footer_dec'>
                    <p className='footer_dec_p'>ما را در شبکه های اجتماعی دنبال کنید</p>
                </div>
            </div>
            {/*part 3 */}
            <div className='ending_3'>
                {/* */}
                <div className='ending_3_1'>
                    <p className='ending_3_1_p'>نماد اعتماد آسان مارکت</p>
                    <div className='ending_3_1_img'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    </div>
                    
                </div>
                {/* */}
                <div className='ending_3_3'>
                    <p className='ending_3_3_p'>راهنمای خرید از آسان مارکت</p>
                    <p className='ending_3_3_pp'>نحوه ثبت سفارش
</p>
                    <p className='ending_3_3_pp'>رویه ارسال سفارش
</p>
                    <p className='ending_3_3_pp'>شیوه‌های پرداخت</p>


                </div>
                {/* */}
                <div className='ending_3_2'>
                <p className='ending_3_2_p'>خدمات مشتریان</p>
                <p className='ending_3_2_pp'>تماس با ما</p>
                <p className='ending_3_2_pp'>درباره ما</p>
                <p className='ending_3_2_pp'>فروشگاه</p>
                <p className='ending_3_2_pp'>رسانه ها</p>


                </div>
            </div>
        </div>
        {/*part2 */}
        <div className='footer2'>
            <div className='footer_img'>
                <img src={asan1} alt="" />
                
            </div>
            <p className='footer_dec'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت<br/> چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه<br/> روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط <br/>فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود <br/>ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد<br/> گذشته حال و آینده</p>
            <p className='footer_call'><BiPhoneCall className='icon_call'/>
            تلفن: 67341
            </p>
             
            <p className='footer_code'><HiOutlineMail/>
                کدپستی: 1136834843</p>
            <p className='footer_location'><HiOutlineLocationMarker/>
                تهران، میدان امام خمینی، خیابان فردوسی، خیابان سرهنگ<br/> سخائی
نبش کوچه بهنیا، پلاک40، طبقه چهارم، واحد12</p>
        </div>
    </div>
  )
}

export default Footer