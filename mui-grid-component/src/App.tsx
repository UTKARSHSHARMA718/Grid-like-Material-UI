import Grid from './component/GridComponents/Grid/Grid'
import Heading from './component/Heading/Heading';
import UserCard from './component/UserCard/UserCard';
import { USER_DUMMY_DATA } from '../dummyData';
import styles from './AppStyles.module.css'

function App() {

  return (
    <div className={styles.container}>
      <Heading
        heading="Grid view of User"
        subHeading="Data of great people"
      />
      <div className={styles.gridView}>
        <Grid container>
          {
            USER_DUMMY_DATA?.map(user => {
              return <Grid item key={user?.address} cols={2}>
                <UserCard data={user} />
              </Grid>
            })
          }
        </Grid>
      </div>
    </div>
  )
}

export default App
