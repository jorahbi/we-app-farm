import {
    $wuxSelect
} from '../../component/index'
Page({
    data: {
        value1: '',
        title1: '',
        value2: '',
        title2: '扫描餐桌二维码',
        value3: '',
        title3: '',
    },
    onClick2() {
        $wuxSelect('#wux-select1').open({
            value: this.data.value2,
            options: [{
                    title: '1',
                    value: '001',
                },
                {
                    title: '2',
                    value: '002',
                },
                {
                    title: '3',
                    value: '003',
                },
                {
                    title: '4',
                    value: '004',
                },
                {
                    title: '5',
                    value: '005',
                }
            ],
            onConfirm: (value, index, options) => {
                console.log('onConfirm', value, index, options)
                if (index !== -1) {
                    this.setData({
                        value2: value,
                        title2: options[index].title,
                    })
                }
            },
        })
    },
    bindViewTap (){
        wx.scanCode({
          onlyFromCamera: true,
          success: (resp) => {
            console.log(resp)
          },
          complete: function () {
            console.log('complete', arguments)
          }
        })
    }
})