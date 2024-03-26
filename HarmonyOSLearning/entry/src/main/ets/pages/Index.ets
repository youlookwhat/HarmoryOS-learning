import router from '@ohos.router'
@Entry
@Component
struct Index {
  @State message: string = 'Hello World'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)

        // 添加按钮
        Button() {
          Text("下一步")
            .fontSize(30)
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
          console.log("000")
          router.pushUrl({url:'pages/Second'}).then(()=>{
            console.log("111")
          }).catch((err) => {
            console.error('second page.Code is ${err.code}')
          })
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}