import { theme } from '.'

const bar = {
    width: "100vw",
    padding: theme.spacing.small + " " + theme.spacing.regular,
    justifyContent: "space-between",
    verticalAlign: "center",
}

const brand = {
    fontFamily: theme.fonts.fontHero,
    fontSize: theme.fonts.fontSizeNav,
}

const link = {
    padding: "0px",
    color: theme.colors.primary
}

const item = {
    padding: theme.spacing.tiny,
    fontFamily: theme.fonts.fontHero,
}

export { bar, link, brand, item }