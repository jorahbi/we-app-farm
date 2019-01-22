
Page({
    data: {
        toView: 'green',
        scrollTop: 0,
        bannerHeight: '24vh',
        animationMiddleHeaderItem: {}
    },
    upper(e) {
        console.log(e)
    },
    lower(e) {
        console.log(e)
    },
    scroll(e) {
        let that = this;
        // setTimeout(() => {
        //     //wx.createSelectorQuery().select('#section-banner')
        //     that.setData({
        //         bannerHeight: '0vh'
        //     });
        // }, 2000);
        console.log('scroll', e.detail.scrollTop, e.currentTarget.offsetTop)
    },
    tap(e) {
        let dataset = e.currentTarget.dataset;
        console.log(this.data.toView, dataset.tag);
        if (this.data.toView !== dataset.tag) {
            this.setData({
                toView: dataset.tag
            })
        }
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