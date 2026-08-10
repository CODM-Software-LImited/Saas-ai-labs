import img1 from '../../../assets/imgs/services-details-2/Revenue-Cloud/img-1.png';
import checkImg from '../../../assets/imgs/services-details/check.svg';
import img2 from '../../../assets/imgs/services-details-2/Revenue-Cloud/img-3.jpg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
// icons
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import img3 from '../../../assets/imgs/services-details-2/Education-Cloud/img-4.png';
import HeadingContent from '../../ui/HeadingContent/HeadingContent';
import PhaseItems from '../../ui/PhaseItems/PhaseItems';
import ReactAuthCode from '../SSO_CodeSection/reactAuthCode';
import LoginButtonCode from '../SSO_CodeSection/LoginButtonCode';
import SSOSidebar from '../../BlogSidebar/SSOSidebar';

// for images  
import SSOImages from '../../../assets/imgs/services-details-2/SSO/SSO1.png';
import SSOImages1 from '../../../assets/imgs/services-details-2/SSO/SSO2.png';

function SSO_first() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row pt-8">
                        {/* Main content */}
                        {/* left container  */}
                        <section>
                            <div className="container">
                                <div className="row pt-8">
                                    {/* Main content */}
                                    {/* left container */}
                                    <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">
                                        <img
                                           className="rounded-3"
                                           src={SSOImages}
                                           alt="SSO in React"
                                           width={'100%'}
                                       />

                                        <HeadingContent
                                            title="Single Sign-On in React Application"
                                            content={
                                                <>
                                                    <p>
                                                        Single Sign-On, commonly known as <b className="text-black">SSO</b>, allows users to log in once and access multiple applications without repeatedly entering their credentials. In modern web applications, especially enterprise-level platforms, SSO has become an essential part of user authentication.
                                                    </p>

                                                    <p>
                                                        For React applications, SSO is usually implemented using identity providers such as <b className="text-black">Okta, Auth0, Azure Active Directory, Google Workspace, AWS Cognito, or Keycloak</b>. These providers handle authentication securely, while the React application manages the user session, protected routes, and access tokens.
                                                    </p>
                                                </>
                                            }
                                        />

                                        <HeadingContent
                                            title="Authentication Using Microsoft SSO in React Application?"
                                            content={
                                                <>
                                                    <p>
                                                       Authentication Using Microsoft SSO in a React Application means integrating your React application with a centralized authentication provider. Instead of building your own login system from scratch, your application redirects users to a trusted identity provider. Once the user successfully authentication in, the IdP redirects them back to your React application with authentication details.
                                                    </p>

                                                    <p>
                                                        React itself does not provide an authentication mechanism directly. Instead, React works with authentication libraries and identity IdP to manage the login flow, store authentication state, and control access to private pages.
                                                    </p>
                                                </>
                                            }
                                        />

                                        <div className="row">
                                            <div className="col-lg-7">
                                                <div className="d-flex">
                                                    <div className="position-relative icon-shape icon-xxl rounded-3">
                                                        <div className="S_secondLineImg">
                                                            <img src={icon1} alt="Secure Authentication" />
                                                            <span className="customLine"></span>
                                                        </div>
                                                    </div>
                                                    <div className="ps-5">
                                                        <h4 className="font-20">Centralized Authentication</h4>
                                                        <p>
                                                            With SSO, user authentication is managed by a single identity provider. This improves security, reduces password fatigue, and makes it easier for organizations to manage user access across multiple applications.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="d-flex pt-3">
                                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                                        <div className="S_secondLineImg">
                                                            <img src={icon2} alt="Protected Routes" />
                                                            <span className="customLine"></span>
                                                        </div>
                                                    </div>
                                                    <div className="ps-5">
                                                        <h4 className="font-20">Secure Access to React Routes</h4>
                                                        <p>
                                                            React applications can use protected routes to restrict access to authenticated users only. If a user is not logged in, they are redirected to the SSO provider for authentication before accessing private pages.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-5 mt-lg-0 mt-5">
                                                <img
                                                    className="rounded-3"
                                                    src={SSOImages1}
                                                    width={'100%'}
                                                    alt="React SSO Flow"
                                                />
                                            </div>
                                        </div>

                                        <div className="border-bottom pb-3"></div>

                                        <HeadingContent
                                            title="How SSO Works in a React Application"
                                            content={
                                                <>
                                                    <p>
                                                        The SSO flow in a React application usually starts when a user clicks the login button. The React app redirects the user to an identity provider such as Okta, Auth0, Azure AD, or Keycloak.
                                                    </p>

                                                    <p>
                                                        After successful authentication, the identity provider redirects the user back to the React application using a predefined callback URL. The app then receives authentication information such as an ID token, access token, or authorization code.
                                                    </p>

                                                    <p>
                                                        Once the user is authenticated, the React app stores the authentication state and allows access to protected pages. When the user logs out, the session is cleared both from the React app and the identity provider.
                                                    </p>
                                                </>
                                            }
                                        />

                                        <div className="border-bottom pb-3"></div>

                                        <div className="pt-3">
                                            <h4 className='fS26'>Steps to Implement SSO in React</h4>
                                            <ul>
                                                <li className="pb-2">
                                                    <strong>Register your app in Azure first:</strong> Before writing any code, head over to the Azure Portal and create a new App Registration. This is where Azure generates your Client ID and Tenant ID you’ll need these throughout the setup.
                                                </li>
                                                <li className="pb-2">
                                                    <strong>Configure authentication settings:</strong> Once the app is created, add your React app’s URL (for example, http://localhost:3000) as a redirect URI. This tells Azure where to send users after a successful login.
                                                </li>
                                                <li className="pb-2">
                                                    <strong>Install MSAL in your React project:</strong> To handle authentication easily, install <code>@azure/msal-browser</code> and <code>@azure/msal-react</code>. These libraries take care of most of the heavy lifting.
                                                </li>
                                                <li className="pb-2">
                                                    <strong>Set up your MSAL configuration:</strong> Create a config file where you define your Client ID, authority (tenant), and redirect URI. This acts as the core setup for authentication.
                                                </li>
                                                <li className="pb-2">
                                                    <strong>Wrap your app with MsalProvider:</strong> Initialize the MSAL instance and wrap your root component with <code>MsalProvider</code>. This makes authentication available across your entire app.
                                                </li>
                                                <li className="pb-2">
                                                    <strong>Implement the login flow:</strong> Add a login button and trigger <code>loginPopup()</code> or <code>loginRedirect()</code>. At this point, users can sign in using their Azure credentials.
                                                </li>
                                                <li className="pb-2">
                                                    <strong>Handle tokens after login:</strong> Once authenticated, use <code>acquireTokenSilent()</code> to fetch access tokens. These tokens are what you’ll use to securely call your backend APIs.
                                                </li>
                                                <li>
                                                    <strong>Secure your routes and components:</strong> Finally, protect your app by checking if the user is authenticated before rendering certain pages. Hooks like <code>useIsAuthenticated</code> make this pretty straightforward.
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="border-bottom pb-3"></div>

                                        <div className='pt-3'>
                                            <h4 className='fS26'>Example: SSO Login Flow Using Azure AD in React Application</h4>
                                            <p>
                                                Microsoft Azure AD (Entra ID) provides a secure and scalable way to implement SSO in React apps.
                                                After registering your application in Azure, you can use the MSAL (Microsoft Authentication Library)
                                                to handle authentication seamlessly.
                                            </p>

                                            <pre className="bg-light p-3 rounded-3">
                                                {`npm install @azure/msal-browser @azure/msal-react`}
                                            </pre>

                                            <p>
                                                Start by configuring MSAL and wrapping your application with the provider:
                                            </p>

                                            {/* <pre className="bg-light p-3 rounded-3"> */}
                                                <ReactAuthCode/>
                                             {/* </pre> */} 
                                            {/* <p>
                                                Next, implement login and logout functionality inside your components:
                                            </p>  */}

                                            {/* <pre className="bg-light p-3 rounded-3"> */}
                                                <LoginButtonCode/>
                                            {/* </pre> */}

                                        </div>

                                        {/* <div className="border-bottom pb-3"></div> */}

                                        <HeadingContent
                                            title="Why Use SSO in React Application ?"
                                            content={
                                                <>
                                                    <p>
                                                        <b className="text-black">Better User Experience:</b> Users can log in once and access multiple applications without remembering separate credentials.
                                                    </p>

                                                    <p>
                                                        <b className="text-black">Improved Security:</b> SSO providers support advanced security features such as multi-factor authentication, conditional access, and suspicious login detection.
                                                    </p>

                                                    <p>
                                                        <b className="text-black">Centralized User Management:</b> Admins can manage users, roles, permissions, and access policies from a single platform.
                                                    </p>

                                                    <p>
                                                        <b className="text-black">Faster Development:</b> Developers do not need to build authentication, password reset, MFA, and session management from scratch.
                                                    </p>

                                                    <p>
                                                        <b className="text-black">Enterprise Ready:</b> SSO is ideal for SaaS products, internal dashboards, admin portals, and enterprise React applications.
                                                    </p>
                                                </>
                                            }
                                        />

                                        <div className="border-bottom pb-3"></div>

                                        <HeadingContent
                                            title="Best Practices for React Application SSO Implementation"
                                            content={
                                                <>
                                                    <p>
                                                        <b className="text-black">Avoid Storing Tokens in Local Storage:</b> Local storage is vulnerable to XSS attacks. Use secure SDK-managed storage or HTTP-only cookies when possible.
                                                    </p> 

                                                    <p>
                                                        <b className="text-black">Validate Tokens on the Backend:</b> Never trust frontend authentication alone. Backend APIs should always validate access tokens.
                                                    </p>

                                                    <p>
                                                        <b className="text-black">Use HTTPS:</b> Always run authentication flows over HTTPS to protect tokens and sensitive user information.
                                                    </p>

                                                    <p>
                                                        <b className="text-black">Protect Routes Properly:</b> Do not only hide UI elements. Make sure protected pages and backend APIs are secured.
                                                    </p>
                                                </>
                                            }
                                        />

                                        <div className="border-bottom pb-3"></div>

                                        {/* <div className="border-bottom pb-3"></div> */}

                                        <HeadingContent
                                            title="Conclusion"
                                            content={
                                                <>
                                                    <p>
                                                        Implementing SSO in React helps you build a secure, scalable, and user-friendly authentication experience. Instead of managing passwords and sessions manually, your React application can rely on trusted identity providers to handle authentication.
                                                    </p>

                                                    <p>
                                                        Whether you choose Auth0, Okta, Azure AD, Cognito, or Keycloak, the key is to follow modern security practices like Authorization Code Flow with PKCE, protected routes, secure token handling, and backend token validation.
                                                    </p>

                                                    <p>
                                                        For modern SaaS platforms and enterprise applications, SSO is no longer just an optional feature. It is a must-have for security, productivity, and seamless user access.
                                                    </p>
                                                </>
                                            }
                                        />

                                        {/* main div end */}
                                    </div>

                                     <div className="col-lg-4 sidebar">
                                       <SSOSidebar/>
                                     </div>
                                </div>
                            </div>
                        </section>

                    </div>

                </div>

            </section>


        </>
    )
}

export default SSO_first;
