"use strict";(self["webpackChunkshopvue"]=self["webpackChunkshopvue"]||[]).push([[767],{4685:function(t,s,i){i.d(s,{Z:function(){return d}});var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"count-box",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"count-btns"},[s("button",{class:{disabledColor:t.value<=1,minus:!0},on:{click:t.handleSub}},[t._v(" - ")]),s("div",{staticClass:"inp",on:{click:t.toShowPopup}},[t._v(t._s(t.value))]),s("button",{staticClass:"add",on:{click:t.handleAdd}},[t._v("+")])]),s("van-popup",{model:{value:t.isShowPopup,callback:function(s){t.isShowPopup=s},expression:"isShowPopup"}},[s("van-field",{attrs:{type:"digit",autofocus:""},model:{value:t.userInputCount,callback:function(s){t.userInputCount=s},expression:"userInputCount"}}),s("div",{staticClass:"btn",on:{click:t.confirmChange}},[t._v("确认")])],1)],1)},a=[],e=(i(8146),i(8848)),n={name:"CountBox",props:{value:{type:Number,required:!0}},data(){return{isShowPopup:!1,userInputCount:""}},methods:{toShowPopup(){this.isShowPopup=!0,this.userInputCount=this.value},handleSub(){const t=this.value-1;t<=0?(0,e.Z)("该宝贝不能再减少了呦~"):this.$emit("input",t)},handleAdd(){this.$emit("input",this.value+1)},confirmChange(){const t=+this.userInputCount;t!==this.value?(t<=0?(0,e.Z)("数量低于最小值"):this.$emit("input",t),this.isShowPopup=!1):this.isShowPopup=!1}}},c=n,r=i(1001),l=(0,r.Z)(c,o,a,!1,null,"54e34fd2",null),d=l.exports},4767:function(t,s,i){i.r(s),i.d(s,{default:function(){return f}});i(7658);var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"prodetail"},[s("van-nav-bar",{attrs:{fixed:""},scopedSlots:t._u([{key:"left",fn:function(){return[s("div",{staticClass:"nav-back",on:{click:function(s){return t.$router.back()}}},[s("van-icon",{attrs:{name:"arrow-left",color:"#fff"}})],1)]},proxy:!0}])}),s("van-swipe",{attrs:{autoplay:3e3},on:{change:t.onChange},scopedSlots:t._u([{key:"indicator",fn:function(){return[s("div",{staticClass:"custom-indicator"},[t._v(" "+t._s(t.currentImgIndex+1)+" / "+t._s(t.imagesSwipe.length)+" ")])]},proxy:!0}])},t._l(t.imagesSwipe,(function(t,i){return s("van-swipe-item",{key:i},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.external_url,expression:"image.external_url"}]})])})),1),s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[s("div",{staticClass:"price"},[s("span",{staticClass:"now"},[t._v("￥"+t._s(t.detail.goods_price_min))]),s("span",{staticClass:"oldprice"},[t._v("￥"+t._s(t.detail.line_price_max))])]),s("div",{staticClass:"sellcount"},[t._v("已售"+t._s(t.detail.goods_sales)+"件")])]),s("div",{staticClass:"msg text-ellipsis-2"},[t._v(" "+t._s(t.detail.goods_name)+" ")]),s("div",{staticClass:"service",on:{click:function(s){t.showService=!0}}},[s("div",{staticClass:"left-words"},[s("span",[s("van-icon",{attrs:{name:"passed"}}),t._v("七天无理由退货")],1),s("span",[s("van-icon",{attrs:{name:"passed"}}),t._v("48小时发货")],1)]),s("div",{staticClass:"right-icon"},[s("van-icon",{attrs:{name:"arrow"}})],1)]),s("van-action-sheet",{attrs:{closeable:"",round:"",title:"商品保障服务"},model:{value:t.showService,callback:function(s){t.showService=s},expression:"showService"}},t._l(t.goodsService,(function(i,o){return s("van-cell",{key:o,attrs:{label:i.summary},scopedSlots:t._u([{key:"title",fn:function(){return[s("van-icon",{attrs:{name:"passed",color:"#fa2209"}}),s("span",[t._v(t._s(i.name))])]},proxy:!0}],null,!0)})})),1)],1),s("div",{staticClass:"comment"},[s("div",{staticClass:"comment-title"},[s("div",{staticClass:"left"},[t._v("商品评价 ("+t._s(t.totalComments)+"条)")]),s("div",{staticClass:"right",on:{click:function(s){return t.$router.push(`/comment?goodsId=${t.goodsId}`)}}},[t._v(" 查看更多 "),s("van-icon",{attrs:{name:"arrow"}})],1)]),s("div",{staticClass:"comment-list"},t._l(t.commentsList,(function(i,o){return s("div",{key:o,staticClass:"comment-item"},[s("div",{staticClass:"top"},[s("img",{attrs:{src:i.user.avatar_url||t.defaultAvatar,alt:""}}),s("div",{staticClass:"name"},[t._v(t._s(i.user.nick_name))]),s("van-rate",{attrs:{size:16,value:t.scoreRate(i.score),color:"#ffd21e","void-icon":"star","void-color":"#eee"}})],1),s("div",{staticClass:"content"},[t._v(" "+t._s(i.content)+" ")]),s("div",{staticClass:"time"},[t._v(" "+t._s(i.create_time)+" ")])])})),0)]),s("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.detail.content)}}),s("div",{staticClass:"footer"},[s("div",{staticClass:"icon-home"},[s("van-icon",{attrs:{name:"shop-o"},on:{click:function(s){return t.$router.push({path:"/"})}}}),s("span",[t._v("首页")])],1),s("div",{staticClass:"icon-cart"},[s("van-icon",{attrs:{name:"shopping-cart-o",badge:t.cartTotal||null},on:{click:function(s){return t.$router.push("/cart")}}}),s("span",[t._v("购物车")])],1),s("div",{staticClass:"btn-add",on:{click:function(s){t.ifShow=!0,t.mode="cart"}}},[t._v("加入购物车")]),s("div",{staticClass:"btn-buy",on:{click:function(s){t.ifShow=!0,t.mode="buyNow"}}},[t._v(" 立刻购买 ")])]),s("van-action-sheet",{attrs:{title:"cart"===t.mode?"加入购物车":"立即购买"},model:{value:t.ifShow,callback:function(s){t.ifShow=s},expression:"ifShow"}},[s("div",{staticClass:"product"},[s("div",{staticClass:"product-title"},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.detail.goods_image,alt:""}})]),s("div",{staticClass:"right"},[s("div",{staticClass:"price"},[s("span",[t._v("¥")]),s("span",{staticClass:"nowprice"},[t._v(t._s(t.detail.goods_price_min))])]),s("div",{staticClass:"count"},[s("span",[t._v("库存")]),s("span",[t._v(t._s(t.detail.stock_total))])])])]),s("div",{staticClass:"num-box"},[s("span",[t._v("数量")]),s("CountBox",{model:{value:t.goodsNum,callback:function(s){t.goodsNum=s},expression:"goodsNum"}})],1),t.detail.stock_total>0?s("div",{staticClass:"showbtn"},["cart"===t.mode?s("div",{staticClass:"btn",on:{click:t.addToCart}},[t._v(" 加入购物车 ")]):s("div",{staticClass:"btn now",on:{click:t.buyNow}},[t._v("立刻购买")])]):s("div",{staticClass:"btn-none"},[t._v("该商品已抢完")])])])],1)},a=[],e=i(4685),n=i(4471);const c=t=>n.Z.get("/goods/detail",{params:{goodsId:t}}),r=t=>n.Z.get("/comment/listRows",{params:{goodsId:t,limit:5}}),l=t=>(0,n.Z)({url:"/goods.service/list",params:{goodsId:t}});var d=i(6624),u=i(6945),v=(i(4889),i(5705)),h={methods:{isUserLogin(){return!!this.$store.getters.ifToken||(v.Z.confirm({message:"您还没有登录",confirmButtonText:"去登录",cancelButtonText:"再逛逛"}).then((()=>{this.$router.push({path:"/login",query:{backUrl:this.$route.fullPath}})})).catch((()=>{})),!1)}}},m={mixins:[h],components:{CountBox:e.Z},name:"DetailIndex",created(){console.log("created触发"),this.getCartTotal(),this.getProDetail(),this.getComments(),this.getGoodsService()},activated(){console.log("activated触发"),this.getCartTotal(),this.ifShow=!1,this.showService=!1,this.$route.params.goodsId!==this.goodsId&&(this.goodsId=this.$route.params.goodsId,this.currentImgIndex=0,this.goodsNum=1,this.getProDetail(),this.getComments(),this.getGoodsService())},data(){return{goodsId:this.$route.params.goodsId,goodsSkuId:"",detail:{},imagesSwipe:[],currentImgIndex:0,totalComments:"",commentsList:[],defaultAvatar:u,ifShow:!1,mode:"",goodsNum:1,cartTotal:0,goodsService:[],showService:!1}},methods:{onChange(t){this.currentImgIndex=t},async getProDetail(){const{data:{detail:t}}=await c(this.goodsId);this.detail=t,this.imagesSwipe=t.goods_images,this.goodsSkuId=this.detail.skuList[0].goods_sku_id,document.title=this.detail.goods_name},async getComments(){const{data:{list:t,total:s}}=await r(this.goodsId);this.commentsList=t,this.totalComments=s},async addToCart(){if(!this.isUserLogin())return;const{data:{cartTotal:t}}=await(0,d.kL)(this.goodsId,this.goodsNum,this.goodsSkuId);this.cartTotal=t,this.ifShow=!1},buyNow(){this.$router.push({path:"/checkout",query:{mode:"buyNow",goodsId:this.goodsId,goodsNum:this.goodsNum,goodsSkuId:this.goodsSkuId}})},async getCartTotal(){const{data:{cartTotal:t}}=await(0,d.UL)();this.cartTotal=t},async getGoodsService(){const{data:{list:t}}=await l(this.goodsId);this.goodsService=t},scoreRate(t){return 10===t?5:20===t?3:30===t?1:0}}},p=m,g=i(1001),C=(0,g.Z)(p,o,a,!1,null,"7afb2c79",null),f=C.exports},6945:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAKlBMVEXp6en////9/f3o6Ojw8PDj4+Pl5eXh4eHs7Oz7+/v09PTy8vL4+Pj29vY+GdZKAAADDElEQVRYw+3Wv0sbYRjA8ZNwp+Li89YhUQO+b6F0PDTx6NBBtHXpcBDPRkvhakiC1CGghqIIyRCdOqQlHdouUoqlm1Co0KUZhK4tFPvn9MnF5n6+P4R2KT6EhJe8n3y5ewOJduXJXZNr8l+Tecd5uFu6CinbS18+LR06pjJxxl4ATuZD2anMaXMKxHkOl/P6LFVxCnJi3YXAvP34zZWR1A6E54aUVI8j5J4mIcZBRExLr8WKRk5cGdmHyFyYEqI3o2SqJiH5NkRHl5B9iE3HFBJjI07StpDoC3Ey7QrJfBviYwiJCwmzLCQ7SeRCSNaTyEtTQFKbSSTtishsIrEFxBi6Jn+FFAWk+iSR1PnEyHWTSObM5pJSG5KnxSWPgDMdk0ce88gMl6zzyE0uWRnsoWFyziUubiWMAiMM8AmdtwT4zL38fJcxRnAXw6EI+0sGBpfoTUJIbxfF6ZnL5aTNP/0DklSht1w+KVFK4xVY1vjkqEkSKtltAdH2IF6Bjisi1vd4BfSGiByukWiFjtvi35dKO1qBI01M8AZEKtmahKQ2wxVK07aEaCuRCj3XZKTSDl8L6FIyPESCFZisSYm2F76Wjisn5TZlgYrekJPWLPErdKKm8kfxGfgVODFVyHATBpXJbU2FpDYGdwzGi2rkzqBC064a2fIrSP5VZTZQsZVIa8i/Y1M1JTJ86p9LZrWhdpSB01c6SqtJ/ApM1RtSYmDErzB4b0uJc0qYXyEsUzUlpDoKNFgh9LZjCkn1KTAWqhD4umvyScrJUULDFTTvsMMhxu4YimiFUfhVLSSTvPsAUMQqhMKbw0ICGckXf3giVsEHZO6vxsiIVewC7kqsUAZksR4lerENjPAquCCLhTAxtrv4Lr+CT6Rlh4hzCpSKKozQrGUGiDUKjIkrjMBEvTEg+FXsfyJWiLfRm96LV+unGPy0B6R83NuI73qAeKq/9h4epjgZ6w/Rt8Db2EeBCq4DFdQztUuy2mWKA0d9oq8RVULTNY+UMaKcyfdIao+oE/rKRqIvsCtMtpT7DVEPKD7Ga13IAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=767.4422b339.js.map