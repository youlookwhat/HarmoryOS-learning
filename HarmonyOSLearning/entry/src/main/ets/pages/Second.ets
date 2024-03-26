import router from '@ohos.router'
@Entry
@Component
struct Second {
  @State message: string = 'Hello there'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)

        // 添加按钮
        Button() {
          Text("上一步")
            .fontSize(25)
            .fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule)
        .margin({
          top: 20
        })
        .backgroundColor('#00ffff')
        .width("40%")
        .height("5%")
        .onClick(() => {
          try {
            router.back()
          }catch (err){

          }
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}