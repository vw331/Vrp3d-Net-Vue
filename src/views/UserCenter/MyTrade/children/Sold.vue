<!-- 已售 -->
<template>    
    <div id="sold_wrap">
        <div>
            <list-header-bar></list-header-bar>
            <div v-if="list" class="list_view_warp">
                <list-order-item v-for="(item, index) in list" :data="item" :key="item.index"></list-order-item>  
            </div>
            <div v-else class="list_view_empty">
                <img src="../../../../assets/userCenter/myOrganization/not.png" alt="">
                <p>当前没有订单</p>
            </div>
            <el-pagination
                class="pagination"
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import ListHeaderBar from '../ListHeaderBar'
import ListOrderItem from '../ListOrderItem'

const bean = { 
    create_time: '2020年04月20日 23:48', 
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
        ...bean,
        state: 3,
        state_txt: '已出售',
        actions: ['立即付款', '取消订单'],
        footer: false
    },{
        ...bean,
        state: 3,
        state_txt: '已出售',
        actions: ['下载文件', '分享给组织', '申请售后'],
        footer: false
    },{
        ...bean,
        state: 3,
        state_txt: '已出售',
        actions: ['查看详情'],
        footer: true
    },{
        ...bean,
        state: 3,
        state_txt: '已购买',
        actions: ['下载文件', '分享给组织', '申请售后'],
        footer: false
    }]

export default {
    name: 'Sold',
    components: { ListHeaderBar, ListOrderItem },
    data(){
        return {
            list: data
        }
    }
}
</script>

<style lang="scss" scope>

#sold_wrap {

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
    .pagination {
        text-align: center;
        .el-pager li, button {
            width: 52px;
            height: 52px;
            line-height: 52px;
            background-color: #ffffff;
            font-size: 18px;
            font-weight: normal;
            margin: 0 10px;
            &.active {
                background-color: #136BFD;
            }
        }
    }

}

</style>