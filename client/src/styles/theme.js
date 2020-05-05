export const colors = {
  primary: '#6d5dfc',
  white: '#fff',
  greyLight1: '#e4ebf5',
  greyLight2: '#c8d0e7',
  greyLight3: '#bec8e4',
  greyDark: '#8b9abf'
}

export default {
  backgroundColor: colors.greyLight1,
  shadow: `.3rem .3rem .6rem ${colors.greyLight2}, 
           -.2rem -.2rem .5rem ${colors.white}`,
  innerShadow: `inset .2rem .2rem .5rem ${colors.greyLight2}, 
                inset -.2rem -.2rem .5rem ${colors.white}`
}