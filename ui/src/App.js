import { Box, Grid, Typography } from '@mui/material';
import SoftwareList from './Components/SoftwareList/SoftwareList';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize("G-2YP1NVMREV");

  return (
    <>
      <Grid container spacing={2} justifyContent="center" sx={{ my: 5 }}>
        <Grid item xs={8}>
          <SoftwareList />
        </Grid>

        <Grid item xs={3}>
          <Box>
            <Typography variant="h1" sx={{ fontSize: '1.8em' }} gutterBottom>Software size tool</Typography>
            <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }} gutterBottom>Ever wondered how much storage or how big a download will be? Wonder no more with this list!</Typography>

            <Typography variant="body1" gutterBottom>Select table headings to sort &amp; filter. To submit a new record please <a href="https://github.com/TakesTheBiscuit/software-size-tool/issues/new">use the form on GitHub</a>.</Typography>
            <Typography variant="body1" gutterBottom>The sizes below are observed and accurate - they are not estimates.</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
