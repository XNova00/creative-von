import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Box, Button, Grid, Typography } from '@mui/material';
import PageHeadingComponent from '../components/PageHeadingComponent';
import { projectsData } from '../utils/data';
import { Fragment } from 'react';



const ProjectPage = () => {
 
  return (
   <Fragment>
     <Box sx={{
      display: "flex",
      width: "100%",
      height: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      mt: "100px",
      mb: "50px",
      gap: "48px",
    }}>
      <Box sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: "16px", sm: "48px", md: "100px" },
      }}>
        <Typography variant='h1'>PROJECT</Typography>
         <Box>
           <Button variant='contained' size='large'>View All Design</Button>
         </Box>
      </Box>
    <Swiper
      direction={'horizontal'}
      centeredSlides={true}
      slidesPerView={2}
      spaceBetween={30}
      watchSlidesProgress={true}
      mousewheel={true}
      modules={[Mousewheel, Pagination]}
      className="mySwiper"
    >
      
        {projectsData.map((item, index) => (
        <SwiperSlide key={index}>
        <Grid container direction="row" justifyContent="center"
        alignItems="center" sx={{
          border: "2px solid #716040",
          px: "24px",
        }}>
          <Grid item xs={6}>
            <img src={item.image} alt={item.title} /> 
          </Grid>
          <Grid item xs={6}>
          <PageHeadingComponent variant={"h2"}
          pageTitle={item.title}
            subheading={item.text}
          />
          </Grid>
        </Grid>
        </SwiperSlide>
        ))} 
   </Swiper>
    </Box>
   </Fragment>
  )
}

export default ProjectPage