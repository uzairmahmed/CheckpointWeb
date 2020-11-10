import { theme } from '.'

const container = {
    display: 'flex',
    width: '100%',
    justifyContent:'center',
}

const card = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.accent,
    borderRadius: theme.spacing.radius,
    alignItems: "center",
    margin: theme.spacing.regular,
    padding: theme.spacing.regular,

    boxShadow: theme.spacing.shadow+' '+theme.colors.shadow
}

const icon = {
    margin: 2.5,
}

const button = {
    
    padding: theme.spacing.tiny + " " + theme.spacing.small,

    marginBottom: 0,
    fontFamily: theme.fonts.fontParagraph,
    fontSize: theme.fonts.fontSizeParagraph,
    borderWidth: 0,
}

const leftButton = {
    borderTopLeftRadius: theme.spacing.round,
    borderBottomLeftRadius: theme.spacing.round,
}

const rightButton = {
    borderTopRightRadius: theme.spacing.round,
    borderBottomRightRadius: theme.spacing.round,
}

const middleButton = {
}

export { container, leftButton,rightButton,middleButton, card, icon, button}