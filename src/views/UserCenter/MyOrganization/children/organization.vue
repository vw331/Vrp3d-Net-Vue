<!--我的组织-->
<template>
    <div id="organization">
        <p>共加入/创建2个组织</p>
        <div v-if="organizationList.length!==0" class="myorganization_list">
            <template v-for="(item,idnex) in organizationList">
                <div>
                    <div>
                        <el-row>
                            <el-col :span="2">
                                <img :src="item.img" alt="">
                            </el-col>
                            <el-col :span="12">
                                <p>{{item.title}}</p>
                                <p>{{item.type}}</p>
                                <p>
                                    <span>作品 20</span>
                                    <span>应用 20</span>
                                    <span>成员 20/200</span>
                                </p>
                            </el-col>
                            <el-col :span="8">
                                {{item.role}}
                            </el-col>
                            <el-col :span="2">
                                <div>管理 <i class="el-icon-arrow-down"></i>
                                    <div>
                                        <h6>组织</h6>
                                        <p>组织作品</p>
                                        <p>组织应用</p>
                                        <p>组织成员</p>
                                        <p>编辑资料</p>
                                        <p>解散组织</p>
                                        <h6>个人</h6>
                                        <p>我的分享作品</p>
                                        <p>离开组织</p>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </template>
        </div>
        <div v-else class="myorganization_not">
            <img src="../../../../assets/userCenter/myOrganization/not.png" alt="">
            <p>你没有加入或创建任何组织</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "organization",
        data(){
            return{
                organizationList:[
                    {img:require('../../../../assets/userCenter/myOrganization/user.png'),title:'深圳市中视典数字科技有限公司',type:'互联网 / 软件',role:'我是创建者',},
                    {img:require('../../../../assets/userCenter/myOrganization/user.png'),title:'中视典',type:'互联网 / 软件',role:'我是创建者',},
                    {img:require('../../../../assets/userCenter/myOrganization/user.png'),title:'中国',type:'互联网 / 软件',role:'我是创建者',},
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/static/font/index";
#organization{
    width: 100%;
    font-family:$fontFamily;
    &>p{
        font-size:14px;
        font-family:$fontFamily;
        color:rgba(59,60,60,1);
        margin: 18px 0 15px;
    }
    .myorganization_list{
        width: 100%;
        background: white;
        padding: 0 0 139px;
        &>div{
            padding: 31px 0;
            width: 100%;
            &>div{
                width: 100%;
                padding: 0 45px 0 32px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                &>div{
                    width: 100%;
                    height: 78px;
                    padding: 9px 0 ;
                    &>div{
                        height: 78px;
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        font-size:14px;
                        font-family:$fontFamily;
                        color:rgba(59,60,60,1);
                    }
                    &>div:nth-of-type(1){
                        img{
                            height: 78px;
                            width: 78px;
                            border-radius: 50%;
                        }
                    }
                    &>div:nth-of-type(2){
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        padding: 3px 0 3px 21px;
                        box-sizing: border-box;
                        font-family:$fontFamily;
                        p:nth-of-type(1){
                            font-size:16px;
                            color:rgba(59,60,60,1);
                        }
                        p:nth-of-type(2){
                            font-size:14px;
                            color:rgba(153,153,153,1);
                        }
                        p:nth-of-type(3){
                            font-size:14px;
                            color:rgba(59,60,60,1);
                            span+span{
                                margin-left: 24px;
                            }
                        }
                    }
                    &>div:nth-of-type(4){
                        &>div{
                            cursor: pointer;
                            position: relative;
                            &>i{
                                color: #666666;
                                margin-left: 16px;
                            }
                            &>div{
                                position: absolute;
                                right: 0;
                                width:191px;
                                background: white;
                                font-family:$fontFamily;
                                border:1px solid rgba(214,214,214,1);
                                display: none;
                                z-index: 100 ;
                                h6{
                                    font-size:14px;
                                    color:rgba(191,191,191,1);
                                    line-height:19px;
                                    padding: 0 0 0 18px;
                                    box-sizing: border-box;
                                    font-weight: 500;
                                    margin: 10px 0 10px;
                                }
                                p{
                                    height: 30px;
                                    width: 100%;
                                    line-height: 30px;
                                    color:#3B3C3C;
                                    font-size:14px;
                                    padding: 0 0 0 18px;
                                    box-sizing: border-box;
                                }
                                p:hover{
                                    background: #F4F4F4;
                                }
                            }
                        }
                        &>div:hover{
                            &>div{
                                display: block;
                            }
                        }
                    }
                }
            }
        }
        &>div+div{
            border-top: 2px solid #F2F0F1;
        }
    }
    .myorganization_not{
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