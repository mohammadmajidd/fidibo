import misagh from '../../../../../../assets/weekBestSeller/4misagh.jpg'
import atom from '../../../../../../assets/weekBestSeller/atom.jpg'
import zehn from '../../../../../../assets/weekBestSeller/zehn.webp'
import father from '../../../../../../assets/weekBestSeller/father.jpg'
import good from '../../../../../../assets/weekBestSeller/good.jpg'
import maghazeh from '../../../../../../assets/weekBestSeller/maghaze.jpg'
import dobare from '../../../../../../assets/weekBestSeller/dobare.jpg'
import hafeze from '../../../../../../assets/weekBestSeller/hafeze.jpg'
import sotimorakab from '../../../../../../assets/weekBestSeller/sotimorakab.jpg'
import adab from '../../../../../../assets/weekBestSeller/adab.jpg'
import shokr from '../../../../../../assets/weekBestSeller/shokr.jpg'
import theory from '../../../../../../assets/weekBestSeller/theory.jpg'
import babel from '../../../../../../assets/weekBestSeller/babel.jpg'
import mojeze from '../../../../../../assets/weekBestSeller/mojeze.jpg'
import pool from '../../../../../../assets/weekBestSeller/pool.jpg'
import akhbar from '../../../../../../assets/weekBestSeller/akhbar.jpg'
import adat from '../../../../../../assets/weekBestSeller/adat.jpg'
import shafaf from '../../../../../../assets/weekBestSeller/shafaf.jpg'

export const idGenerator = () => {
    return Math.floor(Math.random() * 104)
}
const toPersian = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price)
}
export const weeklyBestsellersBooks = [
    {
        id: idGenerator(),
        imageSrc: misagh,
        title: 'کتاب صوتی چهار میثاق',
        price: toPersian(28000),
        isPodcast:true,
        fidiPlus: false,
        author: 'دون ميگوئل روئيز',
        translator: '',
        narrator: 'نیما رئیسی'
    },
    {
        id: idGenerator(),
        imageSrc: atom,
        title: 'عادت‌های اتمی، تغییرات کوچک، نتایج قابل توجه',
        price: toPersian(7500),
        isPodcast:false,
        fidiPlus: false,
        author: 'جیمز کلیر',
        translator: 'هادی بهمنی',
        narrator: ''
    },
    {
        id: idGenerator(),
        imageSrc: shafaf,
        title: 'کتاب صوتی هنر شفاف اندیشیدن|اثر رولف دوبلی| با صدای عادل فردوسی پور',
        price: toPersian(50000),
        isPodcast:true,
        isFidiPlus: true,
        author: ' رولف دوبلی',
        translator: 'بهزاد توکلی نیشابوری، عادل فردوسی‌پور، علی شهروز ستوده',
        narrator: 'عادل فردوسی‌پور'
    },
    {
        id: idGenerator(),
        imageSrc: zehn,
        title: 'کتاب صوتی تکنیک‌های تسلط بر ذهن',
        price: toPersian(4900),
        isPodcast:true,
        fidiPlus: false,
        author: 'آنتونی رابینز',
        translator: 'گروه مترجمان نشر مسیر سبز',
        narrator: ' لیا عرفانی'
    },
    {
        id: idGenerator(),
        imageSrc: father,
        title: 'کتاب صوتی پدر پولدار پدر فقیر| رابرت کیوساکی آنچه ثروتمندان در مورد پول به فرزندان خود آموزش می‌دهند',
        price: toPersian(18000),
        isPodcast:true,
        fidiPlus: false,
        author: 'رابرت کیوساکی',
        translator: 'هنگامه خدابنده',
        narrator: ' محسن زرآبادی‌پور ، معصومه عزیزمحمدی'
    },
    {
        id: idGenerator(),
        imageSrc: maghazeh,
        title: 'کتاب صوتی مغازه خودکشی | با صدای هوتن شکیبا',
        price: toPersian(28000),
        isPodcast:true,
        fidiPlus: true,
        author: ' ژان تولی',
        translator: ' احسان کرم‌ویسی',
        narrator: 'هوتن شکیبا'
    },
    {
        id: idGenerator(),
        imageSrc: good,
        title: 'کتاب صوتی هنر خوب زندگی کردن',
        price: toPersian(50000),
        isPodcast:true,
        fidiPlus: false,
        author: ' رولف دوبلی',
        translator: 'بهزاد توکلی، عادل فردوسی‌پور، علی شهروز',
        narrator: 'عادل فردوسی‌پور'
    },
    {
        id: idGenerator(),
        imageSrc: dobare,
        title: 'کتاب صوتی نشخوار ذهنی ۷ گام برای کنترل و از بین بردن افکار منفی، پاکسازی ذهن و مثبت فکر کردن در کمتر از ۵ دقیقه',
        price: toPersian(31000),
        isPodcast:true,
        fidiPlus: false,
        author: ' اسکات شارپ ، چیس هیل',
        translator: 'ستوده طاهریان',
        narrator: 'غلامرضا صادقی'
    },
    {
        id: idGenerator(),
        imageSrc: hafeze,
        title: 'دانلود کتاب حافظه نامحدود | کوین هرسلی',
        price: toPersian(9500),
        isPodcast:false,
        fidiPlus: false,
        author: 'کوین هرسلی',
        translator: 'سحر آریان',
        narrator: ''
    },
    {
        id: idGenerator(),
        imageSrc: adab,
        title: 'کتاب  سال زندگی تو روشی اثبات شده برای رسیدن به اهداف بزرگ',
        price: toPersian(8000),
        isPodcast:false,
        fidiPlus: false,
        author: 'دارن هاردی',
        translator: 'دارن هاردی',
        narrator: ''
    },
    {
        id: idGenerator(),
        imageSrc: sotimorakab,
        title: 'کتاب صوتی اثر مرکب',
        price: toPersian(28000),
        isPodcast:true,
        fidiPlus: false,
        author: ' دارن هاردی',
        translator: ' فرخ بافنده',
        narrator: ' شهره روحی ، کامبیز خلیلی ، هوتن شاطری‌پور'
    },
    {
        id: idGenerator(),
        imageSrc: shokr,
        title: 'کتاب صوتی نیمه تاریک وجود توان، خلاقیت، استعداد و رؤیاهای خود را بازیابید',
        price: toPersian(20000),
        isPodcast:true,
        fidiPlus: false,
        author: ' دبی فورد',
        translator: ' فرناز فرود',
        narrator: 'سمیرا جواهریان'
    },
    {
        id: idGenerator(),
        imageSrc: theory,
        title: 'تئوری انتخاب روانشناسی جدید از آزادی شخصی',
        price: toPersian(9000),
        isPodcast:false,
        fidiPlus: false,
        author: ' ویلیام گلاسر',
        translator: ' انسیه وحدانی ، فاطمه عابدی',
        narrator: ''
    },
    {
        id: idGenerator(),
        imageSrc: babel,
        title: 'کتاب صوتی ثروتمندترین مرد بابل',
        price: toPersian(34000),
        isPodcast:true,
        fidiPlus: false,
        author: 'جورج ساموئل کلاسون',
        translator: 'فاطمه باغستانی',
        narrator: 'آرمان سلطان‌زاده'
    },
    {
        id: idGenerator(),
        imageSrc: mojeze,
        title: 'کتاب صوتی معجزه‌ی سپاس‌گزاری',
        price: toPersian(34000),
        isPodcast:true,
        fidiPlus: false,
        author: 'راندا برن',
        translator: 'سیما فرجی',
        narrator: ' نازیما حسینی'
    },
    {
        id: idGenerator(),
        imageSrc: pool,
        title: 'همین حالا پول جذب کن با یک فرمول هفت‌مرحله‌ای ساده',
        price: toPersian(12000),
        isPodcast:false,
        fidiPlus: false,
        author: 'جو ویتالی',
        translator: 'محمد گنجعلی‌خان حاکمی',
        narrator: ''
    },
    {
        id: idGenerator(),
        imageSrc: akhbar,
        title: 'کتاب صوتی پی‌گیر اخبار نباشید',
        price: toPersian(44000),
        isPodcast:true,
        fidiPlus: false,
        author: ' رولف دوبلی',
        translator: 'بهزاد توکلی ، عادل فردوسی‌پور ، علی شهروز',
        narrator: 'عادل فردوسی‌پور'
    },
    {
        id: idGenerator(),
        imageSrc: adat,
        title: 'کتاب صوتی عادت می‌کنیم',
        price: toPersian(52000),
        isPodcast:true,
        fidiPlus: false,
        author: ' زویا پیرزاد',
        translator: '',
        narrator: ' فاطمه معتمدآریا'
    },
]
//