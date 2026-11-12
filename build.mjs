// Builds the static site: node build.mjs  (needs esbuild, react, react-dom, tailwindcss v4 on NODE_PATH)
// Source lives in src/. Output: index.html, fees/, policies/, contact/, title-companies/, assets/app.js, assets/styles.css
import fs from "node:fs"; import path from "node:path"; import crypto from "node:crypto"; import {createRequire} from "node:module";
const NM=process.env.NODE_MODULES||"/opt/npm-tools/node_modules";
const require=createRequire(NM+"/");
const esbuild=require("esbuild"); const tw=require("tailwindcss");
const SITE="https://twogenerationsnotary.com";
const common={bundle:true,nodePaths:[NM],jsx:"transform",define:{"process.env.NODE_ENV":'"production"'},logLevel:"warning"};
await esbuild.build({...common,entryPoints:["src/client.jsx"],outfile:"assets/app.js",minify:true,target:["es2019"],format:"iife"});
await esbuild.build({...common,entryPoints:["src/server.jsx"],outfile:".build/server.cjs",platform:"node",format:"cjs"});
const {render}=require(path.resolve(".build/server.cjs"));

// CSS
const src=fs.readFileSync("src/app.jsx","utf8");
const cands=[...new Set(src.split(/[\s"'`{}()<>=,;:?]+/).concat(src.match(/[^\s"'`]+/g)||[]))];
const input=`@import "tailwindcss";
@layer base{*,::after,::before,::backdrop,::file-selector-button{border-color:#e5e7eb}::placeholder{color:#9ca3af;opacity:1}button:not(:disabled){cursor:pointer}}
@layer components{${fs.readFileSync("src/custom.css","utf8")}}`;
const compiler=await tw.compile(input,{base:process.cwd(),loadStylesheet:async(id,base)=>{const p=id==="tailwindcss"?NM+"/tailwindcss/index.css":path.resolve(base,id);return {path:p,base:path.dirname(p),content:fs.readFileSync(p,"utf8")};}});
let css=compiler.build(cands);
css=(await esbuild.transform(css,{loader:"css",minify:true,target:["chrome99","safari15.4","firefox97","edge99"]})).code;
fs.writeFileSync("assets/styles.css",css);
const h=f=>crypto.createHash("sha1").update(fs.readFileSync(f)).digest("hex").slice(0,8);
const vJS=h("assets/app.js"), vCSS=h("assets/styles.css");

const ld={"@context":"https://schema.org","@type":"Notary",name:"Two Generations Notary Solutions, LLC",slogan:"Two Generations. One Trusted Service.",url:SITE+"/",image:SITE+"/assets/og.png",logo:SITE+"/assets/logo.webp",email:"info@twogenerationsnotary.com",telephone:"+1-256-476-3847",
 contactPoint:[{"@type":"ContactPoint",name:"Linda Turner",telephone:"+1-256-566-1515",contactType:"customer service"},{"@type":"ContactPoint",name:"Bethany Dutton",telephone:"+1-256-476-3847",contactType:"customer service"}],
 address:{"@type":"PostalAddress",addressLocality:"Decatur",addressRegion:"AL",addressCountry:"US"},
 areaServed:["Decatur, AL","Morgan County, AL","Limestone County, AL","Madison County, AL","Lawrence County, AL","North Alabama"],
 openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"09:00",closes:"17:00"}],
 priceRange:"$$",
 description:"Mother-daughter mobile notaries and certified loan signing agents who travel to you. Regular hours are 9 am to 5 pm, Monday through Friday; available 24/7 by appointment for an added fee.",
 founder:[{"@type":"Person",name:"Linda Turner"},{"@type":"Person",name:"Bethany Dutton"}],
 sameAs:["https://www.linkedin.com/company/two-generations-notary"]};
const N="Two Generations Notary Solutions, LLC";
const pages=[
 {page:"home",dir:"",title:"Mobile Notary & Loan Signing Agents in Decatur, AL | "+N,desc:"Mother-daughter mobile notaries and certified loan signing agents serving Decatur and North Alabama. We come to you, 24/7 by appointment."},
 {page:"fees",dir:"fees",title:"Fees | Mobile Notary Pricing in Decatur, AL | "+N,desc:"Clear, upfront mobile notary pricing: $10 per notarial act, travel fees from $30, loan signings from $100. Regular hours 9 am to 5 pm weekdays, available 24/7 for an added fee."},
 {page:"policies",dir:"policies",title:"Client Policies | "+N,desc:"Booking, payment, deposits, cancellations, ID requirements, privacy and safety policies for every Two Generations Notary appointment."},
 {page:"title",dir:"title-companies",title:"Loan Signing Coverage for Title Companies in North Alabama | "+N,desc:"Two NNA-certified, insured and background-screened signing agents covering Morgan, Limestone, Madison and Lawrence counties. Request signing coverage."},
 {page:"contact",dir:"contact",title:"Book an Appointment | "+N,desc:"Request a mobile notary appointment or ask a question. Call or text Linda at (256) 566-1515 or Bethany at (256) 476-3847."},
];
const esc=s=>s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");
const fav=`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%233a2b28'/%3E%3Ctext x='50' y='68' font-size='56' text-anchor='middle' fill='%23e3c58b'%3E%E2%9C%A6%3C/text%3E%3C/svg%3E`;
for(const p of pages){
  const url=SITE+"/"+(p.dir?p.dir+"/":"");
  const html=`<!DOCTYPE html>
<html lang="en" data-page="${p.page}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.desc)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(N)}">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/assets/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Two Generations Notary Solutions, LLC. Two Generations. One Trusted Service.">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${fav}">
${p.page==="home"?`<script>(function(){var m={"#fees":"/fees/","#policies":"/policies/","#contact":"/contact/","#title":"/title-companies/"}[location.hash];if(m)location.replace(m)})()</script>\n`:""}<script type="application/ld+json">${JSON.stringify(ld)}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/styles.css?v=${vCSS}">
<script defer src="/assets/app.js?v=${vJS}"></script>
</head>
<body>
<div id="root">${render(p.page)}</div>
</body>
</html>
`;
  if(p.dir) fs.mkdirSync(p.dir,{recursive:true});
  fs.writeFileSync(path.join(p.dir,"index.html"),html);
}
fs.writeFileSync("sitemap.xml",`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(p=>`  <url><loc>${SITE}/${p.dir?p.dir+"/":""}</loc></url>`).join("\n")}\n</urlset>\n`);
fs.writeFileSync("robots.txt",`User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
fs.rmSync(".build",{recursive:true,force:true});
console.log("built",pages.length,"pages; css",css.length,"js",fs.statSync("assets/app.js").size);
