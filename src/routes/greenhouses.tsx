
import React, { ReactElement} from 'react';
import { useParams } from 'react-router-dom';
import { Background } from '../components/Background';
import { Grid, GridElement } from '../components/Grid';
import { Navbar } from '../components/Navigation';
import { Greenhouses } from '../components/Greenhouses';

interface GreenhousePageProps {
}
//Register page does import our form component and is bound to our react routing system
const GreenhousesPage = ({}) : ReactElement => {
    const { uuid } = useParams();
    const { guid } = useParams();
    
    let userID : number = 0
    let greenhouseID : number = 0
    if (uuid != null){
        userID = parseInt(uuid)
    }
    if (guid != null){
        greenhouseID = parseInt(guid)
    }
    return (
    <>
    <Grid layout={'10vw 80vw'} dimension={"'a b'"}>
        <GridElement position='a'>
            <Navbar uuid={uuid}/>
        </GridElement>
        <GridElement position='b'>
            <Greenhouses uuid={userID}/>
        </GridElement>
    </Grid>
    <Background/>
    </>
);
}

  
export { GreenhousesPage }