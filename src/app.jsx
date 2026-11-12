import React,{useState} from "react";
const PHONE="(256) 476-3847", TEL="tel:+12564763847", SMS="sms:+12564763847";
const CTABG="/assets/cta.jpg";
const PEOPLE=[["Linda","+12565661515"],["Bethany","+12564763847"]];
const ContactPills=({c="justify-center"})=>(
  <div className={"flex flex-wrap gap-3 "+c}>
    {PEOPLE.map(([n,t])=>(
      <div key={n} className="inline-flex items-stretch rounded-full overflow-hidden border" style={{borderColor:"var(--gold)"}}>
        <span className="px-4 flex items-center h-cin text-xs font-bold">{n}</span>
        <a href={"tel:"+t} className="px-4 py-3 flex items-center gap-1.5 text-sm font-semibold btn-rose"><Phone/> Call</a>
        <a href={"sms:"+t} className="px-4 py-3 flex items-center gap-1.5 text-sm font-semibold btn-gold"><Msg/> Text</a>
      </div>))}
  </div>);

const LOGO="/assets/logo.webp";
const Logo=({s=40,c})=>(<img src={LOGO} width="440" height="350" alt="Two Generations Notary Solutions, LLC logo" className={c} style={c?{width:"auto"}:{height:s,width:"auto"}}/>);
const Phone=()=>(<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>);
const LI=()=>(<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>);
const LINKEDIN={Linda:"https://www.linkedin.com/in/linda-turner-notary",Bethany:"https://www.linkedin.com/in/bethany-dutton-notary",Company:"https://www.linkedin.com/company/two-generations-notary"};
const Msg=()=>(<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>);

const NAV=[["home","/","Home"],["about","/#about","About"],["services","/#services","Services"],["fees","/fees/","Fees"],["policies","/policies/","Policies"],["title","/title-companies/","Title Companies"],["contact","/contact/","Contact"]];
const Nav=({page,c})=>(
  <nav aria-label="Main" className={"border-t flex flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-x-8 h-cin text-[11px] sm:text-xs "+c} style={{borderColor:"var(--line)"}}>
    {NAV.map(([k,h,l])=>{const on=k===page; return <a key={k} href={h} aria-current={on?"page":undefined} className={"hover:opacity-70 pb-0.5 border-b "+(on?"font-bold":"")} style={on?{color:"var(--gold)",borderColor:"var(--gold)"}:{borderColor:"transparent"}}>{l}</a>;})}
  </nav>);
const HEADPEOPLE=[["Linda Turner","(256) 566-1515","+12565661515","text-left items-start"],["Bethany Dutton","(256) 476-3847","+12564763847","text-right items-end"]];
function Header({page}){
  if(page!=="home") return(
  <header className="dk leather">
    <div className="max-w-5xl mx-auto px-4 pt-3 pb-3">
      <div className="flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3">
          <Logo s={48}/>
          <span className="flex flex-col">
            <span className="serif text-xl sm:text-2xl font-semibold leading-none" style={{color:"var(--gold)"}}>Two Generations</span>
            <span className="h-cin text-[10px] mt-1.5" style={{color:"var(--gold)"}}>Notary Solutions, LLC</span>
          </span>
        </a>
        <div className="hidden md:flex gap-6 text-sm font-medium" style={{color:"var(--gold)"}}>
          {HEADPEOPLE.map(([n,d,t])=><a key={n} href={"tel:"+t} className="inline-flex items-center gap-1.5 hover:opacity-70"><Phone/>{n.split(" ")[0]} {d}</a>)}
        </div>
      </div>
      <Nav page={page} c="mt-3 pt-3"/>
    </div>
  </header>);
  return(
  <header className="dk leather">
    <div className="max-w-3xl mx-auto px-5 pt-5 sm:pt-7 pb-5">
      <a href="/" className="flex flex-col items-center text-center">
        <Logo c="h-24 sm:h-[130px]"/>
        <span className="serif text-3xl sm:text-4xl font-semibold mt-3 leading-none" style={{color:"var(--gold)"}}>Two Generations</span>
        <span className="h-cin text-xs mt-2" style={{color:"var(--gold)"}}>— Notary Solutions, LLC —</span>
      </a>
      <div className="mt-5 sm:mt-6 flex justify-between gap-4">
        {HEADPEOPLE.map(([n,d,t,c])=>(
          <div key={n} className={"flex flex-col "+c}>
            <span className="h-cin text-[13px] sm:text-lg font-semibold">{n}</span>
            <a href={"tel:"+t} className="mt-1 inline-flex items-center gap-1.5 text-sm sm:text-base font-medium" style={{color:"var(--gold)"}}><Phone/>{d}</a>
            <a href={LINKEDIN[n.split(" ")[0]]} target="_blank" rel="noopener" aria-label={n+" on LinkedIn"} className="mt-1 inline-flex items-center gap-1.5 text-xs sm:text-sm hover:opacity-70" style={{color:"var(--gold)"}}><LI/>LinkedIn</a>
          </div>))}
      </div>
      <div className="mt-4 text-center">
        <a href="mailto:info@twogenerationsnotary.com" className="text-sm sm:text-base" style={{color:"var(--gold)"}}>info@twogenerationsnotary.com</a>
      </div>
      <Nav page={page} c="mt-5 pt-4"/>
    </div>
  </header>);
}

const services=[["Mobile Notary"],["Loan Signing Agent"],["Real Estate Documents"],["Medical & Family"],["Business Documents"]];
const P={
 clock:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
 home:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10",
 shield:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
 user:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
 pin:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
 heart:"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z",
 file:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h8",
 brief:"M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
 pen:"M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z",
};
const Ic=({n,s=22})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={P[n]}/></svg>;
const Head=({k,t,h1})=>{const T=h1?"h1":"h2"; return(
  <div className="text-center">
    <p className="h-cin text-[11px]" style={{color:"var(--gold)"}}>{k}</p>
    <T className="h-cin text-2xl md:text-3xl mt-2">{t}</T>
    <div className="flex items-center justify-center gap-2 mt-3 text-xs" style={{color:"var(--gold)"}}><span className="h-px w-16" style={{background:"var(--gold)"}}/>✦<span className="h-px w-16" style={{background:"var(--gold)"}}/></div>
  </div>);};
const Photo=({label})=>(
  <div className="rounded-2xl flex flex-col items-center justify-center text-center p-6 min-h-[280px] h-full border dk leather" style={{borderColor:"#e3c58b"}}>
    <Logo s={120}/><p className="text-xs mt-4" style={{color:"var(--muted)"}}>{label}</p>
  </div>);
const band=["Confidential & Secure","Certified Signing Agents","Insured & Background-Screened","Commissioned Alabama Notaries"];
const colA=[["pen","Mobile Notarizations"],["file","Powers of Attorney"],["file","Affidavits & Forms"],["heart","Medical & Family Documents"],["brief","Vehicle & Business Documents"]];
const colB=[["home","Purchase Signings"],["home","Refinance Signings"],["file","HELOC Signings"],["file","Reverse Mortgage Signings"],["pin","Hospital & Home Signings"]];
const List=({t,items})=>(
  <div className="card p-6">
    <h3 className="h-cin text-sm text-center" style={{color:"var(--gold)"}}>{t}</h3>
    <ul className="mt-4 grid gap-3">{items.map(([i,l])=><li key={l} className="flex items-center gap-3 text-sm"><span style={{color:"var(--gold)"}}><Ic n={i}/></span>{l}</li>)}</ul>
  </div>);

function Home(){
  return(<>
  <section className="rosegold py-4 text-center">
    <p className="h-cin text-xs sm:text-base font-semibold px-4 leading-relaxed" style={{color:"#6f4e14",letterSpacing:".16em"}}>Mobile Notary ✦ Loan Signing Agents ✦ Real Estate ✦ Medical &amp; Family Documents</p>
  </section>

  <section className="dk leather">
    <div className="max-w-3xl mx-auto px-5 py-14 md:py-20 text-center">
      <h1 className="serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1]">Two Generations.<br/><span style={{color:"var(--gold)"}}>One Trusted Service.</span></h1>
      <div className="mx-auto my-6 h-px w-24" style={{background:"var(--gold)"}}/>
      <p className="text-lg leading-relaxed" style={{color:"var(--muted)"}}>We are a mother-daughter team of Mobile Notaries and Certified Loan Signing Agents, proudly serving Decatur and all of North Alabama. We come to your home, office, hospital or wherever is most convenient for you. Available 24/7, including last-minute appointments.</p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <a href="/contact/" className="btn btn-rose">Book an Appointment</a>
        </div>
      <div className="mt-4"><ContactPills/></div>
    </div>
  </section>

  <section className="rosegold" style={{color:"var(--onrose)"}}>
    <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 text-center">
      {band.map(l=>(<div key={l} className="px-2 flex items-center justify-center"><span className="h-cin text-[11px] sm:text-xs font-bold leading-snug" style={{letterSpacing:".12em",color:"#2b1d17"}}>{l}</span></div>))}
    </div>
  </section>

  <section id="about" className="max-w-3xl mx-auto px-4 py-16">
    <div className="text-center">
      <p className="h-cin text-[11px]" style={{color:"var(--gold)"}}>Why choose</p>
      <h2 className="h-cin text-2xl md:text-3xl mt-2">Two Generations?</h2>
      <div className="h-4"/>
      <p className="leading-relaxed" style={{color:"var(--muted)"}}>At Two Generations Notary Solutions, LLC, we believe a signature is more than ink. It is a promise. As a mother-daughter team, we bring care, accuracy and hospitality to every appointment, from a quick notarization to a full loan signing.</p>
      <a href="/contact/" className="btn btn-line mt-6 h-cin text-xs">Get in touch</a>
    </div>
  </section>

  <section id="services" className="max-w-6xl mx-auto px-4 pb-16">
    <Head k="Our services" t="Notary Solutions"/>
    <div className="mt-10 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
      <List t="Notary Services" items={colA}/>
      <List t="Loan & Real Estate" items={colB}/>
      <div className="md:col-span-2 flex flex-wrap justify-center gap-3"><a href="/fees/" className="btn btn-gold">See our fees</a><a href="/title-companies/" className="btn btn-line">Title company? See our signing coverage</a></div>
      
    </div>
  </section>

  <section className="silk" style={{color:"#f6efe8"}}>
    <div className="max-w-3xl mx-auto px-5 py-12 text-center">
      <p className="text-3xl md:text-4xl leading-snug" style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",fontWeight:500}}><span className="text-5xl align-middle mr-1" style={{color:"#f0dcc0"}}>“</span>Life is hard, let us carry the paperwork for you.<span className="text-5xl align-middle ml-1" style={{color:"#f0dcc0"}}>”</span></p>
      <div className="mx-auto my-5 h-px w-16" style={{background:"rgba(246,239,232,.5)"}}/>
      <p className="serif text-xl">— Linda and Bethany</p>
      <p className="h-cin text-[11px] mt-1" style={{letterSpacing:".14em"}}>Two Generations Notary Solutions, LLC</p>
    </div>
  </section>

  <section className="px-4 py-16">
    <div className="max-w-4xl mx-auto rounded-3xl p-10 text-center border" style={{borderColor:"var(--rg)",backgroundImage:"linear-gradient(rgba(250,238,234,.78),rgba(250,238,234,.78)),url("+CTABG+")",backgroundSize:"cover",backgroundPosition:"center"}}>
      <h2 className="h-cin text-3xl font-bold" style={{color:"#2b1d17"}}>Ready when you are</h2>
      <p className="mt-2 text-lg font-semibold" style={{color:"#2b1d17"}}>Tell us what you need notarized and where. We’ll take it from there.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a href="/contact/" className="btn btn-gold">Request Appointment</a>
        <ContactPills/>
      </div>
    </div>
  </section>
  </>);
}

const SIGNERS=["1 signer","2 signers","3 signers","4 or more signers"];
const WITNESSES=["No witnesses needed","Witnesses needed: I will bring them","Witnesses needed: please provide them"];
function Contact(){
  const [type,setType]=useState("appointment");
  const [sent,setSent]=useState(false);
  const [ok,setOk]=useState(null);
  const [f,setF]=useState({name:"",phone:"",email:"",service:"Mobile Notary",doc:"",signers:SIGNERS[0],witnesses:WITNESSES[0],date:"",time:"",address:"",msg:""});
  const set=k=>e=>setF({...f,[k]:e.target.value});
  const submit=()=>{ if(f.name&&(f.phone||f.email)){ setSent(true); setOk(null);
    fetch("https://formspree.io/f/mbggwwjj",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:(type==="appointment"?"Appointment request":"Question")+" from "+f.name,request_type:type,name:f.name,phone:f.phone,...(f.email?{email:f.email}:{}),...(type==="appointment"?{service:f.service,document_type:f.doc,signers:f.signers,witnesses:f.witnesses,preferred_date:f.date,preferred_time:f.time,address:f.address}:{}),message:f.msg})}).then(r=>setOk(r.ok)).catch(()=>setOk(false));
  } };
  const text=`Hi, I’d like to ${type==="appointment"?"book an appointment":"ask a question"}.\n\nName: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email}`+(type==="appointment"?`\nService: ${f.service}\nDocument: ${f.doc}\nSigners: ${f.signers}\n${f.witnesses}\nPreferred date: ${f.date} ${f.time}\nAddress: ${f.address}`:"")+`\n\n${f.msg}`;
  const mail="mailto:info@twogenerationsnotary.com?subject="+encodeURIComponent(type==="appointment"?"Appointment request":"Question")+"&body="+encodeURIComponent(text);
  return(
  <section className="max-w-5xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-5 gap-8">
    <div className="md:col-span-2">
      <p className="text-xs tracking-[.22em] uppercase font-semibold" style={{color:"var(--gold)"}}>Contact</p>
      <h1 className="serif text-3xl md:text-4xl font-bold mt-2">Let’s set up your signing</h1>
      <p className="mt-3" style={{color:"var(--muted)"}}>Prefer to talk? Call or text anytime, or send the form and we’ll reply quickly.</p>
      <div className="mt-6 grid gap-3">
        <ContactPills c="justify-start"/>
      </div>
      <p className="mt-6 text-sm" style={{color:"var(--muted)"}}>Serving Decatur &amp; North Alabama · info@twogenerationsnotary.com</p>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold" style={{color:"var(--gold)"}}>
        {[["Linda on LinkedIn",LINKEDIN.Linda],["Bethany on LinkedIn",LINKEDIN.Bethany],["Our company page",LINKEDIN.Company]].map(([l,h])=><a key={l} href={h} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 hover:opacity-70"><LI/>{l}</a>)}
      </div>
    </div>
    <div className="md:col-span-3 card p-6">
      {sent?(
        <div className="text-center py-10">
          <div className="text-4xl" style={{color:"var(--gold)"}}>✦</div>
          <h2 className="serif text-2xl font-semibold mt-2">Thank you, {f.name.split(" ")[0]}!</h2>
          <p className="mt-2" style={{color:"var(--muted)"}}>{ok===true?"Your message was sent to Linda and Bethany. We’ll be in touch soon. Want to reach us right away?":ok===false?"We couldn’t send that automatically. Please tap below so your request reaches us right away.":"Sending your request…"}</p>
          <div className="mt-5 grid gap-3 max-w-xs mx-auto">
            <a href={mail} className="btn btn-gold">Email Us</a>
            {PEOPLE.map(([n,t])=><a key={n} href={"sms:"+t+"?&body="+encodeURIComponent(text)} className="btn btn-line"><Msg/> Text {n}</a>)}
          </div>
          <button className="btn btn-line mt-5" onClick={()=>{setSent(false);setOk(null);}}>Send another</button>
        </div>
      ):(
        <div className="grid gap-4">
          <div className="grid grid-cols-2 p-1 rounded-full" style={{background:"var(--soft)"}}>
            {[["appointment","Book Appointment"],["question","Ask a Question"]].map(([k,l])=>(
              <button key={k} onClick={()=>setType(k)} className="py-2 rounded-full text-sm font-semibold transition" style={type===k?{background:"var(--esp)",color:"var(--onesp)"}:{color:"var(--ink)"}}>{l}</button>))}
          </div>
          <input className="field" placeholder="Full name *" value={f.name} onChange={set("name")}/>
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="field" type="tel" placeholder="Phone" value={f.phone} onChange={set("phone")}/>
            <input className="field" type="email" placeholder="Email" value={f.email} onChange={set("email")}/>
          </div>
          {type==="appointment"&&<>
            <div className="grid sm:grid-cols-2 gap-4">
              <select className="field" aria-label="Service" value={f.service} onChange={set("service")}>
                {services.map(s=><option key={s[0]}>{s[0]}</option>)}
              </select>
              <input className="field" placeholder="Type of document (e.g. power of attorney)" value={f.doc} onChange={set("doc")}/>
              <select className="field" aria-label="Number of signers" value={f.signers} onChange={set("signers")}>
                {SIGNERS.map(o=><option key={o}>{o}</option>)}
              </select>
              <select className="field" aria-label="Witnesses" value={f.witnesses} onChange={set("witnesses")}>
                {WITNESSES.map(o=><option key={o}>{o}</option>)}
              </select>
              <label className="grid gap-1 text-xs font-semibold" style={{color:"var(--muted)"}}>Preferred date<input className="field text-base font-normal" type="date" value={f.date} onChange={set("date")}/></label>
              <label className="grid gap-1 text-xs font-semibold" style={{color:"var(--muted)"}}>Preferred time<input className="field text-base font-normal" type="time" value={f.time} onChange={set("time")}/></label>
            </div>
            <input className="field" placeholder="Address where we should meet you" value={f.address} onChange={set("address")}/>
          </>}
          <textarea className="field" rows="3" placeholder={type==="appointment"?"Anything else we should know?":"How can we help?"} value={f.msg} onChange={set("msg")}/>
          <button className="btn btn-gold" onClick={submit}>{type==="appointment"?"Request Appointment":"Send Question"}</button>
          <p className="text-xs" style={{color:"var(--muted)"}}>Name plus a phone or email is required.{type==="appointment"?" Each signer needs a current government photo ID. Please leave documents unsigned until we arrive.":""}</p>
        </div>)}
    </div>
  </section>);
}

function Chat({open,setOpen}){
  const [log,setLog]=useState([{b:1,t:"Hi y’all! Ask us anything, or tap a topic below."}]);
  const qa={
    "Do you travel to me?":"Yes! We come to your home, office, hospital or anywhere convenient.",
    "What should I bring?":"A valid government photo ID and your unsigned documents. We’ll do the rest.",
    "Loan signings?":"We’re certified signing agents for mortgage signings and refinances.",
    "What are your fees?":"Notarizations are $10 per notarial act, plus a travel fee that starts at $30. Loan signings start at $100. Our Fees page has the full list.",
    "What are your hours?":"Regular hours are 9 am to 5 pm, Monday through Friday. We’re also available 24/7, including last-minute appointments, for an added fee.",
  };
  const ask=q=>setLog(l=>[...l,{t:q},{b:1,t:qa[q]}]);
  return(
  <div className="fixed right-3 md:right-4 z-40 bottom-[calc(env(safe-area-inset-bottom,0px)+68px)] md:bottom-5">
    {open&&<div className="card shadow-2xl w-[300px] max-w-[calc(100vw-2rem)] mb-3 overflow-hidden">
      <div className="px-4 py-3 flex justify-between items-center" style={{background:"var(--esp)",color:"var(--onesp)"}}>
        <span className="serif font-semibold">Quick questions</span>
        <button onClick={()=>setOpen(false)} aria-label="Close">✕</button>
      </div>
      <div className="p-3 space-y-2 max-h-60 overflow-y-auto text-sm">
        {log.map((m,i)=><div key={i} className={m.b?"":"text-right"}><span className="inline-block px-3 py-2 rounded-2xl" style={m.b?{background:"var(--soft)"}:{background:"var(--gold)",color:"#1e1613"}}>{m.t}</span></div>)}
      </div>
      <div className="p-3 pt-0 flex flex-wrap gap-2">
        {Object.keys(qa).map(q=><button key={q} onClick={()=>ask(q)} className="text-xs px-3 py-1.5 rounded-full border" style={{borderColor:"var(--gold)"}}>{q}</button>)}
        <a href="/fees/" className="text-xs px-3 py-1.5 rounded-full border" style={{borderColor:"var(--gold)"}}>See all fees</a>
        <a href="sms:+12565661515" className="text-xs px-3 py-1.5 rounded-full btn-esp">Text Linda</a>
        <a href="sms:+12564763847" className="text-xs px-3 py-1.5 rounded-full btn-esp">Text Bethany</a>
      </div>
    </div>}
    <button onClick={()=>setOpen(!open)} aria-label="Quick questions" className="ml-auto hidden md:flex w-14 h-14 rounded-full items-center justify-center shadow-xl btn-gold"><Msg/></button>
  </div>);
}

function StickyBar({onChat}){
  return(
  <div className="md:hidden fixed bottom-0 inset-x-0 z-30 flex gap-1.5 p-2 border-t" style={{background:"var(--bg)",borderColor:"var(--line)",paddingBottom:"calc(env(safe-area-inset-bottom,0px) + .5rem)"}}>
    {PEOPLE.map(([n,t])=>(<div key={n} className="flex gap-1 flex-1 min-w-0"><a href={"tel:"+t} className="btn btn-esp flex-1 min-w-0 !px-2 !py-2.5 text-sm"><Phone/> {n}</a><a href={"sms:"+t} aria-label={"Text "+n} className="btn btn-gold !px-2.5 !py-2.5"><Msg/></a></div>))}
    <button onClick={onChat} aria-label="Quick questions" className="btn btn-line !px-3.5 !py-2.5 text-base font-bold">?</button>
  </div>);
}

function Footer(){
  return(
  <footer className="border-t dk leather" style={{borderColor:"var(--line)"}}>
    <nav aria-label="Footer" className="max-w-6xl mx-auto px-4 pt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 h-cin text-[11px] sm:text-xs">
      {[["/","Home"],["/fees/","Fees"],["/policies/","Policies"],["/title-companies/","Title Companies"],["/contact/","Contact"]].map(([h,l])=><a key={h} href={h} className="hover:opacity-70">{l}</a>)}
      <a href="mailto:info@twogenerationsnotary.com" className="hover:opacity-70 normal-case tracking-normal" style={{color:"var(--gold)"}}>info@twogenerationsnotary.com</a>
    </nav>
    <div className="max-w-6xl mx-auto px-4 py-8 pb-28 md:pb-10 flex flex-col md:flex-row justify-between gap-6 items-center text-center md:text-left">
      <div className="flex items-center gap-3"><Logo s={36}/><div><p className="serif font-semibold">Two Generations Notary Solutions, LLC</p><p className="text-sm" style={{color:"var(--gold)"}}>Two Generations. One Trusted Service.</p></div></div>
      <p className="text-sm" style={{color:"var(--muted)"}}>© 2026 Two Generations Notary Solutions, LLC · Linda (256) 566-1515 · Bethany (256) 476-3847</p>
      <a href={LINKEDIN.Company} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-70" style={{color:"var(--gold)"}}><LI/> Follow us on LinkedIn</a>
    </div>
  </footer>);
}

const TITLE_TYPES=["Purchase signing","Refinance signing","HELOC signing","Reverse mortgage signing","Hospital or home signing","Other"];
const COUNTIES=["Morgan County","Limestone County","Madison County","Lawrence County"];
const tcards=[
 ["pin","Coverage",["Morgan County","Limestone County","Madison County","Lawrence County","Based in Decatur, Alabama"]],
 ["shield","Credentials",["Commissioned Alabama notaries","Certified Notary Signing Agents through the National Notary Association","Insured and background-screened","Confidential and secure"]],
 ["clock","Availability",["Available 24/7, including last-minute signings","Weekdays, weeknights and weekends","We reply to coverage requests the same business day"]],
 ["pen","Signing types",["Purchase","Refinance","HELOC","Reverse mortgage","Hospital and home signings"]],
 ["file","Document handling",["Printing of signing packages","Scanning and returning completed documents","Documents accepted by email"]],
];
function Title(){
  const [f,setF]=useState({company:"",name:"",phone:"",email:"",type:TITLE_TYPES[0],county:COUNTIES[0],when:"",msg:""});
  const [sent,setSent]=useState(false);
  const [ok,setOk]=useState(null);
  const set=k=>e=>setF({...f,[k]:e.target.value});
  const go=()=>{const el=document.getElementById("coverage-form"); if(el) el.scrollIntoView({behavior:"smooth"});};
  const submit=()=>{ if(f.company&&f.name&&(f.phone||f.email)){ setSent(true); setOk(null);
    fetch("https://formspree.io/f/mbggwwjj",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:"Signing coverage request from "+f.company,request_type:"title company coverage request",company:f.company,contact_name:f.name,phone:f.phone,...(f.email?{email:f.email}:{}),signing_type:f.type,county:f.county,date_and_time:f.when,message:f.msg})}).then(r=>setOk(r.ok)).catch(()=>setOk(false));
  } };
  const text="Signing coverage request\n\nCompany: "+f.company+"\nContact: "+f.name+"\nPhone: "+f.phone+"\nEmail: "+f.email+"\nSigning type: "+f.type+"\nCounty: "+f.county+"\nDate and time: "+f.when+"\n\n"+f.msg;
  const mail="mailto:info@twogenerationsnotary.com?subject="+encodeURIComponent("Signing coverage request from "+f.company)+"&body="+encodeURIComponent(text);
  return(<>
  <section className="bokeh dk">
    <div className="max-w-3xl mx-auto px-5 py-14 md:py-20 text-center">
      <p className="h-cin text-[11px]" style={{color:"var(--gold)"}}>For Title Companies</p>
      <h1 className="serif text-4xl sm:text-5xl font-semibold leading-[1.1] mt-3">Dependable Loan Signing Coverage in North Alabama</h1>
      <div className="mx-auto my-6 h-px w-24" style={{background:"var(--gold)"}}/>
      <p className="text-lg leading-relaxed" style={{color:"var(--muted)"}}>Two Generations Notary Solutions, LLC is a mother-daughter team of commissioned Alabama notaries and certified loan signing agents. We give title companies, escrow offices, attorneys and lenders careful, confidential coverage for signings across Morgan, Limestone, Madison and Lawrence counties.</p>
      <div className="mt-8"><button onClick={go} className="btn btn-rose">Request Signing Coverage</button></div>
    </div>
  </section>
  <section className="max-w-6xl mx-auto px-4 py-14">
    <Head k="What you can count on" t="Our Coverage and Credentials"/>
    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {tcards.map(([i,t,items])=>(
        <div key={t} className="card p-6">
          <div className="flex items-center gap-3"><span style={{color:"var(--gold)"}}><Ic n={i} s={26}/></span><h3 className="h-cin text-sm font-semibold">{t}</h3></div>
          <ul className="mt-4 grid gap-2.5">{items.map(l=><li key={l} className="flex items-start gap-2.5 text-sm"><span className="mt-1.5"><svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 0l1.2 3.8L10 5 6.2 6.2 5 10 3.8 6.2 0 5l3.8-1.2z" fill="#8f6a2c"/></svg></span>{l}</li>)}</ul>
        </div>))}
      <div className="card p-6 sm:col-span-2 lg:col-span-1 text-center flex flex-col items-center justify-center gap-3">
        <h3 className="h-cin text-sm font-semibold">Talk to us directly</h3>
        <p className="text-sm" style={{color:"var(--muted)"}}>Call or text either of us.</p>
        <div className="flex flex-col gap-3"><ContactPills c="justify-center"/></div>
        <a href="mailto:info@twogenerationsnotary.com" className="text-sm font-medium" style={{color:"var(--gold)"}}>info@twogenerationsnotary.com</a>
      </div>
    </div>
  </section>
  <section id="coverage-form" className="max-w-3xl mx-auto px-4 pb-16">
    <div className="card p-6 md:p-8">
      {sent?(
        <div className="text-center py-8">
          <div className="text-4xl" style={{color:"var(--gold)"}}>✦</div>
          <h2 className="serif text-2xl font-semibold mt-2">Thank you!</h2>
          <p className="mt-2" style={{color:"var(--muted)"}}>{ok===true?"Your request was sent to Linda and Bethany. We reply to coverage requests the same business day. Need us right away?":ok===false?"We couldn’t send that automatically. Please tap below so your request reaches us right away.":"Sending your request…"}</p>
          <div className="mt-5 grid gap-3 max-w-xs mx-auto">
            <a href={mail} className="btn btn-gold">Email Us</a>
            {PEOPLE.map(([n,t])=><a key={n} href={"sms:"+t+"?&body="+encodeURIComponent(text)} className="btn btn-line"><Msg/> Text {n}</a>)}
          </div>
          <button className="btn btn-line mt-5" onClick={()=>{setSent(false);setOk(null);}}>Send another</button>
        </div>
      ):(
        <div className="grid gap-4">
          <div className="text-center"><h2 className="h-cin text-xl font-bold">Request Signing Coverage</h2><p className="text-sm mt-2" style={{color:"var(--muted)"}}>Tell us about the signing and we’ll confirm availability.</p></div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="field" placeholder="Company *" value={f.company} onChange={set("company")}/>
            <input className="field" placeholder="Your name *" value={f.name} onChange={set("name")}/>
            <input className="field" type="tel" placeholder="Phone" value={f.phone} onChange={set("phone")}/>
            <input className="field" type="email" placeholder="Email" value={f.email} onChange={set("email")}/>
            <select className="field" value={f.type} onChange={set("type")}>{TITLE_TYPES.map(s=><option key={s}>{s}</option>)}</select>
            <select className="field" value={f.county} onChange={set("county")}>{COUNTIES.map(s=><option key={s}>{s}</option>)}</select>
          </div>
          <input className="field" placeholder="Signing date and time" value={f.when} onChange={set("when")}/>
          <textarea className="field" rows="4" placeholder="Property or signing address, number of signers, and anything we should know" value={f.msg} onChange={set("msg")}/>
          <button className="btn btn-gold" onClick={submit}>Request Signing Coverage</button>
          <p className="text-xs" style={{color:"var(--muted)"}}>Company, your name, and a phone or email are required.</p>
        </div>)}
    </div>
  </section>
  </>);
}

const FEES=[
 ["General Notary Services",[["Notarization (per notarial act, per signer)","$10"],["Witness provided by us (each)","$15"],["Document printing (per page)","$0.50"]],"Alabama law caps notary fees at $10 per notarial act (Ala. Code § 36-20-74). Travel and service fees are listed separately."],
 ["Mobile Travel Fee (from Decatur)",[["Up to 10 miles","$30"],["11 – 25 miles","$45"],["26 – 40 miles","$60"],["Over 40 miles","$60 + $1.50 per extra mile"]]],
 ["Loan Signings",[["Refinance or HELOC","$125"],["Purchase (buyer)","$150"],["Seller package","$100"],["Reverse mortgage","$175"],["Scanbacks","+ $25"]],"Flat rate. Printing and travel within 25 miles included."],
 ["Additional Fees",[["Before 9 am or after 5 pm, weekends & holidays","+ $25"],["Late night (10 pm – 7 am)","+ $50"],["Same-day or last-minute appointment","+ $20"],["Hospital, nursing home or assisted living visit","+ $15"],["Waiting time (first 15 minutes free)","$10 per 15 min"],["Cancellation after we are on the way","Travel fee due"]]],
];
function Fees(){
  return(
  <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
    <Head h1 k="Clear, upfront pricing" t="Fee Schedule"/>
    <p className="text-center mt-6 max-w-2xl mx-auto leading-relaxed" style={{color:"var(--muted)"}}>We quote your full total before every appointment.</p>
    <div className="card mt-6 p-5 max-w-2xl mx-auto grid gap-2.5 text-sm leading-relaxed">
      <p><span className="font-semibold" style={{color:"var(--gold)"}}>Regular hours:</span> 9 am to 5 pm, Monday through Friday.</p>
      <p><span className="font-semibold" style={{color:"var(--gold)"}}>After hours:</span> available 24/7, including last-minute appointments, for the added fees below.</p>
      <p><span className="font-semibold" style={{color:"var(--gold)"}}>Payment:</span> due at the time of service by cash, check, card, Zelle, Venmo or Cash App.</p>
      <p><span className="font-semibold" style={{color:"var(--gold)"}}>Deposit:</span> for after-hours, same-day or long-distance appointments, we may ask for the travel fee upfront.</p>
    </div>
    <div className="mt-10 grid md:grid-cols-2 gap-5">
      {FEES.map(([t,rows,note])=>(
        <div key={t} className="card overflow-hidden">
          <h3 className="h-cin text-xs font-bold px-5 py-3 rosegold" style={{color:"#2b1d17"}}>{t}</h3>
          <ul className="px-5 py-2">{rows.map(([l,p])=>(
            <li key={l} className="flex justify-between gap-4 py-2.5 text-sm border-b last:border-0" style={{borderColor:"var(--line)"}}><span>{l}</span><span className="font-semibold text-right whitespace-nowrap" style={{color:"var(--gold)"}}>{p}</span></li>))}
          </ul>
          {note&&<p className="px-5 pb-4 text-xs italic" style={{color:"var(--muted)"}}>{note}</p>}
        </div>))}
    </div>
    <div className="mt-10 flex flex-wrap justify-center gap-3">
      <a href="/contact/" className="btn btn-gold">Request Appointment</a>
      <a href="/policies/" className="btn btn-line">Read our policies</a>
    </div>
  </section>);
}

const POLICIES=[
 ["Booking & appointments",["Book by phone, text, email or the form on our website. We confirm every appointment in writing with the date, time, address and quoted total.","Tell us when you book: the type of document, how many signers, how many signatures need notarizing, and whether witnesses are needed.","Regular hours are 9 am to 5 pm, Monday through Friday. We are also available 24/7, including evenings, weekends, holidays and last-minute appointments, for an added fee listed on our Fees page.","Same-day appointments depend on availability and carry a rush fee.","For loan signings, the title company or signing service must send documents at least 2 hours before the appointment so we can print and review them."]],
 ["Fees & payment",["Payment is due at the time of service. We accept cash, check, card, Zelle, Venmo and Cash App.","Notary fees are $10 per notarial act, the most Alabama law allows. Travel and service fees are separate and always shown on their own line.","We quote the full total before the appointment, and the price does not change unless the job changes (more signers, more stamps, longer wait).","Title companies and signing services are invoiced and pay on the terms agreed when they book.","For after-hours, same-day or long-distance appointments, we may ask for the travel fee upfront by payment link. This deposit is applied to your final total and is non-refundable once we are on the way.","Returned checks carry a $25 fee."]],
 ["Cancellations, rescheduling & waiting time",["You can cancel or reschedule for free any time before we leave for your appointment. Once we are on the way, the travel fee is due.","Rescheduling is free with at least 2 hours’ notice.","If no signer is there when we arrive, or the signing can’t go ahead because of missing ID or documents, the travel fee is due.","The first 15 minutes of waiting are free. After that, waiting time is $10 per 15 minutes.","If we are running late, we will call or text you before your appointment time."]],
 ["What signers must bring",["Every signer must be present in person with a current, government-issued photo ID.","Accepted ID includes a driver’s license, state ID card, passport or military ID. The name on the ID must match the name on the document.","Leave documents unsigned until we are there, since we must watch you sign. Fill in all blanks before the appointment.","If your document needs witnesses, tell us when you book. You can bring your own, or we can provide one for $15 each.","If a signer has no valid ID, call us before booking so we can talk through options."]],
 ["When we may decline a notarization",["We will not notarize if anything about the signing raises a legal or ethical concern. When that happens, fees already earned (such as travel) are still due.","The signer can’t be identified, or the ID is expired, damaged or doesn’t match.","The signer seems confused, unaware of what they are signing, or pressured by someone else.","The document is incomplete, has blank spaces, or appears altered.","The signer is not physically present.","We are asked to backdate, change a date, or notarize a signature we did not see."]],
 ["What we can’t do",["We are notaries, not attorneys, so we cannot give legal advice or tell you what to sign.","We can’t explain what a document means legally, choose which form you need, or fill out legal documents for you.","We can’t choose the type of notarial certificate for you. If your document has none, you must tell us which one you need.","We don’t notarize our own signatures, each other’s, or a family member’s, or any document we have a personal or financial interest in.","During loan signings we can point out where to sign and date, but loan terms and rates are questions for your lender."]],
 ["Hospital & care facility visits",["We gladly come to hospitals, nursing homes, assisted living and private homes for signers who can’t travel. These visits carry a $15 added fee.","Before we come, please check the facility’s visiting rules and let staff know we are coming.","The signer must be awake, able to communicate, and understand what they are signing. If they can’t, we will reschedule rather than notarize.","The signer must still have valid ID. If it has expired, call us first.","We serve as notaries only during these visits and do not give medical opinions."]],
 ["Privacy & document handling",["What you share with us stays confidential. We never sell or share your personal information.","We don’t keep copies of your documents after the appointment, except as a title company or signing service requires.","Loan documents we print are delivered as instructed, or shredded if left over.","Emails and files you send us are deleted once they are no longer needed for the job."]],
 ["Safety & conduct",["We want every appointment to be safe and respectful for everyone.","We may end an appointment if we feel unsafe or if anyone is abusive. Fees earned up to that point are still due.","Please secure pets before we arrive.","If you prefer, we can meet at a public place, such as a library or coffee shop."]],
];
function Policies(){
  return(
  <section className="max-w-3xl mx-auto px-4 py-12 md:py-16">
    <Head h1 k="Good to know" t="Client Policies"/>
    <p className="text-center mt-6 leading-relaxed" style={{color:"var(--muted)"}}>These policies apply to every appointment with Two Generations Notary Solutions, LLC, from a single notarization to a full loan signing.</p>
    <div className="mt-10 grid gap-3">
      {POLICIES.map(([t,[lead,...items]],i)=>(
        <details key={t} className="card p-5 group" open={i===0}>
          <summary className="h-cin text-sm font-semibold cursor-pointer flex justify-between items-center list-none">{t}<span className="text-lg transition group-open:rotate-45" style={{color:"var(--gold)"}}>+</span></summary>
          <p className="mt-3 text-sm leading-relaxed">{lead}</p>
          <ul className="mt-3 grid gap-2">{items.map(l=><li key={l} className="flex gap-2.5 text-sm leading-relaxed" style={{color:"var(--muted)"}}><span className="mt-0.5" style={{color:"var(--gold)"}}>✦</span><span>{l}</span></li>)}</ul>
        </details>))}
    </div>
    <div className="mt-10 flex flex-wrap justify-center gap-3">
      <a href="/fees/" className="btn btn-line">See our fees</a>
      <a href="/contact/" className="btn btn-gold">Request Appointment</a>
    </div>
  </section>);
}

export function App({page}){
  const [chat,setChat]=useState(false);
  return(<>
    <Header page={page}/>
    <main>{page==="contact"?<Contact/>:page==="title"?<Title/>:page==="fees"?<Fees/>:page==="policies"?<Policies/>:<Home/>}</main>
    <Footer/><StickyBar onChat={()=>setChat(o=>!o)}/><Chat open={chat} setOpen={setChat}/>
  </>);
}
