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
        <Grid container gap={32}>
          {
            USER_DUMMY_DATA?.map((user, index) => {
              return <Grid item key={user?.address} xs={8} sm={4} md={4} lg={3} xl={2}>
                <UserCard data={user} />
              </Grid>
            })
          }
          {
            USER_DUMMY_DATA?.map((user, index) => {
              return <Grid item key={user?.address} xs={8} sm={4} md={4} lg={3} xl={2}>
                <UserCard data={user} />
              </Grid>
            })
          }
          {
            USER_DUMMY_DATA?.map((user, index) => {
              return <Grid item key={user?.address} xs={8} sm={4} md={4} lg={3} xl={2}>
                <UserCard data={user} />
              </Grid>
            })
          }
          {
            USER_DUMMY_DATA?.map((user, index) => {
              return <Grid item key={user?.address} xs={8} sm={4} md={4} lg={3} xl={2}>
                <UserCard data={user} />
              </Grid>
            })
          }
          {
            USER_DUMMY_DATA?.map((user, index) => {
              return <Grid item key={user?.address} xs={8} sm={4} md={4} lg={3} xl={2}>
                <UserCard data={user} />
              </Grid>
            })
          }
          {
            USER_DUMMY_DATA?.map((user, index) => {
              return <Grid item key={user?.address} xs={8} sm={4} md={4} lg={3} xl={2}>
                <UserCard data={user} />
              </Grid>
            })
          }
          {
            USER_DUMMY_DATA?.map((user, index) => {
              return <Grid item key={user?.address} xs={8} sm={4} md={4} lg={3} xl={2}>
                <UserCard data={user} />
              </Grid>
            })
          }
          {
            USER_DUMMY_DATA?.map((user, index) => {
              return <Grid item key={user?.address} xs={8} sm={4} md={4} lg={3} xl={2}>
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
