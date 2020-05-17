<!--我的作品-->
<template>
    <div id="mycreation">
        <div class="mycreation_menu">
            <div class="mycreation_menu_1">
                <div>
                    <span :class="selectmenuIndex===0?'selectmenu':''" @click="selectmenuIndex=0">资源</span>
                    <span :class="selectmenuIndex===1?'selectmenu':''" @click="selectmenuIndex=1">内容</span>
                    <span :class="selectmenuIndex===2?'selectmenu':''" @click="selectmenuIndex=2">草稿</span>
                </div>
                <div>
                    <a v-show="selectmenuIndex!==2" href="javascript:void(0);" @click="approveAction">发布新资源</a>
                    <p v-show="selectmenuIndex===2" > <i class="iconfont iconweirenzheng"></i>注意：草稿箱中内容请及时发布，1个月之后将作删除处理，不作保留。</p>
                </div>
            </div>
            <div class="mycreation_menu_2">
                <div class="mycreation_menu_all" v-if="selectmenuIndex===0">
                    <span :class="selectmenuIndex_s===0?'selectmenu_s':''" @click="selectmenuIndex_s=0">全部</span>
                    <span :class="selectmenuIndex_s===1?'selectmenu_s':''" @click="selectmenuIndex_s=1">3D模型</span>
                    <span :class="selectmenuIndex_s===2?'selectmenu_s':''" @click="selectmenuIndex_s=2">材质</span>
                    <span :class="selectmenuIndex_s===3?'selectmenu_s':''" @click="selectmenuIndex_s=3">VRP课件</span>
                </div>
                <div class="mycreation_menu_seach" :style="selectmenuIndex!==0?'width:100%':''">
                    <el-input class="el-input_"
                            placeholder="搜索作品"
                            suffix-icon="el-icon-search"
                            v-model="paramsList.name">
                    </el-input>
                    <el-select v-model="paramsList.time" placeholder="请选择">
                        <el-option
                                v-for="item in timeList"
                                :key="item.id"
                                :label="item.title"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </div>
        <p>
            <span>共发布了99个内容</span>
            <el-select v-model="paramsList.menuType" placeholder="请选择">
                <el-option
                        v-for="item in typeList"
                        :key="item.id"
                        :label="item.title"
                        :value="item.id">
                </el-option>
            </el-select>
        </p>
        <div class="mycreation_list">
            <el-row :gutter="20">
                <template v-for="(item,index) in infoList">
                    <el-col :span="6">
                        <DisplayCommon :dataInfo="item" :offShelf="item.isOffShelf" :isStatus="{status:item.isStatus,errorMessage:item.errorMessage}" :isSelf="true"></DisplayCommon>
                    </el-col>
                </template>
                <el-col :span="6" v-if="selectmenuIndex===2">
                    <div class="mycreation_create transition_">
                        <div>
                            <p class="iconfont icontijiaoshibai"></p>
                            <p>创建作品</p>
                        </div>
                        <p>未发布的作品将展示在此处</p>
                        <p>还可展示 10 个资源和 8 组内容</p>
                    </div>
                </el-col>
            </el-row>
            <div class="mycreation_pages">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="infoCount">
                </el-pagination>
            </div>
        </div>
        <div class="mycreation_not" v-if="infoList.length===0">
            <div>
                <img src="../../../assets/userCenter/myCreate/not.png" alt="">
            </div>
            <p>您还没有发布作品，来小秀一把，点燃自我原创小宇宙吧~</p>
        </div>



    </div>
</template>

<script>
    import DisplayCommon from "../../../components/public/DisplayCommon";
    export default {
        name: "Index",
        components:{
            DisplayCommon,
        },
        data(){
            return{
                reveal:false,//弹框
                selectmenuIndex:0,
                selectmenuIndex_s:0,
                paramsList:{
                    name:'',
                    time:'0',
                    menuType:'0',
                },
                timeList:[
                    {title:'最近30天',id:'0'},
                    {title:'最近7天',id:'1'},
                ],
                typeList:[
                    {title:'全部',id:'0'},
                    {title:'待审核',id:'1'},
                    {title:'已通过',id:'2'},
                    {title:'未通过',id:'3'},
                    {title:'已分享',id:'4'},
                ],
                infoList:[ //isStatus 0->通过 1->审核中 2->未通过
                    {img:require('../../../assets/resourcePlatForm/ionfo01.png'),title:'现代摩托车3D模型',label:'.max,.max,.max,.max',price:'15',id:'123456',l:199,d:199,x:199,isOffShelf:false,isStatus:'2',errorMessage:'原因：作品类别有误'},
                    {img:require('../../../assets/resourcePlatForm/ionfo01.png'),title:'现代摩托车3D模型',label:'.max,.max,.max,.max',price:'15',id:'123456',l:199,d:199,x:199,isOffShelf:false,isStatus:'1',errorMessage:'原因：作品类别有误'},
                    {img:require('../../../assets/resourcePlatForm/ionfo01.png'),title:'现代摩托车3D模型',label:'.max,.max,.max,.max',price:'15',id:'123456',l:199,d:199,x:199,isOffShelf:false,isStatus:'0',errorMessage:'原因：作品类别有误'},
                    {img:require('../../../assets/resourcePlatForm/ionfo01.png'),title:'现代摩托车3D模型',label:'.max,.max,.max,.max',price:'15',id:'123456',l:199,d:199,x:199,isOffShelf:true,isStatus:'0',errorMessage:'原因：作品类别有误'},
                    {img:require('../../../assets/resourcePlatForm/ionfo01.png'),title:'现代摩托车3D模型',label:'.max,.max,.max,.max',price:'15',id:'123456',l:199,d:199,x:199,isOffShelf:false,isStatus:'0',errorMessage:'原因：作品类别有误'},
                    {img:require('../../../assets/resourcePlatForm/ionfo01.png'),title:'现代摩托车3D模型',label:'.max,.max,.max,.max',price:'15',id:'123456',l:199,d:199,x:199,isOffShelf:false,isStatus:'0',errorMessage:'原因：作品类别有误'},
                    {img:require('../../../assets/resourcePlatForm/ionfo01.png'),title:'现代摩托车3D模型',label:'.max,.max,.max,.max',price:'15',id:'123456',l:199,d:199,x:199,isOffShelf:false,isStatus:'0',errorMessage:'原因：作品类别有误'},
                    {img:require('../../../assets/resourcePlatForm/ionfo01.png'),title:'现代摩托车3D模型',label:'.max,.max,.max,.max',price:'15',id:'123456',l:199,d:199,x:199,isOffShelf:false,isStatus:'1',errorMessage:'原因：作品类别有误'},
                    {img:require('../../../assets/resourcePlatForm/ionfo01.png'),title:'现代摩托车3D模型',label:'.max,.max,.max,.max',price:'15',id:'123456',l:199,d:199,x:199,isOffShelf:true,isStatus:'0',errorMessage:'原因：作品类别有误'},
                    {img:require('../../../assets/resourcePlatForm/ionfo01.png'),title:'现代摩托车3D模型',label:'.max,.max,.max,.max',price:'15',id:'123456',l:199,d:199,x:199,isOffShelf:false,isStatus:'2',errorMessage:'原因：作品含有敏感信息'},
                    {img:require('../../../assets/resourcePlatForm/ionfo01.png'),title:'现代摩托车3D模型',label:'.max,.max,.max,.max',price:'15',id:'123456',l:199,d:199,x:199,isOffShelf:false,isStatus:'0',errorMessage:'原因：作品类别有误'},
                    {img:require('../../../assets/resourcePlatForm/ionfo01.png'),title:'现代摩托车3D模型',label:'.max,.max,.max,.max',price:'15',id:'123456',l:199,d:199,x:199,isOffShelf:false,isStatus:'0',errorMessage:'原因：作品类别有误'}
                ],
                infoCount:100
            }
        },
        methods:{
            //跳往发布资源页面 前提是认证后
            approveAction(){
                if(false){

                }else{
                    this.$store.commit('setReveal',{  //认证提醒
                        visible:true,
                        type:'warn',
                        btnMessage:'好的，去认证',
                        errorMessage:'很抱歉，只有认证用户才能发布内容',
                        link:'www.baidu.com',
                        message:'认证提醒',
                        func:function () {
                            console.log('分享提醒事件','www.baidu.com')
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import 'src/static/font/index';
    #mycreation{
        width: 100%;
        .mycreation_menu{
            width: 100%;
            background: white;
            &>div{
                padding: 0 32px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
            }
            .mycreation_menu_1{
                width: 100%;
                height: 62px;
                border-bottom: 2px solid #F2F0F1;
                &>div:nth-of-type(1){
                    display: flex;
                    span{
                        line-height: 62px;
                        margin: -2px 50px 0 0;
                        color: #666666;
                        font-size:16px;
                        font-family:$fontFamily;
                        cursor: pointer;
                        position: relative;
                    }
                    .selectmenu{
                        color: black;
                    }
                    .selectmenu:after{
                        display: block;
                        content: '';
                        width:32px;
                        height:2px;
                        background:rgba(0,0,0,1);
                    }
                }
                &>div:nth-of-type(2){
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    a{
                        width:140px;
                        height:34px;
                        background:rgba(19,107,253,1);
                        border-radius:3px;
                        text-align: center;
                        line-height: 34px;
                        font-size:16px;
                        font-family:$fontFamily;
                        color:rgba(255,255,255,1);
                    }
                    p{
                        font-size:14px;
                        font-family:$fontFamily;
                        color:rgba(102,102,102,1);
                        line-height:30px;
                        display: flex;
                        align-items: center;
                        i{
                            color: #FB0107;
                            font-size: 24px;
                            margin-right: 5px;
                        }
                    }
                }
            }
            .mycreation_menu_2{
                align-items: center;
                height: 64px;
                &>.mycreation_menu_all{
                    display: flex;
                    span{
                        font-size:14px;
                        font-family:$fontFamily;
                        color:rgba(0,0,0,1);
                        margin-right: 32px;
                        cursor: pointer;
                    }
                    .selectmenu_s{
                        color: #136dfd;
                    }
                }
                &>.mycreation_menu_seach{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            }
        }
        &>p{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0 ;
            font-size:14px;
            font-family:$fontFamily;
            color:#3B3C3C;
        }
        .mycreation_list{
            width: 100%;
            .mycreation_create{
                background: white;
                width:  13.385vw;
                height: 16vw;
                position: relative;
                margin: 0 0 24px;
                padding: 30px 42px;
                box-sizing: border-box;
                cursor: pointer;
                &>div:nth-of-type(1){
                    width: 100%;
                    height:174px;
                    border:1px solid rgba(217,222,229,0.88);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    p{
                        text-align: center;
                    }
                    p:nth-of-type(1){
                        font-size: 43px;
                        color: #136BFD;
                    }
                    p:nth-of-type(2){
                        font-size:16px;
                        font-family:$fontFamily;
                        color:rgba(59,60,60,1);
                        margin-top: 15px;
                    }
                }
                p:nth-of-type(1){
                    font-size:14px;
                    font-family:$fontFamily;
                    color:rgba(0,0,0,1);
                    margin: 24px 0 11px;
                }
                p:nth-of-type(2){
                    font-size:12px;
                    font-family:$fontFamily;
                    color:rgba(153,153,153,1);
                 }

            }
            .mycreation_create:hover{
                transform: translateY(-3px);
                box-shadow:0px 12px 16px 0px rgba(148,167,175,0.19);
            }
            .mycreation_pages{
                display: flex;
                justify-content: center;
                margin:50px 0 0;
            }
        }
        .mycreation_not{
            width: 100%;
            background: white;
            text-align: center;
            overflow: hidden;
            &>div{
                height: 208px;
                width: 100%;
                margin: 126px 0 35px;
                overflow: hidden;
                img{
                    height: 100%;
                }
            }
            &>p{
                font-size:14px;
                font-family:$fontFamily;
                color:rgba(153,153,153,1);
                line-height:19px;
                margin: 0 0 160px;
            }
        }
    }
</style>
<style lang="scss">
    #mycreation{
        .el-input__icon{
            line-height: 30px;
        }
        .el-input_{
            margin-right: 24px;
            width:220px;
            height:30px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(214,214,214,1);
            input{
                height: 30px;
                border-radius:0;
                border: none;
            }
        }
        .el-select{
            width:139px;
            height:32px;
            &>.el-input{
                height:32px;
                input{
                    height:32px;
                }
            }
        }
        .mycreation_pages{
            .el-pagination {
                text-align: center;

                .el-pager li, .btn-next , .btn-prev {
                    font-size: 20px;
                    padding: 15px 19px;
                    height: 52px;
                    min-width: 52px;
                    font-weight: 500;
                    margin: 0 10px;
                    background-color: white;
                    .number{
                        padding: 15px 19px;
                        height: 52px;
                        min-width: 52px;
                        background-color: white;
                    }
                }

                .el-pager li:hover{
                    background-color: #136BFD;
                    color: #ffffff;
                }
                .el-pager li:not(.disabled).active {
                    background-color: #136BFD;
                    color: #ffffff;
                }
            }
        }
    }
</style>