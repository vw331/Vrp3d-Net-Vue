<!--充值记录-->
<template>
    <div id="recharge_record_wrapper">
        <el-table
            v-if="list.length"
            :data="list"
            class="grid"
            :cell-style="cellStyle"
            style="width: 100%">
            <el-table-column
                prop="create_time"
                label="近三个月记录"
                min-width="220"
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
                </template> 
            </el-table-column>
            <el-table-column
                prop="order_id"
                label="充值订单号"
                align="center"
                width="220">
            </el-table-column>
            <el-table-column
                prop="pay"
                label="充值金额"
                align="center"
                width="180">
            </el-table-column>
            <el-table-column
                prop="status"
                label="充值状态"
                align="center"
                width="180">
            </el-table-column>
            <el-table-column
                prop="remark"
                label="备注"
                align="center"
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


const bean = { 
    create_time: '2020年04月20日 23:48', 
    order_id: '5200420578403354', 
    pay: '100', 
    status: '充值成功',
    remark: '支付宝支付'
}

const data = new Array(10).fill(bean).map((item, index) => {
    if(index == 0){
        return {
            ...item,
            status: '待支付',
            remark: '-'
        }
    }else{
        return item
    }
})

export default {
    name: 'RechargeRecord',
    data(){
        return {
            list: data,
            selected: '近三个月'
        }
    },
    methods: {
        cellStyle({row, column, rowIndex, columnIndex}){
            if( columnIndex == 3 && row.status == '待支付' ){
                return { 'color': '#FB0107'}
            }
        },
        handleCommand(command) {
            this.selected = command
        }
    }
}

</script>

<style lang="scss">
    #recharge_record_wrapper {

    }
</style>