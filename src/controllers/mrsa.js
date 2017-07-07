const data = []
const count = 10
for (let i = 0; i < count; i++) data.push(`Item ${i}`)
export default ctx => {
  const id = ctx.params.id
  console.log(id)
  if (id && !isNaN(id) && data[parseInt(id)]) {
    ctx.body = {
      success: true,
      data: data[id]
    }
  } else {
    ctx.body = {
      success: true,
      data
    }
  }
}
