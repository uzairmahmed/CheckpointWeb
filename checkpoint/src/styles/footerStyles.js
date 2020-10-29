import { theme } from '.'

const footer = {
    height: theme.spacing.giant,
    backgroundColor: theme.colors.accent,
    alignContent:""
}

const text = {
    fontFamily: theme.fonts.font,
    fontSize: theme.fonts.fontSizeSub,
    color: theme.colors.primary 
}

const link = {
    fontFamily: theme.fonts.font,
    fontSize: theme.fonts.fontSizeSub,
    color: theme.colors.darkGray
}

const row = {
    // minHeight: "100vh",
    backgroundColor: theme.colors.lightAccent,
    padding: theme.spacing.small,
    paddingLeft: theme.spacing.regular,
    paddingRight: theme.spacing.regular,
    height: theme.spacing.giant,
    justifyContent: "space-between",
    alignItems: "center",
  
}

export { footer, text, link, row }