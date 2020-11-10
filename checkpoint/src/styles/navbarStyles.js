import { theme } from '.'

const bar = {
    width: "100vw",
    padding: theme.spacing.small + " 0px",
    justifyContent: "space-between",
    verticalAlign: "center",
    flexDirection:'column'
}

const brand = {
    justifySelf: "center",
    fontFamily: theme.fonts.fontHero,
    fontSize: theme.fonts.fontSizeNav,
}

const brandImg = {
    padding: 0,
    margin: 0,
    maxHeight: "70px",
    // objectFit: 'contain',
    // margin: theme.spacing.small,
}

const link = {
    padding: "0px",
    color: theme.colors.primary
}

const item = {
    padding: theme.spacing.tiny,
    fontFamily: theme.fonts.fontHero,
}

export { bar, link, brand, brandImg, item }