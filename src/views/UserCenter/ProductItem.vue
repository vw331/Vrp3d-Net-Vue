<!--产品-->
<template>
    <div class="product_record_item" :class="{'order_pending': data.state == 2 }">
        <ul class="product_item_header">
            <li>作品名称</li>
            <li>价格</li>
            <li>类型</li>
            <li>交易号</li>
            <li>交易时间</li>
        </ul>
        <div class="order_item_body">
            <ul class="order_body_list" v-for="(item, index) in data">
                <li>
                    <dl class="order_item_media">
                        <dt><img :src="item.img" alt=""></dt>
                        <dd>
                            <div>
                                <h4>原创观音造像佛像</h4>
                                <p class="order_seller_info"><i class="order_seller_avatar" v-bind:style="{'backgroundImage': `url(${item.avatar})`}"></i>中视典数字科技</p>
                            </div>
                            <p class="order_id_info">ID：1597903</p>
                        </dd>
                    </dl>
                </li>
                <li>￥18 </li>
                <li>3D 模型</li>
                <li>1597903</li>
                <li>2020-04-22 11:26:51</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: {
        data: {
            type: Array
        }
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scope>
    .product_record_item {
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

        .product_item_header {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 52px;
            background: #F2F2F2;
            box-sizing: border-box;
            font-size: 16px;
            color: #3B3C3C;
            &> li {
                padding: 20px;
                box-sizing: border-box;
                &:nth-child(1) {
                    flex: 1;
                    text-align: left;
                }
                &:nth-child(2) {
                    width: 120px
                }
                &:nth-child(3) {
                    width: 120px
                }
                &:nth-child(4) {
                    width: 180px 
                }
                 &:nth-child(5) {
                    width: 180px 
                }
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

        .order_body_list {
            display: flex;
            flex-direction: row;
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

                &:nth-child(1) {
                    flex: 1;
                    text-align: left;
                }
                &:nth-child(2) {
                    width: 120px
                }
                &:nth-child(3) {
                    width: 120px
                }
                &:nth-child(4) {
                    width: 180px 
                }
                &:nth-child(5) {
                    width: 180px 
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