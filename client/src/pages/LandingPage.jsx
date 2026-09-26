import {
  Activity, ArrowRight, BadgeIndianRupee, Brain, Check, Clock3, HeartHandshake,
  HeartPulse, Info, Leaf, PackageCheck, ShieldCheck, Sparkles, Stethoscope,
  TimerReset, Truck, UserRoundCheck, UsersRound, Zap, LockKeyhole, ClipboardCheck,
  MapPinCheck
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
const benefits = [
  ['Better Stamina', Activity], ['Performance Support', Sparkles], ['Better Timing Confidence', Clock3], ['Sexual Confidence', UserRoundCheck],
  ['Less Performance Stress', Brain], ['Better Intimate Connection', HeartHandshake], ['Partner Satisfaction', UsersRound], ['Overall Sexual Wellness', HeartPulse]
];


function SectionHeading({ eyebrow, title, copy }) {
  return <div className="max-w-3xl"><span className="eyebrow">{eyebrow}</span><h2 className="h2">{title}</h2>{copy && <p className="copy">{copy}</p>}</div>;
}

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden pb-20 md:pb-0">
      <Navbar />
      <main>
        <section id="home" className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(188,218,187,0.55),transparent_30%),linear-gradient(180deg,#fbfcf8_0%,#f1f6ef_100%)] py-12 sm:py-16 lg:py-20">
          <div className="absolute -right-40 top-8 -z-10 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal>
              <span className="eyebrow">Male sexual wellness</span>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-[#143b2c] sm:text-5xl lg:text-6xl lg:leading-[1.06]">सेक्स की सभी समस्याओं से छुटकारा </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">शीघ्रपतन (Premature Ejaculation), इरेक्शन से जुड़ी समस्याएं, कम Stamina, Performance का कम समय, Sexual Confidence और Relationship का दबाव जैसी समस्याओं को नज़र अंदाज़ नहीं करना चाहिए। Herbal Wellness Hub पुरुषों की Sexual Wellness के लिए एक ऐसा अनुभव देता है जो बिना किसी झूठे वादे के, समग्र रूप से मदद करता है।
</p>
              <div className="mt-7 flex flex-wrap gap-2 text-sm text-slate-700">
                {['Premature Ejaculation / शीघ्रपतन', 'Erection से जुड़ी समस्या', 'कम Stamina', 'Timing Confidence', 'Intimate Relationship Concerns'].map((item) => <span key={item} className="rounded-full border border-emerald-950/10 bg-white px-3 py-2 shadow-sm">{item}</span>)}
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button onClick={scrollToLeadForm} className="btn-primary">Fill the Form <ArrowRight size={18} /></button>
                <div className="rounded-2xl border border-emerald-950/10 bg-white px-5 py-3 shadow-sm">
                  <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Special Price</span>
                  <span className="mr-2 text-sm font-semibold text-slate-400 line-through">₹3999/-</span><strong className="text-2xl text-[#173f2f]">₹1299/-</strong>
                </div>
              </div>
              <div className="mt-5 max-w-2xl"><PriceCountdown compact /></div>
              <p className="mt-5 flex max-w-2xl items-start gap-2 text-xs leading-5 text-slate-500"><Info size={16} className="mt-0.5 shrink-0" />Sexual-health concerns के कई कारण हो सकते हैं। अगर समस्या लगातार बनी रहे या बढ़े, तो qualified medical professional से evaluation कराना बेहतर है।</p>
            </Reveal>

            <Reveal className="relative">
              <div className="mx-auto max-w-md rounded-[2.25rem] border border-white/70 bg-white/80 p-4 shadow-soft backdrop-blur sm:p-6">
                <div className="overflow-hidden rounded-[1.75rem] bg-[#e9f0e6]">
                  <img src="/images/vedaas1.png" alt="Herbal wellness product bottle in a botanical setting" className="aspect-[4/5] h-full w-full object-cover" fetchPriority="high" />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs text-slate-600">
                  <div className="rounded-2xl bg-emerald-50 p-3"><Clock3 className="mx-auto mb-2 text-emerald-800" size={18} />Timing confidence</div>
                  <div className="rounded-2xl bg-emerald-50 p-3"><Zap className="mx-auto mb-2 text-emerald-800" size={18} />Stamina support</div>
                  <div className="rounded-2xl bg-emerald-50 p-3"><HeartHandshake className="mx-auto mb-2 text-emerald-800" size={18} />Intimate wellness</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-900/15 to-transparent" />
          <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal>
              <div className="relative mx-auto max-w-xl">
                <div className="absolute -inset-5 -z-10 rounded-[3rem] bg-emerald-100/60 blur-2xl" />
                <div className="overflow-hidden rounded-[2.5rem] border border-emerald-950/10 bg-[#edf3e9] p-3 shadow-soft sm:p-5">
                  <img src="/images/vedaas.png" alt="Herbal Wellness Hub male wellness product" className="aspect-[4/5] w-full rounded-[2rem] object-cover" loading="eager" />
                </div>
                <div className="absolute -bottom-5 left-4 rounded-2xl border border-emerald-950/10 bg-white px-5 py-3 shadow-lg sm:left-8">
                  <span className="block text-xs font-semibold text-slate-500">Cash on Delivery</span>
                  <strong className="text-lg text-[#173f2f]">COD Available</strong>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <span className="eyebrow">Product Focus</span>
              <h2 className="h2">Male Sexual Wellness par Focus karne ke liye ek Premium Herbal Wellness Option</h2> 
<p className="copy">Stamina, performance confidence, timing confidence aur intimate wellness jaise concerns par dhyan dene walon ke liye product ko simple aur clear tareeke se present kiya gaya hai. Individual experience alag ho sakta hai, isliye ongoing sexual-health concern ko sirf supplement par depend karke ignore nahi karna chahiye.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {['Stamina aur energy support par focus', 'Performance confidence ko support karne wala wellness approach', 'Timing confidence aur intimate wellbeing par dhyaan', 'Cash on Delivery (COD) available'].map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#f5f7f2] p-4 text-sm leading-6 text-slate-700"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-800"><Check size={13} /></span>{item}</div>)}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div><span className="block text-sm font-semibold text-slate-400 line-through">₹3999/-</span><strong className="text-4xl text-[#173f2f]">₹1299/-</strong></div>
                <button onClick={scrollToLeadForm} className="btn-primary">Fill the Form <ArrowRight size={18} /></button>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <img src="/images/wellness-education1.png" alt="Educational male wellness illustration" className="card aspect-square w-full object-cover p-4" loading="lazy" />
                <img src="/images/wellness-education3.png" alt="Medical research style illustration" className="card mt-8 aspect-square w-full object-cover p-4" loading="lazy" />
              </div>
            </Reveal>
            <Reveal>
              <SectionHeading eyebrow="स्वास्थ्य जागरूकता" title="यौन स्वास्थ्य केवल प्रदर्शन का विषय नहीं है" copy="तनाव, नींद, शारीरिक स्वास्थ्य, आत्मविश्वास और रिश्ते में बातचीत जैसी कई बातें यौन स्वास्थ्य को प्रभावित कर सकती हैं। शीघ्रपतन, कम समय तक टिक पाना या इरेक्शन से जुड़ी परेशानी चिंता का कारण बन सकती है। किसी एक त्वरित समाधान के वादे पर निर्भर रहने के बजाय समस्या को सही तरह समझना और जरूरत पड़ने पर योग्य विशेषज्ञ से सलाह लेना अधिक उचित है।" />
              <div className="mt-7 grid gap-3">
                {['सहनशक्ति और शरीर की ऊर्जा पर ध्यान दें', 'प्रदर्शन के दबाव और चिंता को सही तरह समझें', 'समय को लेकर आत्मविश्वास और आपसी बातचीत बेहतर करें', 'समस्या लगातार बनी रहे तो चिकित्सकीय सलाह पर विचार करें'].map((item) => <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-800"><Check size={13} /></span>{item}</div>)}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-[#f5f7f2]">
          <div className="section-shell">
            <Reveal><SectionHeading eyebrow="Common concerns" title="Kaun se Concerns Aksar Confidence ko Affect karte hain" /></Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {concerns.map(({ title, icon: Icon, text }) => <Reveal key={title} className="h-full"><article className="card h-full p-5"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-800"><Icon size={21} /></span><h3 className="mt-5 text-lg font-bold text-[#173f2f]">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article></Reveal>)}
            </div>
          </div>
        </section>

  

     <section className="section-pad bg-[#173f2f] text-white"> 
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center"> 
            <Reveal> 
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">Traditional Wellness Ingredients</span> 
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Traditional Wellness Ingredients</h2> 
              <div className="mt-5 rounded-2xl border border-dashed border-white/25 bg-white/5 p-5 text-base leading-7 text-emerald-50/80 sm:text-lg"> 
               Key Natural Ingredients

Ashwagandha
Ayurveda mein traditionally stress management, general wellbeing aur daily vitality support ke liye use kiya jata hai.

Shilajit
Natural mineral-rich substance jo traditionally energy, strength aur overall wellness support ke liye use hota raha hai.

Safed Musli
Ayurvedic formulations mein traditionally strength, stamina aur general vitality support ke liye use ki jati hai.

Amla
Naturally vitamin C aur antioxidants ka source hai, jo daily nutrition aur overall wellness support mein help karta hai.
              </div> 
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-dashed border-white/20 bg-white/5 p-4 text-sm text-emerald-50/80"><ShieldCheck size={20} className="mt-0.5 shrink-0" />Ingredient-related benefits traditional use aur general wellness context mein diye gaye hain. Actual composition aur quantity product label ke according verify karein..</div> 
            </Reveal> 
            <Reveal><img src="/images/i.png" alt="Ingredients image placeholder" className="mx-auto w-full max-w-md rounded-[2rem] border border-dashed border-white/20 bg-white/5 p-6" loading="lazy" /></Reveal> 
          </div> 
        </section>

        <section className="section-pad bg-white">
          <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal><img src="/images/relationship.png" alt="Tasteful happy couple relationship-confidence illustration" className="card w-full p-5" loading="lazy" /></Reveal>
          <Reveal> 
              <SectionHeading eyebrow="Relationship Wellbeing" title="Better Confidence. Better Connection." copy="Sexual confidence aur open communication healthy intimate relationship ko support kar sakte hain. Partner satisfaction sirf timing ya stamina se define nahi hoti—comfort, trust aur communication bhi utne hi important factors hain." /> 
              <button onClick={scrollToLeadForm} className="btn-primary mt-7">Form Fill Karein <ArrowRight size={18} /></button> 
            </Reveal>
          </div>
        </section>

    <section className="section-pad bg-[#eef4ec]"> 
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"> 
            <Reveal><img src="/images/doctor.png" alt="Doctor discussing a health concern with an adult patient" className="card w-full p-4" loading="lazy" /></Reveal> 
            <Reveal> 
              <SectionHeading eyebrow="Medical Perspective" title="Sexual Health ko Ignore Mat Karein" copy="Sexual-health concerns ke causes har person mein different ho sakte hain. Stress, sleep, cardiovascular health, diabetes, hormones, medication side effects aur relationship factors bhi role play kar sakte hain. Agar symptoms continuously bane rahein, to qualified clinician se assessment karana useful ho sakta hai." /> 
              <p className="mt-5 rounded-2xl border border-emerald-900/10 bg-white p-4 text-sm leading-6 text-slate-600">Kisi specific doctor ki recommendation ya medical endorsement ka claim nahi kiya gaya hai. Product-related health decision lete waqt apni health history ke according qualified professional ki advice lena better hai.</p> 
            </Reveal> 
          </div> 
        </section>

<section className="section-pad bg-[#f5f7f2]">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <Reveal>
              <SectionHeading eyebrow="Product Details" title="Overall Male Sexual Wellness Support par Focus" copy="Product ko male sexual wellness, stamina, performance confidence aur intimate wellbeing jaise areas ke context mein present kiya gaya hai. Ingredients aur usage ke liye hamesha product pack par di gayi genuine label information follow karein." />
              <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                {['Stamina support par focus', 'Performance confidence support', 'Sexual confidence par dhyan', 'Intimate wellness approach', 'Better timing confidence ka focus', 'Pack label ke according usage'].map((x) => <div key={x} className="flex gap-2"><Check size={17} className="mt-0.5 shrink-0 text-emerald-800" />{x}</div>)}
              </div>
              <div className="mt-7 flex items-center gap-4"><div><span className="block text-sm font-semibold text-slate-400 line-through">₹3999/-</span><strong className="text-3xl text-[#173f2f]">₹1299/-</strong></div><button onClick={scrollToLeadForm} className="btn-primary">Form Fill Karein</button></div>
            </Reveal>
            <Reveal><div className="card mx-auto max-w-md overflow-hidden p-4"><img src="/images/product1.png" alt="Herbal wellness product bottle" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" loading="lazy" /></div></Reveal>
          </div>
        </section>

   <section className="section-pad bg-white">
          <div className="section-shell">
            <Reveal><SectionHeading eyebrow="Private experience" title="Aapki Privacy aur Clarity par Focus" copy="Sexual wellness personal topic hai, isliye experience ko simple, respectful aur bina unnecessary pressure ke rakha gaya hai." /></Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                [LockKeyhole, 'Private Details', 'Form mein basic details li jaati hain—Full Name, City, selected concern aur aapki likhi hui problem description.'],
                [ClipboardCheck, 'Clear Information', 'Benefits aur limitations ko clear language mein explain kiya gaya hai taaki misleading promise na bane.'],
                [HeartHandshake, 'Respectful Support', 'Sexual-health concerns ko judgement ke bina, professional aur practical tareeke se address kiya gaya hai.']
              ].map(([Icon, title, text]) => <Reveal key={title}><article className="card h-full p-6"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-800"><Icon size={22} /></span><h3 className="mt-5 text-xl font-bold text-[#173f2f]">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article></Reveal>)}
            </div>
          </div>
        </section>
    

      <section className="section-pad bg-[#f5f7f2]">
          <div className="section-shell">
            <Reveal><div className="overflow-hidden rounded-[2rem] border border-emerald-950/10 bg-white shadow-card"><div className="grid lg:grid-cols-[0.9fr_1.1fr]"><div className="bg-[#e7f1e6] p-7 sm:p-10"><div className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#173f2f] text-white"><Truck size={23} /></span><div><p className="text-sm font-semibold text-emerald-800">Payment Option</p><h2 className="text-3xl font-bold text-[#173f2f]">Cash on Delivery (COD) Available</h2></div></div><p className="mt-5 max-w-xl text-slate-600">No online payment is required. After submitting the form, your location and serviceability can be confirmed. For eligible locations, payment can be made at the time of delivery.</p></div><div className="grid gap-4 p-7 sm:grid-cols-3 sm:p-10">{[[BadgeIndianRupee, '₹1299/-', 'Regular ₹3999/-'], [MapPinCheck, 'Location Check', 'Serviceability confirmation'], [PackageCheck, 'COD', 'Delivery-time payment']].map(([Icon, title, text]) => <div key={title} className="rounded-2xl border border-emerald-950/10 bg-[#fbfcf8] p-5"><Icon className="text-emerald-800" size={22} /><h3 className="mt-4 text-xl font-bold text-[#173f2f]">{title}</h3><p className="mt-1 text-sm text-slate-500">{text}</p></div>)}</div></div></div></Reveal>
          </div>
        </section>
        <BuyerFeedback />

        <section className="section-pad bg-white">
          <div className="section-shell">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-emerald-950/10 bg-[#173f2f] text-white shadow-card">
                <div className="grid gap-8 p-[31px] sm:p-[43px] lg:grid-cols-[1fr_0.9fr] lg:items-center">
                  <div>
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">Price</span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Regular ₹3999/-, Special Price ₹1299/-</h2>
                    <p className="mt-3 max-w-2xl leading-7 text-emerald-50/80">Regular price ₹3999/- hai Aur special price ₹1299/- hain. Cash on Delivery bhi available hai।</p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <div><span className="block text-lg font-semibold text-emerald-100/60 line-through">₹3999/-</span><strong className="text-[51px] font-bold leading-none tracking-tight text-white">₹1299/-</strong></div>
                      <button onClick={scrollToLeadForm} className="btn-secondary">Fill the Form <ArrowRight size={18} /></button>
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
          <div><BrandMark /><p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">Ye website male sexual wellness ki general information aur product enquiry ke liye hai. Content diagnosis, emergency care ya personalized medical advice ka substitute nahi hain.</p></div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600" aria-label="Footer navigation"><a href="/privacy" className="hover:text-emerald-900">Privacy Policy</a><a href="/terms" className="hover:text-emerald-900">Terms & Conditions</a><a href="/disclaimer" className="hover:text-emerald-900">Disclaimer</a><a href="#contact" className="hover:text-emerald-900">Contact</a></nav>
        </div>
      </footer>
      <MobileStickyCta />
    </div>
  );
}

