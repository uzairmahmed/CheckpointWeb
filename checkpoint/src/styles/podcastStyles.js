import { theme } from '.'

const container = {
    display: 'flex',
    width:'100%',

}

const card = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.lightGray,
    borderRadius: theme.spacing.radius,
    alignItems: "center",
    margin: theme.spacing.regular,
    padding: theme.spacing.regular,
}

const icon = {
    width: "60px",
    height: "60px",
    // margin: theme.spacing.small,
}

export { container, card, icon}