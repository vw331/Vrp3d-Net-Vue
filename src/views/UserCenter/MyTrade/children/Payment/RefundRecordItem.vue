<template>
    <div class="cash_record_item" :class="{'order_pending': data.state == 2 }">
        <div class="order_item_header">
            <div class="order_status_text" :class="{'order_pending_text': data.state == 2 }">{{ data.state_txt }}</div>
            <div class="order_result">{{data.result}}</div>
            <div class="order_top_info">
                <span>{{ data.create_time }}</span>
                <span>订单号：{{ data.order_id }}</span>
                <span>微信支付</span>
            </div>
        </div>
        <div class="order_item_body">
            <ul class="order_body_list">
                <li>
                    <dl class="order_item_media">
                        <dt><img :src="data.img" alt=""></dt>
                        <dd>
                            <div>
                                <h4>原创观音造像佛像</h4>
                                <p class="order_seller_info"><i class="order_seller_avatar" v-bind:style="{'backgroundImage': `url(${data.avatar})`}"></i>中视典数字科技</p>
                            </div>
                            <p class="order_id_info">ID：1597903</p>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl class="describe_item">
                        <dt>售后原因：</dt>
                        <dd>文件与描述不符</dd>
                    </dl>
                    <dl class="describe_item">
                        <dt>是否退款：</dt>
                        <dd>是</dd>
                    </dl>
                    <dl class="describe_item">
                        <dt>售后说明：</dt>
                        <dd>基于OpenGL ES图形接口的App IDE开发环境， 拥有清晰的代码结构和完善的…</dd>
                    </dl>
                    <dl class="describe_item">
                        <dt>常用邮箱：</dt>
                        <dd>abc@qq.com</dd>
                    </dl>
                </li>
                <li>
                    <img :src="data.detail" alt="">
                </li>
            </ul>
        </div>
        <div class="order_item_footer" v-if="data.footer">本资源累计出售 12 次  累计收益 792元</div>
    </div>
</template>

<script>
export default {
    name: 'RefundRecordItem',
    props: {
        data: {
            type: Object
        }
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scope>
    .cash_record_item {
        margin: 29px 48px 0 ;
        .describe_item {
            display: flex;
            flex-direction: row; 
            font-size: 14px;
            &> dt {
                width: 75px;
                color: #999999
            }
            &> dd {
                flex: 1;
                color: #3B3C3C;
            }
        }
        &.order_pending {
            border: 2px solid #FB0107;
        }

        .order_pending_text {
            font-weight: 600;
            color: #FB0107 !important
        }

        .order_item_header {
            display: flex;
            flex-direction: columns;
            align-items: center;
            height: 70px;
            background: #F2F2F2;
            padding: 20px;
            box-sizing: border-box;
        }

        .order_status_text {
            width: 100px;
            font-size: 18px;
            color: #B0B0B0;
        }

        .order_result {
            width: 200px;
            color: #FB0107 !important
        }
        .order_top_info {
            flex: 1;
            font-size: 12px;
            text-align: right;

            > span {
                padding: 0 10px;
                position: relative;
                
                &:after {
                    position: absolute;
                    right: 0;
                    content: '|';
                }
                &:last-child::after {
                    content: ''
                }
            }
        }

        .order_total_money {
            width: 120px;
            font-size: 14px;
            color: #999999;

            strong {
                font-size: 28px;
                font-weight: 600;
                color: #FB0107;
            }
        }

        .order_item_media {
            display: flex;
            flex-direction: columns;

            dt {
                width: 127px;
                height: 100px;
                background-color: #f2f2f2;
                margin-right: 15px;
            }

            dd {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                color: #999999;

                h4 {
                    font-size: 18px;
                    margin-bottom: 5px;
                    font-weight: normal;
                    color: #3B3C3C
                }
            }
            .order_id_info {
                font-size: 14px
            }
            .order_seller_info {
                vertical-align: middle;
            }
            .order_seller_avatar {
                background-size: contain;
                vertical-align: middle;
                display: inline-block;
                width: 24px;
                height: 24px;
                margin-right: 5px;
                border-radius: 50%;
                background-color: #eeeeee;
            }
        }

        .order_item_body {
            color: #999999;
            &:hover {
                background-color: #FAFAFA;
            }
        }

        .order_pay_money {
            font-size: 16px;
            font-weight: bold;
            color: #FB0107;
        }

        .order_actions {
            a {
                display: block;
                text-align: center;
                color: #3B3C3C;
                line-height: 2.0;

                &:hover {
                    color: #136BFD
                }

                &.order_btn_pay {
                    padding: 3px 15px;
                    margin-bottom: 5px;
                    color: #ffffff;
                    background-color: #FB0107;
                }
            }
        }

        .order_body_list {
            display: flex;
            flex-direction: columns;
            align-items: center;
            cursor: pointer;

            & > li {
                display: flex;
                justify-content: left; 
                align-items: center;
                min-height: 160px;
                width: 180px;
                padding: 20px;
                border: 1px solid #F2F2F2;
                border-right-width: 0;
                box-sizing: border-box;

                &:first-child {
                    flex: 1;
                    justify-content: left !important;
                }
                &:nth-child(2) {
                    width: 380px;
                    align-items: flex-start;
                    flex-direction: column;
                }
                &:nth-child(3) {
                    img {
                        width: 126px;
                        height: 100px
                    }
                }
                &:last-child {
                    border-right-width: 1px;
                }
            }
        }

        .order_item_footer {
            height: 70px;
            box-sizing: border-box;
            text-align: right;
            padding: 20px;
            font-size: 14px;
            line-height: 30px;
            color: #999999;
            border:1px solid #F2F2F2;
            border-top-width: 0;
        }
    }
</style>