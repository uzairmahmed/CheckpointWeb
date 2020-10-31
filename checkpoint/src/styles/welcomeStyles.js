import { theme } from '.'

const hero = {
    display: 'flex',
    padding :theme.spacing.regular + " 0px" ,
    minHeight: "100vh",
    width: "100vw",
    justifyContent: "center",
    textAlign:"center",
}

const title = {
    fontFamily: theme.fonts.fontHero,
    fontSize: theme.fonts.fontSizeTitle,
    color: theme.fonts.fontColor,
}

const subtitle = {
    fontFamily: theme.fonts.fontParagraph,
    fontSize: theme.fonts.fontSizeSub,
    color: theme.fonts.fontColor,
}

export { hero, title, subtitle }