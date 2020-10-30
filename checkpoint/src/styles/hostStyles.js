import { theme } from '.'

const container = {
    display: 'flex',
    width: '100%',
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

const button = {
    padding: theme.spacing.tiny + " " + theme.spacing.small,
    marginBottom: 0,
    borderRadius: theme.spacing.round,
    fontFamily: theme.fonts.fontParagraph,
    fontSize: theme.fonts.fontSizeParagraph,
    borderColor: theme.colors.accent,
    color: theme.colors.primary,
    backgroundColor: theme.colors.lightAccent,
}

export { container, card, button }