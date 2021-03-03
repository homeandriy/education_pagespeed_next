import nookies from 'nookies';

export const getServerSideProps = (context) => {
  const cookies = nookies.get(context);
  const user = 'user' in cookies ? cookies.user : null;

  if (!user) {
    return {
      redirect: {
        destination: '/blog',
      }
    }
  }

  return {
    props: {
      user
    },
  }
}

const Profile = (props) => {
  const {
    user,
  } = props;

  const userJSX = user && (
    <p>Welcome {user}</p>
  );

  return (
    <>
      <h1>Profile Page</h1>
      {userJSX}
    </>
  )
}

export default Profile;