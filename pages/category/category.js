const app = getApp()

Page({
  onLoad: options => {
    console.log(options)
  },
  onReady: function () {
    this.dialog = this.selectComponent("#dialog");
    this.showDialog()
  },
  showDialog() {
    this.dialog.showDialog();
  },
  //取消事件 
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件 
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  },
})