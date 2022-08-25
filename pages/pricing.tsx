import { Fragment } from "react";
import type { NextPage } from 'next'
import {
    AppBar, Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    CssBaseline, GlobalStyles, Grid, Link, Toolbar,
    Typography
} from "@mui/material";
import {Star} from "@mui/icons-material";
import {pages} from "./index";
import {useRouter} from "next/router";

const tiers = [
    {
        title: 'Small Website Hosting',
        price: '30',
        description: [
            '8gb of RAM',
            '2 GB of storage',
            'Email support',
        ],
        buttonText: 'Contact Us',
        buttonVariant: 'outlined',
    },
    {
        title: 'Large Website Hosting',
        subheader: 'Most popular',
        price: '180',
        description: [
            '16gb of RAM',
            '20 GB of storage',
            'Email support',
            'Priority email support',
        ],
        buttonText: 'Contact Us',
        buttonVariant: 'outlined',
    },
    {
        title: 'Consulting Services',
        price: '65',
        description: [

        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];

const Pricing: NextPage = () => {
    const router = useRouter();

    return (
        <Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, userSelect: 'none', cursor: 'pointer' }} onClick={() => router.push("/")}>
                       Color Brown LLC
                    </Typography>
                    <nav>
                        {pages.map((page) => (
                            <Link
                                key={page.href}
                                variant="button"
                                color="text.primary"
                                href={page.href}
                                sx={{ my: 1, mx: 1.5 }}
                            >
                                {page.text}
                            </Link>
                        ))}
                    </nav>
                </Toolbar>
            </AppBar>
            {/* Hero unit */}
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Services
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">

                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            { tier.title === "Consulting Services" ? '/hr' : '/mo'}
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        href={"contact"}
                                        fullWidth
                                        variant={tier.buttonVariant as 'outlined' | 'contained'}
                                    >
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Fragment>
    )
}

export default Pricing;