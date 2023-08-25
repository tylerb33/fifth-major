import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';

export default function IntroScreen() {
  return (
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 15,
            height: '100vh',
            margin: 'auto'
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              The Fifth Major
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              A tradition like any other.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            <Link href='/post-score'>
                <Button variant="outlined">Post a Score</Button>
            </Link>
            <Link href='/players-list'>
                <Button variant="outlined">See Leaderboard</Button>
            </Link>
              
            </Stack>
          </Container>
        </Box>
      </main>
  );
}