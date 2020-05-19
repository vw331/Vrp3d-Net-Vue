<template>
    <div class="list_header_bar">
        <div class="dropdown_wrapper">
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
        </div>
        <ul>
            <li> 订单详情 </li>
            <li>交易号</li>
            <li>单价</li>
            <li>交易操作</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'ListHeaderBar',
        data(){
            return {
                selected: '近三个月'
            }
        },
        methods: {
            handleCommand(command) {
                this.selected = command
            }
        }
    }
</script>
<style lang="scss" scoped>
    .list_header_bar {
        padding: 0 48px;
        background:rgba(250,250,250,1);
        box-shadow:0px 1px 2px 0px rgba(0,0,0,0.1);
        position: relative;

        .dropdown_wrapper {
            position: absolute;
            top: 22px;
            width: 180px;
            color: #999999;
            font-size:14px;
            cursor: pointer;
        }

        & > ul {
            height:65px;
            flex: 1;
            display: flex;
            align-items: center;
        
            &>li {
                width: 180px;
                text-align: center;
                color: #999999;
                font-size:14px;

                &:first-child {
                    flex: 1;
                    justify-content: left !important;
                }
            }
            
        }
    }
</style>