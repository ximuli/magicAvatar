import Taro from "@tarojs/taro"

// 模板字面量类型（Template Literal Types）
type Id = `#${string}`

export const getCanvasById = (id: Id) => {
  return new Promise((resolve, reject) => {
    Taro.createSelectorQuery()
      .select(id)
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvas = res[0].node
        // Canvas 对象 及 渲染上下文
        // resolve([canvas, canvas.getContext('2d')])
        resolve(canvas)
      })
  })
}
