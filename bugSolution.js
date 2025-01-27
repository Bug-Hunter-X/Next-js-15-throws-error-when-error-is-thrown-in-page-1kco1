```javascript
//pages/about.js
export async function getServerSideProps() {
  try {
    // Your logic here
    throw new Error('Intentional error for demonstration.');
  } catch (error) {
    return {
      props: {},
      redirect: {
        destination: '/error', // Redirect to a custom error page
        permanent: false,
      },
    };
  }
}
export default function About() {
  return (
    <div>About</div>
  );
}
```
```javascript
//pages/error.js
export default function ErrorPage() {
  return <div>An error occurred. Please try again later.</div>;
}
```