import { theme } from '.'

const footer = {
    display:"flex",
    backgroundColor: theme.colors.lightAccent,
    justifyContent: "center",
}

const text = {
    fontFamily: theme.fonts.fontQuiet,
    fontSize: theme.fonts.fontSizePara,
    color: theme.colors.primary 
}

const link = {
    fontFamily: theme.fonts.fontQuiet,
    fontSize: theme.fonts.fontSizePara,
    color: theme.colors.darkGray
}

const row = {
    padding: theme.spacing.small,
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
}

export { footer, text, link, row }