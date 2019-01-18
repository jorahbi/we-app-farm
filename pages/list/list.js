Page({
    data: {
        items: [{
                title: new Date,
                content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            },
            {
                title: new Date,
                content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            },
            {
                title: new Date,
                content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            },
            {
                title: new Date,
                content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            },
            {
                title: new Date,
                content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            },
            {
                title: new Date,
                content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            },
            {
                title: new Date,
                content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            }
        ]
    },
    onLoad() {},
    onReady: function() {
        this.wuxRefresher = this.selectComponent("#wux-refresher");
    },
    onPulling() {
        console.log('onPulling')
    },
    onRefresh() {
        console.log('onRefresh')
        wx.showLoading({
            title: '加载中',
            mask: true
        })
        setTimeout(() => {
            this.setData({
                items: [{
                    title: new Date,
                    content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                }, ...this.data.items],
            })
            this.wuxRefresher.finishPullToRefresh();
            wx.hideLoading();
        }, 500)
    },
    onReachBottom(e) {
        wx.showLoading({
            title: '加载中',
            mask: true
        })

        console.log('页面上拉触底事件的处理函数')
        setTimeout(() => {
            wx.hideLoading();
        }, 500)
    },
    addCat(e) {
        console.log('add')
    }
})