<!--充值-->
<template>
    <div id="recharge_wrap">
        <el-card shadow="never" class="box-card recharge_notice">
            <p>充值的金额不能提现，仅允许在典云及官网进行消费使用。 </p>
            <p>充值到支付宝账号为：4006681235@qq.com，户名 : 深圳市中视典数字科技有限公司</p>
            <p>充值到微信账号为：4006681235@qq.com，户名 : 深圳市中视典数字科技有限公司</p>
        </el-card>
        <el-card shadow="never"  class="box-card">
            <div slot="header" class="clearfix">
               <h3>我的余额：<span class="recharge_balance"> ￥0.00</span></h3>
            </div>
            <div>
                <h3 class="recharge_label is_required">充值金额 <small>请输入10的倍数</small></h3>
                <div  class="recharge_input">
                     <el-input v-model="money" placeholder="请输入内容"></el-input>
                     <p>单次交易限额20000.00元</p>
                </div>
               
            </div>
        </el-card>
        <el-card shadow="never"  class="box-card">
            <div slot="header" class="clearfix">
               <h3 class="is_required">支付方式 <small class="recharge_muted_text">该订单24小时内未支付将自动取消</small></h3>
            </div>
            <div style="display: flex">
                <el-radio class="recharge_radio" v-model="type" label="1" border><span class="ali_pay"></span></el-radio>
                <el-radio class="recharge_radio" v-model="type" label="2" border><span class="wechat_pay"></span></el-radio>
            </div>
            <div class="card_footer">
                <p class="recharge_total">需付金额: <strong>{{ money }}</strong></p>
                <el-button type="danger" class="recharge_btn_entry" :disabled="!Number(money)" @click="showWechatPay"><i class="tool_tip">请输入充值金额</i>确认充值</el-button>
            </div>
        </el-card>

        <el-dialog
            title="微信支付"
            class="recharge_pay_dialog"
            :visible.sync="wxDialogVisible"
            width="370px">
            <div>
				<span class="recharge_phone"><img src="../../../../assets/userCenter/myTrade/phone.png" alt=""></span>
                <div class="qr_code">
					<img src="../../../../assets/userCenter/myTrade/qrcode.png" alt="">
                </div>
                <p class="qr_code_text">请使用微信扫描二维码以完成支付</p>
				<p class="qr_code_notice">手机端完成支付后，请等待系统处理 在此之前勿关闭窗口</p>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'Recharge',
    components: {  },
    data(){
        return {
            money: 0,
            type: '1',
            wxDialogVisible: false
        }
    },
    methods: {
        showWechatPay(){
            this.wxDialogVisible = true
        }
    }
}
</script>

<style lang="scss">
   #recharge_wrap {
        $red : #FB0107;
       .box-card {
           margin-bottom: 20px;
           border: none
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
               background-color: $red;
               border-radius: 50%;
               top: 50%;
               margin-top: -3px;
               left: 0
           }
       }
       .recharge_notice {
           padding: 20px 50px;
           color: #666666;
           font-size: 14px;
           line-height: 1.6;
           border: none
       }
       .recharge_label {
           font-size: 18px;
           font-weight: normal;
           margin-bottom: 20px;
           color: #000000;

           small {
               font-size: 16px;
               color: #666666
           }
       }
       .recharge_balance {
           font-weight: normal;
           color: $red
       }
       .recharge_input {
            display: flex;
            flex-direction: row;
            align-items: center;
           
            .el-input {
                width: 310px;
                margin-right: 23px;
            }

            input {
               height: 42px;
               font-size: 16px;
               background-color: #F4F4F4;
               color: #999999;
            }

            p  {
                font-size: 16px;
                color: $red
            }
       }
       .recharge_muted_text {
            font-size: 14px;
            font-weight: normal;
            color: #BBBBBB;
            margin-left: 26px;
       }
       .recharge_radio {
            width: 410px;
            height: 120px;
            border: 2px solid #EAF0EE;
            border-radius: 0;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .el-radio__inner {
                width: 24px;
                height: 24px;
                &::after {
                    width: 12px;
                    height: 12px;
                }
            }
            &.is-checked {
                border-color: #136BFD
            }
            &.is-checked .el-radio__inner {
                background-color: #136BFD;
                border-color: #136BFD
            }
       }
       .wechat_pay {
           display: inline-block;
           width: 120px;
           height: 50px;
           background: url('../../../../assets/userCenter/myTrade/wechat_pay.png') center center no-repeat;
           background-size: cover;
       }
       .ali_pay {
           display: inline-block;
           width: 120px;
           height: 50px;
           background: url('../../../../assets/userCenter/myTrade/alipay.png') center center no-repeat;
           background-size: cover;
       }
       .card_footer {
            margin: -20px;
            margin-top: 40px;
            height: 195px;
            padding: 0 65px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            border-top: 1px solid #EBEEF5
       }
       .recharge_total {
           font-size: 16px;
           color: #3B3C3C;
           margin-right: 120px;

           > strong {
               color: $red;
               font-size: 32px;
               font-weight: normal;
               &::before {
                   content: '￥';
                   font-size: 22px;

               }
           }
       }
       .recharge_tooltip {
           font-size: 16px;
           color: #FB0107;
           border: 1px solid #FB0107;
       }
       .recharge_btn_entry {
            width: 200px;
            height: 50px;
            font-size: 18px;
            border-radius: 0;
            font-weight: bold;
            color: #ffffff;
            border-color: darken($color: $red, $amount: 0.8);
            background-color: $red;
            position: relative;
            .tool_tip {
                display: none;
            }
            &:disabled {
                color: #BFBFBF;
                background-color: #D6D6D6;
                border-color: transparent;

                .tool_tip {
                    display: block;
                    position: absolute;
                    width: 200px;
                    height: 56px;
                    line-height: 56px;
                    border: 1px solid #FB0107;
                    top: -70px;
                    left: 0px;
                    font-size: 16px;
                    color: #FB0107;
                    font-weight: normal;
                    font-style: normal;
                    text-align: center;
                    &:after {
                        content: '';
                        width: 10px;
                        height: 10px;
                        border: 1px solid #FB0107;
                        position: absolute;
                        bottom: -6px;
                        left: 50%;
                        border-width: 0 1px 1px 0;
                        transform: rotate(45deg);
                        background-color: #ffffff
                    }
                }
            }
            
       }
       .recharge_pay_dialog {
           .recharge_phone {
               display: block;
               position: absolute;
               top: -15px;
               left: -300px; 
               width: 308px;
               height: 498px;
           }
           .el-dialog {
                transform: translateX(120px);
           }
           .el-dialog__header {
               height: 60px;
               box-sizing: border-box;
               font-size: 18px;
               background-color: #F2F0F1
           }
           .el-dialog__title {
               color: #000000
           }
           .qr_code {
                width: 255px;
                height: 255px;
                margin: 0 auto 20px;
           }
           .qr_code_text {
			   text-align: center;
               font-size: 12px;
               color: #878787
           }
		   .qr_code_notice {
			   margin: 10px 36px 10px;
			   font-size: 14px;
			   font-weight: bold;
               text-align: center;
			   color: $red;
		   }
       }
   }
</style>