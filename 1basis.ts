// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = "Hello World11"
console.log(anExampleVariable)

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
  
    // 布尔类型
    let isDone : boolean = false
    console.log(isDone)

    var isDone1 = false
    console.log(isDone1)

    // number 类型
    let count : number = 10
    console.log(count)
    
    //  string 类型
    let nameCh:string = "jingbin"
    console.log(nameCh)

    // 数组 Array
    let list : number[] = [1,2,3]
    let list1 : Array<number> = [1,2,3]
    console.log(list)
    console.log(list1)

    // 数字枚举
    enum Direction {
        NORTH,// 初始值为0。可以设置初始值 = 3
        SOUTH,
        EAST,
        WEST,
    }
    // 反向映射
    let dirName = Direction[0]
    let dirVal = Direction["NORTH"]

    // 字符串枚举
    enum DirectionString {
        NORTH = "NORTH",
        SOUTH = "SOUTH",
        EAST = "EAST",
        WEST = "WEST",
    }
    let dir2:DirectionString = DirectionString.EAST

    // 常量枚举
    const enum Direction2 {
        NORTH,// 初始值为0。可以设置初始值 = 3
        SOUTH,
        EAST,
        WEST,
    }

    // 异构枚举 有不同类型的值
    enum Enum1{
        A,
        B,
        C  = "C",
        D = 8,
        F,
    }

    // Any 类型
    let notSure:any = 666
    notSure = "jingbin"
    notSure = false 

    // 。如果我们使用 any 类型，就无法使用 TypeScript 提供的大量的保护机制。
    // 为了解决 any 带来的问题，TypeScript 3.0 引入了 unknown 类型。

    // unknown 类型
    let value :unknown;
    value = true
    value = 42
    value = "jingbin"
    value = undefined
    value = new TypeError()
    // 不能将unknown的值赋值给boolean,就像多态一样
    
    // let value2 : boolean = value  Error

    // 元祖 Tuple 类型
    let tupleType:[string,boolean]
    tupleType = ["jingbin", true]
    console.log(tupleType)
    // 通过下标访问
    console.log(tupleType[0])
    console.log(tupleType[1])


    // void 类型 没有任何返回值
    function warnUser(): void {
        console.log("This is my warning message")
    }
    function warnUser2() {
        console.log("This is my warning message2")
    }
    warnUser()
    warnUser2()