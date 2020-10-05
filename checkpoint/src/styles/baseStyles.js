import { theme } from '.'

const block = {
    display: 'flex',
    padding :theme.spacing.regular + " 0px" ,
    minHeight: "75vh",
    width: "100vw",
    justifyContent: "center",

}

const row = {
    justifyContent: "center",
    alignItems: "center", 
    backgroundColor:"yellow"
}

const container = {
    display: 'flex',
    flexDirection:"column",
    justifyContent:"center",
    alignItems: "center",
    backgroundColor:"green"

}

const header = {
    padding:theme.spacing.tiny,
    fontFamily: theme.fonts.fontHeader,
    fontSize: theme.fonts.fontSizeParagraph,
    fontWeight: theme.fonts.fontWeight,
    color: theme.fonts.fontColor,
    backgroundColor:"blue"
}

const emphasis = {
    fontFamily: theme.fonts.fontParagraph,
    fontSize: theme.fonts.fontSizeSub,
    color: theme.fonts.fontColor,
    lineHeight:'1.5em'
}

const paragraph = {
    fontFamily: theme.fonts.fontParagraph,
    fontSize: theme.fonts.fontSizePara,
    color: theme.fonts.fontColor,
    lineHeight:'1.5em'
}

const profilepicture = {
    width: "250px",
    height: "250px",
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


export { block, row, emphasis, container, header, paragraph, profilepicture, button,  }