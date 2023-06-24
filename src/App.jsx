/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeslice';

const App = () => {

  const dispatch = useDispatch()
  const { url } = useSelector((state) => state.home)

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular")
      .then((res) => {
        console.log("Response from api ", res);
        dispatch(getApiConfiguration(res))

      });
  };

  return (
    <>
     App

    </>
  )
}

export default App
