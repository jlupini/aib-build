(()=>{"use strict";var t={208:(t,e,o)=>{o.d(e,{A:()=>i});var a=o(601),n=o.n(a),r=o(314),s=o.n(r)()(n());s.push([t.id,"body {\n  background-color:#F2F2F2;\n  font-family: Arial, sans-serif;\n}\n\n#non-chart-content {\n  position: relative;\n  z-index: 1000;\n}\n\n#chart1 {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n  /* background-color: white; */\n  /* border-radius: 20px; */\n  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */\n}\n\nsvg {\n  overflow: visible;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}",""]);const i=s},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",a=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),a&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),a&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,a,n,r){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(a)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(s[l]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);a&&s[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),o&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=o):c[2]=o),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),e.push(c))}},e}},601:t=>{t.exports=function(t){return t[1]}},511:(t,e,o)=>{o.r(e),o.d(e,{default:()=>N});var a=o(72),n=o.n(a),r=o(825),s=o.n(r),i=o(659),l=o.n(i),u=o(56),c=o.n(u),d=o(540),O=o.n(d),R=o(113),_=o.n(R),p=o(208),f={};f.styleTagTransform=_(),f.setAttributes=c(),f.insert=l().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=O(),n()(p.A,f);const N=p.A&&p.A.locals?p.A.locals:void 0},72:t=>{var e=[];function o(t){for(var o=-1,a=0;a<e.length;a++)if(e[a].identifier===t){o=a;break}return o}function a(t,a){for(var r={},s=[],i=0;i<t.length;i++){var l=t[i],u=a.base?l[0]+a.base:l[0],c=r[u]||0,d="".concat(u," ").concat(c);r[u]=c+1;var O=o(d),R={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==O)e[O].references++,e[O].updater(R);else{var _=n(R,a);a.byIndex=i,e.splice(i,0,{identifier:d,updater:_,references:1})}s.push(d)}return s}function n(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,n){var r=a(t=t||[],n=n||{});return function(t){t=t||[];for(var s=0;s<r.length;s++){var i=o(r[s]);e[i].references--}for(var l=a(t,n),u=0;u<r.length;u++){var c=o(r[u]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=l}}},659:t=>{var e={};t.exports=function(t,o){var a=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(o)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,o)=>{t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var a="";o.supports&&(a+="@supports (".concat(o.supports,") {")),o.media&&(a+="@media ".concat(o.media," {"));var n=void 0!==o.layer;n&&(a+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),a+=o.css,n&&(a+="}"),o.media&&(a+="}"),o.supports&&(a+="}");var r=o.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},921:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MAX_RING_RADIUS=e.RING_SPACING=e.MIN_RING_SIZE=e.zoomedRingBoundaries=e.RING_ORDER=e.CUSTOM_GROUPINGS=e.ALL_DONORS=e.DONORS_1_999=e.VOTER_GROUPS=e.MOUSE=e.DONORS_1_199=e.DONORS_200_499=e.DONORS_500_999=e.DONORS_OVER_1000=e.NON_DONATING_VOTERS=e.ELIGIBLE_NON_VOTERS=e.targetColumn=e.COLLIDE_DISTANCE_MULT=e.MOUSE_CHARGE_STRENGTH=e.DOT_CHARGE_STRENGTH=e.GROUPED_FORCE_STRENGTH=e.RADIAL_STRENGTH=e.smallDotRadius=e.largeDotRadius=void 0,e.largeDotRadius=5,e.smallDotRadius=2,e.RADIAL_STRENGTH=.3,e.GROUPED_FORCE_STRENGTH=.1,e.DOT_CHARGE_STRENGTH=-.75,e.MOUSE_CHARGE_STRENGTH=-250,e.COLLIDE_DISTANCE_MULT=1.3,e.targetColumn="Average 2016-2022 Dots",e.ELIGIBLE_NON_VOTERS="Eligible non-voters",e.NON_DONATING_VOTERS="Non-donating voters",e.DONORS_OVER_1000="Donors >$1000",e.DONORS_500_999="Donors $500-999",e.DONORS_200_499="Donors $200-499",e.DONORS_1_199="Donors $1-199",e.MOUSE="MOUSE",e.VOTER_GROUPS={[e.ELIGIBLE_NON_VOTERS]:{key:e.ELIGIBLE_NON_VOTERS,name:"Eligible voters who don't vote",color:"#ABABAB",dotCount:0},[e.NON_DONATING_VOTERS]:{key:e.NON_DONATING_VOTERS,name:"Non-donating voters",color:"#833B8D",dotCount:0},[e.DONORS_OVER_1000]:{key:e.DONORS_OVER_1000,name:"Huge Donors (>$1000)",color:"#FFC803",dotCount:0},[e.DONORS_500_999]:{key:e.DONORS_500_999,name:"Large Donors ($500-$999)",color:"#67D7BE",dotCount:0},[e.DONORS_200_499]:{key:e.DONORS_200_499,name:"Medium Donors ($200-$499)",color:"#64C1CD",dotCount:0},[e.DONORS_1_199]:{key:e.DONORS_1_199,name:"Small Donors ($1-$199)",color:"#5899EA",dotCount:0},[e.MOUSE]:{key:e.MOUSE,name:"Mouse",color:"green",dotCount:0}},e.DONORS_1_999="Donors $1-999",e.ALL_DONORS="All Donors",e.CUSTOM_GROUPINGS={[e.DONORS_1_999]:[e.DONORS_1_199,e.DONORS_200_499,e.DONORS_500_999],[e.ALL_DONORS]:[e.DONORS_1_199,e.DONORS_200_499,e.DONORS_500_999,e.DONORS_OVER_1000]},Object.keys(e.CUSTOM_GROUPINGS).forEach((t=>{e.VOTER_GROUPS[t]={key:t,name:t,color:"#888888",dotCount:0}})),e.RING_ORDER=[e.DONORS_OVER_1000,e.DONORS_1_999,e.NON_DONATING_VOTERS,e.ELIGIBLE_NON_VOTERS],e.zoomedRingBoundaries={[e.DONORS_OVER_1000]:{inner:0,outer:40},[e.DONORS_1_999]:{inner:50,outer:100},[e.NON_DONATING_VOTERS]:{inner:120,outer:300},[e.ELIGIBLE_NON_VOTERS]:{inner:500,outer:600}},e.MIN_RING_SIZE=20,e.RING_SPACING=10,e.MAX_RING_RADIUS=150},646:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.loadVoterData=async function(t){const e=await a.csv(t,(t=>{const e=t.Group;return n.VOTER_GROUPS[e]?(n.VOTER_GROUPS[e].dotCount=+t["Average 2016-2022 Dots"],n.VOTER_GROUPS[e]):null}));return Object.keys(n.CUSTOM_GROUPINGS).forEach((t=>{n.VOTER_GROUPS[t]||(n.VOTER_GROUPS[t]={key:t,name:t,color:"#888888",dotCount:0}),n.VOTER_GROUPS[t].dotCount=n.CUSTOM_GROUPINGS[t].reduce(((t,e)=>t+(n.VOTER_GROUPS[e]?.dotCount||0)),0)})),e},e.flattenData=function(t){const e=[];return t.forEach((t=>{for(let o=0;o<t.dotCount;o++)e.push({voterGroup:t})})),e};const a=window.d3,n=o(921)},114:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.initVisualization=function(t){const e=a.select(`#${t}`).append("svg").attr("width",n.state.svgWidth).attr("height",n.state.svgHeight);return l=e.append("g").attr("class","links"),i=e.append("g").attr("class","dots"),u=e.append("g").attr("class","images"),n.state.svg=e,e.selectAll("circle").data(n.state.displayData.slice(1)).enter().append("circle").attr("r",n.state.dotRadius).attr("fill",(t=>t.voterGroup.color||"#000")),e},e.linkTest=function(){if(!n.state.displayData.length)return;const t=u?.append("image").attr("href","assets/img/parties-icon-v01.svg").attr("x",c.x).attr("y",c.y).attr("transform","translate(-50, -5)").attr("width",100).attr("height",100);t?.node();const e=r.CUSTOM_GROUPINGS[r.ALL_DONORS],o=n.state.displayData.filter((t=>e.includes(t.voterGroup.key))),a=2*n.state.dotRadius;o.forEach(((t,e)=>{const o={source:t,target:{x:c.x,y:c.y+a*e}};d.push(o)})),console.log(d);const s=l?.selectAll("path.link").data(d);s?.enter().append("path").lower().attr("class","link").attr("stroke","rgba(80, 255, 100, 0.4)").attr("fill","none").attr("stroke-width",2*n.state.dotRadius).attr("d",(t=>O(t))).style("opacity",0).transition(""+Math.random()).duration(500).style("opacity",1),s?.exit().transition(""+Math.random()).duration(500).style("opacity",0).remove()},e.ticked=function(){i?.selectAll("circle").attr("cx",(t=>t.x)).attr("cy",(t=>t.y)),l?.selectAll(".link").attr("d",(t=>O(t)))},e.pointerMoveHandler=function(t){if(!n.state.cursorNode)return;const[e,o]=a.pointer(t);n.state.cursorNode.fx=e,n.state.cursorNode.fy=o,n.state.simulation.alpha(1).restart()},e.pointerOutHandler=function(){n.state.cursorNode&&(n.state.cursorNode.fx=-1e3,n.state.cursorNode.fy=-1e3),n.state.simulation.alpha(1).restart()},e.animateDotRadius=function(){i&&i.selectAll("circle").transition("update-radius").duration(800).ease(a.easeCubicOut).attr("r",n.state.dotRadius)},e.setAllVoterVisibility=function(t){if(!i)return;const e=i.selectAll("circle");t?(n.state.displayData=n.state.flattenedData.slice(),(0,s.addCursorNode)(),e.data(n.state.displayData.slice(1),(t=>t.voterGroup.key)).enter().append("circle").attr("r",0).attr("fill",(t=>t.voterGroup.color||"#000")).style("opacity",0).transition("add-circles").duration(800).attr("r",n.state.dotRadius).style("opacity",1)):e.filter((t=>t.voterGroup.key===r.ELIGIBLE_NON_VOTERS)).transition("fade-non-voters").duration(500).style("opacity",0).on("end",(function(){a.select(this).remove(),n.state.displayData=n.state.displayData.filter((t=>t.voterGroup.key!==r.ELIGIBLE_NON_VOTERS))}))};const a=window.d3,n=o(569),r=o(921),s=o(517);let i=null,l=null,u=null,c={x:0,y:200};const d=[],O=a.linkHorizontal().x((t=>t.x)).y((t=>t.y))},517:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.initSimulation=function(t){r.state.displayData=r.state.flattenedData.slice(),l(),r.state.simulation=a.forceSimulation(r.state.displayData).alpha(1).alphaTarget(.1).velocityDecay(.3).on("tick",n.ticked)},e.updateForces=function(){if(!r.state.simulation)return;const t=r.state.isAutoRadius?(0,i.getAutoRingBoundaries)():s.zoomedRingBoundaries;if((0,n.setAllVoterVisibility)(r.state.isAutoRadius),r.state.isSeparate)r.state.simulation.force("x",a.forceX(r.state.svgWidth/2).strength(s.GROUPED_FORCE_STRENGTH)).force("y",a.forceY(r.state.svgHeight/2).strength(s.GROUPED_FORCE_STRENGTH)).force("radial",null);else if(r.state.isDistributed){console.log("Grouped by voterGroup");const t={};let e;const o=new Set(r.state.displayData.map((t=>t.voterGroup.key)));e=r.state.svgWidth/(o.size+1),Object.values(s.VOTER_GROUPS).forEach(((o,a)=>{t[o.key]=a*e})),r.state.simulation.force("x",a.forceX((e=>t[e.voterGroup.key]||r.state.svgWidth/2)).strength(s.GROUPED_FORCE_STRENGTH)).force("y",a.forceY(r.state.svgHeight/2).strength(s.GROUPED_FORCE_STRENGTH)).force("radial",null)}else console.log("Bullseye Layout (Concentric Rings)"),r.state.simulation.force("x",null).force("y",null).force("radial",(e=t,a.forceRadial((t=>{let o,a=t.voterGroup.key;if(a===s.MOUSE)return 0;if(a in e)o=a;else{const t=Object.keys(e).filter((t=>Object.keys(s.CUSTOM_GROUPINGS).includes(t)));if(t.length&&(o=t.find((t=>s.CUSTOM_GROUPINGS[t].includes(a)))),!o)return console.warn(`Warning: No ring boundary found for ${a}, defaulting to center.`),s.MIN_RING_SIZE}let{inner:n,outer:r}=e[o];return 0===n?0:n+Math.random()*(r-n)}),r.state.svgWidth/2,r.state.svgHeight/2).strength(s.RADIAL_STRENGTH)));var e;r.state.dotRadius=r.state.isAutoRadius?s.smallDotRadius:s.largeDotRadius,r.state.simulation.force("collide",a.forceCollide(r.state.dotRadius*s.COLLIDE_DISTANCE_MULT).iterations(3)).force("charge",a.forceManyBody().strength(((t,e)=>0===e?r.state.dotRadius*s.MOUSE_CHARGE_STRENGTH:r.state.dotRadius*s.DOT_CHARGE_STRENGTH))),(0,n.animateDotRadius)(),r.state.simulation.nodes(r.state.displayData),r.state.simulation.alpha(1).restart()},e.addCursorNode=l,e.removeCursorNode=function(){r.state.cursorNode&&(r.state.displayData=r.state.displayData.slice(1),r.state.cursorNode=null)};const a=window.d3,n=o(114),r=o(569),s=o(921),i=o(185);function l(){const t={voterGroup:s.VOTER_GROUPS.MOUSE,x:0,y:0,fx:0,fy:0};r.state.displayData.unshift(t),r.state.cursorNode=t}},569:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.state=void 0,e.state={importedData:[],displayData:[],flattenedData:[],isDistributed:!1,isSeparate:!1,isAutoRadius:!0,dotRadius:2,svg:null,svgWidth:700,svgHeight:700,simulation:null,cursorNode:null,toggleGrouping(){this.isDistributed=!this.isDistributed},setDisplayData(t){this.displayData=t},setDotRadius(t){this.dotRadius=t}}},185:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getAutoRingBoundaries=function(){const t={};let e=0;return t[a.RING_ORDER[0]]={inner:0,outer:a.MIN_RING_SIZE},e=a.MIN_RING_SIZE,a.RING_ORDER.slice(1).forEach((o=>{if(a.VOTER_GROUPS[o]){let n=a.VOTER_GROUPS[o].dotCount/a.RING_ORDER.slice(1).reduce(((t,e)=>t+(a.VOTER_GROUPS[e]?.dotCount||0)),0)*(a.MAX_RING_RADIUS*a.MAX_RING_RADIUS),r=Math.max(Math.sqrt(n),a.MIN_RING_SIZE),s=e+a.RING_SPACING,i=s+r;t[o]={inner:s,outer:i},e=i}else console.warn(`Warning: Voter group "${o}" not found in VOTER_GROUPS`)})),t};const a=o(921)}},e={};function o(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={id:a,exports:{}};return t[a](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nc=void 0,(()=>{const t=window.d3;o(511);const e=o(646),a=o(569),n=o(517),r=o(114);!async function(){a.state.importedData=await(0,e.loadVoterData)("assets/csv/voters.csv"),a.state.flattenedData=(0,e.flattenData)(a.state.importedData),console.log("Imported data:",a.state.importedData);const o=(0,r.initVisualization)("chart1");(0,n.initSimulation)(a.state.displayData),o.on("pointermove",r.pointerMoveHandler),o.on("pointerout",r.pointerOutHandler),(0,n.updateForces)(),t.select("#toggle-layout").on("click",(()=>{a.state.isDistributed=!a.state.isDistributed,(0,n.updateForces)()})),t.select("#toggle-radius").on("click",(()=>{a.state.isAutoRadius=!a.state.isAutoRadius,(0,n.updateForces)()})),t.select("#toggle-separation").on("click",(()=>{a.state.isSeparate=!a.state.isSeparate,(0,n.updateForces)()})),t.select("#pause-simulation").on("click",(()=>a.state.simulation.stop())),t.select("#resume-simulation").on("click",(()=>a.state.simulation.restart())),t.select("#create-link").on("click",(()=>{(0,r.linkTest)()}))}()})()})();