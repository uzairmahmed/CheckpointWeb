import { theme } from '.'

const card = {
    margin: theme.spacing.regular + " " + theme.spacing.small,
    padding: theme.spacing.small,
    alignContent: "center",
    backgroundColor: theme.colors.accent,
    borderRadius: theme.spacing.radius,
    borderColor: theme.colors.accent,
    boxShadow: theme.spacing.shadow+' '+theme.colors.shadow

}

const socialCard = {
    padding: theme.spacing.small,
}

const icon = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: theme.spacing.regular,
    marginBottom: theme.spacing.small
}
export { card, icon, socialCard}