import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import FaceIcon from '@mui/icons-material/Face6Outlined';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import data from '../data/testData.json';

export default function PlayersList() {
  return (
    <main>
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 15,
            height: '100vh',
            margin: 'auto'
          }}
        >
        <List>
          <Grid container>     
            <Grid xs={1} sm={2} md={4}></Grid>
            <Grid xs={10} sm={8} md={4}>
              { data.participants.map((value) => (
                  <ListItem className='player-list-individual-outline'>
                    <Grid container flexGrow={1}>
                      <Grid xs={10}>
                      
                      <Grid container>
                        <Grid xs={2} sx={{display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'}}>
                          <ListItemAvatar
                            sx={{display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <Avatar>
                              <FaceIcon />
                            </Avatar>
                          </ListItemAvatar>
                        </Grid>
                          <Grid xs={2}>
                            <ListItemText
                              sx={{paddingLeft: '20px'}}
                              primary={value.firstName + ' ' + value.lastName}
                              secondary={value.currentScore}
                            />
                          </Grid>
                      </Grid>

                      </Grid>
                      <Grid xs={2} sx={{fontSize: '40px', textAlign:'center'}}>
                        {value.toNetPar}
                      </Grid>
                    </Grid>
                    
                  </ListItem>
              ))}
            </Grid>
            <Grid xs={1} sm={2} md={4}></Grid>
          </Grid>
          <Grid container>  
            {/* Back Home button */}
            <Grid xs={5}></Grid>
            <Grid xs={2} sx={{textAlign: 'center'}}>
              <Link href='/intro-screen'>
                <Button variant="outlined" sx={{marginTop:'20px'}}>Back Home</Button>
              </Link>
            </Grid>
            <Grid xs={5}></Grid>
          </Grid>
        </List>


      </Box>
    </main>
  )
}