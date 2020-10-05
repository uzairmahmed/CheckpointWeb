import { theme } from '.'

const hero = {
    marginTop: theme.spacing.regular,
    backgroundColor: "green",
    height:'60vh',
    padding: theme.spacing.small + " " + theme.spacing.regular,
    justifySelf: "center",
    textAlign:"center",
    // verticalAlign: "center",
}

const title = {
    fontFamily: theme.fonts.fontHeader,
    fontWeight: theme.fonts.fontWeight,
    fontSize: theme.fonts.fontSizeTitle,
    color: theme.fonts.fontColor,
}

const subtitle = {
    fontFamily: theme.fonts.font,
    fontWeight: theme.fonts.fontWeight,
    fontSize: theme.fonts.fontSize,
    color: theme.fonts.fontColor,
}

export { hero, title, subtitle }