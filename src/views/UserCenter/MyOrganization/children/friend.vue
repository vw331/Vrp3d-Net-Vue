<!--我的好友-->
<template>
    <div id="friend_">
        <p>共 3 个好友</p>
        <div v-if="userList.length!==0" class="friend_list">
            <template v-for="item in userList">
                   <div class="friend_list_info">
                       <div class="friend_list_top">
                           <el-row type="flex">
                               <el-col :span="2">
                                   <img src="../../../../assets/userCenter/myOrganization/user.png" alt="">
                                   <i class="el-icon-success"></i>
                                   <span>组织创建者</span>
                               </el-col>
                               <el-col :span="6">
                                   <div>
                                       <p>{{item.name}}</p>
                                       <p>产品设计师</p>
                                       <p>
                                           <span>资源 8</span>
                                           <i></i>
                                           <span>内容 2</span>
                                       </p>
                                   </div>
                                   <div>
                                       <span>已成好友</span>
                                   </div>
                               </el-col>
                               <el-col :span="15">
                                   <template v-for="item in 3">
                                      <div>
                                          <img src="../../../../assets/userCenter/myOrganization/user.png" alt="">
                                      </div>
                                   </template>
                               </el-col>
                               <el-col :span="0.5">
                                   <div >
                                       <i class="iconfont iconsangedian"></i>
                                        <div>
                                            <p>删除好友</p>
                                        </div>
                                   </div>
                               </el-col>
                           </el-row>
                       </div>
                       <div class="friend_list_bottom">
                       </div>
                   </div>
            </template>
        </div>
        <div v-else class="friend__not">
            <img src="../../../../assets/userCenter/myOrganization/not.png" alt="">
            <p>快去加好友吧</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "friend",
        data(){
            return{
                userList:[
                    {userImg:require('../../../../assets/userCenter/myOrganization/user.png'),name:'Dale Jennings',type:'', },
                    {userImg:require('../../../../assets/userCenter/myOrganization/user01.png'),name:'心有多大，舞台就有多大',type:'', },
                    {userImg:require('../../../../assets/userCenter/myOrganization/user.png'),name:'平凡人做非凡事',type:'', },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/static/font/index";
#friend_{
    width: 100%;
    &>p{
        font-size:14px;
        font-family:$fontFamily;
        color:rgba(59,60,60,1);
        margin: 18px 0 15px;
    }
    .friend_list{
        width: 100%;
        .friend_list_info{
            width: 100%;
            background: white;
            &>.friend_list_top{
                height: 210px;
                width: 100%;
                border-bottom: 1px solid #F4F4F4;
                padding: 31px 30px 29px;
                box-sizing: border-box;
                &>div{
                    height: 100%;
                    width: 100%;
                    &>div:nth-of-type(1){
                        position: relative;
                        img{
                            height: 80px;
                            width: 80px;
                            border-radius: 50%;
                        }
                        i{
                            position: absolute;
                            top: 56px;
                            left: 70px;
                            font-size: 16px;
                            color: #09BB07;
                        }
                        span{
                            display: block;
                            font-size: 12px;
                            padding: 3px 10px;
                            background:rgba(191,191,191,1);
                            border-radius:15px;
                            position: relative;
                            color: #3B3C3C;
                            top: -5px;
                        }
                    }
                    &>div:nth-of-type(2){
                        margin-left: 19px;
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        height: 100%;
                        &>div:nth-of-type(1){
                            p:nth-of-type(1){
                                font-size:18px;
                                color:#000000;
                                line-height:18px;
                            }
                            p:nth-of-type(2){
                                font-size:14px;
                                color:#999999;
                                line-height:18px;
                                margin: 10px 0 15px;
                            }
                            p:nth-of-type(3){
                                font-size:14px;
                                color:#000000;
                                line-height:18px;
                                display: flex;
                                align-items: center;
                                i{
                                    display: block;
                                    width:0;
                                    height:10px;
                                    border: 1px solid #3B3C3C;
                                    margin: 0 10px;
                                }
                            }
                        }
                        &>div:nth-of-type(2){
                            span{
                                display: block;
                                width:100px;
                                height:36px;
                                border-radius:4px;
                                border:1px solid rgba(59,60,60,0.5);
                                font-size:14px;
                                text-align: center;
                                line-height: 36px;
                                color:rgba(102,102,102,1);
                            }
                        }
                    }
                    &>div:nth-of-type(3){
                        display: flex;
                        &>div{
                            width: 189px;
                            height: 150px;
                            overflow: hidden;
                            img{
                                object-fit: cover;
                                max-width: 100%;
                            }
                        }
                        div+div{
                            margin-left: 24px;
                        }
                    }
                    &>div:nth-of-type(4){
                        height: 100%;
                        display: flex;
                        align-items: center;
                        position: relative;
                        &>div{
                            height: 60px;
                            width: 60px;
                            left: -20px;
                            position: absolute;
                            text-align: center;
                            line-height: 60px;
                            i{
                                font-size: 27px;
                                color: #999999;
                                display: block;
                                transform: rotate(-90deg);
                            }
                            &>div{
                                position: absolute;
                                width: 106px;
                                height: auto;
                                padding: 10px 0;
                                right: -20px;
                                background:rgba(255,255,255,1);
                                border:1px solid rgba(214,214,214,1);
                                display: none;
                                p{
                                    font-size:14px;
                                    line-height: 30px;
                                    width: 100%;
                                    height: 30px;
                                    color: #3B3C3C;
                                    cursor: pointer;
                                }
                                p:hover{
                                    background: #F4F4F4;
                                }
                            }
                        }
                        &>div:hover{
                            i{
                                color:#136BFD;
                            }
                            &>div{
                                display: block;
                            }
                        }
                    }
                }
            }
            &>.friend_list_bottom{
                height: 50px;
                width: 100%;
            }
        }
        &>div+div{
            margin-top: 24px;
        }
    }
    .friend__not{
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        align-items: center;
        height: 32.14vw;
        width: 100%;
        background: white;
        img{
            text-align: center;
            width: 301px;
            height: 175px;
        }
        p{
            font-size:32px;
            color:rgba(153,153,153,1);
            line-height:42px;
        }

    }
}
</style>