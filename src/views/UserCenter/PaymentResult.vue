<!--支付结果-->
<template>
    <div id="payment_result">
        <Tabs></Tabs>
        <div class="container">
            <el-card class="card" shadow="never">
                <dl class="result_wrap">
                    <dt>
                        <img v-if="result.type == 'success'" src="../../assets/userCenter/myTrade/success.png" alt="">
                        <img v-if="result.type == 'error'" src="../../assets/userCenter/myTrade/error.png" alt="">
                    </dt>
                    <dd>
                        <h3>充值成功!</h3>
                        <p class="result_descrbe">2020年04月20日 23:48   |   订单号：5200420578403354   |   微信支付（小程序）</p>
                        <p>充值金额：<span class="text_red"><strong> 100</strong> 元</span> </p>
                        <div class="btn_group">
                            <el-button type="primary">返回个人中心</el-button>
                            <el-button plain>继续逛逛</el-button>
                        </div>
                    </dd>
                </dl>
            </el-card>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Tabs from "../../components/public/Tabs";
    import Footer from "../../components/public/Footer";

    export default {
        name: 'PaymentResult',
        data(){
            return {
                result: {
                    type: 'success'
                }
            }
        },
        components:{
            Tabs,
            Footer,
        },
    }

</script>

<style lang="scss">
    @import "src/static/font/index";
    #payment_result {
        background: #F4F4F4;
        font-family:$fontFamily;

        .container {
            width: 1380px;
            margin: 15px auto;
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
        .result_wrap {
            margin: 148px 170px;
            display: flex;
            flex-direction: row;
            dt {
                width: 90px;
                height: 90px;
                margin-right: 30px;
            }
            dd {
                font-size: 14px;
                color: #3B3C3C
            }
            h3 {
                font-size: 24px;
                font-weight: normal;
                color: #3B3C3C;
                margin-bottom: 15px
            }
            .result_descrbe {
                font-size: 16px;
                color: #999999;
                margin-bottom: 15px
            }
            .text_red {
                color: #FB0107;
                strong {
                    font-size: 24px;
                }
            }
            .btn_group {
                margin-top: 50px;
                button {
                    font-size: 16px;
                    margin-right: 25px;
                }
                .el-button--primary {
                    background-color: #136BFD
                }
            }
        }
    }
</style>
