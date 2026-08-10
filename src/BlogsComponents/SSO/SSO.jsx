import BlogSection from "../../components/BlogSection/BlogSection";
import SEO from "../../SeoData/SEO";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import BlogFormSection from "../ui/BlogFormSection/BlogFormSection";
import SSO_first from "./SSO_first/SSO_first";

function SSO() {
    return (
        <>
            <SEO
                title="Single Sign-On (SSO) in Salesforce: Secure & Seamless Access"
                description="Learn how Single Sign-On (SSO) in Salesforce enhances security, simplifies user access, and enables seamless authentication across multiple applications."
                url="https://codmsoftware.co.uk/blog/salesforce-sso-authentication"
                keywords="Salesforce SSO, Single Sign-On Salesforce, SSO authentication, Salesforce security, identity management Salesforce, OAuth Salesforce, SAML Salesforce, secure login Salesforce, Salesforce authentication methods, enterprise SSO, Salesforce login integration, SSO for CRM, Salesforce identity provider, multi-app authentication, Salesforce access control, React SSO, SSO in React app, React authentication, React OAuth integration, React SAML authentication, JWT authentication React, React login system, secure authentication React, React identity management, frontend authentication React, React protected routes, React auth flow, SSO implementation React, React Salesforce integration, Salesforce SSO React app, OAuth 2.0 React, OpenID Connect React, React login with Salesforce, SPA authentication React, React session management, React secure login flow, React enterprise authentication , codm software limited , salesforce consulting partner"
            />

            <HeaderWithBg
                title="Authentication using SSO"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Blog", link: "/blog" },
                    { label: "Authentication using SSO", color: "purple-text"}
                ]}
            />
            <SSO_first/>
            <BlogFormSection heading="Share Your Thoughts on Authentication using SSO"/>
            <BlogSection />
        </>

    )
}

export default SSO;