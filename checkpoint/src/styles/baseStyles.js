import { theme } from '.'

const block = {
    display: 'flex',
    padding :theme.spacing.regular + " 0px" ,
    minHeight: "100vh",
    width: "100vw",
    justifyContent: "center",
}

const row = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
}

const container = {
    display: 'flex',
    flexDirection:"column",
    justifyContent:"center",
    alignItems: "center",

}

const header = {
    padding: theme.spacing.tiny,
    fontFamily: theme.fonts.fontHeader,
    fontSize: theme.fonts.fontSizeParagraph,
    color: theme.fonts.fontColor,
}

const paragraph = {
    fontFamily: theme.fonts.fontParagraph,
    fontSize: theme.fonts.fontSizePara,
    color: theme.fonts.fontColor,
    lineHeight:'1.5em'
}

const cardTitle = {
    fontFamily: theme.fonts.fontParagraph,
    fontSize: theme.fonts.fontSizeSub,
    color: theme.colors.primary,
    lineHeight:'1.5em'
}


const profilepicture = {
    width: "150px",
    height: "150px",
    margin: theme.spacing.small,
}

const button = {
    margin: theme.spacing.small,
    padding: theme.spacing.tiny + " " + theme.spacing.small,
    marginBottom:0,
    borderRadius:theme.spacing.round,
    fontFamily: theme.fonts.fontParagraph,
    fontSize: theme.fonts.fontSizeParagraph,
    borderColor: theme.colors.secondary,
    color: theme.colors.secondary,

}


export { block, row, container, header, cardTitle, paragraph, profilepicture, button,  }