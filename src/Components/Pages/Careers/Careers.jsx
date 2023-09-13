import { Box, Container } from '@mui/material';
import "./careers.scss";
export const Careers = () => {
    return (
        <div className='careers'><div className="Hero-Section">
            <Container sx={{ position: "relative" }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <Box>
                        <img className='arrow-image-1' src='assets/Home/abstract.png' alt='Arrow' />
                        <img className='stars-icons' src='assets/Home/Stars.svg' alt='Stars Icons' />
                    </Box>
                    <Box className="hero-section-content">
                        <div className='hero-content-size' style={{ width: '100%' }}>
                            <div className='hero-top'>Career Openings</div>
                            <br />
                        </div>
                    </Box>
                </Box>
                <Box sx={{ my: '40px' }} className="job-openings">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: 'center',
                            flexDirection: "column",
                            mb: '30px'
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: "18px",
                                lineHeight: "22px",
                                color: "#38CAB5",
                                fontWeight: 500,
                                marginTop: "20px",
                                textAlign: 'center'
                            }}
                        >
                            Come join us
                        </Box>
                        <p
                            style={{
                                marginBottom: "20px",
                                fontSize: "15px",
                                fontFamily: `"Plus Jakarta Sans"`,
                                lineHeight: "24px",
                                textAlign: "center",
                                color: "#111827",
                                fontWeight: 400,
                                maxWidth: "674px"
                            }}
                        >
                            We’re always looking for creative, talented self-starters to join the <span style={{ color: "#38CAB5", fontWeight: 600, }}> Air AppleCart </span> family. Check out our open roles below and fill out an application.

                        </p>
                    </Box>
                    <Box sx={{ height: '500px' }} className="job-openings">
                        <iframe src='https://jobs.orcaloholding.co.uk/jobs/companies/OLblg9eNjG2ALrk8vRB3DadPpE' width='100%' height='100%' no-border title='Jobs Widget' style={{ border: 'none' }}></iframe>
                    </Box>
                </Box>
            </Container>
        </div></div>
    )
}
