<!--个人中心-->
<template>
    <div id="user_index">
        <Tabs></Tabs>
        <div class="user_index_content">
            <div class="user_index_top">
                <div>用户昵称</div>
                <div>用户角色</div>
                <div>
                    <span>
                        <strong>余额</strong><strong>999</strong>
                    </span>
                    <span>
                        <strong>可提现</strong><strong>999</strong>
                    </span>
                    <img src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg" alt="">
                    <span>
                        <strong>发布</strong><strong>999</strong>
                    </span>
                    <span>
                        <strong>收藏</strong><strong>999</strong>
                    </span>
                </div>
            </div>
            <div class="user_index_center">
                <div>
                    <div class="user_menu">
                        <ul>
                            <li v-for="(item,index) in menuList" :key="index" :class="$route.path===item.link?'router-link-active_':''">
                                <i :class="['iconfont',item.icon]"></i>
                                <router-link :to="item.link" v-if="item.link">{{item.title}}</router-link>
                                <span v-else :style="!item.online?'color:#999999':''">{{item.title}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="user_info">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Tabs from "../../components/public/Tabs";
    import Footer from "../../components/public/Footer";
    export default {
        name: "user_index",
        components:{
            Tabs,
            Footer
        },
        data(){
            return{
                menuList:[
                    {icon:'iconwodezuopin',title:'我的作品',link:'/userCenter/creation',online:true},
                    {icon:'iconwenti',title:'我的新闻',link:null,online:true},
                    {icon:'iconwodedingdan',title:'我的交易',link: '/userCenter/trade',online:true},
                    {icon:'iconwodeyingyong',title:'我的应用',link:null,online:true},
                    {icon:'iconwodegouwuche',title:'我的购物车',link:null,online:true},
                    {icon:'iconwodeshoucang',title:'我的收藏',link:null,online:true},
                    {icon:'iconwodexiaoxi',title:'我的消息',link:null,online:true},
                    {icon:'iconwodexuke',title:'授权管理',link:null,online:true},
                    {icon:'iconwodezuzhi',title:'我的组织',link:'/userCenter/organization',online:true},
                    {icon:'iconyingshou',title:'云渲染（即将上线）',link:null,online:false},
                    {icon:'iconxiugaiziliao',title:'资料与账号',link:null,online:true},
                    {icon:'iconwodetongji',title:'统计',link:null,online:true}
                ]
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "src/static/font/index";
#user_index{
    width: 100%;
    background: #F4F4F4;
    .user_index_content{
        width: 100%;
        height: auto;
        .user_index_top{
            width: 100%;
            height: 17.92vw;
            position: relative;
            background: url("../../assets/userCenter/top.png") no-repeat;
            background-size: cover;
            &>div{
                position: absolute;
                left: 50%;
                text-align: center;
            }
            &>div:nth-of-type(1){
                font-size:48px;
                font-family:$fontFamily_bold;
                font-weight:bold;
                color:rgba(255,255,255,1);
                line-height:64px;
                text-shadow:0px 5px 8px rgba(0,0,0,0.5);
                top: 42%;
                transform: translate(-50%,-50%);
            }
            &>div:nth-of-type(2){
                font-size:14px;
                font-family:$fontFamily;
                color:rgba(153,153,153,1);
                top: 60%;
                transform: translate(-50%,-50%);
            }
            &>div:nth-of-type(3){
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                display: flex;
                justify-content: center;
                span{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    text-align: center;
                    strong:nth-of-type(1){
                        font-size:14px;
                        font-family:$fontFamily;
                        color:rgba(191,191,191,1);
                        line-height:19px;
                        font-weight: 500;
                    }
                    strong:nth-of-type(2){
                        font-size:24px;
                        font-family:$fontFamily;
                        color:rgba(255,255,255,1);
                        line-height:31px;
                        font-weight: 500;
                        margin: 8px 0 21px;
                    }
                }
                span+span{
                    margin-left: 174px;
                }
                span:nth-of-type(2){
                    margin-right: 390px;
                }
                img{
                    position: absolute;
                    top: 15px;
                    height: 120px;
                    width: 120px;
                    border-radius: 50%;
                    border: 3px solid white;
                }
            }
        }
        .user_index_center{
            width: 100%;
            margin:127px 0 100px;
            &>div{
                width: $widthVW;
                margin: auto;
                display: flex;
                justify-content: space-between;
                .user_menu{
                    width: 13.542vw;
                    ul{
                        width: 100%;
                        background: white;
                        li{
                            width: 100%;
                            height:60px;
                            line-height: 60px;
                            display: flex;
                            align-items: center;
                            position: relative;
                            i{
                               font-size: 22px;
                                margin: 0 18px 0 24px;
                                opacity:0.65;
                            }
                            a{
                                font-size:16px;
                                font-family:$fontFamily;
                                color:#000000;
                            }
                            span{
                                font-size:16px;
                                font-family:$fontFamily;
                                color:#000000;
                            }
                        }
                        li+li{
                            border-top: 1px solid #F2F2F2;
                        }
                        li:hover{
                            background: #EBE8E8;
                        }
                        li:hover:after{
                            position: absolute;
                            display: block;
                            content: '';
                            width:2px;
                            height:24px;
                            background:rgba(19,107,253,1);
                        }

                        .router-link-active_{
                            background: #EBE8E8;
                        }
                        .router-link-active_:after{
                            position: absolute;
                            display: block;
                            content: '';
                            width:2px;
                            height:24px;
                            background:rgba(19,107,253,1);
                        }
                    }
                }
                .user_info{
                    width: 57.23vw;
                }
            }
        }
    }
}
</style>