export default async (ctx, next) => {
  const title = 'Tic Tac Toe'
  await ctx.render('ticTacToe', {
    title
  })
}
