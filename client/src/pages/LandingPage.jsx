import {
  ArrowRight, BadgeIndianRupee, Brain, Check, Clock3, HeartHandshake,
  HeartPulse, Info, PackageCheck, ShieldCheck, TimerReset, Truck, UserRoundCheck,
  LockKeyhole, ClipboardCheck, MapPinCheck, Zap
} from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import MobileStickyCta from '../components/MobileStickyCta.jsx';
import Reveal from '../components/Reveal.jsx';
import LeadForm from '../components/LeadForm.jsx';
import BrandMark from '../components/BrandMark.jsx';
import PriceCountdown from '../components/PriceCountdown.jsx';
import BuyerFeedback from '../components/BuyerFeedback.jsx';
import { scrollToLeadForm } from '../utils/scroll.js';

/*
  Color tokens used on this page (professional clinical + warm palette):
  ink      #15302A  - deep pine, headings & dark surfaces
  body     #3F4A44  - body text
  paper    #FBF9F4  - page background
  stone    #F4F0E6  - section background (warm neutral, replaces mint tint)
  stone-2  #EDE8D8  - card icon chips
  accent   #B4802E  - bronze, used ONLY for price, CTAs and one highlight per section
  accent-l #E7C177  - light bronze, for accent text on dark backgrounds

  Add these once to your project (e.g. index.html <head>) for the serif/sans pairing:
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
*/

const concerns = [
  { title: 'Premature Ejaculation', icon: TimerReset, text: 'Jaldi ejaculation ki problem timing, confidence aur intimate satisfaction ko affect kar sakti hai. Isme sharm ki baat nahi hai, balki ise ek practical wellness concern ki tarah samajhna useful hai.' },
  { title: 'Erectile Dysfunction', icon: HeartPulse, text: 'Erection se judi difficulty stress, lifestyle, health factors ya performance pressure se linked ho sakti hai. Agar ye concern continuously bana rahe, to qualified clinician se consult karna important hai.' },
  { title: 'Low Stamina', icon: Zap, text: 'Intimacy ke dauran low energy ya performance mein kami ka experience lifestyle, sleep, stress aur overall wellbeing se bhi influence ho sakta hai.' },
  { title: 'Sexual Confidence', icon: Brain, text: 'Overthinking, comparison aur performance pressure confidence ko reduce kar sakte hain. Better awareness aur partner ke saath communication ka role important hota hai.' },
  { title: 'Size Concerns', icon: UserRoundCheck, text: 'Body-image ko lekar concerns confidence par impact daal sakte hain. Size ko lekar unrealistic expectations ki jagah overall sexual wellbeing aur partner ke saath communication par focus karna better hai.' }
];

const ingredients = [
  ['Ashwagandha', 'Ayurveda mein traditionally stress management, general wellbeing aur daily vitality support ke liye use kiya jata hai.'],
  ['Shilajit', 'Natural mineral-rich substance jo traditionally energy, strength aur overall wellness support ke liye use hota raha hai.'],
  ['Safed Musli', 'Ayurvedic formulations mein traditionally strength, stamina aur general vitality support ke liye use ki jati hai.'],
  ['Amla', 'Naturally vitamin C aur antioxidants ka source hai, jo daily nutrition aur overall wellness support mein help karta hai.']
];

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="max-w-3xl">
      <span className="text-sm font-semibold tracking-wide text-[#B4802E]">{eyebrow}</span>
      <h2 className="mt-2 font-['Fraunces',_serif] text-3xl font-semibold text-[#15302A] sm:text-4xl">{title}</h2>
      {copy && <p className="mt-4 text-base font-medium leading-7 text-[#3F4A44]">{copy}</p>}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden bg-[#FBF9F4] pb-20 md:pb-0">
      <Navbar />
      <main>
        {/* Hero */}
        <section id="home" className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(180,128,46,0.10),transparent_35%),linear-gradient(180deg,#FBF9F4_0%,#F4F0E6_100%)] py-12 sm:py-16 lg:py-20">
          <div className="absolute -right-40 top-8 -z-10 h-96 w-96 rounded-full bg-[#B4802E]/10 blur-3xl" />
          <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal>
              <span className="text-sm font-semibold tracking-wide text-[#B4802E]">Male sexual wellness</span>
              <h1 className="mt-5 max-w-4xl font-['Fraunces',_serif] text-4xl font-semibold tracking-tight text-[#15302A] sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                सेक्स की सभी समस्याओं से छुटकारा
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#3F4A44]">
                शीघ्रपतन (Premature Ejaculation), इरेक्शन से जुड़ी समस्याएं, कम Stamina, Performance का कम समय, Sexual Confidence और Relationship का दबाव जैसी समस्याओं को नज़र अंदाज़ नहीं करना चाहिए। Herbal Wellness Hub पुरुषों की Sexual Wellness के लिए एक ऐसा अनुभव देता है जो बिना किसी झूठे वादे के, समग्र रूप से मदद करता है।
              </p>
              <div className="mt-7 flex flex-wrap gap-2 text-sm font-semibold text-[#15302A]">
                {['Premature Ejaculation / शीघ्रपतन', 'Erection से जुड़ी समस्या', 'कम Stamina', 'Timing Confidence', 'Intimate Relationship Concerns'].map((item) => (
                  <span key={item} className="rounded-full border border-[#15302A]/10 bg-white px-3 py-2 shadow-sm">{item}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button onClick={scrollToLeadForm} className="btn-primary rounded-xl bg-[#B4802E] px-6 py-3 font-bold text-white shadow-sm transition hover:bg-[#9C6D26]">
                  Fill the Form <ArrowRight size={18} />
                </button>
                <div className="rounded-2xl border border-[#15302A]/10 bg-white px-5 py-3 shadow-sm">
                  <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Special Price</span>
                  <span className="mr-2 text-sm font-semibold text-slate-400 line-through">₹3999/-</span>
                  <strong className="text-2xl font-bold text-[#B4802E]">₹1299/-</strong>
                </div>
              </div>
              <div className="mt-5 max-w-2xl"><PriceCountdown compact /></div>
              <p className="mt-5 flex max-w-2xl items-start gap-2 text-xs font-medium leading-5 text-slate-500">
                <Info size={16} className="mt-0.5 shrink-0" />
                Sexual-health concerns के कई कारण हो सकते हैं। अगर समस्या लगातार बनी रहे या बढ़े, तो qualified medical professional से evaluation कराना बेहतर है।
              </p>
            </Reveal>

            <Reveal className="relative">
              <div className="mx-auto max-w-md rounded-[2.25rem] border border-[#15302A]/10 bg-white p-4 shadow-[0_20px_45px_-20px_rgba(21,48,42,0.25)] sm:p-6">
                <div className="overflow-hidden rounded-[1.75rem] bg-[#F4F0E6]">
                  <img src="/images/vedaas1.png" alt="Herbal wellness product bottle in a botanical setting" className="aspect-[4/5] h-full w-full object-cover" fetchPriority="high" />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-[#3F4A44]">
                  <div className="rounded-2xl bg-[#F4F0E6] p-3"><Clock3 className="mx-auto mb-2 text-[#15302A]" size={18} />Timing confidence</div>
                  <div className="rounded-2xl bg-[#F4F0E6] p-3"><Zap className="mx-auto mb-2 text-[#15302A]" size={18} />Stamina support</div>
                  <div className="rounded-2xl bg-[#F4F0E6] p-3"><HeartHandshake className="mx-auto mb-2 text-[#15302A]" size={18} />Intimate wellness</div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#F4F0E6] px-3 py-2 text-xs font-semibold text-[#15302A]">
                  <Truck size={16} /> Cash on Delivery Available
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Awareness */}
        <section className="py-14 sm:py-16 lg:py-20 bg-white">
          <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <img src="/images/wellness-education1.png" alt="Educational male wellness illustration" className="w-full rounded-2xl border border-[#15302A]/10 object-cover" loading="lazy" />
            </Reveal>
            <Reveal>
              <SectionHeading
                eyebrow="स्वास्थ्य जागरूकता"
                title="यौन स्वास्थ्य केवल प्रदर्शन का विषय नहीं है"
                copy="तनाव, नींद, शारीरिक स्वास्थ्य, आत्मविश्वास और रिश्ते में बातचीत जैसी कई बातें यौन स्वास्थ्य को प्रभावित कर सकती हैं। किसी एक त्वरित समाधान के वादे पर निर्भर रहने के बजाय समस्या को सही तरह समझना और जरूरत पड़ने पर योग्य विशेषज्ञ से सलाह लेना अधिक उचित है।"
              />
              <div className="mt-7 grid gap-3">
                {['सहनशक्ति और शरीर की ऊर्जा पर ध्यान दें', 'प्रदर्शन के दबाव और चिंता को सही तरह समझें', 'समय को लेकर आत्मविश्वास और आपसी बातचीत बेहतर करें', 'समस्या लगातार बनी रहे तो चिकित्सकीय सलाह पर विचार करें'].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm font-medium leading-6 text-[#3F4A44]">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#EDE8D8] text-[#15302A]"><Check size={13} /></span>{item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Common concerns */}
        <section className="py-14 sm:py-16 lg:py-20 bg-[#F4F0E6]">
          <div className="section-shell">
            <Reveal><SectionHeading eyebrow="Common concerns" title="Kaun se Concerns Aksar Confidence ko Affect karte hain" /></Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {concerns.map(({ title, icon: Icon, text }) => (
                <Reveal key={title} className="h-full">
                  <article className="h-full rounded-2xl border border-[#15302A]/10 bg-white p-5 shadow-sm">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#EDE8D8] text-[#15302A]"><Icon size={21} /></span>
                    <h3 className="mt-5 text-lg font-bold text-[#15302A]">{title}</h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-[#3F4A44]">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ingredients */}
        <section className="py-14 sm:py-16 lg:py-20 bg-[#15302A] text-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <span className="inline-flex rounded-full border border-[#E7C177]/30 bg-[#E7C177]/10 px-3 py-1 text-xs font-bold tracking-wide text-[#E7C177]">Traditional Wellness Ingredients</span>
              <h2 className="mt-4 font-['Fraunces',_serif] text-3xl font-semibold tracking-tight sm:text-4xl">Key Natural Ingredients</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {ingredients.map(([name, text]) => (
                  <div key={name} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                    <h3 className="text-lg font-bold text-white">{name}</h3>
                    <p className="mt-2 text-sm font-medium leading-6 text-white/75">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm font-medium text-white/75">
                <ShieldCheck size={20} className="mt-0.5 shrink-0 text-[#E7C177]" />
                Ingredient-related benefits traditional use aur general wellness context mein diye gaye hain. Actual composition aur quantity product label ke according verify karein.
              </div>
            </Reveal>
            <Reveal>
              <img src="/images/i.png" alt="Ingredients" className="mx-auto w-full max-w-md rounded-[2rem] border border-white/15 bg-white/5 p-6" loading="lazy" />
            </Reveal>
          </div>
        </section>

        {/* Relationship */}
        <section className="py-14 sm:py-16 lg:py-20 bg-white">
          <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal><img src="/images/relationship.png" alt="Tasteful happy couple relationship-confidence illustration" className="w-full rounded-2xl border border-[#15302A]/10 object-cover" loading="lazy" /></Reveal>
            <Reveal>
              <SectionHeading eyebrow="Relationship Wellbeing" title="Better Confidence. Better Connection." copy="Sexual confidence aur open communication healthy intimate relationship ko support kar sakte hain. Partner satisfaction sirf timing ya stamina se define nahi hoti — comfort, trust aur communication bhi utne hi important factors hain." />
              <button onClick={scrollToLeadForm} className="mt-7 rounded-xl bg-[#B4802E] px-6 py-3 font-bold text-white shadow-sm transition hover:bg-[#9C6D26]">
                Form Fill Karein <ArrowRight size={18} />
              </button>
            </Reveal>
          </div>
        </section>

        {/* Medical perspective */}
        <section className="py-14 sm:py-16 lg:py-20 bg-[#F4F0E6]">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal><img src="/images/doctor.png" alt="Doctor discussing a health concern with an adult patient" className="w-full rounded-2xl border border-[#15302A]/10 object-cover" loading="lazy" /></Reveal>
            <Reveal>
              <SectionHeading eyebrow="Medical Perspective" title="Sexual Health ko Ignore Mat Karein" copy="Sexual-health concerns ke causes har person mein different ho sakte hain. Stress, sleep, cardiovascular health, diabetes, hormones, medication side effects aur relationship factors bhi role play kar sakte hain. Agar symptoms continuously bane rahein, to qualified clinician se assessment karana useful ho sakta hai." />
              <p className="mt-5 rounded-2xl border border-[#15302A]/10 bg-white p-4 text-sm font-medium leading-6 text-[#3F4A44]">Kisi specific doctor ki recommendation ya medical endorsement ka claim nahi kiya gaya hai. Product-related health decision lete waqt apni health history ke according qualified professional ki advice lena better hai.</p>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-24 py-14 sm:py-16 lg:py-20 bg-white">
          <div className="section-shell">
            <Reveal><SectionHeading eyebrow="यह कैसे काम करता है" title="सरल, निजी और साफ प्रक्रिया" copy="प्रक्रिया छोटी और आसान रखी गई है, ताकि आप बिना अनावश्यक जानकारी दिए अपनी जरूरत स्पष्ट रूप से बता सकें।" /></Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                ['01', 'अपनी समस्या चुनें', 'दिए गए विकल्पों में से अपनी मुख्य परेशानी चुनें, ताकि आपकी जरूरत सही तरह समझी जा सके।'],
                ['02', 'अपनी जानकारी भरें', 'अपना पूरा नाम, शहर और अपनी परेशानी का संक्षिप्त विवरण लिखें।'],
                ['03', 'विवरण भेजें', 'सभी जानकारी जाँचने के बाद विवरण भेजें। सफल होने पर स्क्रीन पर स्पष्ट पुष्टि दिखाई देगी।']
              ].map(([n, title, text]) => (
                <Reveal key={n}>
                  <article className="h-full rounded-2xl border border-[#15302A]/10 bg-white p-6 shadow-sm">
                    <span className="font-['Fraunces',_serif] text-4xl font-semibold text-[#B4802E]/40">{n}</span>
                    <h3 className="mt-4 text-xl font-bold text-[#15302A]">{title}</h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-[#3F4A44]">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section className="py-14 sm:py-16 lg:py-20 bg-[#F4F0E6]">
          <div className="section-shell">
            <Reveal><SectionHeading eyebrow="Private experience" title="Aapki Privacy aur Clarity par Focus" copy="Sexual wellness personal topic hai, isliye experience ko simple, respectful aur bina unnecessary pressure ke rakha gaya hai." /></Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                [LockKeyhole, 'Private Details', 'Form mein basic details li jaati hain — Full Name, City, selected concern aur aapki likhi hui problem description.'],
                [ClipboardCheck, 'Clear Information', 'Benefits aur limitations ko clear language mein explain kiya gaya hai taaki misleading promise na bane.'],
                [HeartHandshake, 'Respectful Support', 'Sexual-health concerns ko judgement ke bina, professional aur practical tareeke se address kiya gaya hai.']
              ].map(([Icon, title, text]) => (
                <Reveal key={title}>
                  <article className="h-full rounded-2xl border border-[#15302A]/10 bg-white p-6 shadow-sm">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#EDE8D8] text-[#15302A]"><Icon size={22} /></span>
                    <h3 className="mt-5 text-xl font-bold text-[#15302A]">{title}</h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-[#3F4A44]">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <BuyerFeedback />

        {/* Price + COD, single combined banner */}
        <section className="py-14 sm:py-16 lg:py-20 bg-white">
          <div className="section-shell">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-[#15302A]/10 bg-[#15302A] text-white shadow-[0_30px_60px_-25px_rgba(21,48,42,0.4)]">
                <div className="grid gap-8 p-8 sm:p-11 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                  <div>
                    <span className="inline-flex items-center rounded-full border border-[#E7C177]/30 bg-[#E7C177]/10 px-3 py-1 text-xs font-bold tracking-wide text-[#E7C177]">Price &amp; Delivery</span>
                    <h2 className="mt-4 font-['Fraunces',_serif] text-3xl font-semibold tracking-tight text-white sm:text-4xl">Regular ₹3999/-, Special Price ₹1299/-</h2>
                    <p className="mt-3 max-w-2xl font-medium leading-7 text-white/75">Cash on Delivery available hai — no online payment required. Form submit karne ke baad location serviceability confirm ki jaati hai.</p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <div>
                        <span className="block text-lg font-semibold text-white/50 line-through">₹3999/-</span>
                        <strong className="text-5xl font-bold leading-none tracking-tight text-[#E7C177]">₹1299/-</strong>
                      </div>
                      <button onClick={scrollToLeadForm} className="rounded-xl bg-[#E7C177] px-6 py-3 font-bold text-[#15302A] shadow-sm transition hover:bg-[#DDB05C]">
                        Fill the Form <ArrowRight size={18} />
                      </button>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {[[BadgeIndianRupee, '₹1299/-', 'Special price'], [MapPinCheck, 'Location Check', 'Serviceability confirmation'], [PackageCheck, 'COD', 'Delivery-time payment']].map(([Icon, title, text]) => (
                        <div key={title} className="rounded-2xl border border-white/15 bg
