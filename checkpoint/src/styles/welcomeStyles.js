import { theme } from '.'

const hero = {
    display: 'flex',
    padding :theme.spacing.regular + " 0px" ,
    minHeight: "75vh",
    width: "100vw",
    justifyContent: "center",
    textAlign:"center",
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