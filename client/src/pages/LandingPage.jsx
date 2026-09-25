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
      <span className="eyebrow font-semibold">{eyebrow}</span>
      <h2 className="h2 font-bold text-[#143b2c]">{title}</h2>
      {copy && <p className="copy text-slate-700">{copy}</p>}
    </div>
  );
}

function PriceTag({ size = 'text-3xl' }) {
  return (
    <div>
      <span className="block text-sm font-semibold text-slate-400 line-through">₹3999/-</span>
      <strong className={`${size} font-bold text-[#173f2f]`}>₹1299/-</strong>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden pb-20 md:pb-0">
      <Navbar />
      <main>
        {/* Hero */}
        <section id="home" className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(188,218,187,0.55),transparent_30%),linear-gradient(180deg,#fbfcf8_0%,#f1f6ef_100%)] py-12 sm:py-16 lg:py-20">
          <div className="absolute -right-40 top-8 -z-10 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal>
              <span className="eyebrow font-semibold">Male sexual wellness</span>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-[#143b2c] sm:text-5xl lg:text-6xl lg:leading-[1.06]">
                सेक्स की सभी समस्याओं से छुटकारा
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-700">
                शीघ्रपतन (Premature Ejaculation), इरेक्शन से जुड़ी समस्याएं, कम Stamina, Performance का कम समय, Sexual Confidence और Relationship का दबाव जैसी समस्याओं को नज़र अंदाज़ नहीं करना चाहिए। Herbal Wellness Hub पुरुषों की Sexual Wellness के लिए एक ऐसा अनुभव देता है जो बिना किसी झूठे वादे के, समग्र रूप से मदद करता है।
              </p>
              <div className="mt-7 flex flex-wrap gap-2 text-sm font-semibold text-slate-800">
                {['Premature Ejaculation / शीघ्रपतन', 'Erection से जुड़ी समस्या', 'कम Stamina', 'Timing Confidence', 'Intimate Relationship Concerns'].map((item) => (
                  <span key={item} className="rounded-full border border-emerald-950/10 bg-white px-3 py-2 shadow-sm">{item}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button onClick={scrollToLeadForm} className="btn-primary font-bold">Fill the Form <ArrowRight size={18} /></button>
                <div className="rounded-2xl border border-emerald-950/10 bg-white px-5 py-3 shadow-sm">
                  <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Special Price</span>
                  <PriceTag size="text-2xl" />
                </div>
              </div>
              <div className="mt-5 max-w-2xl"><PriceCountdown compact /></div>
              <p className="mt-5 flex max-w-2xl items-start gap-2 text-xs font-medium leading-5 text-slate-500">
                <Info size={16} className="mt-0.5 shrink-0" />
                Sexual-health concerns के कई कारण हो सकते हैं। अगर समस्या लगातार बनी रहे या बढ़े, तो qualified medical professional से evaluation कराना बेहतर है।
              </p>
            </Reveal>

            <Reveal className="relative">
              <div className="mx-auto max-w-md rounded-[2.25rem] border border-white/70 bg-white/80 p-4 shadow-soft backdrop-blur sm:p-6">
                <div className="overflow-hidden rounded-[1.75rem] bg-[#e9f0e6]">
                  <img src="/images/vedaas1.png" alt="Herbal wellness product bottle in a botanical setting" className="aspect-[4/5] h-full w-full object-cover" fetchPriority="high" />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-slate-700">
                  <div className="rounded-2xl bg-emerald-50 p-3"><Clock3 className="mx-auto mb-2 text-emerald-800" size={18} />Timing confidence</div>
                  <div className="rounded-2xl bg-emerald-50 p-3"><Zap className="mx-auto mb-2 text-emerald-800" size={18} />Stamina support</div>
                  <div className="rounded-2xl bg-emerald-50 p-3"><HeartHandshake className="mx-auto mb-2 text-emerald-800" size={18} />Intimate wellness</div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-900">
                  <Truck size={16} /> Cash on Delivery Available
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Awareness */}
        <section className="section-pad bg-white">
          <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <img src="/images/wellness-education1.png" alt="Educational male wellness illustration" className="card aspect-[4/3] w-full object-cover p-4" loading="lazy" />
            </Reveal>
            <Reveal>
              <SectionHeading
                eyebrow="स्वास्थ्य जागरूकता"
                title="यौन स्वास्थ्य केवल प्रदर्शन का विषय नहीं है"
                copy="तनाव, नींद, शारीरिक स्वास्थ्य, आत्मविश्वास और रिश्ते में बातचीत जैसी कई बातें यौन स्वास्थ्य को प्रभावित कर सकती हैं। किसी एक त्वरित समाधान के वादे पर निर्भर रहने के बजाय समस्या को सही तरह समझना और जरूरत पड़ने पर योग्य विशेषज्ञ से सलाह लेना अधिक उचित है।"
              />
              <div className="mt-7 grid gap-3">
                {['सहनशक्ति और शरीर की ऊर्जा पर ध्यान दें', 'प्रदर्शन के दबाव और चिंता को सही तरह समझें', 'समय को लेकर आत्मविश्वास और आपसी बातचीत बेहतर करें', 'समस्या लगातार बनी रहे तो चिकित्सकीय सलाह पर विचार करें'].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-700">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-800"><Check size={13} /></span>{item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Common concerns */}
        <section className="section-pad bg-[#f5f7f2]">
          <div className="section-shell">
            <Reveal><SectionHeading eyebrow="Common concerns" title="Kaun se Concerns Aksar Confidence ko Affect karte hain" /></Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {concerns.map(({ title, icon: Icon, text }) => (
                <Reveal key={title} className="h-full">
                  <article className="card h-full p-5">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-800"><Icon size={21} /></span>
                    <h3 className="mt-5 text-lg font-bold text-[#173f2f]">{title}</h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-slate-700">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ingredients */}
        <section className="section-pad bg-[#173f2f] text-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-100">Traditional Wellness Ingredients</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Key Natural Ingredients</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {ingredients.map(([name, text]) => (
                  <div key={name} className="rounded-2xl border border-dashed border-white/25 bg-white/5 p-5">
                    <h3 className="text-lg font-bold text-white">{name}</h3>
                    <p className="mt-2 text-sm font-medium leading-6 text-emerald-50/85">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-dashed border-white/20 bg-white/5 p-4 text-sm font-medium text-emerald-50/85">
                <ShieldCheck size={20} className="mt-0.5 shrink-0" />
                Ingredient-related benefits traditional use aur general wellness context mein diye gaye hain. Actual composition aur quantity product label ke according verify karein.
              </div>
            </Reveal>
            <Reveal>
              <img src="/images/i.png" alt="Ingredients" className="mx-auto w-full max-w-md rounded-[2rem] border border-dashed border-white/20 bg-white/5 p-6" loading="lazy" />
            </Reveal>
          </div>
        </section>

        {/* Relationship + Medical perspective */}
        <section className="section-pad bg-white">
          <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal><img src="/images/relationship.png" alt="Tasteful happy couple relationship-confidence illustration" className="card w-full p-5" loading="lazy" /></Reveal>
            <Reveal>
              <SectionHeading eyebrow="Relationship Wellbeing" title="Better Confidence. Better Connection." copy="Sexual confidence aur open communication healthy intimate relationship ko support kar sakte hain. Partner satisfaction sirf timing ya stamina se define nahi hoti — comfort, trust aur communication bhi utne hi important factors hain." />
              <button onClick={scrollToLeadForm} className="btn-primary mt-7 font-bold">Form Fill Karein <ArrowRight size={18} /></button>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-[#eef4ec]">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal><img src="/images/doctor.png" alt="Doctor discussing a health concern with an adult patient" className="card w-full p-4" loading="lazy" /></Reveal>
            <Reveal>
              <SectionHeading eyebrow="Medical Perspective" title="Sexual Health ko Ignore Mat Karein" copy="Sexual-health concerns ke causes har person mein different ho sakte hain. Stress, sleep, cardiovascular health, diabetes, hormones, medication side effects aur relationship factors bhi role play kar sakte hain. Agar symptoms continuously bane rahein, to qualified clinician se assessment karana useful ho sakta hai." />
              <p className="mt-5 rounded-2xl border border-emerald-900/10 bg-white p-4 text-sm font-medium leading-6 text-slate-700">Kisi specific doctor ki recommendation ya medical endorsement ka claim nahi kiya gaya hai. Product-related health decision lete waqt apni health history ke according qualified professional ki advice lena better hai.</p>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="section-pad scroll-mt-24 bg-white">
          <div className="section-shell">
            <Reveal><SectionHeading eyebrow="यह कैसे काम करता है" title="सरल, निजी और साफ प्रक्रिया" copy="प्रक्रिया छोटी और आसान रखी गई है, ताकि आप बिना अनावश्यक जानकारी दिए अपनी जरूरत स्पष्ट रूप से बता सकें।" /></Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                ['01', 'अपनी समस्या चुनें', 'दिए गए विकल्पों में से अपनी मुख्य परेशानी चुनें, ताकि आपकी जरूरत सही तरह समझी जा सके।'],
                ['02', 'अपनी जानकारी भरें', 'अपना पूरा नाम, शहर और अपनी परेशानी का संक्षिप्त विवरण लिखें।'],
                ['03', 'विवरण भेजें', 'सभी जानकारी जाँचने के बाद विवरण भेजें। सफल होने पर स्क्रीन पर स्पष्ट पुष्टि दिखाई देगी।']
              ].map(([n, title, text]) => (
                <Reveal key={n}>
                  <article className="card h-full p-6">
                    <span className="text-4xl font-bold text-emerald-800/30">{n}</span>
                    <h3 className="mt-4 text-xl font-bold text-[#173f2f]">{title}</h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-slate-700">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section className="section-pad bg-[#f5f7f2]">
          <div className="section-shell">
            <Reveal><SectionHeading eyebrow="Private experience" title="Aapki Privacy aur Clarity par Focus" copy="Sexual wellness personal topic hai, isliye experience ko simple, respectful aur bina unnecessary pressure ke rakha gaya hai." /></Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                [LockKeyhole, 'Private Details', 'Form mein basic details li jaati hain — Full Name, City, selected concern aur aapki likhi hui problem description.'],
                [ClipboardCheck, 'Clear Information', 'Benefits aur limitations ko clear language mein explain kiya gaya hai taaki misleading promise na bane.'],
                [HeartHandshake, 'Respectful Support', 'Sexual-health concerns ko judgement ke bina, professional aur practical tareeke se address kiya gaya hai.']
              ].map(([Icon, title, text]) => (
                <Reveal key={title}>
                  <article className="card h-full p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-800"><Icon size={22} /></span>
                    <h3 className="mt-5 text-xl font-bold text-[#173f2f]">{title}</h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-slate-700">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <BuyerFeedback />

        {/* Price + COD, single combined banner */}
        <section className="section-pad bg-white">
          <div className="section-shell">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-emerald-950/10 bg-[#173f2f] text-white shadow-card">
                <div className="grid gap-8 p-8 sm:p-11 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                  <div>
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-100">Price &amp; Delivery</span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Regular ₹3999/-, Special Price ₹1299/-</h2>
                    <p className="mt-3 max-w-2xl font-medium leading-7 text-emerald-50/85">Cash on Delivery available hai — no online payment required. Form submit karne ke baad location serviceability confirm ki jaati hai.</p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <div>
                        <span className="block text-lg font-semibold text-emerald-100/60 line-through">₹3999/-</span>
                        <strong className="text-5xl font-bold leading-none tracking-tight text-white">₹1299/-</strong>
                      </div>
                      <button onClick={scrollToLeadForm} className="btn-secondary font-bold">Fill the Form <ArrowRight size={18} /></button>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {[[BadgeIndianRupee, '₹1299/-', 'Special price'], [MapPinCheck, 'Location Check', 'Serviceability confirmation'], [PackageCheck, 'COD', 'Delivery-time payment']].map(([Icon, title, text]) => (
                        <div key={title} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                          <Icon className="text-emerald-100" size={20} />
                          <h3 className="mt-3 text-base font-bold text-white">{title}</h3>
                          <p className="mt-1 text-xs font-medium text-emerald-50/70">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <PriceCountdown />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <LeadForm />
      </main>

      <footer id="contact" className="scroll-mt-24 border-t border-emerald-950/10 bg-white py-12">
        <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-slate-600">Ye website male sexual wellness ki general information aur product enquiry ke liye hai. Content diagnosis, emergency care ya personalized medical advice ka substitute nahi hain.</p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-700" aria-label="Footer navigation">
            <a href="/privacy" className="hover:text-emerald-900">Privacy Policy</a>
            <a href="/terms" className="hover:text-emerald-900">Terms &amp; Conditions</a>
            <a href="/disclaimer" className="hover:text-emerald-900">Disclaimer</a>
            <a href="#contact" className="hover:text-emerald-900">Contact</a>
          </nav>
        </div>
      </footer>
      <MobileStickyCta />
    </div>
  );
                      }
