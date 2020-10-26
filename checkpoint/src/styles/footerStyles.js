import { theme } from '.'

const footer = {
    height: theme.spacing.extraLarge,
    backgroundColor: theme.colors.secondary,
    alignContent:""

}

const text = {
    fontFamily: theme.fonts.font,
    fontSize: theme.fonts.fontSizeSub,
    color: theme.colors.darkGray 
}

const link = {
    fontFamily: theme.fonts.font,
    fontSize: theme.fonts.fontSizeSub,
    color: theme.colors.lightGray
}

const row = {
    padding: theme.spacing.small,
    height: theme.spacing.extraLarge,
    justifyContent: "space-between",
    alignItems: "center",
  
}

export { footer, text, link, row }