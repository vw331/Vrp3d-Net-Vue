<!--提现记录-->
<template>
    <div id="case_record_wrapper">
        <el-table
            v-if="list.length"
            :data="list"
            class="grid"
            :cell-style="cellStyle"
            style="width: 100%">
            <el-table-column
                prop="create_time"
                label="近三个月记录"
                >
                <template slot="header" slot-scope="scope">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            近三个月订单<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>全部</el-dropdown-item>
                            <el-dropdown-item>近一周</el-dropdown-item>
                            <el-dropdown-item>近一个月</el-dropdown-item>
                            <el-dropdown-item>近三个月</el-dropdown-item>
                            <el-dropdown-item>近半年</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </template> 
            </el-table-column>
            <el-table-column
                prop="order_id"
                label="提现订单号"
                align="center"
                width="220">
            </el-table-column>
            <el-table-column
                prop="pay"
                label="提现金额"
                align="center"
                width="160">
            </el-table-column>
            <el-table-column
                prop="status"
                label="提现状态"
                align="center"
                width="160">
            </el-table-column>
            <el-table-column
                prop="remark"
                label="备注"
                align="center"
                width="280">
            </el-table-column>
        </el-table>
        <div v-else class="list_view_empty">
            <img src="../../../../../assets/userCenter/myOrganization/not.png" alt="">
            <p>当前没有订单</p>
        </div>
        <el-pagination
            class="pagination"
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
</template>

<script>


const bean = { 
    create_time: '2020年04月20日 23:48', 
    order_id: '52055487878', 
    pay: '￥100', 
    status: '提现成功',
    remark: '支付宝:abc@163.com 张三'
}

const data = new Array(10).fill(bean).map((item, index) => {
    if(index == 0){
        return {
            ...item,
            status: '审核中',
            remark: '-'
        }
    }else{
        return item
    }
})

export default {
    name: 'CaseRecord',
    data(){
        return {
            list: data
        }
    },
    methods: {
        cellStyle({row, column, rowIndex, columnIndex}){
            if( columnIndex == 3 && row.status == '审核中' ){
                return { 'color': '#FB0107'}
            }
        }
    }
}

</script>

<style lang="scss">
    #case_record_wrapper {
        .pagination {
            margin: 45px 0 0 0;
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