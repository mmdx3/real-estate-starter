// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!',
    image: House1,
    imageLg: House1Lg,
    city: 'neyshabur',
    address: 'امیر کبیر , امیر کبیر 14 , پلاک 120 ',
    bedrooms: '6',
    bathrooms: '3',
    surface: '1200 متر',
    year: '2016',
    price: '110000',
    agent: {
      image: Agent5,
      name: 'محمد جلال آبادی',
      phone: '09354501795',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: House2,
    imageLg: House2Lg,
    city: 'neyshabur',
    address: 'امیر کبیر , امیر کبیر 1 , پلاک 32 ',
    bedrooms: '6',
    bathrooms: '3',
    surface: '2000 متر',
    year: '2016',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'علی رضوی ',
      phone: '09354501795',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: House3,
    imageLg: House3Lg,
    city: 'tehran',
    address: ' تهران , فرشته , پلاک 45 , واحد 6 ',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 متر مربع',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'حسین میر پناه',
      phone: '09354501795',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: House4,
    imageLg: House4Lg,
    city: 'neyshabur',
    address: 'نیشابور , امام خمینی 24 , پلاک 23',
    bedrooms: '6',
    bathrooms: '3',
    surface: '10000 متر مربع',
    year: '2016',
    price: '120000',
    agent: {
      image: Agent4,
      name: 'رضا پهلوی',
      phone: '09354501795',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: House5,
    imageLg: House5Lg,
    city: 'tehran',
    address: 'تهران , نیاوران , پلاک 26 , واحد 2',
    bedrooms: '5',
    bathrooms: '3',
    surface: '2500 متر مربع',
    year: '2015',
    price: '220000',
    agent: {
      image: Agent5,
      name: 'حسن بقیعی',
      phone: '09354501795',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: House6,
    imageLg: House6Lg,
    city: 'neyshabur',
    address: 'دولت آباد , صادقیه , پلاک 15',
    bedrooms: '6',
    bathrooms: '3',
    surface: '3000 متر مربع',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'علی کریمی ',
      phone: '09354501795',
    },
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: Apartment1,
    imageLg: Apartment1Lg,
    city: 'neyshabur',
    address: 'نیشابور , دهنو خالصه , کوچه لاله , پلاک 65',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 متر مربع',
    year: '2012',
    price: '200000',
    agent: {
      image: Agent7,
      name: 'عباس زارعی',
      phone: '09354501795',
    },
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: Apartment2,
    imageLg: Apartment2Lg,
    city: 'tehran',
    address: 'تهران ,  سعادت آباد , پرستو , پلاک 32',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 متر مربع',
    year: '2011',
    price: '320000',
    agent: {
      image: Agent5,
      name: 'محمد جلال آبادی',
      phone: '09354501795',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: Apartment3,
    imageLg: Apartment3Lg,
    city: 'tehran',
    address: 'کرج , رسالت 16 , پلاک 45',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 متر مربع',
    year: '2011',
    price: '400000',
    agent: {
      image: Agent9,
      name: 'امیر دهنوی',
      phone: '09354501795',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: House7,
    imageLg: House7Lg,
    city: 'neyshabur',
    address: 'نیشابور , چهارده معصوم , پلاک 23',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 متر مربع',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'آرش موسوی',
      phone: '09354501795',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: House8,
    imageLg: House8Lg,
    city: 'neyshabur',
    address: 'نیشابور , رسالت غربی , پلاک 32',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 متر مربع',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent5,
      name: 'محمد جلال آبادی',
      phone: '09354501795',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: House9,
    imageLg: House9Lg,
    city: 'tehran',
    address: 'تهران , پونک , پرستو 26 , پلاک 5',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 متر مربع',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'احمد حاجی بیگلو',
      phone: '09354501795',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: House10,
    imageLg: House10Lg,
    city: 'neyshabur',
    address: 'تربت جام , محمودیه , پلاک 65 ',
    bedrooms: '5',
    bathrooms: '2',
    surface: '4200 متر مربع',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'سعید قاسمی',
      phone: '09354501795',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: House11,
    imageLg: House11Lg,
    city: 'tehran',
    address: 'فرشته , لاله 42, پلاک 65 , واحد 6',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 متر مربع',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'دانیال احمدی',
      phone: '09354501795',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: House12,
    imageLg: House12Lg,
    city: 'neyshabur',
    address: 'نیشابور , شریعتی , شریعتی 32 , پلاک 32  , واحد 12',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent5,
      name: 'محمد جلال آبادی',
      phone: '09354501795',
    },
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: Apartment4,
    imageLg: Apartment4Lg,
    city: 'mashhad',
    address: 'مشهد , خیابان رضوی , پلاک 45',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 متر مربع',
    year: '2011',
    price: '210000',
    agent: {
      image: Agent4,
      name: 'احمد شاه قاجار',
      phone: '09354501795',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: Apartment5,
    imageLg: Apartment5Lg,
    city: 'mashhad',
    address: 'مشهد , کوهسنگی ,کوهسنگی 32 , پلاک 98 ',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 متر مربع',
    year: '2012',
    price: '320000',
    agent: {
      image: Agent5,
      name: 'رضا قاسمی ',
      phone: '09354501795',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!      ',
    image: Apartment6,
    imageLg: Apartment6Lg,
    city: 'mashhad',
    address: 'مشهد , امام رضا  , امام رضای 23  , پلاک 65',
    bedrooms: '3',
    bathrooms: '1',
    surface: '4200 متر مربع',
    year: '2010',
    price: '380000',
    agent: {
      image: Agent5,
      name: 'محمد جلال آبادی',
      phone: '09354501795',
    },
  },
];
