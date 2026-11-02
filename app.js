"use strict";
document.documentElement.classList.add("js");
const menuButton=document.querySelector(".menu-toggle");
const menu=document.querySelector(".nav");
if(menuButton&&menu){
  menuButton.hidden=false;
  const closeMenu=()=>{menu.classList.remove("is-open");menuButton.setAttribute("aria-expanded","false");};
  menuButton.addEventListener("click",()=>{const open=menuButton.getAttribute("aria-expanded")!=="true";menuButton.setAttribute("aria-expanded",String(open));menu.classList.toggle("is-open",open);});
  menu.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenu));
  document.addEventListener("keydown",event=>{if(event.key==="Escape"&&menuButton.getAttribute("aria-expanded")==="true"){closeMenu();menuButton.focus();}});
}
document.querySelectorAll("[data-print]").forEach(button=>{button.hidden=false;button.addEventListener("click",()=>window.print());});
let printClosedDetails=[];
window.addEventListener("beforeprint",()=>{printClosedDetails=[...document.querySelectorAll("details:not([open])")];printClosedDetails.forEach(detail=>{detail.open=true;});});
window.addEventListener("afterprint",()=>{printClosedDetails.forEach(detail=>{detail.open=false;});printClosedDetails=[];});
const filterBar=document.querySelector(".filters");
if(filterBar){
  filterBar.hidden=false;
  const rows=[...document.querySelectorAll("#indicator-table tbody tr")];
  filterBar.querySelectorAll("button").forEach(button=>button.addEventListener("click",()=>{
    const group=button.dataset.filter;
    filterBar.querySelectorAll("button").forEach(item=>item.setAttribute("aria-pressed",String(item===button)));
    let count=0;
    rows.forEach(row=>{const visible=group==="all"||row.dataset.group===group;row.hidden=!visible;if(visible)count++;});
    document.getElementById("table-count").textContent=`Показано ${count} із ${rows.length} складових`;
  }));
}
const chartTabs=document.querySelector(".chart-tabs");
if(chartTabs&&window.SECURITY_DATA){
  chartTabs.hidden=false;
  const format=value=>String(value).replace(".",",");
  const draw=key=>{
    const series=window.SECURITY_DATA.trends[key];
    const [a,b]=series.values;
    const y=value=>196-(value/series.max)*145;
    const targetY=y(series.threshold);
    document.getElementById("trend-title").textContent=series.title;
    document.getElementById("trend-subtitle").textContent=series.subtitle;
    document.getElementById("trend-graphic").innerHTML=`<svg viewBox="0 0 470 250" role="img" aria-labelledby="trend-svg-title trend-svg-desc"><title id="trend-svg-title">${series.title}</title><desc id="trend-svg-desc">${series.years[0]}: ${format(a)}; ${series.years[1]}: ${format(b)} ${series.unit}. ${series.thresholdLabel}. Показано лише дві наявні точки.</desc><g fill="none" stroke="#e1e7df"><path d="M55 51H425M55 123H425M55 196H425"/></g><g fill="#657269" font-size="11"><text x="20" y="200">0</text><text x="13" y="127">${format(series.max/2)}</text><text x="13" y="55">${format(series.max)}</text><text x="55" y="232">${series.years[0]}</text><text x="392" y="232">${series.years[1]}</text><text x="55" y="24">${series.unit}</text></g><path d="M55 ${targetY}H425" stroke="#b17c2d" stroke-width="1.5" stroke-dasharray="5 5"/><path d="M70 ${y(a)}L410 ${y(b)}" stroke="${series.color}" stroke-width="3" fill="none"/><circle cx="70" cy="${y(a)}" r="6" fill="${series.color}" stroke="white" stroke-width="2"/><circle cx="410" cy="${y(b)}" r="6" fill="${series.color}" stroke="white" stroke-width="2"/><g fill="${series.color}" font-size="16" font-weight="bold"><text x="70" y="${key==="debt"?y(a)+24:y(a)-16}" text-anchor="middle">${format(a)}</text><text x="410" y="${y(b)-16}" text-anchor="middle">${format(b)}</text></g></svg>`;
    document.getElementById("trend-threshold").textContent=series.thresholdLabel;
    document.getElementById("trend-takeaway").textContent=series.takeaway;
    chartTabs.querySelectorAll("button").forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.series===key)));
  };
  chartTabs.querySelectorAll("button").forEach(button=>button.addEventListener("click",()=>draw(button.dataset.series)));
}
