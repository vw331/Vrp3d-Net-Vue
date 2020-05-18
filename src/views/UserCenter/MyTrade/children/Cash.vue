<!--提现-->
<template>
    <div id="case_wrap">
        <el-card shadow="never" class="box-card case_notice">
            <p>充值金额不能提现，可提现金额来自您的收入。</p>
            <p>必须满100元方可提现，每次提现至少100元。一个月限提现一次，以人民币结算。</p>
            <p>提现只能在当月1号到5号，审核通过后会在当月25号打款（遇到节假日顺延）。</p>
            <p>支付宝不收取任何手续费，提现申请在管理员处理完毕后即时到账。 </p>
            <p> 提现支付宝账号和支付宝真实姓名完全一致，才能收到提现款。</p>
            <p>为保证提现资金正常到账，请在支付宝隐私设置中打开“通过邮箱找到我”、“通过手机号找到我”按钮。</p>
        </el-card>
        <el-card shadow="never"  class="box-card">
            <div slot="header" class="clearfix">
               <h3>可提现金额：<span class="case_balance"> ￥564.00</span></h3>
            </div>
            <div>
                <h3 class="case_label is_required">提现金额 <small>提现至少100元</small></h3>
                <div  class="case_input">
                     <el-input v-model="money" placeholder="请输入金额"></el-input>
                     <p>单次交易限额20000.00元</p>
                </div>
               
            </div>
        </el-card>
        <el-card shadow="never"  class="box-card">
            <div slot="header" class="clearfix">
               <h3 class="is_required">账号信息 <small class="case_muted_text">提现支付宝账号和支付宝真实姓名须完全一致</small></h3>
            </div>
            <div>
                <el-form class="cash_form" ref="form" :model="form" label-position="left" label-width="130px">
                    <el-form-item label="支付宝账号：">
                        <el-input v-model="form.user"></el-input>
                    </el-form-item>
                    <el-form-item label="支付宝姓名：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="绑定的手机：">
                        <el-row type="flex" :gutter="15">
                            <el-col :span="16">
                                <el-input class="" v-model="form.phone"></el-input>
                            </el-col>
                            <el-col :span="8">
                                 <el-button style="width: 100%">发送验证码</el-button>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="验证码：">
                        <el-input v-model="form.code"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="card_footer">
                <p class="case_total">需付金额: <strong>{{ money }}</strong></p>
                <el-button type="danger" class="case_btn_entry" :disabled="!Number(money)" @click="submit">提交申请</el-button>
            </div>
        </el-card>

        <el-dialog
            :visible.sync="dialogVisible"
            width="450px"
            class="cash_dialog"
            >
            <div>
                <img v-if="result.type == 'success'" src="../../../../assets/userCenter/myTrade/success.png" alt="">
                <img v-if="result.type == 'error'" src="../../../../assets/userCenter/myTrade/error.png" alt="">
                <h3 :class="{'text-red': result.type == 'error'}">{{result.text}}</h3>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>

export default {
    name: "Cash",
    data(){
        return {
            money: 0,
            type: '1',
            dialogVisible: false,
            form: {},
            result: {}
        }
    },
    methods: {
        submit(){
            this.result = {
                type: 'success',
                //type: 'error',
                text: '提交成功，请等待审核'
            }
            this.dialogVisible = true
        }
    }
}
</script>

<style lang="scss">
    #case_wrap {
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
       .case_notice {
           padding: 20px 50px;
           color: #666666;
           font-size: 14px;
           line-height: 1.6;
           border: none
       }
       .case_label {
           font-size: 18px;
           font-weight: normal;
           margin-bottom: 20px;
           color: #000000;

           small {
               font-size: 16px;
               color: #666666
           }
       }
       .case_balance {
           font-weight: normal;
           color: $red
       }
       .case_input {
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
       .case_muted_text {
            font-size: 14px;
            font-weight: normal;
            color: #BBBBBB;
            margin-left: 26px;
       }
       .case_radio {
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
       .cash_form {
           width: 530px;
           margin-left: 110px;
           .el-form-item__label {
                font-size: 14px;
                color: #3B3C3C;
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
           input {
                background-color: #F4F4F4;
                border-color: #DDDDDD;
                border-radius: 4px;
           }
       }
       .card_footer {
            margin: -20px;
            margin-top: 40px;
            height: 155px;
            padding: 0 65px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            border-top: 1px solid #EBEEF5
       }
       .case_total {
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
       .case_btn_entry {
            height: 50px;
            font-size: 18px;
            border-radius: 0;
            font-weight: bold;
            color: #ffffff;
            border-color: darken($color: $red, $amount: 0.8);
            background-color: $red;

            &:disabled {
                color: #BFBFBF;
                background-color: #D6D6D6;
                border-color: transparent
            }
       }
       .cash_dialog {
           text-align: center;
           img {
               margin-bottom: 42px;
           }
           h3 {
               font-size: 21px;
               margin-bottom: 12px;
               color: #3B3C3C;
           }
           .el-dialog__footer {
               text-align: center;
               padding-bottom: 60px;
           }
           .el-button--primary {
               background-color: #136BFD;
               border-color: #136BFD;
           }
       }
        .text-red {
            color: $red !important
        }
   }
</style>