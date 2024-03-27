import router from '@ohos.router'

@Entry
@Component
  // 声明式UI描述
struct Basis {
  @State message: string = 'Hello there'

  build() {
    Row() {
      Column() {

        /*-------------------声明式UI描述---------------*/
        // 无参数
        Text(this.message)
        Divider()
        Text("item 2")

        // 有参数
        // 必选参数，加载图片需要有联网权限
        Image("https://img-blog.csdnimg.cn/a3ed854d1d1746c489dd9849d79494ae.gif")
          .width(100)
          .height(100)
          .backgroundColor("#00ff00")
          .onClick(() => {
            this.message = "点击了图片"
          })
        // 非必选
        Text("测试")
        Button("按钮")
          .onClick(function(){
            this.message = "点击了Button"
          }.bind(this))
        Button("按钮2")
          .onClick(this.myClickHandler.bind(this))
        Button("按钮3")
          .onClick(this.fn)

      }
      .width('100%')
    }
    .height('100%')
  }

  //使用组件的成员函数
  myClickHandler(): void {
    this.message = "点击了Button2"
  }
  //箭头函数可以直接调用
  fn = () => {
    this.message = "点击了Button3"
  }
}