<template>
    <div id="after_service">
        <Tabs></Tabs>
        <ul class="sub_nav_wrap">
            <li class="sub_nav_item active">
                <a href="javascript:;">申请售后</a>
            </li>
        </ul>
        <div class="container">
            <el-alert
                style="width: 480px"
                class="alert"
                :closable="false"
                type="warning">
                <template>
                    <svg t="1589706279096" class="icon" viewBox="0 0 1184 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1191" width="18" height="18">
                        <path d="M670.432 1024a92.96 92.96 0 0 1-50.24-14.976l-264.672-167.904c-1.184-0.832-2.528-1.696-3.584-2.56a68.608 68.608 0 0 0-33.152-8.736H134.72C60.48 829.824 0 758.4 0 670.752v-317.376c0-87.776 60.48-159.04 134.72-159.04h184.064a69.792 69.792 0 0 0 37.536-11.424L620.992 14.976a92.064 92.064 0 0 1 98.528-1.28A124.8 124.8 0 0 1 775.744 121.6l-0.384 184.32-0.416 596.48a125.248 125.248 0 0 1-56.224 107.968 93.088 93.088 0 0 1-48.288 13.632z m357.376-180.48a45.056 45.056 0 0 1-33.024-14.56 51.936 51.936 0 0 1 0-70.144 365.312 365.312 0 0 0 0-493.664 51.936 51.936 0 0 1 0-70.144 44.8 44.8 0 0 1 65.92 0 469.024 469.024 0 0 1 0 633.952 44.576 44.576 0 0 1-32.896 14.56z m0 0l-157.12-114.592a45.056 45.056 0 0 1-33.024-14.528 51.936 51.936 0 0 1 0-70.144 195.936 195.936 0 0 0 0-264.608 51.936 51.936 0 0 1 0-70.144 44.8 44.8 0 0 1 65.92 0 299.84 299.84 0 0 1 0 404.896 44.576 44.576 0 0 1-32.896 14.528z m0 0" p-id="1192" fill="#F56A60"></path>
                    </svg>&nbsp;&nbsp;
                    <span>温馨提示：资源是否购买成功，以最终下单为准哦，请尽快结算</span>
                </template>
            </el-alert>

            <el-card class="card" shadow="never">
                <product-item :data="list"></product-item>
            </el-card>

            <el-card class="card" shadow="never">
                <div slot="header" class="clearfix">
                    <h3 class="card_title">售后详情</h3>
                </div>
                <el-form class="form" ref="form" :model="form" label-width="150px" label-position="left" >
                    <el-form-item>
                        <template slot="label"><span class="is_required"></span>请选择售后原因</template>    
                        <el-select v-model="value" placeholder="选择售后原因">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-checkbox style="margin-left: 20px" v-model="form.checked">我要退款</el-checkbox>
                    </el-form-item>
                    <el-form-item>
                        <template slot="label"><span class="is_required"></span>售后说明</template>  
                        <el-input v-model="form.name" type="textarea" :rows="5" placeholder="请详细描述您遇到的问题，以便售后及时帮助您解决"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <template slot="label"><span class="is_required"></span>常用邮箱</template>  
                        <el-input v-model="form.name" style="width: 280px" placeholder="请输入常用邮箱"></el-input>
                        <p class="helper">如文件错误或不能下载，清填写正确邮箱便于售后</p>
                    </el-form-item>
                </el-form>
                <h3 class="card_split"><span class="is_required"></span> 上传凭证 </h3>
                <div class="upload_wrap">
                    <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                        <el-button class="btn_upload_primary" type="primary" icon="el-icon-plus" circle></el-button>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div>
            </el-card>

            <el-card class="card" shadow="never">
                <div slot="header" class="clearfix">
                    <h3 class="card_title">常见问题 <small>有疑问请咨询在线客服QQ</small></h3>
                </div>
                <div class="question_list">
                    <dl class="question_dl">
                        <dt>退款申请由谁处理？</dt>
                        <dd>答：所有的退款由网站工作人员处理，处理时间为3个工作日内。</dd>
                    </dl>
                    <dl class="question_dl">
                        <dt>退款到哪里？</dt>
                        <dd>答：款项会退还到您的网站余额中</dd>
                    </dl>
                    <dl class="question_dl">
                        <dt>什么情况下会申请失效?</dt>
                        <dd>答：所有的退款由网站工作人员处理，处理时间为3个工作日内。</dd>
                    </dl>

                </div>
            </el-card>

            <div class="footer_wrap">
                <el-button plain>返回</el-button>
                <el-button type="primary">提交申请</el-button>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template> 

<script>
    import Tabs from "../../components/public/Tabs";
    import Footer from "../../components/public/Footer";
    import ProductItem from './ProductItem'

    const data = [
       { 
            create_time: '2020年04月20日 23:48', 
            price: '￥18', 
            type: '3D 模型',
            img: require('@/assets/userCenter/myTrade/Bitmap.png'), 
            avatar: require('@/assets/userCenter/myOrganization/user.png'),
            title: '原创观音造像佛像',
            from: '中视典数字科技',
            id: 158789,
            actions: []
        }
    ]

    export default {
        name: 'AfterService',
        data(){
            return {
                list: data,
                options: [{
                    value: '选项1',
                    label: '文件与描述不符'
                    }, {
                    value: '选项2',
                    label: '无法下载'
                    }, {
                    value: '选项3',
                    label: '文件无法打开'
                    }, {
                    value: '选项4',
                    label: '其他情况'
                    }],
                value: '',
                form: {},
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        components:{
            Tabs,
            Footer,
            ProductItem
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style  lang="scss">
    @import "src/static/font/index";
    #after_service {
        background: #F4F4F4;
        font-family:$fontFamily;
        .sub_nav_wrap {
            background-color: #ffffff;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-bottom: 2px solid #DCDCDC;

            .sub_nav_item {
                margin-bottom: -2px;
                a {
                    display: block;
                    line-height: 70px;
                    font-size: 18px;
                    color: #000000;
                }
                &.active {
                    border-bottom: 3px solid #000000
                }
            }
        }
        .container {
            width: 1380px;
            margin: 15px auto;
        }
        .alert {
            width: 480px;
            margin-bottom: 15px;
            background-color: #FFF7E6;
            .el-alert__description {
                color: #F45B51;
                font-size: 14px;
            }
            
        }
        .card {
            border: none;
            margin-bottom: 15px;
            .el-card__header {
                padding: 0 90px;
            }
            .card_title {
                font-size: 18px;
                color: #3B3C3C;
                line-height: 64px;
                small {
                    font-size: 12px;
                    color: #999999;
                    margin-left: 20px;
                }
            }
        }
        .is_required {
           position: relative;
           padding-left: 15px;
           &::before {
               content: '';
               display: block;
               position: absolute;
               width: 6px;
               height: 6px;
               background-color: #FB0107;
               border-radius: 50%;
               top: 50%;
               margin-top: -3px;
               left: 0
           }
       }
        .form {
            width: 770px;
            margin: 15px auto;
            .el-checkbox__label {
                font-size: 15px;
                color: #3B3C3C
            }
            input, textarea {
                background-color: #F4F4F4;
                border-radius:4px;
                border:1px solid rgba(221,221,221,1);
            }
            .helper {
                display: inline-block;
                line-height: 42px;
                margin-left: 20px;
                font-size: 14px;
                color: #BBBBBB
            }
            .el-form-item {
                margin-bottom: 33px;
            }
        }
        .card_split {
            line-height: 66px;
            font-size: 16px;
            color: #000000;
            padding: 0 90px;
            border-bottom: 1px solid #F2F0F1;
            margin: 0 -20px;
        }
        .upload_wrap {
            margin: 30px 90px;
            .btn_upload_primary {
                padding: 5px;
                background-color: #136BFD;
                .el-icon-plus {
                    font-size: 14px;
                    color: #ffffff;
                    font-weight: bold;
                }
            }
        }
        .question_list {
            margin: 15px 80px;
        }
        .question_dl{
            margin-bottom: 20px;
            font-size: 16px;
            dt {
                color: #000000;
                font-weight: bold;
            }
            dd {
                color: #333333
            }
        }
        .footer_wrap {
            text-align: center;
            padding: 20px 0 40px;

            .el-button {
                width: 142px;
                height: 42px;
                font-size: 16px;
                margin: 0 30px
            } 
            .el-button--primary {
                background-color: #136BFD;
            }
        }
    }
</style>