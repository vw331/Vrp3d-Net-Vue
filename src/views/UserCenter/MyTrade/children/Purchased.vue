<!-- 已购买 -->
<template>
    <div  id="purchased_wrap">
        <list-header-bar></list-header-bar>
        <div v-if="list" class="list_view_warp">
            <list-order-item v-for="(item, index) in list" :data="item" :key="item.index"></list-order-item>  
        </div>
        <div v-else class="list_view_empty">
            <img src="../../../../assets/userCenter/myOrganization/not.png" alt="">
            <p>当前没有订单</p>
        </div>
    </div>
</template>

<script>
import ListHeaderBar from '../ListHeaderBar'
import ListOrderItem from '../ListOrderItem'


const bean = { 
    order_id: '52055487878', 
    pay: '50元', 
    img: require('@/assets/userCenter/myTrade/Bitmap.png'), 
    avatar: require('@/assets/userCenter/myOrganization/user.png'),
    title: '原创观音造像佛像',
    from: '中视典数字科技',
    id: 158789,
    actions: []
}

const data = [{
        create_time: '2020年04月20日 23:48',
        state: 3,
        pay: '50元', 
        state_txt: '已购买',
        describe: ['2020年04月20日 23:48' ,'订单号：5200420578403354', '微信支付（小程序）'],
        products: [
            {
                ...bean,
                actions: ['下载文件', '分享给组织', '申请售后']
            }   
        ],
        footer_visible: false
    },{
        create_time: '2020年04月20日 23:48',
        state: 3,
        pay: '50', 
        state_txt: '已购买',
        describe: ['2020年04月20日 23:48' ,'订单号：5200420578403354', '微信支付（小程序）'],
        products: [
            {
                ...bean,
                actions: ['下载文件', '分享给组织', '申请售后']
            }   
        ],
        footer_visible: false
    },{
        create_time: '2020年04月20日 23:48',
        state: 3,
        pay: '79.2', 
        state_txt: '已出售',
        describe: ['2020年04月20日 23:48', '订单号：5200420578403354', '微信支付（小程序'],
        products: [
            {
                ...bean,
                actions: ['查看详情']
            }   
        ],
        footer_visible: true
    },{
        ...bean,
        state: 3,
        state_txt: '已购买',
        products: [
            {
                ...bean,
                actions: ['下载文件', '分享给组织', '申请售后']
            }   
        ],
        footer: false
    },{
        create_time: '2020年04月20日 23:48',
        state: 3,
        pay: '50', 
        state_txt: '已购买',
        describe: ['2020年04月20日 23:48' ,'订单号：5200420578403354'],
        products: [
            {
                ...bean,
                actions: ['已退款']
            },{
                ...bean,
                actions: ['下载文件', '分享给组织', '申请售后']
            }   
        ],
        footer_visible: false
    }]


export default {
    name: 'purchased',
    components: { ListHeaderBar, ListOrderItem },
    data(){
        return {
            list: data
        }
    }
}
</script>

<style lang="scss" scope>

#purchased_wrap {

    .list_view_warp {
        margin: 20px 0;
        padding: 20px 48px;
        background-color: #ffffff;

    } 
    .list_view_empty {
        height: 600px;
        font-size: 42px;
        line-height: 60px;
        color: #666666;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #ffffff;
    }

}

</style>