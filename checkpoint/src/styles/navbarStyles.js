import { theme } from '.'

const bar = {
    width: "100vw",
    padding: theme.spacing.small + " " + theme.spacing.regular,
    justifyContent: "space-between",
    verticalAlign: "center"
}

const brand = {
    fontFamily: theme.fonts.font,
    fontSize: theme.fonts.fontSize,
    fontWeight: theme.fonts.fontWeightLight,
}

const link = {
    padding: "0px"
}

const item = {
    padding: theme.spacing.tiny,
    fontFamily: theme.fonts.font,
    fontWeight: theme.fonts.fontWeightLight,
}

export { bar, link, brand, item }