import { Box, Stack, Divider, Typography, Avatar } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Instagram from '@mui/icons-material/Instagram';
import X from '@mui/icons-material/X';
import LinkedIn from '@mui/icons-material/LinkedIn';
import YouTube from '@mui/icons-material/YouTube';

const Contactus = () => {
    return (
        <Box>
            {/* Footer */}
            <Box sx={{ backgroundColor: '#6C4675', width: '100%' }}>
                <Box sx={{ color: 'white', padding: '20px' }}>
                    <Stack direction="row" spacing={2}>
                        <img src="https://lupindiagnostics.com/assets/images/logo-white.png" height="55px" alt="Lupin Diagnostics Logo" />
                    </Stack>
                </Box>
                <Divider variant="middle" sx={{ border: '1px solid white' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '90%' }}>
                    <Box sx={{ padding: '25px' }}>
                        <Typography variant="h5" sx={{ color: 'white', fontSize: '20px', fontWeight: '700', lineHeight: '250%' }}>
                            Book an Appointment
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Book a Home Collection
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Book a Centre Visit
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Create Your Own Package
                        </Typography>
                    </Box>
                    <Box sx={{ padding: '25px' }}>
                        <Typography variant="h5" sx={{ color: 'white', fontSize: '20px', fontWeight: '700', lineHeight: '250%' }}>
                            Blood Tests & Packages
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Lupikavach Health Packages
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Disease | Organ | Habit wise Tests
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Directory of Services(DOS)
                        </Typography>
                    </Box>
                    <Box sx={{ padding: '25px' }}>
                        <Typography variant="h5" sx={{ color: 'white', fontSize: '20px', fontWeight: '700', lineHeight: '250%' }}>
                            For Doctors
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Pathology Core Facilities
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Knowledge Centre
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Doctor V-Logs
                        </Typography>
                    </Box>
                    <Box sx={{ padding: '25px' }}>
                        <Typography variant="h5" sx={{ color: 'white', fontSize: '20px', fontWeight: '700', lineHeight: '250%' }}>
                            Partner With Us
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Lupimitra(Franchise)
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Lupi Plus
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Hospital Laboratory Management
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Retail Laboratory Management
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <Box sx={{ padding: '25px' }}>
                        <Typography variant="h5" sx={{ color: 'white', fontSize: '20px', fontWeight: '700', lineHeight: '250%' }}>
                            About Us
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            About Lupin Diagnostics
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Why Lupin Diagnostics
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Our Management
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Our Doctors
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Accrediations & Certifications
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Compliance
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Newsroom
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Logistics
                        </Typography>
                    </Box>
                    <Box sx={{ padding: '25px' }}>
                        <Typography variant="h5" sx={{ color: 'white', fontSize: '20px', fontWeight: '700', lineHeight: '250%' }}>
                            Contact Us
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Feedback
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: '15px', lineHeight: '250%' }}>
                            Reach out to us
                        </Typography>
                    </Box>
                    <Box sx={{ padding: '25px' }}>
                        <Typography variant="h5" sx={{ color: 'white', fontSize: '20px', fontWeight: '700', lineHeight: '250%' }}>
                            Center Locator
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'white', fontSize: '20px', lineHeight: '250%', fontWeight: '700' }}>
                            Blogs
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'white', fontSize: '20px', lineHeight: '250%', fontWeight: '700' }}>
                            Careers
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'white', fontSize: '20px', lineHeight: '250%', fontWeight: '700' }}>
                            Informative Videos
                        </Typography>
                    </Box>
                </Box>

                <Divider variant="middle" sx={{ border: '1px solid white' }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', padding: '25px', gap: '20px' }}>
                    <Typography sx={{ fontSize: '20px', color: 'white', fontWeight: '700' }}>Terms of Use</Typography>
                    <Typography sx={{ fontSize: '20px', color: 'white', fontWeight: '700' }}>Privacy Policy</Typography>
                    <Typography sx={{ fontSize: '20px', color: 'white', fontWeight: '700' }}>Cookie Policy</Typography>
                    <Typography variant="h5" sx={{ color: 'white' }}>Contact Us: +91 7030 300 400</Typography>
                    <Stack direction="row" spacing={2}>
                        <Avatar variant="rounded" sx={{ backgroundColor: "#9D65A8" }}>
                            <FacebookOutlinedIcon />
                        </Avatar>
                        <Avatar variant="rounded" sx={{ backgroundColor: "#9D65A8" }}>
                            <Instagram />
                        </Avatar>
                        <Avatar variant="rounded" sx={{ backgroundColor: "#9D65A8" }}>
                            <X />
                        </Avatar>
                        <Avatar variant="rounded" sx={{ backgroundColor: "#9D65A8" }}>
                            <LinkedIn />
                        </Avatar>
                        <Avatar variant="rounded" sx={{ backgroundColor: "#9D65A8" }}>
                            <YouTube />
                        </Avatar>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Contactus;
