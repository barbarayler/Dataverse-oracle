(function(){var e={76744:function(e,t,a){"use strict";a(82986),a(20784);var n=a(36369),r=a(46816);n["default"].use(r.ZPm);var s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("b-navbar",{attrs:{toggleable:"lg",type:"dark","bg-variant":"transparent"}},[t("b-navbar-brand",{attrs:{to:"/"}},[t("b-avatar",[e._v("🪐")]),e._v(" Dataverse")],1),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",{staticClass:"mr-auto text-left"},[t("b-nav-item",{attrs:{to:"/about"}},[e._v("👋 About")]),t("b-nav-item",{attrs:{to:"/feeds"}},[e._v("⛓ Feeds")]),t("b-nav-item",{attrs:{to:"/keepers"}},[e._v("🎭 Keepers")]),t("b-nav-item",{attrs:{href:"https://starboard.gg/Fluffy9/Dataverse-Near-nrFdyOs"}},[e._v("👩‍🏫 NEAR Tutorial")]),t("b-nav-item",{attrs:{href:"https://starboard.gg/Fluffy9/Dataverse-EVM-n6vQpe4"}},[e._v("👨‍🏫 EVM Tutorial")]),t("b-nav-item",{attrs:{href:"https://github.com/Fluffy9/Dataverse",target:"_blank",rel:"noopener noreferrer"}},[e._v("📃 Docs")])],1),t("b-navbar-nav",{staticClass:"m-0"},[t("connect-evm",{attrs:{variant:"light",pill:!0}})],1)],1)],1),t("br"),t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1),t("br")],1)},i=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-inline-block"},[e.isConnected||e.loading?!e.isConnected&&e.loading?t("b-button",{attrs:{variant:"dark",disabled:""}},[t("b-spinner")],1):e.isCorrectNetwork||e.loading?!e.isCorrectNetwork&&e.loading?t("b-button",{attrs:{variant:"dark",disabled:""}},[t("b-spinner")],1):e.ready?t("div",{attrs:{role:"button"},on:{click:function(t){return e.$store.dispatch("ethereum/Disconnect")}}},[t("b-avatar",{staticStyle:{border:"solid 2px white"},attrs:{alt:"Ethereum blockies avatar",src:e.blocky,title:e.$store.state.ethereum.user},on:{click:function(t){return e.toggle()}}}),t("b-badge",{staticClass:"ml-2",attrs:{variant:"light"}},[t("b",[e._v(e._s(e.$store.state.ethereum.network)+":")]),e._v(" "+e._s(e.$store.state.ethereum.user.substring(0,10))+"...")])],1):t("div",[e._v("Error")]):t("div",[t("b-badge",{attrs:{variant:"danger"}},[e._v("Unsupported Network")])],1):t("div",{staticClass:"text-center"},[t("b-button",{attrs:{variant:e.variant,size:e.size||"md",pill:e.pill,disabled:e.loading},on:{click:e.Connect}},[e._v("Connect to EVM")])],1)],1)},l=[],u=a(66321),d=a.n(u),c=a(78554),p=a(18752),b={name:"ConnectEVM",components:{BIcon:c.H,BIconWallet2:p.Qr2},props:["size","variant","pill"],data(){return{dialog:!1}},methods:{async Connect(){this.$store.dispatch("ethereum/Connect").then((e=>{})).catch((e=>{this.$store.dispatch("ethereum/stopLoading"),this.$bvToast.toast(e["message"],{variant:"danger",title:"Error"})}))},async Disconnect(){this.loading=!0,this.$store.dispatch("ethereum/Disconnect").then((e=>{})).catch((e=>{this.$store.dispatch("ethereum/stopLoading"),this.$bvToast.toast(e["message"],{variant:"danger",title:"Error"})}))},toggle(){let e=document.getElementById("dialog-default");this.dialog=!this.dialog,this.dialog?e.showModal():e.close()}},computed:{loading(){return this.$store.state.ethereum.loading},isConnected(){return this.$store.getters["ethereum/isConnected"]},isCorrectNetwork(){return this.$store.getters["ethereum/isCorrectNetwork"]},ready(){return this.$store.getters["ethereum/ready"]},signer(){return this.$store.state.signer},blocky(){let e=this.$store.state.ethereum.user;return e?d()(e):""}}},m=b,v=a(1001),y=(0,v.Z)(m,o,l,!1,null,null,null),f=y.exports,h={components:{ConnectEvm:f},mounted(){this.$store.dispatch("near/Init")}},g=h,w=(0,v.Z)(g,s,i,!1,null,null,null),_=w.exports,k=a(72631),x=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container text-black text-left"},[t("b-row",[t("b-col",{attrs:{cols:"6"}},[t("b-jumbotron",{attrs:{header:"Bringing Data to the Blockchain","bg-variant":"transparent","text-variant":"white"},scopedSlots:e._u([{key:"lead",fn:function(){return[t("p",[e._v("Dataverse is the protocol for building chain-agnostic hybrid smart contracts. Access data from any data source and utilize it on-chain. Build hybrid dapps such as GameFi and sybil resistant NFTs. Currently available on Near Mainnet, Aurora Testnet, Klaytn BaoBab, and Polygon Mumbai")])]},proxy:!0}])})],1),t("b-col")],1),t("b-row",{staticClass:"bg-dark rounded border"},[t("b-col",[t("b-card",{staticClass:"border-0 text-center",attrs:{"bg-variant":"transparent","text-variant":"white"}},[t("div",[t("h1",[e._v("For Devs")]),t("p",[e._v("Integrate with any data source with minimal setup. ")]),t("b-button",{attrs:{href:"https://starboard.gg/Fluffy9/Dataverse-EVM-n6vQpe4"}},[e._v("Integration Tutorial →")])],1)])],1),t("b-col",{staticStyle:{"border-left":"solid 1px","border-right":"solid 1px"}},[t("b-card",{staticClass:"border-0 text-center",attrs:{"bg-variant":"transparent","text-variant":"white"}},[t("div",[t("h1",[e._v("For Providers")]),t("p",[e._v("Set up data feeds, earn fees. Powered by decentralized compute protocols")]),t("b-button",{attrs:{href:"https://github.com/Fluffy9/Dataverse/wiki/Feeds"}},[e._v("Build a feed →")])],1)])],1),t("b-col",[t("b-card",{staticClass:"border-0 text-center",attrs:{"bg-variant":"transparent","text-variant":"white"}},[t("div",[t("h1",[e._v("For Keepers")]),t("p",[e._v("Claim bounties from publishing data on-chain")]),t("b-button",{attrs:{to:"/keepers"}},[e._v("Keeper Dashboard →")])],1)])],1)],1)],1)},C=[],T=function(){var e=this,t=e._self._c;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),e._m(0),t("h3",[e._v("Installed CLI Plugins")]),e._m(1),t("h3",[e._v("Essential Links")]),e._m(2),t("h3",[e._v("Ecosystem")]),e._m(3)])},D=[function(){var e=this,t=e._self._c;return t("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),t("br"),e._v(" check out the "),t("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),t("li",[t("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),t("li",[t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),t("li",[t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),t("li",[t("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),t("li",[t("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),t("li",[t("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],$={name:"HelloWorld",props:{msg:String}},q=$,F=(0,v.Z)(q,T,D,!1,null,"1dfc7223",null),E=F.exports,N={name:"HomeView",components:{HelloWorld:E}},O=N,M=(0,v.Z)(O,x,C,!1,null,null,null),A=M.exports,R=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("b-jumbotron",{attrs:{"text-variant":"light","bg-variant":"primary",header:"⛓ Feeds",lead:"List of active data feeds"}}),t("div",{staticClass:"glassy rounded shadow-sm p-4"},[t("div",[t("h1",{staticClass:"text-left"},[e._v("Sponsored Feeds")]),t("p",{staticClass:"text-muted text-left"},[e._v("Feeds hosted by Dataverse")]),t("hr"),e.sponsoredFeeds.length>0?t("div",e._l(Math.ceil(e.sponsoredFeeds.length/3),(function(a){return t("b-row",{key:a},e._l(e.sponsoredFeeds.slice(3*(a-1),3*a),(function(e){return t("b-col",{key:e.id,attrs:{cols:"4"}},[t("feed",{attrs:{feed:e}})],1)})),1)})),1):t("div",[t("b-img",{staticClass:"mx-auto",staticStyle:{width:"20%",opacity:".5"},attrs:{fluid:"",src:a(23413)}}),t("br"),t("p",{staticClass:"text-muted"},[e._v("No Data")])],1),t("br"),t("h1",{staticClass:"text-left"},[e._v("Community Feeds")]),t("p",{staticClass:"text-muted text-left"},[e._v("Feeds hosted by the community")]),t("hr"),e.communityFeeds.length>0?t("div",e._l(Math.ceil(e.communityFeeds.length/3),(function(a){return t("b-row",{key:a},e._l(e.communityFeeds.slice(3*(a-1),3*a),(function(a){return t("b-col",{key:a,attrs:{cols:"4"}},[this.$store.getters["ethereum/ready"]?e._e():t("connect"),t("feed",{attrs:{feed:a}})],1)})),1)})),1):t("div",[t("b-img",{staticClass:"mx-auto",staticStyle:{width:"20%",opacity:".5"},attrs:{fluid:"",src:a(23413)}}),t("br"),t("p",{staticClass:"text-muted"},[e._v("No Data")])],1)]),t("br")])],1)},j=[],I=function(){var e=this,t=e._self._c;return t("div",[t("b-card",{staticClass:"mb-2",attrs:{"bg-variant":"dark",title:e.feed["name"]||"Unknown","img-src":e.feed["src"]||"","img-alt":"Image","img-top":"",tag:"article"}},[t("b-card-text",[e._v(" "+e._s(e.feed["desc"]||"Unknown")+" ")]),t("b-modal",{attrs:{"header-text-variant":"dark","body-text-variant":"dark",id:`modal-${e.feed.id}`,title:`Test ${e.feed.name}`},on:{ok:function(t){return e.newRequest(e.feed.test)}}},[t("div",[t("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Input URL/IPFS","label-for":`input${e.feed.id}`}},[t("b-form-input",{attrs:{id:`input${e.feed.id}`,value:e.test.input},on:{input:function(t){e.test.input=t.target.value}}})],1),t("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Oracle Signer Address","label-for":`oracle${e.feed.id}`}},[t("b-form-input",{attrs:{id:`oracle${e.feed.id}`,value:e.feed.oracle,disabled:""},on:{input:function(t){e.test.oracle=t.target.value}}})],1),t("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Bounty","label-for":`bounty${e.feed.id}`}},[t("b-form-input",{attrs:{id:`bounty${e.feed.id}`,type:"number",min:"0"},model:{value:e.test.bounty,callback:function(t){e.$set(e.test,"bounty",t)},expression:"test.bounty"}})],1)],1)]),this.$store.getters["ethereum/ready"]?t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:`modal-${e.feed.id}`,expression:"`modal-${feed.id}`"}],attrs:{variant:"primary"}},[e._v("Test")]):e._e(),t("connect-evm",{attrs:{variant:"light",pill:!0}}),e.feed["docs"]?t("b-button",{staticClass:"ml-2",attrs:{target:"_blank",href:e.feed["docs"],variant:"secondary"}},[e._v("Docs")]):e._e()],1)],1)},S=[],B={name:"feed",props:["feed"],components:{ConnectEvm:f},data(){return{test:{input:this.feed.href+"/test",oracle:this.feed.oracle,bounty:1e12}}},methods:{newRequest(e){this.$store.dispatch("newRequest",{oracle:this.test.oracle,input:this.test.input,bounty:this.test.bounty.toString(),test:e[this.$store.state.ethereum.network]}).then((e=>{this.$bvToast.toast(`New Request ID: ${JSON.stringify(e)}`,{title:"Success",autoHideDelay:5e3,variant:"primary"})})).catch((e=>{this.$bvToast.toast(e["message"],{title:"Error",autoHideDelay:5e3,variant:"danger"})}))}}},L=B,P=(0,v.Z)(L,I,S,!1,null,null,null),Z=P.exports,W={components:{Feed:Z},data(){return{row:3}},computed:{sponsoredFeeds(){return this.$store.state.sponsored.feeds},communityFeeds(){return this.$store.state.community.feeds}}},K=W,U=(0,v.Z)(K,R,j,!1,null,null,null),H=U.exports,V=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("b-jumbotron",{attrs:{"text-variant":"light","bg-variant":"primary",header:"🎭 Keeper Requests",lead:"Publish data on-chain and recieve the bounty attached"}},[t("b-button",{attrs:{href:"https://starboard.gg/Fluffy9/Dataverse-EVM-n6vQpe4"}},[e._v("Build a Keeper Bot →")])],1),t("div",{staticClass:"glassy rounded text-light shadow-sm p-4"},[e.ready?t("div",[t("b-row",[t("b-col",[t("h1",{staticClass:"text-left"},[e._v("Requests from last "+e._s(e.options.find((t=>t.value==e.period)).text))])]),t("b-col",[t("b-form-group",{staticClass:"text-right"},[t("b-form-radio-group",{attrs:{disabled:e.loading,id:"radio-group-1",options:e.options,name:"radio-options"},on:{change:function(t){return e.getRequests()}},model:{value:e.period,callback:function(t){e.period=t},expression:"period"}})],1)],1)],1),t("br"),t("div",[t("requests",{attrs:{requests:e.requests,loading:e.loading}})],1),t("br")],1):t("div",[t("h1",[e._v("Connect Your Wallet")]),t("br"),t("connect-evm",{attrs:{variant:"light",pill:!0}})],1)])],1)},z=[],J=(a(57658),function(){var e=this,t=e._self._c;return t("div",[e.isNullOrEmpty(e.requests)&&e.loading?t("div",[t("b-row",{staticClass:"text-left"},[t("b-col",[t("b-skeleton")],1),t("b-col",[t("b-skeleton")],1),t("b-col",[t("b-skeleton")],1),t("b-col",[t("b-skeleton")],1),t("b-col",[t("b-skeleton")],1),t("b-col",{staticClass:"text-center"},[t("b-skeleton")],1)],1),t("br"),e._l(3,(function(e){return t("b-card",{key:e,staticClass:"text-left text-white mb-2",attrs:{"bg-variant":"transparent","border-variant":"white"}},[t("b-row",{staticClass:"text-left"},[t("b-col",[t("b-skeleton")],1),t("b-col",[t("b-skeleton")],1),t("b-col",[t("b-skeleton")],1),t("b-col",[t("b-skeleton")],1),t("b-col",[t("b-skeleton")],1),t("b-col",{staticClass:"text-center"},[t("b-skeleton")],1)],1)],1)}))],2):e.isNullOrEmpty(e.requests)&&!e.loading?t("div",[t("b-img",{staticClass:"mx-auto",staticStyle:{width:"20%",opacity:".5"},attrs:{fluid:"",src:a(23413)}}),t("br"),t("p",{staticClass:"text-muted"},[e._v("No Data")])],1):t("div",[t("b-row",{staticClass:"text-left"},[t("b-col",[e._v("ID")]),t("b-col",[e._v("Expires at")]),t("b-col",[e._v("Bounty")]),t("b-col",{staticClass:"text-center"},[e._v("Actions")])],1),t("br"),e._l(e.requests,(function(a){return t("b-card",{key:a.id,staticClass:"text-left text-white mb-2",style:a.active&&Date.now()<new Date(1e3*a.expires)?"opacity:1":"opacity:0.25",attrs:{"border-variant":"white","bg-variant":"transparent"}},[t("b-row",[t("b-col",{attrs:{cols:"2"}},[t("h4",{staticStyle:{"text-overflow":"ellipsis",overflow:"hidden",width:"calc(100%)",display:"inline-block","white-space":"nowrap"}},[e._v(e._s(a.id))])]),t("b-col",[e._v(e._s(new Date(1e3*a.expires).toLocaleString()))]),t("b-col",[e._v(e._s(a.bounty.toLocaleString())+" "+e._s(e.currency))]),t("b-col",{staticClass:"text-right"},[t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:`modal-${a.id}`,expression:"`modal-${request.id}`"}],attrs:{variant:a.bounty-a.fee-a.gas>0?"success":"danger",disabled:a.bounty-a.fee-a.gas<0}},[e._v(e._s((a.bounty,a.fee,a.gas,"Execute")))])],1),t("b-modal",{attrs:{"header-text-variant":"dark","body-text-variant":"dark",id:`modal-${a.id}`,title:"Fill Request"},on:{ok:function(t){return e.fillRequest(a.id)}}},[t("div",[t("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Request ID","label-for":`RequestID-${a.id}`}},[t("b-form-input",{attrs:{id:`RequestID-${a.id}`,disabled:"",value:a.id}})],1),t("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Oracle Signature","label-for":`Signature-${a.id}`}},[t("b-form-input",{attrs:{id:`Signature-${a.id}`},model:{value:e.signature,callback:function(t){e.signature=t},expression:"signature"}})],1),t("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Data","label-for":`Data-${a.id}`}},[t("b-form-input",{attrs:{id:`Data-${a.id}`},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}})],1)],1)])],1)],1)}))],2)])}),Q=[],Y={props:["requests","loading"],data(){return{signature:"",data:""}},methods:{fillRequest(e){this.$store.dispatch("fillRequest",{id:e,signature:this.signature,data:this.data}).then((e=>{this.$bvToast.toast("Request filled",{title:"Success",autoHideDelay:5e3,variant:"primary"})})).catch((e=>{this.$bvToast.toast(e["message"],{title:"Error",autoHideDelay:5e3,variant:"danger"})}))},isNullOrEmpty(e){return!e||(!Array.isArray(e)||(0==e.length||void 0))}},computed:{currency(){return this.$store.state.networks.find((e=>e.name==this.$store.state.ethereum.network)).currency}}},G=Y,X=(0,v.Z)(G,J,Q,!1,null,null,null),ee=X.exports,te=a(15941),ae={components:{Requests:ee,ConnectEvm:f},data(){return{loading:!1,period:"1 hour",options:[{text:"1 hour",value:"1 hour"},{text:"24 hours",value:"24 hours"},{text:"48 hours",value:"48 hours"},{text:"7 days",value:"7 days"}],requests:null}},computed:{ready(){return this.$store.getters["ethereum/ready"]}},watch:{ready(e,t){e&&(this.setOptions(),this.getRequests())}},methods:{setOptions(){let e=this.$store.state.networks.find((e=>e.name==this.$store.state.ethereum.network));this.options=[];for(let t=0;t<Object.keys(e.time).length;t++)this.options.push({text:Object.keys(e.time)[t],value:Object.values(e.time)[t]});this.period=this.options[0].value},getRequests(){this.requests=[],this.loading=!0;let e=this;this.$store.dispatch("getNewRequests",this.period).then((t=>{e.requests=t.map((e=>({...e,gas:0,fee:0}))),te.log(JSON.stringify(t)),e.loading=!1,this.$bvToast.toast(`Found ${t.length} requests`,{title:"Success",autoHideDelay:5e3,variant:"primary"})})).catch((t=>{e.loading=!1,this.$bvToast.toast(t["message"],{title:"Error",autoHideDelay:5e3,variant:"danger"})}))}},mounted(){this.$store.getters["ethereum/ready"]&&(this.setOptions(),this.getRequests())}},ne=ae,re=(0,v.Z)(ne,V,z,!1,null,null,null),se=re.exports;n["default"].use(k.ZP);const ie=[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,74971))},{path:"/feeds",name:"feeds",component:H},{path:"/keepers",name:"keepers",component:se}],oe=new k.ZP({routes:ie});var le=oe,ue=(a(21703),a(63822)),de=a(46670),ce=a.n(de),pe=a(79729),be=a(15941);const{providers:me,Wallet:ve,ethers:ye,BigNumber:fe}=a(37695),he=a(22690),ge={namespaced:!0,state:()=>({loading:!1,web3Modal:null,provider:null,network:null,signer:null,user:null,multicall:null,ethcallProvider:null,supportedNetworks:[{"Klaytn BaoBab":1001},{Mumbai:80001},{"Aurora Testnet":1313161555}],multicallAddresses:{"Klaytn BaoBab":"0x40643B8Aeaaca0b87Ea1A1E596e64a0e14B1d244",Mumbai:"0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc","Aurora Testnet":"0x8f81207F59A4f86d68608fF90b259A0927242967"},send:async function(e,t){await t.send("eth_sendTransaction",[{from:e.from,to:e.to,data:e["data"],value:e["value"]}])}}),mutations:{setEthCallProvider(e,t){e.ethcallProvider=t},setMulticall(e,t){e.multicall=t},setWeb3Modal(e,t){e.web3Modal=t},setSigner(e,t){e.signer=t},setProvider(e,t){e.provider=t},setNetwork(e,t){e.network=t},setUser(e,t){e.user=t},setLoading(e,t){e.loading=t}},actions:{async Connect({state:e,commit:t}){t("setLoading",!0);const a={walletconnect:{package:pe.Z,options:{infuraId:"INFURA_ID"}}},n=new(ce())({cacheProvider:!0,providerOptions:a}),r=new me.Web3Provider(await n.connect()),s=r.getSigner();let i=(await r.getNetwork()).chainId,o=e.supportedNetworks.find((e=>Object.values(e)[0]===i));o=void 0==o?void 0:Object.keys(o)[0],he.setMulticallAddress(i,e.multicallAddresses[o]);let l=new he.Provider(r,i);be.log(o),t("setSigner",s),t("setUser",await s.getAddress()),t("setProvider",r),t("setNetwork",o),t("setWeb3Modal",n),t("setLoading",!1),t("setMulticall",he),t("setEthCallProvider",l)},async Disconnect({state:e,commit:t}){t("setLoading",!0),await e.web3Modal.clearCachedProvider(),t("setSigner",null),t("setProvider",null),t("setNetwork",null),t("setLoading",!1),window.location.reload()},stopLoading({commit:e}){e("setLoading",!1)}},getters:{isLoading(e){return e.loading},isConnected(e){return!!e.signer},isCorrectNetwork(e){return!!e.supportedNetworks.some((t=>Object.keys(t)[0]==e.network))},ready(e){return!(!e.signer||!e.supportedNetworks.some((t=>Object.keys(t)[0]==e.network)))}}};var we=ge,_e=a(37394),ke=a(6287),xe=a(99711),Ce=a(86601),Te=a(99105);const De={namespaced:!0,state:()=>({loading:!1,network:"testnet",wallet:null,modal:null,user:null,provider:null,id:null}),mutations:{setProvider(e,t){e.provider=t},setUser(e,t){e.user=t},setWallet(e,t){e.wallet=t},setModal(e,t){e.modal=t},setLoading(e,t){e.loading=t}},actions:{async Init({state:e,commit:t,dispatch:a}){const n=await(0,_e.L1)({network:e.network,modules:[...await(0,Ce.Z)(),(0,xe.X)(),(0,Te.r)({projectId:"Dataverse",metadata:{name:"NEAR Wallet Selector",description:"Example dApp used by NEAR Wallet Selector",url:"https://github.com/near/wallet-selector",icons:["https://avatars.githubusercontent.com/u/37784886"]}})]}),r=(0,ke.D)(n,{contractId:"guest-book.testnet"}),s=n.store.getState();n.on("signedIn",(()=>{a("Login")})),n.on("accountsChanged",((e,t)=>{a("Login")})),t("setProvider",s),t("setModal",r),t("setWallet",n)},async Logout({state:e,commit:t}){t("setLoading",!0);const a=await e.wallet.wallet(e.provider.selectedWalletId);a.signOut(),t("setUser",e.provider.accounts.find((e=>e.active))?.accountId||null),t("setLoading",!1)},async Disconnect({state:e,commit:t}){t("setLoading",!0),t("setUser",e.provider.accounts.find((e=>e.active))?.accountId||null),t("setLoading",!1)},async Connect({state:e,commit:t}){t("setLoading",!0),e.modal.show(),t("setUser",e.provider.accounts.find((e=>e.active))?.accountId||null),t("setLoading",!1)},async Disconnect({state:e,commit:t}){t("setLoading",!0),window.location.reload(),t("setLoading",!1)},stopLoading({commit:e}){e("setLoading",!1)}},getters:{isLoading(e){return e.loading},isConnected(e){return!!e.user},ready(e){return!!e.user}}};var $e=De,qe=a(63013),Fe=a(26639),Ee=a(72043);n["default"].use(ue.ZP);var Ne=new ue.ZP.Store({state:{networks:[{name:"Klaytn BaoBab",currency:"KLAY",registry:"0x50c78172549FA69e7dBB2e97D88cD4EF578248f3",time:{"1 hour":3600,"24 hours":86400,"48 hours":172800,"7 days":604800}},{name:"Mumbai",currency:"Matic",registry:"0x607D2D6f0385262adb93B439a822CE2Fe29A753A",time:{"10 min":600,"30 min":3499}},{name:"Aurora Testnet",currency:"ETH",registry:"0xcB242BDD75aF6D68e4c12a681acD7c3dD3A53e51",time:{"10 min":600,"30 min":3499}}],sponsored:{feeds:[{id:0,name:"BasicAPI",networks:["Klaytn","Mumbai","Aurora"],desc:"Fetch any public API",docs:"https://github.com/Fluffy9/Dataverse/wiki/Feeds#basicapi-feed",oracle:"0x62117462Abd17359468191716fBcfd3eEa2Dd023",img:"",href:"http://bm5b3m3371fph2ju1e0b15ei9k.ingress.bdl.computer",test:{"Klaytn BaoBab":"0xB20B232215a7d544cD2fC9cdE25416343CdF68d3",Mumbai:"0x981bA12935675F696D6bfdcDe349fAB34f369107","Aurora Testnet":"0xb20b232215a7d544cd2fc9cde25416343cdf68d3"}}]},community:{feeds:[]}},getters:{},mutations:{},actions:{async getPastEvents({state:e},{filter:t,blocks:n}){let r=e.networks.find((t=>t.name==e.ethereum.network)),s=new qe.Contract(r.registry,a(9268),e.ethereum.provider);return await s.queryFilter(t,-n,"latest")},async getNewRequests({state:e,dispatch:t},n){if(!n)throw new Error("Invalid block range");let r=e.networks.find((t=>t.name==e.ethereum.network)),s=new qe.Contract(r.registry,a(9268),e.ethereum.provider),i=s.filters.NewRequest(),o=await t("getPastEvents",{filter:i,blocks:n});o=o.map((e=>s.interface.parseLog({topics:e.topics,data:e.data}))).map((e=>e.args)),o=o.map((e=>({id:e[0],bounty:e[2],input:e[3]})));let l=new e.ethereum.multicall.Contract(s.address,a(9268)),u=o.map((e=>l.requests(e.id))),d=await e.ethereum.ethcallProvider.all(u);return d.map(((e,t)=>({id:o[t].id,input:e.input,oracle:e.oracle,requestor:e.requestor,callback:e.callback,bounty:Fe.dF(e.bounty),timestamp:e.timestamp.toNumber(),expires:e.expires.toNumber(),active:e.active})))},async fillRequest({state:e},{id:t,signature:n,data:r}){if(!t||!n||!r)throw new Error("Invalid arguments");let s=e.networks.find((t=>t.name==e.ethereum.network)),i=new qe.Contract(s.registry,a(9268),e.ethereum.signer);return await i.fillRequest(t,n,r)},async newRequest({state:e},{input:t,oracle:n,bounty:r,test:s}){if(!t||!n||!r||!s)throw new Error("Invalid arguments");e.networks.find((t=>t.name==e.ethereum.network));let i=new qe.Contract(s,a(35330),e.ethereum.signer);return await i.requestData(n,t,r,{value:Ee.O$.from(r)})}},modules:{ethereum:we,near:$e}});n["default"].config.productionTip=!1,new n["default"]({router:le,store:Ne,render:e=>e(_)}).$mount("#app")},23413:function(e,t,a){"use strict";e.exports=a.p+"img/undraw_no_data.0ddaeaee.svg"},88677:function(){},62808:function(){},67111:function(){},89002:function(){},35883:function(){},46601:function(){},71456:function(){},89214:function(){},85568:function(){},73105:function(){},54828:function(){},52361:function(){},94616:function(){},6567:function(){},35330:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onDVRequestFilled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"oracle","type":"address"},{"internalType":"string","name":"input","type":"string"},{"internalType":"uint256","name":"bounty","type":"uint256"}],"name":"requestData","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_registry","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"_input","type":"string"},{"indexed":false,"internalType":"string","name":"_result","type":"string"}],"name":"RequestFilled","type":"event"},{"inputs":[],"name":"registry","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')},9268:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"cancelRequest","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"Expired","type":"error"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"fillRequest","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"InvalidBounty","type":"error"},{"inputs":[],"name":"InvalidInput","type":"error"},{"inputs":[],"name":"InvalidOracle","type":"error"},{"inputs":[],"name":"InvalidResult","type":"error"},{"inputs":[{"internalType":"string","name":"_input","type":"string"},{"internalType":"address","name":"_oracle","type":"address"},{"internalType":"uint256","name":"_bounty","type":"uint256"},{"internalType":"uint256","name":"expiresIn","type":"uint256"},{"internalType":"address","name":"_callback","type":"address"}],"name":"newRequest","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"NotActive","type":"error"},{"inputs":[],"name":"NotAnOracle","type":"error"},{"inputs":[],"name":"NotRequestor","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_guid","type":"bytes32"}],"name":"CanceledRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_guid","type":"bytes32"},{"indexed":false,"internalType":"string","name":"_data","type":"string"}],"name":"FilledRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_oracle","type":"address"},{"indexed":true,"internalType":"bool","name":"_isOracle","type":"bool"}],"name":"ModifiedOracles","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"_owner","type":"address"}],"name":"ModifiedOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"_requestor","type":"address"},{"indexed":true,"internalType":"uint256","name":"_bounty","type":"uint256"},{"indexed":false,"internalType":"string","name":"input","type":"string"}],"name":"NewRequest","type":"event"},{"inputs":[{"internalType":"address","name":"_oracle","type":"address"},{"internalType":"bool","name":"_isOracle","type":"bool"}],"name":"setOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"oracles","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"requests","outputs":[{"internalType":"string","name":"input","type":"string"},{"internalType":"address","name":"oracle","type":"address"},{"internalType":"address","name":"requestor","type":"address"},{"internalType":"address","name":"callback","type":"address"},{"internalType":"uint256","name":"bounty","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"}],"stateMutability":"view","type":"function"}]')}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,a),s.loaded=!0,s.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,n,r,s){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],s=e[d][2];for(var o=!0,l=0;l<n.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(o=!1,s<i&&(i=s));if(o){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,r,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.e0de1d92.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";a.l=function(n,r,s,i){if(e[n])e[n].push(r);else{var o,l;if(void 0!==s)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+s){o=c;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+s),o.src=n),e[n]=[r];var p=function(t,a){o.onerror=o.onload=null,clearTimeout(b);var r=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(e){return e(a)})),t)return t(a)},b=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){a.p="/Dataverse/"}(),function(){var e={143:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise((function(a,n){r=e[t]=[a,n]}));n.push(r[2]=s);var i=a.p+a.u(t),o=new Error,l=function(n){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",o.name="ChunkLoadError",o.type=s,o.request=i,r[1](o)}};a.l(i,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,i=n[0],o=n[1],l=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(l)var d=l(a)}for(t&&t(n);u<i.length;u++)s=i[u],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},n=self["webpackChunkapp"]=self["webpackChunkapp"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(76744)}));n=a.O(n)})();
//# sourceMappingURL=app.bd3d189d.js.map