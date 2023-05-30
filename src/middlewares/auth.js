import { Toaster, toast } from 'react-hot-toast';

export const ProtectRoute = ({
  state,
  Navigate,
  redirect,
  message = 'Oops! Some error occured.',
  children,
}) => {
  <Toaster position="top-center" reverseOrder={'false'}></Toaster>;
  if (!state) {
    toast.error(message);
    return <Navigate to={redirect} replace={true} />;
  }
  return children;
};
