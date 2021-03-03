// Core
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'next-i18next';

// Actions
import { profileActions } from './actions';

// Selectors
import {
  selectViews,
  selectFirstName,
  selectIsPopular,
  selectIsVerified,
} from './selectors';

export const Customer = () => {
  const dispatch = useDispatch()
  const firstName = useSelector(selectFirstName);
  const isPopular = useSelector(selectIsPopular);
  const isVerified = useSelector(selectIsVerified);
  const views = useSelector(selectViews);
  const { t, i18n } = useTranslation();

  const makeProfilePopular = () => {
    dispatch(profileActions.setPopular());
  };

  const changeLocaleToEn = () => {
    i18n.changeLanguage('en');
  };

  const firstNameJSX = (
    <p>Welcome {firstName}</p>
  );

  const popularStatusJSX = (
    <p>Popular Status: {String(isPopular)}</p>
  );

  const verificationStatusJSX = (
    <p>Verification Status: {String(isVerified)}</p>
  );

  const viewsJSX = (
    <p>Views: {views}</p>
  );

  const titleJSX = t('common:title');

  return (
    <>
      <h1>{titleJSX}</h1>
      <button onClick={changeLocaleToEn}>EN</button>
      <button onClick={makeProfilePopular}>Make Customer Popular</button>
      {firstNameJSX}
      {popularStatusJSX}
      {verificationStatusJSX}
      {viewsJSX}
    </>
  )
}