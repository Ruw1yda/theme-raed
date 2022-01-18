"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[799],{799:(t,e,l)=>{l.r(e),l.d(e,{salla_product_availability:()=>a});var s=l(531),i=l(562);const a=class{constructor(t){(0,s.r)(this,t),this.isUser=i.H.isUser(),this.buttonText=salla.lang.get("pages.products.notify_availability"),this.countryCode=salla.config.country_code||"SA",this.subscribe=salla.lang.get("common.elements.submit"),this.cancel=salla.lang.get("common.elements.cancel"),this.subTitle=salla.lang.get("pages.products.notify_availability_subtitle"),this.mobileLabel=salla.lang.get("common.elements.mobile"),this.emailLabel=salla.lang.get("common.elements.email"),this.mobilePlaceholder=salla.lang.get("common.elements.mobile_placeholder"),this.emailPlaceholder=salla.lang.get("common.elements.email_placeholder"),this.productId=salla.config.page.id,this.subscribed=salla.lang.get("pages.products.notify_availability_success"),this.isUser||(this.channelsWatcher(this.channels),this.title_=this.host.title||salla.lang.get("pages.products.notify_availability_title"),this.host.removeAttribute("title"))}channelsWatcher(t){this.channels_=t.split(",")}async submit(){if(this.isUser)return salla.api.product.availabilitySubscribe(this.productId).then((()=>{salla.success(this.subscribed)})).then((()=>this.host.remove()));let t={id:this.productId,country_code:this.countryCode};return""!==this.mobile.value&&(t.mobile=this.mobile.value),""!==this.email.value&&(t.email=this.email.value),this.btn.load().then((()=>this.btn.disable())).then((()=>salla.api.product.availabilitySubscribe(t))).then((()=>{salla.success(this.subscribed)})).then((()=>this.btn.stop())).then((()=>this.modal.hide())).then((()=>this.host.remove())).catch((()=>this.btn.stop()&&this.btn.enable()))}render(){return(0,s.h)(s.H,null,(0,s.h)("slot",null,(0,s.h)("salla-button",{onClick:()=>this.isUser?this.submit():this.modal.show()},this.buttonText)),this.isUser?"":this.renderModal())}renderModal(){return(0,s.h)("salla-modal",{ref:t=>this.modal=t,id:"product-availability-modal",title:this.title_,subTitle:this.subTitle,icon:"sicon-bell-ring",modalWidth:"w-full"},(0,s.h)("div",{class:"s-product-availability-body"},this.channels_.includes("email")?[(0,s.h)("label",{class:"s-product-availability-label"},this.emailLabel),(0,s.h)("input",{class:"s-product-availability-input",placeholder:this.emailPlaceholder,ref:t=>this.email=t,type:"email"})]:"",this.channels_.includes("sms")?[(0,s.h)("label",{class:"s-product-availability-label"},this.mobileLabel),(0,s.h)("input",{class:"s-product-availability-input",placeholder:this.mobilePlaceholder,ref:t=>this.mobile=t,type:"text"}),(0,s.h)("input",{type:"hidden",value:this.countryCode})]:""),(0,s.h)("div",{slot:"footer",class:"common-anime flex justify-between space-s-4"},(0,s.h)("salla-button",{ref:t=>this.btn=t,class:"w-full",onClick:()=>this.submit()},this.subscribe),(0,s.h)("salla-button",{class:"w-full",color:"outline"},this.cancel)))}get host(){return(0,s.g)(this)}static get watchers(){return{channels:["channelsWatcher"]}}}},562:(t,e,l)=>{l.d(e,{H:()=>i});class s extends salla.AppHelpers{setHost(t){this.host=t}getElement(t){return this.host.querySelector(t)}getAttribute(t,e){var l;return null===(l=this.getElement(t))||void 0===l?void 0:l.getAttribute(e)}val(t){return this.getAttribute(t,"value")}isUser(){return!!salla.config.is_user}}const i=new s}}]);