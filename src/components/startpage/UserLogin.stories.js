import UserLogIn from './UserLogIn.js';
//import GlobalStyle from '../../GlobalStyle.js';

export default {
  title: 'components/startpage/UserLogIn',
  component: 'UserLogIn',
  // decorators: [
  //   Story => (
  //     <div>
  //       <GlobalStyle />
  //       <Story />
  //     </div>
  //   ),
  // ],
};

export const UserLogInField = () => {
  return <UserLogIn />;
};
