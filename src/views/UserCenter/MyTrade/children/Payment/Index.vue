<!-- 收支 -->
<template>
    <div id="payment_wrap">
        <div class="selector_toolbar">
            <el-radio v-model="type" label="RechargeRecord">充值记录</el-radio>
            <el-radio v-model="type" label="CashRecord">提现记录</el-radio>
            <el-radio v-model="type" label="RefundRecord">退款记录</el-radio>
        </div>
        <keep-alive>
            <component v-bind:is="currentTabComponent"></component>
        </keep-alive>
    </div>    
</template>

<script>
import RechargeRecord from './RechargeRecord'
import CashRecord from './CashRecord'
import RefundRecord from './RefundRecord'

export default {
    name: 'Payment',
    components: { RechargeRecord, CashRecord, RefundRecord },
    data(){
        return {
            type: 'RechargeRecord',
            currentTabComponent: RechargeRecord
        }
    },
    methods: {
        
    },
    watch: {
        type(newValue, oldValue){
            this.currentTabComponent = newValue
        }
    }
}
</script>

<style lang="scss">

#payment_wrap {
    .selector_toolbar {
        padding: 22px 38px;
        background: #ffffff;
        .el-radio__input {
            visibility: hidden;
        }
        .el-radio__label {
            padding-left: 0;
            font-size: 14px;
            color: #000000
        }
        .is-checked .el-radio__label {
            color: #136BFD
        }
    }
    .grid {
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
        tbody td {
            font-size: 14px;
            padding: 35px 20px;
            color: #000000
        }
        tbody tr:hover>td {
            color: #136BFD;
            font-weight: bold;
            background-color: #fafafa;
        }
    }
}
</style>