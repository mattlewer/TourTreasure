import {useState} from 'react';
import useFirebaseDB from '../../hooks/useFirebaseDB';

const useHelpAndSupportViewModel = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const firebase = useFirebaseDB();

  const deleteAccount = async (password: string) => {
    await firebase.onDeleteUser(password);
  };

  return {
    isDeleting,
    deleteAccount,
    setIsDeleting,
  };
};

export default useHelpAndSupportViewModel;
