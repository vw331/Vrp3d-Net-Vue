import lazyLoadView from "./lazyLoadView";

export default [
    { /*用户中心 父*/
        path: '/userCenter',
        name: 'userCenter',
        component: () => lazyLoadView(import('@/views/UserCenter/Index')),
        redirect: { name: 'myCreation' },
        children:[
            {   //我的作品
                path: 'creation',
                name: 'myCreation',
                component: () => lazyLoadView(import('@/views/UserCenter/MyCreation/Index')),
                meta:{
                    requireAuth:true
                }
            },
            {   //我的组织
                path: 'organization',
                name: 'myOrganization',
                component: () => lazyLoadView(import('@/views/UserCenter/MyOrganization/Index')),
                meta:{
                    requireAuth:true
                },
                redirect: { name: 'myOrganizations' },
                children:[ //我的组织
                    {
                        path: 'organizations',
                        name: 'myOrganizations',
                        component: () => lazyLoadView(import('@/views/UserCenter/MyOrganization/children/organization')),
                    },
                    {
                        path: 'friend',
                        name: 'myfriend',
                        component: () => lazyLoadView(import('@/views/UserCenter/MyOrganization/children/friend')),
                    },
                ]
            },
            {   //我的交易
                path: 'trade',
                name: 'myTrade',
                component: () => lazyLoadView(import('@/views/UserCenter/MyTrade/Index')),
                redirect: {name: 'mySummary'},
                children: [ 
                    {   //交易汇总
                        path: 'summary',
                        name: 'mySummary',
                        component: () => lazyLoadView(import('@/views/UserCenter/MyTrade/children/Summary')),
                    },
                    {   //已售
                        path: 'sold',
                        name: 'mySold',
                        component: () => lazyLoadView(import('@/views/UserCenter/MyTrade/children/Sold')),
                    },
                    {
                        path: 'purchased',
                        name: 'myPurchased',
                        component: () => lazyLoadView(import('@/views/UserCenter/MyTrade/children/Purchased')) 
                    },
                    {
                        //充值
                        path: 'recharge',
                        name: 'Recharge',
                        component: () => lazyLoadView(import('@/views/UserCenter/MyTrade/children/Recharge'))
                    },
                    {   //收支
                        path: 'payment',
                        name: 'myPayment',
                        component: () => lazyLoadView(import('@/views/UserCenter/MyTrade/children/Payment/Index'))
                    },
                    {
                        //提现
                        path: 'cash',
                        name: 'myCash',
                        component: () => lazyLoadView(import('@/views/UserCenter/MyTrade/children/Cash'))
                    }
                ]
            }
        ]
    },
    {   //售后服务
        path: '/afterService',
        name: 'AfterService',
        component: () => lazyLoadView(import('@/views/UserCenter/AfterService'))
    },
    {   //支付结果
        path: '/pay_result',
        name: 'PaymentResult',
        component: () => lazyLoadView(import('@/views/UserCenter/PaymentResult'))
    }
]
