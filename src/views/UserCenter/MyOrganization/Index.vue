<template>
    <div id="myorganization">
        <div class="myorganization_menu">
            <div>
                <router-link to="/userCenter/organization/organizations">我的组织</router-link>
                <router-link to="/userCenter/organization/friend">我的好友</router-link>
            </div>
            <div v-if="$route.path==='/userCenter/organization/organizations'">
                <a href="javascript:void(0);" @click="visible=true">加入组织</a>
                <a href="javascript:void(0);">创建组织</a>
            </div>
        </div>
        <router-view></router-view>

        <div class="myorganization_search" v-if="visible">
            <div>
                <div class="myorganization_search_top">
                    <span>搜索组织</span>
                    <span class="el-icon-close" @click="visible=false,searchValue=''"></span>
                </div>
                <div>
                    <div>
                        <input type="text" v-model="searchValue" placeholder="输入要查找的组织全称">
                        <span>搜索</span>
                    </div>
                    <el-divider content-position="left">搜索结果</el-divider>
                    <div class="myorganization_search_list">
                        <template v-for="item in 4">
                            <div>
                                <img src="../../../assets/userCenter/myOrganization/user.png" alt="">
                                <div>
                                    <p>深圳市中视典数字科技有限公司</p>
                                    <p>互联网 / 软件</p>
                                </div>
                                <span @click="joinAction(item)">申请加入</span>
                            </div>
                        </template>

                    </div>
                </div>
            </div>
        </div>

        <div class="myorganization_add" v-if="visible_add">
            <div>
                <div>
                    发送申请 <i class="el-icon-close" @click="coloseAction"></i>
                </div>
                <div>
                    <el-input
                            type="text"
                            placeholder="填写您的真实名称（必填）"
                            v-model="params.name"
                            maxlength="10"
                            show-word-limit >
                    </el-input>
                    <el-input
                            type="textarea"
                            placeholder="内容"
                            v-model="params.val"
                            maxlength="200"
                            show-word-limit
                    >
                    </el-input>
                </div>
                <div>
                    <el-button @click="coloseAction">取消</el-button>
                    <el-button type="primary">确认</el-button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Index",
        data(){
            return{
                selectIndex:0,
                visible:false,
                visible_add:false,
                searchValue:'',
                params:{
                    name:'',
                    val:''
                }
            }
        },
        methods:{
            //加入事件
            joinAction(id){
                this.visible = false
                this.visible_add = true
            },
            //取消事件
            coloseAction(){
                this.visible = true
                this.visible_add =  false
                this.params={
                    name:'',
                    val:''
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/static/font/index";
#myorganization{
    width: 100%;
    font-family:$fontFamily;
    .myorganization_menu{
        width: 100%;
        height:66px;
        background:rgba(255,255,255,1);
        display: flex;
        justify-content: space-between;
        padding: 0 32px;
        box-sizing: border-box;
        &>div:nth-of-type(1){
            height: 100%;
            width: auto;
            display: flex;
            align-items: center;
            a{
                display: block;
                height: 100%;
                border-bottom: 1px solid transparent;
                font-size:16px;
                font-family:$fontFamily;
                color:#666666;
                line-height: 66px;
                margin-right: 52px;
                cursor: pointer;
            }
            .router-link-active{
                border-bottom: 1px solid black;
                color: black;
            }

        }
        &>div:nth-of-type(2){
            height: 100%;
            width: auto;
            display: flex;
            align-items: center;
            a{
                width:140px;
                height:34px;
                border-radius:3px;
                border:1px solid rgba(153,153,153,1);
                font-size:16px;
                font-family:$fontFamily;
                color:rgba(153,153,153,1);
                line-height: 34px;
                text-align: center;
            }
            a:nth-of-type(2){
                border:1px solid #136BFD;
                color:white;
                background: #136BFD;
            }
            a:nth-of-type(1):hover{
                border:1px solid #136BFD;
                color:white;
                background: #136BFD;
            }
            a:nth-of-type(2):hover{
                opacity: 0.8;
            }
            a+a{
                margin-left: 14px;
            }
        }
    }
    .myorganization_search{
        height: 100%;
        width: 100%;
        position:fixed;
        top: 0;
        left: 0;
        z-index: 99999999;
        background: rgba(0, 0, 0, 0.42);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        &>div{
            height: 31.25vw;
            width:52vw;
            background: #F2F2F2;
            .myorganization_search_top{
                height: 10%;
                width: 100%;
                border-bottom: 1px solid #D9DEE5;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 43px;
                box-sizing: border-box;
                span:nth-of-type(1){
                    font-size:18px;
                    font-family:$fontFamily_bold;
                    font-weight:bold;
                    color:rgba(0,0,0,1);
                }
                span:nth-of-type(2){
                    font-size:20px;
                    color: #999999;
                    cursor: pointer;
                }
                span:nth-of-type(2):hover{
                    color: #136dfd;
                }
            }
            &>div:nth-of-type(2){
                width: 100%;
                padding: 39px 105px;
                box-sizing: border-box;
                &>div:nth-of-type(1){
                    display: flex;
                    height:48px;
                    input{
                        height: 48px;
                        flex: 5;
                        border:1px solid rgba(208,207,208,1);
                        font-size:14px;
                        color:rgba(153,153,153,1);
                        padding: 0 15px;
                        box-sizing: border-box;
                        border-right: none;
                        outline: none;
                    }
                    span{
                        display: block;
                        height: 48px;
                        flex: 1;
                        background:#136BFD ;
                        font-size:16px;
                        line-height: 48px;
                        text-align: center;
                        color:rgba(255,255,255,1);
                        cursor: pointer;
                    }
                }
                .el-divider{
                    .el-divider__text{
                        background: none;
                    }
                }
                &>.myorganization_search_list{
                    height: 18vw;
                    width: 100%;
                    overflow: auto;
                    padding:  0 10px 0 0 ;
                    box-sizing: border-box;
                    &::-webkit-scrollbar {
                        width: 3px;
                        /*height: 4px;*/
                    }
                    &::-webkit-scrollbar-thumb {
                        border-radius: 10px;
                        background: rgba(0, 0, 0, 0.26);
                    }
                    &::-webkit-scrollbar-track {
                         border-radius: 0;
                        /*background:rgba(0, 0, 0, 0.26);*/

                     }
                    &>div{
                        width: 100%;
                        height: 96px;
                        background: white;
                        display: flex;
                        align-items: center;
                        padding:0 15px ;
                        box-sizing: border-box;
                        position: relative;
                        img{
                            width: 78px;
                            height: 78px;
                            border-radius: 50%;
                        }
                        &>div{
                            margin-left: 21px;
                            p:nth-of-type(1){
                                font-size:16px;
                                color:rgba(59,60,60,1);
                            }
                            p:nth-of-type(2){
                                font-size:14px;
                                color:rgba(153,153,153,1);
                            }
                            p+p{
                                margin-top: 6px;
                            }
                        }
                        span{
                            position: absolute;
                            width:93px;
                            height:29px;
                            border-radius:3px;
                            border:1px solid rgba(153,153,153,1);
                            font-size:14px;
                            color:rgba(153,153,153,1);
                            line-height: 29px;
                            text-align: center;
                            right: 10px;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                        span:hover{
                            background: #136dfd;
                            color: white;
                            border:1px solid #136dfd;
                        }

                    }
                    div+div{
                        margin-top: 10px;
                    }

                }
            }
        }
    }
    .myorganization_add{
        height: 100%;
        width: 100%;
        position:fixed;
        top: 0;
        left: 0;
        z-index: 99999;
        background: rgba(0, 0, 0, 0.42);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        &>div{
            width: 26.65vw;
            min-height:19.5vw;
            background: white;
            &>div:nth-of-type(1){
                height: 60px;
                text-align: center;
                line-height: 60px;
                position: relative;
                font-size:18px;
                color:rgba(0,0,0,1);
                border-bottom: 1px solid #D9DEE5;
                i{
                    position: absolute;
                    right: 24px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #999999;
                    font-size: 20px;
                    cursor: pointer;
                }
            }
            &>div:nth-of-type(2){
                padding:30px 42px;
                box-sizing: border-box;
                .el-input{
                    margin: 0 0 18px 0;
                }

            }
            &>div:nth-of-type(3){
                display: flex;
                justify-content: center;
            }
        }
    }
}
</style>

<style lang="scss">
    #myorganization{
        .el-textarea{
            /*height: 6.875vw;*/
            textarea{
                height: 6.875vw;
            }
        }
    }
</style>