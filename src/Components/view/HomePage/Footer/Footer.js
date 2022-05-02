import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import sabt from '../../../../assets/footer/sabt.jpg'
import enemad from '../../../../assets/footer/enamad.jpg'
import apple from '../../../../assets/footer/apple.svg'
import laptop from '../../../../assets/footer/laptop.svg'
import android from '../../../../assets/footer/android.svg'
import {Button} from "@mui/material";
const Footer = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Box sx={{backgroundColor: '#f0f0f0', display: 'flex'}}>
                <Box>
                    <Typography>فیدیبو</Typography>
                    <ul>
                        <li> درباره ما</li>
                        <li>ورود ناشران</li>
                        <li> تماس با ما</li>
                        <li> همکاری با ما</li>
                        <li> وبلاگ</li>
                        <li> رصد</li>
                        <li> راهنما</li>
                        <li> RSS کتاب ها</li>
                        <li>شرایط استفاده</li>
                        <li>حریم خصوصی</li>
                    </ul>
                </Box>
                <Box>
                    <Typography>کتاب‌های پیشنهادی</Typography>
                    <ul>
                        <li> بهترین سال زندگی تو</li>
                        <li>کتاب تختت را مرتب کن</li>
                        <li> مردی به نام اوه</li>
                        <li>چهار اثر فلورانس اسکاول شین</li>
                        <li> اثر مرکب</li>
                        <li> ملت عشق</li>
                        <li> کتاب شدن</li>
                        <li> نیمه تاریک وجود‌</li>
                        <li>کتاب صبح جادویی</li>
                        <li>کتاب صوتی کیمیاگر</li>
                        <li> کتاب شب های روشن</li>
                        <li>صد سال تنهایی</li>
                        <li> بیشعوری</li>
                    </ul>
                </Box>
                <Box>
                    <Typography>دسته‌بندی پیشنهادی</Typography>
                    <ul>
                        <li>کتاب های دانشگاهی</li>
                        <li>کتاب های نوجوان</li>
                        <li>زندگی‌نامه، سفرنامه و خاطرات</li>
                        <li>کتاب های کودک</li>
                        <li> کتاب های آموزشی</li>
                        <li> کتاب های رایگان</li>
                        <li> کتاب های تاریخ</li>
                        <li> کتاب های سبک زندگی</li>
                        <li> کتاب تبلیغات و بازاریابی</li>
                    </ul>
                </Box>
                <Box>
                    <Typography>اپلیکیشن فیدیبو</Typography>
                    <Box>
                        <img width={'50px'} src={apple}/>
                        <img width={'50px'}src={android}/>
                        <img width={'50px'} src={laptop}/>
                        <Button>نصب اپلیکیشن فیدیبو</Button>
                    </Box>
                    <Box></Box>
                    <Box></Box>
                </Box>
            </Box>
            <Box sx={{backgroundColor: '#cfcfcf', display: 'flex', justifyContent: "space-evenly"}}>
                <Typography>

                    <Typography> فیدیبو بزرگترین سامانه خرید کتاب الکترونیک، کتاب صوتی و مجله در ایران</Typography>

                    فیدیبو می‌کوشد با گستره‌ای از کتاب‌ها و مجلات متنوع برای طیف وسیعی از کاربران تجربه فوق‌العاده
                    خریدکتاب و خواندن آن در دستگاه‌های هوشمند را فراهم کند.در فیدیبو با خرید کتاب از بهترین ناشران
                    ایرانی در موضوعات مختلف، کاربران می‌توانند در اپلیکیشن کتابخانه‌ای‌ شخصی برای خود بسازند و از
                    امکانات منحصر به فرد آن استفاده کنند. برای تیم فیدیبو هدف خرید کتاب نیست بلکه ایجاد محیطی بری ارتباط
                    بیشتر اهالی کتاب است.شایان ذکر است که فیدیبو بعد از خرید کتاب، با تیم پشتیبانی همیشه پاسخگوی کاربران
                    محترم خواهد بود. با دانلود هزاران کتاب صوتی، کتاب دانشگاهی، شعر عاشقانه، رمان عاشقانه ، مادر و کودک
                    و پادکست از فیدیبو، خواندن کتاب را به گونه ای متفاوت تجربه کنیم.
                </Typography>
                <img src={sabt}/>
                <img src={enemad}/>
            </Box>
            <Box sx={{backgroundColor: '#616161'}}><Typography textAlign={"center"}>© کلیه حقوق
                این وب‌سایت متعلق به فیدیبو می‌باشد.</Typography></Box>
        </Box>
    );
};

export default Footer;