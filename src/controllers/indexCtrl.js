export default async (ctx, next) => {
  const title = 'koa2 title'
  const links = ['tic-tac-toe']
  await ctx.render('index', {
    title,
    links
  })
}
