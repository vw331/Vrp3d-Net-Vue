<!--退款记录-->
<template>
    <div id="refund_record_wrap">
        <el-table
            v-if="list.length"
            :data="list"
            class="redound_table"
            :span-method="arraySpanMethod"
            style="width: 100%">
            <el-table-column
                prop="create_time"
                label="近三个月记录"
                >
                <template slot="header" slot-scope="scope">
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{selected}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="全部">全部</el-dropdown-item>
                            <el-dropdown-item command="近一周">近一周</el-dropdown-item>
                            <el-dropdown-item command="近一个月">近一个月</el-dropdown-item>
                            <el-dropdown-item command="近三个月">近三个月</el-dropdown-item>
                            <el-dropdown-item command="近半年">近半年</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span style="margin-left: 100px">订单详情</span>
                </template> 
                <template slot-scope="scope">
                    <refund-record-item :data=scope.row></refund-record-item>
                </template>
            </el-table-column>
            <el-table-column
                prop="status"
                label="详情"
                width="380"
                align="center"
                >
            </el-table-column>
            <el-table-column
                prop="remark"
                label="截图"
                width="220">
            </el-table-column>
        </el-table>
        <div v-else class="list_view_empty">
            <img src="../../../../../assets/userCenter/myOrganization/not.png" alt="">
            <p>当前没有订单</p>
        </div>
    </div>
</template>

<script>

import RefundRecordItem from './RefundRecordItem'

const bean = { 
    create_time: '2020年04月20日 23:48', 
    order_id: '52055487878', 
    pay: '50元', 
    img: require('@/assets/userCenter/myTrade/Bitmap.png'), 
    avatar: require('@/assets/userCenter/myOrganization/user.png'),
    detail: require('@/assets/userCenter/myTrade/002.png'),
    title: '原创观音造像佛像',
    from: '中视典数字科技',
    id: 158789,
    actions: []
}

const data = [{
        ...bean,
        state: 2,
        state_txt: '审核中',
        result: '',
        footer: false
    },{
        ...bean,
        state: 3,
        state_txt: '已退款',
        result: '退款金额：￥99.00',
        footer: false
    },{
        ...bean,
        state: 3,
        state_txt: '已购买',
        result: '拒绝原因：已联系客户处理',
        footer: false
    }]

export default  {
    name: 'RefundRecord',
    components: { RefundRecordItem },
    data(){
        return {
            list: data,
            selected: '近三个月'
        }
    },
    methods: {
        arraySpanMethod({ row, column, rowIndex, columnIndex }){
            return [1, 3];
        },
        handleCommand(command) {
            this.selected = command
        }
    }
}
</script>

<style lang="scss">
    #refund_record_wrap {
        .redound_table {
            background-color: transparent;
            .el-table__header-wrapper {
                margin-bottom: 20px;
                overflow: inherit;
                th {
                    padding: 20px 20px;
                    background: #fafafa;
                    font-weight: normal;
                }
            }
            td {
                padding: 0 !important;
                border-color: transparent;
                &:hover {
                    background: inherit;
                }
            }
        }
    }
</style>