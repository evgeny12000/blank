import { Helmet } from 'react-helmet-async';

import { LoginView } from 'src/sections/login';

// ----------------------------------------------------------------------

export default function MukaPage() {
  return (
    <>
      <Helmet>
        <title> Muka </title>
      </Helmet>

      <LoginView />
    </>
  );
}
