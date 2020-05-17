<!--资源平台 模型展示小组件-->
<template>
    <div id="DisplayCommon" class="transition_" ref="DisplayCommon"
         @mouseover="changeColor.theme?$refs.DisplayCommon.style['box-shadow']='none':''"
         @mouseout="changeColor.theme?$refs.DisplayCommon.style['box-shadow']='none':''"
         v-if="dataInfo&&dataInfo!==undefined" :style="changeColor.theme?`background:${changeColor.sbgcolor};color:${changeColor.d_color}`:''">
        <div>
            <div>
                <img :src="dataInfo.img" alt=""  class="transition_">
                <div class="DisplayCommon_delete transition_" v-if="isSelf&&isStatus.status==='0'&&!offShelf">
                     <span class="iconfont iconbianjixiugai">
                            <strong class="transition_">编辑</strong>
                    </span>
                    <span class="iconfont iconfenxiang">
                            <strong class="transition_">分享给组织</strong>
                    </span>
                    <span class="iconfont iconxiajia">
                            <strong class="transition_">下架</strong>
                    </span>
                </div>
                <div class="DisplayCommon_status" v-if="isStatus.status!=='0'">
                    <span :class="['iconfont',isStatus.status==='1'?'iconsuoding':'iconcuowu']"></span>
                    <span>{{isStatus.status==='1'?'审核中':'未通过'}}</span>
                </div>
                <div class="DisplayCommon_delete transition_" v-if="isStatus.status==='2'">
                    <span class="iconfont iconbianjixiugai">
                            <strong class="transition_">编辑</strong>
                    </span>
                    <span class="iconfont iconshanchu" @click="deleteAction(dataInfo.id,dataInfo.title)">
                            <strong class="transition_">删除</strong>
                    </span>
                </div>
            </div>
            <div :style="changeColor.theme?`background:${changeColor.sbgcolor};color:${changeColor.d_color};border-bottom:${changeColor.sbgcolor}`:''">
                <h6 class="omit_" :style="changeColor.theme?`color:${changeColor.d_color};`:''">{{dataInfo.title}}</h6>
                <p class="omit_" v-if="isStatus.status==='0'">{{dataInfo.label}}</p>
                <p class="omit_" v-if="isStatus.status==='2'" style="color: #FB0107">{{isStatus.errorMessage}}</p>
            </div>
            <div :style="changeColor.theme?`background:#252525`:''">
                <span v-if="!isSelf" class="DisplayCommon_price">￥{{dataInfo.price}}</span>
                <span v-if="!isSelf":style="changeColor.theme?`color:${changeColor.d_color}`:''">ID：{{dataInfo.id}}</span>

                <span v-if="isSelf" class="DisplayCommon_back">1年前</span>

                <div class="transition_" :style="changeColor.theme?`background:#252525`:''">
                    <span> <strong class="iconfont iconliulan"></strong>{{dataInfo.l}}</span>
                    <i :style="changeColor.theme?`border: 1px solid rgba(217,222,229,0.5);background: none;`:''"></i>
                    <span> <strong class="iconfont icondianzan"></strong>{{dataInfo.d}}</span>
                    <i :style="changeColor.theme?`border: 1px solid rgba(217,222,229,0.5);background: none;`:''"></i>
                    <span> <strong class="iconfont iconshoucangxiantiao"></strong>{{dataInfo.x}}</span>
                </div>
            </div>
        </div>
        <span class="OffShelf" v-if="offShelf">
            <strong>已下架</strong>
        </span>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "DisplayCommon",
        props:{
            dataInfo:{ //信息
                type: Object,
                required: true
            },

            changeColor:{//主题颜色
                type:Object,
                default:function () {
                    return{
                        theme:false
                    }
                }
            },

            offShelf:{ //是否下架
                type:Boolean,
                default:false,
            },
            isStatus:{ //审核状态
                type:Object,
                default:function () {
                    return {
                        status:'0',
                        errorMessage:''
                    }
                }
            },
            isSelf:{
                type:Boolean,
                default:false,
            }
        },
        data(){
            return{

            }
        },
        methods:{
            //删除事件
            deleteAction(id,title){
               this.$store.commit('setReveal',{
                   visible:true,
                   type:'delete',
                   id:id,
                   titleMessage:title,
                   btnMessage:'确定',
                   message:'删除作品',
                   func:function () {
                       console.log('删除事件',id,title)
                   }
               })
            },

        },
        created() {
            // console.log(this.changeColor)
        },
        computed:{
            ...mapState({
                reveal:state=>state.reveal
            })
        }
    }
</script>

<style scoped lang="scss">
    @import "../../static/font/index";
#DisplayCommon{
    background: white;
    width:  13.385vw;
    height: 16vw;
    position: relative;
    margin: 0 0 24px;
    /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
    border-bottom: 1px solid transparent;
    &>div{
        width:  100%;
        &>div:nth-of-type(1){
            height:10vw;
            width: 100%;
            overflow: hidden;
            position: relative;
            img {
                max-width: 100%;
                margin-right: auto;
                margin-left: auto;
            }
            &>div{
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                span{
                    display: block;
                    width: 100%;
                    text-align: center;
                }

            }
            &>.DisplayCommon_status{
                background:rgba(196,0,0,0.8);
                flex-direction: column;
                z-index: 1;
                span:nth-of-type(1){
                    width:50px;
                    height:50px;
                    border:2px solid rgba(255,255,255,1);
                    border-radius: 50%;
                    font-size:28px;
                    color: white;
                    line-height: 50px;
                }
                span:nth-of-type(2){
                    font-size:16px;
                    font-family:$fontFamily_bold;
                    color:rgba(255,255,255,1);
                    margin-top: 15px;
                }
            }
            &>.DisplayCommon_delete{
                z-index: 2;
                background:rgba(0,0,0,0.8);
                top: 100%;
                justify-content: space-around;
                padding: 0 20px;
                box-sizing: border-box;
                span{
                    width:46px;
                    height:46px;
                    border:2px solid rgba(255,255,255,1);
                    border-radius: 50%;
                    font-size:23px;
                    color: white;
                    line-height: 46px;
                    position: relative;
                    cursor: pointer;
                    strong{
                        padding: 0 10px;
                        white-space: nowrap;
                        font-size:14px;
                        font-family:$fontFamily;
                        color:rgba(59,60,60,1);
                        position: absolute;
                        height:30px;
                        background:rgba(191,191,191,1);
                        border-radius:15px;
                        line-height: 30px;
                        bottom: -40px;
                        left: 50%;
                        transform: translateX(-50%);
                        opacity: 0;
                    }
                }
                span:hover{
                    background: white;
                    color: black;
                    strong{
                        opacity: 1;
                    }
                }
            }
        }
        &>div:nth-of-type(1):hover{
            .DisplayCommon_delete{
                top: 0;
            }
        }
        &>div:nth-of-type(2){
            height: 3.75vw;
            width: 100%;
            padding: 13px 22px;
            box-sizing: border-box;
            border-bottom: 1px solid #D9DEE5;
            overflow: hidden;
            h6{
                font-size:16px;
                font-family:$fontFamily;
                margin: 0;
                color:rgba(59,60,60,1);
                line-height:21px;
            }
            p{
                font-size:12px;
                font-family:$fontFamily;
                color:rgba(153,153,153,1);
                line-height:16px
            }
        }
        &>div:nth-of-type(3){
            height: 2.5vw;
            width: 100%;
            padding: 0 22px;
            box-sizing: border-box;
            line-height: 2.083vw;
            display: flex;
            justify-content: space-between;
            position: relative;
            overflow: hidden;
            border-bottom: 1px solid transparent;
            &>.DisplayCommon_price{
                font-size: 15px;
                color: #D44D44;
                font-family: $fontFamily;
            }
            &>.DisplayCommon_back{
                color: #999999;
                font-size:12px;
            }
            &>span:nth-of-type(2){
                font-size: 12px;
                color: #999999;
                font-family: $fontFamily;
            }
            div{
                position: absolute;
                height: 100%;
                width: 100%;
                top: 3.75vw;
                left: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 22px;
                box-sizing: border-box;
                background: white;
                span{
                    display: block;
                    font-size:13px;
                    font-family:$fontFamily;
                    color:rgba(153,153,153,1);
                    strong{
                        font-weight: 500;
                        margin-right: 13px;
                    }
                }
                i{
                    display: block;
                    width:0px;
                    height:23px;
                    background:rgba(217,222,229,0.88);
                    border: 1px solid #D9DEE5;
                }
            }
        }
    }
    .OffShelf{
        position: absolute;
        top: 0;
        left: 0;
        height: 48px;
        width: 48px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        strong{
            position: absolute;
            white-space: nowrap;
            width: auto;
            height: 20px;
            padding: 0 15px;
            box-sizing: border-box;
            background: #FB0107;
            line-height: 20px;
            font-size: 12px;
            font-weight: 300;
            transform: rotate(-45deg);
            margin: -8px 0 0 -8px;
        }
    }
}
    #DisplayCommon:hover{
        transform: translateY(-3px);
        /*border-bottom: 1px solid #136dfd;*/
        box-shadow:0px 12px 16px 0px rgba(148,167,175,0.19);
        &>div{
            &>div:nth-of-type(1){
               img {
                   transform: scale(1.1);
               }
            }
            &>div:nth-of-type(3){
                border-bottom: 1px solid #136dfd;
                div{
                    top: 0;
                }
            }
        }
    }
</style>